/**
 * @author ranjith kumar nagella
 */
function LiveScore(title) {
	var url = 'http://synd.cricbuzz.com/score-gadget/gadget-scores-feed.xml';
	//'http://static.espncricinfo.com/rss/livescores.xml';//'http://www.cs.odu.edu/~rnagella/ipl13/feeds.xml'
	var self = Ti.UI.createWindow({
		title : title,
		backgroundImage : '/images/tableview/easycustom/gradientBackground.png',
		barColor : 'black'
	});

	var data;
	var tableview;
	var x = 0;
	
	function displayItems(items) {
		var item = 0;
		var title = 0;
		for (var c = 0; c < items.length; c++) {
			item = items.item(c);
			title = item.getElementsByTagName("header").item(0).text;
			score = item.getElementsByTagName("description").item(0).text;
			if (c == 0) {
				var row = Ti.UI.createTableViewRow({
					height : 80,
					selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
				});
				row.backgroundImage = '/images/tableview/easycustom/topRow.png';
				var label = Ti.UI.createLabel({
					text : title,
					left : 10,
					top : 5,
					bottom : 5,
					right : 5
				});
				row.add(label);
				var description = Ti.UI.createLabel({
					text : score,
					left : 10,
					top : 35,
					bottom : 5,
					right : 5
				});
				row.add(description);
				data[x++] = row;
				row.url = item.getElementsByTagName("url-link").item(c).text;
			}
			if (c > 0) {

				var row = Ti.UI.createTableViewRow({
					selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
					height : 80
				});
				row.backgroundImage = '/images/tableview/easycustom/middleRow.png';
				var label = Ti.UI.createLabel({
					text : title,
					left : 10,
					top : 5,
					bottom : 5,
					right : 5
				});
				row.add(label);
				var description = Ti.UI.createLabel({
					text : score,
					left : 10,
					top : 35,
					bottom : 5,
					right : 5
				});
				row.add(description);
				data[x++] = row;
				row.url = item.getElementsByTagName("url-link").item(0).text;
			}
		}
		tableview = Titanium.UI.createTableView({
			style : Titanium.UI.iPhone.TableViewStyle.NONE,
			separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
			data:data,
			backgroundImage:'/images/tableview/easycustom/gradientBackground.png'
		});
		//tableview.data = data;
		self.add(tableview);
		tableview.addEventListener('click', function(e) {
			var w = Ti.UI.createWindow({
				barColor : 'black'
			});
			var wb = Ti.UI.createWebView({
				url : e.row.url
			});
			w.add(wb);
			var b = Titanium.UI.createButton({
				title : 'Close',
				style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.setLeftNavButton(b);
			
			w.open({
				modal : true
			});
			b.addEventListener('click', function() {
				w.close();
				w =null;
			});
		});
	}

	function loadRSSFeed(url) {
		data = [];
		var xhr = Ti.Network.createHTTPClient();
		//"http://static.espncricinfo.com/rss/livescores.xml"
		xhr.open("GET", url);
		xhr.onload = function() {
			try {
				var doc = this.responseXML.documentElement;
				var items = doc.getElementsByTagName("match");
				displayItems(items);

			} catch(E) {
				Ti.API.info(E);
			}
		};

		xhr.send();
	}

	var r = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.REFRESH
	});
	r.addEventListener('click', function() {
		// reload feed
		loadRSSFeed(url);
	});
	self.setRightNavButton(r);

	self.addEventListener('open', function() {
		// load the feed
		loadRSSFeed(url);
	});

	return self;

}

module.exports = LiveScore;
