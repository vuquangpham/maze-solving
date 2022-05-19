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
})({"h37d7":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "be26d5fe7cf32ae9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6Bv9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _astar = require("./astar");
var _bfs = require("./bfs");
var _configs = require("./configs");
var _dfs = require("./dfs");
var _grid = require("./Grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _mazeSolver = require("./MazeSolver");
var _mazeSolverDefault = parcelHelpers.interopDefault(_mazeSolver);
var _utility = require("./utility");
let start = _configs.START_POINT;
let goal = _configs.GOAL_POINT;
const container = document.querySelector(".container");
const searchBtn = document.querySelector(".btn--search");
const svg = document.querySelector("svg");
const clearBtn = document.querySelector(".btn--clear");
const resetBtn = document.querySelector(".btn--reset");
const form = document.getElementById("selection");
const checkbox = document.querySelector("input[type='checkbox']");
const init = ()=>{
    const maze = new _gridDefault.default(container, 30, 30, svg);
    const matrix = maze.maze;
    [start, goal] = maze.createGrid();
    const draggables = document.querySelectorAll('div[draggable="true"]');
    const problem = new _mazeSolverDefault.default(matrix, start, goal);
    let lastBox = null;
    let timer = 0;
    console.log(svg);
    svg.height = window.innerHeight;
    svg.width = window.innerWidth;
    window.addEventListener("resize", function(e) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function(e) {
            [start, goal] = maze.createGrid();
            problem.updateState(start, goal);
            maze.resetObstacle();
        }, 500);
    });
    container.addEventListener("mousedown", maze.handleMouseDown.bind(maze));
    container.addEventListener("mouseup", maze.handleMouseUp.bind(maze));
    container.addEventListener("mousemove", maze.handleMouseMove.bind(maze));
    clearBtn.addEventListener("click", maze.resetPath.bind(maze));
    resetBtn.addEventListener("click", maze.resetObstacle.bind(maze));
    searchBtn.addEventListener("click", function() {
        maze.resetPath(svg);
        let result;
        const searchAlgorithm = form.elements["searching"].value;
        if (searchAlgorithm === "bfs") result = _bfs.breadth_first_search(problem, start, goal);
        if (searchAlgorithm === "dfs") result = _dfs.depth_first_search(problem, start, goal);
        if (searchAlgorithm === "astar") result = _astar.astar(problem, start, goal);
        if (!result) return alert("no solution");
        [result, expand] = result;
        maze.drawPath(expand);
        const path = maze.drawLine(result);
        _utility.drawLine(svg, path);
    });
    checkbox.addEventListener("change", function(e) {
        const state = this.checked;
        problem.updateDiagonal(state);
    });
    draggables.forEach((draggable)=>{
        draggable.addEventListener("dragstart", ()=>{
            draggable.classList.add("dragging");
        });
        draggable.addEventListener("dragend", ()=>{
            draggable.classList.remove("dragging");
            if (_utility.isClassIncluded(draggable, "start")) {
                console.log("source is start");
                start = _utility.getRowCol(lastBox);
            }
            if (_utility.isClassIncluded(draggable, "goal")) {
                console.log("source is end");
                goal = _utility.getRowCol(lastBox);
            }
            if (_utility.isClassIncluded(lastBox, "goal")) {
                console.log("destination is end");
                goal = _utility.getRowCol(draggable);
            }
            if (_utility.isClassIncluded(lastBox, "start")) {
                console.log("destination is start");
                start = _utility.getRowCol(draggable);
            }
            maze.resetPath();
            maze.moveBox(draggable, lastBox);
            problem.updateState(start, goal);
        });
    });
    container.addEventListener("dragover", (e)=>{
        e.preventDefault();
        const nextBox = e.path[0];
        if (lastBox === nextBox) return;
        lastBox = nextBox;
    });
};
window.addEventListener("DOMContentLoaded", init);

},{"./Grid":"j7Jez","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./astar":"f0du2","./bfs":"2KByy","./dfs":"9cZJ9","./MazeSolver":"3aquw","./utility":"71fGa","./configs":"8Bbrx"}],"j7Jez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _box = require("./Box");
var _boxDefault = parcelHelpers.interopDefault(_box);
var _utility = require("./utility");
class Grid {
    isMouseDown = false;
    currentCursorBox = null;
    constructor(parentElm, width, height, svg){
        this.parentElm = parentElm;
        this.width = width;
        this.height = height;
        this.maze = [];
        this.row = 0;
        this.col = 0;
        this.svg = svg;
    }
    repeat(quantity) {
        let property = "";
        for(let i = 0; i < quantity; i++)property += "1fr ";
        return property.trim();
    }
    drawBox(box, classList) {
        box.removeAttribute("class");
        box.classList.add("box", ...classList);
        if (classList.includes("start") || classList.includes("goal")) box.setAttribute("draggable", "true");
    }
    resetPath() {
        document.querySelectorAll(".expand").forEach((node)=>{
            node.classList.remove("expand");
        });
        this.svg.innerHTML = "";
    }
    resetObstacle() {
        document.querySelectorAll(".obstacle").forEach((node)=>{
            const row = +node.dataset.row;
            const col = +node.dataset.col;
            this.maze[row][col] = 0;
            node.classList.remove("obstacle");
        });
        this.resetPath();
    }
    drawLine(path) {
        let pathStr = "";
        let isFirst = true;
        for (const position of path){
            const row = position[0];
            const col = position[1];
            const box = document.querySelector(`div[data-row="${row}"][data-col="${col}"]`);
            // X --> distance left --> pos, Y --> top --> pos
            const [x, y] = _boxDefault.default.generateMiddlePoint(box);
            if (isFirst) {
                pathStr += `M ${x},${y}`;
                isFirst = false;
                continue;
            }
            pathStr += ` L ${x}, ${y}`;
        }
        return pathStr;
    }
    moveBox(source, des) {
        const rowDes = des.dataset.row;
        const colDes = des.dataset.col;
        const rowSource = source.dataset.row;
        const colSource = source.dataset.col;
        const afterDes = des.nextElementSibling;
        const parent = des.parentNode;
        source.replaceWith(des);
        parent.insertBefore(source, afterDes);
        source.dataset.row = rowDes;
        source.dataset.col = colDes;
        des.dataset.row = rowSource;
        des.dataset.col = colSource;
    }
    drawPath(path) {
        for (const position of path){
            const row = position[0];
            const col = position[1];
            const box = document.querySelector(`div[data-row="${row}"][data-col="${col}"]`);
            if (box.classList.contains("start") || box.classList.contains("goal")) continue;
            this.drawBox(box, [
                "expand"
            ]);
        }
    }
    generateState() {
        const row = Math.round(Math.random() * this.row);
        const col = Math.round(Math.random() * this.row);
        return [
            row,
            col
        ];
    }
    createInitialState(start, goal) {
        const [startRow, startCol] = start;
        const [endRow, endCol] = goal;
        const startBox = document.querySelector(`div[data-row="${startRow}"][data-col="${startCol}"]`);
        const goalBox = document.querySelector(`div[data-row="${endRow}"][data-col="${endCol}"]`);
        this.drawBox(startBox, [
            "start"
        ]);
        this.drawBox(goalBox, [
            "goal"
        ]);
    }
    createBox() {
        for(let i = 0; i < this.row; i++){
            for(let j = 0; j < this.col; j++){
                const box = _boxDefault.default.create(this.width, this.height);
                box.dataset.row = i;
                box.dataset.col = j;
                this.parentElm.append(box);
            }
            this.maze.push(Array(this.col).fill(0));
        }
    }
    reset() {
        this.parentElm.innerHTML = "";
    }
    createGrid() {
        this.reset();
        const browserWidth = window.innerWidth;
        const browserHeight = window.innerHeight;
        this.col = Math.ceil(browserWidth / this.width);
        this.row = Math.ceil(browserHeight / this.height);
        Object.assign(this.parentElm.style, {
            gridTemplateColumns: `repeat(${this.col}, 1fr)`,
            gridTemplateRows: `repeat(${this.row}, 1fr)`
        });
        this.createBox();
        let start = this.generateState();
        let goal = this.generateState();
        this.createInitialState(start, goal);
        return [
            start,
            goal
        ];
    }
    updateMaze(row, col) {
        this.maze[row][col] === 0 ? this.maze[row][col] = 1 : this.maze[row][col] = 0;
    }
    handleMouseDown(e) {
        const currentBox = e.target.closest(".box");
        if (!currentBox || currentBox.classList.contains("start") || currentBox.classList.contains("goal")) return;
        this.isMouseDown = true;
        this.currentCursorBox = currentBox;
        const row = currentBox.dataset.row;
        const col = currentBox.dataset.col;
        this.updateMaze(row, col);
        currentBox.classList.toggle("obstacle");
        this.resetPath();
    }
    handleMouseUp(e) {
        this.isMouseDown = false;
    }
    handleMouseMove(e) {
        if (!this.isMouseDown) return;
        const currentBox = e.target.closest(".box");
        if (!currentBox || currentBox.classList.contains("start") || currentBox.classList.contains("goal")) return;
        if (this.currentCursorBox == currentBox) return;
        this.currentCursorBox = currentBox;
        const row = currentBox.dataset.row;
        const col = currentBox.dataset.col;
        this.updateMaze(row, col);
        currentBox.classList.toggle("obstacle");
    }
}
exports.default = Grid;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Box":"caeGN","./utility":"71fGa"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"caeGN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Box {
    static create(width, height, className = [
        "box"
    ]) {
        const box = document.createElement("div");
        box.classList.add(...className);
        Object.assign(box.style, {
            width: `${width}px`,
            height: `${height}px`
        });
        return box;
    }
    static generateMiddlePoint(box) {
        const boxModel = box.getBoundingClientRect();
        let x = boxModel.x;
        let y = boxModel.y;
        let width = boxModel.width;
        let height = boxModel.height;
        return [
            x + width / 2,
            y + height / 2
        ];
    }
}
exports.default = Box;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71fGa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isExistInArray", ()=>isExistInArray
);
parcelHelpers.export(exports, "drawLine", ()=>drawLine
);
parcelHelpers.export(exports, "clearLine", ()=>clearLine
);
parcelHelpers.export(exports, "getRowCol", ()=>getRowCol
);
parcelHelpers.export(exports, "isClassIncluded", ()=>isClassIncluded
);
const isExistInArray = (array, elm)=>{
    return array.some((val, idx)=>array[idx].equal(elm)
    );
};
const drawLine = (svg, path)=>{
    const pathElm = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElm.setAttributeNS(null, "stroke", "Yellow");
    pathElm.setAttributeNS(null, "stroke-width", 2);
    pathElm.setAttributeNS(null, "fill", "none");
    pathElm.setAttributeNS(null, "d", path);
    svg.append(pathElm);
};
const clearLine = (svg)=>svg.innerHTML = ""
;
const getRowCol = (box)=>{
    const row = +box.dataset.row;
    const col = +box.dataset.col;
    return [
        row,
        col
    ];
};
const isClassIncluded = (element, className)=>{
    return element.classList.contains(className);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0du2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "astar", ()=>astar
);
var _node = require("./Node");
var _nodeDefault = parcelHelpers.interopDefault(_node);
const astar = (problem, start, end)=>{
    const start_node = new _nodeDefault.default(null, start);
    start_node.g = start_node.h = start_node.f = 0;
    const end_node = new _nodeDefault.default(null, end);
    end_node.g = end_node.h = end_node.f = 0;
    console.log("test", start_node.position, end_node.position);
    const open_list = [];
    const closed_list = [];
    const path = [];
    open_list.push(start_node);
    while(open_list.length > 0){
        let current_node = open_list[0];
        let current_index = 0;
        // for index, item in enumerate(open_list):
        //     if item.f < current_node.f:
        //         current_node = item
        //         current_index = index
        for(let i = 0; i < open_list.length; i++){
            const item = open_list[i];
            if (item.f < current_node.f) {
                current_node = item;
                current_index = i;
            }
        }
        open_list.splice(current_index, 1); // frontier
        closed_list.push(current_node); // explored
        if (problem.goal_test(current_node.position)) return [
            current_node.solution(),
            path
        ];
        children = current_node.expand(problem);
        children.forEach((node)=>path.push(node.position)
        );
        for (const child of children){
            let isExist = false;
            for (const closed_child of closed_list)if (child.position.equal(closed_child.position)) {
                isExist = true;
                continue; // FIX BUG --> must be BREAK
            }
            if (isExist) continue;
            child.g = current_node.g + 1;
            child.h = (child.position[0] - end_node.position[0]) ** 2 + (child.position[1] - end_node.position[1]) ** 2;
            child.f = child.g + child.h;
            for(let i = 0; i < open_list.length; i++){
                const open_node = open_list[i];
                if (child.position.equal(open_node.position) && child.g <= open_node.g) {
                    open_list.pop(i);
                    continue;
                }
            }
            open_list.push(child);
        }
    }
};

},{"./Node":"6RdIK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6RdIK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Node {
    constructor(parent = null, position = null){
        this.parent = parent;
        this.position = position;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.depth = 0;
        if (this.parent) this.depth++;
    }
    equal(other) {
        return this.position.equal(other.position);
    }
    expand(problem) {
        const children = [];
        for (const action of problem.actions(this)){
            const child = this.child_node(problem, action);
            children.push(child);
        }
        return children;
    }
    child_node(problem, action) {
        const new_position = problem.result(this.position, action);
        return new Node(this, new_position);
    }
    solution() {
        const positions = [];
        for (const node of this.path())positions.push(node.position);
        return positions;
    }
    path() {
        let current_node = this;
        const path_back = [];
        while(current_node){
            path_back.push(current_node);
            current_node = current_node.parent;
        }
        return path_back.reverse();
    }
}
exports.default = Node;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KByy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "breadth_first_search", ()=>breadth_first_search
);
var _node = require("./Node");
var _nodeDefault = parcelHelpers.interopDefault(_node);
var _queue = require("./Queue");
var _queueDefault = parcelHelpers.interopDefault(_queue);
var _utility = require("./utility");
const breadth_first_search = (problem, start, end)=>{
    const start_node = new _nodeDefault.default(null, start);
    start_node.g = start_node.h = start_node.f = 0;
    const end_node = new _nodeDefault.default(null, end);
    end_node.g = end_node.h = end_node.f = 0;
    const frontier = new _queueDefault.default();
    frontier.enqueue(start_node);
    console.log("first frontier", frontier);
    // const frontier = [start_node];
    const explored = new Set();
    let path = [];
    if (problem.goal_test(start_node.position)) return start_node;
    while(frontier.size > 0){
        let node1 = frontier.dequeue();
        console.log("dequeue", node1);
        explored.add(node1.position);
        const children = node1.expand(problem);
        children.forEach((node)=>path.push(node.position)
        );
        for (const child of children){
            const isExplored = _utility.isExistInArray([
                ...explored
            ], child.position);
            // const isFrontier = frontier.some((node) => node === child);
            const isFrontier = frontier.find(child);
            console.log("is Fr", isFrontier);
            if (!isExplored && !isFrontier) {
                if (problem.goal_test(child.position)) return [
                    child.solution(),
                    path
                ];
                frontier.enqueue(child);
            }
        }
    }
    return [
        [],
        path
    ];
};

},{"./Node":"6RdIK","./utility":"71fGa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Queue":"gBiXe"}],"gBiXe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NodeQ {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.head = this.tail = null;
        this.size = 0;
    }
    enqueue(element) {
        const newNode = new NodeQ(element);
        if (this.head === null) {
            this.head = this.tail = newNode;
            this.size++;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    dequeue() {
        if (this.head === null) return null;
        const node = this.head;
        this.head = this.head.next;
        node.next = null;
        this.size--;
        return node.element;
    }
    find(element) {
        let node = this.head;
        while(node){
            console.log("node element == elemnt", node.element, element, node.element === element);
            if (node.element === element) return true;
            node = node.next;
        }
        return false;
    }
}
exports.default = Queue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9cZJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "depth_first_search", ()=>depth_first_search
);
var _node = require("./Node");
var _nodeDefault = parcelHelpers.interopDefault(_node);
var _utility = require("./utility");
const depth_first_search = (problem, start, end)=>{
    const start_node = new _nodeDefault.default(null, start);
    start_node.g = start_node.h = start_node.f = 0;
    const end_node = new _nodeDefault.default(null, end);
    end_node.g = end_node.h = end_node.f = 0;
    const frontier = [
        start_node
    ];
    const explored = new Set();
    let path = [];
    if (problem.goal_test(start_node.position)) return start_node;
    while(frontier.length > 0){
        let node1 = frontier.pop();
        explored.add(node1.position);
        const children = node1.expand(problem);
        children.forEach((node)=>path.push(node.position)
        );
        for (const child of children){
            const isExplored = _utility.isExistInArray([
                ...explored
            ], child.position);
            const isFrontier = frontier.some((node)=>node === child
            );
            if (!isExplored && !isFrontier) {
                if (problem.goal_test(child.position)) return [
                    child.solution(),
                    path
                ];
                frontier.push(child);
            }
        }
    }
    return null;
};

},{"./Node":"6RdIK","./utility":"71fGa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3aquw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class MazeSolver {
    constructor(maze, start, goal){
        this.maze = maze;
        this.start = start;
        this.goal = goal;
        this.diagonal = true;
        this.row = this.maze.length;
        this.col = this.maze[0].length;
        Array.prototype.equal = function(arr) {
            return this.length === arr.length && this.every((val, idx)=>val === arr[idx]
            );
        };
    }
    updateDiagonal(state) {
        if (state === true) this.diagonal = true;
        else this.diagonal = false;
    }
    updateState(start, goal) {
        this.start = start;
        this.goal = goal;
    }
    actions(current_node) {
        const possible_actions = [];
        const positions = this.diagonal ? [
            [
                0,
                -1
            ],
            [
                0,
                1
            ],
            [
                -1,
                0
            ],
            [
                1,
                0
            ],
            [
                -1,
                -1
            ],
            [
                -1,
                1
            ],
            [
                1,
                -1
            ],
            [
                1,
                1
            ], 
        ] : [
            [
                0,
                -1
            ],
            [
                0,
                1
            ],
            [
                -1,
                0
            ],
            [
                1,
                0
            ], 
        ];
        for (const position of positions){
            const node_position = [
                current_node.position[0] + position[0],
                current_node.position[1] + position[1], 
            ];
            if (node_position[0] > this.row - 1 || node_position[0] < 0 || node_position[1] > this.col - 1 || node_position[1] < 0) continue;
            if (this.maze[node_position[0]][node_position[1]] !== 0) continue;
            possible_actions.push(position);
        }
        return possible_actions;
    }
    result(current_position, position) {
        const new_position = [
            current_position[0] + position[0],
            current_position[1] + position[1], 
        ];
        return new_position;
    }
    goal_test(position) {
        return this.goal.equal(position);
    }
}
exports.default = MazeSolver;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Bbrx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "START_POINT", ()=>START_POINT
);
parcelHelpers.export(exports, "GOAL_POINT", ()=>GOAL_POINT
);
const START_POINT = [
    7,
    8
];
const GOAL_POINT = [
    30,
    32
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["h37d7","6Bv9J"], "6Bv9J", "parcelRequirefd79")

//# sourceMappingURL=index.7cf32ae9.js.map
