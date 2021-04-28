(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartConfigs.js */ "./resources/js/src/components/statistics-cards/chartConfigs.js");
/* harmony import */ var _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/utils/color.js */ "./resources/assets/utils/color.js");
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
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {// type: Array,
      // required: true
    },
    color: {
      type: String,
      "default": 'primary'
    },
    colorTo: {
      type: String
    },
    // chartType: {
    //     type: String,
    //     default: 'line-chart',
    // },
    type: {
      type: String,
      "default": 'line'
    },
    iconRight: {
      type: Boolean,
      "default": false
    },
    hideChart: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      chartOptions: null
    };
  },
  watch: {
    themePrimaryColor: function themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: {
          monochrome: {
            color: this.getHex(this.color)
          }
        }
      });
    }
  },
  computed: {
    themePrimaryColor: function themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex: function getHex(color) {
      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_2__["default"].isColor(color)) {
        var rgb = window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(color));
        rgb = rgb.split(',');
        return "#".concat(((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1));
      }

      return color;
    },
    gradientToColor: function gradientToColor(color) {
      var gradientToColors = {
        'primary': '#A9A2F6',
        'success': '#55DD92',
        'warning': '#ffc085',
        'danger': '#F97794'
      };
      return gradientToColors[color] ? gradientToColors[color] : gradientToColors['primary'];
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  created: function created() {
    if (this.type === 'area') {
      // assign chart options
      this.chartOptions = Object.assign({}, _chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__["default"].areaChartOptions);
      this.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      };
    } else if (this.type === 'line') {
      // Assign chart options
      this.chartOptions = JSON.parse(JSON.stringify(_chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__["default"].lineChartOptions));
      this.chartOptions.fill.gradient.gradientToColors = [this.gradientToColor(this.colorTo || this.color)];
      this.chartOptions.colors = [this.getHex(this.color)];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardECommerce.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardECommerce.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-elements/card/analyticsData.js */ "./resources/js/src/views/ui-elements/card/analyticsData.js");
/* harmony import */ var _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ChangeTimeDurationDropdown.vue */ "./resources/js/src/components/ChangeTimeDurationDropdown.vue");
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
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    ChangeTimeDurationDropdown: _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      subscribersGained: {},
      revenueGenerated: {},
      quarterlySales: {},
      ordersRecevied: {},
      revenueComparisonLine: {},
      goalOverview: {},
      browserStatistics: [],
      clientRetentionBar: {},
      sessionsData: {},
      chatLog: [],
      chatMsgInput: '',
      customersData: {},
      analyticsData: _ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  mounted: function mounted() {
    var scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
    scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
  },
  created: function created() {
    var _this = this;

    // Subscribers gained - Statistics
    this.$http.get('/api/card/card-statistics/subscribers').then(function (response) {
      _this.subscribersGained = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Revenue Generated

    this.$http.get('/api/card/card-statistics/revenue').then(function (response) {
      _this.revenueGenerated = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Sales

    this.$http.get('/api/card/card-statistics/sales').then(function (response) {
      _this.quarterlySales = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Orders - Statistics

    this.$http.get('/api/card/card-statistics/orders').then(function (response) {
      _this.ordersRecevied = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Revenue Comparison

    this.$http.get('/api/card/card-analytics/revenue-comparison').then(function (response) {
      _this.revenueComparisonLine = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Goal Overview

    this.$http.get('/api/card/card-analytics/goal-overview').then(function (response) {
      _this.goalOverview = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Browser Analytics

    this.$http.get('/api/card/card-analytics/browser-analytics').then(function (response) {
      _this.browserStatistics = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Client Retention

    this.$http.get('/api/card/card-analytics/client-retention').then(function (response) {
      _this.clientRetentionBar = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Sessions By Device

    this.$http.get('/api/card/card-analytics/session-by-device').then(function (response) {
      _this.sessionsData = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Chat Log

    this.$http.get('/api/chat/demo-1/log').then(function (response) {
      _this.chatLog = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Customers

    this.$http.get('/api/card/card-analytics/customers').then(function (response) {
      _this.customersData = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-card-log {\n  height: 400px;\n}\n[dir] .chat-card-log .chat-sent-msg {\n  background-color: #f2f4f7 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardECommerce.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { staticClass: "overflow-hidden" }, [
    _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
      _c(
        "div",
        {
          staticClass: "p-6",
          class: {
            "flex justify-between flex-row-reverse items-center": _vm.iconRight,
            "text-center": !_vm.iconRight && _vm.hideChart,
            "pb-0": !_vm.hideChart
          }
        },
        [
          _c("feather-icon", {
            staticClass: "p-3 inline-flex rounded-full",
            class: ["text-" + _vm.color, { "mb-4": !_vm.iconRight }],
            style: { background: "rgba(var(--vs-" + _vm.color + "),.15)" },
            attrs: { icon: _vm.icon }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "truncate" }, [
            _c("h2", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statistic))
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      !_vm.hideChart
        ? _c(
            "div",
            { staticClass: "line-area-chart" },
            [
              _c("vue-apex-charts", {
                ref: "apexChart",
                attrs: {
                  type: _vm.type,
                  height: "100",
                  width: "100%",
                  options: _vm.chartOptions,
                  series: _vm.chartData
                }
              })
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardECommerce.vue?vue&type=template&id=994a5654&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardECommerce.vue?vue&type=template&id=994a5654& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        },
        [
          _vm.subscribersGained.analyticsData
            ? _c("statistics-card-line", {
                attrs: {
                  icon: "UsersIcon",
                  statistic: _vm._f("k_formatter")(
                    _vm.subscribersGained.analyticsData.subscribers
                  ),
                  statisticTitle: "Subscribers Gained",
                  chartData: _vm.subscribersGained.series,
                  type: "area"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        },
        [
          _vm.revenueGenerated.analyticsData
            ? _c("statistics-card-line", {
                attrs: {
                  icon: "DollarSignIcon",
                  statistic: _vm._f("k_formatter")(
                    _vm.revenueGenerated.analyticsData.revenue
                  ),
                  statisticTitle: "Revenue Generated",
                  chartData: _vm.revenueGenerated.series,
                  color: "success",
                  type: "area"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        },
        [
          _vm.quarterlySales.analyticsData
            ? _c("statistics-card-line", {
                attrs: {
                  icon: "ShoppingCartIcon",
                  statistic: _vm.quarterlySales.analyticsData.sales,
                  statisticTitle: "Quarterly Sales",
                  chartData: _vm.quarterlySales.series,
                  color: "danger",
                  type: "area"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        },
        [
          _vm.ordersRecevied.analyticsData
            ? _c("statistics-card-line", {
                attrs: {
                  icon: "ShoppingBagIcon",
                  statistic: _vm._f("k_formatter")(
                    _vm.ordersRecevied.analyticsData.orders
                  ),
                  statisticTitle: "Orders Received",
                  chartData: _vm.ordersRecevied.series,
                  color: "warning",
                  type: "area"
                }
              })
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-2/3 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Revenue" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "SettingsIcon",
                      svgClasses: "w-6 h-6 text-grey"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "p-6 pb-0",
                  attrs: { slot: "no-body" },
                  slot: "no-body"
                },
                [
                  _vm.revenueComparisonLine.analyticsData
                    ? _c("div", { staticClass: "flex" }, [
                        _c("div", { staticClass: "mr-6" }, [
                          _c("p", { staticClass: "mb-1 font-semibold" }, [
                            _vm._v("This Month")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-3xl text-success" }, [
                            _c("sup", { staticClass: "text-base mr-1" }, [
                              _vm._v("$")
                            ]),
                            _vm._v(
                              _vm._s(
                                _vm.revenueComparisonLine.analyticsData.thisMonth.toLocaleString()
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("p", { staticClass: "mb-1 font-semibold" }, [
                            _vm._v("Last Month")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-3xl" }, [
                            _c("sup", { staticClass: "text-base mr-1" }, [
                              _vm._v("$")
                            ]),
                            _vm._v(
                              _vm._s(
                                _vm.revenueComparisonLine.analyticsData.lastMonth.toLocaleString()
                              )
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "line",
                      height: "266",
                      options:
                        _vm.analyticsData.revenueComparisonLine.chartOptions,
                      series: _vm.revenueComparisonLine.series
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Goal Overview" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "HelpCircleIcon",
                      svgClasses: "w-6 h-6 text-grey"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("template", { slot: "no-body" }, [
                _c(
                  "div",
                  { staticClass: "mt-10" },
                  [
                    _c("vue-apex-charts", {
                      attrs: {
                        type: "radialBar",
                        height: "240",
                        options:
                          _vm.analyticsData.goalOverviewRadialBar.chartOptions,
                        series: _vm.goalOverview.series
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "flex justify-between text-center mt-6",
                  attrs: { slot: "no-body-bottom" },
                  slot: "no-body-bottom"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0"
                    },
                    [
                      _c("p", { staticClass: "mt-4" }, [_vm._v("Completed")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-4 text-3xl font-semibold" }, [
                        _vm._v("786,617")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0"
                    },
                    [
                      _c("p", { staticClass: "mt-4" }, [_vm._v("In Progress")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-4 text-3xl font-semibold" }, [
                        _vm._v("13,561")
                      ])
                    ]
                  )
                ]
              )
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Browser Statistics" } },
            _vm._l(_vm.browserStatistics, function(browser, index) {
              return _c(
                "div",
                { key: browser.id, class: { "mt-4": index } },
                [
                  _c("div", { staticClass: "flex justify-between" }, [
                    _c("div", { staticClass: "flex flex-col" }, [
                      _c("span", { staticClass: "mb-1" }, [
                        _vm._v(_vm._s(browser.name))
                      ]),
                      _vm._v(" "),
                      _c("h4", [_vm._v(_vm._s(browser.ratio) + "%")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-col text-right" }, [
                      _c(
                        "span",
                        { staticClass: "flex -mr-1" },
                        [
                          _c("span", { staticClass: "mr-1" }, [
                            _vm._v(_vm._s(browser.comparedResult))
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon:
                                browser.comparedResult < 0
                                  ? "ArrowDownIcon"
                                  : "ArrowUpIcon",
                              svgClasses: [
                                browser.comparedResult < 0
                                  ? "text-danger"
                                  : "text-success",
                                "stroke-current h-4 w-4 mb-1 mr-1"
                              ]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-grey" }, [
                        _vm._v(_vm._s(_vm._f("time")(browser.time, true)))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("vs-progress", { attrs: { percent: browser.ratio } })
                ],
                1
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-2/3" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Client Retention" } },
            [
              _c("div", { staticClass: "flex" }, [
                _c("span", { staticClass: "flex items-center" }, [
                  _c("div", {
                    staticClass: "h-3 w-3 rounded-full mr-1 bg-primary"
                  }),
                  _c("span", [_vm._v("New Clients")])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "flex items-center ml-4" }, [
                  _c("div", {
                    staticClass: "h-3 w-3 rounded-full mr-1 bg-danger"
                  }),
                  _c("span", [_vm._v("Retained Clients")])
                ])
              ]),
              _vm._v(" "),
              _c("vue-apex-charts", {
                attrs: {
                  type: "bar",
                  height: "277",
                  options: _vm.analyticsData.clientRetentionBar.chartOptions,
                  series: _vm.clientRetentionBar.series
                }
              })
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 lg:mt-0 mt-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Sessions By Device" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [_c("change-time-duration-dropdown")],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "no-body" }, slot: "no-body" },
                [
                  _c("vue-apex-charts", {
                    staticClass: "mt-6 mb-8",
                    attrs: {
                      type: "donut",
                      height: "325",
                      options:
                        _vm.analyticsData.sessionsByDeviceDonut.chartOptions,
                      series: _vm.sessionsData.series
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "mt-6" },
                _vm._l(_vm.sessionsData.analyticsData, function(deviceData) {
                  return _c(
                    "li",
                    { key: deviceData.device, staticClass: "flex mb-3" },
                    [
                      _c("feather-icon", {
                        attrs: {
                          icon: deviceData.icon,
                          svgClasses: [
                            "h-5 w-5 stroke-current text-" + deviceData.color
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "ml-2 inline-block font-semibold" },
                        [_vm._v(_vm._s(deviceData.device))]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "mx-2" }, [_vm._v("-")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "mr-4" }, [
                        _vm._v(_vm._s(deviceData.sessionsPercentage) + "%")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "ml-auto flex -mr-1" },
                        [
                          _c("span", { staticClass: "mr-1" }, [
                            _vm._v(
                              _vm._s(deviceData.comparedResultPercentage) + "%"
                            )
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon:
                                deviceData.comparedResultPercentage < 0
                                  ? "ArrowDownIcon"
                                  : "ArrowUpIcon",
                              svgClasses: [
                                deviceData.comparedResultPercentage < 0
                                  ? "text-danger"
                                  : "text-success",
                                "stroke-current h-4 w-4 mb-1 mr-1"
                              ]
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                0
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 lg:mt-0 mt-base" },
        [
          _c(
            "vx-card",
            { staticClass: "overflow-hidden", attrs: { title: "Chat" } },
            [
              _c("template", { slot: "no-body" }, [
                _c(
                  "div",
                  { staticClass: "chat-card-log" },
                  [
                    _c(
                      _vm.scrollbarTag,
                      {
                        key: _vm.$vs.rtl,
                        ref: "chatLogPS",
                        tag: "component",
                        staticClass: "scroll-area pt-6 px-6",
                        attrs: { settings: _vm.settings }
                      },
                      [
                        _c(
                          "ul",
                          { ref: "chatLog" },
                          _vm._l(_vm.chatLog, function(msg, index) {
                            return _c(
                              "li",
                              {
                                key: index,
                                staticClass: "flex items-start",
                                class: {
                                  "flex-row-reverse": msg.isSent,
                                  "mt-4": index
                                }
                              },
                              [
                                _c("vs-avatar", {
                                  staticClass: "m-0 flex-shrink-0",
                                  class: msg.isSent ? "ml-5" : "mr-5",
                                  attrs: { size: "40px", src: msg.senderImg }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md",
                                    class: {
                                      "chat-sent-msg bg-primary-gradient text-white":
                                        msg.isSent,
                                      "border border-solid d-theme-border-grey-light": !msg.isSent
                                    }
                                  },
                                  [_c("span", [_vm._v(_vm._s(msg.msg))])]
                                )
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex bg-white chat-input-container p-6" },
                  [
                    _c("vs-input", {
                      staticClass: "mr-3 w-full",
                      attrs: { placeholder: "Type Your Message" },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          _vm.chatMsgInput = ""
                        }
                      },
                      model: {
                        value: _vm.chatMsgInput,
                        callback: function($$v) {
                          _vm.chatMsgInput = $$v
                        },
                        expression: "chatMsgInput"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-button", {
                      attrs: { "icon-pack": "feather", icon: "icon-send" },
                      on: {
                        click: function($event) {
                          _vm.chatMsgInput = ""
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 lg:mt-0 mt-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Customers" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [_c("change-time-duration-dropdown")],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "no-body" }, slot: "no-body" },
                [
                  _c("vue-apex-charts", {
                    staticClass: "mt-10 mb-10",
                    attrs: {
                      type: "pie",
                      height: "345",
                      options: _vm.analyticsData.customersPie.chartOptions,
                      series: _vm.customersData.series
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "mb-1" },
                    _vm._l(_vm.customersData.analyticsData, function(
                      customerData
                    ) {
                      return _c(
                        "li",
                        {
                          key: customerData.customerType,
                          staticClass:
                            "flex justify-between py-3 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0"
                        },
                        [
                          _c("span", { staticClass: "flex items-center" }, [
                            _c("span", {
                              staticClass:
                                "inline-block h-3 w-3 rounded-full mr-2",
                              class: "bg-" + customerData.color
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "font-semibold" }, [
                              _vm._v(_vm._s(customerData.customerType))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(customerData.counts))])
                        ]
                      )
                    }),
                    0
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony import */ var _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/statistics-cards/StatisticsCardLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/statistics-cards/chartConfigs.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/chartConfigs.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  areaChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0
      }
    }],
    tooltip: {
      x: {
        show: false
      }
    }
  },
  lineChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      type: 'line',
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 4,
        opacity: 0.10
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'numeric'
    },
    // colors: ['#7367F0'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        // gradientToColors: ['#A9A2F6'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 5
      }
    },
    tooltip: {
      x: {
        show: false
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/DashboardECommerce.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/DashboardECommerce.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardECommerce_vue_vue_type_template_id_994a5654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardECommerce.vue?vue&type=template&id=994a5654& */ "./resources/js/src/views/DashboardECommerce.vue?vue&type=template&id=994a5654&");
/* harmony import */ var _DashboardECommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardECommerce.vue?vue&type=script&lang=js& */ "./resources/js/src/views/DashboardECommerce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardECommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardECommerce.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardECommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardECommerce_vue_vue_type_template_id_994a5654___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardECommerce_vue_vue_type_template_id_994a5654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/DashboardECommerce.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/DashboardECommerce.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/DashboardECommerce.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardECommerce.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardECommerce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardECommerce.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardECommerce.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/DashboardECommerce.vue?vue&type=template&id=994a5654&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardECommerce.vue?vue&type=template&id=994a5654& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_template_id_994a5654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardECommerce.vue?vue&type=template&id=994a5654& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardECommerce.vue?vue&type=template&id=994a5654&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_template_id_994a5654___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardECommerce_vue_vue_type_template_id_994a5654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);