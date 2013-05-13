/**
 * @author ranjith kumar nagella
 */
function MostSixes(title) {
	var url = 'http://www.cs.odu.edu/~rnagella/ipl13/most-sixes.json';
	//var fileName="most-sixes.json";
	//var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, fileName);
	//var preParseData = (file.read().text);
	//var response = JSON.parse(preParseData);
	var self = Ti.UI.createWindow({
		title : 'Most Sixes',
		backgroundImage : '/images/tableview/easycustom/gradientBackground.png'
	});
	var data = [];
	function mostSixesData(response) {

		var section = Ti.UI.createTableViewSection();
		data.push(section);

		// ROW 1
		var row1 = Ti.UI.createTableViewRow({
			selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE

		});
		row1.backgroundImage = '/images/tableview/easycustom/topRow.png';
		row1.height = 90;
		var image1 = Ti.UI.createImageView({
			height : 60,
			width : 60,
			left : 10,
			image : '/images/tableview/Sachin-Tendulkar.png'

		});
		row1.add(image1);

		var item1 = Ti.UI.createLabel({

			text : response.mostsixes[0].Player,
			font : {
				fontSize : 20
			},
			top : 20,
			left : 80,
			height : 30,
			width : 210
		});
		row1.add(item1);

		section.add(row1);

		var row2 = Ti.UI.createTableViewRow({
			selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE

		});
		row2.backgroundImage = '/images/tableview/easycustom/bottomRow.png';
		var teamLabel = Ti.UI.createLabel({

			text : 'Team - ',
			font : {
				fontSize : 20
			},
			top : 20,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(teamLabel);
		var teamValue = Ti.UI.createLabel({

			text : response.mostsixes[0].Team,
			font : {
				fontSize : 20
			},
			top : 20,
			left : 80,
			height : 30,
			width : 210
		});
		row2.add(teamValue);

		var sixesLabel = Ti.UI.createLabel({

			text : 'Sixes - ',
			font : {
				fontSize : 20
			},
			top : 50,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(sixesLabel);
		var sixesValue = Ti.UI.createLabel({

			text : response.mostsixes[0].Sixes,
			font : {
				fontSize : 20
			},
			top : 50,
			left : 80,
			height : 30,
			width : 210,
			bottom : 10
		});
		row2.add(sixesValue);

		section.add(row2);

		var tableview = Titanium.UI.createTableView({
			data : data,
			separatorColor : '#390A0E',
			style : Titanium.UI.iPhone.TableViewStyle.NONE,
			//backgroundImage : '/images/tableview/easycustom/gradientBackground.png',
			separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
			backgroundColor:'transparent'
		});
		tableview.addEventListener('click', function(e) {
			if (e.rowData.test) {
				var ExampleWindow = require(e.rowData.test), win = new ExampleWindow({
					title : e.rowData.title,
					containingTab : self.containingTab,
					tabGroup : self.tabGroup
				});
				if (Ti.Platform.name == "android") {

				} else {
					win.backgroundColor = "#fff";
					win.barColor = "#111";
				}

				self.containingTab.open(win, {
					animated : true
				});
			}
		});
		self.add(tableview);
	}

	function loadJSONFeed(url) {
		data = [];
		console.log('hey, i am in load rss feed');

		var xhr = Ti.Network.createHTTPClient();
		//"http://static.espncricinfo.com/rss/livescores.xml"
		xhr.open("GET", url);
		xhr.onload = function() {
			try {
				response = JSON.parse(this.responseText);
				mostSixesData(response);

			} catch(E) {
				alert(E);
			}
		};

		xhr.send();
	}

	var r = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.REFRESH
	});
	r.addEventListener('click', function() {
		// reload feed
		loadJSONFeed(url);
	});
	self.setRightNavButton(r);

	self.addEventListener('open', function() {
		// load the feed
		loadJSONFeed(url);
	});

	return self;
}

module.exports = MostSixes;
