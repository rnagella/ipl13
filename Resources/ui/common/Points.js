/**
 * @author ranjith kumar nagella
 */
function PointsWindow(title) {
	var url = 'http://www.cs.odu.edu/~rnagella/ipl13/points.json';
	var self = Ti.UI.createWindow({
		title : title,
		barColor : 'black'
	});
	self.backgroundImage = '/images/tableview/easycustom/gradientBackground.png';
	var data;
	var response;
	var tableView = Titanium.UI.createTableView({
			width : 340,
			separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
			style : Titanium.UI.iPhone.TableViewStyle.GROUPED,
			separatorColor : '#390A0E',
			backgroundColor:'transparent'
		});
	function displayJSONTable(response) {
		var row = Titanium.UI.createTableViewRow({
			backgroundImage : '/images/tableview/easycustom/topRow.png',
			height : 45,
			selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
		});

		var team = Titanium.UI.createLabel({
			text : 'Team',
			width : 'auto',
			textAlign : 'left',
			left : 20,
			font : {
				fontSize : 18,
				fontFamily : 'Lucida Grande-Bold'
			}
		});
		var played = Titanium.UI.createLabel({
			text : 'P',
			width : 'auto',
			textAlign : 'left',
			left : 90,
			font : {
				fontSize : 17,
				fontFamily : 'Lucida Grande-Bold'
			}
		});
		var wins = Titanium.UI.createLabel({
			text : 'W',
			width : 'auto',
			textAlign : 'left',
			left : 120,
			font : {
				fontSize : 15,
				fontFamily : 'Lucida Grande-Bold'
			}
		});
		var loss = Titanium.UI.createLabel({
			text : 'L',
			width : 'auto',

			textAlign : 'left',
			left : 150,
			font : {
				fontSize : 15,
				fontFamily : 'Lucida Grande-Bold'
			}
		});
		var netrate = Titanium.UI.createLabel({
			text : 'NR',
			width : 'auto',
			textAlign : 'left',

			left : 180,
			font : {
				fontSize : 15,
				fontFamily : 'Lucida Grande-Bold'
			}
		});
		var points = Titanium.UI.createLabel({
			text : 'Pts',
			width : 'auto',
			textAlign : 'left',
			left : 210,
			font : {
				fontSize : 15,
				fontFamily : 'Lucida Grande-Bold'
			}
		});
		var runrate = Titanium.UI.createLabel({
			text : 'RR',
			width : 'auto',
			textAlign : 'center',

			left : 247,
			font : {
				fontSize : 15,
				fontFamily : 'Lucida Grande-Bold'
			}
		});

		row.add(team);
		row.add(played);
		row.add(wins)
		row.add(loss);
		row.add(netrate);
		row.add(points);
		row.add(runrate);
		data.push(row);

		for ( i = 0 ,l=response.points.length; i < l ; i++) {
			var row = Titanium.UI.createTableViewRow({
				height : 45,
				selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
			});
			if(1==(l-1))
			row.backgroundImage = '/images/tableview/easycustom/bottomRow.png';
			else
			row.backgroundImage = '/images/tableview/easycustom/middleRow.png';
			var image1 = Ti.UI.createImageView({
				height : 'auto',
				width : 'auto',
				left : 5,
				image : '/images/tableview/' + response.points[i].icon

			});
			var team = Titanium.UI.createLabel({
				text : response.points[i].state,
				width : 'auto',
				textAlign : 'left',
				left : 30,
				font : {
					fontSize : 17,
					fontFamily : 'Lucida Grande-Bold'
				}

			});
			var played = Titanium.UI.createLabel({
				text : response.points[i].played,
				width : 'auto',
				textAlign : 'left',
				left : 90,
			});
			var wins = Titanium.UI.createLabel({
				text : response.points[i].win,
				width : 'auto',
				textAlign : 'left',
				left : 120,
			});
			var loss = Titanium.UI.createLabel({
				text : response.points[i].loss,
				width : 'auto',
				textAlign : 'left',
				left : 150,
			});
			var netrate = Titanium.UI.createLabel({
				text : response.points[i].netrate,
				width : 'auto',
				textAlign : 'left',
				left : 180,
			});
			var points = Titanium.UI.createLabel({
				text : response.points[i].points,
				width : 'auto',
				textAlign : 'left',
				left : 210,
			});
			var runrate = Titanium.UI.createLabel({
				text : response.points[i].runrate,
				width : 'auto',
				textAlign : 'left',
				left : 245,
			});
			row.add(image1);
			row.add(team);
			row.add(played);
			row.add(wins)
			row.add(loss);
			row.add(netrate);
			row.add(points);
			row.add(runrate);
			data.push(row);

		}
		
		tableView.data=data;
		self.add(tableView);
	}

	function loadJSONFeed(url) {
		data = [];
		console.log('hey, i am in load rss feed');

		var xhr = Ti.Network.createHTTPClient();
		xhr.open("GET", url);
		xhr.onload = function() {
			try {
				response = JSON.parse(this.responseText);
				displayJSONTable(response);

			} catch(E) {

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

module.exports = PointsWindow;
