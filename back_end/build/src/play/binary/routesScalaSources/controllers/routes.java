// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/Siri/Desktop/react/newPro/2021_pay_it_forward/back_end/conf/routes
// @DATE:Tue May 11 13:32:17 IST 2021

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReversePersonController PersonController = new controllers.ReversePersonController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseTestController TestController = new controllers.ReverseTestController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseProductController ProductController = new controllers.ReverseProductController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseNgoController NgoController = new controllers.ReverseNgoController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseFeedbackController FeedbackController = new controllers.ReverseFeedbackController(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReversePersonController PersonController = new controllers.javascript.ReversePersonController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseTestController TestController = new controllers.javascript.ReverseTestController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseProductController ProductController = new controllers.javascript.ReverseProductController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseNgoController NgoController = new controllers.javascript.ReverseNgoController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseFeedbackController FeedbackController = new controllers.javascript.ReverseFeedbackController(RoutesPrefix.byNamePrefix());
  }

}
