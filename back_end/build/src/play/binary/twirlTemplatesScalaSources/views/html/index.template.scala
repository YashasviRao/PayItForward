
package views.html

import models._
import controllers._
import play.api.i18n._
import play.api.templates.PlayMagic._
import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import java.lang._
import java.util._
import scala.collection.JavaConverters._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.libs.F
import play.api.data.Field
import play.mvc.Http.Context.Implicit._
import play.data._
import play.core.j.PlayFormsMagicForJava._
import views.html._

object index extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.4*/("""

"""),_display_(/*3.2*/main("Welcome to Play")/*3.25*/ {_display_(Seq[Any](format.raw/*3.27*/("""
    """),format.raw/*4.5*/("""<script type='text/javascript' src='"""),_display_(/*4.42*/routes/*4.48*/.Assets.at("javascripts/index.js")),format.raw/*4.82*/("""'></script>

    <ul id="persons"></ul>

    <form method="POST" action=""""),_display_(/*8.34*/routes/*8.40*/.PersonController.addPerson()),format.raw/*8.69*/("""">
        <input type="text" name="name"/>
        <button>Add Person</button>
    </form>
""")))}),format.raw/*12.2*/("""
"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Mon May 10 18:41:20 IST 2021
                  SOURCE: C:/Users/Siri/Desktop/react/newPro/2021_pay_it_forward/back_end/app/views/index.scala.html
                  HASH: e4e4b620215410a29329bb3810d4340d22be744d
                  MATRIX: 960->1|1056->3|1086->8|1117->31|1156->33|1188->39|1251->76|1265->82|1319->116|1423->194|1437->200|1486->229|1613->326
                  LINES: 29->1|34->1|36->3|36->3|36->3|37->4|37->4|37->4|37->4|41->8|41->8|41->8|45->12
                  -- GENERATED --
              */
          