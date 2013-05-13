/**
 * @author ranjith kumar nagella
 */
function kkr(title) {
	var fileName = "data/kkr-players.json";
	var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);
	var preParseData = (file.read().text);
	var response = JSON.parse(preParseData);
	var self = Ti.UI.createWindow({
		title : 'Most Fours',
		backgroundImage : '/images/tableview/easycustom/gradientBackground.png'

	});
	var data = [];

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
		image : '/images/tableview/kkr-l.png' 

	});
	row1.add(image1);

	var item1 = Ti.UI.createLabel({

		text : 'Kolkata Knight Riders',
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

	for ( c = 0; c < response.length; c++) {

		var row = Ti.UI.createTableViewRow({
			selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE

		});
		if(c==response.length-1)
		row.backgroundImage = '/images/tableview/easycustom/bottomRow.png';
		else
		row.backgroundImage = '/images/tableview/easycustom/middleRow.png';
		row1.height = 90;

		var player = Ti.UI.createLabel({

			text : response[c].kkr,
			font : {
				fontSize : 20
			},
			top : 5,
			left : 10,
			height : 40,
			width : 210
		});
		row.add(player);

		section.add(row);

	}


	var tableview = Titanium.UI.createTableView({
		data : data,
		style : Titanium.UI.iPhone.TableViewStyle.GROUPED,
		backgroundColor : 'transparent',
		separatorColor : '#390A0E'
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

	return self;
}

module.exports = kkr; 