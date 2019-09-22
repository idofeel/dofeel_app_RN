/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
 
  // 获取应用沙盒根目录
//  NSString * jsBundlePath = NSHomeDirectory();
//  NSLog(@"sanbox root path = %@",jsBundlePath);
  // 调整过的加载路径，设置从 沙盒根目录/bundles/index.ios.bundle 加载文件
  
//  jsCodeLocation = [NSURL URLWithString:[jsBundlePath stringByAppendingString:@"/bundles/index.ios.bundle"]];
  
//  NSLog(@"new jsCodeLocation= %@",jsCodeLocation);
//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

//  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"/index.ios" withExtension:@"jsbundle"];
    jsCodeLocation = [NSURL URLWithString:[[NSBundle mainBundle] pathForResource:@"index.ios.bundle" ofType:nil]];;

//jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/index.ios" withExtension:@"jsbundle"];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"dofeel"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
