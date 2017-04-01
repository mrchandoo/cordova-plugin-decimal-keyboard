cordova.define("cordova-plugin-decimal-keyboard.decimalKeyboard", function(require, exports, module) { 
	var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
   
var DecimalKeyboard = function() {
	
};
DecimalKeyboard.getActiveElementType= function(){
	return document.activeElement.type;
};
DecimalKeyboard.isDecimal = function(){
	var showDecimal = null;
	var activeElement = document.activeElement;
	if(activeElement.attributes["decimal"]==undefined || 
		activeElement.attributes["decimal"]=='undefined' || 
		activeElement.attributes["decimal"].value=='false'){
		showDecimal = false;
	}else{
		showDecimal = true;
	}
	return showDecimal;
};
DecimalKeyboard.getDecimalChar = function(activeElement){
	
	if(activeElement==undefined || activeElement==null || activeElement=='undefined')
		activeElement = document.activeElement;

	var decimalChar = null;
	if(activeElement.attributes["decimal-char"]==undefined || 
		activeElement.attributes["decimal-char"]=='undefined'){
		decimalChar='.'
	}else{
		decimalChar=activeElement.attributes["decimal-char"].value;
	}
	return decimalChar;
};
DecimalKeyboard.addDecimal = function(){
	var activeElement = document.activeElement;
	var allowMultipleDecimals = true;
	if(activeElement.attributes["allow-multiple-decimals"]==undefined || 
		activeElement.attributes["allow-multiple-decimals"]=='undefined' || 
		activeElement.attributes["allow-multiple-decimals"].value=='false'){
		allowMultipleDecimals = false;
	}
	var value = activeElement.value;
	var valueToSet = '';
	var decimalChar = DecimalKeyboard.getDecimalChar(activeElement);
	if(value.length==0)
		valueToSet = '0' + decimalChar;
	else{
		if(allowMultipleDecimals)
			valueToSet = value + decimalChar;
		else{
			if(value.indexOf(decimalChar) == -1){
				valueToSet = value+decimalChar;
			}else{
				valueToSet = value;
			}
		}
	}
    activeElement.value = valueToSet;
};


module.exports = DecimalKeyboard;
});
