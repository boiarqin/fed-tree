var FED_Data_Generator = (function ($){
	function parseDate(dateString){
		var dateEnum = {'Jan':0, 'Feb':1, 'Mar':2, 'Apr':3, 'May':4, 'Jun':5, 'Jul':6, 'Aug':7, 'Sep':8, 'Oct':9, 'Nov':10, 'Dec':11};
		if (dateString === 'present'){
			return Date.now();
		}else{
			var dateStringSplit = dateString.split(' ');
			var newDate = new Date(dateStringSplit[1], dateEnum[dateStringSplit[0]]);
			return newDate.valueOf();
			
		}
		//remove for FF/Safari compat
		//return (dateString === 'present' ? Date.now() : Date.parse(dateString));
	};
	function isCurrentPeriod(start, end, currentDate){
	    var startDate = parseDate(start);
	    var endDate = parseDate(end);
	    return (startDate <= currentDate && currentDate < endDate);
	};
	function filterFEDsByDate(data, date){
    	var currentDate = Date.parse(date),
	        employees = [];
	    for (var i=0; i < data.length; i++){
	        var person = data[i],
	            titles = person['titles'],
	            cms = person['cm'],
	            title = null,
	            cm = null;
	        for (var j=0; j < titles.length; j++){
	            if(isCurrentPeriod(titles[j]['dates'][0], titles[j]['dates'][1], currentDate)){
	                title = titles[j]['title'];

	                if (cms){
	                    for (var k=0; k < cms.length; k++){
	                        if(isCurrentPeriod(cms[k]['dates'][0], cms[k]['dates'][1], currentDate)){
	                            cm = cms[k]['name'];
	                        }
	                    }
	                }
	            }
	        }
	        if (title){
	            employees.push({'name': person['name'], 'title': title, 'cm': cm});
	        }
	    }
	    return employees;
	};
	function createTreeFromData(data, root){
	    var children = []
	    for (var i=0; i < data.length; i++){
	        person = data[i];
	        if (person['cm'] == root['name']){
	            //remove person from data
	            var newdata = _.without(data, person);
	            person = createTreeFromData(newdata, person);
	            children.push(person);
	        }
	    }
		//sort children
		children = _.sortBy(children, function(child){
			var FED_title_enum = {
	            'ASSOCIATE': 5,
	            'SRASSOCIATE': 4,
	            'MGR': 3,
	            'SRMGR': 2,
	            'DIR': 1
	        };
			return 5-FED_title_enum[child['title'].toUpperCase()];
		});
	    root['children'] = children;
	    return root;
	};
	return {
		generateTreeData : function(data, date, root){
			return createTreeFromData(filterFEDsByDate(data, date), root);
		},
		generatePieData : function(data, date){
			var feds = filterFEDsByDate(data, date);
			
			return [
				{'label' : 'associate', 'value' : _.where(feds, {'title' : 'associate'}).length},
				{'label' : 'srassociate', 'value' : _.where(feds, {'title' : 'srassociate'}).length},
				{'label' : 'mgr', 'value' : _.where(feds, {'title' : 'mgr'}).length},
				{'label' : 'srmgr', 'value' : _.where(feds, {'title' : 'srmgr'}).length},
				{'label' : 'dir', 'value' : _.where(feds, {'title' : 'dir'}).length}
				];
		}
	}
})(jQuery);