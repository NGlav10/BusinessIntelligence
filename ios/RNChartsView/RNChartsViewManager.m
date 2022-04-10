//
//  RNChartsViewManager.m
//  BusinessIntelligence
//
//  Created by Nick Glaviano on 4/9/22.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <BusinessIntelligence-Swift.h>

@interface RNChartsViewManager: RCTViewManager
@end

@implementation RNChartsViewManager
RCT_EXPORT_MODULE(RNChartsViewIOS)

- (UIView *) view {
  RNChartsView *view = [[RNChartsView alloc] init];
  return view;
}

RCT_EXPORT_VIEW_PROPERTY(xValues, NSArray)
RCT_EXPORT_VIEW_PROPERTY(yValues, NSArray)

@end
