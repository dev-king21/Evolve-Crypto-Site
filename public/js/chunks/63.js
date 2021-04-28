(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/AlfaCoinButton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/AlfaCoinButton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    button_id: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-elements/card/analyticsData.js */ "./resources/js/src/views/ui-elements/card/analyticsData.js");
/* harmony import */ var _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ChangeTimeDurationDropdown.vue */ "./resources/js/src/components/ChangeTimeDurationDropdown.vue");
/* harmony import */ var _components_dashboard_ProductPackage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/ProductPackage.vue */ "./resources/js/src/views/components/dashboard/ProductPackage.vue");
/* harmony import */ var _data_packages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/packages.js */ "./resources/js/src/data/packages.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var themeColors = ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"];
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      checkpointReward: {},
      subscribersGained: {},
      ordersRecevied: {},
      salesBarSession: {},
      supportTracker: {},
      productsOrder: {},
      salesRadar: {},
      timeIntervals: ["1h", "1d", "1w", "1M"],
      package_items: _data_packages_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      btcCandleChart: {
        series: [],
        chartOptions: {
          colors: themeColors,
          xaxis: {
            type: "datetime"
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        }
      },
      analyticsData: _ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      dispatchedOrders: [],
      btc_symbol: "BTCUSDT",
      btc_interval: undefined
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a,
    ChangeTimeDurationDropdown: _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProductPackage: _components_dashboard_ProductPackage_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    var _this = this;

    //  User Reward Card
    this.$http.get("/api/user/checkpoint-reward").then(function (response) {
      _this.checkpointReward = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Subscribers gained - Statistics

    this.$http.get("/api/card/card-statistics/subscribers").then(function (response) {
      _this.subscribersGained = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Orders - Statistics

    this.$http.get("/api/card/card-statistics/orders").then(function (response) {
      _this.ordersRecevied = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Sales bar - Analytics

    this.$http.get("/api/card/card-analytics/sales/bar").then(function (response) {
      _this.salesBarSession = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Support Tracker

    this.$http.get("/api/card/card-analytics/support-tracker").then(function (response) {
      _this.supportTracker = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Products Order

    this.$http.get("/api/card/card-analytics/products-orders").then(function (response) {
      _this.productsOrder = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); // Sales Radar

    this.$http.get("/api/card/card-analytics/sales/radar").then(function (response) {
      _this.salesRadar = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  },
  mounted: function mounted() {
    this.updateTimeInterval("1h");
  },
  methods: {
    getBtcStockData: function getBtcStockData(isUpdate) {
      var _this2 = this;

      var proxyUrl = "https://proxy.mysoftnotes.com/proxy.php?curl=";
      var apiurl = encodeURIComponent("https://api.binance.com/api/v1/klines?symbol=".concat(this.btc_symbol, "&interval=").concat(this.btc_interval));
      this.$vs.loading({
        container: ".btc-candle-chart",
        type: "material"
      });
      fetch("".concat(proxyUrl).concat(apiurl)).then(function (response) {
        if (response.status !== 200) {
          console.log("Looks like there was a problem. Status Code: " + response.status);

          _this2.$vs.close();

          return;
        }

        response.json().then(function (_data) {
          var data = _data.map(function (val) {
            return {
              x: new Date(val[0]),
              y: [parseFloat(val[1]), parseFloat(val[3]), parseFloat(val[2]), parseFloat(val[4])]
            };
          });

          _this2.btcCandleChart.series = [{
            data: data
          }];

          _this2.$vs.loading.close();
        });
      })["catch"](function () {
        _this2.$vs.loading.close();
      });
    },
    updateTimeInterval: function updateTimeInterval(ti) {
      this.btc_interval = ti;
      this.getBtcStockData(true);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AlfaCoinButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AlfaCoinButton */ "./resources/js/src/components/AlfaCoinButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    AlfaCoinButton: _components_AlfaCoinButton__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      card_bg_img_2: __webpack_require__(/*! @assets/images/pages/card-bg-image-demo-2.jpg */ "./resources/assets/images/pages/card-bg-image-demo-2.jpg")
    };
  },
  methods: {
    navigate_to_detail_view: function navigate_to_detail_view() {
      this.$router.push({
        name: "ecommerce-item-detail-view",
        params: {
          item_id: this.item.objectID
        }
      })["catch"](function () {});
    },
    purchasePackage: function purchasePackage() {
      alert(this.item.price);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard-analytics .greet-user {\n  position: relative;\n}\n#dashboard-analytics .greet-user .decore-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n#dashboard-analytics .greet-user .decore-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n#dashboard-analytics .btc-chart-title {\n  display: flex;\n  align-items: center;\n}\n#dashboard-analytics .btc-chart-title .btc_icon {\n  margin-right: 12px;\n  width: 32px;\n  height: 32px;\n}\n@media (max-width: 576px) {\n#dashboard-analytics .decore-left,\n#dashboard-analytics .decore-right {\n    width: 140px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-view-item[data-v-6afa8391] {\n  /* background: linear-gradient(\n    to bottom,\n    rgb(15, 22, 66) 44%,\n    rgba(15, 22, 66, 0.51) 73%,\n    rgba(44, 48, 60, 0) 100%\n  ); */\n}\n.grid-view-item .grid-view-img[data-v-6afa8391] {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  transition: 0.35s;\n}\n[dir] .grid-view-item[data-v-6afa8391]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);\n}\n.grid-view-item:hover .grid-view-img[data-v-6afa8391] {\n  opacity: 0.9;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/AlfaCoinButton.vue?vue&type=template&id=339f9aa9&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/AlfaCoinButton.vue?vue&type=template&id=339f9aa9& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      ref: "alfacoins_form",
      attrs: { action: "https://www.alfacoins.com/checkout", method: "post" }
    },
    [
      _c("input", {
        attrs: { type: "hidden", name: "button_id" },
        domProps: { value: _vm.button_id }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "alfacoins-btn alfacoins-btn-default alfacoins-btn-3 alfacoins-btn-cur-LTCT alfacoins-btn-cur-1",
          on: {
            click: function($event) {
              return _vm.$refs.alfacoins_form.submit()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "alfacoins-btn-body alfacoins-btn-3-body" },
            [
              _c(
                "div",
                { staticClass: "alfacoins-btn-border alfacoins-btn-3-border" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "alfacoins-btn-inner alfacoins-btn-3-inner"
                    },
                    [
                      _c("svg", { staticClass: "ico-21 ico-svg" }, [
                        _c("use", { attrs: { "xlink:href": "#logo" } })
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("Purchase")])
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc& ***!
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
  return _c(
    "div",
    { staticClass: "container", attrs: { id: "dashboard-analytics" } },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col w-full mb-base" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full mb-base" },
            [
              _c(
                "vx-card",
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col lg:w-1/2 sm:w-full w-full" },
                      [
                        _c("div", { staticClass: "btc-chart-title p-3" }, [
                          _c("img", {
                            staticClass: "btc_icon",
                            attrs: {
                              src:
                                "https://raw.githubusercontent.com/rainner/binance-watch/master/public/images/icons/btc_.png"
                            }
                          }),
                          _vm._v(" "),
                          _c("h2", { staticClass: "font-bold" }, [
                            _vm._v("Bitcoin (BTC) / USDT")
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-col lg:w-1/2 sm:w-full w-full text-right"
                      },
                      _vm._l(_vm.timeIntervals, function(interval) {
                        return _c(
                          "vs-button",
                          {
                            key: "time-interval-" + interval,
                            attrs: {
                              color:
                                interval == _vm.btc_interval
                                  ? "success"
                                  : "dark",
                              type: "flat",
                              size: "small"
                            },
                            on: {
                              click: function($event) {
                                return _vm.updateTimeInterval(interval)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(interval) +
                                "\n              "
                            )
                          ]
                        )
                      }),
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    staticClass: "btc-candle-chart",
                    attrs: {
                      type: "candlestick",
                      height: "350",
                      options: _vm.btcCandleChart.chartOptions,
                      series: _vm.btcCandleChart.series
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c("vx-card", { staticClass: "h-full" }, [
              _c("div", [
                _c(
                  "div",
                  { staticClass: "flex w-full justify-between" },
                  [
                    _c("h2", { staticClass: "mb-1 font-bold text-4xl" }, [
                      _vm._v("Daily Incoming")
                    ]),
                    _vm._v(" "),
                    _c("change-time-duration-dropdown", {
                      staticClass: "self-end"
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.salesBarSession.analyticsData
                  ? _c(
                      "div",
                      { staticClass: "flex mt-4 px-2 w-full justify-between" },
                      [
                        _c("div", { staticClass: "flex" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "lg:ml-6 lg:mt-2 md:mt-0 md:ml-0 sm:ml-6 sm:mt-2 text-center"
                            },
                            [
                              _c(
                                "h1",
                                {
                                  staticClass: "font-bold text-4xl text-success"
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm._f("k_formatter")(
                                          _vm.salesBarSession.analyticsData
                                            .session
                                        )
                                      ) +
                                      "\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("small", [_vm._v("Today")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "lg:ml-6 lg:mt-2 md:mt-0 md:ml-0 sm:ml-6 sm:mt-2 text-center"
                            },
                            [
                              _c(
                                "h1",
                                {
                                  staticClass: "font-bold text-4xl text-success"
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm._f("k_formatter")(
                                          _vm.salesBarSession.analyticsData
                                            .session
                                        )
                                      ) +
                                      "\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("small", [_vm._v("Total")])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-xl font-medium" }, [
                          _c(
                            "span",
                            {
                              class:
                                _vm.salesBarSession.analyticsData.comparison
                                  .result >= 0
                                  ? "text-success"
                                  : "text-danger"
                            },
                            [
                              _vm.salesBarSession.analyticsData.comparison
                                .result > 0
                                ? _c("span", [
                                    _vm._v(
                                      "\n                  +\n                "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(
                                      _vm.salesBarSession.analyticsData
                                        .comparison.result
                                    ) +
                                    "\n                "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v(" vs ")]),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                " +
                                _vm._s(
                                  _vm.salesBarSession.analyticsData.comparison
                                    .str
                                ) +
                                "\n              "
                            )
                          ])
                        ])
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/2 sm:w-full w-full"
                  },
                  [
                    _vm.salesBarSession.analyticsData
                      ? _c("div", [
                          _c("div", { staticClass: "mt-6 px-4" }, [
                            _c(
                              "div",
                              { staticClass: "mb-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "flex justify-between" },
                                  [
                                    _c("p", [
                                      _vm._v(
                                        "\n                      Elite:\n                      "
                                      ),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "text-italic text-success"
                                        },
                                        [_vm._v(" $100000 ")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "text-grey" }, [
                                      _vm._v("April 12, 2021")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("vs-progress", {
                                  staticClass: "block mt-1",
                                  attrs: { percent: 50, color: "success" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col w-1/2 mb-3" },
                              [
                                _c("p", [_vm._v("Users: 100K")]),
                                _vm._v(" "),
                                _c("vs-progress", {
                                  staticClass: "block mt-1",
                                  attrs: { percent: 60, color: "warning" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col w-1/2 mb-3" },
                              [
                                _c("p", [_vm._v("Retention: 90%")]),
                                _vm._v(" "),
                                _c("vs-progress", {
                                  staticClass: "block mt-1",
                                  attrs: { percent: 70, color: "danger" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col w-1/2 mb-3" },
                              [
                                _c("p", [_vm._v("Duration: 1yr")]),
                                _vm._v(" "),
                                _c("vs-progress", {
                                  staticClass: "block mt-1",
                                  attrs: { percent: 90, color: "success" }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/2 sm:w-full w-full"
                  },
                  [
                    _vm.salesBarSession.series
                      ? _c("vue-apex-charts", {
                          attrs: {
                            type: "bar",
                            height: "200",
                            options: _vm.analyticsData.salesBar.chartOptions,
                            series: _vm.salesBarSession.series
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-row match-height" },
        _vm._l(_vm.package_items, function(item) {
          return _c(
            "div",
            { key: item.id, staticClass: "vx-col lg:w-1/3 sm:w-1/2 w-full" },
            [_c("product-package", { attrs: { item: item } })],
            1
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-4" }, [
      _c("h2", { staticClass: "font-bold" }, [_vm._v("Packages")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=template&id=6afa8391&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=template&id=6afa8391&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    _vm._g(
      {
        staticClass: "grid-view-item mb-base overflow-hidden",
        attrs: {
          "content-color": "#fff",
          "card-background":
            "linear-gradient(120deg ,rgba(247,97,161,0.5), rgba(140,27,171,.8)), url(" +
            _vm.card_bg_img_2 +
            ")"
        }
      },
      _vm.$listeners
    ),
    [
      _c(
        "template",
        { slot: "no-body" },
        [
          _c("div", { staticClass: "px-4 py-4" }, [
            _c("h3", { staticClass: "text-white px-4" }, [
              _vm._v("\n        " + _vm._s(_vm.item.name) + "\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item-details px-8 py-4" }, [
            _c("div", { staticClass: "flex justify-between items-center" }, [
              _c(
                "div",
                {
                  staticClass:
                    "text-warning border border-solid border-warning flex py-1 px-2 rounded"
                },
                [
                  _c("span", { staticClass: "text-sm mr-1" }, [
                    _vm._v(_vm._s(_vm.item.rating))
                  ]),
                  _vm._v(" "),
                  _c("feather-icon", {
                    attrs: { icon: "StarIcon", svgClasses: "h-4 w-4" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "font-bold text-success" }, [
                _vm._v("$" + _vm._s(_vm.item.price))
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "p-4 text-center" },
            [
              _c("alfa-coin-button", {
                attrs: { button_id: _vm.item.button_id }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._t("action-buttons")
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/card-bg-image-demo-2.jpg":
/*!****************************************************************!*\
  !*** ./resources/assets/images/pages/card-bg-image-demo-2.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/card-bg-image-demo-2.jpg?720ceb82fd5df9730db9e0b33ec1c987";

/***/ }),

/***/ "./resources/js/src/components/AlfaCoinButton.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/components/AlfaCoinButton.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlfaCoinButton_vue_vue_type_template_id_339f9aa9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlfaCoinButton.vue?vue&type=template&id=339f9aa9& */ "./resources/js/src/components/AlfaCoinButton.vue?vue&type=template&id=339f9aa9&");
/* harmony import */ var _AlfaCoinButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlfaCoinButton.vue?vue&type=script&lang=js& */ "./resources/js/src/components/AlfaCoinButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlfaCoinButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlfaCoinButton_vue_vue_type_template_id_339f9aa9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlfaCoinButton_vue_vue_type_template_id_339f9aa9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/AlfaCoinButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/AlfaCoinButton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/components/AlfaCoinButton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlfaCoinButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AlfaCoinButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/AlfaCoinButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlfaCoinButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/AlfaCoinButton.vue?vue&type=template&id=339f9aa9&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/components/AlfaCoinButton.vue?vue&type=template&id=339f9aa9& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlfaCoinButton_vue_vue_type_template_id_339f9aa9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AlfaCoinButton.vue?vue&type=template&id=339f9aa9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/AlfaCoinButton.vue?vue&type=template&id=339f9aa9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlfaCoinButton_vue_vue_type_template_id_339f9aa9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlfaCoinButton_vue_vue_type_template_id_339f9aa9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/data/packages.js":
/*!*******************************************!*\
  !*** ./resources/js/src/data/packages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  name: "Evolve CFX",
  description: "",
  button_id: "6087bbaa7b71a",
  price: 60,
  image: ""
}, {
  id: 2,
  name: "Evolve SFX",
  description: "",
  button_id: "6087bbe6971a5",
  price: 175,
  image: ""
}, {
  id: 3,
  name: "Evolve StarFX",
  description: "",
  button_id: "6087bc31dd6c3",
  price: 245,
  image: ""
}, {
  id: 4,
  name: "Evolve Elite",
  description: "",
  button_id: "6087bc6c347d5",
  price: 465,
  image: ""
}, {
  id: 5,
  name: "Evolve ECN",
  description: "",
  button_id: "6087bcb5706ac",
  price: 1824.9,
  image: ""
}, {
  id: 6,
  name: "Evolve EFX",
  description: "",
  button_id: "6087bce18df5b",
  price: 2981,
  image: ""
}, {
  id: 7,
  name: "Evolve GO",
  description: "",
  button_id: "6087bd197bf4f",
  price: 6832,
  image: ""
}, {
  id: 8,
  name: "Evolve Indicator",
  description: "",
  button_id: "6087bd6682297",
  price: 12155,
  image: ""
}]);

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=template&id=596e52fc& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&");
/* harmony import */ var _DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/DashboardAnalytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=template&id=596e52fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/dashboard/ProductPackage.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/dashboard/ProductPackage.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductPackage_vue_vue_type_template_id_6afa8391_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPackage.vue?vue&type=template&id=6afa8391&scoped=true& */ "./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=template&id=6afa8391&scoped=true&");
/* harmony import */ var _ProductPackage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPackage.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductPackage_vue_vue_type_style_index_0_id_6afa8391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true& */ "./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductPackage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductPackage_vue_vue_type_template_id_6afa8391_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductPackage_vue_vue_type_template_id_6afa8391_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6afa8391",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/dashboard/ProductPackage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPackage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_style_index_0_id_6afa8391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=style&index=0&id=6afa8391&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_style_index_0_id_6afa8391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_style_index_0_id_6afa8391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_style_index_0_id_6afa8391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_style_index_0_id_6afa8391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=template&id=6afa8391&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=template&id=6afa8391&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_template_id_6afa8391_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPackage.vue?vue&type=template&id=6afa8391&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/dashboard/ProductPackage.vue?vue&type=template&id=6afa8391&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_template_id_6afa8391_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPackage_vue_vue_type_template_id_6afa8391_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);