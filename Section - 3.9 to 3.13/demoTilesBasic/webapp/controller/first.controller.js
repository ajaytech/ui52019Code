sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.tiles.basic.demoTilesBasic.controller.first", {
		onInit: function () {
			var oData = [
				{
				"header":"demo 1",
				"subheader":"demo subheader",
				"ratingValue":4.2
			},	{
				"header":"demo 1",
				"subheader":"demo subheader",
				"ratingValue":2.2
			},
				{
				"header":"demo 1",
				"subheader":"demo subheader",
				"ratingValue":1.2
			},	{
				"header":"demo 1",
				"subheader":"demo subheader",
				"ratingValue":5.2
			}
     		];
		this.getView().setModel(new sap.ui.model.json.JSONModel(oData));
		
		},
		onPress : function(oEvt){
			console.log(oEvt.getSource().getTileContent()[0].getContent().getItems()[0].getValue());
		}
	});
});