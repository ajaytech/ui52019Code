/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/uploader/collection/demoSAPUI5Uploader/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});