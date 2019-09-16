sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
], function (Controller,History) {
	"use strict";

	return Controller.extend("CustomMastertoDetail.CustomMastertoDetail.controller.TabDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf CustomMastertoDetail.CustomMastertoDetail.view.TabDetail
		 */
		onInit: function () {

		},
	onNavBack: function (evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash == undefined || sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {

				oRouter.navTo("Detail", true);
			}
			//	oRouter.navTo("TargetView1");
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf CustomMastertoDetail.CustomMastertoDetail.view.TabDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf CustomMastertoDetail.CustomMastertoDetail.view.TabDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf CustomMastertoDetail.CustomMastertoDetail.view.TabDetail
		 */
		//	onExit: function() {
		//
		//	}

	});

});