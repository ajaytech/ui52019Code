sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.action.simple.actionSimpleDemo.controller.menuItem", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.menuItem
		 */
		onInit: function () {

		},
		
		onPressMenuItemOpn : function(evt){
		var oBtn = evt.getSource();
		
		if(!this._menu){
			this._menu = sap.ui.xmlfragment("demo.action.simple.actionSimpleDemo.fragment.menuItem",this);
		}
	

		
		this._menu.open(false,oBtn , sap.ui.core.Popup.Dock.BeginTop,sap.ui.core.Popup.Dock.BeginBottom,oBtn);
		
		},
		
		handleMenuItemPress : function(oEvt){
			
			console.log(oEvt.getParameter("item").getText());
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo.action.simple.actionSimpleDemo.view.menuItem
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.menuItem
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo.action.simple.actionSimpleDemo.view.menuItem
		 */
		//	onExit: function() {
		//
		//	}

	});

});