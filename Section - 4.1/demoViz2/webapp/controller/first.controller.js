sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.viz1.demoViz2.controller.first", {
		onInit: function () {
			var oData = {
					"vizproperties":{
						"title":{
							"text":"Some Title"
						}
					},
				   "dataProp": [{
				        "Store Name": "Store 1",
				        "Revenue": 428214.13,
				        "TeamSize": 20,
				        "Rating":2.9
				    },
				    {
				        "Store Name": "Store 2",
				        "Revenue": 1722148.36,
				        "TeamSize": 21,
				        "Rating":2.6
				    },
				    {
				        "Store Name": "Store 3",
				        "Revenue": 1331176.706884,
				        "TeamSize": 10,
				        "Rating":3.1
				    },
				    {
				        "Store Name": "Store 4",
				        "Revenue": 1878466.82,
				        "TeamSize": 11,
				        "Rating":3.9
				    },
				    {
				        "Store Name": "Store 5",
				        "Revenue": 3386251.94,
				        "TeamSize": 7,
				        "Rating":4.9
				    },
				    {
				        "Store Name": "Store 6",
				        "Revenue": 2090030.97,
				        "TeamSize": 32,
				        "Rating":2.1
				        
				    },
				    {
				        "Store Name": "Store 7",
				        "Revenue": 1932991.59,
				        "TeamSize": 29,
				        "Rating":2.1
				    },
				    {
				        "Store Name": "Store 7",
				        "Revenue": 752565.16,
				        "TeamSize": 9,
				        "Rating":2.4
				    },
				    {
				        "Store Name": "Store 8",
				        "Revenue": 1394072.66,
				        "TeamSize": 15,
				        "Rating":2.9
				    },
				    {
				        "Store Name": "Store 9",
				        "Revenue": 3308333.872944,
				        "TeamSize": 10,
				        "Rating":2.9
				    }],
				    "dataTime": [{
						"Date": "7/5/2012",
						"Cost": 263907.468
					}, {
						"Date": "7/11/2012",
						"Cost": 277920.663333333
					}, {
						"Date": "7/17/2012",
						"Cost": 123665.582
					}, {
						"Date": "7/24/2012",
						"Cost": 208550.165
					}, {
						"Date": "8/1/2012",
						"Cost": 366772.572
					},
					{
						"Date": "8/19/2012",
						"Cost": 414992.585
					}, {
						"Date": "8/20/2012",
						"Cost": 365216.48
					}
				]
				};
		jQuery.sap.require("sap/suite/ui/commons/ChartContainer");
		var vizFrame = this.getView().byId("idVizFrame");
		var fixFlex = this.getView().byId("idChart");
				vizFrame.setModel(new sap.ui.model.json.JSONModel(oData));

		
		var oChatContContent = new sap.suite.ui.commons.ChartContainerContent({
		"title":"Demo Chart Container Content",
		content:[
				vizFrame
			]
	});
	var oChatCont = new sap.suite.ui.commons.ChartContainer({
		"title":"Demo Chart",
		content:[
			oChatContContent
			]
	});
	fixFlex.setFlexContent(oChatCont);
	oChatCont.setShowFullScreen(true);
	oChatCont.setAutoAdjustHeight(true);
	
	
	
	

		}
	});
});