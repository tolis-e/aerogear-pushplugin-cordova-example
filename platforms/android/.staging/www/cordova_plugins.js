cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.jboss.aerogear.cordova.push/www/aerogear-push.js",
        "id": "org.jboss.aerogear.cordova.push.AeroGear.UnifiedPush",
        "clobbers": [
            "push"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.2.7",
    "org.jboss.aerogear.cordova.push": "0.0.2"
}
// BOTTOM OF METADATA
});