(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages4"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "page-visits-table",
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownMenu"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownMenu"]), _components),
  data: function data() {
    return {
      tableData: [{
        page: "/argon/",
        visitors: "4,569",
        unique: "340",
        bounceRate: "46,53%"
      }, {
        page: "/argon/index.html",
        visitors: "3,985",
        unique: "319",
        bounceRate: "46,53%"
      }, {
        page: "/argon/charts.html",
        visitors: "3,513",
        unique: "294",
        bounceRate: "36,49%"
      }, {
        page: "/argon/tables.html",
        visitors: "2,050",
        unique: "147",
        bounceRate: "50,87%"
      }, {
        page: "/argon/profile.html",
        visitors: "1,795",
        unique: "190",
        bounceRate: "46,53%"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=template&id=07968942&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=template&id=07968942& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                    _c("h3", { staticClass: "mb-0" }, [_vm._v("Page visits")])
                  ]),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "text-right" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { href: "#!" }
                      },
                      [_vm._v("See all")]
                    )
                  ])
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
            attrs: { label: "Page name", "min-width": "130px", prop: "page" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "font-weight-600" }, [
                      _vm._v(_vm._s(row.page))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Visitors", "min-width": "70px", prop: "visitors" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Unique users",
              "min-width": "90px",
              prop: "unique"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Bounce rate",
              "min-width": "90px",
              prop: "bounceRate"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.bounceRate) +
                        "\n            "
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

/***/ "./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVisitsTable_vue_vue_type_template_id_07968942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=template&id=07968942& */ "./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=template&id=07968942&");
/* harmony import */ var _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageVisitsTable_vue_vue_type_template_id_07968942___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageVisitsTable_vue_vue_type_template_id_07968942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/dashboard/PageVisitsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=template&id=07968942&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=template&id=07968942& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_07968942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=template&id=07968942& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/dashboard/PageVisitsTable.vue?vue&type=template&id=07968942&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_07968942___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_07968942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);