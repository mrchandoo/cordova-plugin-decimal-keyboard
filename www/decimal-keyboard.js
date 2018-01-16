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
	if(activeElement.attributes["data-decimal"]==undefined || 
		activeElement.attributes["data-decimal"]=='undefined' || 
		activeElement.attributes["data-decimal"].value=='false'){
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
	if(activeElement.attributes["data-decimal-char"]==undefined || 
		activeElement.attributes["data-decimal-char"]=='undefined'){
		decimalChar='.'
	}else{
		decimalChar=activeElement.attributes["data-decimal-char"].value;
	}
	return decimalChar;
};
DecimalKeyboard.addDecimalAtPos = function(val,position){

};
DecimalKeyboard.addDecimal = function(){
	var activeElement = document.activeElement;
	var allowMultipleDecimals = true;
	if(activeElement.attributes["data-allow-multiple-decimals"]==undefined || 
		activeElement.attributes["data-allow-multiple-decimals"]=='undefined' || 
		activeElement.attributes["data-allow-multiple-decimals"].value=='false'){
		allowMultipleDecimals = false;
	}
	var value = activeElement.value;
	var valueToSet = '';
	var decimalChar = DecimalKeyboard.getDecimalChar(activeElement);
	var caretPosStart = activeElement.selectionStart;
	var caretPosEnd = activeElement.selectionEnd;
	var first='';
	var last='';
	
	first = value.substring(0, caretPosStart);
	last = value.substring(caretPosEnd);

	if(allowMultipleDecimals){
		valueToSet = first+decimalChar+last;
	}else{
		if(value.indexOf(decimalChar) > -1)
			return;
		else{
			if(caretPosStart==0){
				first='0';
			}
			valueToSet = first+decimalChar+last;

		}
	}

    activeElement.value = valueToSet;
};

DecimalKeyboard.addDecimalToKeyboard = function(successCallback, errorCallback){
    exec(successCallback, errorCallback, "DecimalKeyboard", "addDecimalToKeyboard", []);
};
               
DecimalKeyboard.removeDecimalFromKeyboard = function(successCallback, errorCallback){
    exec(successCallback, errorCallback, "DecimalKeyboard", "removeDecimalFromKeyboard", []);
};


module.exports = DecimalKeyboard;
