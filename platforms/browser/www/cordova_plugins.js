cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-android-toast/www/AndroidToast.js",
        "id": "cordova-android-toast.AndroidToast",
        "pluginId": "cordova-android-toast",
        "clobbers": [
            "AndroidToast"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-android-toast": "1.0.0"
}
// BOTTOM OF METADATA
});