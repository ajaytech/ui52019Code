sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
		"sap/ui/core/UIComponent"
], function (Controller, History,UIComponent) {
	"use strict";

	return Controller.extend("CustomMastertoDetail.CustomMastertoDetail.controller.Detail", {
	getRouter : function () {
			return UIComponent.getRouterFor(this);
		},
		onInit: function () {
			//	debugger;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//	oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);
			oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);
			debugger;
		},
		_onRouteMatched: function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
				path: "/value/"+oArgs.productId+"/",
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},
		_onBindingChange: function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("NotFound");
			}
		},

		// 	_onObjectMatched: function (oEvent) {
		// 		debugger;
		// 		this.getView().bindElement({
		// 			 path: "/value/" + oEvent.getParameter("arguments").productId,
		// 		//	path: "/value" + oEvent.getParameter().arguments.productId,
		// 			model: "namedModel"
		// 		});
		// 		var newdata = oEvent.getParameters().arguments.productId;
		// 		var a = JSON.parse(newdata) ;
		// 		debugger;
		// 	this.getView().byId("Productid").setValue(a.ProductID);
		// this.getView().byId("Productname").setValue(a.ProductName );
		// 	this.getView().byId("QuantityPerUnit").setValue(a.QuantityPerUnit );
		// this.getView().byId("CategoryID").setValue(a.CategoryID );

		// 	},

		handleNavButtonPress: function (evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash == undefined || sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {

				oRouter.navTo("TargetView1", true);
			}
			//	oRouter.navTo("TargetView1");
		},
		
		onShowResume: function (oEvent) {
			var oCtx = this.getView().getBindingContext();

			this.getRouter().navTo("TabDetail", {
				employeeId: oCtx.getProperty("ProductID")
			});

		}

	});

});