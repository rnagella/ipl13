/**
 * @author ranjith kumar nagella
 */
function RecordsWindow(title) {
	var self = Ti.UI.createWindow({
		title : 'Records',
		barColor : 'black',
		backgroundImage : '/images/tableview/easycustom/gradientBackground.png'
	});
	var data = [];

	var section = Ti.UI.createTableViewSection();
	data.push(section);

	// ROW 1
	var row1 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/mostruns',
		selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE

	});
	row1.backgroundImage = '/images/tableview/easycustom/topRow.png';
	row1.height = 60;
	var image1 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		image : '/images/tableview/easycustom/most-runs.png'

	});

	var item1 = Ti.UI.createLabel({

		text : 'Most Runs',
		font : {
			fontSize : 20
		},
		top : 5,
		left : 10,
		height : 30,
		width : 210
	});
	row1.add(item1);

	var add1 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});
	add1.addEventListener('click', function() {
		Ti.API.log("Adding...");
		row1.backgroundColor = '#390A0E';
		setTimeout(function() {
			delete1.show();
		}, 100);
		add1.hide();
		item1.animate({
			left : 50,
			duration : 100
		});

	});

	section.add(row1);

	// ROW 2
	var row2 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/mostwickets',
		selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	row2.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row2.height = 60;
	var image2 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		image : '/images/tableview/easycustom/most-wickets.png'

	});
	var item2 = Ti.UI.createLabel({

		text : 'Most Wickets',
		font : {
			fontSize : 20
		},
		top : 5,
		left : 10,
		height : 30,
		width : 210
	});
	row2.add(item2);

	var add2 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});

	section.add(row2);

	// ROW 3
	var row3 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/mostsixes',
		selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	row3.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row3.height = 60;

	row3.addEventListener('click', function(e) {
		Ti.API.log(e.source + " click at (" + e.x + "," + e.y + ")");
	});
	var image3 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		image : '/images/tableview/easycustom/most-sixes.png'

	});
	//row3.add(image3);
	var item3 = Ti.UI.createLabel({

		text : 'Most Sixes',
		font : {
			fontSize : 20
		},
		top : 5,
		left : 10,
		height : 30,
		width : 210
	});
	row3.add(item3);

	var add3 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});
	section.add(row3);
	// ROW 4
	var row4 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/mostfours',
		selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	row4.backgroundImage = '/images/tableview/easycustom/bottomRow.png';

	row4.height = 60;

	row4.addEventListener('click', function(e) {
		Ti.API.log(e.source + " click at (" + e.x + "," + e.y + ")");
	});
	var image4 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		image : '/images/tableview/easycustom/most-sixes.png'

	});
	//row4.add(image4);
	var item4 = Ti.UI.createLabel({

		text : 'Most Fours',
		font : {
			fontSize : 20
		},
		top : 5,
		left : 10,
		height : 30,
		width : 210
	});
	row4.add(item4);

	var add4 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});

	section.add(row4);

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

module.exports = RecordsWindow;
