(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss":
      /*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/App.scss ***!
  \************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Imports
        exports.push([
          module.i,
          "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);",
          "",
        ]);

        // Module
        exports.push([
          module.i,
          '.App {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "Open Sans", sans-serif; }\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none; }\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; }\n\n.App-link {\n  color: #61dafb; }\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.login {\n  width: 27em;\n  height: 40em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n  position: relative;\n  z-index: 99; }\n  .login .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);\n    border-radius: 4px;\n    position: relative;\n    z-index: 99;\n    width: 100%;\n    height: 100%;\n    z-index: 99;\n    padding: 17px 10px; }\n  .login .right-side {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 90%;\n    background-color: #3498db;\n    width: 100%;\n    position: absolute;\n    right: -34%;\n    border-radius: 6px;\n    z-index: 1;\n    transition: all 400ms ease-in-out;\n    cursor: pointer;\n    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.281); }\n    .login .right-side.right {\n      right: -40%;\n      align-items: flex-end; }\n      .login .right-side.right:hover {\n        right: -45%; }\n    .login .right-side.left {\n      right: 40%;\n      align-items: flex-start; }\n      .login .right-side.left:hover {\n        right: 45%; }\n    .login .right-side .text {\n      font-size: 21px;\n      font-weight: 500;\n      color: #fff;\n      margin-right: 3em;\n      margin-left: 3em; }\n\n.btn {\n  font-size: 21px;\n  padding: 5px 20px;\n  border: 0;\n  background-color: #3498db;\n  color: #fff;\n  border-radius: 3px;\n  transition: all 250ms ease-in-out;\n  cursor: pointer; }\n  .btn:hover {\n    background-color: #2386c8; }\n  .btn:focus {\n    outline: none; }\n',
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/login/App.scss":
      /*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/login/App.scss ***!
  \*****************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Imports
        exports.push([
          module.i,
          "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);",
          "",
        ]);

        // Module
        exports.push([
          module.i,
          '.App {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "Open Sans", sans-serif;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none; }\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; }\n\n.App-link {\n  color: #61dafb; }\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.login {\n  width: 27em;\n  height: 40em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n  position: relative;\n  z-index: 99; }\n  .login .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);\n    border-radius: 4px;\n    position: relative;\n    z-index: 99;\n    width: 100%;\n    height: 130%;\n    z-index: 99; }\n  .login .right-side {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 130%;\n    padding-top: 20px;\n    margin-top: 160px;\n    background-color: #3498db;\n    width: 100%;\n    position: absolute;\n    right: -34%;\n    border-radius: 6px;\n    z-index: 1;\n    transition: all 400ms ease-in-out;\n    cursor: pointer;\n    box-shadow: 10px 0px 12px 2px rgba(15, 15, 15, 0.281); }\n    .login .right-side.right {\n      right: -100%;\n      align-items: flex-end; }\n      .login .right-side.right:hover {\n        right: -95%; }\n    .login .right-side.left {\n      right: 10%;\n      align-items: flex-start; }\n      .login .right-side.left:hover {\n        right: 15%; }\n    .login .right-side .text {\n      font-size: 21px;\n      font-weight: 500;\n      color: #fff;\n      margin-right: 3em;\n      margin-left: 3em; }\n\n.btn {\n  font-size: 21px;\n  padding: 5px 20px;\n  border: 0;\n  background-color: #3498db;\n  color: #fff;\n  border-radius: 3px;\n  transition: all 250ms ease-in-out;\n  cursor: pointer; }\n  .btn:hover {\n    background-color: #2386c8; }\n  .btn:focus {\n    outline: none; }\n',
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/login/style.scss":
      /*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/login/style.scss ***!
  \*******************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          '.base-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .base-container .header {\n    font-size: 24px;\n    font-family: "Open Sans", sans-serif; }\n  .base-container .content {\n    display: flex;\n    flex-direction: column; }\n    .base-container .content .image {\n      width: 21em; }\n      .base-container .content .image img {\n        width: 100%;\n        height: 100%; }\n    .base-container .content .form {\n      margin-top: 2em;\n      display: flex;\n      flex-direction: column;\n      align-items: center; }\n      .base-container .content .form .form-group {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        width: fit-content; }\n        .base-container .content .form .form-group label {\n          font-size: 20px; }\n        .base-container .content .form .form-group input {\n          margin-top: 6px;\n          min-width: 18em;\n          height: 37px;\n          padding: 0px 10px;\n          font-size: 16px;\n          font-family: "Open Sans", sans-serif;\n          background-color: #f3f3f3;\n          border: 0;\n          border-radius: 4px;\n          margin-bottom: 31px;\n          transition: all 250ms ease-in-out; }\n          .base-container .content .form .form-group input:focus {\n            outline: none;\n            box-shadow: 0px 0px 12px 0.8px #3474dbb2; }\n  .base-container .footer {\n    margin-top: 3em; }\n',
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Home.css":
      /*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Home.css ***!
  \************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Imports
        exports.push([
          module.i,
          "@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap);",
          "",
        ]);
        exports.push([
          module.i,
          "@import url(https://fonts.googleapis.com/css?family=Dancing+Script&display=swap);",
          "",
        ]);
        var urlEscape = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js"
        );
        var ___CSS_LOADER_URL___0___ = urlEscape(
          __webpack_require__(
            /*! ./img/aboutback.jpeg */ "./src/components/img/aboutback.jpeg"
          )
        );
        var ___CSS_LOADER_URL___1___ = urlEscape(
          __webpack_require__(
            /*! ./img/ccc.jpg */ "./src/components/img/ccc.jpg"
          )
        );

        // Module
        exports.push([
          module.i,
          "#about{\n    padding:20px 500px 20px 500px;\n    background-image: url(" +
            ___CSS_LOADER_URL___0___ +
            ");\n    background-repeat: no-repeat;\n    width: 100%;\n    height:55%;\n    background-size: cover;\n}\n\n\n.imageabout{\n box-shadow: 6px 6px 7px #888888;\n  width:300px;\n  height:300px;\n  position: relative;\n  overflow: hidden;\n  margin-top:100px;\n  margin-left:135px;\n  transform: rotate(45deg);\n  margin-right:120px;\n  float: left;\n}\n\n.imageabout:before{\n    content: '';\n  margin-top:-63px;\n  margin-left:-80px;\n  position: absolute;\n  width: 450px;\n  height: 450px;\n  transform: rotate(-45deg);\n}\n\n.imageabout:hover \n{\n  box-shadow: 3px 3px 7px #888888;\n  cursor:pointer;\n}\n.contentHead\n{\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size:60px;\n  font-weight:500;\n  text-decoration:underline;\n  color:rgb(4, 101, 130);\n}\np{\n    font-family: 'Dancing Script', cursive;\n    font-size: 23px;\n    float : left;\n    color:black;\n}\n\n#contact{\n    padding: 20px 1800px 40px 200px;\n    background-image: url(" +
            ___CSS_LOADER_URL___1___ +
            ");\n    background-repeat: no-repeat;\n    width: 100%;\n    height:cover;\n    background-size: 100%;\n\n}\n\n#text{\n    font-size: 25px;\n    border-radius: 25px;\n    border: 2px solid black;\n}\n#textarea{\n    font-size: 25px;\n    border-radius: 25px;\n    border: 2px solid black;\n}\n\n#submit{\n    background-color: rgb(4, 101, 130);\n    color:white;\n    font-size: 20px;\n    width:250px;\n    height:70px;\n}\n#submit:hover{\n    background-color: #000;\n    color:white;\n}\n\n\n\n",
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home_nav.css":
      /*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/home_nav.css ***!
  \***********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          "body {\n    margin: 0;\n    font-family: 'M PLUS Rounded 1c, sans-serif';\n  }\n  \n  \n  .image .btn {\n    position: absolute;\n    top: 50%;\n    left: 75%;\n    transform: translate(-50%, -50%);\n    border-radius: 4px;\n    background-color: rgb(4, 101, 130);\n    border: none;\n    color: #FFFFFF;\n    text-align: center;\n    font-size: 28px;\n    padding: 20px;\n    width: 250px;\n    transition: all 0.5s; \n    cursor: pointer;\n    margin: 5px;\n  }\n  .image .btn span{\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n  .image .btn span:after{\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n  \n  .image .btn:hover span{\n    padding-right: 25px;\n  }\n  .image .btn:hover span:after{\n    opacity: 1;\n    right: 0;\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 10px;\n    overflow: hidden;\n    border: 1px solid #e7e7e7;\n    background-color: rgb(4, 101, 130);\n  }\n  .nav{\n    height:70px;\n  }\n  \n  \n  .nav li a {\n    display: block;\n    color: rgb(26, 17, 17);\n    text-align: center;\n    text-decoration: none;\n  }\n  \n  .nav li a:hover:not(.active) {\n    background-color: #ddd;\n    color: rgb(4, 101, 130);\n  }\n  \n  .nav li a.active {\n    color: white;\n    padding: 10px;\n    float: left;\n  }\n  .nav li a.links {\n    color: white;\n    padding: 25px;\n    width: 90px;\n    float: right;\n    font-size: 20px;\n  }\n  \n\n\n\n\n\n  ",
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/home_nav.css":
      /*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/admin/home_nav.css ***!
  \*****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          "body {\n    margin: 0;\n    font-family: 'M PLUS Rounded 1c, sans-serif';\n  }\n  .home{\n    width:100%;\n    height:100%;\n    margin:0px;\n  }\n  \n  .nav{\n      width:100%;\n      height:100%;\n  }\n  .image img {\n    width: 2500px;\n    height: 1250px;\n  }\n  \n  .image .btn {\n    position: absolute;\n    top: 50%;\n    left: 75%;\n    transform: translate(-50%, -50%);\n    border-radius: 4px;\n    background-color: rgb(4, 101, 130);\n    border: none;\n    color: #FFFFFF;\n    text-align: center;\n    font-size: 28px;\n    padding: 20px;\n    width: 250px;\n    transition: all 0.5s; \n    cursor: pointer;\n    margin: 5px;\n  }\n  .image .btn span{\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n  .image .btn span:after{\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n  \n  .image .btn:hover span{\n    padding-right: 25px;\n  }\n  .image .btn:hover span:after{\n    opacity: 1;\n    right: 0;\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0px;\n    overflow: hidden;\n    border: 1px solid #e7e7e7;\n    background-color: rgb(4, 101, 130);\n  }\n  .nav{\n    height:70px;\n    \n  }\n  \n  \n  .nav li a {\n    display: block;\n    color: rgb(26, 17, 17);\n    text-align: center;\n    text-decoration: none;\n    margin-right: 35px;\n    padding-right: 25px;\n  }\n  \n  .nav li a:hover:not(.active) {\n    background-color: #ddd;\n    color: rgb(4, 101, 130);\n  }\n  \n  .nav li a.active {\n    color: white;\n    padding: 15px;\n    float: left;\n  }\n  .nav li a.links {\n    color: white;\n    padding: 25px;\n    width: 130px;\n    height:100px;\n    float: right;\n    font-size: 20px;\n  }\n  \n\n\n\n\n\n  ",
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/addcats.css":
      /*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/admin/addcats.css ***!
  \********************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          ".adminmain{\n  position: relative;\n}\n.adminc{\n  position: absolute;\n  top:30%;\n  left:15%;\n  padding: 25px;\n  width: 600px;\n  background-color: rgb(243, 145, 137);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #ffffff;\n}\n\ntextarea{\nwidth: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #ffffff;\n}\n\nlabel{\n  float: left;\n}\n/* Set a style for the submit button */\n.addbtn {\n  background-color: rgb(4, 101, 130);\n  color: white;\n  padding: 16px 20px;\n  margin: 30px 0;\n  border: none;\n  cursor: pointer;\n  width: 50%;\n  opacity: 0.9;\n}\n\n.addbtn:hover {\n  opacity: 1;\n}\n\n.imgf{\n  width: 100px;\n  height:100px;\n  position: relative;\n  border: 2px solid #F8F8F8;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n\n.imgf .upload{\n  width:100%;\n  height:100%;\n}\n\n.fimages{\n  margin-left:120px;\n  width: 19%;\n}",
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/style.css":
      /*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/admin/style.css ***!
  \*******************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          "h1 {\n    margin: 0;\n    padding: 0;\n  }\n  html, body, .app1 {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    width: 100%;\n    height: 100vh;\n  }\n  .popup {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    background-color: rgba(0,0,0, 0.5);\n  }\n  .popup_inner {\n    position: absolute;\n    left: 25%;\n    right: 25%;\n    top: 25%;\n    bottom: 25%;\n    margin: auto;\n    background: white;\n  }",
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/validate.css":
      /*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/admin/validate.css ***!
  \**********************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          ".adminmain{\n    position: relative;\n  }\n.atable {\n  position: absolute;\n  left:25%;\n  top: 20%;\n  padding-bottom:0px;\n  background-color: rgb(255, 255, 255);\n  width:1200px;\n  height: absolute;\n}\nbutton{\n  font-size:20px;\n  padding:10px;\n}",
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/home_nav.css":
      /*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/donor/home_nav.css ***!
  \*****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          "body {\n    margin: 0;\n    font-family: 'M PLUS Rounded 1c, sans-serif';\n  }\n  .home{\n    width:100%;\n    height:100%;\n    margin:0px;\n  }\n  \n  .nav{\n      width:100%;\n      height:100%;\n  }\n  .image img {\n    width: 2500px;\n    height: 1250px;\n  }\n  \n  .image .btn {\n    position: absolute;\n    top: 50%;\n    left: 75%;\n    transform: translate(-50%, -50%);\n    border-radius: 4px;\n    background-color: rgb(4, 101, 130);\n    border: none;\n    color: #FFFFFF;\n    text-align: center;\n    font-size: 28px;\n    padding: 20px;\n    width: 250px;\n    transition: all 0.5s; \n    cursor: pointer;\n    margin: 5px;\n  }\n  .image .btn span{\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n  .image .btn span:after{\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n  \n  .image .btn:hover span{\n    padding-right: 25px;\n  }\n  .image .btn:hover span:after{\n    opacity: 1;\n    right: 0;\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    border: 1px solid #e7e7e7;\n    background-color: rgb(4, 101, 130);\n  }\n  .nav{\n    height:70px;\n  }\n  \n  \n  .nav li a {\n    display: block;\n    color: rgb(26, 17, 17);\n    text-align: center;\n    text-decoration: none;\n  }\n  \n  .nav li a:hover:not(.active) {\n    background-color: #ddd;\n    color: rgb(4, 101, 130);\n  }\n  \n  .nav li a.active {\n    color: white;\n    padding: 10px;\n    float: left;\n  }\n  .nav li a.links {\n    color: white;\n    padding: 25px;\n    height:84px;\n    width: 140px;\n    float: right;\n    font-size: 20px;\n  }\n  \n\n\n\n\n\n  ",
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/donorhome.css":
      /*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/donor/donorhome.css ***!
  \********************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          '* {\n    box-sizing: border-box;\n  }\n  \n.imgfile{\n  width: 100px;\n  height:100px;\n  position: relative;\n  border: 2px solid #F8F8F8;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n\n.imgfile .upload{\n  width:100%;\n  height:100%;\n}\n\n.fileimages{\n  float: left;\n  width: 16%;\n}\n\ninput[type=text], textarea, select{\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: vertical;\n}\n\ninput[type=date]{\nwidth: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: vertical;\n}\n\n\nlabel {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n  \n}\n\n.submit {\n  background-color: rgb(4, 101, 130);\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 20px;\n  \n}\n\n.submit:hover {\n  background-color: #ffffff;\n  color: rgb(4, 101, 130);\n}\n\n.main{\n  position: relative;\n}\n.container {\n  position: absolute;\n  left:45%;\n  top: 25%;\n  border-radius: 5px;\n  background-color: rgb(243, 145, 137);\n  padding: 20px;\n  width:1050px;\n  height: 600px;\n}\n\n.col-25 {\n  float: left;\n  width: 15%;\n  margin-top: 6px;\n}\n\n.col-75 {\n  float: left;\n  width: 30%;\n  margin-top: 6px;\n  margin-right:50px;\n}\n\n.row:after {\n  content: "";\n  display: table;\n  clear: both;\n}',
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/myprofile.css":
      /*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/donor/myprofile.css ***!
  \***********************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          '* {\n    box-sizing: border-box;\n  }\n  \n \n  label {\n    padding: 12px 12px 12px 0;\n    display: inline-block;\n    \n  }\n  \n  h2{\n    color:rgb(4, 101, 130)\n  }\n .profile{\n    position: relative;\n  }\n  .pcontainer {\n    position: absolute;\n    left:35%;\n    top: 20%;\n    border-radius: 5px;\n    background-color: rgb(243, 145, 137);\n    width:700px;\n    height: 650px;\n  }\n\n  table{\n    \n    margin-right: 0px;\n    margin-top:700px;\n  }\n  \n  .collabel {\n    float: left;\n    width: 15%;\n    margin-top: 6px;\n    margin-left:100px;\n  }\n  \n  .colvalue {\n    float: left;\n    width: 30%;\n    margin-top: 6px;\n    margin-left:30px;\n    \n  }\n \n  .row:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n  ',
          "",
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
      /*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          'body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n\nhtml,\nbody,\n#root,\n.App {\n  width: 100%;\n  height: 100%;\n}\n',
          "",
        ]);

        /***/
      },

    /***/ "./src/App.js":
      /*!********************!*\
  !*** ./src/App.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./App.scss */ "./src/App.scss");
        /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _App_scss__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
          );
        /* harmony import */ var _components_login_login_register__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./components/login/login_register */ "./src/components/login/login_register.js"
          );
        /* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./components/Home */ "./src/components/Home.js"
          );
        /* harmony import */ var _components_donor_d_home__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./components/donor/d_home */ "./src/components/donor/d_home.js"
          );
        /* harmony import */ var _components_admin_addngo__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./components/admin/addngo */ "./src/components/admin/addngo.js"
          );
        /* harmony import */ var _components_admin_addproduct__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./components/admin/addproduct */ "./src/components/admin/addproduct.js"
          );
        /* harmony import */ var _components_donor_myprofile__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./components/donor/myprofile */ "./src/components/donor/myprofile.js"
          );
        /* harmony import */ var _components_admin_feedback__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./components/admin/feedback */ "./src/components/admin/feedback.js"
          );
        /* harmony import */ var _components_admin_validate__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./components/admin/validate */ "./src/components/admin/validate.js"
          );
        /* harmony import */ var _components_donor_dimg__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./components/donor/dimg */ "./src/components/donor/dimg.js"
          );
        /* harmony import */ var _components_purchaser_chome__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./components/purchaser/pur_home */ "./src/components/purchaser/pur_home.js"
          );
        var _jsxFileName = "/Users/macadmin/Desktop/praj/src/App.js";

        class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  className: "App",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    exact: true,
                    path: "/",
                    component:
                      _components_Home__WEBPACK_IMPORTED_MODULE_4__["default"],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/login",
                    component:
                      _components_login_login_register__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/home",
                    component:
                      _components_Home__WEBPACK_IMPORTED_MODULE_4__["default"],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/donorhome",
                    component:
                      _components_donor_d_home__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/addngo",
                    component:
                      _components_admin_addngo__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/feedback",
                    component:
                      _components_admin_feedback__WEBPACK_IMPORTED_MODULE_9__[
                        "default"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/validate",
                    component:
                      _components_admin_validate__WEBPACK_IMPORTED_MODULE_10__[
                        "default"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/addproduct",
                    component:
                      _components_admin_addproduct__WEBPACK_IMPORTED_MODULE_7__[
                        "default"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/donorprofile",
                    component:
                      _components_donor_myprofile__WEBPACK_IMPORTED_MODULE_8__[
                        "default"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
                  {
                    path: "/pur_home",
                    component:
                      _components_purchaser_chome__WEBPACK_IMPORTED_MODULE_12__[
                        "default"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                    },
                    __self: this,
                  }
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = App;

        /***/
      },

    /***/ "./src/App.scss":
      /*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss",
            function () {
              var newContent = __webpack_require__(
                /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/Home.css":
      /*!*********************************!*\
  !*** ./src/components/Home.css ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Home.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Home.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Home.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/Home.js":
      /*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Nav */ "./src/components/Nav.js");
        /* harmony import */ var _img_login_img_jpeg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./img/login_img.jpeg */ "./src/components/img/login_img.jpeg"
          );
        /* harmony import */ var _img_login_img_jpeg__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_login_img_jpeg__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _img_pitimg1_jpg__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./img/pitimg1.jpg */ "./src/components/img/pitimg1.jpg"
          );
        /* harmony import */ var _img_pitimg1_jpg__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_pitimg1_jpg__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./home_nav.css */ "./src/components/home_nav.css"
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _Nav_css__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./Home.css */ "./src/components/Home.css");
        /* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _Home_css__WEBPACK_IMPORTED_MODULE_5__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/Home.js";

        const home = {
          backgroundImage:
            "url(" +
            _img_login_img_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a +
            ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        };

        class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);

            this.handleNameChange = (event) => {
              this.setState({
                name: event.target.value,
              });
            };

            this.handleEmailChange = (event) => {
              this.setState({
                email: event.target.value,
              });
            };

            this.handlePhoneChange = (event) => {
              this.setState({
                phone: event.target.value,
              });
            };

            this.handleMsgChange = (event) => {
              this.setState({
                msg: event.target.value,
              });
            };

            this.state = {
              name: "",
              email: "",
              phone: "",
              msg: "",
            };
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleMsgChange = this.handleMsgChange.bind(this);
            this.handlePhoneChange = this.handlePhoneChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          handleSubmit(event) {
            event.preventDefault();
          }

          handleSubmit(event) {
            event.preventDefault();
            console.log(this.state);
            var body = {
              email: this.state.email,
              username: this.state.name,
              phone: this.state.phone,
              msg: this.state.msg,
            };
            console.log(body);
            const url = "http://localhost:9000/feedback";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append("Access-Control-Allow-origin", url);
            headers.append("Access-Control-Allow-Credentials", "true");
            headers.append("POST", "GET");
            fetch(url, {
              headers: headers,
              method: "POST",
              body: JSON.stringify(body),
            }).then((response) => {
              if (response.ok) {
                alert("Feedback Details submitted");
              }
            });
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                style: home,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                  },
                  __self: this,
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  class: "image",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "a",
                  {
                    class: "btn",
                    href: "/login",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                      },
                      __self: this,
                    },
                    "Register/Login"
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  id: "about",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "center",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h1",
                    {
                      class: "contentHead",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                      },
                      __self: this,
                    },
                    "ABOUT..Pay It Forward"
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "img",
                    {
                      src: _img_pitimg1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
                      class: "imageabout",
                      alt: "about",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h2",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                      },
                      __self: this,
                    },
                    "Hi Donor/Purchaser,",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "br",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                        },
                        __self: this,
                      }
                    ),
                    "Pay It Forward is a platform to raise funds for NGO's. It is a website for donors and purchasers, where donors donate products which they are not in need of. These products are kept on sale for purchasers to buy at nomial price. And the money is transfered to the specific NGO choosen by Donor. ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "br",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                        },
                        __self: this,
                      }
                    ),
                    "So likely the idea of Pay It Forward is fulfilled.."
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  id: "contact",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "center",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h1",
                    {
                      class: "contentHead",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                      },
                      __self: this,
                    },
                    "CONTACT US"
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "form",
                  {
                    class: "contactform",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "input",
                    {
                      id: "text",
                      type: "text",
                      placeholder: "Name...",
                      name: "name",
                      value: this.state.name,
                      onChange: this.handleNameChange,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "input",
                    {
                      id: "text",
                      type: "text",
                      placeholder: "Email..",
                      name: "email",
                      value: this.state.email,
                      onChange: this.handleEmailChange,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "input",
                    {
                      id: "text",
                      type: "text",
                      placeholder: "Phone Number..",
                      name: "phone",
                      value: this.state.phone,
                      onChange: this.handlePhoneChange,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "textarea",
                    {
                      cols: "20",
                      rows: "10",
                      id: "textarea",
                      placeholder: "Message..",
                      name: "msg",
                      value: this.state.msg,
                      onChange: this.handleMsgChange,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                      type: "submit",
                      id: "submit",
                      onClick: this.handleSubmit,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                      },
                      __self: this,
                    },
                    "Submit"
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                },
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                },
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                },
                __self: this,
              })
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Home;

        /***/
      },

    /***/ "./src/components/home_nav.css":
      /*!********************************!*\
  !*** ./src/components/home_nav.css ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home_nav.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home_nav.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home_nav.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/Nav.js":
      /*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./home_nav.css */ "./src/components/home_nav.css"
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _Nav_css__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./img/pit.jpg */ "./src/components/img/pit.jpg"
          );
        /* harmony import */ var _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
          );
        var _jsxFileName = "/Users/macadmin/Desktop/praj/src/components/Nav.js";

        class Nav extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  class: "home",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    class: "nav",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 13,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 15,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "active",
                          href: "/",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "img",
                          {
                            alt: "sorry",
                            height: "80px",
                            width: "300px",
                            src: _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 15,
                            },
                            __self: this,
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 16,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "#about",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16,
                          },
                          __self: this,
                        },
                        "AboutUs"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 17,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "#contact",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17,
                          },
                          __self: this,
                        },
                        "ContactUs"
                      )
                    )
                  )
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Nav;

        /***/
      },

    /***/ "./src/components/admin/home_nav.css":
      /*!**************************************!*\
  !*** ./src/components/admin/home_nav.css ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/home_nav.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/home_nav.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/home_nav.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/admin/Nav.js":
      /*!*************************************!*\
  !*** ./src/components/admin/Nav.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./home_nav.css */ "./src/components/admin/home_nav.css"
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _Nav_css__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../img/pit.jpg */ "./src/components/img/pit.jpg"
          );
        /* harmony import */ var _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/admin/Nav.js";

        class AdminNav extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  class: "home",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    class: "nav",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 16,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "active",
                          href: "/",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "img",
                          {
                            alt: "sorry",
                            height: "120%",
                            width: "15%",
                            src: _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 16,
                            },
                            __self: this,
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 17,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "/login",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17,
                          },
                          __self: this,
                        },
                        "Log Out"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 18,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "/feedback",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18,
                          },
                          __self: this,
                        },
                        "Feedback"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 19,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "/addngo",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19,
                          },
                          __self: this,
                        },
                        "Add NGO"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 20,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "/validate",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20,
                          },
                          __self: this,
                        },
                        "Validate Products"
                      )
                    )
                  )
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = AdminNav;

        /***/
      },

    /***/ "./src/components/admin/addcats.css":
      /*!*****************************************!*\
  !*** ./src/components/admin/addcats.css ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./addcats.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/addcats.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./addcats.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/addcats.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./addcats.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/addcats.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/admin/addngo.js":
      /*!****************************************!*\
  !*** ./src/components/admin/addngo.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Nav */ "./src/components/admin/Nav.js");
        /* harmony import */ var _img_ngo_jpg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../img/ngo.jpg */ "./src/components/img/ngo.jpg"
          );
        /* harmony import */ var _img_ngo_jpg__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_ngo_jpg__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _addngo_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./addcats.css */ "./src/components/admin/addcats.css"
          );
        /* harmony import */ var _addngo_css__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _addngo_css__WEBPACK_IMPORTED_MODULE_3__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/admin/addngo.js";

        const admin = {
          backgroundImage:
            "url(" + _img_ngo_jpg__WEBPACK_IMPORTED_MODULE_2___default.a + ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        };

        class Addngo extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);

            this.handleNameChange = (event) => {
              this.setState({
                name: event.target.value,
              });
            };

            this.handleEmailChange = (event) => {
              this.setState({
                email: event.target.value,
              });
            };

            this.handlePhoneChange = (event) => {
              this.setState({
                phone: event.target.value,
              });
            };

            this.handleAddressChange = (event) => {
              this.setState({
                address: event.target.value,
              });
            };

            this.handleSubmit = (event) => {
              event.preventDefault();
              console.log(this.state);
              var body = {
                email: this.state.email,
                ngo: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
              };
              console.log(body);

              if (this.state.name == "") {
                alert("Please enter the name");
              } else if (this.state.email == "") {
                alert("Please enter the email");
              } else if (this.state.phone == "") {
                alert("Please enter the phone");
              } else if (this.state.address == "") {
                alert("Please enter the address");
              } else {
                const url = "http://localhost:9000/addngo";
                let headers = new Headers();
                headers.append("Content-Type", "application/json");
                headers.append("Accept", "application/json");
                headers.append("Access-Control-Allow-origin", url);
                headers.append("Access-Control-Allow-Credentials", "true");
                headers.append("POST", "GET");
                fetch(url, {
                  headers: headers,
                  method: "POST",
                  body: JSON.stringify(body),
                }).then((response) => {
                  if (response.ok) {
                    alert("NGO Details submitted");
                  }
                });
              }
            };

            this.state = {
              email: "",
              name: "",
              address: "",
              phone: "",
            };
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleAddressChange = this.handleAddressChange.bind(this);
            this.handlePhoneChange = this.handlePhoneChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          handleSubmit(event) {
            event.preventDefault();
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                style: admin,
                class: "adminmain",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                  },
                  __self: this,
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    class: "adminc",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h1",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                      },
                      __self: this,
                    },
                    "ADDING NGO FORM.."
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    {
                      for: "ngo",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                        },
                        __self: this,
                      },
                      "NGO name :"
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "input",
                    {
                      type: "text",
                      placeholder: "ngo name",
                      name: "ngo",
                      value: this.state.name,
                      onChange: this.handleNameChange,
                      required: true,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    {
                      for: "email",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                        },
                        __self: this,
                      },
                      "Email :"
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "input",
                    {
                      type: "text",
                      placeholder: "Enter Email",
                      name: "email",
                      value: this.state.email,
                      onChange: this.handleEmailChange,
                      required: true,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    {
                      for: "phno",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 121,
                        },
                        __self: this,
                      },
                      "Phone number :"
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "input",
                    {
                      type: "text",
                      placeholder: "phone number..",
                      name: "phno",
                      value: this.state.phone,
                      onChange: this.handlePhoneChange,
                      required: true,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    {
                      for: "addr",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                        },
                        __self: this,
                      },
                      "Address :"
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "textarea",
                    {
                      placeholder: "Enter NGO address",
                      name: "addr",
                      value: this.state.address,
                      onChange: this.handleAddressChange,
                      required: true,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "center",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "button",
                      {
                        type: "submit",
                        class: "addbtn",
                        name: "add",
                        onClick: this.handleSubmit.bind(this),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                        },
                        __self: this,
                      },
                      "Add NGO"
                    )
                  )
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Addngo;

        /***/
      },

    /***/ "./src/components/admin/addproduct.js":
      /*!********************************************!*\
  !*** ./src/components/admin/addproduct.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Nav */ "./src/components/admin/Nav.js");
        /* harmony import */ var _addngo_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./addcats.css */ "./src/components/admin/addcats.css"
          );
        /* harmony import */ var _addngo_css__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _addngo_css__WEBPACK_IMPORTED_MODULE_2__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/admin/addproduct.js";

        class Addproduct extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);
            this.state = {};
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                class: "adminmain",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                  },
                  __self: this,
                }
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] =
          Addproduct;

        /***/
      },

    /***/ "./src/components/admin/feedback.js":
      /*!******************************************!*\
  !*** ./src/components/admin/feedback.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Nav */ "./src/components/admin/Nav.js");
        /* harmony import */ var _img_ngo_jpg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../img/ngo.jpg */ "./src/components/img/ngo.jpg"
          );
        /* harmony import */ var _img_ngo_jpg__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_ngo_jpg__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _addngo_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./addcats.css */ "./src/components/admin/addcats.css"
          );
        /* harmony import */ var _addngo_css__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _addngo_css__WEBPACK_IMPORTED_MODULE_3__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/admin/feedback.js";

        const admin = {
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        };

        class Feedback extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          feedbacks() {
            const url = "http://localhost:9000/viewfeedback";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append("Access-Control-Allow-origin", url);
            headers.append("Access-Control-Allow-Credentials", "true");
            headers.append("POST", "GET");
            fetch(url, {
              headers: headers,
              method: "GET",
            })
              .then((response) => {
                return response.json();
              })
              .then((res) => {
                this.setState({
                  s: res,
                });
                console.log(this.state.s);
              });
          }

          componentDidMount() {
            this.feedbacks();
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                style: admin,
                class: "adminmain",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                  },
                  __self: this,
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "table",
                {
                  id: "product",
                  class: "atable",
                  border: "1",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                    },
                    __self: this,
                  },
                  "Name"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                    },
                    __self: this,
                  },
                  "Email"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                    },
                    __self: this,
                  },
                  "Phone Number"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                    },
                    __self: this,
                  },
                  "Message"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                    },
                    __self: this,
                  },
                  "Delete"
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Feedback;

        /***/
      },

    /***/ "./src/components/admin/popupform.js":
      /*!*******************************************!*\
  !*** ./src/components/admin/popupform.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./style.css */ "./src/components/admin/style.css"
          );
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _style_css__WEBPACK_IMPORTED_MODULE_1__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/admin/popupform.js";

        class Popup extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "popup",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  className: "popup_inner",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "h1",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 10,
                    },
                    __self: this,
                  },
                  this.props.text
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "button",
                  {
                    onClick: this.props.closePopup,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 11,
                    },
                    __self: this,
                  },
                  "close me"
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Popup;

        /***/
      },

    /***/ "./src/components/admin/style.css":
      /*!****************************************!*\
  !*** ./src/components/admin/style.css ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/style.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/style.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/style.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/admin/validate.css":
      /*!*******************************************!*\
  !*** ./src/components/admin/validate.css ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./validate.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/validate.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./validate.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/validate.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./validate.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/admin/validate.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/admin/validate.js":
      /*!******************************************!*\
  !*** ./src/components/admin/validate.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Nav */ "./src/components/admin/Nav.js");
        /* harmony import */ var _addngo_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./addcats.css */ "./src/components/admin/addcats.css"
          );
        /* harmony import */ var _addngo_css__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _addngo_css__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _validate_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./validate.css */ "./src/components/admin/validate.css"
          );
        /* harmony import */ var _validate_css__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _validate_css__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _popupform__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./popupform */ "./src/components/admin/popupform.js"
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/admin/validate.js";

        //import NewWindow from 'react-new-window'
        // function importAll(r) {
        //   return r.keys().map(r);
        // }
        // const images = importAll(require.context('../productimages', true,/\.(png|jpeg|svg)$/))

        const admin = {
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        };
        const table = {
          top: "20%",
          left: "40%",
        };

        class Validate extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);
            this.state = {
              s: [],
              p: null,
              sf: false, //this.updatenominal=this.updatenominal.bind(this)
            };
            this.onCellChange = this.onCellChange.bind(this);
          }

          onCellChange(event) {
            console.log("in cell change:" + event.target.value);
          }

          renderResultRows() {
            let s = this.state.s;
            let n;
            return s.map((song, index) => {
              let i = "/productimages/" + song[4]; //console.log(i,typeof(i))

              let a = "nprice-" + index;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                {
                  id: index,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "td",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                    },
                    __self: this,
                  },
                  song[1]
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "td",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                    },
                    __self: this,
                  },
                  song[3]
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "td",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "img",
                    {
                      src: i,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                      },
                      __self: this,
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "td",
                  {
                    contentEditable: "true",
                    id: a,
                    width: "100px",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "td",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                      onClick: () => this.fetchDetails(index),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                      },
                      __self: this,
                    },
                    " Validate "
                  )
                )
              );
            });
          }

          fetchDetails(row) {
            let s = this.state.s;
            let a = "nprice-" + row;
            let n = document.getElementById(a).innerHTML; //  console.log(row,n)

            var body = {
              pid: s[row][0],
              np: n,
            };
            console.log();
            const url = "http://localhost:9000/updateproduct";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append("Access-Control-Allow-origin", url);
            headers.append("Access-Control-Allow-Credentials", "true");
            headers.append("POST", "GET");
            fetch(url, {
              headers: headers,
              method: "POST",
              body: JSON.stringify(body),
            }).then((response) => {
              if (response.ok) {
                alert("Details submitted.. Thank You For Donating..");
                window.location.reload(false);
              }
            });
          }

          products() {
            const url = "http://localhost:9000/products";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append("Access-Control-Allow-origin", url);
            headers.append("Access-Control-Allow-Credentials", "true");
            headers.append("POST", "GET");
            fetch(url, {
              headers: headers,
              method: "GET",
            })
              .then((response) => {
                return response.json();
              })
              .then((res) => {
                this.setState({
                  s: res,
                }); // console.log(this.state.s)
              });
          }

          componentDidMount() {
            this.products();
          }

          render() {
            let i = "/productimages/bajaj1.jpeg";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                style: admin,
                class: "adminmain",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                  },
                  __self: this,
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "table",
                {
                  id: "product",
                  class: "atable",
                  border: "1",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                    },
                    __self: this,
                  },
                  "Name"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                    },
                    __self: this,
                  },
                  "Category"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                    },
                    __self: this,
                  },
                  "Image"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                    },
                    __self: this,
                  },
                  "Nominal Price"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "th",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                    },
                    __self: this,
                  },
                  "Validation"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "tbody",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                    },
                    __self: this,
                  },
                  " ",
                  this.renderResultRows(),
                  " "
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Validate;

        /***/
      },

    /***/ "./src/components/purchaser/pur_home.js":
      /*!******************************************!*\
  !*** ./src/components/purchaser/pur_home.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _img_ccc_jpg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../img/ccc.jpg */ "./src/components/img/ccc.jpg"
          );
        /* harmony import */ var _img_ccc_jpg__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_ccc_jpg__WEBPACK_IMPORTED_MODULE_1__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/purchaser/pur_home.js";

        class Chome extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0__["Card"],
              {
                style: {
                  width: "18rem",
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 6,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0__["Card"].Body,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_0__["Card"].Title,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 9,
                    },
                    __self: this,
                  },
                  "Card Title"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_0__["Card"].Text,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 10,
                    },
                    __self: this,
                  },
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_0__["Button"],
                  {
                    variant: "primary",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                    },
                    __self: this,
                  },
                  "Go somewhere"
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Chome;

        /***/
      },

    /***/ "./src/components/donor/home_nav.css":
      /*!**************************************!*\
  !*** ./src/components/donor/home_nav.css ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/home_nav.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/home_nav.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home_nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/home_nav.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/donor/Nav.js":
      /*!*************************************!*\
  !*** ./src/components/donor/Nav.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./home_nav.css */ "./src/components/donor/home_nav.css"
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _Nav_css__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../img/pit.jpg */ "./src/components/img/pit.jpg"
          );
        /* harmony import */ var _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/donor/Nav.js";

        class DonorNav extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  class: "home",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    class: "nav",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 13,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 15,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "active",
                          href: "/",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "img",
                          {
                            alt: "sorry",
                            height: "120%",
                            width: "15%",
                            src: _img_pit_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 15,
                            },
                            __self: this,
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 16,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "/login",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16,
                          },
                          __self: this,
                        },
                        "LogOut"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 17,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "/donorprofile/:id",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17,
                          },
                          __self: this,
                        },
                        "MyProfile"
                      )
                    )
                  )
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = DonorNav;

        /***/
      },

    /***/ "./src/components/donor/UserProfile.js":
      /*!*********************************************!*\
  !*** ./src/components/donor/UserProfile.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var UserProfile = (function () {
          var eid = "";

          var getId = function () {
            return eid;
          };

          var setId = function (id) {
            eid = id;
          };

          return {
            getId: getId,
            setId: setId,
          };
        })();

        /* harmony default export */ __webpack_exports__["default"] =
          UserProfile;

        /***/
      },

    /***/ "./src/components/donor/donorhome.css":
      /*!*****************************************!*\
  !*** ./src/components/donor/donorhome.css ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./donorhome.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/donorhome.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./donorhome.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/donorhome.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./donorhome.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/donorhome.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/donor/d_home.js":
      /*!****************************************!*\
  !*** ./src/components/donor/d_home.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _img_donorhome_jpg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../img/donorhome.jpg */ "./src/components/img/donorhome.jpg"
          );
        /* harmony import */ var _img_donorhome_jpg__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_donorhome_jpg__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _d_home_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./donorhome.css */ "./src/components/donor/donorhome.css"
          );
        /* harmony import */ var _d_home_css__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _d_home_css__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./home_nav.css */ "./src/components/donor/home_nav.css"
          );
        /* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _Nav_css__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _img_pit_jpg__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../img/pit.jpg */ "./src/components/img/pit.jpg"
          );
        /* harmony import */ var _img_pit_jpg__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _img_pit_jpg__WEBPACK_IMPORTED_MODULE_4__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/donor/d_home.js";

        var eid, profile, image1, image2, message, ngo, s;
        const donor = {
          backgroundImage:
            "url(" +
            _img_donorhome_jpg__WEBPACK_IMPORTED_MODULE_1___default.a +
            ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        };

        class Donor extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);

            this.pnameChange = (event) => {
              this.setState({
                pname: event.target.value,
              });
            };

            this.sngoChange = (event) => {
              this.setState({
                sngo: event.target.value,
              });
            };

            this.scatChange = (event) => {
              this.setState({
                scat: event.target.value,
              });
            };

            this.quantChange = (event) => {
              this.setState({
                quant: event.target.value,
              });
            };

            this.qualityChange = (event) => {
              this.setState({
                quality: event.target.value,
              });
            };

            this.dateChange = (event) => {
              this.setState({
                date: event.target.value,
              });
            };

            this.desChange = (event) => {
              this.setState({
                des: event.target.value,
              });
            };

            this.categoryChange = (event) => {
              this.setState({
                category: event.target.value,
              });
            };

            this.state = {
              pname: null,
              quant: null,
              quality: null,
              date: null,
              des: null,
              category: null,
              file1: null,
              file2: null,
              ngo: [],
              sngo: null,
              scat: null,
            };
            this.handleImage1 = this.handleImage1.bind(this);
            this.handleImage2 = this.handleImage2.bind(this);
            this.pnameChange = this.pnameChange.bind(this);
            this.quantChange = this.quantChange.bind(this);
            this.qualityChange = this.qualityChange.bind(this);
            this.dateChange = this.dateChange.bind(this);
            this.desChange = this.desChange.bind(this);
            this.categoryChange = this.categoryChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.sngoChange = this.sngoChange.bind(this);
            this.scatChange = this.scatChange.bind(this);
            eid = sessionStorage.getItem("id");
            profile = "/donorprofile";
            console.log(eid);
          }

          compoentDidMount() {
            const url = "http://localhost:9000/ngos";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append("Access-Control-Allow-origin", url);
            headers.append("Access-Control-Allow-Credentials", "true");
            headers.append("POST", "GET");
            fetch(url, {
              headers: headers,
              method: "GET",
            })
              .then((response) => {
                return response.json();
              })
              .then((res) => {
                this.setState({
                  ngo: res,
                }); //  console.log(typeof(this.sate.ngo)),
                //  console.log(this.sate.ngo),
                //  console.log(this.sate.ngo[0]),
                //  console.log(this.sate.ngo[1])
              });
          }

          dd() {
            let s = this.state.ngo;
            return s.map((song) => {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "option",
                {
                  value: song,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                  },
                  __self: this,
                },
                song
              );
            });
          }

          handleImage1(event) {
            this.setState({
              file1: URL.createObjectURL(event.target.files[0]),
            });
            image1 = event.target.files[0].name;
          }

          handleImage2(event) {
            this.setState({
              file2: URL.createObjectURL(event.target.files[0]),
            });
            image2 = event.target.files[0].name;
          }

          subcategory() {
            let cat = {
              Furniture: [
                "Sofas",
                "Beds",
                "Home Decors",
                "Chairs-Dining",
                "Wadrobes",
                "Kids' Furniture",
              ],
              Electronics: [
                "Cameras And Lenses",
                "Computers",
                "Mobiles",
                "TV-Video-Audio",
                "Computer Accessories",
              ],
              Appliances: [
                "Refrigerators",
                "Washing Machines",
                "ACs",
                "Kitchen Appliances",
              ],
              Vehicles: ["Cars", "Bikes", "Bicycles", "Other Vehicles"],
              Clothing: ["Men", "Women", "Kids", "Other Clothing"],
              Accessories: [
                "Watches",
                "Footwear",
                "Bags And Wallets",
                "Jewellery",
                "Other Accessories",
              ],
              Stationery: ["Writing things", "Books", "Other Stationery"],
            };
            let sc = this.state.category;
            let s = cat[sc];

            if (s) {
              return s.map((son) => {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "option",
                  {
                    value: son,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                    },
                    __self: this,
                  },
                  son
                );
              });
            }
          }

          handleSubmit(event) {
            event.preventDefault();
            console.log(this.state);
            var body = {
              did: eid,
              pname: this.state.pname,
              quant: this.state.quant,
              quality: this.state.quality,
              expdate: this.state.date,
              des: this.state.des,
              cat: this.state.category,
              img1: image1,
              img2: image2,
              state: 0,
              ngo: this.state.sngo,
            };
            console.log(body);
            const url = "http://localhost:9000/addproduct";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append("Access-Control-Allow-origin", url);
            headers.append("Access-Control-Allow-Credentials", "true");
            headers.append("POST", "GET");
            fetch(url, {
              headers: headers,
              method: "POST",
              body: JSON.stringify(body),
            }).then((response) => {
              if (response.ok) {
                alert("Details submitted.. Thank You For Donating..");
                window.location.reload(false);
              }
            });
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                style: donor,
                class: "main",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  class: "home",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    class: "nav",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 225,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "active",
                          href: "/",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 225,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "img",
                          {
                            alt: "sorry",
                            height: "120%",
                            width: "15%",
                            src: _img_pit_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 225,
                            },
                            __self: this,
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 226,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: "/login",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 226,
                          },
                          __self: this,
                        },
                        "LogOut"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 227,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          class: "links",
                          href: profile,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 227,
                          },
                          __self: this,
                        },
                        "MyProfile"
                      )
                    )
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  class: "container",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                  },
                  __self: this,
                },
                "Welcome..",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "form",
                  {
                    class: "donorform",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      class: "row",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 234,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 235,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "fname",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 236,
                          },
                          __self: this,
                        },
                        "Product Name"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-75",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 238,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "text",
                          id: "pname",
                          name: "pname",
                          placeholder: "product name..",
                          value: this.state.pname,
                          onChange: this.pnameChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 239,
                          },
                          __self: this,
                        }
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 241,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "quant",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 242,
                          },
                          __self: this,
                        },
                        "Quantity"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-75",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 244,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "text",
                          id: "quant",
                          name: "quant",
                          placeholder: "quantity..",
                          value: this.state.quant,
                          onChange: this.quantChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 245,
                          },
                          __self: this,
                        }
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      class: "row",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 249,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 250,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "quantity",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 251,
                          },
                          __self: this,
                        },
                        "Quality"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-75",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 253,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "select",
                        {
                          id: "quality",
                          name: "quality",
                          value: this.state.quality,
                          onChange: this.qualityChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 254,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 255,
                            },
                            __self: this,
                          },
                          "select"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "used",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 256,
                            },
                            __self: this,
                          },
                          "Used"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "new",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 257,
                            },
                            __self: this,
                          },
                          "New"
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 260,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "date",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 261,
                          },
                          __self: this,
                        },
                        "Expected date of delievery"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-75",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 263,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "date",
                          name: "date",
                          value: this.state.date,
                          onChange: this.dateChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 264,
                          },
                          __self: this,
                        }
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      class: "row",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 268,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "des",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                          },
                          __self: this,
                        },
                        "Description"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-75",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "textarea",
                        {
                          id: "des",
                          name: "des",
                          placeholder: "Write something..",
                          value: this.state.des,
                          onChange: this.desChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                          },
                          __self: this,
                        }
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 274,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "quantity",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 275,
                          },
                          __self: this,
                        },
                        "Category of product"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-75",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 277,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "select",
                        {
                          id: "category",
                          name: "category",
                          value: this.state.category,
                          onChange: this.categoryChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 278,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 279,
                            },
                            __self: this,
                          },
                          "select"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "Vehicles",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 280,
                            },
                            __self: this,
                          },
                          "Vehicles"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "Furniture",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 281,
                            },
                            __self: this,
                          },
                          "Furniture"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "Electronics",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 282,
                            },
                            __self: this,
                          },
                          "Electronics"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "Clothing",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 283,
                            },
                            __self: this,
                          },
                          "Clothing"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "Appliances",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 284,
                            },
                            __self: this,
                          },
                          "Appliances"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "Stationery",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 285,
                            },
                            __self: this,
                          },
                          "Stationery"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            value: "Accessories",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 286,
                            },
                            __self: this,
                          },
                          "Accessories"
                        )
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      class: "row",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 290,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 291,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "images",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 292,
                          },
                          __self: this,
                        },
                        "Product Images"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "br",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 294,
                        },
                        __self: this,
                      }
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "fileimages",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 295,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "file",
                          onInput: this.handleImage1,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 296,
                          },
                          __self: this,
                        }
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          class: "imgfile",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 297,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "img",
                          {
                            class: "upload",
                            src: this.state.file1,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 298,
                            },
                            __self: this,
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "fileimages",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 301,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "file",
                          onInput: this.handleImage2,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 302,
                          },
                          __self: this,
                        }
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          class: "imgfile",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 303,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "img",
                          {
                            class: "upload",
                            src: this.state.file2,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 304,
                            },
                            __self: this,
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 307,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "ngo",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 308,
                          },
                          __self: this,
                        },
                        "Select NGO to donate"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-75",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 310,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "select",
                        {
                          id: "ngo",
                          name: "ngo",
                          value: this.state.sngo,
                          onChange: this.sngoChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 311,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 312,
                            },
                            __self: this,
                          },
                          "Select ngo"
                        ),
                        this.dd()
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "br",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 316,
                        },
                        __self: this,
                      }
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      class: "row",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 318,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-25",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 319,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          for: "ngo",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 320,
                          },
                          __self: this,
                        },
                        "Select subcategory"
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        class: "col-75",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 322,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "select",
                        {
                          id: "scat",
                          name: "scat",
                          value: this.state.scat,
                          onChange: this.scatChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 323,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "option",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 324,
                            },
                            __self: this,
                          },
                          "Select subcategory"
                        ),
                        this.subcategory()
                      )
                    )
                  ),
                  " ",
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 328,
                      },
                      __self: this,
                    }
                  ),
                  " ",
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 328,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      class: "row",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 329,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "center",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 329,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                          type: "submit",
                          class: "submit",
                          onClick: this.handleSubmit.bind(this),
                          value: "Submit",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 330,
                          },
                          __self: this,
                        },
                        "Submit"
                      )
                    )
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 333,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h2",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 334,
                      },
                      __self: this,
                    },
                    message
                  )
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Donor;

        /***/
      },

    /***/ "./src/components/donor/dimg.js":
      /*!**************************************!*\
  !*** ./src/components/donor/dimg.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/donor/dimg.js";

        class DonorImage extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                },
                __self: this,
              }
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] =
          DonorImage;

        /***/
      },

    /***/ "./src/components/donor/myprofile.css":
      /*!********************************************!*\
  !*** ./src/components/donor/myprofile.css ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./myprofile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/myprofile.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./myprofile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/myprofile.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./myprofile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/donor/myprofile.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/donor/myprofile.js":
      /*!*******************************************!*\
  !*** ./src/components/donor/myprofile.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Nav */ "./src/components/donor/Nav.js");
        /* harmony import */ var _myprofile_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./myprofile.css */ "./src/components/donor/myprofile.css"
          );
        /* harmony import */ var _myprofile_css__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _myprofile_css__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./UserProfile */ "./src/components/donor/UserProfile.js"
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/donor/myprofile.js";

        const donor = {
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        };
        var eid;

        class DonorProfile extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);

            this.handleNameChange = (event) => {
              this.setState({
                name: event.target.value,
              });
            };

            this.handleEmailChange = (event) => {
              this.setState({
                email: event.target.value,
              });
            };

            this.handlePhoneChange = (event) => {
              this.setState({
                phone: event.target.value,
              });
            };

            this.handleAddressChange = (event) => {
              this.setState({
                address: event.target.value,
              });
            };

            this.state = {
              email: "",
              name: "",
              address: "",
              phone: "",
              d: [],
            };
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleAddressChange = this.handleAddressChange.bind(this);
            this.handlePhoneChange = this.handlePhoneChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            eid = sessionStorage.getItem("id");
            console.log(eid);
          }

          userdetails() {
            const url = "http://localhost:9000/login1";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append("Access-Control-Allow-origin", url);
            headers.append("Access-Control-Allow-Credentials", "true");
            headers.append("POST", "GET");
            var body = {
              id: eid,
            };
            var s = fetch(url, {
              headers: headers,
              method: "POST",
              body: JSON.stringify(body),
            })
              .then((response) => {
                return response.json();
              })
              .then((res) => {
                this.setState({
                  name: res.name,
                  address: res.address,
                  phone: res.phone,
                  email: res.email,
                });
                console.log(
                  this.state.name,
                  this.state.email,
                  this.state.phone,
                  this.state.address
                );
              });
          }

          donationdetails() {
            const url = "http://localhost:9000/getproducts";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append("Access-Control-Allow-origin", url);
            headers.append("Access-Control-Allow-Credentials", "true");
            headers.append("POST", "GET");
            var body = {
              did: eid,
            };
            var s = fetch(url, {
              headers: headers,
              method: "POST",
              body: JSON.stringify(body),
            })
              .then((response) => {
                return response.json();
              })
              .then((res) => {
                this.state.d = res;
                console.log(this.state.d);
              });
          }

          renderResultRows() {
            let s = this.state.d;
            let n;
            return s.map((song, index) => {
              let i = "/productimages/" + song[1]; //console.log(i,typeof(i))

              let a = "nprice-" + index;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                {
                  id: index,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "td",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                    },
                    __self: this,
                  },
                  song[0]
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "td",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "img",
                    {
                      src: i,
                      height: "200px",
                      width: "150px",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                      },
                      __self: this,
                    }
                  )
                )
              );
            });
          }

          componentDidMount() {
            this.userdetails();
            this.donationdetails();
          }

          handleSubmit(event) {
            event.preventDefault();
            console.log(this.state.name, this.state.email);
            var body = {
              id: eid,
              email: this.state.email,
              username: this.state.name,
              address: this.state.address,
              phone: this.state.phone,
            };
            console.log(body);

            if (this.state.name == "") {
              alert("Please enter the name");
            } else if (this.state.email == "") {
              alert("Please enter the email");
            } else if (this.state.phone == "") {
              alert("Please enter the phone");
            } else if (this.state.address == "") {
              alert("Please enter the address");
            } else {
              const url = "http://localhost:9000/updateperson";
              let headers = new Headers();
              headers.append("Content-Type", "application/json");
              headers.append("Accept", "application/json");
              headers.append("Access-Control-Allow-origin", url);
              headers.append("Access-Control-Allow-Credentials", "true");
              headers.append("POST", "GET");
              fetch(url, {
                headers: headers,
                method: "POST",
                body: JSON.stringify(body),
              }).then((response) => {
                if (response.ok) {
                  alert("Details submitted");
                  window.location.reload(false);
                }
              });
            }
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                style: donor,
                class: "profile",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                  },
                  __self: this,
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  class: "pcontainer",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "form",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "base-container",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "header",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                        },
                        __self: this,
                      },
                      "Register"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "content",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 198,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "form-group",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 199,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                              htmlFor: "name",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 200,
                              },
                              __self: this,
                            },
                            "Name"
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "input",
                            {
                              type: "text",
                              class: "form-control",
                              name: "name",
                              placeholder: "name",
                              value: this.state.name,
                              onChange: this.handleNameChange,
                              required: true,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 201,
                              },
                              __self: this,
                            }
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "form-group",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 205,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                              htmlFor: "email",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 206,
                              },
                              __self: this,
                            },
                            "Email"
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "input",
                            {
                              type: "text",
                              name: "email",
                              placeholder: "email",
                              value: this.state.email,
                              onChange: this.handleEmailChange,
                              required: true,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 207,
                              },
                              __self: this,
                            }
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "form-group",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 209,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                              htmlFor: "phone",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 210,
                              },
                              __self: this,
                            },
                            "Phone"
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "input",
                            {
                              type: "number",
                              name: "phone",
                              placeholder: "phone",
                              value: this.state.phone,
                              onChange: this.handlePhoneChange,
                              required: true,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 211,
                              },
                              __self: this,
                            }
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "form-group",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 213,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                              htmlFor: "address",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 214,
                              },
                              __self: this,
                            },
                            "Address"
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "input",
                            {
                              type: "text",
                              name: "address",
                              placeholder: "address",
                              value: this.state.address,
                              onChange: this.handleAddressChange,
                              required: true,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 215,
                              },
                              __self: this,
                            }
                          )
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "button",
                      {
                        type: "submit",
                        onClick: this.handleSubmit,
                        className: "btn",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                        },
                        __self: this,
                      },
                      "Update"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "br",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 223,
                        },
                        __self: this,
                      }
                    )
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "br",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "br",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                    },
                    __self: this,
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "table",
                  {
                    class: "atable",
                    border: "1",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                      },
                      __self: this,
                    },
                    " ",
                    this.renderResultRows()
                  )
                )
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] =
          DonorProfile;

        /***/
      },

    /***/ "./src/components/img/aboutback.jpeg":
      /*!*******************************************!*\
  !*** ./src/components/img/aboutback.jpeg ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDQ8NDRANDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi8uFx8zODMsNygtOjcBCgoKDg0OFRAQFysdFh0tLS0rKy0rKy0rLSstKy0tLSsrKysrLS0tLSstKy0rLS0rLS0tLS0tLS0tKysrLSsrLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADgQAAICAQEGBAQEBAYDAAAAAAABAgMRBAUSITFBURNhcZEGIjKBFEJSsSOhweEVM1NicvAWQ1T/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACMRAQEBAQACAgMAAgMAAAAAAAABAhEDEiExE0FRBGEycYH/2gAMAwEAAhEDEQA/APrwAB1IAAGZgAABgMAAIAYGEAMaQOsWB4GMDFgBjMJAMAMQDAzEIkAWRwLBIDMjgRMWDAgBLAg9ZEBiCwEMAlIQwMxAABYAAGYAAGYDAAMBgBhAwGASJJAkMVgMBmEhgMDEMAMwAAAwAAMwAAMxAMAsQhgZiItEgCyAibRBsMAgByI74QSELfQbyCBiHkAsQABmLI0yvI0zF6sGQUiSYB6YxDAaAkkJEgCBgMAgAGBgAABgAx4MJASDAGRwGCWAwZkQJCwZkQJYEECAAMxEZMcmUykNA6JTK5TIzkUTmPIS1ZKwg7TPOwpnaNIS6a3aLxzBK4g9QH1L7uotQWR1BxfxJKOpD6tNu7G5MsTOHDVGiOr4cwep5uNW+NTMfijVoeJezapk1IxRtLI2A4aabYyJIzRmWxmLYeaXxJIqTLIsSxSVIAGKIAAAJjwJEgCB4ADCAGAGIBgZiDAwMyImiQmggiJskyubDAqubKJyJzZmskUkTtRsmZbLCVszHbYUkRtOywzWWkLbTHbcPIldNE7yieoMdt5lnqCkyndui9SL8Scp3kXqA+pfd2o6kb2lGPBy4nnbdY3wXAzNjTxlvm/j3n4kFqDz71/mNa/zE9D/AJHo4agvheebr13ma6tZ5guTTb0NdxorsOFTqjbVqCdypNuxCZdGRzarjVXYJYrnTYmTKISLd5YySsWzpIg7V04/sVynvenYAzP9C+T+LFJvrj0JJer+5UmTUgWBNdWxSJbqK0ycZCVSWJYE2PIAN/0W+hpkJRKpR7BklL7WNAGXxJLr7gtU1zSD6UPy5/bSBn/GR6pof4uHfHqb01/B/Jn+rJFM2D1EP1L3KZ3R7r3Gkpbqf1CyRktkW22ruvcx3WruvcpIlrUVWzMN1hZfau6MF1i7lZlz63Fd1pguuLrX6mSxItIhrbPO1vkVtPqWzYV6ec+SY6VtrO2UykdmvZDf1MvhsmHXIPaQfx6rzjkQcj1a2XX2fuS/wivszfkg/h0dHwNa/wDMvS8ox/uaf/BV/wDRP2idPafxTRRmOfEsX/rr+aSfm+S+55zV/FWpu4V7tEP9vzz+8n/RIlL5NOnU8GPj7rTd8G2RWYaiLx+uOP55ObdoNRVz8KxL/Tti37MzzU7Hmyc7H3nKUv3LK6McuHoUkv7rn1c3/jOf+nRtHD3ZZi+z4M6um1yfUwOCksWRjNf7ks+5S9nY40TcX/p2PMX6PoayUJqx6jT6o6NN54inXTrkoXRcH58n6M7mj1yfUnrC+PL16iq0bty/I5UNVwx3NNVpL1Vvk/Ub4yLEzLCRfFiWHzepkkJDSF6rIsTJEETEpolFk0ytE0LTmRlEkABqiUSqUTVJFbQ80nrLJKBTOBtlEqnErNIawwTrM84HQnEzWRKSpXLBZEz2RNtiMdo8qdjJYZbWabWYbpjxPSm2Rm4yeFxbJSbk1GPFt4SPRbM2Uq470uM3/Ia3gZxdVz9Hsn81nPsdGNCXBLBv8IPCI3XXRnx8YlUSVJtVRJVA6pMMcaixVGuNRGV1cXiU4p9sg6Prx890+i8jdVpToV6U0R050XTknj458KC6NZuVA/BE9jerGqh+EavDGom63qyygnHdmlOL/LL+hins+VfzaduUVzqb+dej6nXdYtzAZotwwaPX5581ww+DR2tNqcmXW7PhYk/otSX8RdX2kupzYznTPcsWH0f5ZLumHkpZbPt66iw21yPN6PW8jr6fVLqR1munG46sC1RMtV8TRG6Jz6ldedZv7TUSSiQd66FbvfQX1tNd5jTgMozqTfMsiC5Ga6tBoEwbFOrkVSLZFcx4lqKpSaIO3uTkZ7CsnUNWxKbTM1pCybXIqlqO4/qn7y/aq5mG6Rqumc7UWDwmma+ZzdRaX6m0ewdA9TqEn/l1/NN/siv1Oo8uryOt8N7KxHx7F80voT6Lud7wzWqkkklwXBeg/DObW+3rvx4pmcY/DGqzX4ZG3dgt6TUUurF6b1Z1UZdfr6tPHNkln9PU5W2PiXGa9P6Ob/oeUulKyW9NuTfdl8eK35rm8n+RJ8Z+a6W1PiW2zMav4cf5nBnKcnlyk2+uWa1ST8EvJJ9OTV1r5teyhpy6NBqhAvjWc3XZxg8APw501UPwAew+jky05VKg7boK5ac3s3464nh4Bx/dHUnpjJfTu8fMaUlzxnmyq2uM47k1vR/mn3T6MsZKMRup865FunlQ853qm/ln28pdmdHSXm6urKaaTi1hprKaOdq9DKl79eZVdVzlX6915hmu/Bbiz5jsU2GutnG0eozg6tMxNRTNbayxRKq2aIMhp14nSjEmh4An1TnD3h5IBkHDdMhIlkhJhharmZrWX2MyWyLZc+2a5nPvkbL5HO1Ei2XPplt1DRiv1afkWamRydVIrJEbqwtVdnguLbwkurPofwzsv8PpoqS/iT+ex+b6HgNgaWVl3itZjTh+Tn0PY/4xcu7+yJ+WWzkW/wAfec3209JukJyUVltJd28HmbdtXvguHsc/UW3WfVKRKeG/uunX+Tn9R3to/EFVWVD+JLy5Hldo7RtveZvEekVyLVomWx0D7Fs5zlz735PJ9/Tj+CNUnbWzn2B7Ol2fsN7wk8VciNRaqTbLSNdGCgbo+nHrK4F8IEU1FZYKcpfT8se75+xzWurOWiMUuZJTgubRQqV1bl6skoJdF7ISxaSrvFr7oN6D5Ne5Xj0FKtPovYX1hvlZKCOftOpKvK/UjV4ePpbX7GTaTfhPPRx4rgNmfMT8n/G9jl+GThWOqRuogmWt45s56hVAvjD79/NFzpHGsnatMuHrtnOp+LUm6+c4Li4ea8v2LNHqM4O7FHI2hs1wbtpWY851r8vnHy8hs778VPfi9fmfTdTYa65HC0mqzg6dNwNZHG+OjFjaM8Jl0ZELHXnUoaEyZBgg2ISK5MnNlNjKRHVVWTMt0y6xmK5lZENKL5nOvmar2c+9lcxHVYdTM5d+ZNRjxlJpJd2zfqWdD4Y2bvT/ABE18seFeesu5TvJ1GZurx1dlbOVFMa/zc5vvJ8zS6DXgFE57p2zEnwx/hfInHSI2KBZGIPY8xGaGkRohp4olvCche0/JEsRXREXJdkRbINmbonGL5pP7GaWirb5Y+5fkWRiWytVVWfmnxfRdI/3LwARaST6AxDMIGIAMZm2ks0z8kn7NGkr1MN6uce8JL74NPttfMscOhZOppqzk6Vnb0nIptz+KSrN/HP3JqSY2slE6muMfYn8VSzWf9xeNGWGo6Pg+zLlYjXNablYNdszLdlOFPnKHKM/TszJp9Rh4eU1wafBpnc3jNrNHGzj9M1ymufo+6Hzr9VLfj/eUabjVCw4r36nuzXpJfTL0ZspvDc9LnfHTUyWTHG0sVhK4Xz5OrJmeZZvlczQb8s1hjuNliMlpTNQ1GC4596OlcjH4DnJRistlpUNRi0mhlfYoLlzk+yPY0adQgoRWIxSSQbO2eqYYX1PjJ92anEnvfVvH4/Wf7Ubo1EtwGBFVeBFjRBozdRExiYQ6iyDLMCaCHVYEmhBL10AACbqAABmMAAzAYABnCtq8O6Uemd6P/F/9x9jraT6QAfX1EsTmrGgAAmurupUufPo1zRjsjOvn80e66eoANm/PEvJic7+zhqUyxXABSyOfOqJzTWJJNPo+Jinp8ca3lfpb4/Z9QAE+Gsl+xXfjg+D6pmiNwAPYlLYsVgOYATsXzqq5Mz2oAFN9szoc3iKy2dbQ6BVLPOb5sANrV+jYxPtqaE0AC9PYi0RwADEsITQAEqLQnEQBKN0WAAJSaI7oANCv//Z";

        /***/
      },

    /***/ "./src/components/img/ccc.jpg":
      /*!************************************!*\
  !*** ./src/components/img/ccc.jpg ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + "static/media/ccc.9e8b23a6.jpg";

        /***/
      },

    /***/ "./src/components/img/donorhome.jpg":
      /*!******************************************!*\
  !*** ./src/components/img/donorhome.jpg ***!
  \******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + "static/media/donorhome.f03bf7ff.jpg";

        /***/
      },

    /***/ "./src/components/img/login_img.jpeg":
      /*!*******************************************!*\
  !*** ./src/components/img/login_img.jpeg ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + "static/media/login_img.e3b83db5.jpeg";

        /***/
      },

    /***/ "./src/components/img/ngo.jpg":
      /*!************************************!*\
  !*** ./src/components/img/ngo.jpg ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + "static/media/ngo.3b4ad8e7.jpg";

        /***/
      },

    /***/ "./src/components/img/pit.jpg":
      /*!************************************!*\
  !*** ./src/components/img/pit.jpg ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + "static/media/pit.8a5c58b1.jpg";

        /***/
      },

    /***/ "./src/components/img/pitimg1.jpg":
      /*!****************************************!*\
  !*** ./src/components/img/pitimg1.jpg ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + "static/media/pitimg1.ec769d6f.jpg";

        /***/
      },

    /***/ "./src/components/login/App.scss":
      /*!***************************************!*\
  !*** ./src/components/login/App.scss ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/login/App.scss"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/login/App.scss",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/login/App.scss"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/components/login/index.js":
      /*!***************************************!*\
  !*** ./src/components/login/index.js ***!
  \***************************************/
      /*! exports provided: Login, Register */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./style.scss */ "./src/components/login/style.scss"
          );
        /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _style_scss__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./login */ "./src/components/login/login.js");
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "Login",
          function () {
            return _login__WEBPACK_IMPORTED_MODULE_1__["Login"];
          }
        );

        /* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./register */ "./src/components/login/register.js"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "Register",
          function () {
            return _register__WEBPACK_IMPORTED_MODULE_2__["Register"];
          }
        );

        /***/
      },

    /***/ "./src/components/login/login.js":
      /*!***************************************!*\
  !*** ./src/components/login/login.js ***!
  \***************************************/
      /*! exports provided: Login */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Login",
          function () {
            return Login;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _donor_UserProfile__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../donor/UserProfile */ "./src/components/donor/UserProfile.js"
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/login/login.js";

        class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);

            this.handleEmailChange = (event) => {
              this.setState({
                email: event.target.value,
              });
            };

            this.handlePasswordChange = (event) => {
              this.setState({
                password: event.target.value,
              });
            };

            this.state = {
              email: "",
              password: "",
            };
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handledonateSubmit = this.handledonateSubmit.bind(this);
            this.handlepurchaseSubmit = this.handlepurchaseSubmit.bind(this);
            this.handleadminSubmit = this.handleadminSubmit.bind(this);
          }

          handledonateSubmit(event) {
            event.preventDefault();
            console.log(this.state);
            var body = {
              email: this.state.email,
              password: this.state.password,
            };
            console.log(body);

            if (this.state.email == "") {
              alert("Please enter the name");
            } else if (this.state.password == "") {
              alert("Please enter the password");
            } else {
              const url = "http://localhost:9000/login";
              let headers = new Headers();
              headers.append("Content-Type", "application/json");
              headers.append("Accept", "application/json");
              headers.append("Access-Control-Allow-origin", url);
              headers.append("Access-Control-Allow-Credentials", "true");
              headers.append("POST", "GET");
              fetch(url, {
                headers: headers,
                method: "POST",
                body: JSON.stringify(body),
              }).then((response) =>
                response
                  .json()
                  .then((data) => ({
                    data1: data,
                  }))
                  .then((res) => {
                    var id = res.data1.id;
                    console.log(id);
                    sessionStorage.setItem("id", id);
                    window.location.href = "/donorhome";
                  })
              );
            }
          }

          handlepurchaseSubmit(event) {
            event.preventDefault();
          }

          handleadminSubmit(event) {
            event.preventDefault();
            if (
              this.state.email == "admin@gmail.com" &&
              this.state.password == "admin"
            )
              window.location.href = "/validate";
            else alert("Invalid admin");
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "form",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  className: "base-container",
                  ref: this.props.containerRef,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "header",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                    },
                    __self: this,
                  },
                  "Login"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "content",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "form",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "form-group",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          htmlFor: "email",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97,
                          },
                          __self: this,
                        },
                        "Email"
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "text",
                          name: "email",
                          placeholder: "email",
                          value: this.state.email,
                          onChange: this.handleEmailChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 98,
                          },
                          __self: this,
                        }
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "form-group",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        {
                          htmlFor: "password",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                          },
                          __self: this,
                        },
                        "Password"
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "password",
                          name: "password",
                          placeholder: "password",
                          value: this.state.password,
                          onChange: this.handlePasswordChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                          },
                          __self: this,
                        }
                      )
                    )
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "footer",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                      type: "submit",
                      className: "btn",
                      onClick: this.handledonateSubmit.bind(this),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                      },
                      __self: this,
                    },
                    "Donate"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                      type: "submit",
                      className: "btn",
                      onClick: this.handlepurchaseSubmit.bind(this),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                      },
                      __self: this,
                    },
                    "Purchase"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                      type: "submit",
                      className: "btn",
                      onClick: this.handleadminSubmit.bind(this),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                      },
                      __self: this,
                    },
                    "Admin"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    {
                      href: "/home",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "u",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116,
                        },
                        __self: this,
                      },
                      "back"
                    )
                  )
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/components/login/login_register.js":
      /*!************************************************!*\
  !*** ./src/components/login/login_register.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./App.scss */ "./src/components/login/App.scss"
          );
        /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _App_scss__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./index */ "./src/components/login/index.js");
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/login/login_register.js";

        class Pit extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);
            this.state = {
              isLogginActive: true,
            };
          }

          componentDidMount() {
            //Add .right by default
            this.rightSide.classList.add("right");
          }

          changeState() {
            const isLogginActive = this.state.isLogginActive;

            if (isLogginActive) {
              this.rightSide.classList.remove("right");
              this.rightSide.classList.add("left");
            } else {
              this.rightSide.classList.remove("left");
              this.rightSide.classList.add("right");
            }

            this.setState((prevState) => ({
              isLogginActive: !prevState.isLogginActive,
            }));
          }

          render() {
            const isLogginActive = this.state.isLogginActive;
            const current = isLogginActive ? "Register" : "Login";
            const currentActive = isLogginActive ? "login" : "register";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "App",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "center",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "login",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "container",
                      ref: (ref) => (this.container = ref),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                      },
                      __self: this,
                    },
                    isLogginActive &&
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _index__WEBPACK_IMPORTED_MODULE_2__["Login"],
                        {
                          containerRef: (ref) => (this.current = ref),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44,
                          },
                          __self: this,
                        }
                      ),
                    !isLogginActive &&
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _index__WEBPACK_IMPORTED_MODULE_2__["Register"],
                        {
                          containerRef: (ref) => (this.current = ref),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47,
                          },
                          __self: this,
                        }
                      )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    RightSide,
                    {
                      current: current,
                      currentActive: currentActive,
                      containerRef: (ref) => (this.rightSide = ref),
                      onClick: this.changeState.bind(this),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                      },
                      __self: this,
                    }
                  )
                )
              )
            );
          }
        }

        const RightSide = (props) => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: "right-side",
              ref: props.containerRef,
              onClick: props.onClick,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67,
              },
              __self: undefined,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "inner-container",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                },
                __self: undefined,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  className: "text",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                  },
                  __self: undefined,
                },
                props.current
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Pit;

        /***/
      },

    /***/ "./src/components/login/register.js":
      /*!******************************************!*\
  !*** ./src/components/login/register.js ***!
  \******************************************/
      /*! exports provided: Register */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Register",
          function () {
            return Register;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        var _jsxFileName =
          "/Users/macadmin/Desktop/praj/src/components/login/register.js";

        class Register extends react__WEBPACK_IMPORTED_MODULE_0___default.a
          .Component {
          constructor(props) {
            super(props);

            this.handleNameChange = (event) => {
              this.setState({
                name: event.target.value,
              });
            };

            this.handlePasswordChange = (event) => {
              this.setState({
                password: event.target.value,
              });
            };

            this.handleEmailChange = (event) => {
              this.setState({
                email: event.target.value,
              });
            };

            this.handlePhoneChange = (event) => {
              this.setState({
                phone: event.target.value,
              });
            };

            this.handleAddressChange = (event) => {
              this.setState({
                address: event.target.value,
              });
            };

            this.state = {
              email: "",
              password: "",
              name: "",
              address: "",
              phone: "",
            };
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleAddressChange = this.handleAddressChange.bind(this);
            this.handlePhoneChange = this.handlePhoneChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          handleSubmit(event) {
            event.preventDefault();
          }

          handleSubmit(event) {
            event.preventDefault();
            console.log(this.state);
            var body = {
              email: this.state.email,
              password: this.state.password,
              username: this.state.name,
              address: this.state.address,
              phone: this.state.phone,
            };
            console.log(body);

            if (this.state.name == "") {
              alert("Please enter the name");
            } else if (this.state.password == "") {
              alert("Please enter the password");
            } else if (this.state.email == "") {
              alert("Please enter the email");
            } else if (this.state.phone == "") {
              alert("Please enter the phone");
            } else if (this.state.address == "") {
              alert("Please enter the address");
            } else {
              const url = "http://localhost:9000/person";
              let headers = new Headers();
              headers.append("Content-Type", "application/json");
              headers.append("Accept", "application/json");
              headers.append("Access-Control-Allow-origin", url);
              headers.append("Access-Control-Allow-Credentials", "true");
              headers.append("POST", "GET");
              fetch(url, {
                headers: headers,
                method: "POST",
                body: JSON.stringify(body),
              })
                .then((response) => {
                  if (response.ok) {
                    alert("Details submitted");
                  }
                })
                .catch((error) => {
                  console.error(error);
                }, alert("Email already exists"));
            }
          }

          render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "base-container",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "header",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128,
                      },
                      __self: this,
                    },
                    "Register"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "content",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "form",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 130,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group row",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 131,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "name",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 132,
                            },
                            __self: this,
                          },
                          "Name"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            type: "text",
                            class: "form-control",
                            name: "name",
                            placeholder: "name",
                            value: this.state.name,
                            onChange: this.handleNameChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 133,
                            },
                            __self: this,
                          }
                        )
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "password",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 137,
                            },
                            __self: this,
                          },
                          "Password"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            type: "text",
                            name: "password",
                            placeholder: "password",
                            value: this.state.password,
                            onChange: this.handlePasswordChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 138,
                            },
                            __self: this,
                          }
                        )
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 140,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "email",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 141,
                            },
                            __self: this,
                          },
                          "Email"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            type: "text",
                            name: "email",
                            placeholder: "email",
                            value: this.state.email,
                            onChange: this.handleEmailChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 142,
                            },
                            __self: this,
                          }
                        )
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 144,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "phone",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 145,
                            },
                            __self: this,
                          },
                          "Phone"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            type: "number",
                            name: "phone",
                            placeholder: "phone",
                            value: this.state.phone,
                            onChange: this.handlePhoneChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 146,
                            },
                            __self: this,
                          }
                        )
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 148,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "address",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 149,
                            },
                            __self: this,
                          },
                          "Address"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            type: "text",
                            name: "address",
                            placeholder: "address",
                            value: this.state.address,
                            onChange: this.handleAddressChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 150,
                            },
                            __self: this,
                          }
                        )
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                      type: "submit",
                      onClick: this.handleSubmit,
                      className: "btn",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                      },
                      __self: this,
                    },
                    "Register"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "br",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    {
                      href: "/home",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "u",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 159,
                        },
                        __self: this,
                      },
                      "back"
                    )
                  )
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/components/login/style.scss":
      /*!*****************************************!*\
  !*** ./src/components/login/style.scss ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/login/style.scss"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/login/style.scss",
            function () {
              var newContent = __webpack_require__(
                /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/login/style.scss"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/index.css":
      /*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css"
        );

        if (typeof content === "string") content = [[module.i, content, ""]];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js"
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
            function () {
              var newContent = __webpack_require__(
                /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css"
              );

              if (typeof newContent === "string")
                newContent = [[module.i, newContent, ""]];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  "Aborting CSS HMR due to changed css-modules locals."
                );

              update(newContent);
            }
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-dom */ "./node_modules/react-dom/index.js"
          );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_dom__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./index.css */ "./src/index.css");
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./App */ "./src/App.js");
        /* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
        var _jsxFileName = "/Users/macadmin/Desktop/praj/src/index.js";

        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _App__WEBPACK_IMPORTED_MODULE_3__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
              },
              __self: undefined,
            }
          ),
          document.getElementById("root")
        ); // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA

        _serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

        /***/
      },

    /***/ "./src/serviceWorker.js":
      /*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
      /*! exports provided: register, unregister */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "register",
          function () {
            return register;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "unregister",
          function () {
            return unregister;
          }
        );
        // This optional code is used to register a service worker.
        // register() is not called by default.
        // This lets the app load faster on subsequent visits in production, and gives
        // it offline capabilities. However, it also means that developers (and users)
        // will only see deployed updates on subsequent visits to a page, after all the
        // existing tabs open on the page have been closed, since previously cached
        // resources are updated in the background.
        // To learn more about the benefits of this model and instructions on how to
        // opt-in, read https://bit.ly/CRA-PWA
        const isLocalhost = Boolean(
          window.location.hostname === "localhost" || // [::1] is the IPv6 localhost address.
            window.location.hostname === "[::1]" || // 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
        function register(config) {
          if (false) {
          }
        }

        function registerValidSW(swUrl, config) {
          navigator.serviceWorker
            .register(swUrl)
            .then((registration) => {
              registration.onupdatefound = () => {
                const installingWorker = registration.installing;

                if (installingWorker == null) {
                  return;
                }

                installingWorker.onstatechange = () => {
                  if (installingWorker.state === "installed") {
                    if (navigator.serviceWorker.controller) {
                      // At this point, the updated precached content has been fetched,
                      // but the previous service worker will still serve the older
                      // content until all client tabs are closed.
                      console.log(
                        "New content is available and will be used when all " +
                          "tabs for this page are closed. See https://bit.ly/CRA-PWA."
                      ); // Execute callback

                      if (config && config.onUpdate) {
                        config.onUpdate(registration);
                      }
                    } else {
                      // At this point, everything has been precached.
                      // It's the perfect time to display a
                      // "Content is cached for offline use." message.
                      console.log("Content is cached for offline use."); // Execute callback

                      if (config && config.onSuccess) {
                        config.onSuccess(registration);
                      }
                    }
                  }
                };
              };
            })
            .catch((error) => {
              console.error("Error during service worker registration:", error);
            });
        }

        function checkValidServiceWorker(swUrl, config) {
          // Check if the service worker can be found. If it can't reload the page.
          fetch(swUrl)
            .then((response) => {
              // Ensure service worker exists, and that we really are getting a JS file.
              const contentType = response.headers.get("content-type");

              if (
                response.status === 404 ||
                (contentType != null &&
                  contentType.indexOf("javascript") === -1)
              ) {
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then((registration) => {
                  registration.unregister().then(() => {
                    window.location.reload();
                  });
                });
              } else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl, config);
              }
            })
            .catch(() => {
              console.log(
                "No internet connection found. App is running in offline mode."
              );
            });
        }

        function unregister() {
          if ("serviceWorker" in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
              registration.unregister();
            });
          }
        }

        /***/
      },

    /***/ 0:
      /*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /Users/macadmin/Desktop/praj/node_modules/react-dev-utils/webpackHotDevClient.js */ "./node_modules/react-dev-utils/webpackHotDevClient.js"
        );
        module.exports = __webpack_require__(
          /*! /Users/macadmin/Desktop/praj/src/index.js */ "./src/index.js"
        );

        /***/
      },
  },
  [[0, "runtime~main", 0]],
]);
//# sourceMappingURL=main.chunk.js.map
