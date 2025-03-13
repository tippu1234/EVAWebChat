//
//  OSEImageQualityDetector.h
//  EVAVisionComponent
//
//  Created by Bharathan V on 14/11/22.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>


NS_ASSUME_NONNULL_BEGIN

@interface OSEImageQualityDetector : NSObject
//- (float) detectImageBlur:(UIImage *)image;
- (int)detectImageBlurUsingOpenCVLaplacian:(UIImage *)referenceImagePixelBuffer;
- (int)detectImageBlurUsingOpenCVFilter2D:(UIImage *)referenceImagePixelBuffer;
- (int)detectImageBrightness:(UIImage *)referenceImagePixelBuffer;

@end

NS_ASSUME_NONNULL_END
