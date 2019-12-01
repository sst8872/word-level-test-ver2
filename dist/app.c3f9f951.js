// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/dropdwon.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/loader.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/navbar.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"spreadSheet/sheetIDs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var sheetIDs = {
  'level-1': '1_Z_bti_Wk9g-t2IgxZGYvTpKXaZAqkFt3vDmw-1BU74',
  // 고1
  'level-2': '1mgbYLvqlZ9FIRFbiIhg6C4SQZtHihCOME7f5m49Ze84',
  // 고2
  'level-3': '1KXnfz5L-QG8e7OhGPV6V3CetYqvz8U4e0zdpA_Q9fTw',
  // 고3
  'free': '1z0A-HHj-OXOHNGmVsbHS9HEhREyOE6Dvkxarxak4yyA'
};
var _default = sheetIDs;
exports.default = _default;
},{}],"spreadSheet/apiURLs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var apiURLs = {
  'level-1': 'https://script.google.com/macros/s/AKfycbyLoDyJGooiBIZhhC_R4IJDbKgz6yY8aknA5cZdj0LwAuzdSvFx/exec',
  'level-2': 'https://script.google.com/macros/s/AKfycbzyqLGZTdZSFlGtghA2wQRpPb8yMs88uWBB92iYnAga_OhSJ9c/exec',
  'level-3': 'https://script.google.com/macros/s/AKfycbygtkEpsZCG-9uclkUYIOULbmyPccoNHgumYQ--9Efsr3APo8Q/exec',
  'free': 'https://script.google.com/macros/s/AKfycby66icyZOfTUZ5QKmmhjuk73ICBljuMq0s22ShovPC-XLDqk5c/exec'
};
var _default = apiURLs;
exports.default = _default;
},{}],"js/fetchSheetsLength.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getSheetsLength(sheetApiUrl, callback) {
  document.querySelector('.loader').style.display = 'block';
  var appUrl = sheetApiUrl;
  fetch(appUrl).then(function (res) {
    return res.json();
  }).then(callback);
}

var _default = getSheetsLength;
exports.default = _default;
},{}],"js/exportToWords.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function Export2Doc(element) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  var postHtml = "</body></html>";
  var html = preHtml + document.getElementById(element).innerHTML + postHtml;
  var blob = new Blob(["\uFEFF", html], {
    type: 'application/msword'
  }); // Specify link url

  var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html); // Specify file name

  filename = filename ? filename + '.doc' : 'document.doc'; // Create download link element

  var downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = url; // Setting the file name

    downloadLink.download = filename; //triggering the function

    downloadLink.click();
  }

  document.body.removeChild(downloadLink);
}

var _default = Export2Doc;
exports.default = _default;
},{}],"js/makeTable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function buildTable(wordList) {
  console.log(wordList, 'from buildTable');
  var table = document.createElement('table');
  var headRow = document.createElement('tr');
  var enCell = document.createElement('td');
  enCell.textContent = 'English';
  var koCell = document.createElement('td');
  koCell.textContent = 'Korean';
  headRow.appendChild(enCell);
  headRow.appendChild(koCell);
  table.appendChild(headRow);
  console.log(table);

  for (var i = 0; i < wordList.length; i++) {
    var row = document.createElement('tr');
    row.ind = i;
    var cell1 = document.createElement('td');
    cell1.innerHTML = wordList[i].en;
    row.appendChild(cell1);
    var cell2 = document.createElement('td');
    cell2.textContent = wordList[i].ko;
    row.appendChild(cell2);
    table.appendChild(row);
  }

  return table;
}

var _default = buildTable;
exports.default = _default;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

require("../css/dropdwon.css");

require("../css/loader.css");

require("../css/style.css");

require("../css/navbar.css");

var _sheetIDs = _interopRequireDefault(require("../spreadSheet/sheetIDs"));

var _apiURLs = _interopRequireDefault(require("../spreadSheet/apiURLs"));

var _fetchSheetsLength = _interopRequireDefault(require("./fetchSheetsLength"));

var _exportToWords = _interopRequireDefault(require("./exportToWords"));

