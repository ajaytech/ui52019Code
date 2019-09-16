sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.splitCont.demoAppcontainer.controller.first", {
		onInit: function () {

		},

		onClickM1: function () {
			this.getSplitApp().toMaster(this.createId("pageMaster2"));
		},
		onClickM2: function () {
			this.getSplitApp().backMaster();
		//	this.getSplitApp().toDetail(this.createId("pageDetail2"));

		},
		onClickD1: function () {
			this.getSplitApp().toDetail(this.createId("pageDetail2"));

		},
		onClickD2: function () {
			this.getSplitApp().backDetail();

		},
		
		onPressDetailBack : function(){
			this.getSplitApp().backDetail();
			
		},
		onPressMasterBack : function(){
			this.getSplitApp().backMaster();
			
		},
		
		getSplitApp: function () {

			if (this.byId("shell") === undefined) {
				//popup error
				return {};
			}
			return this.byId("shell");

		}
	});
});