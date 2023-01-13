// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/Siri/Desktop/react/newPro/2021_pay_it_forward/back_end/conf/routes
// @DATE:Tue May 11 13:32:17 IST 2021

import play.api.routing.JavaScriptReverseRoute


import _root_.controllers.Assets.Asset

// @LINE:6
package controllers.javascript {

  // @LINE:6
  class ReversePersonController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:17
    def delete: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.delete",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "delperson"})
        }
      """
    )
  
    // @LINE:13
    def updatePerson: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.updatePerson",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "updateperson"})
        }
      """
    )
  
    // @LINE:20
    def login1: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.login1",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "login1"})
        }
      """
    )
  
    // @LINE:7
    def addPerson: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.addPerson",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "person"})
        }
      """
    )
  
    // @LINE:16
    def getPersons: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.getPersons",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "persons"})
        }
      """
    )
  
    // @LINE:19
    def getEmail: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.getEmail",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "getEmail"})
        }
      """
    )
  
    // @LINE:6
    def index: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.index",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + """"})
        }
      """
    )
  
    // @LINE:18
    def login: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.PersonController.login",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "login"})
        }
      """
    )
  
  }

  // @LINE:44
  class ReverseAssets(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:44
    def at: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Assets.at",
      """
        function(file1) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "assets/" + (""" + implicitly[play.api.mvc.PathBindable[String]].javascriptUnbind + """)("file", file1)})
        }
      """
    )
  
  }

  // @LINE:9
  class ReverseTestController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:9
    def addimg: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.TestController.addimg",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "addimg"})
        }
      """
    )
  
  }

  // @LINE:10
  class ReverseProductController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:28
    def delete: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.delete",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "deleteproduct"})
        }
      """
    )
  
    // @LINE:38
    def deleteCart: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.deleteCart",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "delcart"})
        }
      """
    )
  
    // @LINE:27
    def getCProducts: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.getCProducts",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "getcproducts"})
        }
      """
    )
  
    // @LINE:24
    def getProducts: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.getProducts",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "products"})
        }
      """
    )
  
    // @LINE:39
    def clist: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.clist",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "cprofile"})
        }
      """
    )
  
    // @LINE:40
    def getSearchProducts: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.getSearchProducts",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "csearch"})
        }
      """
    )
  
    // @LINE:10
    def addproduct: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.addproduct",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "addproduct"})
        }
      """
    )
  
    // @LINE:26
    def getdProducts: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.getdProducts",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "getproducts"})
        }
      """
    )
  
    // @LINE:25
    def updateProduct: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.updateProduct",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "updateproduct"})
        }
      """
    )
  
    // @LINE:41
    def addSearchProduct: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.addSearchProduct",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "addsearch"})
        }
      """
    )
  
    // @LINE:36
    def cartProduct: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.cartProduct",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "cartproduct"})
        }
      """
    )
  
    // @LINE:35
    def buyProduct: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.buyProduct",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "buyproduct"})
        }
      """
    )
  
    // @LINE:37
    def Cartlist: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.Cartlist",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "cartprofile"})
        }
      """
    )
  
    // @LINE:42
    def customerSearch: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.customerSearch",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "customersearch"})
        }
      """
    )
  
    // @LINE:34
    def singleProduct: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ProductController.singleProduct",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "singleproduct"})
        }
      """
    )
  
  }

  // @LINE:8
  class ReverseNgoController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:29
    def delete: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.NgoController.delete",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "deletengo"})
        }
      """
    )
  
    // @LINE:8
    def addNgo: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.NgoController.addNgo",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "addngo"})
        }
      """
    )
  
    // @LINE:21
    def login1: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.NgoController.login1",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "ngologin1"})
        }
      """
    )
  
    // @LINE:15
    def updateNgodetails: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.NgoController.updateNgodetails",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "updatengodetails"})
        }
      """
    )
  
    // @LINE:23
    def getNgosList: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.NgoController.getNgosList",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "ngoslist"})
        }
      """
    )
  
    // @LINE:14
    def updateNgo: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.NgoController.updateNgo",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "updatengo"})
        }
      """
    )
  
    // @LINE:22
    def getNgos: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.NgoController.getNgos",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "ngos"})
        }
      """
    )
  
  }

  // @LINE:11
  class ReverseFeedbackController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:31
    def getFeedback: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.FeedbackController.getFeedback",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "feedbacks"})
        }
      """
    )
  
    // @LINE:32
    def delete: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.FeedbackController.delete",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "deletefeedback"})
        }
      """
    )
  
    // @LINE:11
    def feedback: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.FeedbackController.feedback",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "feedback"})
        }
      """
    )
  
  }


}