var _makeTable = _interopRequireDefault(require("./makeTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var myData = [];
var posts = {
  postPerpage: 10,
  currentPage: 0,
  results: null,
  currentSheetID: '1_Z_bti_Wk9g-t2IgxZGYvTpKXaZAqkFt3vDmw-1BU74',
  currentApiURL: 'https://script.google.com/macros/s/AKfycbyLoDyJGooiBIZhhC_R4IJDbKgz6yY8aknA5cZdj0LwAuzdSvFx/exec',
  currentDay: 0,
  currentActive: 1
}; // let firstLoad = true;

var printBtn = document.querySelector('.printer');
var exportContent = document.getElementById('exportContent');
var choices = document.querySelectorAll('.choice'); // Event Listeners

window.addEventListener('load', init);
document.querySelector('.shuffleWords').addEventListener('click', function (e) {
  document.querySelector('.game').innerHTML = '';
  loadPage(posts.currentPage);
  document.getElementById('mySidenav').style.width = '0';
});
printBtn.addEventListener('click', function (e) {
  makeTwoCopies(e);
});
choices.forEach(function (choice) {
  choice.addEventListener('click', function (e) {
    choices.forEach(function (choice) {
      choice.classList.remove('active');
    });
    document.getElementById('mySidenav').style.width = 0;
    document.querySelector('.game').innerHTML = '';
    document.querySelector('.open-box').style.display = 'none'; // document.querySelector('.showLevel').textContent = '';
    // document.querySelector('.showLevel').style.display = 'block';

    switch (this.dataset.level) {
      case '1':
        posts.currentSheetID = _sheetIDs.default["level-1"];
        posts.currentApiURL = _apiURLs.default['level-1'];
        posts.currentActive = this.dataset.level;
        (0, _fetchSheetsLength.default)(posts.currentApiURL, loadJSON); // document.querySelector('.showLevel').textContent = '고1';

        break;

      case '2':
        posts.currentSheetID = _sheetIDs.default["level-2"];
        posts.currentApiURL = _apiURLs.default['level-2'];
        posts.currentActive = this.dataset.level;
        (0, _fetchSheetsLength.default)(posts.currentApiURL, loadJSON); // document.querySelector('.showLevel').textContent = '고2';

        break;

      case '3':
        posts.currentSheetID = _sheetIDs.default["level-3"];
        posts.currentApiURL = _apiURLs.default['level-3'];
        posts.currentActive = this.dataset.level;
        (0, _fetchSheetsLength.default)(posts.currentApiURL, loadJSON); // document.querySelector('.showLevel').textContent = '고3';

        break;

      case '4':
        posts.currentSheetID = _sheetIDs.default['free'];
        posts.currentApiURL = _apiURLs.default['free'];
        posts.currentActive = this.dataset.level;
        (0, _fetchSheetsLength.default)(posts.currentApiURL, loadJSON);
      // document.querySelector('.showLevel').innerHTML = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
    }

    if (this.dataset.level === posts.currentActive) {
      choice.classList.add('active');
    }
  });
});

function init(e) {
  // Grid wrapper displaying message
  var div = document.createElement('div');
  div.setAttribute('class', 'message wrapper'); // div.innerText = 'Press start button';

  wrapper.appendChild(div); // Start button

  var button = document.createElement('button');
  button.type = button;
  button.setAttribute('class', 'start');
  button.textContent = "Start Study";
  button.addEventListener('click', function () {
    return (0, _fetchSheetsLength.default)(posts.currentApiURL, loadJSON);
  });
  wrapper.appendChild(button); // Game element

  var game = document.createElement('div');
  game.classList.add('game');
  wrapper.insertBefore(game, document.querySelector('.index'));
}

function loadJSON(sheetLength) {
  var urls = [];
  var sheetID = posts.currentSheetID;

  for (var sheetNum = 1; sheetNum <= sheetLength; sheetNum++) {
    var jsonURL = "https://spreadsheets.google.com/feeds/list/".concat(sheetID, "/").concat(sheetNum, "/public/values?alt=json");
    ;
    urls = [].concat(_toConsumableArray(urls), [jsonURL]);
  }

  Promise.all(urls.map(function (url) {
    return fetch(url).then(function (res) {
      return res.json();
    }).then(function (data) {
      var tempArr = [];
      var sheetName = data.feed.title.$t;
      data.feed.entry.forEach(function (item) {
        var holder = {};

        for (var key in item) {
          if (key.substring(4) === 'english') {
            holder.en = item[key].$t;
          } else if (key.substring(4) === 'korean') {
            holder.ko = item[key].$t;
          }
        }

        tempArr = [].concat(_toConsumableArray(tempArr), [holder]);
      });
      return tempArr;
    });
  })).then(function (result) {
    posts.results = result;
    loadPage(0, posts.results);
    document.querySelector('.loader').style.display = 'none';
  });
}

function loadPage(page) {
  document.getElementById('mySidenav').style.width = '300px';
  document.querySelector('.game').innerHTML = '';
  document.querySelector('.open-box').style.display = 'block';
  posts.currentPage = page;
  document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1; // if (firstLoad) {
  //     document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1;
  //     firstLoad = false;
  // } else {
  //     document.querySelector('.numday').innerHTML = parseInt(posts.currentPage);
  // }

  document.querySelector('.index').classList.remove('hidden');
  document.querySelector('.start').style.display = 'none';
  loadNav();
  loadNumbers();
  var myWords = shuffle(posts.results[page]);
  var game = document.querySelector('.game');
  myWords.forEach(function (word) {
    var box = document.createElement('div');
    box.classList.add('box');
    box.classList.add('tooltip-message');
    box.setAttribute('data-tooltip-message', word.en);
    box.innerText = word.en;
    box.addEventListener('mouseenter', function (e) {
      box.style.backgroundColor = "#4CAF50";
      box.innerText = word.ko;
      loadTooltips(e);
    });
    box.addEventListener('mouseleave', function (e) {
      box.style.backgroundColor = '#3b5998';
      box.innerText = word.en;
      var tooltipOutput = document.querySelector('.tooltip-output');
      tooltipOutput.style.display = 'none';
    });
    game.appendChild(box);
  });

  function add(a) {
    return a + 10;
  }

  function loadTooltips(event) {
    var tooltips = document.querySelectorAll('.tooltip-message');
    var tooltipOutput = document.querySelector('.tooltip-output');
    var myInterval; // clearInterval(myInterval);

    tooltipOutput.style.display = 'block';
    tooltipOutput.style.top = event.clientY + 5 + "px";
    tooltipOutput.style.left = event.clientX + 5 + "px";
    tooltipOutput.innerHTML = event.target.getAttribute("data-tooltip-message");
  }
}

function loadNumbers() {
  var firstRun = true;
  var numbers = document.querySelector('.numbers');
  numbers.innerHTML = '';
  posts.results.forEach(function (item, i) {
    var span = document.createElement('span');
    span.classList.add('number');
    span.textContent = i + 1;
    span.addEventListener('click', function (e) {
      numbers.innerHTML = '';
      document.querySelector('.game').innerHTML = '';
      loadPage(parseInt(this.textContent) - 1);
      posts.currentDay = this.textContent;
    });

    if (i + 1 == posts.currentPage + 1) {
      console.log(posts.currentPage);
      span.classList.add('active');
    }

    numbers.appendChild(span); // if ((parseInt(this.textContent) - 1) == posts.currentPage) {
    //     this.classList.add('isActive');
    // }
  });
}

function loadNav() {
  document.querySelector('.navbar').classList.remove('hidden');
  document.querySelector('.curday').innerHTML = "Day-".concat(parseInt(posts.currentPage) + 1, " in ").concat(posts.results.length);
  document.querySelector('.openbtn').addEventListener('click', function (e) {
    document.getElementById('mySidenav').style.width = '300px';
  });
  document.querySelector('.closebtn').addEventListener('click', function (e) {
    document.getElementById('mySidenav').style.width = '0';
  }, false);
}

function shuffle(arr) {
  var n = arr.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
}

function makeTwoCopies(event) {
  makeWordContent(event, "white");
  makeWordContent(event, "black");
}

function makeWordContent(event, color) {
  var numDay = document.querySelector('.numday').textContent;
  var index = parseInt(numDay) - 1;
  var dayWords = posts.results[index];
  exportContent.innerHTML = "<h3\n                                    style=\"text-align: center\"\n                                >\n                                    Day-".concat(index + 1, " TEST;\n                                </h3><br>");
  var tableHTML = "<table style=\"border: 1px solid black; border-collapse: collapse\">\n                        <tr>\n                            <td \n                                style=\"border: 1px solid black;\n                                       font-weight: bold;\n                                       text-align: center;\n                                       color: black \n                                \">\n                                English\n                                </td> \n                            <td \n                                style=\"border: 1px solid black;\n                                       font-weight: bold;\n                                       text-align: center;\n                                       color: black;\n                                \">\n                                Korean\n                                </td> \n                        </tr> \n                    ";
  var tableData = '';

  for (var i = 0; i < dayWords.length; i++) {
    var data = "<tr\">\n                        <td \n                            style=\" border: 1px solid black;\n                                    color: black;  \n                                   \"\n                          >\n                            ".concat(i + 1, ". ").concat(dayWords[i].en, "</td>\n                        <td \n                            style=\" border: 1px solid black;\n                                    color: ").concat(color, ";  \n                                   \"\n                           >\n                            ").concat(dayWords[i].ko, "</td>\n                     </tr>\n                     ");
    tableData += data;
  }

  tableHTML += tableData + '</table>';
  exportContent.innerHTML += tableHTML;
  (0, _exportToWords.default)('exportContent', "day-".concat(index + 1, ".test"));
  exportContent.innerHTML = '';
}
},{"../css/dropdwon.css":"css/dropdwon.css","../css/loader.css":"css/loader.css","../css/style.css":"css/style.css","../css/navbar.css":"css/navbar.css","../spreadSheet/sheetIDs":"spreadSheet/sheetIDs.js","../spreadSheet/apiURLs":"spreadSheet/apiURLs.js","./fetchSheetsLength":"js/fetchSheetsLength.js","./exportToWords":"js/exportToWords.js","./makeTable":"js/makeTable.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53053" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map