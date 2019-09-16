sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.dd.table.demoDragDrop.controller.to", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.dd.table.demoDragDrop.view.to
		 */
		onInit: function () {
			this.getView().setModel(new sap.ui.model.json.JSONModel({"list":[10000]}),"counter");

		},
		
		onDrop : function(oEvt){
			var newRank = 1000;
			var oCtxDrop = oEvt.getParameter("droppedControl").getBindingContext();
			if(typeof oCtxDrop !== "undefined"){
				newRank = oCtxDrop.getProperty("Rank");
			}
			
			if(typeof oEvt.getParameter("dropPosition") === "undefined"){
				return;
			} else if (oEvt.getParameter("dropPosition") === "After"){
				newRank = newRank/2;
			}else{	
				newRank = newRank+1000;
			}
			this.getView().byId("idTableTo").getModel().setProperty("Rank",newRank,oEvt.getParameter("draggedControl").getBindingContext());
		
			
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo.dd.table.demoDragDrop.view.to
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo.dd.table.demoDragDrop.view.to
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo.dd.table.demoDragDrop.view.to
		 */
		//	onExit: function() {
		//
		//	}

	});

});