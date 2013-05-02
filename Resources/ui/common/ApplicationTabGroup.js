function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup({
		
	}),
		HomeWindow = require('ui/common/Home'),
		ScheduleWindow = require('ui/common/Schedule'),
		ScoreBoardWindow = require('ui/common/livescore'),
		PointsWindow = require('ui/common/Points'),
		RecordsWindow = require('ui/common/Records');
		var a ='blue';
	
	self.setBackgroundColor(a);
	//create app tabs
	var home = new HomeWindow(L('Home')),
		schedule = new ScheduleWindow(L('Schedule'))
		scoreboard = new ScoreBoardWindow(L('Feeds'))
		points = new PointsWindow(L('Points'))
		records = new RecordsWindow(L('Records'));
		
	
	var tab1 = Ti.UI.createTab({
		title: L('Home'),
		icon: '/images/KS_nav_ui.png',
		window: home
	});
	home.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('Schedule'),
		icon: '/images/KS_nav_views.png',
		window: schedule
	});
	schedule.containingTab = tab2;
	var tab3 = Ti.UI.createTab({
		title: L('Feeds'),
		icon: '/images/KS_nav_mashup.png',
		window: scoreboard
	});
	scoreboard.containingTab = tab3;
	var tab4 = Ti.UI.createTab({
		title: L('Points'),
		icon: '/images/KS_nav_views.png',
		window: points
	});
	points.containingTab = tab4;
	var tab5 = Ti.UI.createTab({
		title: L('Records'),
		icon: '/images/KS_nav_ui.png',
		window: records
	});
	records.containingTab = tab5;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	self.addTab(tab4);
	self.addTab(tab5);
	
	return self;
};

module.exports = ApplicationTabGroup;
