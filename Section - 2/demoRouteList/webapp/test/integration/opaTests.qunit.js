/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/route/demoRouteList/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});