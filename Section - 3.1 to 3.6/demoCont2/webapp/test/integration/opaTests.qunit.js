/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/cont2/demoCont2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});