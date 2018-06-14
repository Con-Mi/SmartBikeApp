cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-android-toast/www/AndroidToast.js",
        "id": "cordova-android-toast.AndroidToast",
        "pluginId": "cordova-android-toast",
        "clobbers": [
            "AndroidToast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-fingerprint-aio/www/Fingerprint.js",
        "id": "cordova-plugin-fingerprint-aio.Fingerprint",
        "pluginId": "cordova-plugin-fingerprint-aio",
        "clobbers": [
            "Fingerprint"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-android-toast": "1.0.0",
    "cordova-plugin-fingerprint-aio": "1.3.7"
}
// BOTTOM OF METADATA
});