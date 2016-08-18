var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var PLUGIN_NAME = "CameraPreview";

var CameraPreview = function(){};

CameraPreview.setOnPictureTakenHandler = function(onPictureTaken) {
  exec(onPictureTaken, onPictureTaken, PLUGIN_NAME, "setOnPictureTakenHandler", []);
};

CameraPreview.setFlashMode = function(flashMode) {
  exec(null, null, PLUGIN_NAME, "setFlashMode", [flashMode]);
};

CameraPreview.setOnLogHandler = function(onLog) {
  exec(onLog, onLog, PLUGIN_NAME, "wLog", []);
};

CameraPreview.startCamera = function(rect, defaultCamera, tapEnabled, dragEnabled, toBack, alpha, onSuccess, onError){
  if(typeof(rect.x) === 'undefined'){
    rect.x = 0;
  }
  if(typeof(rect.y) === 'undefined'){
    rect.y = 0;
  }
  if(typeof(rect.width) === 'undefined'){
    rect.width = window.screen.width;
  }
  if(typeof(rect.height) === 'undefined'){
    rect.height = window.screen.height;
  }
  if(typeof(defaultCamera) === 'undefined'){
    defaultCamera = 'front';
  }
  if(typeof(tapEnabled) === 'undefined'){
    tapEnabled = true;
  }
  if(typeof(dragEnabled) === 'undefined'){
    dragEnabled = false;
  }
  if(typeof(toBack) === 'undefined'){
    toBack = false;
  }
  if(typeof(alpha) === 'undefined'){
    alpha = 1;
  }

  exec(onSuccess, onError, PLUGIN_NAME, "startCamera", [rect.x, rect.y, rect.width, rect.height, defaultCamera, tapEnabled, dragEnabled, toBack, alpha]);
};

CameraPreview.stopCamera = function(callback){
  exec(callback, callback, PLUGIN_NAME, "stopCamera", []);
};

CameraPreview.takePicture = function(dim, onSuccess, onError){
  dim = dim || {};
  exec(onSuccess, onError, PLUGIN_NAME, "takePicture", [dim.maxWidth || 0, dim.maxHeight || 0]);
};

CameraPreview.setColorEffect = function(effect){
  exec(null, null, PLUGIN_NAME, "setColorEffect", [effect]);
};

CameraPreview.switchCamera = function(){
  exec(null, null, PLUGIN_NAME, "switchCamera", []);
};

CameraPreview.hide = function(onSuccess, onError){
  exec(onSuccess, onError, PLUGIN_NAME, "hideCamera", []);
};

CameraPreview.show = function(onSuccess, onError){
  exec(onSuccess, onError, PLUGIN_NAME, "showCamera", []);
};

CameraPreview.disable = function(disable){
  exec(null, null, PLUGIN_NAME, "disable", [disable]);
};

CameraPreview.FlashMode = {OFF: 0, ON: 1, AUTO: 2};

module.exports = CameraPreview;
