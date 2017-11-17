cordova.define("summer-plugin-service.XService", function(require, exports, module) {

        var exec = require('cordova/exec');

        var service = {};

        service.call = function(srvName, params, successCallback, errorCallback) {
			//srvName is like "UMDevice.openCamera" etc.
            exec(successCallback, errorCallback, "XService", "call", [srvName, params]);
        };
		
		service.callSync = function(params, successCallback, errorCallback) {
			/*
			params is like 
				{
					"method" : "YYIM.chat",
					"params" : {
						"chatID" : id, 
						"extend" : JSON.stringify({"sendfrom":"app","tenantid":tenantid})
					}
				}
			*/
            exec(successCallback, errorCallback, "XService", "callSync", [params]);
        };
        
        service.getPermission = function(params, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XService", "getPermission", [params]);
        };
		
        module.exports = service;

    }
);
