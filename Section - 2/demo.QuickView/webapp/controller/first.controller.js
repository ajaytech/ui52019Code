sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.QV.demo.QuickView.controller.first", {
		onInit: function () {
			debugger;
			var oData = {
				pages: [{
					imageurl: "https://img.freepik.com/free-vector/colorful-rocket-composition-with-flat-design_23-2147903853.jpg?size=338&ext=jpg",
					pageId: "companyPageId",
					header: "Company info",
					title: "UI5CN",
					titleUrl: "https://www.ui5cn.com/",
					icon: "https://img.freepik.com/free-vector/colorful-rocket-composition-with-flat-design_23-2147903853.jpg?size=338&ext=jpg",
					description: "Tech description",
					groups: [{
						heading: "Contact us:",
						elements: [{
							label: "Name",
							value: "Ajay",
							elementType: sap.m.QuickViewGroupElementType.pageLink ,
							pageLinkId: "companyEmployeePageId"
						}, {
							label: "Mobile",
							value: "+001 6101 34869-0",
							elementType: sap.m.QuickViewGroupElementType.mobile
						}, {
							label: "Phone",
							value: "+001 6101 34869-0",
							elementType: sap.m.QuickViewGroupElementType.phone
						}, {
							label: "Email",
							value: "abc@UI5cn.com",
							emailSubject: "Subject",
							elementType: sap.m.QuickViewGroupElementType.email
						}]
					}]
				}, {
					pageId: "companyEmployeePageId",
					header: "Employee Info",
					title: "Ajay",
					icon: "sap-icon://person-placeholder",
					description: "Developer",
					groups: [{
						heading: "UI5CN",
						elements: [
						{
							label: "Name",
							value: "Adventure Company",
							url: "https://www.ui5cn.com",
							elementType: sap.m.QuickViewGroupElementType.link
						}, {
							label: "Address",
							value: "India"
						}, {
							label: "Slogan",
							value: "Innovation through technology"
						}]
					}]
				}]
			};

			this.getView().setModel(new sap.ui.model.json.JSONModel(oData))
		}
	});
});