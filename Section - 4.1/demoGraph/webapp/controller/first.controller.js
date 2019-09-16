sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("graph.demo.demoGraph.controller.first", {
		onInit: function () {
		
		var oData = {
			"nodes":[
				{
				"key":0,
				"group":"L",
				"title":"Rabbit",
				"icon":"sap-icon://account",
				"status":"Success",
				"shape":"Circle",
				"attributes":[
					{
						"label":"Activity",
						"value":"Jump"
					},{
						"label":"Eat",
						"value":"Carrot and Leaves"
					}]
				},{
				"key":1,
				"title":"Carrot",
				"group":"NL",
				"icon":"sap-icon://checklist-2",
				"status":"Error",
				"shape":"Box",
				"attributes":[
					{
						"label":"Activity",
						"value":"Jump"
					},{
						"label":"Eat",
						"value":"Carrot and Leaves"
					}]
					
				},{
				"key":20,
				"title":"Leaves",
				"group":"NL",
				"icon":"sap-icon://e-care",
				"status":"Success",
				"shape":"Box",
				"attributes":[
					{
						"label":"Activity",
						"value":"Jump"
					},{
						"label":"Eat",
						"value":"Carrot and Leaves"
					}]
					
				}
				],
			"lines":[{
				"to":0,
				"from":1,
				"status":"food"
			},
			{
				"to":0,
				"from":20,
				"status":"Success"
			}],
			"groups":[{
				"title":"Living",
				"key":"L",
				"status":"Animal"
				
			},{
				"title":"Non Living",
				"key":"NL",
				"status":"food"
				
			}]
		};
		
		this.getView().setModel(new sap.ui.model.json.JSONModel(oData));




		}
	});
});