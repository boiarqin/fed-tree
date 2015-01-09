var FED_Data_Generator = (function ($){
	function parseDate(dateString){
	    return (dateString === 'present' ? Date.now() : Date.parse(dateString));
	};
	function isCurrentPeriod(start, end, currentDate){
	    var startDate = parseDate(start);
	    var endDate = parseDate(end);
	    return (startDate < currentDate && currentDate <= endDate);
	};
	function filterFEDsByDate(data, date){
    	var currentDate = parseDate(date),
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
	    root['children'] = children;
	    return root;
	};
	return {
		generateTreeData : function(data, date, root){
			return createTreeFromData(filterFEDsByDate(data, date), root);
		},
		generatePieData : function(data, date){
			var currentDate = parseDate(date),
		        employees = [];
		    for (var i=0; i < data.length; i++){
		        var person = data[i],
		            titles = person['titles'],
		            title = null;

		        for (var j=0; j < titles.length; j++){
		            if(isCurrentPeriod(titles[j]['dates'][0], titles[j]['dates'][1], currentDate)){
		                title = titles[j]['title'];
		            }
		        }
		        if (title){
		            employees.push({'name': person['name'], 'title': title});
		        }
		    }
			
			return [
				{'label' : 'associate', 'value' : _.where(employees, {'title' : 'associate'}).length},
				{'label' : 'srassociate', 'value' : _.where(employees, {'title' : 'srassociate'}).length},
				{'label' : 'mgr', 'value' : _.where(employees, {'title' : 'mgr'}).length},
				{'label' : 'srmgr', 'value' : _.where(employees, {'title' : 'srmgr'}).length},
				{'label' : 'dir', 'value' : _.where(employees, {'title' : 'dir'}).length}
				];
		}
	}
})(jQuery);