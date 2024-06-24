// ==UserScript==
// @name    Your lib name
// @namespace   https://path.com/your/lib/namespace
// @version 1.0.0
// @author  Your Name
// @description Your lib description
// @include https://www.example.com/*
// @copyright   2019, Your Org
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ContextMenu.ts":
/*!****************************!*\
  !*** ./src/ContextMenu.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.ContextMenu = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType[ActionType["button"] = 0] = "button";
    ActionType[ActionType["checkbox"] = 1] = "checkbox";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ContextMenu = /** @class */ (function () {
    function ContextMenu() {
        this.triggerTypeVisible = "mouseover";
        this.triggerTypeInvisible = "mouseleft";
        this.complexTriggerIn = false;
        this.complexTriggerOut = false;
        this.contextMenuQuery = ".contextMenu";
        this.actions = [];
    }
    ContextMenu.prototype.setComplexTriggerIn = function (complex) {
        this.complexTriggerInCondition = complex;
        this.complexTriggerIn = true;
    };
    ContextMenu.prototype.setComplexTriggerOut = function (complex) {
        this.complexTriggerOutCondition = complex;
        this.complexTriggerOut = true;
    };
    ContextMenu.prototype.addAction = function (action) {
        this.actions.push(action);
    };
    ContextMenu.prototype.addActions = function (actions) {
        var _a;
        (_a = this.actions).push.apply(_a, actions);
    };
    ContextMenu.prototype.buildContextMenu = function (item, e, options) {
        var _this = this;
        if (options === void 0) { options = {
            colorB: "#54C571", height: 40, borderWidth: 2, widthButton: 50,
            heightButton: 20, borderWidthButton: 1, radius: 4,
            minWidth: 100, xOffset: 120, xOffsetButton: 20, paddingButton: 1, duration: 1
        }; }
        if (this.complexTriggerIn == false) {
            item.addEventListener(this.triggerTypeVisible, function () {
                return _this.buildContextMenuWhenVisible(item, e, options);
            });
        }
        else {
            this.complexTriggerInCondition(item);
        }
    };
    ContextMenu.prototype.buildContextMenuWhenVisible = function (item, e, options, zIndex) {
        if (options === void 0) { options = {
            colorB: "#54C571", height: 40, borderWidth: 2, widthButton: 50,
            heightButton: 20, borderWidthButton: 1, radius: 4,
            minWidth: 100, xOffset: 120, xOffsetButton: 20, paddingButton: 1, duration: 1
        }; }
        if (zIndex === void 0) { zIndex = 1000; }
        var parent = document.querySelector(".container");
        if (parent) {
            var conMenu_1 = parent.querySelector(this.contextMenuQuery);
            if (conMenu_1 == null) {
                conMenu_1 = document.createElement("div");
                conMenu_1.classList.add(this.contextMenuQuery.slice(1));
                parent.appendChild(conMenu_1);
            }
            else {
                conMenu_1.innerHTML = "";
                conMenu_1.style.opacity = "1";
            }
            conMenu_1.style.overflow = "auto";
            conMenu_1.style.zIndex = zIndex.toString();
            conMenu_1.style.position = "absolute";
            conMenu_1.style.height = options.height.toString() + "px";
            conMenu_1.style.minWidth = options.minWidth + "px";
            conMenu_1.style.top = e.clientY.toString() + "px";
            conMenu_1.style.left = (e.clientX - options.xOffset).toString() + "px";
            conMenu_1.style.border = options.borderWidth.toString() + "px solid " + window.getComputedStyle(parent).getPropertyValue("--text-color").trim();
            conMenu_1.style.borderRadius = options.radius.toString() + "px";
            conMenu_1.style.backgroundColor = "var(--background-color)";
            this.actions.forEach(function (action, i) {
                var _this = this;
                var _a, _b, _c, _d, _e;
                var span = document.createElement("span");
                var textSpan = document.createElement("label");
                if (action.type == ActionType.checkbox) {
                    var actionCheckbox_1 = document.createElement("input");
                    var label_1 = document.createElement("label");
                    actionCheckbox_1.id = "actionId" + i;
                    actionCheckbox_1.style.opacity = "0";
                    actionCheckbox_1.type = "checkbox";
                    label_1.htmlFor = "actionId" + i;
                    textSpan.htmlFor = "actionId" + i;
                    span.style.backgroundColor = "var(--text-color)";
                    label_1.style.width = options.widthButton.toString() + "px";
                    label_1.style.height = options.heightButton.toString() + "px";
                    label_1.style.border = "1px solid currentColor";
                    label_1.style.padding = options.paddingButton.toString() + "px";
                    label_1.style.marginTop = ((options.height - options.heightButton) / 2).toString() + "px";
                    label_1.style.marginRight = ((options.height - options.heightButton) / 2).toString() + "px";
                    span.textContent = " ";
                    span.style.borderRadius = options.radius.toString() + "px";
                    span.style.height = (options.heightButton - 2 * options.paddingButton).toString() + "px";
                    span.style.width = (options.widthButton / 2).toString() + "px";
                    span.style.display = "inline-block";
                    label_1.style.display = "inline-block";
                    span.style.transform = options.duration.toString() + "s";
                    label_1.appendChild(span);
                    var isOn = action.initHandler ? action.initHandler(item) : false;
                    actionCheckbox_1.checked = isOn;
                    if (isOn) {
                        span.style.translate = options.xOffsetButton.toString() + "px 0px";
                        span.style.backgroundColor = options.colorB;
                        textSpan.style.color = options.colorB;
                        label_1.style.borderColor = options.colorB;
                        textSpan.textContent = (_a = action.emojiOn) !== null && _a !== void 0 ? _a : "" + action.textOn;
                    }
                    else {
                        span.style.translate = "0px 0px";
                        span.style.backgroundColor = "currentColor";
                        textSpan.style.color = "currentColor";
                        label_1.style.borderColor = "currentColor";
                        textSpan.textContent = (_d = (_c = (_b = action.emojiOff) !== null && _b !== void 0 ? _b : action.emojiOn) !== null && _c !== void 0 ? _c : "" + action.textOff) !== null && _d !== void 0 ? _d : action.textOn;
                    }
                    actionCheckbox_1.addEventListener("change", function () {
                        var _a, _b, _c, _d;
                        action.handler(item, e, actionCheckbox_1.checked);
                        if (actionCheckbox_1.checked) {
                            span.style.translate = options.xOffsetButton.toString() + "px 0px";
                            span.style.backgroundColor = options.colorB;
                            textSpan.style.color = options.colorB;
                            label_1.style.borderColor = options.colorB;
                            textSpan.textContent = (_a = action.emojiOn) !== null && _a !== void 0 ? _a : "" + action.textOn;
                        }
                        else {
                            span.style.translate = "0px 0px";
                            span.style.backgroundColor = "currentColor";
                            textSpan.style.color = "currentColor";
                            label_1.style.borderColor = "currentColor";
                            textSpan.textContent = (_d = (_c = (_b = action.emojiOff) !== null && _b !== void 0 ? _b : action.emojiOn) !== null && _c !== void 0 ? _c : "" + action.textOff) !== null && _d !== void 0 ? _d : action.textOn;
                        }
                    });
                    //  checkZombie.style,display="none";
                    conMenu_1.appendChild(actionCheckbox_1);
                    conMenu_1.appendChild(label_1);
                    conMenu_1.appendChild(textSpan);
                }
                else {
                    var actionButton = document.createElement("button");
                    actionButton.textContent = (_e = action.emojiOn) !== null && _e !== void 0 ? _e : "" + action.textOn;
                    if (action.initHandler) {
                        action.initHandler(conMenu_1);
                    }
                    actionButton.addEventListener("click", function () { return action.handler(); });
                    conMenu_1.appendChild(actionButton);
                }
                conMenu_1.appendChild(document.createElement("br"));
                if (this.complexTriggerOut === false) {
                    conMenu_1.addEventListener(this.triggerTypeInvisible, function (e) {
                        setTimeout(function () {
                            parent.querySelectorAll(_this.contextMenuQuery).forEach(function (elem) {
                                return elem.style.opacity = "0";
                            });
                        }, 500);
                    });
                }
                else {
                    this.complexTriggerOutCondition(conMenu_1);
                }
            });
        }
    };
    return ContextMenu;
}());
exports.ContextMenu = ContextMenu;


