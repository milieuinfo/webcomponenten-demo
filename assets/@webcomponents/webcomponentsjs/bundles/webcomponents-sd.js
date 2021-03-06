/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  /*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var m,
      aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
  },
      n = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;function ba() {
    ba = function () {};n.Symbol || (n.Symbol = ea);
  }var ea = function () {
    var a = 0;return function (b) {
      return "jscomp_symbol_" + (b || "") + a++;
    };
  }();
  function fa() {
    ba();var a = n.Symbol.iterator;a || (a = n.Symbol.iterator = n.Symbol("iterator"));"function" != typeof Array.prototype[a] && aa(Array.prototype, a, { configurable: !0, writable: !0, value: function () {
        return ha(this);
      } });fa = function () {};
  }function ha(a) {
    var b = 0;return ia(function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }function ia(a) {
    fa();a = { next: a };a[n.Symbol.iterator] = function () {
      return this;
    };return a;
  }function q(a) {
    fa();ba();fa();var b = a[Symbol.iterator];return b ? b.call(a) : ha(a);
  }
  function ja(a) {
    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);return c;
  }function ka() {
    this.da = this.root = null;this.O = !1;this.v = this.J = this.W = this.assignedSlot = this.assignedNodes = this.A = null;this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.D = void 0;this.ha = this.$ = !1;this.I = {};
  }ka.prototype.toJSON = function () {
    return {};
  };function r(a) {
    a.U || (a.U = new ka());return a.U;
  }function t(a) {
    return a && a.U;
  };var v = window.ShadyDOM || {};v.ta = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var la = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");v.o = !!(la && la.configurable && la.get);v.X = v.force || !v.ta;var ma = navigator.userAgent.match("Trident"),
      na = navigator.userAgent.match("Edge");void 0 === v.fa && (v.fa = v.o && (ma || na));function w(a) {
    return (a = t(a)) && void 0 !== a.firstChild;
  }function x(a) {
    return "ShadyRoot" === a.ma;
  }function oa(a) {
    a = a.getRootNode();if (x(a)) return a;
  }
  var y = Element.prototype,
      pa = y.matches || y.matchesSelector || y.mozMatchesSelector || y.msMatchesSelector || y.oMatchesSelector || y.webkitMatchesSelector;function qa(a, b) {
    if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e = void 0; d < c.length && (e = c[d]); d++) {
      var f = e,
          h = a,
          g = Object.getOwnPropertyDescriptor(b, f);g && Object.defineProperty(h, f, g);
    }
  }function ra(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];for (d = 0; d < c.length; d++) qa(a, c[d]);return a;
  }function sa(a, b) {
    for (var c in b) a[c] = b[c];
  }
  var ta = document.createTextNode(""),
      ua = 0,
      va = [];new MutationObserver(function () {
    for (; va.length;) try {
      va.shift()();
    } catch (a) {
      throw ta.textContent = ua++, a;
    }
  }).observe(ta, { characterData: !0 });function wa(a) {
    va.push(a);ta.textContent = ua++;
  }var xa = !!document.contains;function ya(a, b) {
    for (; b;) {
      if (b == a) return !0;b = b.parentNode;
    }return !1;
  }
  function za(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
          d = c.getAttribute("id") || c.getAttribute("name");d && "length" !== d && isNaN(d) && (a[d] = c);
    }a.item = function (b) {
      return a[b];
    };a.namedItem = function (b) {
      if ("length" !== b && isNaN(b) && a[b]) return a[b];for (var c = q(a), d = c.next(); !d.done; d = c.next()) if (d = d.value, (d.getAttribute("id") || d.getAttribute("name")) == b) return d;return null;
    };return a;
  };var Aa = [],
      Ba;function Ca(a) {
    Ba || (Ba = !0, wa(Ea));Aa.push(a);
  }function Ea() {
    Ba = !1;for (var a = !!Aa.length; Aa.length;) Aa.shift()();return a;
  }Ea.list = Aa;function Fa() {
    this.a = !1;this.addedNodes = [];this.removedNodes = [];this.M = new Set();
  }function Ga(a) {
    a.a || (a.a = !0, wa(function () {
      a.flush();
    }));
  }Fa.prototype.flush = function () {
    if (this.a) {
      this.a = !1;var a = this.takeRecords();a.length && this.M.forEach(function (b) {
        b(a);
      });
    }
  };Fa.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Ha(a, b) {
    var c = r(a);c.A || (c.A = new Fa());c.A.M.add(b);var d = c.A;return { la: b, oa: d, na: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Ia(a) {
    var b = a && a.oa;b && (b.M.delete(a.la), b.M.size || (r(a.na).A = null));
  }
  function Ja(a, b) {
    var c = b.getRootNode();return a.map(function (a) {
      var b = c === a.target.getRootNode();if (b && a.addedNodes) {
        if (b = Array.from(a.addedNodes).filter(function (a) {
          return c === a.getRootNode();
        }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", { value: b, configurable: !0 }), a;
      } else if (b) return a;
    }).filter(function (a) {
      return a;
    });
  };var Ka = Element.prototype.insertBefore,
      La = Element.prototype.replaceChild,
      Ma = Element.prototype.removeChild,
      Na = Element.prototype.setAttribute,
      Oa = Element.prototype.removeAttribute,
      Pa = Element.prototype.cloneNode,
      Qa = Document.prototype.importNode,
      Ra = Element.prototype.addEventListener,
      Sa = Element.prototype.removeEventListener,
      Ta = Window.prototype.addEventListener,
      Ua = Window.prototype.removeEventListener,
      Va = Element.prototype.dispatchEvent,
      Wa = Node.prototype.contains || HTMLElement.prototype.contains,
      Xa = Document.prototype.getElementById,
      Ya = Element.prototype.querySelector,
      Za = DocumentFragment.prototype.querySelector,
      $a = Document.prototype.querySelector,
      ab = Element.prototype.querySelectorAll,
      bb = DocumentFragment.prototype.querySelectorAll,
      cb = Document.prototype.querySelectorAll,
      z = {};z.appendChild = Element.prototype.appendChild;z.insertBefore = Ka;z.replaceChild = La;z.removeChild = Ma;z.setAttribute = Na;z.removeAttribute = Oa;z.cloneNode = Pa;z.importNode = Qa;z.addEventListener = Ra;z.removeEventListener = Sa;z.Ca = Ta;z.Da = Ua;z.dispatchEvent = Va;
  z.contains = Wa;z.getElementById = Xa;z.Ka = Ya;z.Na = Za;z.Ia = $a;z.querySelector = function (a) {
    switch (this.nodeType) {case Node.ELEMENT_NODE:
        return Ya.call(this, a);case Node.DOCUMENT_NODE:
        return $a.call(this, a);default:
        return Za.call(this, a);}
  };z.La = ab;z.Oa = bb;z.Ja = cb;z.querySelectorAll = function (a) {
    switch (this.nodeType) {case Node.ELEMENT_NODE:
        return ab.call(this, a);case Node.DOCUMENT_NODE:
        return cb.call(this, a);default:
        return bb.call(this, a);}
  };var db = /[&\u00A0"]/g,
      eb = /[&\u00A0<>]/g;function fb(a) {
    switch (a) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case '"':
        return "&quot;";case "\u00a0":
        return "&nbsp;";}
  }function gb(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;return b;
  }var hb = gb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
      ib = gb("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function jb(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, h = void 0; e < f && (h = d[e]); e++) {
      a: {
        var g = h;var k = a,
            l = b;switch (g.nodeType) {case Node.ELEMENT_NODE:
            k = g.localName;for (var p = "<" + k, u = g.attributes, ca = 0, da; da = u[ca]; ca++) p += " " + da.name + '="' + da.value.replace(db, fb) + '"';p += ">";g = hb[k] ? p : p + jb(g, l) + "</" + k + ">";break a;case Node.TEXT_NODE:
            g = g.data;g = k && ib[k.localName] ? g : g.replace(eb, fb);break a;case Node.COMMENT_NODE:
            g = "\x3c!--" + g.data + "--\x3e";break a;default:
            throw window.console.error(g), Error("not implemented");}
      }c += g;
    }return c;
  };var A = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      B = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);function kb(a) {
    var b = [];A.currentNode = a;for (a = A.firstChild(); a;) b.push(a), a = A.nextSibling();return b;
  }
  var C = { parentNode: function (a) {
      A.currentNode = a;return A.parentNode();
    }, firstChild: function (a) {
      A.currentNode = a;return A.firstChild();
    }, lastChild: function (a) {
      A.currentNode = a;return A.lastChild();
    }, previousSibling: function (a) {
      A.currentNode = a;return A.previousSibling();
    }, nextSibling: function (a) {
      A.currentNode = a;return A.nextSibling();
    } };C.childNodes = kb;C.parentElement = function (a) {
    B.currentNode = a;return B.parentNode();
  };C.firstElementChild = function (a) {
    B.currentNode = a;return B.firstChild();
  };
  C.lastElementChild = function (a) {
    B.currentNode = a;return B.lastChild();
  };C.previousElementSibling = function (a) {
    B.currentNode = a;return B.previousSibling();
  };C.nextElementSibling = function (a) {
    B.currentNode = a;return B.nextSibling();
  };C.children = function (a) {
    var b = [];B.currentNode = a;for (a = B.firstChild(); a;) b.push(a), a = B.nextSibling();return za(b);
  };C.innerHTML = function (a) {
    return jb(a, function (a) {
      return kb(a);
    });
  };
  C.textContent = function (a) {
    switch (a.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
        a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);for (var b = "", c; c = a.nextNode();) b += c.nodeValue;return b;default:
        return a.nodeValue;}
  };var lb = v.o,
      mb = [Node.prototype, Element.prototype, HTMLElement.prototype];function D(a) {
    var b;a: {
      for (b = 0; b < mb.length; b++) {
        var c = mb[b];if (c.hasOwnProperty(a)) {
          b = c;break a;
        }
      }b = void 0;
    }if (!b) throw Error("Could not find descriptor for " + a);return Object.getOwnPropertyDescriptor(b, a);
  }
  var E = lb ? { parentNode: D("parentNode"), firstChild: D("firstChild"), lastChild: D("lastChild"), previousSibling: D("previousSibling"), nextSibling: D("nextSibling"), childNodes: D("childNodes"), parentElement: D("parentElement"), previousElementSibling: D("previousElementSibling"), nextElementSibling: D("nextElementSibling"), innerHTML: D("innerHTML"), textContent: D("textContent"), firstElementChild: D("firstElementChild"), lastElementChild: D("lastElementChild"), children: D("children") } : {},
      nb = lb ? { firstElementChild: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "firstElementChild"), lastElementChild: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "lastElementChild"), children: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "children") } : {},
      ob = lb ? { firstElementChild: Object.getOwnPropertyDescriptor(Document.prototype, "firstElementChild"), lastElementChild: Object.getOwnPropertyDescriptor(Document.prototype, "lastElementChild"), children: Object.getOwnPropertyDescriptor(Document.prototype, "children") } : {},
      pb = { ca: E, Ma: nb, Ha: ob, parentNode: function (a) {
      return E.parentNode.get.call(a);
    },
    firstChild: function (a) {
      return E.firstChild.get.call(a);
    }, lastChild: function (a) {
      return E.lastChild.get.call(a);
    }, previousSibling: function (a) {
      return E.previousSibling.get.call(a);
    }, nextSibling: function (a) {
      return E.nextSibling.get.call(a);
    }, childNodes: function (a) {
      return Array.prototype.slice.call(E.childNodes.get.call(a));
    }, parentElement: function (a) {
      return E.parentElement.get.call(a);
    }, previousElementSibling: function (a) {
      return E.previousElementSibling.get.call(a);
    }, nextElementSibling: function (a) {
      return E.nextElementSibling.get.call(a);
    },
    innerHTML: function (a) {
      return E.innerHTML.get.call(a);
    }, textContent: function (a) {
      return E.textContent.get.call(a);
    }, children: function (a) {
      switch (a.nodeType) {case Node.DOCUMENT_FRAGMENT_NODE:
          return nb.children.get.call(a);case Node.DOCUMENT_NODE:
          return ob.children.get.call(a);default:
          return E.children.get.call(a);}
    }, firstElementChild: function (a) {
      switch (a.nodeType) {case Node.DOCUMENT_FRAGMENT_NODE:
          return nb.firstElementChild.get.call(a);case Node.DOCUMENT_NODE:
          return ob.firstElementChild.get.call(a);default:
          return E.firstElementChild.get.call(a);}
    },
    lastElementChild: function (a) {
      switch (a.nodeType) {case Node.DOCUMENT_FRAGMENT_NODE:
          return nb.lastElementChild.get.call(a);case Node.DOCUMENT_NODE:
          return ob.lastElementChild.get.call(a);default:
          return E.lastElementChild.get.call(a);}
    } };var F = v.fa ? pb : C;function qb(a) {
    for (; a.firstChild;) a.removeChild(a.firstChild);
  }
  var rb = v.o,
      sb = document.implementation.createHTMLDocument("inert"),
      tb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      ub = tb && tb.get,
      vb = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"),
      wb = { parentElement: { get: function () {
        var a = t(this);(a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : F.parentElement(this);
      }, configurable: !0 }, parentNode: { get: function () {
        var a = t(this);a = a && a.parentNode;return void 0 !== a ? a : F.parentNode(this);
      }, configurable: !0 },
    nextSibling: { get: function () {
        var a = t(this);a = a && a.nextSibling;return void 0 !== a ? a : F.nextSibling(this);
      }, configurable: !0 }, previousSibling: { get: function () {
        var a = t(this);a = a && a.previousSibling;return void 0 !== a ? a : F.previousSibling(this);
      }, configurable: !0 }, nextElementSibling: { get: function () {
        var a = t(this);if (a && void 0 !== a.nextSibling) {
          for (a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;return a;
        }return F.nextElementSibling(this);
      }, configurable: !0 }, previousElementSibling: { get: function () {
        var a = t(this);if (a && void 0 !== a.previousSibling) {
          for (a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;return a;
        }return F.previousElementSibling(this);
      }, configurable: !0 } },
      xb = { className: { get: function () {
        return this.getAttribute("class") || "";
      }, set: function (a) {
        this.setAttribute("class", a);
      }, configurable: !0 } },
      yb = { childNodes: { get: function () {
        if (w(this)) {
          var a = t(this);if (!a.childNodes) {
            a.childNodes = [];for (var b = this.firstChild; b; b = b.nextSibling) a.childNodes.push(b);
          }var c = a.childNodes;
        } else c = F.childNodes(this);c.item = function (a) {
          return c[a];
        };return c;
      }, configurable: !0 }, childElementCount: { get: function () {
        return this.children.length;
      }, configurable: !0 }, firstChild: { get: function () {
        var a = t(this);a = a && a.firstChild;return void 0 !== a ? a : F.firstChild(this);
      }, configurable: !0 }, lastChild: { get: function () {
        var a = t(this);a = a && a.lastChild;return void 0 !== a ? a : F.lastChild(this);
      }, configurable: !0 }, textContent: { get: function () {
        if (w(this)) {
          for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);return a.join("");
        }return F.textContent(this);
      }, set: function (a) {
        if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
            if (!w(this) && rb) {
              var b = this.firstChild;(b != this.lastChild || b && b.nodeType != Node.TEXT_NODE) && qb(this);pb.ca.textContent.set.call(this, a);
            } else qb(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.appendChild(document.createTextNode(a));break;default:
            this.nodeValue = a;}
      }, configurable: !0 }, firstElementChild: { get: function () {
        var a = t(this);if (a && void 0 !== a.firstChild) {
          for (a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;return a;
        }return F.firstElementChild(this);
      }, configurable: !0 }, lastElementChild: { get: function () {
        var a = t(this);if (a && void 0 !== a.lastChild) {
          for (a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;return a;
        }return F.lastElementChild(this);
      }, configurable: !0 }, children: { get: function () {
        return w(this) ? za(Array.prototype.filter.call(this.childNodes, function (a) {
          return a.nodeType === Node.ELEMENT_NODE;
        })) : F.children(this);
      }, configurable: !0 }, innerHTML: { get: function () {
        return w(this) ? jb("template" === this.localName ? this.content : this) : F.innerHTML(this);
      }, set: function (a) {
        var b = "template" === this.localName ? this.content : this;qb(b);var c = this.localName || "div";c = this.namespaceURI && this.namespaceURI !== sb.namespaceURI ? sb.createElementNS(this.namespaceURI, c) : sb.createElement(c);rb ? pb.ca.innerHTML.set.call(c, a) : c.innerHTML = a;for (a = "template" === this.localName ? c.content : c; a.firstChild;) b.appendChild(a.firstChild);
      }, configurable: !0 } },
      zb = { shadowRoot: { get: function () {
        var a = t(this);return a && a.da || null;
      }, configurable: !0 } },
      Ab = { activeElement: { get: function () {
        var a = vb && vb.get ? vb.get.call(document) : v.o ? void 0 : document.activeElement;if (a && a.nodeType) {
          var b = !!x(this);if (this === document || b && this.host !== a && z.contains.call(this.host, a)) {
            for (b = oa(a); b && b !== this;) a = b.host, b = oa(a);a = this === document ? b ? null : a : b === this ? a : null;
          } else a = null;
        } else a = null;return a;
      }, set: function () {}, configurable: !0 } };
  function G(a, b, c) {
    for (var d in b) {
      var e = Object.getOwnPropertyDescriptor(a, d);e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a);
    }
  }function H(a) {
    G(a, wb);G(a, xb);G(a, yb);G(a, Ab);
  }
  function Bb() {
    var a = Cb.prototype;a.__proto__ = DocumentFragment.prototype;G(a, wb, !0);G(a, yb, !0);G(a, Ab, !0);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  }var Db = v.o ? function () {} : function (a) {
    var b = r(a);b.$ || (b.$ = !0, G(a, wb, !0), G(a, xb, !0));
  },
      Eb = v.o ? function () {} : function (a) {
    r(a).ha || (G(a, yb, !0), G(a, zb, !0));
  };var Fb = F.childNodes;function Gb(a, b, c) {
    Eb(b);var d = r(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      d = a.childNodes;for (var e = 0; e < d.length; e++) Hb(d[e], b, c);a = r(a);b = void 0 !== a.firstChild ? null : void 0;a.firstChild = a.lastChild = b;a.childNodes = b;
    } else Hb(a, b, c);
  }
  function Hb(a, b, c) {
    Db(a);c = c || null;var d = r(a),
        e = r(b),
        f = c ? r(c) : null;d.previousSibling = c ? f.previousSibling : b.lastChild;if (f = t(d.previousSibling)) f.nextSibling = a;if (f = t(d.nextSibling = c)) f.previousSibling = a;d.parentNode = b;c ? c === e.firstChild && (e.firstChild = a) : (e.lastChild = a, e.firstChild || (e.firstChild = a));e.childNodes = null;
  }
  function Ib(a, b) {
    var c = r(a);b = r(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (r(a).nextSibling = d);d && (r(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function Jb(a) {
    var b = r(a);if (void 0 === b.firstChild) {
      b.childNodes = null;var c = Fb(a);b.firstChild = c[0] || null;b.lastChild = c[c.length - 1] || null;Eb(a);for (b = 0; b < c.length; b++) {
        var d = c[b],
            e = r(d);e.parentNode = a;e.nextSibling = c[b + 1] || null;e.previousSibling = c[b - 1] || null;Db(d);
      }
    }
  };var Kb = F.parentNode;
  function Lb(a, b, c) {
    if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if (c) {
      var d = t(c);d = d && d.parentNode;if (void 0 !== d && d !== a || void 0 === d && Kb(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
    }if (c === b) return b;var e = [],
        f = Mb,
        h = oa(a),
        g = h ? h.host.localName : "";if (b.parentNode) {
      var k = Nb(b);Ob(b.parentNode, b, !!h || !(b.getRootNode() instanceof ShadowRoot));
      f = function (a, b) {
        I() && (Pb(a, k), Mb(a, b));
      };
    }d = !0;var l = !Qb(b, g);!h || b.__noInsertionPoint && !l || Rb(b, function (a) {
      "slot" === a.localName && e.push(a);l && f(a, g);
    });e.length && Sb(h, e);("slot" === a.localName || e.length) && h && J(h);w(a) && (Gb(b, a, c), h = t(a), Tb(a) ? (J(h.root), d = !1) : h.root && (d = !1));d ? (d = x(a) ? a.host : a, c ? (c = Ub(c), z.insertBefore.call(d, b, c)) : z.appendChild.call(d, b)) : b.ownerDocument !== a.ownerDocument && a.ownerDocument.adoptNode(b);Vb(a, b);return b;
  }
  function Ob(a, b, c) {
    c = void 0 === c ? !1 : c;if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b);var d = oa(b),
        e = t(a);if (w(a) && (Ib(b, a), Tb(a))) {
      J(e.root);var f = !0;
    }if (I() && !c && d) {
      var h = Nb(b);Rb(b, function (a) {
        Pb(a, h);
      });
    }Wb(b);if (d) {
      var g = a && "slot" === a.localName;g && (f = !0);((c = Xb(d, b)) || g) && J(d);
    }f || (f = x(a) ? a.host : a, (!e.root && "slot" !== b.localName || f === Kb(b)) && z.removeChild.call(f, b));Vb(a, null, b);return b;
  }
  function Wb(a) {
    var b = t(a);if (b && void 0 !== b.D) {
      b = a.childNodes;for (var c = 0, d = b.length, e = void 0; c < d && (e = b[c]); c++) Wb(e);
    }if (a = t(a)) a.D = void 0;
  }function Ub(a) {
    var b = a;a && "slot" === a.localName && (b = (b = (b = t(a)) && b.v) && b.length ? b[0] : Ub(a.nextSibling));return b;
  }function Tb(a) {
    return (a = (a = t(a)) && a.root) && Yb(a);
  }
  function Zb(a, b) {
    if ("slot" === b) a = a.parentNode, Tb(a) && J(t(a).root);else if ("slot" === a.localName && "name" === b && (b = oa(a))) {
      if (b.f) {
        $b(b);var c = a.ka,
            d = ac(a);if (d !== c) {
          c = b.g[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.g[d] || (b.g[d] = []);c.push(a);1 < c.length && (b.g[d] = bc(c));
        }
      }J(b);
    }
  }function Vb(a, b, c) {
    if (a = (a = t(a)) && a.A) b && a.addedNodes.push(b), c && a.removedNodes.push(c), Ga(a);
  }
  function cc(a) {
    if (a && a.nodeType) {
      var b = r(a),
          c = b.D;void 0 === c && (x(a) ? (c = a, b.D = c) : (c = (c = a.parentNode) ? cc(c) : a, z.contains.call(document.documentElement, a) && (b.D = c)));return c;
    }
  }function dc(a, b, c) {
    var d = [];ec(a.childNodes, b, c, d);return d;
  }function ec(a, b, c, d) {
    for (var e = 0, f = a.length, h = void 0; e < f && (h = a[e]); e++) {
      var g;if (g = h.nodeType === Node.ELEMENT_NODE) {
        g = h;var k = b,
            l = c,
            p = d,
            u = k(g);u && p.push(g);l && l(u) ? g = u : (ec(g.childNodes, k, l, p), g = void 0);
      }if (g) break;
    }
  }var fc = null;
  function I() {
    fc || (fc = window.ShadyCSS && window.ShadyCSS.ScopingShim);return fc || null;
  }function gc(a, b, c) {
    var d = I();d && "class" === b ? d.setElementClass(a, c) : (z.setAttribute.call(a, b, c), Zb(a, b));
  }function hc(a, b) {
    if (a.ownerDocument !== document || "template" === a.localName) return z.importNode.call(document, a, b);var c = z.importNode.call(document, a, !1);if (b) {
      a = a.childNodes;b = 0;for (var d; b < a.length; b++) d = hc(a[b], !0), c.appendChild(d);
    }return c;
  }function Mb(a, b) {
    var c = I();c && c.scopeNode(a, b);
  }
  function Pb(a, b) {
    var c = I();c && c.unscopeNode(a, b);
  }function Qb(a, b) {
    var c = I();if (!c) return !0;if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;for (var d = 0; c && d < a.childNodes.length; d++) c = c && Qb(a.childNodes[d], b);return c;
    }return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }function Nb(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";var b = I();return b ? b.currentScopeForNode(a) : "";
  }
  function Rb(a, b) {
    if (a) {
      a.nodeType === Node.ELEMENT_NODE && b(a);for (var c = 0, d; c < a.childNodes.length; c++) d = a.childNodes[c], d.nodeType === Node.ELEMENT_NODE && Rb(d, b);
    }
  };var ic = "__eventWrappers" + Date.now(),
      jc = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");return a ? function (b) {
      return a.get.call(b);
    } : null;
  }(),
      kc = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0,
    pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0, drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
      lc = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };
  function mc(a, b) {
    var c = [],
        d = a;for (a = a === window ? window : a.getRootNode(); d;) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;c[c.length - 1] === document && c.push(window);return c;
  }function nc(a, b) {
    if (!x) return a;a = mc(a, !0);for (var c = 0, d, e = void 0, f, h = void 0; c < b.length; c++) if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (h = a.indexOf(f), e = f), !x(f) || -1 < h) return d;
  }
  var oc = { get composed() {
      void 0 === this.H && (jc ? this.H = "focusin" === this.type || "focusout" === this.type || jc(this) : !1 !== this.isTrusted && (this.H = kc[this.type]));return this.H || !1;
    }, composedPath: function () {
      this.Z || (this.Z = mc(this.__target, this.composed));return this.Z;
    }, get target() {
      return nc(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    }, get relatedTarget() {
      if (!this.T) return null;this.aa || (this.aa = mc(this.T, !0));return nc(this.currentTarget || this.__previousCurrentTarget, this.aa);
    }, stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);
      this.S = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.S = this.ga = !0;
    } };function pc(a) {
    function b(b, d) {
      b = new a(b, d);b.H = d && !!d.composed;return b;
    }sa(b, a);b.prototype = a.prototype;return b;
  }var qc = { focus: !0, blur: !0 };function rc(a) {
    return a.__target !== a.target || a.T !== a.relatedTarget;
  }function sc(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!rc(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.ga); d++);
  }
  function tc(a) {
    var b = a.composedPath();Object.defineProperty(a, "currentTarget", { get: function () {
        return d;
      }, configurable: !0 });for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c];sc(a, d, "capture");if (a.S) return;
    }Object.defineProperty(a, "eventPhase", { get: function () {
        return Event.AT_TARGET;
      } });var e;for (c = 0; c < b.length; c++) {
      d = b[c];var f = t(d);f = f && f.root;if (0 === c || f && f === e) if (sc(a, d, "bubble"), d !== window && (e = d.getRootNode()), a.S) break;
    }
  }
  function uc(a, b, c, d, e, f) {
    for (var h = 0; h < a.length; h++) {
      var g = a[h],
          k = g.type,
          l = g.capture,
          p = g.once,
          u = g.passive;if (b === g.node && c === k && d === l && e === p && f === u) return h;
    }return -1;
  }
  function vc(a, b, c) {
    if (b) {
      var d = typeof b;if ("function" === d || "object" === d) if ("object" !== d || b.handleEvent && "function" === typeof b.handleEvent) {
        var e = this instanceof Window ? z.Ca : z.addEventListener;if (lc[a]) return e.call(this, a, b, c);if (c && "object" === typeof c) {
          var f = !!c.capture;var h = !!c.once;var g = !!c.passive;
        } else f = !!c, g = h = !1;var k = c && c.V || this,
            l = b[ic];if (l) {
          if (-1 < uc(l, k, a, f, h, g)) return;
        } else b[ic] = [];l = function (e) {
          h && this.removeEventListener(a, b, c);e.__target || wc(e);if (k !== this) {
            var f = Object.getOwnPropertyDescriptor(e, "currentTarget");Object.defineProperty(e, "currentTarget", { get: function () {
                return k;
              }, configurable: !0 });
          }e.__previousCurrentTarget = e.currentTarget;if (!x(k) || -1 != e.composedPath().indexOf(k)) if (e.composed || -1 < e.composedPath().indexOf(k)) if (rc(e) && e.target === e.relatedTarget) e.eventPhase === Event.BUBBLING_PHASE && e.stopImmediatePropagation();else if (e.eventPhase === Event.CAPTURING_PHASE || e.bubbles || e.target === k || k instanceof Window) {
            var g = "function" === d ? b.call(k, e) : b.handleEvent && b.handleEvent(e);k !== this && (f ? (Object.defineProperty(e, "currentTarget", f), f = null) : delete e.currentTarget);return g;
          }
        };b[ic].push({ node: k, type: a, capture: f, once: h, passive: g, Ea: l });qc[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][f ? "capture" : "bubble"].push(l)) : e.call(this, a, l, c);
      }
    }
  }
  function xc(a, b, c) {
    if (b) {
      var d = this instanceof Window ? z.Da : z.removeEventListener;if (lc[a]) return d.call(this, a, b, c);if (c && "object" === typeof c) {
        var e = !!c.capture;var f = !!c.once;var h = !!c.passive;
      } else e = !!c, h = f = !1;var g = c && c.V || this,
          k = void 0;var l = null;try {
        l = b[ic];
      } catch (p) {}l && (f = uc(l, g, a, e, f, h), -1 < f && (k = l.splice(f, 1)[0].Ea, l.length || (b[ic] = void 0)));d.call(this, a, k || b, c);k && qc[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][e ? "capture" : "bubble"], k = a.indexOf(k), -1 < k && a.splice(k, 1));
    }
  }
  function yc() {
    for (var a in qc) window.addEventListener(a, function (a) {
      a.__target || (wc(a), tc(a));
    }, !0);
  }function wc(a) {
    a.__target = a.target;a.T = a.relatedTarget;if (v.o) {
      var b = Object.getPrototypeOf(a);if (!b.hasOwnProperty("__patchProto")) {
        var c = Object.create(b);c.Fa = b;qa(c, oc);b.__patchProto = c;
      }a.__proto__ = b.__patchProto;
    } else qa(a, oc);
  }var zc = pc(window.Event),
      Ac = pc(window.CustomEvent),
      Bc = pc(window.MouseEvent);
  function Cc() {
    window.Event = zc;window.CustomEvent = Ac;window.MouseEvent = Bc;yc();if (!jc && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var a = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });this.dispatchEvent(a);
      };Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  };function Dc(a, b) {
    return { index: a, F: [], L: b };
  }
  function Ec(a, b, c, d) {
    var e = 0,
        f = 0,
        h = 0,
        g = 0,
        k = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (h = 0; h < k; h++) if (a[h] !== c[h]) break a;h = k;
    }if (b == a.length && d == c.length) {
      g = a.length;for (var l = c.length, p = 0; p < k - h && Fc(a[--g], c[--l]);) p++;g = p;
    }e += h;f += h;b -= g;d -= g;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Dc(e, 0); f < d;) b.F.push(c[f++]);return [b];
    }if (f == d) return [Dc(e, b - e)];k = e;h = f;d = d - h + 1;g = b - k + 1;b = Array(d);for (l = 0; l < d; l++) b[l] = Array(g), b[l][0] = l;for (l = 0; l < g; l++) b[0][l] = l;for (l = 1; l < d; l++) for (p = 1; p < g; p++) if (a[k + p - 1] === c[h + l - 1]) b[l][p] = b[l - 1][p - 1];else {
      var u = b[l - 1][p] + 1,
          ca = b[l][p - 1] + 1;b[l][p] = u < ca ? u : ca;
    }k = b.length - 1;h = b[0].length - 1;d = b[k][h];for (a = []; 0 < k || 0 < h;) 0 == k ? (a.push(2), h--) : 0 == h ? (a.push(3), k--) : (g = b[k - 1][h - 1], l = b[k - 1][h], p = b[k][h - 1], u = l < p ? l < g ? l : g : p < g ? p : g, u == g ? (g == d ? a.push(0) : (a.push(1), d = g), k--, h--) : u == l ? (a.push(3), k--, d = l) : (a.push(2), h--, d = p));a.reverse();b = void 0;k = [];for (h = 0; h < a.length; h++) switch (a[h]) {case 0:
        b && (k.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Dc(e, 0));b.L++;e++;b.F.push(c[f]);f++;break;case 2:
        b || (b = Dc(e, 0));b.L++;e++;break;case 3:
        b || (b = Dc(e, 0)), b.F.push(c[f]), f++;}b && k.push(b);return k;
  }function Fc(a, b) {
    return a === b;
  };var Gc = F.parentNode,
      Hc = F.childNodes,
      Ic = {},
      K = v.deferConnectionCallbacks && "loading" === document.readyState,
      Jc;function Kc(a) {
    var b = [];do b.unshift(a); while (a = a.parentNode);return b;
  }
  function Cb(a, b, c) {
    if (a !== Ic) throw new TypeError("Illegal constructor");this.ma = "ShadyRoot";this.host = b;this.c = c && c.mode;Jb(b);a = r(b);a.root = this;a.da = "closed" !== this.c ? this : null;a = r(this);a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;a.childNodes = [];this.b = this.K = !1;this.a = this.g = this.f = null;J(this);
  }function J(a) {
    a.K || (a.K = !0, Ca(function () {
      return Lc(a);
    }));
  }
  function Lc(a) {
    for (var b; a;) {
      a.K && (b = a);a: {
        var c = a;a = c.host.getRootNode();if (x(a)) for (var d = c.host.childNodes, e = 0; e < d.length; e++) if (c = d[e], "slot" == c.localName) break a;a = void 0;
      }
    }b && b._renderRoot();
  }
  Cb.prototype._renderRoot = function () {
    var a = K;K = !0;this.K = !1;if (this.f) {
      $b(this);for (var b = 0, c; b < this.f.length; b++) {
        c = this.f[b];var d = t(c),
            e = d.assignedNodes;d.assignedNodes = [];d.v = [];if (d.W = e) for (d = 0; d < e.length; d++) {
          var f = t(e[d]);f.J = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.firstChild; b; b = b.nextSibling) Mc(this, b);for (b = 0; b < this.f.length; b++) {
        c = this.f[b];e = t(c);if (!e.assignedNodes.length) for (d = c.firstChild; d; d = d.nextSibling) Mc(this, d, c);(d = (d = t(c.parentNode)) && d.root) && Yb(d) && d._renderRoot();Nc(this, e.v, e.assignedNodes);if (d = e.W) {
          for (f = 0; f < d.length; f++) t(d[f]).J = null;e.W = null;d.length > e.assignedNodes.length && (e.O = !0);
        }e.O && (e.O = !1, Oc(this, c));
      }c = this.f;b = [];for (e = 0; e < c.length; e++) d = c[e].parentNode, (f = t(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];f = f.childNodes;for (var h = 0; h < f.length; h++) {
          var g = f[h];if ("slot" == g.localName) {
            g = t(g).v;for (var k = 0; k < g.length; k++) d.push(g[k]);
          } else d.push(g);
        }f = Hc(e);h = Ec(d, d.length, f, f.length);k = g = 0;for (var l = void 0; g < h.length && (l = h[g]); g++) {
          for (var p = 0, u = void 0; p < l.F.length && (u = l.F[p]); p++) Gc(u) === e && z.removeChild.call(e, u), f.splice(l.index + k, 1);k -= l.L;
        }k = 0;for (l = void 0; k < h.length && (l = h[k]); k++) for (g = f[l.index], p = l.index; p < l.index + l.L; p++) u = d[p], z.insertBefore.call(e, u, g), f.splice(p, 0, u);
      }
    }if (!this.b) for (b = this.host.childNodes, c = 0, e = b.length; c < e; c++) d = b[c], f = t(d), Gc(d) !== this.host || "slot" !== d.localName && f.assignedSlot || z.removeChild.call(this.host, d);this.b = !0;K = a;Jc && Jc();
  };
  function Mc(a, b, c) {
    var d = r(b),
        e = d.J;d.J = null;c || (c = (a = a.g[b.slot || "__catchall"]) && a[0]);c ? (r(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (r(d.assignedSlot).O = !0);
  }function Nc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = t(e).assignedNodes;f && f.length && Nc(a, b, f);
    } else b.push(c[d]);
  }function Oc(a, b) {
    z.dispatchEvent.call(b, new Event("slotchange"));b = t(b);b.assignedSlot && Oc(a, b.assignedSlot);
  }
  function Sb(a, b) {
    a.a = a.a || [];a.f = a.f || [];a.g = a.g || {};a.a.push.apply(a.a, b instanceof Array ? b : ja(q(b)));
  }function $b(a) {
    if (a.a && a.a.length) {
      for (var b = a.a, c, d = 0; d < b.length; d++) {
        var e = b[d];Jb(e);Jb(e.parentNode);var f = ac(e);a.g[f] ? (c = c || {}, c[f] = !0, a.g[f].push(e)) : a.g[f] = [e];a.f.push(e);
      }if (c) for (var h in c) a.g[h] = bc(a.g[h]);a.a = [];
    }
  }function ac(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.ka = b;
  }
  function bc(a) {
    return a.sort(function (a, c) {
      a = Kc(a);for (var b = Kc(c), e = 0; e < a.length; e++) {
        c = a[e];var f = b[e];if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f);
      }
    });
  }function Xb(a, b) {
    if (a.f) {
      $b(a);var c = a.g,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var h = e[f];if (ya(b, h)) {
          e.splice(f, 1);var g = a.f.indexOf(h);0 <= g && a.f.splice(g, 1);f--;h = t(h);if (g = h.v) for (var k = 0; k < g.length; k++) {
            var l = g[k],
                p = Gc(l);p && z.removeChild.call(p, l);
          }h.v = [];h.assignedNodes = [];g = !0;
        }
      }return g;
    }
  }
  function Yb(a) {
    $b(a);return !(!a.f || !a.f.length);
  }
  if (window.customElements && v.X) {
    var Pc = new Map();Jc = function () {
      var a = Array.from(Pc);Pc.clear();a = q(a);for (var b = a.next(); !b.done; b = a.next()) {
        b = q(b.value);var c = b.next().value;b.next().value ? c.ia() : c.ja();
      }
    };K && document.addEventListener("readystatechange", function () {
      K = !1;Jc();
    }, { once: !0 });var Qc = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.ia = function () {
        K ? Pc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.ja = function () {
        K ? this.isConnected || Pc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        define = window.customElements.define;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: function (a, b) {
        var c = b.prototype.connectedCallback,
            d = b.prototype.disconnectedCallback;define.call(window.customElements, a, Qc(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
      } });
  };function Rc(a) {
    var b = a.getRootNode();x(b) && Lc(b);return (a = t(a)) && a.assignedSlot || null;
  }
  var Sc = { addEventListener: vc.bind(window), removeEventListener: xc.bind(window) },
      Tc = { addEventListener: vc, removeEventListener: xc, appendChild: function (a) {
      return Lb(this, a);
    }, insertBefore: function (a, b) {
      return Lb(this, a, b);
    }, removeChild: function (a) {
      return Ob(this, a);
    }, replaceChild: function (a, b) {
      Lb(this, a, b);Ob(this, b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) var b = z.cloneNode.call(this, a);else if (b = z.cloneNode.call(this, !1), a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.childNodes;for (var c = 0, d; c < a.length; c++) d = a[c].cloneNode(!0), b.appendChild(d);
      }return b;
    }, getRootNode: function () {
      return cc(this);
    }, contains: function (a) {
      return ya(this, a);
    }, dispatchEvent: function (a) {
      Ea();return z.dispatchEvent.call(this, a);
    } };
  Object.defineProperties(Tc, { isConnected: { get: function () {
        if (ub && ub.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;var a = this.ownerDocument;if (xa) {
          if (z.contains.call(a, this)) return !0;
        } else if (a.documentElement && z.contains.call(a.documentElement, this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.parentNode || (x(a) ? a.host : void 0);return !!(a && a instanceof Document);
      }, configurable: !0 } });
  var Uc = { get assignedSlot() {
      return Rc(this);
    } },
      Vc = { querySelector: function (a) {
      return dc(this, function (b) {
        return pa.call(b, a);
      }, function (a) {
        return !!a;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(z.querySelectorAll.call(this, a));var c = this.getRootNode();return b.filter(function (a) {
          return a.getRootNode() == c;
        });
      }return dc(this, function (b) {
        return pa.call(b, a);
      });
    } },
      Wc = { assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.getRootNode();x(b) && Lc(b);return (b = t(this)) ? (a && a.flatten ? b.v : b.assignedNodes) || [] : [];
      }
    } },
      Xc = ra({ setAttribute: function (a, b) {
      gc(this, a, b);
    }, removeAttribute: function (a) {
      z.removeAttribute.call(this, a);Zb(this, a);
    }, attachShadow: function (a) {
      if (!this) throw "Must provide a host.";if (!a) throw "Not enough arguments.";return new Cb(Ic, this, a);
    }, get slot() {
      return this.getAttribute("slot");
    }, set slot(a) {
      gc(this, "slot", a);
    }, get assignedSlot() {
      return Rc(this);
    } }, Vc, Wc);Object.defineProperties(Xc, zb);
  var Yc = ra({ importNode: function (a, b) {
      return hc(a, b);
    }, getElementById: function (a) {
      return dc(this, function (b) {
        return b.id == a;
      }, function (a) {
        return !!a;
      })[0] || null;
    } }, Vc);Object.defineProperties(Yc, { _activeElement: Ab.activeElement });
  for (var Zc = HTMLElement.prototype.blur, $c = { blur: function () {
      var a = t(this);(a = (a = a && a.root) && a.activeElement) ? a.blur() : Zc.call(this);
    } }, L = {}, ad = q(Object.getOwnPropertyNames(Document.prototype)), bd = ad.next(); !bd.done; L = { l: L.l }, bd = ad.next()) L.l = bd.value, "on" === L.l.substring(0, 2) && Object.defineProperty($c, L.l, { set: function (a) {
      return function (b) {
        var c = r(this),
            d = a.l.substring(2);c.I[a.l] && this.removeEventListener(d, c.I[a.l]);this.addEventListener(d, b, {});c.I[a.l] = b;
      };
    }(L), get: function (a) {
      return function () {
        var b = t(this);return b && b.I[a.l];
      };
    }(L), configurable: !0 });var cd = { addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.V = this;this.host.addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.V = this;this.host.removeEventListener(a, b, c);
    }, getElementById: function (a) {
      return dc(this, function (b) {
        return b.id == a;
      }, function (a) {
        return !!a;
      })[0] || null;
    } };
  function M(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
      var e = c[d],
          f = Object.getOwnPropertyDescriptor(b, e);f.value ? a[e] = f.value : Object.defineProperty(a, e, f);
    }
  };if (v.X) {
    var ShadyDOM = { inUse: v.X, patch: function (a) {
        Eb(a);Db(a);return a;
      }, isShadyRoot: x, enqueue: Ca, flush: Ea, settings: v, filterMutations: Ja, observeChildren: Ha, unobserveChildren: Ia, nativeMethods: z, nativeTree: F, deferConnectionCallbacks: v.deferConnectionCallbacks, handlesDynamicScoping: !0 };window.ShadyDOM = ShadyDOM;Cc();var dd = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;M(Cb.prototype, cd);M(window.Node.prototype, Tc);M(window.Window.prototype, Sc);M(window.Text.prototype, Uc);
    M(window.DocumentFragment.prototype, Vc);M(window.Element.prototype, Xc);M(window.Document.prototype, Yc);window.HTMLSlotElement && M(window.HTMLSlotElement.prototype, Wc);M(dd.prototype, $c);v.o && (H(window.Node.prototype), H(window.Text.prototype), H(window.DocumentFragment.prototype), H(window.Element.prototype), H(dd.prototype), H(window.Document.prototype), window.HTMLSlotElement && H(window.HTMLSlotElement.prototype));Bb();window.ShadowRoot = Cb;
  }; /*
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
  function ed() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function fd(a) {
    a = a.replace(gd, "").replace(hd, "");var b = id,
        c = a,
        d = new ed();d.start = 0;d.end = c.length;for (var e = d, f = 0, h = c.length; f < h; f++) if ("{" === c[f]) {
      e.rules || (e.rules = []);var g = e,
          k = g.rules[g.rules.length - 1] || null;e = new ed();e.start = f + 1;e.parent = g;e.previous = k;g.rules.push(e);
    } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);return b(d, a);
  }
  function id(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = jd(c), c = c.replace(kd, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = ld : c.match(md) && (a.type = nd, a.keyframesName = a.selector.split(kd).pop()) : a.type = 0 === c.indexOf("--") ? od : pd);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) id(f, b);return a;
  }function jd(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
      a = c;for (c = 6 - a.length; c--;) a = "0" + a;return "\\" + a;
    });
  }
  function qd(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var h = e.length, g = void 0; f < h && (g = e[f]); f++) d = qd(g, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(rd, "").replace(sd, ""), b = b.replace(td, "").replace(ud, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var pd = 1,
      nd = 7,
      ld = 4,
      od = 1E3,
      gd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      hd = /@import[^;]*;/gim,
      rd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      sd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      td = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      ud = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      md = /^@[^\s]*keyframes/,
      kd = /\s+/g;var N = !(window.ShadyDOM && window.ShadyDOM.inUse),
      vd;function wd(a) {
    vd = a && a.shimcssproperties ? !1 : N || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? vd = window.ShadyCSS.nativeCss : window.ShadyCSS ? (wd(window.ShadyCSS), window.ShadyCSS = void 0) : wd(window.WebComponents && window.WebComponents.flags);var O = vd;var xd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      yd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      zd = /(--[\w-]+)\s*([:,;)]|$)/gi,
      Ad = /(animation\s*:)|(animation-name\s*:)/,
      Bd = /@media\s(.*)/,
      Cd = /\{[^}]*\}/g;var Dd = new Set();function P(a, b) {
    if (!a) return "";"string" === typeof a && (a = fd(a));b && Q(a, b);return qd(a, O);
  }function Ed(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = fd(a.textContent));return a.__cssRules || null;
  }function Fd(a) {
    return !!a.parent && a.parent.type === nd;
  }function Q(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === ld) {
        var h = a.selector.match(Bd);h && (window.matchMedia(h[1]).matches || (e = !0));
      }f === pd ? b(a) : c && f === nd ? c(a) : f === od && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, h = void 0; e < f && (h = a[e]); e++) Q(h, b, c, d);
    }
  }
  function Gd(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Hd(e, c, d);return e;
  }var R = null;function Id(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (R ? R.nextSibling : null) || b.firstChild);return R = a;
  }function Hd(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);R ? a.compareDocumentPosition(R) === Node.DOCUMENT_POSITION_PRECEDING && (R = a) : R = a;
  }
  function Jd(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function Kd(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = Jd(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = Kd(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function Ld(a, b) {
    N ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  function S(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, G: c };
  }function Md(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Jd(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function T(a) {
    if (void 0 === a.a) {
      var b = a.getAttribute("css-build");if (b) a.a = b;else {
        a: {
          b = "template" === a.localName ? a.content.firstChild : a.firstChild;if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
            b = b[1];break a;
          }b = "";
        }if ("" !== b) {
          var c = "template" === a.localName ? a.content.firstChild : a.firstChild;c.parentNode.removeChild(c);
        }a.a = b;
      }
    }return a.a || "";
  };function Nd() {}function Od(a, b) {
    Pd(U, a, function (a) {
      V(a, b || "");
    });
  }function Pd(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);if (b = "template" === b.localName ? (b.content || b.Ga || b).childNodes : b.children || b.childNodes) for (var d = 0; d < b.length; d++) Pd(a, b[d], c);
  }
  function V(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute(Qd);c ? d && (b = d.replace("style-scope", "").replace(b, ""), Ld(a, b)) : Ld(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function Rd(a, b, c) {
    Pd(U, a, function (a) {
      V(a, b, !0);V(a, c);
    });
  }function Sd(a, b) {
    Pd(U, a, function (a) {
      V(a, b || "", !0);
    });
  }
  function Td(a, b, c, d) {
    var e = U;N || "shady" === (void 0 === d ? "" : d) ? b = P(b, c) : (a = S(a), b = Ud(e, b, a.is, a.G, c) + "\n\n");return b.trim();
  }function Ud(a, b, c, d, e) {
    var f = Vd(c, d);c = c ? Wd + c : "";return P(b, function (b) {
      b.c || (b.selector = b.j = Xd(a, b, a.b, c, f), b.c = !0);e && e(b, c, f);
    });
  }function Vd(a, b) {
    return b ? "[is=" + a + "]" : a;
  }function Xd(a, b, c, d, e) {
    var f = Md(b.selector);if (!Fd(b)) {
      b = 0;for (var h = f.length, g = void 0; b < h && (g = f[b]); b++) f[b] = c.call(a, g, d, e);
    }return f.filter(function (a) {
      return !!a;
    }).join(Yd);
  }
  function Zd(a) {
    return a.replace($d, function (a, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }function ae(a) {
    for (var b = [], c; c = a.match(be);) {
      var d = c.index,
          e = Jd(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { Y: a, matches: b };
  }function ce(a, b) {
    var c = a.split("\ue000");return b.reduce(function (a, b, f) {
      return a + b + c[f + 1];
    }, c[0]);
  }
  Nd.prototype.b = function (a, b, c) {
    var d = !1;a = a.trim();var e = $d.test(a);e && (a = a.replace($d, function (a, b, c) {
      return ":" + b + "(" + c.replace(/\s/g, "") + ")";
    }), a = Zd(a));var f = be.test(a);if (f) {
      var h = ae(a);a = h.Y;h = h.matches;
    }a = a.replace(de, ee + " $1");a = a.replace(fe, function (a, e, f) {
      d || (a = ge(f, e, b, c), d = d || a.stop, e = a.qa, f = a.value);return e + f;
    });f && (a = ce(a, h));e && (a = Zd(a));return a;
  };
  function ge(a, b, c, d) {
    var e = a.indexOf(he);0 <= a.indexOf(ee) ? a = ie(a, d) : 0 !== e && (a = c ? je(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(ke, function (a, b) {
        return " > " + b;
      }));
    }a = a.replace(le, function (a, b, c) {
      return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]';
    });return { value: a, qa: b, stop: f };
  }function je(a, b) {
    a = a.split(me);a[0] += b;return a.join(me);
  }
  function ie(a, b) {
    var c = a.match(ne);return (c = c && c[2].trim() || "") ? c[0].match(oe) ? a.replace(ne, function (a, c, f) {
      return b + f;
    }) : c.split(oe)[0] === b ? c : pe : a.replace(ee, b);
  }function qe(a) {
    a.selector === re && (a.selector = "html");
  }Nd.prototype.c = function (a) {
    return a.match(ee) ? "" : a.match(he) ? this.b(a, se) : je(a.trim(), se);
  };n.Object.defineProperties(Nd.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var $d = /:(nth[-\w]+)\(([^)]+)\)/,
      se = ":not(.style-scope)",
      Yd = ",",
      fe = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      oe = /[[.:#*]/,
      ee = ":host",
      re = ":root",
      he = "::slotted",
      de = new RegExp("^(" + he + ")"),
      ne = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      ke = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      le = /(.*):dir\((?:(ltr|rtl))\)/,
      Wd = ".",
      me = ":",
      Qd = "class",
      pe = "should_not_match",
      be = /:(?:matches|any|-(?:webkit|moz)-any)/,
      U = new Nd();function te(a, b, c, d, e) {
    this.u = a || null;this.b = b || null;this.c = c || [];this.B = null;this.N = e || "";this.G = d || "";this.a = this.m = this.w = null;
  }function W(a) {
    return a ? a.__styleInfo : null;
  }function ue(a, b) {
    return a.__styleInfo = b;
  }te.prototype.i = function () {
    return this.u;
  };te.prototype._getStyleRules = te.prototype.i;function ve(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var we = navigator.userAgent.match("Trident");function xe() {}function ye(a) {
    var b = {},
        c = [],
        d = 0;Q(a, function (a) {
      ze(a);a.index = d++;a = a.h.cssText;for (var c; c = zd.exec(a);) {
        var e = c[1];":" !== c[2] && (b[e] = !0);
      }
    }, function (a) {
      c.push(a);
    });a.b = c;a = [];for (var e in b) a.push(e);return a;
  }
  function ze(a) {
    if (!a.h) {
      var b = {},
          c = {};Ae(a, c) && (b.s = c, a.rules = null);b.cssText = a.parsedCssText.replace(Cd, "").replace(xd, "");a.h = b;
    }
  }function Ae(a, b) {
    var c = a.h;if (c) {
      if (c.s) return Object.assign(b, c.s), !0;
    } else {
      c = a.parsedCssText;for (var d; a = xd.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function Be(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? Ce(a, b, c) : Kd(b, function (b, e, f, h) {
      if (!e) return b + h;(e = Be(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = Be(a, c[f] || f, c) || f;return b + (e || "") + h;
    }));return b && b.trim() || "";
  }
  function Ce(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      yd.lastIndex = 0;if (f = yd.exec(e)) e = Be(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var h = e.substring(f);h = h.trim();h = Be(a, h, c) || h;e = e.substring(0, f) + h;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function De(a, b) {
    var c = {},
        d = [];Q(a, function (a) {
      a.h || ze(a);var e = a.j || a.parsedSelector;b && a.h.s && e && ve.call(b, e) && (Ae(a, c), a = a.index, e = parseInt(a / 32, 10), d[e] = (d[e] || 0) | 1 << a % 32);
    }, null, !0);return { s: c, key: d };
  }
  function Ee(a, b, c, d) {
    b.h || ze(b);if (b.h.s) {
      var e = S(a);a = e.is;e = e.G;e = a ? Vd(a, e) : "html";var f = b.parsedSelector,
          h = ":host > *" === f || "html" === f,
          g = 0 === f.indexOf(":host") && !h;"shady" === c && (h = f === e + " > *." + e || -1 !== f.indexOf("html"), g = !h && 0 === f.indexOf(e));if (h || g) c = e, g && (b.j || (b.j = Xd(U, b, U.b, a ? Wd + a : "", e)), c = b.j || e), d({ Y: c, va: g, Qa: h });
    }
  }function Fe(a, b, c) {
    var d = {},
        e = {};Q(b, function (b) {
      Ee(a, b, c, function (c) {
        ve.call(a.Pa || a, c.Y) && (c.va ? Ae(b, d) : Ae(b, e));
      });
    }, null, !0);return { wa: e, ua: d };
  }
  function Ge(a, b, c, d) {
    var e = S(b),
        f = Vd(e.is, e.G),
        h = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        g = W(b);e = g.u;g = g.N;var k = He(e, d);return Td(b, e, function (b) {
      var e = "";b.h || ze(b);b.h.cssText && (e = Ce(a, b.h.cssText, c));b.cssText = e;if (!N && !Fd(b) && b.cssText) {
        var g = e = b.cssText;null == b.ba && (b.ba = Ad.test(e));if (b.ba) if (null == b.R) {
          b.R = [];for (var l in k) g = k[l], g = g(e), e !== g && (e = g, b.R.push(l));
        } else {
          for (l = 0; l < b.R.length; ++l) g = k[b.R[l]], e = g(e);g = e;
        }b.cssText = g;b.j = b.j || b.selector;
        e = "." + d;l = Md(b.j);g = 0;for (var da = l.length, Da = void 0; g < da && (Da = l[g]); g++) l[g] = Da.match(h) ? Da.replace(f, e) : e + " " + Da;b.selector = l.join(",");
      }
    }, g);
  }function He(a, b) {
    a = a.b;var c = {};if (!N && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          h = b;f.i = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.a = f.keyframesName + "-" + h;f.j = f.j || f.selector;f.selector = f.j.replace(f.keyframesName, f.a);c[e.keyframesName] = Ie(e);
    }return c;
  }function Ie(a) {
    return function (b) {
      return b.replace(a.i, a.a);
    };
  }
  function Je(a, b) {
    var c = Ke,
        d = Ed(a);a.textContent = P(d, function (a) {
      var d = a.cssText = a.parsedCssText;a.h && a.h.cssText && (d = d.replace(rd, "").replace(sd, ""), a.cssText = Ce(c, d, b));
    });
  }n.Object.defineProperties(xe.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var Ke = new xe();var X = {},
      Le = window.customElements;if (Le && !N) {
    var Me = Le.define;Le.define = function (a, b, c) {
      X[a] || (X[a] = Id(a));Me.call(Le, a, b, c);
    };
  };function Ne() {
    this.cache = {};
  }Ne.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ s: b, styleElement: c, m: d });100 < e.length && e.shift();this.cache[a] = e;
  };Ne.prototype.fetch = function (a, b, c) {
    if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
      var e = a[d],
          f;a: {
        for (f = 0; f < c.length; f++) {
          var h = c[f];if (e.s[h] !== b[h]) {
            f = !1;break a;
          }
        }f = !0;
      }if (f) return e;
    }
  };function Oe() {}function Pe(a) {
    var b = [];a.classList ? b = Array.from(a.classList) : a instanceof window.SVGElement && a.hasAttribute("class") && (b = a.getAttribute("class").split(/\s+/));a = b;b = a.indexOf(U.a);return -1 < b ? a[b + 1] : "";
  }function Qe(a) {
    var b = a.getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? S(a).is : "";
  }
  function Re(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              h = Pe(e);if (h && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === T(e))) Sd(e, h);else if (f instanceof ShadowRoot) for (f = Qe(e), f !== h && Rd(e, h, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + U.a + ")"), h = 0; h < e.length; h++) {
            f = e[h];
            var g = Qe(f);g && V(f, g);
          }
        }
      }
    }
  }
  if (!(N || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Se = new MutationObserver(Re),
        Te = function (a) {
      Se.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Te(document);else {
      var Ue = function () {
        Te(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(Ue) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            Ue();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else Ue();
      });
    }Oe = function () {
      Re(Se.takeRecords());
    };
  }var Ve = Oe;var We = {};var Xe = Promise.resolve();function Ye(a) {
    if (a = We[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function Ze(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function $e(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a.c || (a.c = !0, Xe.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a.c = !1;
    }));
  };var af = new Ne();function Y() {
    this.P = {};this.c = document.documentElement;var a = new ed();a.rules = [];this.i = ue(this.c, new te(a));this.C = !1;this.b = this.a = null;
  }m = Y.prototype;m.flush = function () {
    Ve();
  };m.sa = function (a) {
    return Ed(a);
  };m.Aa = function (a) {
    return P(a);
  };m.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  m.prepareTemplateStyles = function (a, b, c) {
    if (!a.P) {
      N || X[b] || (X[b] = Id(b));a.P = !0;a.name = b;a.extends = c;We[b] = a;var d = T(a);var e = [];for (var f = a.content.querySelectorAll("style"), h = 0; h < f.length; h++) {
        var g = f[h];if (g.hasAttribute("shady-unscoped")) {
          if (!N) {
            var k = g.textContent;Dd.has(k) || (Dd.add(k), k = g.cloneNode(!0), document.head.appendChild(k));g.parentNode.removeChild(g);
          }
        } else e.push(g.textContent), g.parentNode.removeChild(g);
      }e = e.join("").trim();c = { is: b, extends: c };bf(this);if (f = "" === T(a)) f = yd.test(e) || xd.test(e), yd.lastIndex = 0, xd.lastIndex = 0;e = fd(e);f && O && this.a && this.a.transformRules(e, b);a._styleAst = e;e = [];O || (e = ye(a._styleAst));if (!e.length || O) f = N ? a.content : null, b = X[b] || null, d = Td(c, a._styleAst, null, d), d = d.length ? Gd(d, c.is, f, b) : void 0, a.b = d;a.C = e;
    }
  };m.prepareTemplateDom = function (a, b) {
    var c = T(a);N || "shady" === c || a.i || (a.i = !0, Od(a.content, b));
  };
  function cf(a) {
    !a.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.b = window.ShadyCSS.CustomStyleInterface, a.b.transformCallback = function (b) {
      a.ea(b);
    }, a.b.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.b.enqueued || a.C) && a.flushCustomStyles();
      });
    });
  }function bf(a) {
    !a.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.a = window.ShadyCSS.ApplyShim, a.a.invalidCallback = Ye);cf(a);
  }
  m.flushCustomStyles = function () {
    bf(this);if (this.b) {
      var a = this.b.processStyles();if (this.b.enqueued) {
        if (O) for (var b = 0; b < a.length; b++) {
          var c = this.b.getStyleForCustomStyle(a[b]);if (c && O && this.a) {
            var d = Ed(c);bf(this);this.a.transformRules(d);c.textContent = P(d);
          }
        } else for (df(this, this.c, this.i), b = 0; b < a.length; b++) (c = this.b.getStyleForCustomStyle(a[b])) && Je(c, this.i.w);this.b.enqueued = !1;this.C && !O && this.styleDocument();
      }
    }
  };
  m.styleElement = function (a, b) {
    var c = W(a);if (!c) {
      var d = S(a);c = d.is;d = d.G;var e = X[c] || null;c = We[c];if (c) {
        var f = c._styleAst;var h = c.C;var g = T(c);
      }f = new te(f, e, h, d, g);c && ue(a, f);c = f;
    }a !== this.c && (this.C = !0);b && (c.B = c.B || {}, Object.assign(c.B, b));if (O) {
      b = c;f = S(a).is;if (b.B) {
        h = b.B;for (var k in h) null === k ? a.style.removeProperty(k) : a.style.setProperty(k, h[k]);
      }if (!(!(k = We[f]) && a !== this.c || k && "" !== T(k)) && k && k.b && !Ze(k)) {
        if (Ze(k) || k._applyShimValidatingVersion !== k._applyShimNextVersion) bf(this), this.a && this.a.transformRules(k._styleAst, f), k.b.textContent = Td(a, b.u), $e(k);N && (f = a.shadowRoot) && (f = f.querySelector("style")) && (f.textContent = Td(a, b.u));b.u = k._styleAst;
      }
    } else if (k = c, this.flush(), df(this, a, k), k.c && k.c.length) {
      b = S(a).is;c = (f = af.fetch(b, k.w, k.c)) ? f.styleElement : null;h = k.m;(g = f && f.m) || (g = this.P[b] = (this.P[b] || 0) + 1, g = b + "-" + g);k.m = g;g = k.m;d = Ke;d = c ? c.textContent || "" : Ge(d, a, k.w, g);e = W(a);var l = e.a;l && !N && l !== c && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));N ? e.a ? (e.a.textContent = d, c = e.a) : d && (c = Gd(d, g, a.shadowRoot, e.b)) : c ? c.parentNode || (we && -1 < d.indexOf("@media") && (c.textContent = d), Hd(c, null, e.b)) : d && (c = Gd(d, g, null, e.b));c && (c._useCount = c._useCount || 0, e.a != c && c._useCount++, e.a = c);g = c;N || (c = k.m, e = d = a.getAttribute("class") || "", h && (e = d.replace(new RegExp("\\s*x-scope\\s*" + h + "\\s*", "g"), " ")), e += (e ? " " : "") + "x-scope " + c, d !== e && Ld(a, e));f || af.store(b, k.w, g, k.m);
    }
  };function ef(a, b) {
    return (b = b.getRootNode().host) ? W(b) ? b : ef(a, b) : a.c;
  }
  function df(a, b, c) {
    a = ef(a, b);var d = W(a);a = Object.create(d.w || null);var e = Fe(b, c.u, c.N);b = De(d.u, b).s;Object.assign(a, e.ua, b, e.wa);b = c.B;for (var f in b) if ((e = b[f]) || 0 === e) a[f] = e;f = Ke;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = Be(f, a[d], a);c.w = a;
  }m.styleDocument = function (a) {
    this.styleSubtree(this.c, a);
  };
  m.styleSubtree = function (a, b) {
    var c = a.shadowRoot;(c || a === this.c) && this.styleElement(a, b);if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) this.styleSubtree(b[a]);else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  m.ea = function (a) {
    var b = this,
        c = Ed(a),
        d = T(a);d !== this.i.N && (this.i.N = d);Q(c, function (a) {
      if (N) qe(a);else {
        var c = U;a.selector = a.parsedSelector;qe(a);a.selector = a.j = Xd(c, a, c.c, void 0, void 0);
      }O && "" === d && (bf(b), b.a && b.a.transformRule(a));
    });O ? a.textContent = P(c) : this.i.u.rules.push(c);
  };m.getComputedStyleValue = function (a, b) {
    var c;O || (c = (W(a) || W(ef(this, a))).w[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  m.za = function (a, b) {
    var c = a.getRootNode();b = b ? b.split(/\s/) : [];c = c.host && c.host.localName;if (!c) {
      var d = a.getAttribute("class");if (d) {
        d = d.split(/\s/);for (var e = 0; e < d.length; e++) if (d[e] === U.a) {
          c = d[e + 1];break;
        }
      }
    }c && b.push(U.a, c);O || (c = W(a)) && c.m && b.push(Ke.a, c.m);Ld(a, b.join(" "));
  };m.pa = function (a) {
    return W(a);
  };m.ya = function (a, b) {
    V(a, b);
  };m.Ba = function (a, b) {
    V(a, b, !0);
  };m.xa = function (a) {
    return Qe(a);
  };m.ra = function (a) {
    return Pe(a);
  };Y.prototype.flush = Y.prototype.flush;Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
  Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.za;Y.prototype._styleInfoForNode = Y.prototype.pa;Y.prototype.transformCustomStyleForDocument = Y.prototype.ea;Y.prototype.getStyleAst = Y.prototype.sa;Y.prototype.styleAstToString = Y.prototype.Aa;Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
  Y.prototype.scopeNode = Y.prototype.ya;Y.prototype.unscopeNode = Y.prototype.Ba;Y.prototype.scopeForNode = Y.prototype.xa;Y.prototype.currentScopeForNode = Y.prototype.ra;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return N;
      } }, nativeCss: { get: function () {
        return O;
      } } });var Z = new Y(),
      ff,
      gf;window.ShadyCSS && (ff = window.ShadyCSS.ApplyShim, gf = window.ShadyCSS.CustomStyleInterface);
  window.ShadyCSS = { ScopingShim: Z, prepareTemplate: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplate(a, b, c);
    }, prepareTemplateDom: function (a, b) {
      Z.prepareTemplateDom(a, b);
    }, prepareTemplateStyles: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplateStyles(a, b, c);
    }, styleSubtree: function (a, b) {
      Z.flushCustomStyles();Z.styleSubtree(a, b);
    }, styleElement: function (a) {
      Z.flushCustomStyles();Z.styleElement(a);
    }, styleDocument: function (a) {
      Z.flushCustomStyles();Z.styleDocument(a);
    }, flushCustomStyles: function () {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return Z.getComputedStyleValue(a, b);
    }, nativeCss: O, nativeShadow: N };ff && (window.ShadyCSS.ApplyShim = ff);gf && (window.ShadyCSS.CustomStyleInterface = gf);
}).call(this);

//# sourceMappingURL=webcomponents-sd.js.map