// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/Siri/Desktop/react/newPro/2021_pay_it_forward/back_end/conf/routes
// @DATE:Tue May 11 13:32:17 IST 2021

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._

import play.api.mvc._

import _root_.controllers.Assets.Asset

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:6
  PersonController_0: controllers.PersonController,
  // @LINE:8
  NgoController_1: controllers.NgoController,
  // @LINE:9
  TestController_3: controllers.TestController,
  // @LINE:10
  ProductController_2: controllers.ProductController,
  // @LINE:11
  FeedbackController_5: controllers.FeedbackController,
  // @LINE:44
  Assets_4: controllers.Assets,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:6
    PersonController_0: controllers.PersonController,
    // @LINE:8
    NgoController_1: controllers.NgoController,
    // @LINE:9
    TestController_3: controllers.TestController,
    // @LINE:10
    ProductController_2: controllers.ProductController,
    // @LINE:11
    FeedbackController_5: controllers.FeedbackController,
    // @LINE:44
    Assets_4: controllers.Assets
  ) = this(errorHandler, PersonController_0, NgoController_1, TestController_3, ProductController_2, FeedbackController_5, Assets_4, "/")

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, PersonController_0, NgoController_1, TestController_3, ProductController_2, FeedbackController_5, Assets_4, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix, """controllers.PersonController.index()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """person""", """controllers.PersonController.addPerson()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """addngo""", """controllers.NgoController.addNgo()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """addimg""", """controllers.TestController.addimg()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """addproduct""", """controllers.ProductController.addproduct()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """feedback""", """controllers.FeedbackController.feedback()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """updateperson""", """controllers.PersonController.updatePerson()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """updatengo""", """controllers.NgoController.updateNgo()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """updatengodetails""", """controllers.NgoController.updateNgodetails()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """persons""", """controllers.PersonController.getPersons()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """delperson""", """controllers.PersonController.delete()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """login""", """controllers.PersonController.login"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """getEmail""", """controllers.PersonController.getEmail()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """login1""", """controllers.PersonController.login1()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """ngologin1""", """controllers.NgoController.login1()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """ngos""", """controllers.NgoController.getNgos()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """ngoslist""", """controllers.NgoController.getNgosList()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """products""", """controllers.ProductController.getProducts"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """updateproduct""", """controllers.ProductController.updateProduct"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """getproducts""", """controllers.ProductController.getdProducts"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """getcproducts""", """controllers.ProductController.getCProducts"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """deleteproduct""", """controllers.ProductController.delete"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """deletengo""", """controllers.NgoController.delete"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """feedbacks""", """controllers.FeedbackController.getFeedback"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """deletefeedback""", """controllers.FeedbackController.delete"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """singleproduct""", """controllers.ProductController.singleProduct"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """buyproduct""", """controllers.ProductController.buyProduct"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """cartproduct""", """controllers.ProductController.cartProduct"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """cartprofile""", """controllers.ProductController.Cartlist"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """delcart""", """controllers.ProductController.deleteCart"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """cprofile""", """controllers.ProductController.clist"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """csearch""", """controllers.ProductController.getSearchProducts"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """addsearch""", """controllers.ProductController.addSearchProduct"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """customersearch""", """controllers.ProductController.customerSearch"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.at(path:String = "/public", file:String)"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:6
  private[this] lazy val controllers_PersonController_index0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix)))
  )
  private[this] lazy val controllers_PersonController_index0_invoker = createInvoker(
    PersonController_0.index(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "index",
      Nil,
      "GET",
      this.prefix + """""",
      """ Home page""",
      Seq()
    )
  )

  // @LINE:7
  private[this] lazy val controllers_PersonController_addPerson1_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("person")))
  )
  private[this] lazy val controllers_PersonController_addPerson1_invoker = createInvoker(
    PersonController_0.addPerson(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "addPerson",
      Nil,
      "POST",
      this.prefix + """person""",
      """""",
      Seq()
    )
  )

  // @LINE:8
  private[this] lazy val controllers_NgoController_addNgo2_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("addngo")))
  )
  private[this] lazy val controllers_NgoController_addNgo2_invoker = createInvoker(
    NgoController_1.addNgo(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.NgoController",
      "addNgo",
      Nil,
      "POST",
      this.prefix + """addngo""",
      """""",
      Seq()
    )
  )

  // @LINE:9
  private[this] lazy val controllers_TestController_addimg3_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("addimg")))
  )
  private[this] lazy val controllers_TestController_addimg3_invoker = createInvoker(
    TestController_3.addimg(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.TestController",
      "addimg",
      Nil,
      "POST",
      this.prefix + """addimg""",
      """""",
      Seq()
    )
  )

  // @LINE:10
  private[this] lazy val controllers_ProductController_addproduct4_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("addproduct")))
  )
  private[this] lazy val controllers_ProductController_addproduct4_invoker = createInvoker(
    ProductController_2.addproduct(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "addproduct",
      Nil,
      "POST",
      this.prefix + """addproduct""",
      """""",
      Seq()
    )
  )

  // @LINE:11
  private[this] lazy val controllers_FeedbackController_feedback5_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("feedback")))
  )
  private[this] lazy val controllers_FeedbackController_feedback5_invoker = createInvoker(
    FeedbackController_5.feedback(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.FeedbackController",
      "feedback",
      Nil,
      "POST",
      this.prefix + """feedback""",
      """""",
      Seq()
    )
  )

  // @LINE:13
  private[this] lazy val controllers_PersonController_updatePerson6_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("updateperson")))
  )
  private[this] lazy val controllers_PersonController_updatePerson6_invoker = createInvoker(
    PersonController_0.updatePerson(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "updatePerson",
      Nil,
      "POST",
      this.prefix + """updateperson""",
      """GET    /viewfeedback                   controllers.FeedbackController.viewfeedback()""",
      Seq()
    )
  )

  // @LINE:14
  private[this] lazy val controllers_NgoController_updateNgo7_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("updatengo")))
  )
  private[this] lazy val controllers_NgoController_updateNgo7_invoker = createInvoker(
    NgoController_1.updateNgo(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.NgoController",
      "updateNgo",
      Nil,
      "POST",
      this.prefix + """updatengo""",
      """""",
      Seq()
    )
  )

  // @LINE:15
  private[this] lazy val controllers_NgoController_updateNgodetails8_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("updatengodetails")))
  )
  private[this] lazy val controllers_NgoController_updateNgodetails8_invoker = createInvoker(
    NgoController_1.updateNgodetails(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.NgoController",
      "updateNgodetails",
      Nil,
      "POST",
      this.prefix + """updatengodetails""",
      """""",
      Seq()
    )
  )

  // @LINE:16
  private[this] lazy val controllers_PersonController_getPersons9_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("persons")))
  )
  private[this] lazy val controllers_PersonController_getPersons9_invoker = createInvoker(
    PersonController_0.getPersons(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "getPersons",
      Nil,
      "GET",
      this.prefix + """persons""",
      """""",
      Seq()
    )
  )

  // @LINE:17
  private[this] lazy val controllers_PersonController_delete10_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("delperson")))
  )
  private[this] lazy val controllers_PersonController_delete10_invoker = createInvoker(
    PersonController_0.delete(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "delete",
      Nil,
      "GET",
      this.prefix + """delperson""",
      """""",
      Seq()
    )
  )

  // @LINE:18
  private[this] lazy val controllers_PersonController_login11_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("login")))
  )
  private[this] lazy val controllers_PersonController_login11_invoker = createInvoker(
    PersonController_0.login,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "login",
      Nil,
      "POST",
      this.prefix + """login""",
      """""",
      Seq()
    )
  )

  // @LINE:19
  private[this] lazy val controllers_PersonController_getEmail12_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("getEmail")))
  )
  private[this] lazy val controllers_PersonController_getEmail12_invoker = createInvoker(
    PersonController_0.getEmail(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "getEmail",
      Nil,
      "POST",
      this.prefix + """getEmail""",
      """""",
      Seq()
    )
  )

  // @LINE:20
  private[this] lazy val controllers_PersonController_login113_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("login1")))
  )
  private[this] lazy val controllers_PersonController_login113_invoker = createInvoker(
    PersonController_0.login1(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PersonController",
      "login1",
      Nil,
      "POST",
      this.prefix + """login1""",
      """""",
      Seq()
    )
  )

  // @LINE:21
  private[this] lazy val controllers_NgoController_login114_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("ngologin1")))
  )
  private[this] lazy val controllers_NgoController_login114_invoker = createInvoker(
    NgoController_1.login1(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.NgoController",
      "login1",
      Nil,
      "POST",
      this.prefix + """ngologin1""",
      """""",
      Seq()
    )
  )

  // @LINE:22
  private[this] lazy val controllers_NgoController_getNgos15_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("ngos")))
  )
  private[this] lazy val controllers_NgoController_getNgos15_invoker = createInvoker(
    NgoController_1.getNgos(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.NgoController",
      "getNgos",
      Nil,
      "GET",
      this.prefix + """ngos""",
      """""",
      Seq()
    )
  )

  // @LINE:23
  private[this] lazy val controllers_NgoController_getNgosList16_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("ngoslist")))
  )
  private[this] lazy val controllers_NgoController_getNgosList16_invoker = createInvoker(
    NgoController_1.getNgosList(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.NgoController",
      "getNgosList",
      Nil,
      "GET",
      this.prefix + """ngoslist""",
      """""",
      Seq()
    )
  )

  // @LINE:24
  private[this] lazy val controllers_ProductController_getProducts17_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("products")))
  )
  private[this] lazy val controllers_ProductController_getProducts17_invoker = createInvoker(
    ProductController_2.getProducts,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "getProducts",
      Nil,
      "GET",
      this.prefix + """products""",
      """""",
      Seq()
    )
  )

  // @LINE:25
  private[this] lazy val controllers_ProductController_updateProduct18_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("updateproduct")))
  )
  private[this] lazy val controllers_ProductController_updateProduct18_invoker = createInvoker(
    ProductController_2.updateProduct,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "updateProduct",
      Nil,
      "POST",
      this.prefix + """updateproduct""",
      """""",
      Seq()
    )
  )

  // @LINE:26
  private[this] lazy val controllers_ProductController_getdProducts19_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("getproducts")))
  )
  private[this] lazy val controllers_ProductController_getdProducts19_invoker = createInvoker(
    ProductController_2.getdProducts,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "getdProducts",
      Nil,
      "POST",
      this.prefix + """getproducts""",
      """""",
      Seq()
    )
  )

  // @LINE:27
  private[this] lazy val controllers_ProductController_getCProducts20_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("getcproducts")))
  )
  private[this] lazy val controllers_ProductController_getCProducts20_invoker = createInvoker(
    ProductController_2.getCProducts,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "getCProducts",
      Nil,
      "POST",
      this.prefix + """getcproducts""",
      """""",
      Seq()
    )
  )

  // @LINE:28
  private[this] lazy val controllers_ProductController_delete21_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("deleteproduct")))
  )
  private[this] lazy val controllers_ProductController_delete21_invoker = createInvoker(
    ProductController_2.delete,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "delete",
      Nil,
      "POST",
      this.prefix + """deleteproduct""",
      """""",
      Seq()
    )
  )

  // @LINE:29
  private[this] lazy val controllers_NgoController_delete22_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("deletengo")))
  )
  private[this] lazy val controllers_NgoController_delete22_invoker = createInvoker(
    NgoController_1.delete,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.NgoController",
      "delete",
      Nil,
      "POST",
      this.prefix + """deletengo""",
      """""",
      Seq()
    )
  )

  // @LINE:31
  private[this] lazy val controllers_FeedbackController_getFeedback23_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("feedbacks")))
  )
  private[this] lazy val controllers_FeedbackController_getFeedback23_invoker = createInvoker(
    FeedbackController_5.getFeedback,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.FeedbackController",
      "getFeedback",
      Nil,
      "GET",
      this.prefix + """feedbacks""",
      """POST /getscproducts controllers.ProductController.getSCProducts""",
      Seq()
    )
  )

  // @LINE:32
  private[this] lazy val controllers_FeedbackController_delete24_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("deletefeedback")))
  )
  private[this] lazy val controllers_FeedbackController_delete24_invoker = createInvoker(
    FeedbackController_5.delete,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.FeedbackController",
      "delete",
      Nil,
      "POST",
      this.prefix + """deletefeedback""",
      """""",
      Seq()
    )
  )

  // @LINE:34
  private[this] lazy val controllers_ProductController_singleProduct25_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("singleproduct")))
  )
  private[this] lazy val controllers_ProductController_singleProduct25_invoker = createInvoker(
    ProductController_2.singleProduct,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "singleProduct",
      Nil,
      "POST",
      this.prefix + """singleproduct""",
      """""",
      Seq()
    )
  )

  // @LINE:35
  private[this] lazy val controllers_ProductController_buyProduct26_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("buyproduct")))
  )
  private[this] lazy val controllers_ProductController_buyProduct26_invoker = createInvoker(
    ProductController_2.buyProduct,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "buyProduct",
      Nil,
      "POST",
      this.prefix + """buyproduct""",
      """""",
      Seq()
    )
  )

  // @LINE:36
  private[this] lazy val controllers_ProductController_cartProduct27_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("cartproduct")))
  )
  private[this] lazy val controllers_ProductController_cartProduct27_invoker = createInvoker(
    ProductController_2.cartProduct,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "cartProduct",
      Nil,
      "POST",
      this.prefix + """cartproduct""",
      """""",
      Seq()
    )
  )

  // @LINE:37
  private[this] lazy val controllers_ProductController_Cartlist28_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("cartprofile")))
  )
  private[this] lazy val controllers_ProductController_Cartlist28_invoker = createInvoker(
    ProductController_2.Cartlist,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "Cartlist",
      Nil,
      "POST",
      this.prefix + """cartprofile""",
      """""",
      Seq()
    )
  )

  // @LINE:38
  private[this] lazy val controllers_ProductController_deleteCart29_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("delcart")))
  )
  private[this] lazy val controllers_ProductController_deleteCart29_invoker = createInvoker(
    ProductController_2.deleteCart,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "deleteCart",
      Nil,
      "POST",
      this.prefix + """delcart""",
      """""",
      Seq()
    )
  )

  // @LINE:39
  private[this] lazy val controllers_ProductController_clist30_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("cprofile")))
  )
  private[this] lazy val controllers_ProductController_clist30_invoker = createInvoker(
    ProductController_2.clist,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "clist",
      Nil,
      "POST",
      this.prefix + """cprofile""",
      """""",
      Seq()
    )
  )

  // @LINE:40
  private[this] lazy val controllers_ProductController_getSearchProducts31_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("csearch")))
  )
  private[this] lazy val controllers_ProductController_getSearchProducts31_invoker = createInvoker(
    ProductController_2.getSearchProducts,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "getSearchProducts",
      Nil,
      "POST",
      this.prefix + """csearch""",
      """""",
      Seq()
    )
  )

  // @LINE:41
  private[this] lazy val controllers_ProductController_addSearchProduct32_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("addsearch")))
  )
  private[this] lazy val controllers_ProductController_addSearchProduct32_invoker = createInvoker(
    ProductController_2.addSearchProduct,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "addSearchProduct",
      Nil,
      "POST",
      this.prefix + """addsearch""",
      """""",
      Seq()
    )
  )

  // @LINE:42
  private[this] lazy val controllers_ProductController_customerSearch33_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("customersearch")))
  )
  private[this] lazy val controllers_ProductController_customerSearch33_invoker = createInvoker(
    ProductController_2.customerSearch,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "customerSearch",
      Nil,
      "POST",
      this.prefix + """customersearch""",
      """""",
      Seq()
    )
  )

  // @LINE:44
  private[this] lazy val controllers_Assets_at34_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_at34_invoker = createInvoker(
    Assets_4.at(fakeValue[String], fakeValue[String]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "at",
      Seq(classOf[String], classOf[String]),
      "GET",
      this.prefix + """assets/""" + "$" + """file<.+>""",
      """ Map static resources from the /public folder to the /assets URL path""",
      Seq()
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:6
    case controllers_PersonController_index0_route(params@_) =>
      call { 
        controllers_PersonController_index0_invoker.call(PersonController_0.index())
      }
  
    // @LINE:7
    case controllers_PersonController_addPerson1_route(params@_) =>
      call { 
        controllers_PersonController_addPerson1_invoker.call(PersonController_0.addPerson())
      }
  
    // @LINE:8
    case controllers_NgoController_addNgo2_route(params@_) =>
      call { 
        controllers_NgoController_addNgo2_invoker.call(NgoController_1.addNgo())
      }
  
    // @LINE:9
    case controllers_TestController_addimg3_route(params@_) =>
      call { 
        controllers_TestController_addimg3_invoker.call(TestController_3.addimg())
      }
  
    // @LINE:10
    case controllers_ProductController_addproduct4_route(params@_) =>
      call { 
        controllers_ProductController_addproduct4_invoker.call(ProductController_2.addproduct())
      }
  
    // @LINE:11
    case controllers_FeedbackController_feedback5_route(params@_) =>
      call { 
        controllers_FeedbackController_feedback5_invoker.call(FeedbackController_5.feedback())
      }
  
    // @LINE:13
    case controllers_PersonController_updatePerson6_route(params@_) =>
      call { 
        controllers_PersonController_updatePerson6_invoker.call(PersonController_0.updatePerson())
      }
  
    // @LINE:14
    case controllers_NgoController_updateNgo7_route(params@_) =>
      call { 
        controllers_NgoController_updateNgo7_invoker.call(NgoController_1.updateNgo())
      }
  
    // @LINE:15
    case controllers_NgoController_updateNgodetails8_route(params@_) =>
      call { 
        controllers_NgoController_updateNgodetails8_invoker.call(NgoController_1.updateNgodetails())
      }
  
    // @LINE:16
    case controllers_PersonController_getPersons9_route(params@_) =>
      call { 
        controllers_PersonController_getPersons9_invoker.call(PersonController_0.getPersons())
      }
  
    // @LINE:17
    case controllers_PersonController_delete10_route(params@_) =>
      call { 
        controllers_PersonController_delete10_invoker.call(PersonController_0.delete())
      }
  
    // @LINE:18
    case controllers_PersonController_login11_route(params@_) =>
      call { 
        controllers_PersonController_login11_invoker.call(PersonController_0.login)
      }
  
    // @LINE:19
    case controllers_PersonController_getEmail12_route(params@_) =>
      call { 
        controllers_PersonController_getEmail12_invoker.call(PersonController_0.getEmail())
      }
  
    // @LINE:20
    case controllers_PersonController_login113_route(params@_) =>
      call { 
        controllers_PersonController_login113_invoker.call(PersonController_0.login1())
      }
  
    // @LINE:21
    case controllers_NgoController_login114_route(params@_) =>
      call { 
        controllers_NgoController_login114_invoker.call(NgoController_1.login1())
      }
  
    // @LINE:22
    case controllers_NgoController_getNgos15_route(params@_) =>
      call { 
        controllers_NgoController_getNgos15_invoker.call(NgoController_1.getNgos())
      }
  
    // @LINE:23
    case controllers_NgoController_getNgosList16_route(params@_) =>
      call { 
        controllers_NgoController_getNgosList16_invoker.call(NgoController_1.getNgosList())
      }
  
    // @LINE:24
    case controllers_ProductController_getProducts17_route(params@_) =>
      call { 
        controllers_ProductController_getProducts17_invoker.call(ProductController_2.getProducts)
      }
  
    // @LINE:25
    case controllers_ProductController_updateProduct18_route(params@_) =>
      call { 
        controllers_ProductController_updateProduct18_invoker.call(ProductController_2.updateProduct)
      }
  
    // @LINE:26
    case controllers_ProductController_getdProducts19_route(params@_) =>
      call { 
        controllers_ProductController_getdProducts19_invoker.call(ProductController_2.getdProducts)
      }
  
    // @LINE:27
    case controllers_ProductController_getCProducts20_route(params@_) =>
      call { 
        controllers_ProductController_getCProducts20_invoker.call(ProductController_2.getCProducts)
      }
  
    // @LINE:28
    case controllers_ProductController_delete21_route(params@_) =>
      call { 
        controllers_ProductController_delete21_invoker.call(ProductController_2.delete)
      }
  
    // @LINE:29
    case controllers_NgoController_delete22_route(params@_) =>
      call { 
        controllers_NgoController_delete22_invoker.call(NgoController_1.delete)
      }
  
    // @LINE:31
    case controllers_FeedbackController_getFeedback23_route(params@_) =>
      call { 
        controllers_FeedbackController_getFeedback23_invoker.call(FeedbackController_5.getFeedback)
      }
  
    // @LINE:32
    case controllers_FeedbackController_delete24_route(params@_) =>
      call { 
        controllers_FeedbackController_delete24_invoker.call(FeedbackController_5.delete)
      }
  
    // @LINE:34
    case controllers_ProductController_singleProduct25_route(params@_) =>
      call { 
        controllers_ProductController_singleProduct25_invoker.call(ProductController_2.singleProduct)
      }
  
    // @LINE:35
    case controllers_ProductController_buyProduct26_route(params@_) =>
      call { 
        controllers_ProductController_buyProduct26_invoker.call(ProductController_2.buyProduct)
      }
  
    // @LINE:36
    case controllers_ProductController_cartProduct27_route(params@_) =>
      call { 
        controllers_ProductController_cartProduct27_invoker.call(ProductController_2.cartProduct)
      }
  
    // @LINE:37
    case controllers_ProductController_Cartlist28_route(params@_) =>
      call { 
        controllers_ProductController_Cartlist28_invoker.call(ProductController_2.Cartlist)
      }
  
    // @LINE:38
    case controllers_ProductController_deleteCart29_route(params@_) =>
      call { 
        controllers_ProductController_deleteCart29_invoker.call(ProductController_2.deleteCart)
      }
  
    // @LINE:39
    case controllers_ProductController_clist30_route(params@_) =>
      call { 
        controllers_ProductController_clist30_invoker.call(ProductController_2.clist)
      }
  
    // @LINE:40
    case controllers_ProductController_getSearchProducts31_route(params@_) =>
      call { 
        controllers_ProductController_getSearchProducts31_invoker.call(ProductController_2.getSearchProducts)
      }
  
    // @LINE:41
    case controllers_ProductController_addSearchProduct32_route(params@_) =>
      call { 
        controllers_ProductController_addSearchProduct32_invoker.call(ProductController_2.addSearchProduct)
      }
  
    // @LINE:42
    case controllers_ProductController_customerSearch33_route(params@_) =>
      call { 
        controllers_ProductController_customerSearch33_invoker.call(ProductController_2.customerSearch)
      }
  
    // @LINE:44
    case controllers_Assets_at34_route(params@_) =>
      call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        controllers_Assets_at34_invoker.call(Assets_4.at(path, file))
      }
  }
}
