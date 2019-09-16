sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.uploader.collection.demoSAPUI5Uploader.controller.first", {
		onInit: function () {

		},
		
		onPressUpload : function(){
			var uC = this.byId("UploadCollection");
			uC.upload();
		}
	});
});