// ==UserScript==
// @name    Community Lib
// @namespace   https://path.com/your/lib/namespace
// @version 1.0.0
// @author  Your Name
// @match https://neal.fun/infinite-craft/*
// @description Your lib description
// @include https://www.example.com/*
// @copyright   2024, Your Org
// ==/UserScript==
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Community"] = factory();
	else
		root["Community"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
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
        this.triggerTypeInvisible = "mouseleave";
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
        var _this = this;
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
            });
            if (this.complexTriggerOut == false) {
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
    data.prototype.addDataSource = function (expF, uW) {
        if (uW === void 0) { uW = self; }
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
exports.objectSource = exports.Main = void 0;
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
exports.objectSource = new Main();

})();

__webpack_exports__ = __webpack_exports__.objectSource;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLGFBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRixXQUFDO0FBQUQsQ0FBQztBQWJZLG9CQUFJO0FBZ0JOLG9CQUFZLEdBQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0NvbW11bml0eS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL0NvbnRleHRNZW51LnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNvbW11bml0eVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb21tdW5pdHlcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XHJcbiAgICBcImJ1dHRvblwiLCBcImNoZWNrYm94XCJcclxuIH1cclxuIFxyXG4gZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Gb3JtIHtcclxuICAgIHRleHRPbjogc3RyaW5nO1xyXG4gICAgdGV4dE9mZj86IHN0cmluZztcclxuICAgIGVtb2ppT24/OnN0cmluZztcclxuICAgIGVtb2ppT2ZmPzpzdHJpbmc7XHJcbiAgICBoYW5kbGVyOiBhbnk7XHJcbiAgICBpbml0SGFuZGxlcj86ICh4OiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlO1xyXG4gXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dE1lbnVVaU9wdGlvbnMge1xyXG4gICAgY29sb3JCOiBcIiM1NEM1NzFcIixcclxuICAgIGhlaWdodDogNDAsXHJcbiAgICBib3JkZXJXaWR0aDogMixcclxuICAgIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgLCBoZWlnaHRCdXR0b246IDIwLFxyXG4gICAgYm9yZGVyV2lkdGhCdXR0b246IDEsXHJcbiAgICByYWRpdXM6IDQsXHJcbiAgICBtaW5XaWR0aDogMTAwLFxyXG4gICAgeE9mZnNldDogMTIwLFxyXG4gICAgeE9mZnNldEJ1dHRvbjogMjAsXHJcbiAgICBwYWRkaW5nQnV0dG9uOiAxLFxyXG4gICAgZHVyYXRpb246IDFcclxuIFxyXG4gXHJcbiBcclxuIH1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIGV4cG9ydCBjbGFzcyBDb250ZXh0TWVudSB7XHJcbiAgICBwdWJsaWMgdHJpZ2dlclR5cGVWaXNpYmxlOiBzdHJpbmcgPSBcIm1vdXNlb3ZlclwiO1xyXG4gICAgcHVibGljIHRyaWdnZXJUeXBlSW52aXNpYmxlOiBzdHJpbmcgPSBcIm1vdXNlbGVhdmVcIjtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlckluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlckluQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb246IGFueTtcclxuIFxyXG4gICAgcHVibGljIGNvbnRleHRNZW51UXVlcnk6IHN0cmluZyA9IFwiLmNvbnRleHRNZW51XCI7XHJcbiAgICBwdWJsaWMgYWN0aW9uczogQWN0aW9uRm9ybVtdID0gW107XHJcbiBcclxuIFxyXG4gICAgc2V0Q29tcGxleFRyaWdnZXJJbihjb21wbGV4OiBhbnkpIHtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbiA9IGNvbXBsZXg7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0Q29tcGxleFRyaWdnZXJPdXQoY29tcGxleDogYW55KSB7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0Q29uZGl0aW9uID0gY29tcGxleDtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gXHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uOiBBY3Rpb25Gb3JtKSB7XHJcbiAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9ucyhhY3Rpb25zOiBBY3Rpb25Gb3JtW10pIHtcclxuICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKC4uLmFjdGlvbnMpO1xyXG4gICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiAgICBidWlsZENvbnRleHRNZW51KGl0ZW06IGFueSwgZTogYW55LCBvcHRpb25zOiBDb250ZXh0TWVudVVpT3B0aW9ucyA9IHtcclxuICAgICAgIGNvbG9yQjogXCIjNTRDNTcxXCIsIGhlaWdodDogNDAsIGJvcmRlcldpZHRoOiAyLCB3aWR0aEJ1dHRvbjogNTBcclxuICAgICAgICwgaGVpZ2h0QnV0dG9uOiAyMCwgYm9yZGVyV2lkdGhCdXR0b246IDEsIHJhZGl1czogNCxcclxuICAgICAgIG1pbldpZHRoOiAxMDAsIHhPZmZzZXQ6IDEyMCwgeE9mZnNldEJ1dHRvbjogMjAsIHBhZGRpbmdCdXR0b246IDEsIGR1cmF0aW9uOiAxXHJcbiAgICB9KVxyXG4geyAgIGlmKHRoaXMuY29tcGxleFRyaWdnZXJJbj09ZmFsc2UpXHJcbiAgICB7IFxyXG4gICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJpZ2dlclR5cGVWaXNpYmxlLCgpPT5cclxuICAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudVdoZW5WaXNpYmxlKGl0ZW0sZSxvcHRpb25zKVxyXG4gXHJcbiBcclxuICAgICk7XHJcbiAgICBcclxuICAgIH1lbHNlXHJcbiAgICB7XHJcbiBcclxuICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb24oaXRlbSk7XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG4gfVxyXG4gXHJcbiAgICBidWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgIH0sIHpJbmRleCA9IDEwMDApIHtcclxuIFxyXG4gICAgICAgICBcclxuIFxyXG4gICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgIGlmKHBhcmVudCl7XHJcbiAgICAgICBsZXQgY29uTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGV4dE1lbnVRdWVyeSk7XHJcbiBcclxuICAgICAgIGlmIChjb25NZW51ID09IG51bGwpIHtcclxuICAgICAgICAgIGNvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgY29uTWVudS5jbGFzc0xpc3QuYWRkKHRoaXMuY29udGV4dE1lbnVRdWVyeS5zbGljZSgxKSk7XHJcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29uTWVudSk7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbk1lbnUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgfVxyXG4gXHJcbiBcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuekluZGV4ID0gekluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5taW5XaWR0aCA9IG9wdGlvbnMubWluV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnRvcCA9IGUuY2xpZW50WS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIG9wdGlvbnMueE9mZnNldCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyID0gb3B0aW9ucy5ib3JkZXJXaWR0aC50b1N0cmluZygpICsgXCJweCBzb2xpZCBcIiArIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGV4dC1jb2xvclwiKS50cmltKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMucmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuIFxyXG4gXHJcbiAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XHJcbiBcclxuIFxyXG4gICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgIGxldCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuIFxyXG4gXHJcbiAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gQWN0aW9uVHlwZS5jaGVja2JveCkge1xyXG4gICAgICAgICAgICAgbGV0IGFjdGlvbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guaWQgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgdGV4dFNwYW4uaHRtbEZvciA9IFwiYWN0aW9uSWRcIiArIGk7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGV4dC1jb2xvcilcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHRCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ0J1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luVG9wID0gKChvcHRpb25zLmhlaWdodCAtIG9wdGlvbnMuaGVpZ2h0QnV0dG9uKSAvIDIpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5SaWdodCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSAob3B0aW9ucy5oZWlnaHRCdXR0b24gLSAyICogb3B0aW9ucy5wYWRkaW5nQnV0dG9uKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IChvcHRpb25zLndpZHRoQnV0dG9uIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gb3B0aW9ucy5kdXJhdGlvbi50b1N0cmluZygpICsgXCJzXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgIGxldCBpc09uID0gYWN0aW9uLmluaXRIYW5kbGVyPyBhY3Rpb24uaW5pdEhhbmRsZXIoaXRlbSk6ZmFsc2U7XHJcbiAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5jaGVja2VkID0gaXNPbjtcclxuIFxyXG4gICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9YWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuIFxyXG4gICAgICAgICAgICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoaXRlbSwgZSwgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBvcHRpb25zLnhPZmZzZXRCdXR0b24udG9TdHJpbmcoKSArIFwicHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBcIjBweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPZmY/P2FjdGlvbi5lbW9qaU9uPz9cIlwiKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICB9KTtcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIC8vICBjaGVja1pvbWJpZS5zdHlsZSxkaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25DaGVja2JveCk7XHJcbiAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gXHJcbiAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50PWFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5pbml0SGFuZGxlcilcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5pbml0SGFuZGxlcihjb25NZW51KTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+YWN0aW9uLmhhbmRsZXIoKSk7XHJcbiBcclxuICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b24pO1xyXG4gXHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBpZih0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0PT1mYWxzZSl7XHJcbiAgICAgICAgICBjb25NZW51LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZUludmlzaWJsZSwgKGUpID0+IHtcclxuIFxyXG4gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRleHRNZW51UXVlcnkpLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50PmVsZW0pLnN0eWxlLm9wYWNpdHkgPSBcIjBcIik7XHJcbiBcclxuICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgIH0pO31cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24oY29uTWVudSk7XHJcbiAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgXHJcbiBcclxuIFxyXG4gICAgfX1cclxuIH0iLCJcclxuaW1wb3J0IHtDb250ZXh0TWVudSxBY3Rpb25UeXBlLEFjdGlvbkZvcm19IGZyb20gXCIuL0NvbnRleHRNZW51XCJcclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuICAgcHVibGljIGNvbnRleHRNZW51czpDb250ZXh0TWVudVtdPVtuZXcgQ29udGV4dE1lbnUoKV07XHJcbiAgIHB1YmxpYyBkZWZhdWx0U2V0dGluZ3NCdXR0b25RdWVyeTogc3RyaW5nO1xyXG4gICBwdWJsaWMgZGVmYXVsdENvbnRleHRNZW51UXVlcnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgIHB1YmxpYyBkZWZhdWx0TW9kYWxRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGluc3RhbmNlc0NsYXNzOiBzdHJpbmcgPSBcImluc3RhbmNlc1wiO1xyXG4gICBwdWJsaWMgaXRlbXNDbGFzczogc3RyaW5nID0gXCJpdGVtcy1pbm5lclwiO1xyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5kZWZhdWx0TW9kYWxRdWVyeSA9IFwiLm1vZGFsOm50aC1jaGlsZCgzKVwiO1xyXG4gICAgICB0aGlzLmRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5ID0gXCIuc2V0dGluZ3MtY29udGVudFwiO1xyXG4gICB9XHJcblxyXG5cclxuICAgb25PYnNlcnZpbmdJbnN0YW5jZShhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ub2RlKS5pZCAhPSBcImluc3RhbmNlLTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcbiAgIG9uT2JzZXJ2aW5nSXRlbXMoYXBwbHlPbk9uZUVsZW1lbnQ6IGFueSkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYXBwbHlPbk9uZUVsZW1lbnQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbnN0YW5jZXNDbGFzcylbMF0sIHtcclxuICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxufTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIEdNIGZyb20gXCJncmVhc2Vtb25rZXlcIjtcclxuLy9zb3VyY2UgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB1bnNhZmVXaW5kb3cuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF1cclxuZXhwb3J0IGNsYXNzIGRhdGFcclxue1xyXG4gICBwdWJsaWMgIHNvdXJjZTphbnk9bnVsbDtcclxuICAgcHVibGljICBleHBGOmFueT1udWxsO1xyXG4gIC8vdVc9dW5zYWZlV2luZG93IG11c3QgYmUgZG9uZSBmcm9tIHVzZXJzY3JpcHRcclxuXHJcbnB1YmxpYyBhZGREYXRhU291cmNlKGV4cEY6YW55LHVXOmFueT1zZWxmKVxyXG57IFxyXG4gICB0aGlzLnNvdXJjZT11Vy4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXVxyXG4gICB0aGlzLmV4cEY9ZXhwRjtcclxuXHJcbn1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50cygpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5zb3VyY2UuX2RhdGEuZWxlbWVudHM7XHJcbiAgfVxyXG4gICAgZ2V0SW5zdGFuY2VzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5pbnN0YW5jZXM7XHJcbiAgfVxyXG4gICAgIG9uU29ydGluZyhhZGRTb3J0aW5nTWV0aG9kOih4OmFueSx5OmFueSk9PmFueT14PT54KVxyXG4gIHtcclxuICBsZXQgYmVmb3JlPXRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNvcnRlZEVsZW1lbnRzLmdldHRlcjtcclxuICB0aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zb3J0ZWRFbGVtZW50cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuICBsZXQgcHJldmlvdXM9Wy4uLmJlZm9yZSgpXTtcclxuICByZXR1cm4gYWRkU29ydGluZ01ldGhvZChwcmV2aW91cyx0aGlzLmdldEVsZW1lbnRzKCkpO1xyXG4gIH0sdW5zYWZlV2luZG93KTtcclxuICB9XHJcbiAgXHJcbiAgICAgIG9uRmlsdGVyaW5nKGFkZEZpbHRlck1ldGhvZE9uUXVlcnk6KHg6YW55LHk6YW55KT0+YW55PSh4OmFueSx5OmFueSk9PnkoKSlcclxuICB7XHJcbiAgbGV0IGJlZm9yZT10aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zZWFyY2hSZXN1bHRzLmdldHRlcjtcclxuICB0aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zZWFyY2hSZXN1bHRzLmdldHRlcj10aGlzLmV4cEYoKCkgPT4ge1xyXG4gIGxldCBxdWVyeT0gdGhpcy5zb3VyY2Uuc2VhcmNoUXVlcnlcclxuIFxyXG4gXHJcbiBcclxuICByZXR1cm4gYWRkRmlsdGVyTWV0aG9kT25RdWVyeShxdWVyeSxiZWZvcmUpO1xyXG4gIFxyXG4gIFxyXG4gIH0sdW5zYWZlV2luZG93KSA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgfVxyXG5cclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIHV0aWxzXHJcbntcclxuXHJcblxyXG4gICAgcHVibGljIHVzZXJBZGRlZE1ldGhvZHM6YW55W109W107XHJcbiAgICBwdWJsaWMgRXhwb3J0U2F2ZUJ1dHRvblF1ZXJ5OnN0cmluZyA9XCIuc2V0dGluZ1tmb3I9aW1wb3J0LXNhdmVdICsgLnNldHRpbmdcIjtcclxuICAgIHB1YmxpYyBzYXZlRmlsZU5hbWU6c3RyaW5nPVwiaW5maW5pdGVjcmFmdC5qc29uXCI7XHJcblxyXG5cclxuICAgIHNhdmVTYXZlRmlsZU9uUEMoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrO1xyXG4gICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayA9ICgpID0+IHtIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSBoYW5kbGVDbGlja31cclxuICAgICAgICBjb25zdCBib2R5T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT09IFwiY2hpbGRMaXN0XCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKS5maW5kKChub2RlKSA9PntcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAoPGFueT5ub2RlKS5kb3dubG9hZCA9PT0gdGhpcy5zYXZlRmlsZU5hbWV9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yKSByZXR1cm4gZmV0Y2goKDxIVE1MQW5jaG9yRWxlbWVudD5hbmNob3IpLmhyZWYpLnRoZW4ocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcclxuICAgICAgICBoYW5kbGVDbGljay5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5FeHBvcnRTYXZlQnV0dG9uUXVlcnkpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm9keU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVqZWN0KFwiVGltZWQgb3V0XCIpXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdHJ1Y3RvcigpXHJcbntcclxuXHJcbn1cclxuYWRkRnVuY3Rpb24obmFtZTpzdHJpbmcsY2FsbGJhY2s6YW55KVxyXG57XHJcbiAgICB0aGlzLnVzZXJBZGRlZE1ldGhvZHMucHVzaCh7bmFtZTpuYW1lLGhhbmRsZXI6Y2FsbGJhY2t9KTtcclxufVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJsZXQgbWVzc2FnZTogc3RyaW5nID0gJ0hlbGxvLCBXb3JsZCEnO1xyXG5jb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuaW1wb3J0IHtVSX0gZnJvbSAgXCIuL1VJXCJcclxuaW1wb3J0IHtkYXRhfSBmcm9tICBcIi4vZGF0YVwiXHJcbmltcG9ydCB7dXRpbHN9IGZyb20gIFwiLi91dGlsc1wiXHJcbmV4cG9ydCBjbGFzcyBNYWluXHJcbntcclxuIHB1YmxpYyAkdWk6VUk7XHJcbiBwdWJsaWMgJGRhdGE6ZGF0YTtcclxuIHB1YmxpYyAkdXRpbHM6dXRpbHM7XHJcbiBjb25zdHJ1Y3RvcigpXHJcbiB7XHJcbiAgdGhpcy4kdWk9bmV3IFVJKCk7XHJcbiAgdGhpcy4kZGF0YT1uZXcgZGF0YSgpO1xyXG4gIHRoaXMuJHV0aWxzPW5ldyB1dGlscygpO1xyXG4gfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IG9iamVjdFNvdXJjZTpNYWluPW5ldyBNYWluKCk7IFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=