/*global QUnit*/

sap.ui.define([
	"demo/op2/demoOP2/controller/firstOP.controller"
], function (Controller) {
	"use strict";

	QUnit.module("firstOP Controller");

	QUnit.test("I should test the firstOP controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});