#import <Cordova/CDVPlugin.h>
#import <objc/runtime.h>

@interface CDVDecimalKeyboard : CDVPlugin <UIScrollViewDelegate> {

}
- (void) addDecimalToKeyboard:(CDVInvokedUrlCommand*)command;
- (void) removeDecimalFromKeyboard:(CDVInvokedUrlCommand*)command;
@end

