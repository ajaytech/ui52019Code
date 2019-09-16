sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/Filter',
	"../formatter/formatDesc"], function (Controller,Filter,formatDesc) {
	"use strict";

	return Controller.extend("demo.list.demoList1.controller.first", {
		formatterABC:formatDesc,
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel("model/data.json");
			this.getView().setModel(oModel,"listData");
			
		},
		
		onLiveChangeListPage : function(oEvt){
			var sQuery = oEvt.getSource().getValue();
			var aFilter = [];
			if(sQuery && sQuery.length>0){
				aFilter.push(
				new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.Contains,sQuery)
				);
			}else{
					return;
		
			}
			this.byId("idList").getBinding("items").filter(aFilter);
		},
		onSelectionChange : function(oEvt){
			console.log("Selection Changed");
		},
		onItemPress : function(oEvt){
			console.log(oEvt.getParameters().listItem.getAttributes()[0].getText());
		}
	});
});