/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.UI = void 0;
var ContextMenu_1 = __webpack_require__(/*! ./ContextMenu */ "./src/ContextMenu.ts");
var UI = /** @class */ (function () {
    function UI() {
        this.contextMenus = [new ContextMenu_1.ContextMenu()];
        this.defaultContextMenuQuery = "";
        this.defaultModalQuery = "";
        this.instancesClass = "instances";
        this.itemsClass = "items-inner";
        this.defaultModalQuery = ".modal:nth-child(3)";
        this.defaultSettingsButtonQuery = ".settings-content";
    }
    UI.prototype.onObservingInstance = function (applyOnOneElement) {
        var instanceObserver = new MutationObserver(function (mutations) {
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                if (mutation.addedNodes.length > 0) {
                    for (var _a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                        var node = _b[_a];
                        if (node.id != "instance-0") {
                            applyOnOneElement(node);
                        }
                    }
                }
            }
        });
        instanceObserver.observe(document.getElementsByClassName(this.instancesClass)[0], {
            childList: true,
            subtree: true
        });
    };
    UI.prototype.onObservingItems = function (applyOnOneElement) {
        var instanceObserver = new MutationObserver(function (mutations) {
            for (var _i = 0, mutations_2 = mutations; _i < mutations_2.length; _i++) {
                var mutation = mutations_2[_i];
                if (mutation.addedNodes.length > 0) {
                    for (var _a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                        var node = _b[_a];
                        {
                            applyOnOneElement(node);
                        }
                    }
                }
            }
        });
        instanceObserver.observe(document.getElementsByClassName(this.instancesClass)[0], {
            childList: true,
            subtree: true
        });
    };
    return UI;
}());
exports.UI = UI;
;


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.data = void 0;
//source must be initiated with unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]
var data = /** @class */ (function () {
    function data() {
        this.source = null;
        this.expF = null;
    }
    //uW=unsafeWindow must be done from userscript
    data.prototype.addDataSource = function (uW, expF) {
        this.source = uW.$nuxt.$root.$children[2].$children[0].$children[0];
        this.expF = expF;
    };
    data.prototype.getElements = function () {
        return this.source._data.elements;
    };
    data.prototype.getInstances = function () {
        return this.source._data.instances;
    };
    data.prototype.onSorting = function (addSortingMethod) {
        var _this = this;
        if (addSortingMethod === void 0) { addSortingMethod = function (x) { return x; }; }
        var before = this.source._computedWatchers.sortedElements.getter;
        this.source._computedWatchers.sortedElements.getter = this.expF(function () {
            var previous = __spreadArray([], before(), true);
            return addSortingMethod(previous, _this.getElements());
        }, unsafeWindow);
    };
    data.prototype.onFiltering = function (addFilterMethodOnQuery) {
        var _this = this;
        if (addFilterMethodOnQuery === void 0) { addFilterMethodOnQuery = function (x, y) { return y(); }; }
        var before = this.source._computedWatchers.searchResults.getter;
        this.source._computedWatchers.searchResults.getter = this.expF(function () {
            var query = _this.source.searchQuery;
            return addFilterMethodOnQuery(query, before);
        }, unsafeWindow);
    };
    return data;
}());
exports.data = data;
;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.utils = void 0;
var utils = /** @class */ (function () {
    function utils() {
        this.userAddedMethods = [];
        this.ExportSaveButtonQuery = ".setting[for=import-save] + .setting";
        this.saveFileName = "infinitecraft.json";
    }
    utils.prototype.saveSaveFileOnPC = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var handleClick = HTMLElement.prototype.click;
            HTMLElement.prototype.click = function () { HTMLElement.prototype.click = handleClick; };
            var bodyObserver = new MutationObserver(function (mutations, observer) {
                for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                    var mutation = mutations_1[_i];
                    if (mutation.type !== "childList")
                        continue;
                    var anchor = Array.from(mutation.addedNodes).find(function (node) {
                        node.download === _this.saveFileName;
                    });
                    if (anchor)
                        return fetch(anchor.href).then(resolve);
                }
            });
            bodyObserver.observe(document.body, { childList: true, subtree: true });
            handleClick.call(document.querySelector(_this.ExportSaveButtonQuery));
            setTimeout(function () {
                bodyObserver.disconnect();
                reject("Timed out");
            }, 1500);
        });
    };
    utils.prototype.addFunction = function (name, callback) {
        this.userAddedMethods.push({ name: name, handler: callback });
    };
    return utils;
}());
exports.utils = utils;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/

