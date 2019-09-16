sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"demo/ui5/dataUI5App/model/data",
	"demo/ui5/dataUI5App/model/formatter"
], function (Controller,oDataFn,formatter) {
	"use strict";

	return Controller.extend("demo.ui5.dataUI5App.controller.home", {
		
		oFormatter:formatter,
		onInit: function () {
			
		//	console.log(formatter);
			this.getView().setModel(oDataFn.getSampleData(),"listTodo");

		},
		
		factoryFunction: function(sId,oContext){
			
			var oTemplate = {};
			
			if(oContext.getProperty("completed") === true){
				
				oTemplate = new sap.m.ObjectListItem({
					title:"{listTodo>title}",
					icon:"sap-icon://accept"
					
				});                               
			}else{
				oTemplate = new sap.m.StandardListItem({
					title:"{listTodo>title}"
					
				});   
				
			}
			
			
			
			return oTemplate;
			
		}
		
		
	});
});