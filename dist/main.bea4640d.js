// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"main.js":[function(require,module,exports) {
var html = document.getElementById('html');
var style = document.getElementById('style');

var str = '/* Hello\uFF0C\u8FD9\u91CC\u662F\u6211\u7684JS\u5C0F\u7EC3\u4E60\u5C55\u793A\u9875\u9762\u3002\n* \u8FD9\u4E2A\u7EC3\u4E60\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u719F\u6089JS\u7684\u8FD0\u7528, \n* \u6211\u5C06\u4F1A\u5236\u4F5C\u4E00\u4E2A\u592A\u6781\u56FE\u6848\u5728\u672C\u9875\u9762\uFF0C\n* \u5E76\u4E14\u52A8\u6001\u7684\u5C55\u793A\u5236\u4F5C\u8FC7\u7A0B\u3002\n* \u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A div \u6765\u5B58\u653E\u56FE\u6848\uFF1A\n**/\n#container{\n  border: 1px solid red; \n  width: 300px;\n  height: 300px;\n}\n/* \u63A5\u4E0B\u6765\uFF0C\u628A\u8FD9\u4E2A div \u53D8\u6210\u5706\u5F62\u5E76\u6DFB\u52A0\u6837\u5F0F\uFF1A\n**/\n#container{\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.6);\n  border: none;\n}\n/* \u7136\u540E\u6211\u4EEC\u7528\u989C\u8272\u6E10\u53D8\u6765\u5B9E\u73B0\u9634\u9633\u7684\u9ED1\u767D\u4E24\u8272\uFF1A\n**/\n#container{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* \u901A\u8FC7\u6DFB\u52A0\u4E00\u9ED1\u4E00\u767D\u4E24\u4E2A\u5706\u5F62\u6765\u5B8C\u5584\u9634\u9633\u7684\u5F27\u5F62\u90E8\u5206,\n* \u7528\u989C\u8272\u6E10\u53D8\u505A\u51FA\u5706\u5F62\u4E2D\u95F4\u6709\u4E00\u4E2A\u76F8\u53CD\u989C\u8272\u5C0F\u5706\u7684\u6548\u679C\uFF1A\n**/\n#container::before {\n  content: "";\n  display: block;\n  height: 150px;\n  width: 150px;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n#container::after {\n  content: "";\n  display: block;\n  height: 150px;\n  width: 150px;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n/* \u641E\u5B9A\uFF0C\u6536\u5DE5\u3002\u672C\u6B21\u7EC3\u4E60\u5230\u6B64\u7ED3\u675F\uFF0C\u611F\u8C22\u6536\u770B\uFF01\n**/\n';
var i = 0;
var strSub = "";

var printContent = function printContent() {
  if (str[i] === "\n") {
    console.log('why');
    strSub += "<br>";
    console.log(strSub);
  } else if (str[i] === " ") {
    strSub += "&nbsp";
  } else {
    strSub += str[i];
  }
  // html.innerHTML = strSub;
  console.log(str[i]); //debug
  i += 1;
  if (i <= str.length) {
    setTimeout(function () {
      html.innerHTML = strSub;
      style.innerHTML = str.substring(0, i);
      printContent();
      window.scrollTo({
        top: 99999,
        behavior: "smooth"
      });
    }, 100);
  } else {
    return;
  }
};

printContent();
},{}],"../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49902' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.bea4640d.map