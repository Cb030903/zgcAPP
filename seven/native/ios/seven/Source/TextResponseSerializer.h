#import <Foundation/Foundation.h>
#import <AFNetworking/AFURLResponseSerialization.h>

@interface TextResponseSerializer : AFHTTPResponseSerializer

+ (instancetype)serializer;

@end
