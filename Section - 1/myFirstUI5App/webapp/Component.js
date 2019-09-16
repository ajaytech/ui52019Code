sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"demo/ui5/myFirstUI5App/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("demo.ui5.myFirstUI5App.Component", {

		metadata: {
			"_version": "1.12.0",
			"sap.app": {
				"id": "demo.ui5.myFirstUI5App",
				"type": "application",
				"i18n": "i18n/i18n.properties",
				"applicationVersion": {
					"version": "1.0.0"
				},
				"title": "{{appTitle}}",
				"description": "{{appDescription}}",
				"sourceTemplate": {
					"id": "ui5template.basicSAPUI5ApplicationProject",
					"version": "1.40.12"
				}
			},
			"sap.ui": {
				"technology": "UI5",
				"icons": {
					"icon": "",
					"favIcon": "",
					"phone": "",
					"phone@2": "",
					"tablet": "",
					"tablet@2": ""
				},
				"deviceTypes": {
					"desktop": true,
					"tablet": true,
					"phone": true
				}
			},
			"sap.ui5": {
				"flexEnabled": false,
				"rootView": {
					"viewName": "demo.ui5.myFirstUI5App.view.App",
					"type": "XML",
					"async": true,
					"id": "App"
				},
				"dependencies": {
					"minUI5Version": "1.60.1",
					"libs": {
						"sap.m": {},
						"sap.ui.core": {},
						"sap.ui.layout": {}
					}
				},
				"contentDensities": {
					"compact": true,
					"cozy": true
				},
				"models": {
					"i18n": {
						"type": "sap.ui.model.resource.ResourceModel",
						"settings": {
							"bundleName": "demo.ui5.myFirstUI5App.i18n.i18n"
						}
					}
				},

				"resources": {
					"css": [{
						"uri": "css/style.css"
					}]
				},
				"routing": {
					"config": {
						"routerClass": "sap.m.routing.Router",
						"viewType": "XML",
						"async": true,
						"viewPath": "demo.ui5.myFirstUI5App.view",
						"controlAggregation": "pages",
						"controlId": "app",
						"clearControlAggregation": false
					},
					"routes": [{
						"name": "RouteApp",
						"pattern": "RouteApp",
						"target": [
							"TargetApp"
						]
					}],
					"targets": {
						"TargetApp": {
							"viewType": "XML",
							"transition": "slide",
							"clearControlAggregation": false,
							"viewId": "App",
							"viewName": "App"
						}
					}
				}
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			debugger;
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});