(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/functions/write/index"],
  {
    "1a94": function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("4f1b"),
        r = n.n(o);
      for (var i in o)
        "default" !== i &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
      e["default"] = r.a;
    },
    "2d38": function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("d49e"),
        r = n("1a94");
      for (var i in r)
        "default" !== i &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      n("e7ed");
      var c,
        a = n("f0c5"),
        u = Object(a["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], c);
      e["default"] = u.exports;
    },
    "4f1b": function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = a(n("4795")),
          r = c(n("6184"));
        function i() {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap();
          return (
            (i = function () {
              return t;
            }),
            t
          );
        }
        function c(t) {
          if (t && t.__esModule) return t;
          if (null === t || ("object" !== typeof t && "function" !== typeof t)) return { default: t };
          var e = i();
          if (e && e.has(t)) return e.get(t);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
              var c = o ? Object.getOwnPropertyDescriptor(t, r) : null;
              c && (c.get || c.set) ? Object.defineProperty(n, r, c) : (n[r] = t[r]);
            }
          return (n.default = t), e && e.set(t, n), n;
        }
        function a(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function u(t) {
          return d(t) || f(t) || l(t) || s();
        }
        function s() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function l(t, e) {
          if (t) {
            if ("string" === typeof t) return v(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(n)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? v(t, e)
                : void 0
            );
          }
        }
        function f(t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function d(t) {
          if (Array.isArray(t)) return v(t);
        }
        function v(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
          return o;
        }
        function h(t, e, n, o, r, i, c) {
          try {
            var a = t[i](c),
              u = a.value;
          } catch (s) {
            return void n(s);
          }
          a.done ? e(u) : Promise.resolve(u).then(o, r);
        }
        function p(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise(function (o, r) {
              var i = t.apply(e, n);
              function c(t) {
                h(i, o, r, c, a, "next", t);
              }
              function a(t) {
                h(i, o, r, c, a, "throw", t);
              }
              c(void 0);
            });
          };
        }
        var m = null,
          y = null,
          g = null,
          b = {
            data: function () {
              return { prevPosition: [-1, -1], movePosition: [-1, -1] };
            },
            onLoad: function () {
              var t = this;
              return p(
                o.default.mark(function e() {
                  var n, i;
                  return o.default.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t.initAD(), (e.next = 3), r.getCanvas();
                        case 3:
                          (y = e.sent),
                            (n = (40 * y._width) / 680),
                            (i = (600 * y._width) / 680),
                            console.log(y),
                            (g = y.getContext("2d")),
                            (g.lineWidth = 2),
                            (g.strokeStyle = "#f00"),
                            g.beginPath(),
                            (g.fillStyle = "#fff"),
                            g.fillRect(0, 0, y._width, y._width),
                            g.strokeRect(n, n, i, i),
                            g.setLineDash([5, 5]),
                            (g.lineWidth = 1),
                            g.moveTo(n, n),
                            g.lineTo(n + i, n + i),
                            g.moveTo(n, n + i),
                            g.lineTo(n + i, n),
                            g.moveTo(n + i / 2, n),
                            g.lineTo(n + i / 2, n + i),
                            g.moveTo(n, n + i / 2),
                            g.lineTo(n + i, n + i / 2),
                            g.stroke(),
                            g.closePath(),
                            g.beginPath(),
                            (g.lineWidth = 10),
                            (g.lineCap = "round"),
                            (g.lineJoin = "round"),
                            (g.strokeStyle = "#000");
                        case 31:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            methods: {
              initAD: function () {
                wx.createInterstitialAd &&
                  ((m = wx.createInterstitialAd({ adUnitId: "adunit-81aad1b50ba4e7cc" })),
                  m.onLoad(function () {
                    console.log("onLoad event emit");
                  }),
                  m.onError(function (t) {
                    console.log("onError event emit", t);
                  }),
                  m.onClose(function (t) {
                    console.log("onClose event emit", t);
                  }));
              },
              recognize: function () {
                wx.canvasToTempFilePath({
                  canvasId: "myCanvas",
                  canvas: y,
                  success: function (e) {
                    console.log(e.tempFilePath), t.navigateTo({ url: "../recognize/recognize?src=" + e.tempFilePath });
                  },
                });
              },
              saveImg: function () {
                wx.canvasToTempFilePath({
                  canvasId: "myCanvas",
                  canvas: y,
                  success: function (t) {
                    console.log(t.tempFilePath),
                      wx.saveImageToPhotosAlbum({
                        filePath: t.tempFilePath,
                        success: function (t) {
                          wx.showToast({ title: "保存成功" });
                        },
                        fail: function (t) {
                          console.log(t), wx.showToast({ title: "保存失败", content: t.errMsg });
                        },
                        complete: function () {
                          m.show().catch(function (t) {
                            console.error(t);
                          });
                        },
                      });
                  },
                  complete: function (t) {
                    console.log(t);
                  },
                });
              },
              del: function () {
                t.reLaunch({ url: "./index" });
              },
              touchStart: function (t) {
                (this.prevPosition = this.movePosition = [t.touches[0].x, t.touches[0].y]),
                  console.log("touchStart", [t.touches[0].x, t.touches[0].y]);
              },
              touchEnd: function () {
                console.log("touchEnd");
              },
              touchMove: function (t) {
                var e,
                  n = [].concat(u(this.prevPosition), [t.touches[0].x, t.touches[0].y]),
                  o = n[0],
                  r = n[1],
                  i = n[2],
                  c = n[3];
                (e = g).moveTo.apply(e, u(this.movePosition)),
                  g.quadraticCurveTo(o, r, (i + o) / 2, (c + r) / 2),
                  g.stroke(),
                  (this.prevPosition = [i, c]),
                  (this.movePosition = [(i + o) / 2, (c + r) / 2]),
                  console.log("touchMove", [t.touches[0].x, t.touches[0].y]);
              },
            },
          };
        e.default = b;
      }.call(this, n("543d")["default"]));
    },
    "59ec": function (t, e, n) {
      "use strict";
      (function (t) {
        n("cea1"), n("921b");
        o(n("66fd"));
        var e = o(n("2d38"));
        function o(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, n("543d")["createPage"]));
    },
    d49e: function (t, e, n) {
      "use strict";
      var o,
        r = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
        },
        i = [];
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return o;
        });
    },
    e7ed: function (t, e, n) {
      "use strict";
      var o = n("f58c"),
        r = n.n(o);
      r.a;
    },
    f58c: function (t, e, n) {},
  },
  [["59ec", "common/runtime", "common/vendor"]],
]);
