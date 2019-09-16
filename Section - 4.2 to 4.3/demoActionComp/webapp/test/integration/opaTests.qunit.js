/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/action/comp/demoActionComp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});