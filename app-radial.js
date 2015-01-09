$(function() {	
	var FED_Chicago_data = [
	    {'name' : 'Mike Barnum',
	    'titles' : [{'title': 'mgr', 'dates' : ['Apr 2014', 'present']}],
	    'cm' : [{'name' : 'Scott Lutzow', 'dates' :['Apr 2014','present']}]},
	    {'name' : 'Jeremy Treadwell',
	    'titles' : [{'title': 'associate', 'dates' : ['Jan 2014', 'present']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Jan 2014','present']}]},
	    {'name' : 'Bill Fulara',
	    'titles' : [{'title': 'associate', 'dates' : ['Mar 2014', 'present']}],
	    'cm' : [{'name' : 'Mike Brault', 'dates' :['Mar 2014','present']}]},
	    {'name' : 'Bobby Stitt',
	    'titles' : [{'title': 'associate', 'dates' : ['Mar 2014', 'present']}],
	    'cm' : [{'name' : 'Caroline Bowden', 'dates' :['Mar 2014','present']}]},
	    {'name' : 'Mat Dominguez',
	    'titles' : [{'title': 'associate', 'dates' : ['Jun 2013', 'present']}],
	    'cm' : [{'name' : 'Adam Freid', 'dates' :['Jun 2013','present']}]},
	    {'name' : 'Mark Brouch',
	    'titles' : [{'title': 'associate', 'dates' : ['Jun 2013', 'present']}],
	    'cm' : [{'name' : 'Paul Rossi', 'dates' :['Jun 2013','present']}]},
	    {'name' : 'Alex Muench',
	    'titles' : [{'title': 'associate', 'dates' : ['Jun 2013', 'present']}],
	    'cm' : [{'name' : 'Rob O\'Brien', 'dates' :['Jun 2013','present']}]},
	    {'name' : 'Tina Lam',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Apr 2013', 'present']}],
	    'cm' : [{'name' : 'Rob O\'Brien', 'dates' :['Apr 2013','Oct 2013']},{'name' : 'Caroline Bowden', 'dates' :['Oct 2013','present']}]},
	    {'name' : 'Boiar Qin',
	    'titles' : [{'title': 'associate', 'dates' : ['Feb 2013', 'present']}],
	    'cm' : [{'name' : 'Erik Johnsen', 'dates' :['Feb 2013','Apr 2013']},{'name' : 'Jeremy Rawls', 'dates' :['Apr 2013','Sept 2013']},{'name' : 'Mike Brault', 'dates' :['Sept 2013','present']}]},
	    {'name' : 'Mike Duve',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Jan 2013', 'present']}],
	    'cm' : [{'name' : 'Rob O\'Brien', 'dates' :['Jan 2013','present']}]},
	    {'name' : 'Adam Freid',
	    'titles' : [{'title': 'associate', 'dates' : ['Mar 2010', 'Jul 2012']},{'title': 'srassociate', 'dates' : ['Jul 2012', 'present']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Mar 2010','present']}]},
	    {'name' : 'Nick Gentile',
	    'titles' : [{'title': 'associate', 'dates' : ['Jun 2012', 'present']}],
	    'cm' : [{'name' : 'Dacia James', 'dates' :['Jun 2012','Oct 2013']},{'name' : 'Paul Rossi', 'dates' :['Oct 2013','present']}]},
	    {'name' : 'Carney Claunch',
	    'titles' : [{'title': 'associate', 'dates' : ['Aug 2012', 'Nov 2013']},{'title': 'srassociate', 'dates' : ['Nov 2013', 'present']}],
	    'cm' : [{'name' : 'Rob O\'Brien', 'dates' :['Aug 2012','present']}]},
	    {'name' : 'Teddy Huff',
	    'titles' : [{'title': 'associate', 'dates' : ['Aug 2012', 'present']},{'title': 'srassociate', 'dates' : ['Nov 2013', 'present']}],
	    'cm' : [{'name' : 'Paul Rossi', 'dates' :['Aug 2012','present']}]},
	    {'name' : 'Jake Larson',
	    'titles' : [{'title': 'associate', 'dates' : ['Jun 2012', 'Nov 2013']},{'title': 'srassociate', 'dates' : ['Nov 2013', 'present']}],
	    'cm' : [{'name' : 'Dacia James', 'dates' :['Jun 2012','Nov 2013']},{'name' : 'Mike Brault', 'dates' :['Nov 2013','present']}]},
	    {'name' : 'Nick Lemke',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Feb 2014', 'present']}],
	    'cm' : [{'name' : 'Rob O\'Brien', 'dates' :['Feb 2014','present']}]},
	    {'name' : 'Molly Wells',
	    'titles' : [{'title': 'associate', 'dates' : ['Aug 2012', 'present']}],
	    'cm' : [{'name' : 'Jeremy Rawls', 'dates' :['Aug 2012', 'Sept 2013']}, {'name' : 'Mike Brault', 'dates' :['Sept 2013','present']}]},
	    {'name' : 'Lee Allen',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Aug 2008', 'Jul 2011']},{'title': 'mgr', 'dates' : ['Jul 2011', 'Jul 2012']},{'title': 'srmgr', 'dates' : ['Jul 2012', 'present']}],
	    'cm' : [{'name' : 'Joe Morrow', 'dates' :['Aug 2008','Mar 2013']},{'name' : 'Scott Lutzow', 'dates' :['Sept 2013','present']}]},
	    {'name' : 'Scott Lutzow',
	    'titles' : [{'title': 'dir', 'dates' : ['Sept 2013', 'present']}]},
	    {'name' : 'Paul Rossi',
	    'titles' : [{'title': 'associate', 'dates' : ['Apr 2010', 'Jul 2011']},{'title': 'srassociate', 'dates' : ['Jul 2011', 'Jul 2013']},{'title': 'mgr', 'dates' : ['Jul 2013', 'present']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Apr 2010','present']}]},
	    {'name' : 'Dacia James',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Aug 2010', 'Nov 2013']}],
	    'cm' : [{'name' : 'Mike Brault', 'dates' :['Aug 2010','present']}]},
	    {'name' : 'Rob O\'Brien',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Aug 2011', 'Jul 2012']},{'title': 'mgr', 'dates' : ['Jul 2012', 'Jul 2013']},{'title': 'srmgr', 'dates' : ['Jul 2013', 'present']}],
	    'cm' : [{'name' : 'Joe Morrow', 'dates' :['Aug 2011' ,'Mar 2013']},{'name' : 'Scott Lutzow', 'dates' :['Sept 2013' ,'present']}]},        
	    {'name' : 'Caroline Bowden',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Jun 2008', 'Jul 2013']},{'title': 'mgr', 'dates' : ['Jul 2013', 'present']}],
	    'cm' : [{'name' : 'Paul Karlik', 'dates' :['Oct 2010' ,'present']}]},
	    {'name' : 'Mike Brault',
	    'titles' : [{'title': 'mgr', 'dates' : ['Apr 2011', 'present']}],
	    'cm' : [{'name' : 'Paul Karlik', 'dates' :['Apr 2011' ,'present']}]},
	    {'name' : 'Paul Karlik',
	    'titles' : [{'title': 'mgr', 'dates' : ['Oct 2010', 'Jul 2012']},{'title': 'srmgr', 'dates' : ['Jul 2012', 'present']}],
	    'cm' : [{'name' : 'Joe Morrow', 'dates' :['Oct 2010' ,'Mar 2013']},{'name' : 'Scott Lutzow', 'dates' :['Sept 2013' ,'present']}]},
	    {'name' : 'Jeremy Rawls',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Apr 2012', 'Jun 2013']},{'title': 'mgr', 'dates' : ['Jun 2013', 'Sept 2013']}],
	    'cm' : [{'name' : 'Mike Brault', 'dates' :['Apr 2012' ,'Sept 2013']}]},
	    {'name' : 'Adan Altamira',
	    'titles' : [{'title': 'associate', 'dates' : ['Jan 2012', 'Jul 2013']},{'title': 'srassociate', 'dates' : ['Jul 2013', 'present']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Jan 2012' ,'present']}]},
	    {'name' : 'Andrew Pulley',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Nov 2013', 'present']}],
	    'cm' : [{'name' : 'Caroline Bowden', 'dates' :['Nov 2013' ,'present']}]},
	    {'name' : 'Erik Johnsen',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Jan 2012', 'Jun 2013']}],
	    'cm' : [{'name' : 'Mike Brault', 'dates' :['Jan 2012' ,'Jun 2013']}]},
	    {'name' : 'Gary Kuo',
	    'titles' : [{'title': 'associate', 'dates' : ['Jun 2012', 'present']}],
	    'cm' : [{'name' : 'Caroline Bowden', 'dates' :['Jun 2012' ,'Jun 2013']},{'name' : 'Joe Fraga', 'dates' :['Jun 2013' ,'present']}]},
		{'name' : 'Joe Morrow',
	    'titles' : [{'title': 'srmgr', 'dates' : ['Feb 2008', 'Mar 2013']}]},
	];

	var FED_title_enum = {
	    'ASSOCIATE': 5,
	    'SRASSOCIATE': 4,
	    'MGR': 3,
	    'SRMGR': 2,
	    'DIR': 1
	};



	var createD3Tree = function(data){
	    var width = 900,
	        height = 550;

	    var cluster = d3.layout.cluster()
	        .size([height, width - 160]);

	    var diagonal = d3.svg.diagonal()
	        .projection(function(d) { return [d.y, d.x]; });

	    var svg = d3.select(".fedtree").append("svg")
	        .attr("width", width)
	        .attr("height", height)
	      .append("g")
	        .attr("transform", "translate(40,0)");


	    //d3.json(treeJson, function(error, root) {
	      var nodes = cluster.nodes(data);
	      nodes.forEach(function(d) {if (d.title){d.y = FED_title_enum[d.title.toUpperCase()] * 150}});
      
	      var links = cluster.links(nodes);
	      //console.log(nodes);
	      //      console.log(links);
	      var link = svg.selectAll(".link")
	          .data(links)
	        .enter().append("path")
	          .attr("class", "link")
	          .attr("d", diagonal);
      
	      var node = svg.selectAll(".node")
	          .data(nodes)
	          .enter().append("g")
	          .attr("class", function(d){return "node " + d.title;})
	          .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

	      node.append("circle")
	          .attr("r", 4.5);

	      node.append("text")
	          .attr("dx", function(d) { return d.children ? -8 : 8; })
	          .attr("dy", 3)
	          .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
	          .text(function(d) { return d.name; });
	    //});

	    d3.select(self.frameElement).style("height", height + "px");
	};

	var createRadialD3Tree = function(data){
		var diameter = 960;

		var tree = d3.layout.tree()
		    .size([360, diameter / 2 - 120])
		    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

		var diagonal = d3.svg.diagonal.radial()
		    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

		var svg = d3.select(".fedtree").append("svg")
		    .attr("width", diameter)
		    .attr("height", diameter - 150)
		  .append("g")
		    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

		//d3.json("flare.json", function(error, root) {
		  var nodes = tree.nodes(data),
		      links = tree.links(nodes);
			nodes.forEach(function(d) {if (d.title){d.y = (FED_title_enum[d.title.toUpperCase()] -1) * 75}});
		  var link = svg.selectAll(".link")
		      .data(links)
		    .enter().append("path")
		      .attr("class", "link")
		      .attr("d", diagonal);

		  var node = svg.selectAll(".node")
		      .data(nodes)
		    .enter().append("g")
		      .attr("class", function(d){return "node " + d.title;})
		      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

		  node.append("circle")
		      .attr("r", 4.5);

		  node.append("text")
		      .attr("dy", ".31em")
		      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		      .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
		      .text(function(d) { return d.name; });
		//});

		d3.select(self.frameElement).style("height", diameter - 150 + "px");
		
	};

	var createFEDTree = function(date){
	    if ($('.fedtree').children().length > 0){
	        $('.fedtree').children().remove();
	    }
		var root = {'name': null, 'title': null};
	
	    var FEDTreeData = FED_Data_Generator.generateTreeData(FED_Chicago_data, date, root);
		FEDTreeData['name']='';
		createRadialD3Tree(FEDTreeData);
	};

    $( ".slider" ).slider({
      value:27,
      min: 0,
      max: 27,
      step: 1,
      slide: function( event, ui ) {
        var date = new Date(2012, ui.value);
        $( ".date" ).text(date.toLocaleDateString("en-US", {'month':'long', 'year':'numeric'}));
        createFEDTree(date.toString());
      }
    });
	var datagenerator = FED_Data_Generator,
    date = new Date(2012, $(".slider").slider("value"));
    $(".date").text(date.toLocaleDateString("en-US", {'month':'long', 'year':'numeric'}));
    createFEDTree(date.toString());

});