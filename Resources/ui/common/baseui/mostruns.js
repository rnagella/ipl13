/**
 * @author ranjith kumar nagella
 */
function MostRuns(title) {
	console.log('in table view');
	var url = 'http://www.cs.odu.edu/~rnagella/ipl13/most-runs.json';
	var self = Ti.UI.createWindow({
		title : 'Most Runs',
		backgroundImage : '/images/tableview/easycustom/gradientBackground.png'
	});
	var data = [];

	function mostRunsData(response) {
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

			text : 'Sachin-Tendulkar',
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

			text : "- " + response.mostruns[0].Team,
			font : {
				fontSize : 20
			},
			top : 20,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(teamValue);

		var runsLabel = Ti.UI.createLabel({

			text : 'Runs',
			font : {
				fontSize : 20
			},
			top : 50,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(runsLabel);
		var runsValue = Ti.UI.createLabel({

			text : "- " + response.mostruns[0].Runs,
			font : {
				fontSize : 20
			},
			top : 50,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(runsValue);
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

			text : "- " + response.mostruns[0].Matches,
			font : {
				fontSize : 20
			},
			top : 80,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(matchesValue);

		var ballsLabel = Ti.UI.createLabel({

			text : 'Balls',
			font : {
				fontSize : 20
			},
			top : 110,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(ballsLabel);
		var ballsValue = Ti.UI.createLabel({

			text : "- " + response.mostruns[0].Balls,
			font : {
				fontSize : 20
			},
			top : 110,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(ballsValue);

		var strikeRateLabel = Ti.UI.createLabel({

			text : 'SR',
			font : {
				fontSize : 20
			},
			top : 140,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(strikeRateLabel);
		var strikeRateValue = Ti.UI.createLabel({

			text : "- " + response.mostruns[0].SR,
			font : {
				fontSize : 20
			},
			top : 140,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(strikeRateValue);

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

			text : "- " + response.mostruns[0].Avg,
			font : {
				fontSize : 20
			},
			top : 170,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(avgValue);
		var highScoreLabel = Ti.UI.createLabel({

			text : 'HS',
			font : {
				fontSize : 20
			},
			top : 200,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(highScoreLabel);
		var highScoreValue = Ti.UI.createLabel({

			text : "- " + response.mostruns[0].HS,
			font : {
				fontSize : 20
			},
			top : 200,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(highScoreValue);

		var hundredsLabel = Ti.UI.createLabel({

			text : '100s',
			font : {
				fontSize : 20
			},
			top : 230,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(hundredsLabel);
		var hundredsValue = Ti.UI.createLabel({

			text : "- " + response.mostruns[0].Hundreds,
			font : {
				fontSize : 20
			},
			top : 230,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(hundredsValue);

		var fiftysLabel = Ti.UI.createLabel({

			text : '50s',
			font : {
				fontSize : 20
			},
			top : 260,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(fiftysLabel);
		var fiftysValue = Ti.UI.createLabel({

			text : "- " + response.mostruns[0].Fiftys,
			font : {
				fontSize : 20
			},
			top : 260,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(fiftysValue);

		var foursLabel = Ti.UI.createLabel({
			text : '4s',
			font : {
				fontSize : 20
			},
			top : 290,
			left : 10,
			height : 30,
			width : 210
		});
		row2.add(foursLabel);
		var foursValue = Ti.UI.createLabel({
			text : "- " + response.mostruns[0].Fours,
			font : {
				fontSize : 20
			},
			top : 290,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(foursValue);

		var sixesLabel = Ti.UI.createLabel({
			text : '6s',
			font : {
				fontSize : 20
			},
			top : 320,
			left : 10,
			height : 30,
			width : 210,
			bottom : 20
		});
		row2.add(sixesLabel);
		var sixesValue = Ti.UI.createLabel({
			text : "- " + response.mostruns[0].Sixes,
			font : {
				fontSize : 20
			},
			top : 320,
			left : 100,
			height : 30,
			width : 210
		});
		row2.add(sixesValue);

		section.add(row2);
		row2.backgroundImage = '/images/tableview/easycustom/bottomRow.png';

		var tableview = Titanium.UI.createTableView({
			data : data,
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
				mostRunsData(response);

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

module.exports = MostRuns;
