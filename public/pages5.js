(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages5"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components */ "./resources/js/components/index.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "social-traffic-table",
  components: (_components = {
    BaseProgress: _components__WEBPACK_IMPORTED_MODULE_0__["BaseProgress"]
  }, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["Dropdown"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]), _components),
  data: function data() {
    return {
      tableData: [{
        name: "Facebook",
        visitors: "1,480",
        progress: 60,
        progressType: "gradient-danger"
      }, {
        name: "LinkedIn",
        visitors: "5,480",
        progress: 70,
        progressType: "gradient-success"
      }, {
        name: "Google",
        visitors: "4,807",
        progress: 80,
        progressType: "gradient-primary"
      }, {
        name: "Instagram",
        visitors: "3,678",
        progress: 75,
        progressType: "gradient-info"
      }, {
        name: "Twitter",
        visitors: "2,645",
        progress: 30,
        progressType: "gradient-warning"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=template&id=e7ec12fa&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=template&id=e7ec12fa& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    {
      attrs: { "body-class": "p-0", "header-class": "border-0" },
      scopedSlots: _vm._u([
        {
          key: "header",
          fn: function() {
            return [
              _c(
                "b-row",
                { attrs: { "align-v": "center" } },
                [
                  _c("b-col", [
                    _c("h3", { staticClass: "mb-0" }, [
                      _vm._v("Social traffic")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "text-right" },
                    [
                      _c(
                        "base-button",
                        { attrs: { size: "sm", type: "primary" } },
                        [_vm._v("See all")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "table-responsive table",
          attrs: { data: _vm.tableData, "header-row-class-name": "thead-light" }
        },
        [
          _c("el-table-column", {
            attrs: { label: "Referral", "min-width": "115px", prop: "name" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "font-weight-600" }, [
                      _vm._v(_vm._s(row.name))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Visitors", "min-width": "110px", prop: "visitors" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "220px", prop: "progress" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("span", { staticClass: "mr-2" }, [
                          _vm._v(_vm._s(row.progress) + "%")
                        ]),
                        _vm._v(" "),
                        _c("base-progress", {
                          attrs: { type: row.progressType, value: row.progress }
                        })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialTrafficTable_vue_vue_type_template_id_e7ec12fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=template&id=e7ec12fa& */ "./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=template&id=e7ec12fa&");
/* harmony import */ var _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialTrafficTable_vue_vue_type_template_id_e7ec12fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialTrafficTable_vue_vue_type_template_id_e7ec12fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=template&id=e7ec12fa&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=template&id=e7ec12fa& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_e7ec12fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=template&id=e7ec12fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/dashboard/SocialTrafficTable.vue?vue&type=template&id=e7ec12fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_e7ec12fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_e7ec12fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);