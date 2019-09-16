/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/tiles/basic/demoTilesBasic/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});