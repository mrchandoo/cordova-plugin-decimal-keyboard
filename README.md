# cordova-plugin-decimal-keyboard

Cordova plugin to show decimal keyboard on iPhones

### Installing

```
cordova plugin add https://github.com/MobilidadeBPI/cordova-plugin-decimal-keyboard.git
```
## Usage

```
<input type="text" pattern="[0-9]*" data-decimal="true">
```
Input type number will not work, try to use text with [0-9] pattern instead.

<img src=https://github.com/mrchandoo/cordova-plugin-decimal-keyboard/blob/master/screenshots/Basic%20Usage.PNG width=25% height=25% />     <img src=https://github.com/mrchandoo/cordova-plugin-decimal-keyboard/blob/master/screenshots/Basic%20Usage%20Typed%20Content.PNG width=25% height=25% />


### Multiple decimals

```
<input type="text" pattern="[0-9]*" data-decimal="true" data-allow-multiple-decimals="true">
```
<img src=https://github.com/mrchandoo/cordova-plugin-decimal-keyboard/blob/master/screenshots/Multiple%20Decimals.PNG width=25% height=25% />

### Different decimal character

```
<input type="text" pattern="[0-9]*" data-decimal="true" data-allow-multiple-decimals="false" data-decimal-char=",">
```
If you want to localize decimal character, you can change using decimal-char attribute  
<img src=https://github.com/mrchandoo/cordova-plugin-decimal-keyboard/blob/master/screenshots/Different%20Decimal%20Char.PNG width=25% height=25% />

Two functions are added because iOS 11 does not trigger keyboard events when you change between two fields with the same keyboard type. You should use this functions on focus/blur of the fields respectively:
- addDecimalToKeyboard()
- removeDecimalFromKeyboard();

## Known Issues
* Does not handle screen rotation.
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
