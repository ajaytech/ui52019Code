sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("dev.demo.AnalyticalApp.controller.dashboard", {
		onInit: function () {
			
		var oView = this.getView();
		
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oView),"oViewHome");
		
		
		pubnubDemo.addListener({
			
			message : function(message){
			
				var newTarget = [];
				newTarget.push(parseInt(message.message.n));
				newTarget.push(parseInt(message.message.n1));
				newTarget.push(parseInt(message.message.n2));
					console.log(newTarget);
				sap.ui.getCore().getModel("oViewHome").getData().getController().upDataModelWithData(newTarget);
			}
			
		});
		
		
		pubnubDemo.subscribe({
			channels:['demo_fin']
		});
		
		//Ajax call start
		
	sap.ui.getCore().getModel("oViewHome").getData().getController().callBRFGETData();
		},
		
		upDataModelWithData: function(newTarget){
			
			console.log(newTarget);
			var oView = sap.ui.getCore().getModel("oViewHome").getData();
			var oData = oView.getModel("demo_data").getData();
			
			if(newTarget && newTarget.length >0){
				
				for(var a=0;a<oData["tilesPrediction"].length;a++){
					oData["tilesPrediction"][a]["value"]=
					Math.round(100*(newTarget[a] - parseInt(oData["data"][a]["actcost"]))/newTarget[a]).toString();
					
					if(	oData["tilesPrediction"][a]["value"]<0){
							oData["tilesPrediction"][a]["valueColor"] = "Error";
					}else{
						oData["tilesPrediction"][a]["valueColor"] = "Good";
					}
					
				}
				
			}
			oView.getModel("demo_data").setData(oData);
			
			
			
		},
		
		callBRFGETData: function(){
		
		var months = ["Jan","Feb","Mar"];
		var returnVal = [];
		var payLoad = [];
		
		$.ajax({
			url:"/bpmrulesruntime/rules-service/v1/rules/xsrf-token",
			method:"GET",
			async:false,
			headers:{
				"X-CSRF-Token":"Fetch"
			},
			success:function(result,xhr,data){
				
				var token = data.getResponseHeader("X-CSRF-Token");
				var dataFromService = [];
				for(var i=0;i<months.length;i++){
					payLoad = [{
						"__type__": "MonthIO",
    					"MonthVal": months[i]
					}]
				
					$.ajax({
						url:"/bpmrulesruntime/rules-service/rest/v1/rule-services/java/finaProjection/getProjectionForMonth",
						method:"POST",
						async:false,
						contentType:"application/json",
						data:JSON.stringify(payLoad),
						headers:{
							"X-CSRF-Token":token
						},
						success:function(result,xhr,data){
							
							dataFromService.push(result[0]["projection"]);
						}
						});
				}
				
			sap.ui.getCore().getModel("oViewHome").getData().getController().upDataModelWithData(dataFromService);
			}
			
		});
			
			
			
			
		},
		
		
		handleCBSelectionChange: function (e) {
			var ddata = [];
			var cm = this.getView().getModel("demo_data");
			var cmd = cm.getData();
			cm.setData(ddata);
			cm.setData(cmd);
		},
		vizPropertyFormatter: function (vp) {

			return (vp);
		},
		feedsFactory: function (sId, oContext) {
			var oFeed = new sap.viz.ui5.controls.common.feeds.FeedItem({
				title: "{demo_data>title}",
				uid: "{demo_data>uid}",
				type: "{demo_data>type}",
				values: [oContext.getProperty("values")]
			});
			return oFeed;
		},
		measuresFactory: function (sId, oContext) {
			var oMeasureDefinition = new sap.viz.ui5.data.MeasureDefinition({
				title: "{demo_data>title}",
				name: "{demo_data>name}",
				value: {
					path: oContext.getProperty("value")
				}
			});
			return oMeasureDefinition;

		},
		dimsFactory: function (sId, oContext) {
			var oDimensionDefinition = new sap.viz.ui5.data.DimensionDefinition({
				title: "{demo_data>title}",
				name: "{demo_data>name}",
				value: {
					path: oContext.getProperty("value")
				}
			});
			return oDimensionDefinition;

		},
		objToString: function (val) {
			var ostr = JSON.stringify(val, null, "\t");
			return ostr;

		},
		handleBRFTarget: function (newTarget) {
			
			
			var oView = sap.ui.getCore().getModel("oViewHome").getData();
			var oData = oView.getModel("demo_data").getData();
			
			if (newTarget && newTarget.length > 0 ) {
				for (var a = 0; a < oData["tilesPrediction"].length; a++) {
					
					oData["tilesPrediction"][a]["value"] = 
					Math.round((100*(newTarget[a]-parseInt(oData.data[a].actcost)))/newTarget[a]).toString();
					
					if(parseInt(oData["tilesPrediction"][a]["value"])<0){
						oData["tilesPrediction"][a]["valueColor"] = "Error";
					}else{
						oData["tilesPrediction"][a]["valueColor"]  = "Good";
					}
				}
		
			}
			oView.getModel("demo_data").setData(oData);
			

		},
		handlBRFFirstLoad: function(){
			
		
			
		},
		getBRFTarget: function () {
		
	
		}

	});
});