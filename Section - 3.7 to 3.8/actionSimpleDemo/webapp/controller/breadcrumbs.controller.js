sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.action.simple.actionSimpleDemo.controller.breadcrumbs", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.breadcrumbs
		 */
		onInit: function () {

		},
		onPress: function (oEvent) {
			sap.m.MessageToast.show(oEvent.getSource().getText() + " has been activated");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo.action.simple.actionSimpleDemo.view.breadcrumbs
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.breadcrumbs
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.breadcrumbs
		 */
		//	onExit: function() {
		//
		//	}

	});

});