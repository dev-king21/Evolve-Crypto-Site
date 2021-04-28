(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/VerificationCode.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/VerificationCode.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      verify_code: ""
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/VerificationCode.vue?vue&type=template&id=44ad5086&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/VerificationCode.vue?vue&type=template&id=44ad5086& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "h-screen flex w-full bg-img" }, [
    _c(
      "div",
      {
        staticClass:
          "vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center"
      },
      [
        _c("vx-card", { staticClass: "auth-card py-8" }, [
          _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                {
                  staticClass:
                    "vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
                },
                [
                  _c(
                    "h1",
                    {
                      staticClass:
                        "text-primary text-4xl text-center font-bold mb-base"
                    },
                    [_vm._v("\n              Evolve\n            ")]
                  ),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "mx-auto",
                    attrs: {
                      src: __webpack_require__(/*! @assets/images/pages/forgot-password.png */ "./resources/assets/images/pages/forgot-password.png"),
                      alt: "login"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center"
                },
                [
                  _c(
                    "div",
                    { staticClass: "p-8" },
                    [
                      _c("div", { staticClass: "vx-card__title mb-8" }, [
                        _c("h2", { staticClass: "mb-4 text-primary" }, [
                          _vm._v("Recover your password")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  We sent an email to you for verification. "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                  Please enter your Verification Code to complete register.\n                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "w-full mb-8",
                        attrs: {
                          type: "text",
                          "label-placeholder": "Verification Code"
                        },
                        model: {
                          value: _vm.verify_code,
                          callback: function($$v) {
                            _vm.verify_code = $$v
                          },
                          expression: "verify_code"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "px-4 w-full md:w-auto",
                          attrs: { type: "border", to: "/login" }
                        },
                        [
                          _vm._v(
                            "\n                Back To Login\n              "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass:
                            "float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0"
                        },
                        [_vm._v("\n                Verify\n              ")]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/forgot-password.png":
/*!***********************************************************!*\
  !*** ./resources/assets/images/pages/forgot-password.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/forgot-password.png?f1d8d23e3a5361ef98e93de1c2e314c1";

/***/ }),

/***/ "./resources/js/src/views/pages/VerificationCode.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/VerificationCode.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerificationCode_vue_vue_type_template_id_44ad5086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerificationCode.vue?vue&type=template&id=44ad5086& */ "./resources/js/src/views/pages/VerificationCode.vue?vue&type=template&id=44ad5086&");
/* harmony import */ var _VerificationCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerificationCode.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/VerificationCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerificationCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerificationCode_vue_vue_type_template_id_44ad5086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerificationCode_vue_vue_type_template_id_44ad5086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/VerificationCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/VerificationCode.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/VerificationCode.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerificationCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerificationCode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/VerificationCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerificationCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/VerificationCode.vue?vue&type=template&id=44ad5086&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/VerificationCode.vue?vue&type=template&id=44ad5086& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerificationCode_vue_vue_type_template_id_44ad5086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerificationCode.vue?vue&type=template&id=44ad5086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/VerificationCode.vue?vue&type=template&id=44ad5086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerificationCode_vue_vue_type_template_id_44ad5086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerificationCode_vue_vue_type_template_id_44ad5086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);