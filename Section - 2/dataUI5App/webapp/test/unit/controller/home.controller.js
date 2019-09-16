/*global QUnit*/

sap.ui.define([
	"demo/ui5/dataUI5App/controller/home.controller"
], function (Controller) {
	"use strict";

	QUnit.module("home Controller");

	QUnit.test("I should test the home controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});