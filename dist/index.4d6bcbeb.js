// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3zq8u":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _dayjs = require("dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
var _utc = require("dayjs/plugin/utc");
var _utcDefault = parcelHelpers.interopDefault(_utc);
var _timezone = require("dayjs/plugin/timezone");
var _timezoneDefault = parcelHelpers.interopDefault(_timezone);
var _timezonesJson = require("./timezones.json");
var _timezonesJsonDefault = parcelHelpers.interopDefault(_timezonesJson);
const container = document.querySelector(".container");
const timeZoneDisplay = document.querySelector(".time-zone-display");
const timeDisplay = document.querySelector(".time-display");
const dateDisplay = document.querySelector(".date-display");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const timeZoneForm = document.querySelector(".time-zone-form");
const dropdown = document.querySelector(".select-time-zone");
(0, _dayjsDefault.default).extend((0, _utcDefault.default));
(0, _dayjsDefault.default).extend((0, _timezoneDefault.default));
let currentTZ = (0, _dayjsDefault.default).tz.guess();
let now = (0, _dayjsDefault.default)();
let tzs = [];
(0, _timezonesJsonDefault.default).forEach((item)=>{
    tzs.push(`
        <option value="${item.tzCode}" class="time-zone-opt">${item.label}</option>
    `);
});
dropdown.innerHTML = tzs;
timeZoneForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(dropdown.value);
    changeTimeZone(dropdown.value);
});
timeZoneDisplay.onclick = function() {
    modal.style.display = "block";
};
closeBtn.onclick = function() {
    modal.style.display = "none";
};
function changeTimeZone(i) {
    // now = dayjs(now).tz(i);
    currentTZ = i;
    console.log(i);
}
const months = {
    "1": "Jan",
    "2": "Feb",
    "3": "Mar",
    "4": "Apr",
    "5": "May",
    "6": "Jun",
    "7": "Jul",
    "8": "Aug",
    "9": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
};
function createContainerContents() {
    now = (0, _dayjsDefault.default)().tz(currentTZ);
    timeZoneDisplay.innerHTML = findTimeZone(now);
    timeDisplay.innerHTML = findTime(now);
    dateDisplay.innerHTML = findDate(now);
}
function findTimeZone(now) {
    //let returnTimeZone = (now.get('hour') % 12) + ":" + now.get('minute') + ":" + now.get('second');
    return currentTZ;
}
function findTime(now) {
    let returnTime = now.format("hh:mm:ss A");
    // let returnTime = (now.get('hour') % 12) + ":" + now.get('minute') + ":" + now.get('second');
    return returnTime;
}
function findDate(now) {
    let returnDate = now.format("MMM DD, YYYY");
    return returnDate;
}
// findTime(now);
let timerInterval = setInterval(createContainerContents, 1000);

},{"dayjs":"NJZFB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","dayjs/plugin/utc":"fhibK","dayjs/plugin/timezone":"8a2EL","./timezones.json":"asJaK"}],"NJZFB":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t) {
        return t instanceof _ || !(!t || !t[p]);
    }, w = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, O = function(t, e) {
        if (S(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t, e) {
        return O(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M(t) {
            this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (b.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return b;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = O(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return O(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < O(t);
        }, m.$g = function(t, e, n) {
            return b.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
                var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[b.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = b.p(f), y = function(t) {
                var e = O(l);
                return b.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return b.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return b.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return b.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return b.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return b.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return b.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return b.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return b.s(e.$s, 2, "0");
                        case "SSS":
                            return b.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return b.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : b.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = w(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return b.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), k = _.prototype;
    return O.prototype = k, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        k[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), O.extend = function(t, e) {
        return t.$i || (t(e, _, O), t.$i = !0), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t) {
        return O(1e3 * t);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fhibK":[function(require,module,exports) {
!function(t, i) {
    module.exports = i();
}(this, function() {
    "use strict";
    var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
    return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t) {
            var i = {
                date: t,
                utc: !0,
                args: arguments
            };
            return new f(i);
        }, u.utc = function(i) {
            var e = n(this.toDate(), {
                locale: this.$L,
                utc: !0
            });
            return i ? e.add(this.utcOffset(), t) : e;
        }, u.local = function() {
            return n(this.toDate(), {
                locale: this.$L,
                utc: !1
            });
        };
        var o = u.parse;
        u.parse = function(t) {
            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), o.call(this, t);
        };
        var r = u.init;
        u.init = function() {
            if (this.$u) {
                var t = this.$d;
                this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds();
            } else r.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s, f) {
            var n = this.$utils().u;
            if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
            if ("string" == typeof s && (s = function(t) {
                void 0 === t && (t = "");
                var s = t.match(i);
                if (!s) return null;
                var f = ("" + s[0]).match(e) || [
                    "-",
                    0,
                    0
                ], n = f[0], u = 60 * +f[1] + +f[2];
                return 0 === u ? 0 : "+" === n ? u : -u;
            }(s), null === s)) return this;
            var u = Math.abs(s) <= 16 ? 60 * s : s, o = this;
            if (f) return o.$offset = u, o.$u = 0 === s, o;
            if (0 !== s) {
                var r = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                (o = this.local().add(u + r, t)).$offset = u, o.$x.$localOffset = r;
            } else o = this.utc();
            return o;
        };
        var h = u.format;
        u.format = function(t) {
            var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return h.call(this, i);
        }, u.valueOf = function() {
            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t;
        }, u.isUTC = function() {
            return !!this.$u;
        }, u.toISOString = function() {
            return this.toDate().toISOString();
        }, u.toString = function() {
            return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t) {
            return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t, i, e) {
            if (t && this.$u === t.$u) return c.call(this, t, i, e);
            var s = this.local(), f = n(t).local();
            return c.call(s, f, i, e);
        };
    };
});

},{}],"8a2EL":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t = {
        year: 0,
        month: 1,
        day: 2,
        hour: 3,
        minute: 4,
        second: 5
    }, e = {};
    return function(n, i, o) {
        var r, a = function(t, n, i) {
            void 0 === i && (i = {});
            var o = new Date(t), r = function(t, n) {
                void 0 === n && (n = {});
                var i = n.timeZoneName || "short", o = t + "|" + i, r = e[o];
                return r || (r = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: t,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: i
                }), e[o] = r), r;
            }(n, i);
            return r.formatToParts(o);
        }, u = function(e, n) {
            for(var i = a(e, n), r = [], u = 0; u < i.length; u += 1){
                var f = i[u], s = f.type, m = f.value, c = t[s];
                c >= 0 && (r[c] = parseInt(m, 10));
            }
            var d = r[3], l = 24 === d ? 0 : d, h = r[0] + "-" + r[1] + "-" + r[2] + " " + l + ":" + r[4] + ":" + r[5] + ":000", v = +e;
            return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
        }, f = i.prototype;
        f.tz = function(t, e) {
            void 0 === t && (t = r);
            var n = this.utcOffset(), i = this.toDate(), a = i.toLocaleString("en-US", {
                timeZone: t
            }), u = Math.round((i - new Date(a)) / 1e3 / 60), f = o(a, {
                locale: this.$L
            }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i.getTimezoneOffset() / 15) - u, !0);
            if (e) {
                var s = f.utcOffset();
                f = f.add(n - s, "minute");
            }
            return f.$x.$timezone = t, f;
        }, f.offsetName = function(t) {
            var e = this.$x.$timezone || o.tz.guess(), n = a(this.valueOf(), e, {
                timeZoneName: t
            }).find(function(t) {
                return "timezonename" === t.type.toLowerCase();
            });
            return n && n.value;
        };
        var s = f.startOf;
        f.startOf = function(t, e) {
            if (!this.$x || !this.$x.$timezone) return s.call(this, t, e);
            var n = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
                locale: this.$L
            });
            return s.call(n, t, e).tz(this.$x.$timezone, !0);
        }, o.tz = function(t, e, n) {
            var i = n && e, a = n || e || r, f = u(+o(), a);
            if ("string" != typeof t) return o(t).tz(a);
            var s = function(t, e, n) {
                var i = t - 60 * e * 1e3, o = u(i, n);
                if (e === o) return [
                    i,
                    e
                ];
                var r = u(i -= 60 * (o - e) * 1e3, n);
                return o === r ? [
                    i,
                    o
                ] : [
                    t - 60 * Math.min(o, r) * 1e3,
                    Math.max(o, r)
                ];
            }(o.utc(t, i).valueOf(), f, a), m = s[0], c = s[1], d = o(m).utcOffset(c);
            return d.$x.$timezone = a, d;
        }, o.tz.guess = function() {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, o.tz.setDefault = function(t) {
            r = t;
        };
    };
});

},{}],"asJaK":[function(require,module,exports) {
module.exports = JSON.parse('[{"label":"Pacific/Midway (GMT-11:00)","tzCode":"Pacific/Midway","name":"(GMT-11:00) Midway","utc":"-11:00"},{"label":"America/Adak (GMT-10:00)","tzCode":"America/Adak","name":"(GMT-10:00) Adak","utc":"-10:00"},{"label":"Pacific/Honolulu (GMT-10:00)","tzCode":"Pacific/Honolulu","name":"(GMT-10:00) Honolulu, East Honolulu, Pearl City, Hilo, Kailua","utc":"-10:00"},{"label":"America/Los_Angeles (GMT-08:00)","tzCode":"America/Los_Angeles","name":"(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle","utc":"-08:00"},{"label":"America/Tijuana (GMT-08:00)","tzCode":"America/Tijuana","name":"(GMT-08:00) Tijuana, Mexicali, Ensenada, Rosarito, Tecate","utc":"-08:00"},{"label":"America/Vancouver (GMT-08:00)","tzCode":"America/Vancouver","name":"(GMT-08:00) Vancouver, Surrey, Okanagan, Victoria, Burnaby","utc":"-08:00"},{"label":"Pacific/Pitcairn (GMT-08:00)","tzCode":"Pacific/Pitcairn","name":"(GMT-08:00) Adamstown","utc":"-08:00"},{"label":"America/Boise (GMT-07:00)","tzCode":"America/Boise","name":"(GMT-07:00) Boise, Meridian, Nampa, Idaho Falls, Pocatello","utc":"-07:00"},{"label":"America/Dawson_Creek (GMT-07:00)","tzCode":"America/Dawson_Creek","name":"(GMT-07:00) Fort St. John, Dawson Creek","utc":"-07:00"},{"label":"America/Denver (GMT-07:00)","tzCode":"America/Denver","name":"(GMT-07:00) Denver, El Paso, Albuquerque, Colorado Springs, Aurora","utc":"-07:00"},{"label":"America/Mazatlan (GMT-07:00)","tzCode":"America/Mazatlan","name":"(GMT-07:00) Culiac\xe1n, Mazatl\xe1n, Tepic, Los Mochis, La Paz","utc":"-07:00"},{"label":"America/Ojinaga (GMT-07:00)","tzCode":"America/Ojinaga","name":"(GMT-07:00) Ciudad Ju\xe1rez, Manuel Ojinaga, Ojinaga","utc":"-07:00"},{"label":"America/Phoenix (GMT-07:00)","tzCode":"America/Phoenix","name":"(GMT-07:00) Phoenix, Tucson, Mesa, Chandler, Gilbert","utc":"-07:00"},{"label":"America/Whitehorse (GMT-07:00)","tzCode":"America/Whitehorse","name":"(GMT-07:00) Whitehorse","utc":"-07:00"},{"label":"America/Yellowknife (GMT-07:00)","tzCode":"America/Yellowknife","name":"(GMT-07:00) Yellowknife","utc":"-07:00"},{"label":"America/Chicago (GMT-06:00)","tzCode":"America/Chicago","name":"(GMT-06:00) Chicago, Houston, San Antonio, Dallas, Austin","utc":"-06:00"},{"label":"America/Costa_Rica (GMT-06:00)","tzCode":"America/Costa_Rica","name":"(GMT-06:00) San Jos\xe9, Lim\xf3n, San Francisco, Alajuela, Liberia","utc":"-06:00"},{"label":"America/El_Salvador (GMT-06:00)","tzCode":"America/El_Salvador","name":"(GMT-06:00) San Salvador, Soyapango, Santa Ana, San Miguel, Mejicanos","utc":"-06:00"},{"label":"America/Guatemala (GMT-06:00)","tzCode":"America/Guatemala","name":"(GMT-06:00) Guatemala City, Mixco, Villa Nueva, Petapa, San Juan Sacatep\xe9quez","utc":"-06:00"},{"label":"America/Mexico_City (GMT-06:00)","tzCode":"America/Mexico_City","name":"(GMT-06:00) Mexico City, Iztapalapa, Ecatepec de Morelos, Guadalajara, Puebla","utc":"-06:00"},{"label":"America/North_Dakota/Center (GMT-06:00)","tzCode":"America/North_Dakota/Center","name":"(GMT-06:00) Center","utc":"-06:00"},{"label":"America/North_Dakota/New_Salem (GMT-06:00)","tzCode":"America/North_Dakota/New_Salem","name":"(GMT-06:00) Mandan","utc":"-06:00"},{"label":"Pacific/Easter (GMT-06:00)","tzCode":"Pacific/Easter","name":"(GMT-06:00) Easter","utc":"-06:00"},{"label":"Pacific/Galapagos (GMT-06:00)","tzCode":"Pacific/Galapagos","name":"(GMT-06:00) Puerto Ayora, Puerto Baquerizo Moreno","utc":"-06:00"},{"label":"America/Cancun (GMT-05:00)","tzCode":"America/Cancun","name":"(GMT-05:00) Canc\xfan, Chetumal, Playa del Carmen, Cozumel, Felipe Carrillo Puerto","utc":"-05:00"},{"label":"America/Cayman (GMT-05:00)","tzCode":"America/Cayman","name":"(GMT-05:00) George Town, West Bay, Bodden Town, East End, North Side","utc":"-05:00"},{"label":"America/Detroit (GMT-05:00)","tzCode":"America/Detroit","name":"(GMT-05:00) Detroit, Grand Rapids, Warren, Sterling Heights, Ann Arbor","utc":"-05:00"},{"label":"America/Havana (GMT-05:00)","tzCode":"America/Havana","name":"(GMT-05:00) Havana, Santiago de Cuba, Camag\xfcey, Holgu\xedn, Guant\xe1namo","utc":"-05:00"},{"label":"America/Indiana/Indianapolis (GMT-05:00)","tzCode":"America/Indiana/Indianapolis","name":"(GMT-05:00) Indianapolis, Fort Wayne, South Bend, Carmel, Bloomington","utc":"-05:00"},{"label":"America/Indiana/Winamac (GMT-05:00)","tzCode":"America/Indiana/Winamac","name":"(GMT-05:00) Winamac","utc":"-05:00"},{"label":"America/Iqaluit (GMT-05:00)","tzCode":"America/Iqaluit","name":"(GMT-05:00) Iqaluit","utc":"-05:00"},{"label":"America/Jamaica (GMT-05:00)","tzCode":"America/Jamaica","name":"(GMT-05:00) Kingston, New Kingston, Spanish Town, Portmore, Montego Bay","utc":"-05:00"},{"label":"America/Kentucky/Louisville (GMT-05:00)","tzCode":"America/Kentucky/Louisville","name":"(GMT-05:00) Louisville, Jeffersonville, New Albany, Jeffersontown, Pleasure Ridge Park","utc":"-05:00"},{"label":"America/Kentucky/Monticello (GMT-05:00)","tzCode":"America/Kentucky/Monticello","name":"(GMT-05:00) Monticello","utc":"-05:00"},{"label":"America/New_York (GMT-05:00)","tzCode":"America/New_York","name":"(GMT-05:00) New York City, Brooklyn, Queens, Philadelphia, Manhattan","utc":"-05:00"},{"label":"America/Panama (GMT-05:00)","tzCode":"America/Panama","name":"(GMT-05:00) Panam\xe1, San Miguelito, Juan D\xedaz, David, Arraij\xe1n","utc":"-05:00"},{"label":"America/Rio_Branco (GMT-05:00)","tzCode":"America/Rio_Branco","name":"(GMT-05:00) Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauac\xe1, Feij\xf3","utc":"-05:00"},{"label":"America/Thunder_Bay (GMT-05:00)","tzCode":"America/Thunder_Bay","name":"(GMT-05:00) Thunder Bay","utc":"-05:00"},{"label":"America/Toronto (GMT-05:00)","tzCode":"America/Toronto","name":"(GMT-05:00) Toronto, Montr\xe9al, Ottawa, Mississauga, Qu\xe9bec","utc":"-05:00"},{"label":"America/Cuiaba (GMT-04:00)","tzCode":"America/Cuiaba","name":"(GMT-04:00) Cuiab\xe1, V\xe1rzea Grande, Rondon\xf3polis, Sinop, Barra do Gar\xe7as","utc":"-04:00"},{"label":"America/Goose_Bay (GMT-04:00)","tzCode":"America/Goose_Bay","name":"(GMT-04:00) Labrador City, Happy Valley-Goose Bay","utc":"-04:00"},{"label":"America/Grenada (GMT-04:00)","tzCode":"America/Grenada","name":"(GMT-04:00) Saint George\'s, Gouyave, Grenville, Victoria, Saint David\u2019s","utc":"-04:00"},{"label":"America/Guadeloupe (GMT-04:00)","tzCode":"America/Guadeloupe","name":"(GMT-04:00) Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg, Sainte-Anne","utc":"-04:00"},{"label":"America/Guyana (GMT-04:00)","tzCode":"America/Guyana","name":"(GMT-04:00) Georgetown, Linden, New Amsterdam, Anna Regina, Bartica","utc":"-04:00"},{"label":"America/Puerto_Rico (GMT-04:00)","tzCode":"America/Puerto_Rico","name":"(GMT-04:00) San Juan, Bayam\xf3n, Carolina, Ponce, Caguas","utc":"-04:00"},{"label":"America/Santiago (GMT-04:00)","tzCode":"America/Santiago","name":"(GMT-04:00) Santiago, Puente Alto, Antofagasta, Vi\xf1a del Mar, Valpara\xedso","utc":"-04:00"},{"label":"America/Santo_Domingo (GMT-04:00)","tzCode":"America/Santo_Domingo","name":"(GMT-04:00) Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este, San Pedro de Macor\xeds","utc":"-04:00"},{"label":"America/St_Barthelemy (GMT-04:00)","tzCode":"America/St_Barthelemy","name":"(GMT-04:00) Gustavia","utc":"-04:00"},{"label":"America/St_Kitts (GMT-04:00)","tzCode":"America/St_Kitts","name":"(GMT-04:00) Basseterre, Fig Tree, Market Shop, Saint Paul\u2019s, Middle Island","utc":"-04:00"},{"label":"America/Araguaina (GMT-03:00)","tzCode":"America/Araguaina","name":"(GMT-03:00) Palmas, Aragua\xedna, Gurupi, Miracema do Tocantins, Porto Franco","utc":"-03:00"},{"label":"America/Argentina/Buenos_Aires (GMT-03:00)","tzCode":"America/Argentina/Buenos_Aires","name":"(GMT-03:00) Buenos Aires, La Plata, Mar del Plata, Mor\xf3n, Bah\xeda Blanca","utc":"-03:00"},{"label":"America/Argentina/Catamarca (GMT-03:00)","tzCode":"America/Argentina/Catamarca","name":"(GMT-03:00) San Fernando del Valle de Catamarca, Trelew, Puerto Madryn, Esquel, Rawson","utc":"-03:00"},{"label":"America/Argentina/Cordoba (GMT-03:00)","tzCode":"America/Argentina/Cordoba","name":"(GMT-03:00) C\xf3rdoba, Rosario, Santa Fe, Resistencia, Santiago del Estero","utc":"-03:00"},{"label":"America/Montevideo (GMT-03:00)","tzCode":"America/Montevideo","name":"(GMT-03:00) Montevideo, Salto, Paysand\xfa, Las Piedras, Rivera","utc":"-03:00"},{"label":"America/Paramaribo (GMT-03:00)","tzCode":"America/Paramaribo","name":"(GMT-03:00) Paramaribo, Lelydorp, Brokopondo, Nieuw Nickerie, Moengo","utc":"-03:00"},{"label":"Antarctica/Rothera (GMT-03:00)","tzCode":"Antarctica/Rothera","name":"(GMT-03:00) Rothera","utc":"-03:00"},{"label":"Atlantic/Stanley (GMT-03:00)","tzCode":"Atlantic/Stanley","name":"(GMT-03:00) Stanley","utc":"-03:00"},{"label":"Atlantic/South_Georgia (GMT-02:00)","tzCode":"Atlantic/South_Georgia","name":"(GMT-02:00) Grytviken","utc":"-02:00"},{"label":"Africa/Dakar (GMT+00:00)","tzCode":"Africa/Dakar","name":"(GMT+00:00) Dakar, Pikine, Touba, Thi\xe8s, Thi\xe8s Nones","utc":"+00:00"},{"label":"Europe/Dublin (GMT+00:00)","tzCode":"Europe/Dublin","name":"(GMT+00:00) Dublin, Cork, Luimneach, Gaillimh, Tallaght","utc":"+00:00"},{"label":"Europe/London (GMT+00:00)","tzCode":"Europe/London","name":"(GMT+00:00) London, Birmingham, Liverpool, Sheffield, Bristol","utc":"+00:00"},{"label":"Africa/Porto-Novo (GMT+01:00)","tzCode":"Africa/Porto-Novo","name":"(GMT+01:00) Cotonou, Abomey-Calavi, Djougou, Porto-Novo, Parakou","utc":"+01:00"},{"label":"Europe/Amsterdam (GMT+01:00)","tzCode":"Europe/Amsterdam","name":"(GMT+01:00) Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven","utc":"+01:00"},{"label":"Europe/Andorra (GMT+01:00)","tzCode":"Europe/Andorra","name":"(GMT+01:00) Andorra la Vella, les Escaldes, Encamp, Sant Juli\xe0 de L\xf2ria, la Massana","utc":"+01:00"},{"label":"Europe/Belgrade (GMT+01:00)","tzCode":"Europe/Belgrade","name":"(GMT+01:00) Belgrade, Pristina, Ni\u0161, Novi Sad, Prizren","utc":"+01:00"},{"label":"Europe/Berlin (GMT+01:00)","tzCode":"Europe/Berlin","name":"(GMT+01:00) Berlin, Hamburg, Munich, K\xf6ln, Frankfurt am Main","utc":"+01:00"},{"label":"Europe/Bratislava (GMT+01:00)","tzCode":"Europe/Bratislava","name":"(GMT+01:00) Bratislava, Ko\u0161ice, Pre\u0161ov, Nitra, \u017Dilina","utc":"+01:00"},{"label":"Europe/Brussels (GMT+01:00)","tzCode":"Europe/Brussels","name":"(GMT+01:00) Brussels, Antwerpen, Gent, Charleroi, Li\xe8ge","utc":"+01:00"},{"label":"Europe/Budapest (GMT+01:00)","tzCode":"Europe/Budapest","name":"(GMT+01:00) Budapest, Debrecen, Miskolc, Szeged, P\xe9cs","utc":"+01:00"},{"label":"Europe/Copenhagen (GMT+01:00)","tzCode":"Europe/Copenhagen","name":"(GMT+01:00) Copenhagen, \xc5rhus, Odense, Aalborg, Frederiksberg","utc":"+01:00"},{"label":"Europe/Luxembourg (GMT+01:00)","tzCode":"Europe/Luxembourg","name":"(GMT+01:00) Luxembourg, Esch-sur-Alzette, Dudelange, Schifflange, Bettembourg","utc":"+01:00"},{"label":"Europe/Madrid (GMT+01:00)","tzCode":"Europe/Madrid","name":"(GMT+01:00) Madrid, Barcelona, Valencia, Sevilla, Zaragoza","utc":"+01:00"},{"label":"Europe/Paris (GMT+01:00)","tzCode":"Europe/Paris","name":"(GMT+01:00) Paris, Marseille, Lyon, Toulouse, Nice","utc":"+01:00"},{"label":"Europe/Rome (GMT+01:00)","tzCode":"Europe/Rome","name":"(GMT+01:00) Rome, Milan, Naples, Turin, Palermo","utc":"+01:00"},{"label":"Europe/San_Marino (GMT+01:00)","tzCode":"Europe/San_Marino","name":"(GMT+01:00) Serravalle, Borgo Maggiore, San Marino, Domagnano, Fiorentino","utc":"+01:00"},{"label":"Africa/Cairo (GMT+02:00)","tzCode":"Africa/Cairo","name":"(GMT+02:00) Cairo, Alexandria, Giza, Port Said, Suez","utc":"+02:00"},{"label":"Africa/Gaborone (GMT+02:00)","tzCode":"Africa/Gaborone","name":"(GMT+02:00) Gaborone, Francistown, Molepolole, Selebi-Phikwe, Maun","utc":"+02:00"},{"label":"Africa/Harare (GMT+02:00)","tzCode":"Africa/Harare","name":"(GMT+02:00) Harare, Bulawayo, Chitungwiza, Mutare, Gweru","utc":"+02:00"},{"label":"Africa/Johannesburg (GMT+02:00)","tzCode":"Africa/Johannesburg","name":"(GMT+02:00) Cape Town, Durban, Johannesburg, Soweto, Pretoria","utc":"+02:00"},{"label":"Africa/Juba (GMT+02:00)","tzCode":"Africa/Juba","name":"(GMT+02:00) Juba, Winejok, Malakal, Wau, Kuacjok","utc":"+02:00"},{"label":"Africa/Khartoum (GMT+02:00)","tzCode":"Africa/Khartoum","name":"(GMT+02:00) Khartoum, Omdurman, Nyala, Port Sudan, Kassala","utc":"+02:00"},{"label":"Asia/Amman (GMT+02:00)","tzCode":"Asia/Amman","name":"(GMT+02:00) Amman, Zarqa, Irbid, Russeifa, W\u0101d\u012B as S\u012Br","utc":"+02:00"},{"label":"Asia/Beirut (GMT+02:00)","tzCode":"Asia/Beirut","name":"(GMT+02:00) Beirut, Ra\u2019s Bayr\u016Bt, Tripoli, Sidon, Tyre","utc":"+02:00"},{"label":"Asia/Damascus (GMT+02:00)","tzCode":"Asia/Damascus","name":"(GMT+02:00) Aleppo, Damascus, Homs, \u1E28am\u0101h, Latakia","utc":"+02:00"},{"label":"Asia/Famagusta (GMT+02:00)","tzCode":"Asia/Famagusta","name":"(GMT+02:00) Famagusta, Kyrenia, Protaras, Paral\xedmni, L\xe1pithos","utc":"+02:00"},{"label":"Asia/Gaza (GMT+02:00)","tzCode":"Asia/Gaza","name":"(GMT+02:00) Gaza, Kh\u0101n Y\u016Bnis, Jab\u0101ly\u0101, Rafa\u1E29, Dayr al Bala\u1E29","utc":"+02:00"},{"label":"Europe/Kyiv (GMT+02:00)","tzCode":"Europe/Kyiv","name":"(GMT+02:00) Kyiv, Kharkiv, Donetsk, Odessa, Dnipro","utc":"+02:00"},{"label":"Europe/Mariehamn (GMT+02:00)","tzCode":"Europe/Mariehamn","name":"(GMT+02:00) Mariehamn","utc":"+02:00"},{"label":"Africa/Asmara (GMT+03:00)","tzCode":"Africa/Asmara","name":"(GMT+03:00) Asmara, Keren, Massawa, Assab, Mendefera","utc":"+03:00"},{"label":"Africa/Dar_es_Salaam (GMT+03:00)","tzCode":"Africa/Dar_es_Salaam","name":"(GMT+03:00) Dar es Salaam, Mwanza, Zanzibar, Arusha, Mbeya","utc":"+03:00"},{"label":"Africa/Djibouti (GMT+03:00)","tzCode":"Africa/Djibouti","name":"(GMT+03:00) Djibouti, \'Ali Sabieh, Tadjourah, Obock, Dikhil","utc":"+03:00"},{"label":"Africa/Kampala (GMT+03:00)","tzCode":"Africa/Kampala","name":"(GMT+03:00) Kampala, Gulu, Lira, Mbarara, Jinja","utc":"+03:00"},{"label":"Asia/Baghdad (GMT+03:00)","tzCode":"Asia/Baghdad","name":"(GMT+03:00) Baghdad, Basrah, Al Maw\u015Fil al Jad\u012Bdah, Al Ba\u015Frah al Qad\u012Bmah, Mosul","utc":"+03:00"},{"label":"Asia/Kuwait (GMT+03:00)","tzCode":"Asia/Kuwait","name":"(GMT+03:00) Al A\u1E29mad\u012B, \u1E28awall\u012B, As S\u0101lim\u012Byah, \u015Eab\u0101\u1E29 as S\u0101lim, Al Farw\u0101n\u012Byah","utc":"+03:00"},{"label":"Asia/Qatar (GMT+03:00)","tzCode":"Asia/Qatar","name":"(GMT+03:00) Doha, Ar Rayy\u0101n, Umm \u015Eal\u0101l Mu\u1E29ammad, Al Wakrah, Al Khawr","utc":"+03:00"},{"label":"Europe/Moscow (GMT+03:00)","tzCode":"Europe/Moscow","name":"(GMT+03:00) Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan, Rostov-na-Donu","utc":"+03:00"},{"label":"Asia/Yerevan (GMT+04:00)","tzCode":"Asia/Yerevan","name":"(GMT+04:00) Yerevan, Gyumri, Vanadzor, Vagharshapat, Hrazdan","utc":"+04:00"},{"label":"Indian/Reunion (GMT+04:00)","tzCode":"Indian/Reunion","name":"(GMT+04:00) Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon, Saint-Andr\xe9","utc":"+04:00"},{"label":"Asia/Kabul (GMT+04:30)","tzCode":"Asia/Kabul","name":"(GMT+04:30) Kabul, Kandah\u0101r, Maz\u0101r-e Shar\u012Bf, Her\u0101t, Jal\u0101l\u0101b\u0101d","utc":"+04:30"},{"label":"Antarctica/Mawson (GMT+05:00)","tzCode":"Antarctica/Mawson","name":"(GMT+05:00) Mawson","utc":"+05:00"},{"label":"Asia/Qyzylorda (GMT+05:00)","tzCode":"Asia/Qyzylorda","name":"(GMT+05:00) Kyzylorda, Baikonur, Novokazalinsk, Aral, Chiili","utc":"+05:00"},{"label":"Asia/Samarkand (GMT+05:00)","tzCode":"Asia/Samarkand","name":"(GMT+05:00) Samarkand, Bukhara, Nukus, Qarshi, Jizzax","utc":"+05:00"},{"label":"Asia/Kolkata (GMT+05:30)","tzCode":"Asia/Kolkata","name":"(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai","utc":"+05:30"},{"label":"Asia/Kathmandu (GMT+05:45)","tzCode":"Asia/Kathmandu","name":"(GMT+05:45) Kathmandu, Pokhara, P\u0101tan, Biratnagar, Birga\xf1j","utc":"+05:45"},{"label":"Antarctica/Vostok (GMT+06:00)","tzCode":"Antarctica/Vostok","name":"(GMT+06:00) Vostok","utc":"+06:00"},{"label":"Asia/Urumqi (GMT+06:00)","tzCode":"Asia/Urumqi","name":"(GMT+06:00) Zhongshan, \xdcr\xfcmqi, Zhanjiang, Shihezi, Huocheng","utc":"+06:00"},{"label":"Indian/Chagos (GMT+06:00)","tzCode":"Indian/Chagos","name":"(GMT+06:00) British Indian Ocean Territory","utc":"+06:00"},{"label":"Antarctica/Davis (GMT+07:00)","tzCode":"Antarctica/Davis","name":"(GMT+07:00) Davis","utc":"+07:00"},{"label":"Asia/Bangkok (GMT+07:00)","tzCode":"Asia/Bangkok","name":"(GMT+07:00) Bangkok, Hanoi, Haiphong, Samut Prakan, Mueang Nonthaburi","utc":"+07:00"},{"label":"Indian/Christmas (GMT+07:00)","tzCode":"Indian/Christmas","name":"(GMT+07:00) Flying Fish Cove","utc":"+07:00"},{"label":"Asia/Hong_Kong (GMT+08:00)","tzCode":"Asia/Hong_Kong","name":"(GMT+08:00) Hong Kong, Kowloon, Tsuen Wan, Yuen Long Kau Hui, Tung Chung","utc":"+08:00"},{"label":"Asia/Singapore (GMT+08:00)","tzCode":"Asia/Singapore","name":"(GMT+08:00) Singapore, Woodlands","utc":"+08:00"},{"label":"Asia/Taipei (GMT+08:00)","tzCode":"Asia/Taipei","name":"(GMT+08:00) Taipei, Kaohsiung, Taichung, Tainan, Banqiao","utc":"+08:00"},{"label":"Asia/Pyongyang (GMT+09:00)","tzCode":"Asia/Pyongyang","name":"(GMT+09:00) Pyongyang, Hamh\u016Dng, Namp\u2019o, Sunch\u2019\u014Fn, H\u016Dngnam","utc":"+09:00"},{"label":"Asia/Seoul (GMT+09:00)","tzCode":"Asia/Seoul","name":"(GMT+09:00) Seoul, Busan, Incheon, Daegu, Daejeon","utc":"+09:00"},{"label":"Asia/Tokyo (GMT+09:00)","tzCode":"Asia/Tokyo","name":"(GMT+09:00) Tokyo, Yokohama, Osaka, Nagoya, Sapporo","utc":"+09:00"},{"label":"Pacific/Palau (GMT+09:00)","tzCode":"Pacific/Palau","name":"(GMT+09:00) Koror, Koror Town, Kloulklubed, Ulimang, Mengellang","utc":"+09:00"},{"label":"Australia/Melbourne (GMT+10:00)","tzCode":"Australia/Melbourne","name":"(GMT+10:00) Melbourne, Geelong, Bendigo, Ballarat, Melbourne City Centre","utc":"+10:00"},{"label":"Australia/Sydney (GMT+10:00)","tzCode":"Australia/Sydney","name":"(GMT+10:00) Sydney, Canberra, Newcastle, Wollongong, Maitland","utc":"+10:00"},{"label":"Pacific/Fiji (GMT+12:00)","tzCode":"Pacific/Fiji","name":"(GMT+12:00) Suva, Lautoka, Nadi, Labasa, Ba","utc":"+12:00"},{"label":"Pacific/Chatham (GMT+12:45)","tzCode":"Pacific/Chatham","name":"(GMT+12:45) Waitangi","utc":"+12:45"},{"label":"Pacific/Apia (GMT+13:00)","tzCode":"Pacific/Apia","name":"(GMT+13:00) Apia, Asau, Mulifanua, Afega, Leulumoega","utc":"+13:00"}]');

},{}]},["3zq8u","gLLPy"], "gLLPy", "parcelRequire2401")

//# sourceMappingURL=index.4d6bcbeb.js.map
