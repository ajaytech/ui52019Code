sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.cont2.demoCont2.controller.first", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
				var mData = {
				pages: [
					{
						pageId: "companyPageId",
						header: "Company info",
						title: "Adventure Company",
						titleUrl: "http://sap.com",
						icon: "sap-icon://building",
						description: "John Doe",
						groups: [
							{
								heading: "Contact Details",
								elements: [
									{
										label: "Phone",
										value: "+001 6101 34869-0",
										elementType: sap.m.QuickViewGroupElementType.phone
									},
									{
										label: "Address",
										value: "550 Larkin Street, 4F, Mountain View, CA, 94102 San Francisco USA",
										elementType: sap.m.QuickViewGroupElementType.text
									}
								]
							},
							{
								heading: "Main Contact",
								elements: [
									{
										label: "Name",
										value: "John Doe",
										elementType: sap.m.QuickViewGroupElementType.pageLink,
										pageLinkId: "companyEmployeePageId"
									},
									{
										label: "Mobile",
										value: "+001 6101 34869-0",
										elementType: sap.m.QuickViewGroupElementType.mobile
									},
									{
										label: "Phone",
										value: "+001 6101 34869-0",
										elementType: sap.m.QuickViewGroupElementType.phone
									},
									{
										label: "Email",
										value: "main.contact@company.com",
										emailSubject : 'Subject',
										elementType: sap.m.QuickViewGroupElementType.email
									}
								]
							}
						]
					},
					{
						pageId: "companyEmployeePageId",
						header: "Employee Info",
						title: "John Doe",
						icon: "sap-icon://person-placeholder",
						description: "Department Manager",
						groups: [
							{
								heading: "Company",
								elements: [
									{
										label: "Name",
										value: "Adventure Company",
										url: "http://sap.com",
										elementType: sap.m.QuickViewGroupElementType.link
									},
									{
										label: "Address",
										value: "Sofia, Boris III, 136A"
									},
									{
										label: "Slogan",
										value: "Innovation through technology"
									}
								]
							},
							{
								heading: "Other",
								elements: [
									{
										label: "Email",
										value: "john.doe@sap.com",
										emailSubject : 'Subject',
										elementType: sap.m.QuickViewGroupElementType.email
									},
									{
										label: "Phone",
										value: "+359 888 888 888",
										elementType: sap.m.QuickViewGroupElementType.mobile
									}
								]
							}
						]
					}
				]
			};
			oModel.setData(mData);
			this.getView().setModel(oModel);
		},
		// onPressIconTabBar: function (oEvt) {
		// 	debugger;

		// }
		onAddNewTab: function (oEvt) {

			this.byId("myTabContainer").addItem(
				new sap.m.TabContainerItem({
					name: "newItem",
					content: [
						new sap.m.Label({
							text: "demo"
						}),
						new sap.m.Input({
							value: "demo1"
						})
					]
				}));

		},
		onTabClosed: function (oEvt) {
			oEvt.preventDefault();

			//Show popup confirmation
			//this.byId("myTabContainer").removeItem(oEvt.getParameter("item"))

		}

	});
});