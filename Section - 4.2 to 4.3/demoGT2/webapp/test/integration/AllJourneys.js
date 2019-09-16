/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"demoGT2/demoGT2/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"demoGT2/demoGT2/test/integration/pages/first",
	"demoGT2/demoGT2/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "demoGT2.demoGT2.view.",
		autoWait: true
	});
});