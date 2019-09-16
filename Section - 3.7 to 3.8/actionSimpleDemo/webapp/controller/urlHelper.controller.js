sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.action.simple.actionSimpleDemo.controller.urlHelper", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.urlHelper
		 */
		onInit: function () {

		},
		
		onCall : function(){
			sap.m.URLHelper.triggerTel("1291280912091");
		},
		onEmail: function(){
			sap.m.URLHelper.triggerEmail("ajay@ui5cn.com","subject demo");
		},
		onSMS : function(){
			sap.m.URLHelper.triggerSms("1291280912091");
		},
		onRedirect : function(){
			sap.m.URLHelper.redirect("www.ui5cn.com",true);
		}
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo.action.simple.actionSimpleDemo.view.urlHelper
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.urlHelper
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.urlHelper
		 */
		//	onExit: function() {
		//
		//	}

	});

});