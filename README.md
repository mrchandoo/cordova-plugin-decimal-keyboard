# cordova-plugin-decimal-keyboard

Cordova plugin to show decimal keyboard on iPhones forked from mrchandoo/cordova-plugin-decimal-keyboard

I was getting ng-pattern error(removed the pattern attribute to invoke the decimal keyboard), so just set the input to tel and add decimal=true to invoke the decimal keyboard

### Installing

```
cordova plugin add https://github.com/msd117/cordova-plugin-decimal-keyboard.git

```
## Usage

```
<input type="tel"  decimal="true">
```
Input type number will not work, try to use tel .

<img src=https://github.com/mrchandoo/cordova-plugin-decimal-keyboard/blob/master/screenshots/Basic%20Usage.PNG width=25% height=25% />     <img src=https://github.com/mrchandoo/cordova-plugin-decimal-keyboard/blob/master/screenshots/Basic%20Usage%20Typed%20Content.PNG width=25% height=25% />


### Multiple decimals

```
<input type="tel"  decimal="true" allow-multiple-decimals="true">
```
<img src=https://github.com/mrchandoo/cordova-plugin-decimal-keyboard/blob/master/screenshots/Multiple%20Decimals.PNG width=25% height=25% />

### Different decimal character

```
<input type="tel" decimal="true" allow-multiple-decimals="false" decimal-char=",">
```
If you want to localize decimal character, you can change using decimal-char attribute  
<img src=https://github.com/mrchandoo/cordova-plugin-decimal-keyboard/blob/master/screenshots/Different%20Decimal%20Char.PNG width=25% height=25% />

## Known Issues
* Does not handle screen rotation.
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
