sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.fileUpBasic.demoFileUpBasic.controller.first", {
		onInit: function () {

		},
	onPressUpload : function(){
			var oFileUp = this.byId("fileUploader")
			debugger;
			oFileUp.upload();
		}
	});
});