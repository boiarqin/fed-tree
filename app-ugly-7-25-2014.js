$(function() {	
	var FED_Chicago_data = [
		{'name' : 'Dan Edwards',
	    'titles' : [{'title': 'srmgr', 'dates' : ['Jun 2014', 'present']}],
	    'cm' : [{'name' : 'Scott Lutzow', 'dates' :['Apr 2014','present']}]},
		{'name' : 'Vince Moore',
	    'titles' : [{'title': 'associate', 'dates' : ['Jul 2014', 'present']}],
	    'cm' : [{'name' : 'Scott Lutzow', 'dates' :['Jul 2014','present']}]},
	    {'name' : 'Mike Barnum',
	    'titles' : [{'title': 'mgr', 'dates' : ['Apr 2014', 'present']}],
	    'cm' : [{'name' : 'Scott Lutzow', 'dates' :['Apr 2014','present']}]},
	    {'name' : 'Jeremy Treadwell',
	    'titles' : [{'title': 'associate', 'dates' : ['Jan 2014', 'present']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Jan 2014','May 2014']},{'name' : 'Nick Lemke', 'dates' :['May 2014','present']}]},
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
	    'titles' : [{'title': 'associate', 'dates' : ['Feb 2013', 'Jul 2014']},{'title': 'srassociate', 'dates' : ['Jul 2014', 'present']}],
	    'cm' : [{'name' : 'Erik Johnsen', 'dates' :['Feb 2013','Jun 2013']},{'name' : 'Jeremy Rawls', 'dates' :['Jun 2013','Sep 2013']},{'name' : 'Mike Brault', 'dates' :['Sep 2013','present']}]},
	    {'name' : 'Mike Duve',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Jan 2013', 'present']}],
	    'cm' : [{'name' : 'Rob O\'Brien', 'dates' :['Jan 2013','present']}]},
	    {'name' : 'Adam Freid',
	    'titles' : [{'title': 'associate', 'dates' : ['Mar 2010', 'Jul 2012']},{'title': 'srassociate', 'dates' : ['Jul 2012', 'present']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Mar 2010','May 2014']},{'name' : 'Paul Rossi', 'dates' :['May 2014','present']}]},
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
	    'titles' : [{'title': 'associate', 'dates' : ['Aug 2012', 'Jun 2014']}],
	    'cm' : [{'name' : 'Jeremy Rawls', 'dates' :['Aug 2012', 'Sep 2013']}, {'name' : 'Mike Brault', 'dates' :['Sep 2013','Jun 2014']}]},
	    {'name' : 'Lee Allen',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Aug 2008', 'Jul 2011']},{'title': 'mgr', 'dates' : ['Jul 2011', 'Jul 2012']},{'title': 'srmgr', 'dates' : ['Jul 2012', 'May 2014']}],
	    'cm' : [{'name' : 'Joe Morrow', 'dates' :['Aug 2008','Mar 2013']},{'name' : 'Scott Lutzow', 'dates' :['Sep 2013','May 2014']}]},
	    {'name' : 'Scott Lutzow',
	    'titles' : [{'title': 'dir', 'dates' : ['Sep 2013', 'present']}]},
	    {'name' : 'Paul Rossi',
	    'titles' : [{'title': 'associate', 'dates' : ['Apr 2010', 'Jul 2011']},{'title': 'srassociate', 'dates' : ['Jul 2011', 'Jul 2013']},{'title': 'mgr', 'dates' : ['Jul 2013', 'present']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Apr 2010','May 2014']},{'name' : 'Rob O\'Brien', 'dates' :['May 2014','present']}]},
	    {'name' : 'Dacia James',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Aug 2010', 'Dec 2013']}],
	    'cm' : [{'name' : 'Mike Brault', 'dates' :['Aug 2010','Dec 2013']}]},
	    {'name' : 'Rob O\'Brien',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Aug 2011', 'Jul 2012']},{'title': 'mgr', 'dates' : ['Jul 2012', 'Jul 2013']},{'title': 'srmgr', 'dates' : ['Jul 2013', 'present']}],
	    'cm' : [{'name' : 'Joe Morrow', 'dates' :['Aug 2011' ,'Mar 2013']},{'name' : 'Scott Lutzow', 'dates' :['Sep 2013' ,'present']}]},        
	    {'name' : 'Caroline Bowden',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Jun 2008', 'Jul 2013']},{'title': 'mgr', 'dates' : ['Jul 2013', 'present']}],
	    'cm' : [{'name' : 'Paul Karlik', 'dates' :['Oct 2010' ,'Jun 2014']},{'name' : 'Rob O\'Brien', 'dates' :['Jun 2014' ,'present']}]},
	    {'name' : 'Mike Brault',
	    'titles' : [{'title': 'mgr', 'dates' : ['Apr 2011', 'present']}],
	    'cm' : [{'name' : 'Paul Karlik', 'dates' :['Apr 2011' ,'Jul 2014']},{'name' : 'Scott Lutzow', 'dates' :['Jul 2014' ,'present']}]},
	    {'name' : 'Paul Karlik',
	    'titles' : [{'title': 'mgr', 'dates' : ['Oct 2010', 'Jul 2012']},{'title': 'srmgr', 'dates' : ['Jul 2012', 'Jul 2014']}],
	    'cm' : [{'name' : 'Joe Morrow', 'dates' :['Oct 2010' ,'Mar 2013']},{'name' : 'Scott Lutzow', 'dates' :['Sep 2013' ,'Jul 2014']}]},
	    {'name' : 'Jeremy Rawls',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Apr 2012', 'Jul 2013']},{'title': 'mgr', 'dates' : ['Jul 2013', 'Sep 2013']}],
	    'cm' : [{'name' : 'Mike Brault', 'dates' :['Apr 2012' ,'Sep 2013']}]},
	    {'name' : 'Adan Altamira',
	    'titles' : [{'title': 'associate', 'dates' : ['Jan 2012', 'Jul 2013']},{'title': 'srassociate', 'dates' : ['Jul 2013', 'present']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Jan 2012' ,'May 2014']},{'name' : 'Mike Barnum', 'dates' :['May 2014' ,'present']}]},
	    {'name' : 'Andrew Pulley',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Nov 2013', 'present']}],
	    'cm' : [{'name' : 'Caroline Bowden', 'dates' :['Nov 2013' ,'present']}]},
	    {'name' : 'Erik Johnsen',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Jan 2012', 'Jun 2013']}],
	    'cm' : [{'name' : 'Mike Brault', 'dates' :['Jan 2012' ,'Jun 2013']}]},
	    {'name' : 'Gary Kuo',
	    'titles' : [{'title': 'associate', 'dates' : ['Jun 2012', 'Jun 2013']}],
	    'cm' : [{'name' : 'Caroline Bowden', 'dates' :['Jun 2012' ,'Jun 2013']}]},
		{'name' : 'Joe Morrow',
	    'titles' : [{'title': 'srmgr', 'dates' : ['Feb 2008', 'Mar 2013']}]},
		{'name' : 'Stephen Mahadeo',
	    'titles' : [{'title': 'associate', 'dates' : ['Dec 2011', 'May 2013']}],
	    'cm' : [{'name' : 'Mike Brault', 'dates' :['Dec 2011' ,'May 2013']}]},
		{'name' : 'Bill Corrigan',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Dec 2011', 'Sep 2013']}],
	    'cm' : [{'name' : 'Lee Allen', 'dates' :['Dec 2011' ,'Sep 2013']}]},
	/*
		{'name' : 'Vlad Kiperman',
	    'titles' : [{'title': 'mgr', 'dates' : ['Oct 2011', 'Jan 2013']}],
	    'cm' : [{'name' : 'Paul Karlik', 'dates' :['Oct 2011' ,'Jan 2013']}]},
		{'name' : 'Marques Woodson',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Mar 2012', 'Jan 2013']}],
	    'cm' : [{'name' : 'Vlad Kiperman', 'dates' :['Mar 2012' ,'Jan 2013']}]},
	
		{'name' : 'John Flickinger',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Apr 2010', 'Nov 2012']}],
	    'cm' : [{'name' : '', 'dates' :['Dec 2011' ,'Apr 2013']}]},
		{'name' : 'Seth Pychewicz',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Mar 2012', 'Feb 2013']}],
	    'cm' : [{'name' : 'Vlad Kiperman', 'dates' :['Mar 2012' ,'Jan 2013']}]},
*/
	],
	FED_NY_data = [
	    {'name' : 'Gary Kuo',
	    'titles' : [{'title': 'associate', 'dates' : ['Jun 2013', 'Jul 2014']},{'title': 'srassociate', 'dates' : ['Jul 2014', 'present']}],
	    'cm' : [{'name' : 'Joe Fraga', 'dates' :['Jul 2013' ,'present']}]},	
	    {'name' : 'Joe Fraga',
	    'titles' : [{'title': 'mgr', 'dates' : ['Jul 2013', 'Jul 2014']},{'title': 'srmgr', 'dates' : ['Jul 2014', 'present']}]},
		{'name' : 'Melissa Lofton',
	    'titles' : [{'title': 'associate', 'dates' : ['Nov 2013', 'present']}],
	    'cm' : [{'name' : 'Joe Fraga', 'dates' :['Nov 2013' ,'present']}]},
		{'name' : 'Tamara Bowman',
	    'titles' : [{'title': 'mgr', 'dates' : ['Feb 2014', 'present']}],
	    'cm' : [{'name' : 'Joe Fraga', 'dates' :['Feb 2014' ,'present']}]},
	],
	FED_West_data = [
		{'name' : 'Scott Couch',
	    'titles' : [{'title': 'srmgr', 'dates' : ['May 2011', 'present']}]},
	    {'name' : 'Sterling Breckenridge',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Apr 2011', 'Jul 2014']},{'title': 'mgr', 'dates' : ['Jul 2014', 'present']}],
	    'cm' : [{'name' : 'Scott Couch', 'dates' :['May 2011' ,'present']}]},	
	    
		{'name' : 'Marc Greenfield',
	    'titles' : [{'title': 'mgr', 'dates' : ['Jan 2014', 'present']}],
	    'cm' : [{'name' : 'Scott Couch', 'dates' :['Jan 2014' ,'present']}]},
		{'name' : 'Josh McDannel',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Jul 2012', 'Jul 2014']},{'title': 'mgr', 'dates' : ['Jul 2014', 'present']}],
	    'cm' : [{'name' : 'Adam Clark', 'dates' :['Mar 2013' ,'present']}]},
		{'name' : 'Wes Morishita',
	    'titles' : [{'title': 'associate', 'dates' : ['Oct 2011', 'present']}],
	    'cm' : [{'name' : 'Matt Stevens', 'dates' :['Oct 2011' ,'present']}]},
		{'name' : 'Matt Stevens',
	    'titles' : [{'title': 'mgr', 'dates' : ['Jan 2012', 'present']}],
	    'cm' : [{'name' : 'Scott Couch', 'dates' :['Jan 2012' ,'present']}]},
		{'name' : 'Katrina Williams',
	    'titles' : [{'title': 'associate', 'dates' : ['Apr 2012', 'present']}],
	    'cm' : [{'name' : 'Josh McDannel', 'dates' :['Apr 2012' ,'present']}]},
		{'name' : 'Gary Wilson',
	    'titles' : [{'title': 'mgr', 'dates' : ['Feb 2011', 'present']}],
	    'cm' : [{'name' : 'Scott Couch', 'dates' :['May 2011' ,'present']}]},
		{'name' : 'Greg Raab',
	    'titles' : [{'title': 'srassociate', 'dates' : ['Sep 2011', 'present']}],
	    'cm' : [{'name' : 'Gary Wilson', 'dates' :['Sep 2011' ,'present']}]},
		{'name' : 'Fendy Santoso',
	    'titles' : [{'title': 'associate', 'dates' : ['Feb 2014', 'present']}],
	    'cm' : [{'name' : 'Marc Greenfield', 'dates' :['Feb 2014' ,'present']}]},
		{'name' : 'Adam Clark',
	    'titles' : [{'title': 'mgr', 'dates' : ['Mar 2013', 'Jul 2014']},{'title': 'srmgr', 'dates' : ['Jul 2014', 'present']}],
	    'cm' : [{'name' : 'Scott Couch', 'dates' :['Mar 2013' ,'present']}]},
	],
	datagenerator = FED_Data_Generator,
	startYear = 2012,
	months = 30,
    date = new Date(2012, months),
	office = $('.office-select').val(),
	officeMapping = {'Chicago': FED_Chicago_data, 'New York': FED_NY_data,'West Coast' : FED_West_data},
	FED_title_enum = {
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
			
		var elbow = function(d, i) {
		  return "M" + d.source.y + "," + d.source.x
		      + "V" + d.target.x + "H" + d.target.y;
		};
		var curve = function(d, i) {
		  return "M" + d.source.y + "," + d.source.x
		      + "C" + (d.source.y + (d.target.y-d.source.y)/5) + "," + (d.source.x)
				+ " " + (d.source.y + (d.target.y-d.source.y)/5) + "," + d.target.x
				+ " " + (d.target.y) + "," + d.target.x;
		};

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
	          .attr("d", curve);
      
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

	var createFEDTree = function(data, date){
	    if ($('.fedtree').children().length > 0){
	        $('.fedtree').children().remove();
	    }
		var root = {'name': null, 'title': null};
	
	    var FEDTreeData = FED_Data_Generator.generateTreeData(data, date, root);
		FEDTreeData['name']='';
		createD3Tree(FEDTreeData);
	};

    $( ".slider" ).slider({
      value:months,
      min: 0,
      max: months,
      step: 1,
      slide: function( event, ui ) {
        date = new Date(2012, ui.value);
        $( ".date" ).text(date.toLocaleDateString("en-US", {'month':'long', 'year':'numeric'}));
        createFEDTree(officeMapping[$('.office-select').val()], date.toString());
      }
    });

	$('.office-select').on('change', function(){
		$('.office-name').text($('.office-select').val());
		createFEDTree(officeMapping[$('.office-select').val()], date.toString());
	});
	
	
	//init tree
    $(".date").text(date.toLocaleDateString("en-US", {'month':'long', 'year':'numeric'}));
    createFEDTree(officeMapping[$('.office-select').val()], date.toString());
	
});