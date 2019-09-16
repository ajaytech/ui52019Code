sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.route.demoRouteList.controller.second", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.route.demoRouteList.view.second
		 */
		onInit: function () {
			
		var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
		
		oRoute.getRoute("secondPage").attachMatched(this._attachRouteMatch,this);

		},
		
		_attachRouteMatch : function(oEvt){
			
			var sPath = oEvt.getParameter("arguments");
			var oView = this.getView();
			if(sPath !== ""){
				this.getView().bindElement({
					path:"/"+sPath.productID+"/",
					event:{
						dataRequested: function(){
							oView.setBusy(true);
						},
						dataReceived:function(){
							oView.setBusy(false);
						},
						
					}
					
					});
			}
			
			
		},
		onDetailLinkClick : function(oEvt){
			var productId = this.getView().getBindingContext().getProperty("ProductID");
			
			var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRoute.navTo("detailPage",{
				productID: productId
			});
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo.route.demoRouteList.view.second
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo.route.demoRouteList.view.second
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo.route.demoRouteList.view.second
		 */
		//	onExit: function() {
		//
		//	}

	});

});