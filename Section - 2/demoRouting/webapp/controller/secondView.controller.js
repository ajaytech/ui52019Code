sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller,oHistory) {
	"use strict";

	return Controller.extend("demo.ui5route.demoRouting.controller.secondView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.ui5route.demoRouting.view.secondView
		 */
		onInit: function () {

		},
		onBack: function (oEvent) {
			
			var oHistoryHash = oHistory.getInstance().getPreviousHash();
			if(oHistoryHash !== undefined ){
				window.history.go(-1);
			}else{
				
				sap.ui.core.UIComponent.getRouterFor(this).navTo("RouteFirstView");                               
			}
		
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo.ui5route.demoRouting.view.secondView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo.ui5route.demoRouting.view.secondView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo.ui5route.demoRouting.view.secondView
		 */
		//	onExit: function() {
		//
		//	}

	});

});