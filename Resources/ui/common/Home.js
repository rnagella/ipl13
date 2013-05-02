/**
 * @author ranjith kumar nagella
 */
function HomeWindow(title) {
	var self = Ti.UI.createWindow({
		title : 'Records',
		barColor : 'black',
		backgroundImage : '/images/tableview/easycustom/gradientBackground.png'
	});
	var data = [];
	var section = Ti.UI.createTableViewSection();
	data.push(section);
	var row1 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/csk'
	});
	row1.backgroundImage = '/images/tableview/easycustom/topRow.png';
	row1.height = 60;
	var image1 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		left : 3,
		image : '/images/tableview/csk-l.png'

	});
	row1.add(image1);

	var item1 = Ti.UI.createLabel({

		text : 'Chennai Super Kings',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
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
	section.add(row1);
	var row2 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/dd'
	});
	row2.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row2.height = 60;
	var image2 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		image : '/images/tableview/dd-l.png'

	});
	row2.add(image2);
	var item2 = Ti.UI.createLabel({

		text : 'Delhi Daredevils',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
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

	var row3 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/sh'
	});
	row3.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row3.height = 60;
	var image3 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		image : '/images/tableview/sh-l.png'

	});
	row3.add(image3);
	var item3 = Ti.UI.createLabel({

		text : 'Sunrisers Hyderabad',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
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
		test : 'ui/common/baseui/kxip'
	});
	row4.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row4.height = 60;
	var image4 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		image : '/images/tableview/kxip-l.png'

	});
	row4.add(image4);
	var item4 = Ti.UI.createLabel({

		text : 'Kings XI Punjab',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
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

	// ROW 5
	var row5 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/kkr'
	});
	row5.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row5.height = 60;

	var image5 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		image : '/images/tableview/kkr-l.png'

	});
	row5.add(image5);
	var item5 = Ti.UI.createLabel({
		text : 'Kolkata Knight Riders',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
		height : 30,
		width : 210
	});
	row5.add(item5);

	var add5 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});

	section.add(row5);

	var tableview = Titanium.UI.createTableView({
		data : data,
		style : Titanium.UI.iPhone.TableViewStyle.GROUPED,
		backgroundColor : 'transparent',
		separatorColor : '#390A0E'
	});
	// ROW 6
	var row6 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/mi'
	});
	row6.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row6.height = 60;

	var image6 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		image : '/images/tableview/mi-l.png'

	});
	row6.add(image6);
	var item6 = Ti.UI.createLabel({

		text : 'Mumbai Indians',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
		height : 30,
		width : 210
	});
	row6.add(item6);

	var add6 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});

	section.add(row6);

	// ROW 7
	var row7 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/pw'
	});
	row7.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row7.height = 60;

	var image7 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		image : '/images/tableview/pw-l.png'

	});
	row7.add(image7);
	var item7 = Ti.UI.createLabel({

		text : 'Pune Warriors India',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
		height : 30,
		width : 210
	});
	row7.add(item7);

	var add7 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});

	section.add(row7);

	// ROW 8
	var row8 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/rr'
	});
	row8.backgroundImage = '/images/tableview/easycustom/middleRow.png';
	row8.height = 60;

	row8.addEventListener('click', function(e) {
		Ti.API.log(e.source + " click at (" + e.x + "," + e.y + ")");
	});
	var image8 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		image : '/images/tableview/rr-l.png'

	});
	row8.add(image8);
	var item8 = Ti.UI.createLabel({

		text : 'Rajasthan Royals',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
		height : 30,
		width : 210
	});
	row8.add(item8);

	var add8 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});

	section.add(row8);

	// ROW 9
	var row9 = Ti.UI.createTableViewRow({
		hasChild : true,
		test : 'ui/common/baseui/rcb'
	});
	row9.backgroundImage = '/images/tableview/easycustom/bottomRow.png';
	row9.height = 60;

	row9.addEventListener('click', function(e) {
		Ti.API.log(e.source + " click at (" + e.x + "," + e.y + ")");
	});
	var image9 = Ti.UI.createImageView({
		height : 40,
		width : 40,
		left : 3,
		image : '/images/tableview/rcb-l.png'

	});
	row9.add(image9);
	var item9 = Ti.UI.createLabel({

		text : 'Royal Challengers Bangalore',
		font : {
			fontSize : 20
		},
		top : 15,
		left : 45,
		height : 30,
		width : 210
	});
	row9.add(item9);

	var add9 = Ti.UI.createButton({
		backgroundImage : '/images/groupedview/addDefault.png',
		height : 27,
		width : 27,
		top : 15,
		right : 10
	});

	section.add(row9);

	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var PlayersWindow = require(e.rowData.test), win = new PlayersWindow({
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

module.exports = HomeWindow; 