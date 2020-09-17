(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages2"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
  name: "register",
  data: function data() {
    return {
      model: {
        name: "",
        email: "",
        password: "",
        agree: false
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {// this will be called only after form is valid. You can do an api call here to register users
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Register.vue?vue&type=template&id=6f897ded&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/Register.vue?vue&type=template&id=6f897ded& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "header bg-gradient-success py-7" }, [
        _c(
          "div",
          {
            staticClass: "separator separator-bottom separator-skew zindex-100"
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  x: "0",
                  y: "0",
                  viewBox: "0 0 2560 100",
                  preserveAspectRatio: "none",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("polygon", {
                  staticClass: "fill-default",
                  attrs: { points: "2560 0 2560 100 0 100" }
                })
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--8 pb-5" },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { lg: "6", md: "8" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "bg-secondary border-0",
                      attrs: { "no-body": "" }
                    },
                    [
                      _c(
                        "b-card-header",
                        { staticClass: "bg-transparent pb-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-muted text-center mt-2 mb-4" },
                            [_c("small", [_vm._v("Sign up with")])]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center" }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-neutral btn-icon mr-4",
                                attrs: { href: "#" }
                              },
                              [
                                _c("span", { staticClass: "btn-inner--icon" }, [
                                  _c("img", {
                                    attrs: {
                                      src: "img/icons/common/github.svg"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "btn-inner--text" }, [
                                  _vm._v("Github")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-neutral btn-icon",
                                attrs: { href: "#" }
                              },
                              [
                                _c("span", { staticClass: "btn-inner--icon" }, [
                                  _c("img", {
                                    attrs: {
                                      src: "img/icons/common/google.svg"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "btn-inner--text" }, [
                                  _vm._v("Google")
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card-body",
                        { staticClass: "px-lg-5 py-lg-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center text-muted mb-4" },
                            [
                              _c("small", [
                                _vm._v("Or sign up with credentials")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("validation-observer", {
                            ref: "formValidator",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var handleSubmit = ref.handleSubmit
                                  return [
                                    _c(
                                      "b-form",
                                      {
                                        attrs: { role: "form" },
                                        on: {
                                          submit: function($event) {
                                            $event.preventDefault()
                                            return handleSubmit(_vm.onSubmit)
                                          }
                                        }
                                      },
                                      [
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-hat-3",
                                            placeholder: "Name",
                                            name: "Name",
                                            rules: { required: true }
                                          },
                                          model: {
                                            value: _vm.model.name,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "name", $$v)
                                            },
                                            expression: "model.name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-email-83",
                                            placeholder: "Email",
                                            name: "Email",
                                            rules: {
                                              required: true,
                                              email: true
                                            }
                                          },
                                          model: {
                                            value: _vm.model.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "email", $$v)
                                            },
                                            expression: "model.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon":
                                              "ni ni-lock-circle-open",
                                            placeholder: "password",
                                            type: "password",
                                            name: "Password",
                                            rules: { required: true, min: 6 }
                                          },
                                          model: {
                                            value: _vm.model.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "model.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "text-muted font-italic"
                                          },
                                          [
                                            _c("small", [
                                              _vm._v(
                                                "password strength:\n                                        "
                                              ),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-success font-weight-700"
                                                },
                                                [_vm._v("strong")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-row",
                                          { staticClass: " my-4" },
                                          [
                                            _c(
                                              "b-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c(
                                                  "base-input",
                                                  {
                                                    attrs: {
                                                      rules: {
                                                        required: {
                                                          allowFalse: false
                                                        }
                                                      },
                                                      name: "Privacy",
                                                      Policy: ""
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "b-form-checkbox",
                                                      {
                                                        model: {
                                                          value:
                                                            _vm.model.agree,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.model,
                                                              "agree",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "model.agree"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-muted"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "I agree with the\n                                                    "
                                                            ),
                                                            _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: "#!"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Privacy Policy"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "mt-4",
                                                attrs: {
                                                  type: "submit",
                                                  variant: "primary"
                                                }
                                              },
                                              [_vm._v("Create account")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/pages/Register.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/pages/Register.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_6f897ded___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=6f897ded& */ "./resources/js/views/admin/pages/Register.vue?vue&type=template&id=6f897ded&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_6f897ded___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_6f897ded___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/pages/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/Register.vue?vue&type=template&id=6f897ded&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/Register.vue?vue&type=template&id=6f897ded& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_6f897ded___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=6f897ded& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Register.vue?vue&type=template&id=6f897ded&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_6f897ded___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_6f897ded___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);