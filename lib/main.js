var { Hotkey } = require("sdk/hotkeys");
var tabs = require("sdk/tabs");

var viewSourceHotKey = Hotkey({
	combo: "accel-u",
	onPress: function() {
		tabs.open("view-source:" + tabs.activeTab.url);
	}
});
