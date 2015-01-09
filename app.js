$(function() {
	var FED_Chicago_data,
		FED_NY_data,
		FED_West_data,
        datagenerator = FED_Data_Generator,
        startYear = 2012,
        date = new Date(),
		months = (date.getUTCFullYear()-startYear)*12 + date.getMonth(), 
        office = $('.office-select').val(),
        FED_title_enum = {
            'ASSOCIATE': 5,
            'SRASSOCIATE': 4,
            'MGR': 3,
            'SRMGR': 2,
            'DIR': 1
        };
    var createD3Tree = function(data) {
        var width = 900,
            height = 550;
        var cluster = d3.layout.cluster().size([height, width - 160]);
        var diagonal = d3.svg.diagonal().projection(function(d) {
            return [d.y, d.x];
        });
        var elbow = function(d, i) {
            return "M" + d.source.y + "," + d.source.x + "V" + d.target.x + "H" + d.target.y;
        };
        var curve = function(d, i) {
            return "M" + d.source.y + "," + d.source.x + "C" + (d.source.y + (d.target.y - d.source.y) / 5) + "," + (d.source.x) + " " + (d.source.y + (d.target.y - d.source.y) / 5) + "," + d.target.x + " " + (d.target.y) + "," + d.target.x;
        };
        var svg = d3.select(".fedtree").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(40,0)");
        //d3.json(treeJson, function(error, root) {
        var nodes = cluster.nodes(data);
        nodes.forEach(function(d) {
            if (d.title) {
                d.y = FED_title_enum[d.title.toUpperCase()] * 150
            }
        });
        var links = cluster.links(nodes);
        //console.log(nodes);
        //      console.log(links);
        var link = svg.selectAll(".link").data(links).enter().append("path").attr("class", "link").attr("d", curve);
        var node = svg.selectAll(".node").data(nodes).enter().append("g").attr("class", function(d) {
            return "node " + d.title;
        }).attr("transform", function(d) {
            return "translate(" + d.y + "," + d.x + ")";
        })
        node.append("circle").attr("r", 4.5);
        node.append("text").attr("dx", function(d) {
            return d.children ? -8 : 8;
        }).attr("dy", 3).style("text-anchor", function(d) {
            return d.children ? "end" : "start";
        }).text(function(d) {
            return d.name;
        });
        //});
        d3.select(self.frameElement).style("height", height + "px");
    };
    var createFEDTree = function(data, date) {
        if ($('.fedtree').children().length > 0) {
            $('.fedtree').children().remove();
        }
        var root = {
            'name': null,
            'title': null
        };
        var FEDTreeData = FED_Data_Generator.generateTreeData(data, date, root);
        FEDTreeData['name'] = '';
        createD3Tree(FEDTreeData);
    };
    

	//GET DATA
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'http://fed.rockflicker.com/FEDTree/fed-data.json',
		success: function(data){
			var officeMapping = {
	            'Chicago': data.FED_Chicago_data,
	            'New York': data.FED_NY_data,
	            'West Coast': data.FED_West_data
	        };
			$(".slider").slider({
		        value: months,
		        min: 0,
		        max: months,
		        step: 1,
		        slide: function(event, ui) {
		            date = new Date(2012, ui.value);
		            $(".date").text(date.toLocaleDateString("en-US", {
		                'month': 'long',
		                'year': 'numeric'
		            }));
		            createFEDTree(officeMapping[$('.office-select').val()], date.toString());
		        }
		    });
		    $('.office-select').on('change', function() {
		        $('.office-name').text($('.office-select').val());
		        createFEDTree(officeMapping[$('.office-select').val()], date.toString());
		    });
		    //init tree
		    $(".date").text(date.toLocaleDateString("en-US", {
		        'month': 'long',
		        'year': 'numeric'
		    }));
		
			createFEDTree(officeMapping[$('.office-select').val()], date.toString());
		}
	});
    
});