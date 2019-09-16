sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.route.demoRouteList.controller.detailProduct", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.route.demoRouteList.view.detailProduct
		 */
		 
		onInit: function () {
			
		this.key = ["overview","moreInfo","price","patner"];
		var oDataSelKey = {
			"selectedKey":this.key[0]
		};
		this.getView().setModel(new sap.ui.model.json.JSONModel(oDataSelKey),"detailSelected");

		var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
		
		oRoute.getRoute("detailPage").attachMatched(this._attachRouteMatch,this);

		
		},
		
		_attachRouteMatch : function(oEvt){
		
			var oArg = oEvt.getParameter("arguments");
			var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
		
			this.getView().bindElement({
				path:"/Products("+oArg.productID+")/"
			});
			
		if(oArg["?query"] !== undefined){
			
			if(oArg["?query"].tab === "patner"){
				
			//	oRoute.getTargets().display("supplierDetailTab");
				oRoute.getTargets().display("supplierDetailTab");
				
			}else{
			
			this.getView().getModel("detailSelected").setProperty("/selectedKey",oArg["?query"].tab);
			}
			
			
		}else{
			oRoute.navTo("detailPage",{
				productID: oArg.productID,
				query:{
					tab:this.key[0]
				}
				
			});
			
		}
			
				
		},
		
		onClickPatner : function(oEvt){
			
			var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			var productId = this.getView().getBindingContext().sPath.split('(')[1].split(')')[0];
			var tabSelected = oEvt.getParameter("selectedKey");
			
			oRoute.navTo("detailPage",{
				productID: productId,
				query:{
					tab:tabSelected
				}
				
			});
			

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo.route.demoRouteList.view.detailProduct
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo.route.demoRouteList.view.detailProduct
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo.route.demoRouteList.view.detailProduct
		 */
		//	onExit: function() {
		//
		//	}

	});

});