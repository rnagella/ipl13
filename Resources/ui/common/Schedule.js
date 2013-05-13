/**
 * @author ranjith kumar nagella
 */
function ScheduleWindow(title) {
	var self = Ti.UI.createWindow({
		title : title,
		backgroundColor : 'white',
		barColor : 'black'
	});
	self.backgroundImage = '/images/tableview/easycustom/gradientBackground.png';

	var data = [];
	var fileName = 'data/schedule-1.json';
	var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);
	console.log(file);
	//var dir = Titanium.Filesystem.resourcesDirectory;
	//console.log('dir',dir);
	var preParseData = (file.read().text);
	var response = JSON.parse(preParseData);
	var fileName2 = 'data/final-schedule.json';
	var file2 = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName2);
	var preParseData2 = (file2.read().text);
	var response2 = JSON.parse(preParseData2);
	var c = 0;
	for (c; c < response.match.length; c++) {
		var row = Ti.UI.createTableViewRow();
		row.rightImage = '/images/tableview/easycustom/' + response.match[c].image2;
		if (c == 0) {
			row.backgroundImage = '/images/tableview/easycustom/topRow.png';
			row.selectedBackgroundImage = '/images/tableview/easycustom/topRowSelected.jpeg';
		} else if (c < response.match.length) {
			row.backgroundImage = '/images/tableview/easycustom/middleRow.png';
			row.selectedBackgroundImage = '/images/tableview/easycustom/middleRowSelected.png';
		}

		row.leftImage = "/images/tableview/easycustom/" + response.match[c].image1;
		var label = Ti.UI.createLabel({
			text : response.match[c].info1,
			color : '#420404',
			shadowColor : '#FFFFE6',
			shadowOffset : {
				x : 0,
				y : 1
			},
			textAlign : 'left',
			top : 20,
			left : 85,
			width : 'auto',
			height : 'auto',
			font : {
				fontWeight : 'bold',
				fontSize : 16
			}
		});
		if (Titanium.Platform.name == 'android') {
			//label.top = 10;
		}
		row.add(label);

		var label2 = Ti.UI.createLabel({
			text : response.match[c].info2,
			color : '#420404',
			shadowColor : '#FFFFE6',
			textAlign : 'center',
			shadowOffset : {
				x : 0,
				y : 1
			},
			font : {
				fontWeight : 'bold',
				fontSize : 10
			},
			bottom : 22,
			height : 'auto',
			left : 85,
			right : 50
		});
		if (Titanium.Platform.name == 'android') {
			label2.right = 30;
		}
		row.add(label2);
		data[c] = row;
	}

	if (c == response.length) {

		for (var c1 = 0; c1 < response2.Finals.length; c1++) {
			var row = Ti.UI.createTableViewRow();
			row.rightImage = '/images/tableview/easycustom/' + response2.Finals[c1].image2;
			if (c1 < response2.Finals.length) {
				row.backgroundImage = '/images/tableview/easycustom/middleRow.png';
				row.selectedBackgroundImage = '/images/tableview/easycustom/middleRowSelected.png';
			}
			if (c1 == response2.Finals.length - 1) {
				row.backgroundImage = '/images/tableview/easycustom/bottomRow.png';
				row.selectedBackgroundImage = '/images/tableview/easycustom/bottomRowSelected.png';
			}
			row.leftImage = "/images/tableview/easycustom/" + response2.Finals[c1].image1;
			var label = Ti.UI.createLabel({
				text : response2.Finals[c1].info1,
				color : '#420404',
				shadowColor : '#FFFFE6',
				shadowOffset : {
					x : 0,
					y : 1
				},
				textAlign : 'left',
				top : 20,
				left : 85,
				width : 'auto',
				height : 'auto',
				font : {
					fontWeight : 'bold',
					fontSize : 16
				}
			});
			if (Titanium.Platform.name == 'android') {
				label.top = 10;
			}
			row.add(label);

			label.addEventListener('click', function(e) {
				Ti.API.info("clicked on label " + e.source);
			});

			var label2 = Ti.UI.createLabel({
				text : response2.Finals[c1].info2,
				color : '#420404',
				shadowColor : '#FFFFE6',
				textAlign : 'center',
				shadowOffset : {
					x : 0,
					y : 1
				},
				font : {
					fontWeight : 'bold',
					fontSize : 10
				},
				bottom : 22,
				height : 'auto',
				left : 85,
				right : 50
			});
			if (Titanium.Platform.name == 'android') {
				//label2.right = 30;
			}
			row.add(label2);

			data[c + c1] = row;
		}

	}

	var tableview = Titanium.UI.createTableView({
		data : data,
		style : Titanium.UI.iPhone.TableViewStyle.PLAIN,
		backgroundColor : 'transparent',
		maxRowHeight : 100,
		minRowHeight : 100,
		separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE
	});


	self.add(tableview);

	return self;

}

module.exports = ScheduleWindow; 