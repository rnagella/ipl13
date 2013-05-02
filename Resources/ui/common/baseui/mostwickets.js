/**
 * @author ranjith kumar nagella
 */
function MostWickets(title) {
	var url = 'http://www.cs.odu.edu/~rnagella/ipl13/most-wickets.json';
	var self = Ti.UI.createWindow({
		title : 'Most Wickets',
		backgroundImage : '/images/tableview/easycustom/gradientBackground.png'
	});
	var data = [];
	function mostWicketsData(response) {
		var section = Ti.UI.createTableViewSection();
		data.push(section);

		// ROW 1
		var row1 = Ti.UI.createTableViewRow({

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

			text : response.mostwickets[0].Player,
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

		});
		row2.backgroundImage = '/images/tableview/easycustom/bottomRow.png';
		var teamLabel = Ti.UI.createLabel({

			text : 'Team',
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

			text : "- " + response.mostwickets[0].Team,
			font : {
				fontSize : 20
			},
			top : 20,
			left : 110,
			height : 30,
			width : 210
		});
		row2.add(teamValue);

		var wicketsLabel = Ti.UI.createLabel({

			text : 'Wickets',
			font : {
				fontSize : 20
			},
			top : 50,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(wicketsLabel);
		var wicketsValue = Ti.UI.createLabel({

			text : "- " + response.mostwickets[0].Wickets,
			font : {
				fontSize : 20
			},
			top : 50,
			left : 110,
			height : 30,
			width : 210
		});
		row2.add(wicketsValue);
		var matchesLabel = Ti.UI.createLabel({

			text : 'Matches',
			font : {
				fontSize : 20
			},
			top : 80,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(matchesLabel);
		var matchesValue = Ti.UI.createLabel({

			text : "- " + response.mostwickets[0].Matches,
			font : {
				fontSize : 20
			},
			top : 80,
			left : 110,
			height : 30,
			width : 210
		});
		row2.add(matchesValue);

		var oversLabel = Ti.UI.createLabel({

			text : 'Overs',
			font : {
				fontSize : 20
			},
			top : 110,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(oversLabel);
		var oversValue = Ti.UI.createLabel({

			text : "- " + response.mostwickets[0].Overs,
			font : {
				fontSize : 20
			},
			top : 110,
			left : 110,
			height : 30,
			width : 210
		});
		row2.add(oversValue);

		var economyLabel = Ti.UI.createLabel({

			text : 'Economy',
			font : {
				fontSize : 20
			},
			top : 140,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(economyLabel);
		var economyValue = Ti.UI.createLabel({

			text : "- " + response.mostwickets[0].Economy,
			font : {
				fontSize : 20
			},
			top : 140,
			left : 110,
			height : 30,
			width : 210
		});
		row2.add(economyValue);

		var avgLabel = Ti.UI.createLabel({

			text : 'Avg',
			font : {
				fontSize : 20
			},
			top : 170,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(avgLabel);
		var avgValue = Ti.UI.createLabel({

			text : "- " + response.mostwickets[0].Avg,
			font : {
				fontSize : 20
			},
			top : 170,
			left : 110,
			height : 30,
			width : 210
		});
		row2.add(avgValue);
		var strikeRateLabel = Ti.UI.createLabel({

			text : 'SR',
			font : {
				fontSize : 20
			},
			top : 200,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(strikeRateLabel);
		var strikeRateValue = Ti.UI.createLabel({

			text : "- " + response.mostwickets[0].SR,
			font : {
				fontSize : 20
			},
			top : 200,
			left : 110,
			height : 30,
			width : 210
		});
		row2.add(strikeRateValue);

		var bbiLabel = Ti.UI.createLabel({

			text : 'BBI',
			font : {
				fontSize : 20
			},
			top : 230,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(bbiLabel);
		var bbiValue = Ti.UI.createLabel({

			text : "- " + response.mostwickets[0].BBI,
			font : {
				fontSize : 20
			},
			top : 230,
			left : 110,
			height : 30,
			width : 210,
			bottom : 10
		});
		row2.add(bbiValue);

		section.add(row2);

		var tableview = Titanium.UI.createTableView({
			data : data,
			separatorColor : '#390A0E',
			style : Titanium.UI.iPhone.TableViewStyle.NONE,
			backgroundImage : '/images/tableview/easycustom/gradientBackground.png',
			separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE
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
				mostWicketsData(response);

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

module.exports = MostWickets;
