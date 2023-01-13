// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/Siri/Desktop/react/newPro/2021_pay_it_forward/back_end/conf/routes
// @DATE:Tue May 11 13:32:17 IST 2021

import play.api.mvc.Call


import _root_.controllers.Assets.Asset

// @LINE:6
package controllers {

  // @LINE:6
  class ReversePersonController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:17
    def delete(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "delperson")
    }
  
    // @LINE:13
    def updatePerson(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "updateperson")
    }
  
    // @LINE:20
    def login1(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "login1")
    }
  
    // @LINE:7
    def addPerson(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "person")
    }
  
    // @LINE:16
    def getPersons(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "persons")
    }
  
    // @LINE:19
    def getEmail(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "getEmail")
    }
  
    // @LINE:6
    def index(): Call = {
      
      Call("GET", _prefix)
    }
  
    // @LINE:18
    def login(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "login")
    }
  
  }

  // @LINE:44
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:44
    def at(file:String): Call = {
      implicit lazy val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/public"))); _rrc
      Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[play.api.mvc.PathBindable[String]].unbind("file", file))
    }
  
  }

  // @LINE:9
  class ReverseTestController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:9
    def addimg(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "addimg")
    }
  
  }

  // @LINE:10
  class ReverseProductController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:28
    def delete(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "deleteproduct")
    }
  
    // @LINE:38
    def deleteCart(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "delcart")
    }
  
    // @LINE:27
    def getCProducts(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "getcproducts")
    }
  
    // @LINE:24
    def getProducts(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "products")
    }
  
    // @LINE:39
    def clist(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "cprofile")
    }
  
    // @LINE:40
    def getSearchProducts(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "csearch")
    }
  
    // @LINE:10
    def addproduct(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "addproduct")
    }
  
    // @LINE:26
    def getdProducts(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "getproducts")
    }
  
    // @LINE:25
    def updateProduct(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "updateproduct")
    }
  
    // @LINE:41
    def addSearchProduct(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "addsearch")
    }
  
    // @LINE:36
    def cartProduct(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "cartproduct")
    }
  
    // @LINE:35
    def buyProduct(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "buyproduct")
    }
  
    // @LINE:37
    def Cartlist(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "cartprofile")
    }
  
    // @LINE:42
    def customerSearch(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "customersearch")
    }
  
    // @LINE:34
    def singleProduct(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "singleproduct")
    }
  
  }

  // @LINE:8
  class ReverseNgoController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:29
    def delete(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "deletengo")
    }
  
    // @LINE:8
    def addNgo(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "addngo")
    }
  
    // @LINE:21
    def login1(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "ngologin1")
    }
  
    // @LINE:15
    def updateNgodetails(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "updatengodetails")
    }
  
    // @LINE:23
    def getNgosList(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "ngoslist")
    }
  
    // @LINE:14
    def updateNgo(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "updatengo")
    }
  
    // @LINE:22
    def getNgos(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "ngos")
    }
  
  }

  // @LINE:11
  class ReverseFeedbackController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:31
    def getFeedback(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "feedbacks")
    }
  
    // @LINE:32
    def delete(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "deletefeedback")
    }
  
    // @LINE:11
    def feedback(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "feedback")
    }
  
  }


}
