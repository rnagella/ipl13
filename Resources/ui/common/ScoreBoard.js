/**
 * @author ranjith kumar nagella
 */
function ScoreBoardWindow(title) {
	var url = 'http://www.espncricinfo.com/rss/content/story/feeds/586733.xml';//'http://static.espncricinfo.com/rss/livescores.xml';//'http://www.cs.odu.edu/~rnagella/ipl13/feeds.xml'
	var self = Ti.UI.createWindow({
		title : title,
		backgroundImage : '/images/tableview/easycustom/gradientBackground.png',
		barColor : 'black'
	});
	
	var data;
	var tableview;
	var x = 0;
	function displayItems(items) {
		console.log('in display function');

		var item = 0;
		var title = 0;
		//var items = doc.getElementsByTagName("item");
		
		for (var c = 0; c < items.length; c++) {
			if (c == 0) {
				item = items.item(c);
			    title = item.getElementsByTagName("title").item(0).text;
				var row = Ti.UI.createTableViewRow({
					height : 80
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
				data[x++] = row;
				row.url = item.getElementsByTagName("link").item(0).text;
			}
			if (c > 0) {
				 item = items.item(c);
				 title = item.getElementsByTagName("title").item(0).text;
				var row = Ti.UI.createTableViewRow({
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
				data[x++] = row;
				row.url = item.getElementsByTagName("link").item(0).text;
			}
		}
		tableview = Titanium.UI.createTableView({
			data : data,
			style : Titanium.UI.iPhone.TableViewStyle.NONE,
			backgroundImage:'/images/tableview/easycustom/gradientBackground.png',
			separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE
			//backgroundColor : 'transparent',
		});
		self.add(tableview);
		tableview.addEventListener('click', function(e) {
			var w = Ti.UI.createWindow({
				//title : doctitle,
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
			b.addEventListener('click', function() {
				w.close();
			});
			w.open({
				modal : true
			});
		});
	}

	function loadRSSFeed(url) {
		data  =[];
		console.log('hey, i am in load rss feed');
		

		var xhr = Ti.Network.createHTTPClient();
		//"http://static.espncricinfo.com/rss/livescores.xml"
		xhr.open("GET", url);
		xhr.onload = function() {
			try {
				var doc = this.responseXML.documentElement;
				var items = doc.getElementsByTagName("item");
				//var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
				
				displayItems(items);

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
		loadRSSFeed(url);
	});
	self.setRightNavButton(r);

	self.addEventListener('open', function() {
		// load the feed
		loadRSSFeed(url);
	});

	return self;

}

module.exports = ScoreBoardWindow;