exports.__esModule = true;
exports.$a = exports.Main = void 0;
var message = 'Hello, World!';
console.log(message);
var UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
var data_1 = __webpack_require__(/*! ./data */ "./src/data.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Main = /** @class */ (function () {
    function Main() {
        this.$ui = new UI_1.UI();
        this.$data = new data_1.data();
        this.$utils = new utils_1.utils();
    }
    return Main;
}());
exports.Main = Main;
exports.$a = new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLnVzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksVUFFVjtBQUZGLFdBQVksVUFBVTtJQUNsQiwrQ0FBUTtJQUFFLG1EQUFVO0FBQ3ZCLENBQUMsRUFGVSxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUVwQjtBQW9DRDtJQUFBO1FBQ1UsdUJBQWtCLEdBQVcsV0FBVyxDQUFDO1FBQ3pDLHlCQUFvQixHQUFXLFdBQVcsQ0FBQztRQUMzQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBSW5DLHFCQUFnQixHQUFXLGNBQWMsQ0FBQztRQUMxQyxZQUFPLEdBQWlCLEVBQUUsQ0FBQztJQXNNckMsQ0FBQztJQW5NRSx5Q0FBbUIsR0FBbkIsVUFBb0IsT0FBWTtRQUM3QixJQUFJLENBQUMseUJBQXlCLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUNELDBDQUFvQixHQUFwQixVQUFxQixPQUFZO1FBQzlCLElBQUksQ0FBQywwQkFBMEIsR0FBRyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLE1BQWtCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxnQ0FBVSxHQUFWLFVBQVcsT0FBcUI7O1FBQzdCLFVBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxXQUFJLE9BQU8sRUFBRTtJQUNqQyxDQUFDO0lBS0Qsc0NBQWdCLEdBQWhCLFVBQWlCLElBQVMsRUFBRSxDQUFNLEVBQUUsT0FJbkM7UUFKRCxpQkFtQkY7UUFuQnNDO1lBQ2pDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFO1lBQzVELFlBQVksRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ25ELFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7U0FDL0U7UUFDQSxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBRSxLQUFLLEVBQ2hDO1lBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBQztnQkFDOUMsWUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsT0FBTyxDQUFDO1lBQWhELENBQWdELENBR2xELENBQUM7U0FFRDthQUNEO1lBRUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1NBRXJDO0lBRUosQ0FBQztJQUVFLGlEQUEyQixHQUEzQixVQUE0QixJQUFTLEVBQUUsQ0FBTSxFQUFFLE9BSTlDLEVBQUUsTUFBYTtRQUorQjtZQUM1QyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRTtZQUM1RCxZQUFZLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUNuRCxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDO1NBQy9FO1FBQUUsc0NBQWE7UUFJYixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWxELElBQUcsTUFBTSxFQUFDO1lBQ1YsSUFBSSxTQUFPLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUUxRCxJQUFJLFNBQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2xCLFNBQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxTQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBTyxDQUFDLENBQUM7YUFDOUI7aUJBQ0k7Z0JBQ0YsU0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ1QsU0FBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2FBQzdDO1lBR2EsU0FBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ2pDLFNBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxTQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDckMsU0FBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDekQsU0FBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDbEQsU0FBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDakQsU0FBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDdEUsU0FBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9JLFNBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQy9ELFNBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLHlCQUF5QixDQUFDO1lBR3pFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUM7Z0JBQW5CLGlCQW1IcEI7O2dCQWhIRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUcvQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDckMsSUFBSSxnQkFBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JELElBQUksT0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLGdCQUFjLENBQUMsRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ25DLGdCQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQ25DLGdCQUFjLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztvQkFDakMsT0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUMvQixRQUFRLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLG1CQUFtQixDQUFDO29CQUNqRCxPQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDMUQsT0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQzVELE9BQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDO29CQUM5QyxPQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDOUQsT0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDeEYsT0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDMUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ3pGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztvQkFDcEMsT0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO29CQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztvQkFDekQsT0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBSyxDQUFDO29CQUM5RCxnQkFBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBRTlCLElBQUksSUFBSSxFQUFFO3dCQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsUUFBUSxDQUFDO3dCQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUM1QyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUN0QyxPQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUN6QyxRQUFRLENBQUMsV0FBVyxHQUFHLFlBQU0sQ0FBQyxPQUFPLG1DQUFFLEVBQUUsR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUMxRDt5QkFBTTt3QkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQzt3QkFDNUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO3dCQUN0QyxPQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7d0JBQ3pDLFFBQVEsQ0FBQyxXQUFXLEdBQUUsd0JBQU0sQ0FBQyxRQUFRLG1DQUFFLE1BQU0sQ0FBQyxPQUFPLG1DQUFFLEVBQUUsR0FBRSxNQUFNLENBQUMsT0FBTyxtQ0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUU3RjtvQkFNRCxnQkFBYyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTs7d0JBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxnQkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxJQUFJLGdCQUFjLENBQUMsT0FBTyxFQUFFOzRCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQzs0QkFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDNUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDdEMsT0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDekMsUUFBUSxDQUFDLFdBQVcsR0FBRyxZQUFNLENBQUMsT0FBTyxtQ0FBRSxFQUFFLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzt5QkFDMUQ7NkJBQU07NEJBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOzRCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7NEJBQzVDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQzs0QkFDdEMsT0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsY0FBYzs0QkFDeEMsUUFBUSxDQUFDLFdBQVcsR0FBRyx3QkFBTSxDQUFDLFFBQVEsbUNBQUUsTUFBTSxDQUFDLE9BQU8sbUNBQUUsRUFBRSxHQUFFLE1BQU0sQ0FBQyxPQUFPLG1DQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7eUJBRTlGO29CQUlKLENBQUMsQ0FBQyxDQUFDO29CQUlILHFDQUFxQztvQkFDckMsU0FBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBYyxDQUFDLENBQUM7b0JBQ3BDLFNBQU8sQ0FBQyxXQUFXLENBQUMsT0FBSyxDQUFDLENBQUM7b0JBQzNCLFNBQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBRWhDO3FCQUNGO29CQUNDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xELFlBQVksQ0FBQyxXQUFXLEdBQUMsWUFBTSxDQUFDLE9BQU8sbUNBQUUsRUFBRSxHQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQzFELElBQUcsTUFBTSxDQUFDLFdBQVcsRUFDcEI7d0JBQ0csTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFPLENBQUMsQ0FBQztxQkFDOUI7b0JBQ0QsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxjQUFJLGFBQU0sQ0FBQyxPQUFPLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO29CQUU3RCxTQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUVuQztnQkFFRCxTQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEQsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEtBQUcsS0FBSyxFQUFDO29CQUNsQyxTQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFVBQUMsQ0FBQzt3QkFFbkQsVUFBVSxDQUFDOzRCQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dDQUN6RCxPQUFjLElBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUc7NEJBQXZDLENBQXVDLENBQUMsQ0FBQzt3QkFFL0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUtYLENBQUMsQ0FBQyxDQUFDO2lCQUFDO3FCQUVKO29CQUNHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFPLENBQUMsQ0FBQztpQkFDM0M7WUFJSixDQUFDLENBQUMsQ0FBQztTQUdMO0lBQUEsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQS9NWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNyQ3pCLHFGQUErRDtBQUMvRDtJQU9HO1FBTk8saUJBQVksR0FBZSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7UUFFL0MsNEJBQXVCLEdBQVcsRUFBRSxDQUFDO1FBQ3JDLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixtQkFBYyxHQUFXLFdBQVcsQ0FBQztRQUNyQyxlQUFVLEdBQVcsYUFBYSxDQUFDO1FBRXZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsbUJBQW1CLENBQUM7SUFDekQsQ0FBQztJQUdELGdDQUFtQixHQUFuQixVQUFvQixpQkFBc0I7UUFDdkMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFVBQUMsU0FBUztZQUNyRCxLQUF1QixVQUFTLEVBQVQsdUJBQVMsRUFBVCx1QkFBUyxFQUFULElBQVMsRUFBRTtnQkFBN0IsSUFBTSxRQUFRO2dCQUNoQixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDakMsS0FBbUIsVUFBK0IsRUFBL0IsVUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQS9CLGNBQStCLEVBQS9CLElBQStCLEVBQUU7d0JBQS9DLElBQU0sSUFBSTt3QkFHWixJQUFrQixJQUFLLENBQUMsRUFBRSxJQUFJLFlBQVksRUFBRTs0QkFDekMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBRTFCO3FCQUNIO2lCQUNIO2FBQ0g7UUFJSixDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9FLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUk7U0FFZixDQUFDLENBQUM7SUFHTixDQUFDO0lBQ0QsNkJBQWdCLEdBQWhCLFVBQWlCLGlCQUFzQjtRQUNwQyxJQUFNLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBQyxTQUFTO1lBQ3JELEtBQXVCLFVBQVMsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUyxFQUFFO2dCQUE3QixJQUFNLFFBQVE7Z0JBQ2hCLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNqQyxLQUFtQixVQUErQixFQUEvQixVQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBL0IsY0FBK0IsRUFBL0IsSUFBK0IsRUFBRTt3QkFBL0MsSUFBTSxJQUFJO3dCQUNaOzRCQUNHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUUxQjtxQkFDSDtpQkFDSDthQUNIO1FBSUosQ0FBQyxDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvRSxTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1NBRWYsQ0FBQyxDQUFDO0lBR04sQ0FBQztJQUtKLFNBQUM7QUFBRCxDQUFDO0FBckVZLGdCQUFFO0FBcUVkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVGLCtGQUErRjtBQUMvRjtJQStDRTtRQTdDUyxXQUFNLEdBQUssSUFBSSxDQUFDO1FBQ2hCLFNBQUksR0FBSyxJQUFJLENBQUM7SUE4Q3RCLENBQUM7SUE3Q0YsOENBQThDO0lBRXpDLDRCQUFhLEdBQXBCLFVBQXFCLEVBQU0sRUFBQyxJQUFRO1FBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO0lBRWxCLENBQUM7SUFHUSwwQkFBVyxHQUFsQjtRQUVDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFDQywyQkFBWSxHQUFaO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNFLHdCQUFTLEdBQVQsVUFBVSxnQkFBd0M7UUFBbEQsaUJBT0Y7UUFQWSxnRUFBb0MsQ0FBQyxJQUFFLFFBQUMsRUFBRCxDQUFDO1FBRXJELElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5RCxJQUFJLFFBQVEscUJBQUssTUFBTSxFQUFFLE9BQUMsQ0FBQztZQUMzQixPQUFPLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVHLDBCQUFXLEdBQVgsVUFBWSxzQkFBNEQ7UUFBeEUsaUJBWUg7UUFaZSw0RUFBMkMsQ0FBSyxFQUFDLENBQUssSUFBRyxRQUFDLEVBQUUsRUFBSCxDQUFHO1FBRTVFLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3RCxJQUFJLEtBQUssR0FBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFJbEMsT0FBTyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFHNUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFFO0lBQ2pCLENBQUM7SUFTSCxXQUFDO0FBQUQsQ0FBQztBQXBEWSxvQkFBSTtBQW9EaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN2REY7SUFtQ0E7UUEvQlcscUJBQWdCLEdBQU8sRUFBRSxDQUFDO1FBQzFCLDBCQUFxQixHQUFTLHNDQUFzQyxDQUFDO1FBQ3JFLGlCQUFZLEdBQVEsb0JBQW9CLENBQUM7SUFnQ3BELENBQUM7SUE3QkcsZ0NBQWdCLEdBQWhCO1FBQUEsaUJBeUJIO1FBeEJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNoRCxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxjQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBQztZQUMvRSxJQUFNLFlBQVksR0FBRyxJQUFJLGdCQUFnQixDQUFDLFVBQUMsU0FBUyxFQUFFLFFBQVE7Z0JBQzFELEtBQXVCLFVBQVMsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUyxFQUFFO29CQUE3QixJQUFNLFFBQVE7b0JBQ2YsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFdBQVc7d0JBQUUsU0FBUztvQkFDNUMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTt3QkFJbkQsSUFBSyxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsWUFBWTtvQkFBQSxDQUFDLENBQUMsQ0FBQztvQkFJN0MsSUFBSSxNQUFNO3dCQUFFLE9BQU8sS0FBSyxDQUFxQixNQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM1RTtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN4RSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNyRSxVQUFVLENBQUM7Z0JBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMxQixNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUtELDJCQUFXLEdBQVgsVUFBWSxJQUFXLEVBQUMsUUFBWTtRQUVoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsWUFBQztBQUFELENBQUM7QUE1Q1ksc0JBQUs7Ozs7Ozs7VUNBbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQSxJQUFJLE9BQU8sR0FBVyxlQUFlLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQiwwREFBd0I7QUFDeEIsZ0VBQTRCO0FBQzVCLG1FQUE4QjtBQUM5QjtJQUtDO1FBRUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLE9BQUUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksYUFBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDO0FBYlksb0JBQUk7QUFjTixVQUFFLEdBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfbGlicmFyeV90b19qcy8uL3NyYy9Db250ZXh0TWVudS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2xpYnJhcnlfdG9fanMvLi9zcmMvVUkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9saWJyYXJ5X3RvX2pzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9saWJyYXJ5X3RvX2pzLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfbGlicmFyeV90b19qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2xpYnJhcnlfdG9fanMvLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBBY3Rpb25UeXBlIHtcclxuICAgIFwiYnV0dG9uXCIsIFwiY2hlY2tib3hcIlxyXG4gfVxyXG4gXHJcbiBleHBvcnQgaW50ZXJmYWNlIEFjdGlvbkZvcm0ge1xyXG4gICAgdGV4dE9uOiBzdHJpbmc7XHJcbiAgICB0ZXh0T2ZmPzogc3RyaW5nO1xyXG4gICAgZW1vamlPbj86c3RyaW5nO1xyXG4gICAgZW1vamlPZmY/OnN0cmluZztcclxuICAgIGhhbmRsZXI6IGFueTtcclxuICAgIGluaXRIYW5kbGVyPzogKHg6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiBcclxuIH1cclxuIFxyXG4gZXhwb3J0IGludGVyZmFjZSBDb250ZXh0TWVudVVpT3B0aW9ucyB7XHJcbiAgICBjb2xvckI6IFwiIzU0QzU3MVwiLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgd2lkdGhCdXR0b246IDUwXHJcbiAgICAsIGhlaWdodEJ1dHRvbjogMjAsXHJcbiAgICBib3JkZXJXaWR0aEJ1dHRvbjogMSxcclxuICAgIHJhZGl1czogNCxcclxuICAgIG1pbldpZHRoOiAxMDAsXHJcbiAgICB4T2Zmc2V0OiAxMjAsXHJcbiAgICB4T2Zmc2V0QnV0dG9uOiAyMCxcclxuICAgIHBhZGRpbmdCdXR0b246IDEsXHJcbiAgICBkdXJhdGlvbjogMVxyXG4gXHJcbiBcclxuIFxyXG4gfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gZXhwb3J0IGNsYXNzIENvbnRleHRNZW51IHtcclxuICAgIHB1YmxpYyB0cmlnZ2VyVHlwZVZpc2libGU6IHN0cmluZyA9IFwibW91c2VvdmVyXCI7XHJcbiAgICBwdWJsaWMgdHJpZ2dlclR5cGVJbnZpc2libGU6IHN0cmluZyA9IFwibW91c2VsZWZ0XCI7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VyT3V0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbjogYW55O1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VyT3V0Q29uZGl0aW9uOiBhbnk7XHJcbiBcclxuICAgIHB1YmxpYyBjb250ZXh0TWVudVF1ZXJ5OiBzdHJpbmcgPSBcIi5jb250ZXh0TWVudVwiO1xyXG4gICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbkZvcm1bXSA9IFtdO1xyXG4gXHJcbiBcclxuICAgIHNldENvbXBsZXhUcmlnZ2VySW4oY29tcGxleDogYW55KSB7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb24gPSBjb21wbGV4O1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlckluID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNldENvbXBsZXhUcmlnZ2VyT3V0KGNvbXBsZXg6IGFueSkge1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbiA9IGNvbXBsZXg7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0ID0gdHJ1ZTtcclxuICAgIH1cclxuIFxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbjogQWN0aW9uRm9ybSkge1xyXG4gICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbnMoYWN0aW9uczogQWN0aW9uRm9ybVtdKSB7XHJcbiAgICAgICB0aGlzLmFjdGlvbnMucHVzaCguLi5hY3Rpb25zKTtcclxuICAgIH1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gICAgYnVpbGRDb250ZXh0TWVudShpdGVtOiBhbnksIGU6IGFueSwgb3B0aW9uczogQ29udGV4dE1lbnVVaU9wdGlvbnMgPSB7XHJcbiAgICAgICBjb2xvckI6IFwiIzU0QzU3MVwiLCBoZWlnaHQ6IDQwLCBib3JkZXJXaWR0aDogMiwgd2lkdGhCdXR0b246IDUwXHJcbiAgICAgICAsIGhlaWdodEJ1dHRvbjogMjAsIGJvcmRlcldpZHRoQnV0dG9uOiAxLCByYWRpdXM6IDQsXHJcbiAgICAgICBtaW5XaWR0aDogMTAwLCB4T2Zmc2V0OiAxMjAsIHhPZmZzZXRCdXR0b246IDIwLCBwYWRkaW5nQnV0dG9uOiAxLCBkdXJhdGlvbjogMVxyXG4gICAgfSlcclxuIHsgICBpZih0aGlzLmNvbXBsZXhUcmlnZ2VySW49PWZhbHNlKVxyXG4gICAgeyAgaXRlbS5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJpZ2dlclR5cGVWaXNpYmxlLCgpPT5cclxuICAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudVdoZW5WaXNpYmxlKGl0ZW0sZSxvcHRpb25zKVxyXG4gXHJcbiBcclxuICAgICk7XHJcbiAgICBcclxuICAgIH1lbHNlXHJcbiAgICB7XHJcbiBcclxuICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb24oaXRlbSk7XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG4gfVxyXG4gXHJcbiAgICBidWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgIH0sIHpJbmRleCA9IDEwMDApIHtcclxuIFxyXG4gICAgICAgICBcclxuIFxyXG4gICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgIGlmKHBhcmVudCl7XHJcbiAgICAgICBsZXQgY29uTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGV4dE1lbnVRdWVyeSk7XHJcbiBcclxuICAgICAgIGlmIChjb25NZW51ID09IG51bGwpIHtcclxuICAgICAgICAgIGNvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgY29uTWVudS5jbGFzc0xpc3QuYWRkKHRoaXMuY29udGV4dE1lbnVRdWVyeS5zbGljZSgxKSk7XHJcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29uTWVudSk7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbk1lbnUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgfVxyXG4gXHJcbiBcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuekluZGV4ID0gekluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5taW5XaWR0aCA9IG9wdGlvbnMubWluV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnRvcCA9IGUuY2xpZW50WS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIG9wdGlvbnMueE9mZnNldCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyID0gb3B0aW9ucy5ib3JkZXJXaWR0aC50b1N0cmluZygpICsgXCJweCBzb2xpZCBcIiArIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGV4dC1jb2xvclwiKS50cmltKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMucmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuIFxyXG4gXHJcbiAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XHJcbiBcclxuIFxyXG4gICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgIGxldCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuIFxyXG4gXHJcbiAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gQWN0aW9uVHlwZS5jaGVja2JveCkge1xyXG4gICAgICAgICAgICAgbGV0IGFjdGlvbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guaWQgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgdGV4dFNwYW4uaHRtbEZvciA9IFwiYWN0aW9uSWRcIiArIGk7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGV4dC1jb2xvcilcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHRCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ0J1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luVG9wID0gKChvcHRpb25zLmhlaWdodCAtIG9wdGlvbnMuaGVpZ2h0QnV0dG9uKSAvIDIpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5SaWdodCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSAob3B0aW9ucy5oZWlnaHRCdXR0b24gLSAyICogb3B0aW9ucy5wYWRkaW5nQnV0dG9uKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IChvcHRpb25zLndpZHRoQnV0dG9uIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gb3B0aW9ucy5kdXJhdGlvbi50b1N0cmluZygpICsgXCJzXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgIGxldCBpc09uID0gYWN0aW9uLmluaXRIYW5kbGVyPyBhY3Rpb24uaW5pdEhhbmRsZXIoaXRlbSk6ZmFsc2U7XHJcbiAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5jaGVja2VkID0gaXNPbjtcclxuIFxyXG4gICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9YWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuIFxyXG4gICAgICAgICAgICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoaXRlbSwgZSwgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBvcHRpb25zLnhPZmZzZXRCdXR0b24udG9TdHJpbmcoKSArIFwicHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBcIjBweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPZmY/P2FjdGlvbi5lbW9qaU9uPz9cIlwiKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICB9KTtcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIC8vICBjaGVja1pvbWJpZS5zdHlsZSxkaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25DaGVja2JveCk7XHJcbiAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gXHJcbiAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50PWFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5pbml0SGFuZGxlcilcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5pbml0SGFuZGxlcihjb25NZW51KTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+YWN0aW9uLmhhbmRsZXIoKSk7XHJcbiBcclxuICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b24pO1xyXG4gXHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAgIGlmKHRoaXMuY29tcGxleFRyaWdnZXJPdXQ9PT1mYWxzZSl7XHJcbiAgICAgICAgICBjb25NZW51LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZUludmlzaWJsZSwgKGUpID0+IHtcclxuIFxyXG4gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRleHRNZW51UXVlcnkpLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50PmVsZW0pLnN0eWxlLm9wYWNpdHkgPSBcIjBcIik7XHJcbiBcclxuICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgIH0pO31cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24oY29uTWVudSk7XHJcbiAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICB9KTtcclxuIFxyXG4gXHJcbiAgICB9fVxyXG4gfSIsIlxyXG5pbXBvcnQge0NvbnRleHRNZW51LEFjdGlvblR5cGUsQWN0aW9uRm9ybX0gZnJvbSBcIi4vQ29udGV4dE1lbnVcIlxyXG5leHBvcnQgY2xhc3MgVUkge1xyXG4gICBwdWJsaWMgY29udGV4dE1lbnVzOkNvbnRleHRNZW51W109W25ldyBDb250ZXh0TWVudSgpXTtcclxuICAgcHVibGljIGRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5OiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBkZWZhdWx0Q29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGRlZmF1bHRNb2RhbFF1ZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICBwdWJsaWMgaW5zdGFuY2VzQ2xhc3M6IHN0cmluZyA9IFwiaW5zdGFuY2VzXCI7XHJcbiAgIHB1YmxpYyBpdGVtc0NsYXNzOiBzdHJpbmcgPSBcIml0ZW1zLWlubmVyXCI7XHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRNb2RhbFF1ZXJ5ID0gXCIubW9kYWw6bnRoLWNoaWxkKDMpXCI7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzQnV0dG9uUXVlcnkgPSBcIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiAgIH1cclxuXHJcblxyXG4gICBvbk9ic2VydmluZ0luc3RhbmNlKGFwcGx5T25PbmVFbGVtZW50OiBhbnkpIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICgoPEhUTUxFbGVtZW50Pm5vZGUpLmlkICE9IFwiaW5zdGFuY2UtMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFwcGx5T25PbmVFbGVtZW50KG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGluc3RhbmNlT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuaW5zdGFuY2VzQ2xhc3MpWzBdLCB7XHJcbiAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgIH1cclxuICAgb25PYnNlcnZpbmdJdGVtcyhhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcblxyXG5cclxuXHJcblxyXG59O1xyXG4iLCJcclxuaW1wb3J0ICogYXMgR00gZnJvbSBcImdyZWFzZW1vbmtleVwiO1xyXG4vL3NvdXJjZSBtdXN0IGJlIGluaXRpYXRlZCB3aXRoIHVuc2FmZVdpbmRvdy4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXVxyXG5leHBvcnQgY2xhc3MgZGF0YVxyXG57XHJcbiAgIHB1YmxpYyAgc291cmNlOmFueT1udWxsO1xyXG4gICBwdWJsaWMgIGV4cEY6YW55PW51bGw7XHJcbiAgLy91Vz11bnNhZmVXaW5kb3cgbXVzdCBiZSBkb25lIGZyb20gdXNlcnNjcmlwdFxyXG5cclxucHVibGljIGFkZERhdGFTb3VyY2UodVc6YW55LGV4cEY6YW55KVxyXG57IFxyXG4gICB0aGlzLnNvdXJjZT11Vy4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXVxyXG4gICB0aGlzLmV4cEY9ZXhwRjtcclxuXHJcbn1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50cygpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5zb3VyY2UuX2RhdGEuZWxlbWVudHM7XHJcbiAgfVxyXG4gICAgZ2V0SW5zdGFuY2VzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5pbnN0YW5jZXM7XHJcbiAgfVxyXG4gICAgIG9uU29ydGluZyhhZGRTb3J0aW5nTWV0aG9kOih4OmFueSx5OmFueSk9PmFueT14PT54KVxyXG4gIHtcclxuICBsZXQgYmVmb3JlPXRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNvcnRlZEVsZW1lbnRzLmdldHRlcjtcclxuICB0aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zb3J0ZWRFbGVtZW50cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuICBsZXQgcHJldmlvdXM9Wy4uLmJlZm9yZSgpXTtcclxuICByZXR1cm4gYWRkU29ydGluZ01ldGhvZChwcmV2aW91cyx0aGlzLmdldEVsZW1lbnRzKCkpO1xyXG4gIH0sdW5zYWZlV2luZG93KTtcclxuICB9XHJcbiAgXHJcbiAgICAgIG9uRmlsdGVyaW5nKGFkZEZpbHRlck1ldGhvZE9uUXVlcnk6KHg6YW55LHk6YW55KT0+YW55PSh4OmFueSx5OmFueSk9PnkoKSlcclxuICB7XHJcbiAgbGV0IGJlZm9yZT10aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zZWFyY2hSZXN1bHRzLmdldHRlcjtcclxuICB0aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zZWFyY2hSZXN1bHRzLmdldHRlcj10aGlzLmV4cEYoKCkgPT4ge1xyXG4gIGxldCBxdWVyeT0gdGhpcy5zb3VyY2Uuc2VhcmNoUXVlcnlcclxuIFxyXG4gXHJcbiBcclxuICByZXR1cm4gYWRkRmlsdGVyTWV0aG9kT25RdWVyeShxdWVyeSxiZWZvcmUpO1xyXG4gIFxyXG4gIFxyXG4gIH0sdW5zYWZlV2luZG93KSA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgfVxyXG5cclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIHV0aWxzXHJcbntcclxuXHJcblxyXG4gICAgcHVibGljIHVzZXJBZGRlZE1ldGhvZHM6YW55W109W107XHJcbiAgICBwdWJsaWMgRXhwb3J0U2F2ZUJ1dHRvblF1ZXJ5OnN0cmluZyA9XCIuc2V0dGluZ1tmb3I9aW1wb3J0LXNhdmVdICsgLnNldHRpbmdcIjtcclxuICAgIHB1YmxpYyBzYXZlRmlsZU5hbWU6c3RyaW5nPVwiaW5maW5pdGVjcmFmdC5qc29uXCI7XHJcblxyXG5cclxuICAgIHNhdmVTYXZlRmlsZU9uUEMoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrO1xyXG4gICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayA9ICgpID0+IHtIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSBoYW5kbGVDbGlja31cclxuICAgICAgICBjb25zdCBib2R5T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT09IFwiY2hpbGRMaXN0XCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKS5maW5kKChub2RlKSA9PntcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAoPGFueT5ub2RlKS5kb3dubG9hZCA9PT0gdGhpcy5zYXZlRmlsZU5hbWV9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yKSByZXR1cm4gZmV0Y2goKDxIVE1MQW5jaG9yRWxlbWVudD5hbmNob3IpLmhyZWYpLnRoZW4ocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcclxuICAgICAgICBoYW5kbGVDbGljay5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5FeHBvcnRTYXZlQnV0dG9uUXVlcnkpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm9keU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVqZWN0KFwiVGltZWQgb3V0XCIpXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdHJ1Y3RvcigpXHJcbntcclxuXHJcbn1cclxuYWRkRnVuY3Rpb24obmFtZTpzdHJpbmcsY2FsbGJhY2s6YW55KVxyXG57XHJcbiAgICB0aGlzLnVzZXJBZGRlZE1ldGhvZHMucHVzaCh7bmFtZTpuYW1lLGhhbmRsZXI6Y2FsbGJhY2t9KTtcclxufVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJsZXQgbWVzc2FnZTogc3RyaW5nID0gJ0hlbGxvLCBXb3JsZCEnO1xyXG5jb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuaW1wb3J0IHtVSX0gZnJvbSAgXCIuL1VJXCJcclxuaW1wb3J0IHtkYXRhfSBmcm9tICBcIi4vZGF0YVwiXHJcbmltcG9ydCB7dXRpbHN9IGZyb20gIFwiLi91dGlsc1wiXHJcbmV4cG9ydCBjbGFzcyBNYWluXHJcbntcclxuIHB1YmxpYyAkdWk6VUk7XHJcbiBwdWJsaWMgJGRhdGE6ZGF0YTtcclxuIHB1YmxpYyAkdXRpbHM6dXRpbHM7XHJcbiBjb25zdHJ1Y3RvcigpXHJcbiB7XHJcbiAgdGhpcy4kdWk9bmV3IFVJKCk7XHJcbiAgdGhpcy4kZGF0YT1uZXcgZGF0YSgpO1xyXG4gIHRoaXMuJHV0aWxzPW5ldyB1dGlscygpO1xyXG4gfVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGxldCAkYT1uZXcgTWFpbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==