/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/uploader/collection/demoSAPUI5Uploader/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});