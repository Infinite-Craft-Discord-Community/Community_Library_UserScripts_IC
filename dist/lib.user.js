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

/***/ "./src/ColorPicker.ts":
/*!****************************!*\
  !*** ./src/ColorPicker.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.ColorPicker = void 0;
var ColorPicker = /** @class */ (function () {
    function ColorPicker() {
    }
    ColorPicker.prototype.makeColorPicher = function (localColback) {
        if (localColback != null)
            this.callback = localColback;
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;
        var isMobile = ua.indexOf("android") > -1;
        var isWebOs = ua.indexOf("webos") > -1;
        var isIphone = ua.indexOf("iphone") > -1;
        var isIpad = ua.indexOf("ipad") > -1;
        var isLinux = ua.indexOf("linux") > -1;
        if ((isAndroid || isMobile || isLinux || isWebOs || isIphone || isIpad)) {
            var parent_1 = document.querySelector(".container");
            var diag_1 = document.createElement("dialog");
            var lr = document.createElement("label");
            lr.innerText = "R (0-255)";
            lr.style.color = "red";
            var lg = document.createElement("label");
            lg.innerText = "G (0-255)";
            lg.style.color = "green";
            var lb = document.createElement("label");
            lb.innerText = "B (0-255)";
            lb.style.color = "blue";
            var Previews = document.createElement("label");
            Previews.innerText = "Preview color";
            var previewDiv_1 = document.createElement("div");
            previewDiv_1.style.width = "100px";
            previewDiv_1.style.height = "100px";
            var ri_1 = document.createElement("input");
            ri_1.type = "number";
            ri_1.min = "0";
            ri_1.max = "255";
            ri_1.value = "0";
            var gi_1 = document.createElement("input");
            gi_1.type = "number";
            gi_1.min = "0";
            gi_1.max = "255";
            gi_1.value = "0";
            var bi_1 = document.createElement("input");
            bi_1.type = "number";
            bi_1.min = "0";
            bi_1.max = "255";
            bi_1.value = "0";
            var rgb2Hex_1 = function (s) { return s.match(/[0-9]+/g).reduce(function (a, b) { return a + (b | 256).toString(16).slice(1); }, '#'); };
            previewDiv_1.style.background = "rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")";
            ri_1.addEventListener("input", function (event) {
                // console.log("ri:",ri.value,"something");
                if (ri_1.value == "") {
                    ri_1.value = "0";
                }
                if (Number.parseInt(ri_1.value) < 0)
                    ri_1.value = "0";
                if (Number.parseInt(ri_1.value) > 255)
                    ri_1.value = "255";
                previewDiv_1.style.background = "rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")";
                this.pickedColor = rgb2Hex_1("rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")");
                console.log("oneColor:", this.pickedColor);
                this.callback(this.pickedColor);
            }.bind(this));
            gi_1.addEventListener("input", function (even) {
                console.log("gi:", gi_1.value, "something");
                if (gi_1.value == "") {
                    gi_1.value = "0";
                }
                if (Number.parseInt(gi_1.value) < 0)
                    gi_1.value = "0";
                if (Number.parseInt(gi_1.value) > 255)
                    gi_1.value = "255";
                previewDiv_1.style.background = "rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")";
                localStorage.setItem("saved_color", rgb2Hex_1("rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")"));
                this.pickedColor = rgb2Hex_1("rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")");
                console.log("oneColor:", this.pickedColor);
                this.callback(this.pickedColor);
            }.bind(this));
            bi_1.addEventListener("input", function (event) {
                console.log("bi:", bi_1.value, "something");
                if (bi_1.value == "") {
                    bi_1.value = "0";
                }
                if (Number.parseInt(bi_1.value) < 0)
                    bi_1.value = "0";
                if (Number.parseInt(bi_1.value) > 255)
                    bi_1.value = "255";
                previewDiv_1.style.background = "rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")";
                this.pickedColor = rgb2Hex_1("rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")");
                console.log("oneColor:", this.pickedColor);
                this.callback(this.pickedColor);
            }.bind(this));
            var closeButton = document.createElement("button");
            closeButton.appendChild(document.createTextNode("Close"));
            closeButton.addEventListener("click", function () {
                diag_1.close();
            });
            var inputDiv = document.createElement("div");
            var previewsDiv = document.createElement("div");
            var mainLogic = document.createElement("div");
            inputDiv.appendChild(lr);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(ri_1);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(lg);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(gi_1);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(lb);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(bi_1);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.style.float = "left";
            inputDiv.style.margin = "10px";
            mainLogic.appendChild(inputDiv);
            previewsDiv.appendChild(Previews);
            previewsDiv.appendChild(document.createElement("br"));
            previewsDiv.appendChild(previewDiv_1);
            previewsDiv.appendChild(document.createElement("br"));
            previewsDiv.style.float = "right";
            mainLogic.appendChild(previewsDiv);
            diag_1.appendChild(mainLogic);
            diag_1.appendChild(closeButton);
            diag_1.style.position = "absolute";
            diag_1.style.top = "33%";
            diag_1.style.left = "25%";
            diag_1.style.background = "var(--background-color)";
            diag_1.style.color = ("var(--text-color)").trim();
            if (parent_1)
                parent_1.appendChild(diag_1);
            diag_1.showModal();
        }
    };
    return ColorPicker;
}());
exports.ColorPicker = ColorPicker;


/***/ }),

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

/***/ "./src/MenuButton.ts":
/*!***************************!*\
  !*** ./src/MenuButton.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.MenuButton = void 0;
var MenuButton = /** @class */ (function () {
    function MenuButton(menuText, menuEmoji, initAction, options) {
        var _a;
        if (options === void 0) { options = []; }
        this.parentQuery = ".settings-content";
        this.menuText = "Click On Me";
        this.menuEmoji = "";
        this.hidden = true;
        this.buttonClass = "setting";
        this.initAction = function () { };
        this.menuText = menuText;
        this.initAction = initAction;
        this.menuEmoji = menuEmoji;
        (_a = this.options).push.apply(_a, options);
    }
    MenuButton.prototype.setOptions = function (options) {
        this.options = options;
    };
    MenuButton.prototype.addOption = function (option) {
        this.options.push(option);
    };
    MenuButton.prototype.buildButton = function (otherParent) {
        var parentDiv = document.querySelector(otherParent !== null && otherParent !== void 0 ? otherParent : this.parentQuery);
        var buttonDiv = document.createElement("div");
        var selectionDiv = document.createElement("div");
        var selectedP = document.createElement("p");
        var optionsDiv = document.createElement("div");
        optionsDiv.style.overflowY = "scroll";
        optionsDiv.style.height = "100px";
        buttonDiv.classList.add(this.buttonClass);
        this.options.forEach(function (option) {
            var _a;
            var optionDiv = document.createElement("div");
            optionDiv.appendChild(document.createTextNode((_a = option.optionText + " " + option.optionEmoji) !== null && _a !== void 0 ? _a : ""));
            optionDiv.style.whiteSpace = "nowrap";
            optionDiv.style.overflow = "hidden";
            optionDiv.addEventListener("click", function () {
                var _a;
                option.handler();
                selectedP.textContent = (_a = option.optionText + " " + option.optionEmoji) !== null && _a !== void 0 ? _a : "";
                ;
            });
            optionsDiv.appendChild(optionDiv);
        });
        selectedP.addEventListener("click", function () {
            selectionDiv.appendChild(optionsDiv);
            this.hidden = true;
        }, false);
        selectionDiv.appendChild(selectedP);
        selectionDiv.appendChild(document.createElement("hr"));
        buttonDiv.addEventListener("click", function () {
            if (this.hidden == true) {
                if (!buttonDiv.contains(selectionDiv))
                    buttonDiv.appendChild(selectionDiv);
                this.hidden = false;
            }
            else {
                if (selectionDiv.contains(optionsDiv))
                    selectionDiv.removeChild(optionsDiv);
                if (buttonDiv.contains(selectionDiv))
                    buttonDiv.removeChild(selectionDiv);
                this.hidden = true;
            }
        }, false);
        parentDiv.appendChild(buttonDiv);
        this.initAction();
        return buttonDiv;
    };
    return MenuButton;
}());
exports.MenuButton = MenuButton;


/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.UI = void 0;
var ContextMenu_1 = __webpack_require__(/*! ./ContextMenu */ "./src/ContextMenu.ts");
var MenuButton_1 = __webpack_require__(/*! ./MenuButton */ "./src/MenuButton.ts");
var ColorPicker_1 = __webpack_require__(/*! ./ColorPicker */ "./src/ColorPicker.ts");
var UI = /** @class */ (function () {
    function UI() {
        this.contextMenus = [new ContextMenu_1.ContextMenu()];
        this.menuButtons = [];
        this.colorPicker = new ColorPicker_1.ColorPicker();
        this.defaultContextMenuQuery = "";
        this.defaultModalQuery = "";
        this.instancesClass = "instances";
        this.itemsClass = "items-inner";
        this.defaultModalQuery = ".modal:nth-child(3)";
        this.defaultSettingsButtonQuery = ".settings-content";
    }
    UI.prototype.injectCSS = function (css) {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css.trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
    };
    UI.prototype.addAndBuildMenuButton = function (menuText, menuEmoji, initAction, options) {
        if (options === void 0) { options = []; }
        var mButton = new MenuButton_1.MenuButton(menuText, menuEmoji, initAction, options);
        this.menuButtons.push(mButton);
        return mButton.buildButton();
    };
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
//source must be initiated with unsafeWindow
var data = /** @class */ (function () {
    function data() {
        this.source = null;
        this.expF = null;
    }
    //uW=unsafeWindow must be done from userscript
    //expF=exportFunction
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
    data.prototype.onSorting = function (methodName, newSvg, addSortingMethod, addStyleChanges) {
        var _this = this;
        if (addSortingMethod === void 0) { addSortingMethod = function (x) { return x; }; }
        var before = this.source._computedWatchers.sortedElements.getter;
        this.source._computedWatchers.sortedElements.getter = this.expF(function () {
            if (_this.source.$nuxt.$root.$children[2].$children[0].$children[0]._data.sortBy === methodName) {
                var previous = __spreadArray([], before(), true);
                return addSortingMethod(previous, _this.getElements());
            }
            else {
                return before();
            }
        }, unsafeWindow);
        this.source.$nuxt.$root.$children[2].$children[0].$children[0].sorts.push(methodName);
        var sortButtonObserver = new MutationObserver(function (mutations) {
            if (_this.source.$nuxt.$root.$children[2].$children[0].$children[0]._data.sortBy === methodName) {
                var img_1 = document.querySelector(".sidebar-sort > img");
                if (img_1.src.trim() == "https://neal.fun/infinite-craft/" + methodName + ".svg") {
                    img_1.src = newSvg;
                    if (addStyleChanges != null) {
                        addStyleChanges(img_1, true);
                    }
                    //img.style.filter="none";
                }
            }
            else {
                addStyleChanges(img, false);
            }
        });
        var img = document.querySelector(".sidebar-sort > img");
        console.log(img, img.textContent);
        var config = { characterData: false, attributes: true, childList: false, subtree: false };
        sortButtonObserver.observe(img, config);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCwyQkFBVyxHQUFYLFVBQVksSUFBVyxFQUFDLFFBQVk7UUFFaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFlBQUM7QUFBRCxDQUFDO0FBNUNZLHNCQUFLOzs7Ozs7O1VDQWxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkEsSUFBSSxPQUFPLEdBQVcsZUFBZSxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsMERBQXdCO0FBQ3hCLGdFQUE0QjtBQUM1QixtRUFBOEI7QUFDOUI7SUFLQztRQUVDLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxPQUFFLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLGFBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRixXQUFDO0FBQUQsQ0FBQztBQWJZLG9CQUFJO0FBZ0JOLG9CQUFZLEdBQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0NvbW11bml0eS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL0NvbG9yUGlja2VyLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9Db250ZXh0TWVudS50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvTWVudUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvVUkudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL0NvbW11bml0eS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb21tdW5pdHlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ29tbXVuaXR5XCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBjbGFzcyBDb2xvclBpY2tlclxyXG57XHJcbiBwdWJsaWMgIGNhbGxiYWNrOmFueTtcclxuIHB1YmxpYyAgcGlja2VkQ29sb3I6c3RyaW5nO1xyXG5cclxubWFrZUNvbG9yUGljaGVyKGxvY2FsQ29sYmFjaz86YW55KVxyXG57XHJcbiAgIGlmKGxvY2FsQ29sYmFjayE9bnVsbClcclxuICAgIHRoaXMuY2FsbGJhY2s9bG9jYWxDb2xiYWNrO1xyXG4gICAgICBcclxuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciAgaXNBbmRyb2lkID0gdWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAtMTtcclxuICAgIHZhciAgaXNNb2JpbGUgPSB1YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IC0xO1xyXG4gICAgdmFyICBpc1dlYk9zID0gdWEuaW5kZXhPZihcIndlYm9zXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzSXBob25lID0gdWEuaW5kZXhPZihcImlwaG9uZVwiKSA+IC0xO1xyXG4gICAgdmFyICBpc0lwYWQgPSB1YS5pbmRleE9mKFwiaXBhZFwiKSA+IC0xO1xyXG4gICAgdmFyICBpc0xpbnV4ID0gdWEuaW5kZXhPZihcImxpbnV4XCIpID4gLTE7XHJcblxyXG4gIGlmKChpc0FuZHJvaWQgfHwgaXNNb2JpbGUgfHwgaXNMaW51eCB8fCBpc1dlYk9zIHx8IGlzSXBob25lIHx8IGlzSXBhZCkpXHJcbiAgICB7XHJcbiAgICAgICBsZXQgcGFyZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gICAgICAgbGV0IGRpYWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcclxuXHJcbiAgICAgICBsZXQgbHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgbHIuaW5uZXJUZXh0PVwiUiAoMC0yNTUpXCI7XHJcbiAgICAgICBsci5zdHlsZS5jb2xvcj1cInJlZFwiO1xyXG4gICAgICAgbGV0IGxnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIGxnLmlubmVyVGV4dD1cIkcgKDAtMjU1KVwiO1xyXG4gICAgICAgbGcuc3R5bGUuY29sb3I9XCJncmVlblwiO1xyXG4gICAgICAgbGV0IGxiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIGxiLmlubmVyVGV4dD1cIkIgKDAtMjU1KVwiO1xyXG4gICAgICAgbGIuc3R5bGUuY29sb3I9XCJibHVlXCI7XHJcbiAgICAgICBsZXQgUHJldmlld3M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgUHJldmlld3MuaW5uZXJUZXh0PVwiUHJldmlldyBjb2xvclwiO1xyXG4gICAgICAgbGV0IHByZXZpZXdEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUud2lkdGg9XCIxMDBweFwiO1xyXG4gICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5oZWlnaHQ9XCIxMDBweFwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICBsZXQgcmk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHJpLnR5cGU9XCJudW1iZXJcIjtcclxuICAgICAgICByaS5taW49XCIwXCI7XHJcbiAgICAgICAgcmkubWF4PVwiMjU1XCI7XHJcbiAgICAgICAgcmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICBsZXQgZ2k9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgZ2kudHlwZT1cIm51bWJlclwiO1xyXG4gICAgICAgZ2kubWluPVwiMFwiO1xyXG4gICAgICAgZ2kubWF4PVwiMjU1XCI7XHJcbiAgICAgICBnaS52YWx1ZT1cIjBcIjtcclxuICAgICAgIGxldCBiaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICBiaS50eXBlPVwibnVtYmVyXCI7XHJcbiAgICAgICBiaS5taW49XCIwXCI7XHJcbiAgICAgICBiaS5tYXg9XCIyNTVcIjtcclxuICAgICAgIGJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgbGV0IHJnYjJIZXggPSAoczphbnkpID0+IHMubWF0Y2goL1swLTldKy9nKS5yZWR1Y2UoKGE6YW55LCBiOmFueSkgPT4gYSsoYnwyNTYpLnRvU3RyaW5nKDE2KS5zbGljZSgxKSwgJyMnKTtcclxuICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuXHJcblxyXG4gICAgICAgICByaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVudDphbnkpe1xyXG5cclxuXHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmk6XCIscmkudmFsdWUsXCJzb21ldGhpbmdcIik7XHJcblxyXG4gICAgICAgICAgaWYocmkudmFsdWU9PVwiXCIpXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgIHJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQocmkudmFsdWUpPDApXHJcbiAgICAgICAgICAgICByaS52YWx1ZT1cIjBcIjtcclxuXHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQocmkudmFsdWUpPjI1NSlcclxuICAgICAgICAgICAgIHJpLnZhbHVlPVwiMjU1XCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuICAgICAgICAgdGhpcy5waWNrZWRDb2xvcj1yZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJvbmVDb2xvcjpcIix0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgZ2kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbjphbnkpe1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJnaTpcIixnaS52YWx1ZSxcInNvbWV0aGluZ1wiKTtcclxuXHJcbiAgICAgICAgIGlmKGdpLnZhbHVlPT1cIlwiKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICBnaS52YWx1ZT1cIjBcIjtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChnaS52YWx1ZSk8MClcclxuICAgICAgICAgICAgIGdpLnZhbHVlPVwiMFwiO1xyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGdpLnZhbHVlKT4yNTUpXHJcbiAgICAgICAgICAgICBnaS52YWx1ZT1cIjI1NVwiO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkX2NvbG9yXCIscmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIikpO1xyXG4gICAgICAgIHRoaXMucGlja2VkQ29sb3I9cmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib25lQ29sb3I6XCIsdGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICBiaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVudDphbnkpe1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmk6XCIsYmkudmFsdWUsXCJzb21ldGhpbmdcIik7XHJcbiAgICAgICAgICBpZihiaS52YWx1ZT09XCJcIilcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgYmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGJpLnZhbHVlKTwwKVxyXG4gICAgICAgICAgICAgIGJpLnZhbHVlPVwiMFwiO1xyXG5cclxuICAgICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoYmkudmFsdWUpPjI1NSlcclxuICAgICAgICAgICAgIGJpLnZhbHVlPVwiMjU1XCI7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcbiAgICAgICAgIHRoaXMucGlja2VkQ29sb3I9cmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib25lQ29sb3I6XCIsdGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcblxyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNsb3NlXCIpKTtcclxuICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICBkaWFnLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgbGV0IGlucHV0RGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBsZXQgcHJldmlld3NEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgIGxldCBtYWluTG9naWM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxyKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChyaSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobGcpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGdpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChsYik7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoYmkpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LnN0eWxlLmZsb2F0PVwibGVmdFwiO1xyXG4gICAgICAgaW5wdXREaXYuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICAgICBtYWluTG9naWMuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xyXG5cclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKFByZXZpZXdzKTtcclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChwcmV2aWV3RGl2KTtcclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5zdHlsZS5mbG9hdD1cInJpZ2h0XCI7XHJcbiAgICAgICBtYWluTG9naWMuYXBwZW5kQ2hpbGQocHJldmlld3NEaXYpO1xyXG4gICAgICAgZGlhZy5hcHBlbmRDaGlsZChtYWluTG9naWMpO1xyXG5cclxuICAgICAgIGRpYWcuYXBwZW5kQ2hpbGQoIGNsb3NlQnV0dG9uKTtcclxuICAgICAgIGRpYWcuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS50b3A9XCIzMyVcIjtcclxuICAgICAgIGRpYWcuc3R5bGUubGVmdD1cIjI1JVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS5iYWNrZ3JvdW5kPVwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuICAgICAgIGRpYWcuc3R5bGUuY29sb3I9KFwidmFyKC0tdGV4dC1jb2xvcilcIikudHJpbSgpO1xyXG4gICAgICAgaWYocGFyZW50KVxyXG4gICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpYWcpO1xyXG4gICAgICAgZGlhZy5zaG93TW9kYWwoKTtcclxufVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XHJcbiAgICBcImJ1dHRvblwiLCBcImNoZWNrYm94XCJcclxuIH1cclxuIFxyXG4gZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Gb3JtIHtcclxuICAgIHRleHRPbjogc3RyaW5nO1xyXG4gICAgdGV4dE9mZj86IHN0cmluZztcclxuICAgIGVtb2ppT24/OnN0cmluZztcclxuICAgIGVtb2ppT2ZmPzpzdHJpbmc7XHJcbiAgICBoYW5kbGVyOiBhbnk7XHJcbiAgICBpbml0SGFuZGxlcj86ICh4OiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlO1xyXG4gXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dE1lbnVVaU9wdGlvbnMge1xyXG4gICAgY29sb3JCOiBcIiM1NEM1NzFcIixcclxuICAgIGhlaWdodDogNDAsXHJcbiAgICBib3JkZXJXaWR0aDogMixcclxuICAgIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgLCBoZWlnaHRCdXR0b246IDIwLFxyXG4gICAgYm9yZGVyV2lkdGhCdXR0b246IDEsXHJcbiAgICByYWRpdXM6IDQsXHJcbiAgICBtaW5XaWR0aDogMTAwLFxyXG4gICAgeE9mZnNldDogMTIwLFxyXG4gICAgeE9mZnNldEJ1dHRvbjogMjAsXHJcbiAgICBwYWRkaW5nQnV0dG9uOiAxLFxyXG4gICAgZHVyYXRpb246IDFcclxuIFxyXG4gXHJcbiBcclxuIH1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIGV4cG9ydCBjbGFzcyBDb250ZXh0TWVudSB7XHJcbiAgICBwdWJsaWMgdHJpZ2dlclR5cGVWaXNpYmxlOiBzdHJpbmcgPSBcIm1vdXNlb3ZlclwiO1xyXG4gICAgcHVibGljIHRyaWdnZXJUeXBlSW52aXNpYmxlOiBzdHJpbmcgPSBcIm1vdXNlbGVhdmVcIjtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlckluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlckluQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb246IGFueTtcclxuIFxyXG4gICAgcHVibGljIGNvbnRleHRNZW51UXVlcnk6IHN0cmluZyA9IFwiLmNvbnRleHRNZW51XCI7XHJcbiAgICBwdWJsaWMgYWN0aW9uczogQWN0aW9uRm9ybVtdID0gW107XHJcbiBcclxuIFxyXG4gICAgc2V0Q29tcGxleFRyaWdnZXJJbihjb21wbGV4OiBhbnkpIHtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbiA9IGNvbXBsZXg7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0Q29tcGxleFRyaWdnZXJPdXQoY29tcGxleDogYW55KSB7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0Q29uZGl0aW9uID0gY29tcGxleDtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gXHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uOiBBY3Rpb25Gb3JtKSB7XHJcbiAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9ucyhhY3Rpb25zOiBBY3Rpb25Gb3JtW10pIHtcclxuICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKC4uLmFjdGlvbnMpO1xyXG4gICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiAgICBidWlsZENvbnRleHRNZW51KGl0ZW06IGFueSwgZTogYW55LCBvcHRpb25zOiBDb250ZXh0TWVudVVpT3B0aW9ucyA9IHtcclxuICAgICAgIGNvbG9yQjogXCIjNTRDNTcxXCIsIGhlaWdodDogNDAsIGJvcmRlcldpZHRoOiAyLCB3aWR0aEJ1dHRvbjogNTBcclxuICAgICAgICwgaGVpZ2h0QnV0dG9uOiAyMCwgYm9yZGVyV2lkdGhCdXR0b246IDEsIHJhZGl1czogNCxcclxuICAgICAgIG1pbldpZHRoOiAxMDAsIHhPZmZzZXQ6IDEyMCwgeE9mZnNldEJ1dHRvbjogMjAsIHBhZGRpbmdCdXR0b246IDEsIGR1cmF0aW9uOiAxXHJcbiAgICB9KVxyXG4geyAgIGlmKHRoaXMuY29tcGxleFRyaWdnZXJJbj09ZmFsc2UpXHJcbiAgICB7IFxyXG4gICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJpZ2dlclR5cGVWaXNpYmxlLCgpPT5cclxuICAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudVdoZW5WaXNpYmxlKGl0ZW0sZSxvcHRpb25zKVxyXG4gXHJcbiBcclxuICAgICk7XHJcbiAgICBcclxuICAgIH1lbHNlXHJcbiAgICB7XHJcbiBcclxuICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb24oaXRlbSk7XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG4gfVxyXG4gXHJcbiAgICBidWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgIH0sIHpJbmRleCA9IDEwMDApIHtcclxuIFxyXG4gICAgICAgICBcclxuIFxyXG4gICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgIGlmKHBhcmVudCl7XHJcbiAgICAgICBsZXQgY29uTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGV4dE1lbnVRdWVyeSk7XHJcbiBcclxuICAgICAgIGlmIChjb25NZW51ID09IG51bGwpIHtcclxuICAgICAgICAgIGNvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgY29uTWVudS5jbGFzc0xpc3QuYWRkKHRoaXMuY29udGV4dE1lbnVRdWVyeS5zbGljZSgxKSk7XHJcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29uTWVudSk7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbk1lbnUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgfVxyXG4gXHJcbiBcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuekluZGV4ID0gekluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5taW5XaWR0aCA9IG9wdGlvbnMubWluV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnRvcCA9IGUuY2xpZW50WS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIG9wdGlvbnMueE9mZnNldCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyID0gb3B0aW9ucy5ib3JkZXJXaWR0aC50b1N0cmluZygpICsgXCJweCBzb2xpZCBcIiArIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGV4dC1jb2xvclwiKS50cmltKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMucmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuIFxyXG4gXHJcbiAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XHJcbiBcclxuIFxyXG4gICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgIGxldCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuIFxyXG4gXHJcbiAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gQWN0aW9uVHlwZS5jaGVja2JveCkge1xyXG4gICAgICAgICAgICAgbGV0IGFjdGlvbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guaWQgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgdGV4dFNwYW4uaHRtbEZvciA9IFwiYWN0aW9uSWRcIiArIGk7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGV4dC1jb2xvcilcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHRCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ0J1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luVG9wID0gKChvcHRpb25zLmhlaWdodCAtIG9wdGlvbnMuaGVpZ2h0QnV0dG9uKSAvIDIpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5SaWdodCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSAob3B0aW9ucy5oZWlnaHRCdXR0b24gLSAyICogb3B0aW9ucy5wYWRkaW5nQnV0dG9uKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IChvcHRpb25zLndpZHRoQnV0dG9uIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gb3B0aW9ucy5kdXJhdGlvbi50b1N0cmluZygpICsgXCJzXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgIGxldCBpc09uID0gYWN0aW9uLmluaXRIYW5kbGVyPyBhY3Rpb24uaW5pdEhhbmRsZXIoaXRlbSk6ZmFsc2U7XHJcbiAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5jaGVja2VkID0gaXNPbjtcclxuIFxyXG4gICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9YWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuIFxyXG4gICAgICAgICAgICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoaXRlbSwgZSwgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBvcHRpb25zLnhPZmZzZXRCdXR0b24udG9TdHJpbmcoKSArIFwicHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBcIjBweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPZmY/P2FjdGlvbi5lbW9qaU9uPz9cIlwiKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICB9KTtcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIC8vICBjaGVja1pvbWJpZS5zdHlsZSxkaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25DaGVja2JveCk7XHJcbiAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gXHJcbiAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50PWFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5pbml0SGFuZGxlcilcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5pbml0SGFuZGxlcihjb25NZW51KTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+YWN0aW9uLmhhbmRsZXIoKSk7XHJcbiBcclxuICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b24pO1xyXG4gXHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBpZih0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0PT1mYWxzZSl7XHJcbiAgICAgICAgICBjb25NZW51LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZUludmlzaWJsZSwgKGUpID0+IHtcclxuIFxyXG4gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRleHRNZW51UXVlcnkpLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50PmVsZW0pLnN0eWxlLm9wYWNpdHkgPSBcIjBcIik7XHJcbiBcclxuICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgIH0pO31cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24oY29uTWVudSk7XHJcbiAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgXHJcbiBcclxuIFxyXG4gICAgfX1cclxuIH0iLCJcclxuZXhwb3J0IGludGVyZmFjZSBNZW51T3B0aW9uXHJcbntcclxuIFxyXG4gICAgb3B0aW9uVGV4dDpzdHJpbmc7XHJcbiAgICBvcHRpb25FbW9qaT86c3RyaW5nO1xyXG4gICAgaGFuZGxlcjphbnk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uXHJcbntcclxuIHB1YmxpYyBwYXJlbnRRdWVyeTpzdHJpbmc9XCIuc2V0dGluZ3MtY29udGVudFwiO1xyXG4gbWVudVRleHQ6c3RyaW5nPVwiQ2xpY2sgT24gTWVcIjtcclxuIG1lbnVFbW9qaTpzdHJpbmc9XCJcIjtcclxuIG9wdGlvbnM6TWVudU9wdGlvbltdO1xyXG4gaGlkZGVuOmJvb2xlYW49dHJ1ZTtcclxuIHB1YmxpYyBidXR0b25DbGFzczpzdHJpbmc9XCJzZXR0aW5nXCI7XHJcbiBwdWJsaWMgaW5pdEFjdGlvbjooKT0+dm9pZD0oKT0+e307XHJcbiBcclxuc2V0T3B0aW9ucyhvcHRpb25zOk1lbnVPcHRpb25bXSlcclxue1xyXG4gdGhpcy5vcHRpb25zPW9wdGlvbnM7XHJcbn1cclxuYWRkT3B0aW9uKG9wdGlvbjpNZW51T3B0aW9uKVxyXG57XHJcbiB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pO1xyXG59XHJcblxyXG5cclxuIGNvbnN0cnVjdG9yKG1lbnVUZXh0OmFueSxtZW51RW1vamk/OmFueSxpbml0QWN0aW9uPzphbnksb3B0aW9uczpNZW51T3B0aW9uW109W10pXHJcbiB7IFxyXG4gICAgdGhpcy5tZW51VGV4dD1tZW51VGV4dDtcclxuICAgIHRoaXMuaW5pdEFjdGlvbj1pbml0QWN0aW9uO1xyXG4gICAgdGhpcy5tZW51RW1vamk9bWVudUVtb2ppO1xyXG4gICAgdGhpcy5vcHRpb25zLnB1c2goLi4ub3B0aW9ucyk7XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG5idWlsZEJ1dHRvbihvdGhlclBhcmVudD86c3RyaW5nKVxyXG57XHJcbiBsZXQgcGFyZW50RGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3RoZXJQYXJlbnQ/P3RoaXMucGFyZW50UXVlcnkpO1xyXG4gbGV0IGJ1dHRvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gbGV0IHNlbGVjdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gbGV0IHNlbGVjdGVkUD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuIGxldCBvcHRpb25zRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBvcHRpb25zRGl2LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiO1xyXG4gb3B0aW9uc0Rpdi5zdHlsZS5oZWlnaHQ9XCIxMDBweFwiO1xyXG5cclxuXHJcbiBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCh0aGlzLmJ1dHRvbkNsYXNzKTtcclxuIFxyXG5cclxuIHRoaXMub3B0aW9ucy5mb3JFYWNoKCAob3B0aW9uKT0+e1xyXG5cclxuXHJcbiAgbGV0IG9wdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG9wdGlvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvcHRpb24ub3B0aW9uVGV4dCtcIiBcIitvcHRpb24ub3B0aW9uRW1vamk/P1wiXCIpKTtcclxuICBvcHRpb25EaXYuc3R5bGUud2hpdGVTcGFjZT1cIm5vd3JhcFwiO1xyXG4gIG9wdGlvbkRpdi5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiO1xyXG4gIG9wdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gIG9wdGlvbi5oYW5kbGVyKCk7XHJcbiAgc2VsZWN0ZWRQLnRleHRDb250ZW50PW9wdGlvbi5vcHRpb25UZXh0K1wiIFwiK29wdGlvbi5vcHRpb25FbW9qaT8/XCJcIjtcclxuICAgIDt9KTtcclxuXHJcbiAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChvcHRpb25EaXYpO1xyXG5cclxuXHJcbiB9KTtcclxuXHJcbiAgc2VsZWN0ZWRQLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvbnNEaXYpO1xyXG4gICAgICB0aGlzLmhpZGRlbj10cnVlO1xyXG5cclxuICB9LGZhbHNlKTtcclxuXHJcbiAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlbGVjdGVkUCk7XHJcbiAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKSk7XHJcblxyXG5cclxuICBidXR0b25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gIGlmKHRoaXMuaGlkZGVuPT10cnVlKVxyXG4gICAge1xyXG5cclxuICAgICAgICBpZighYnV0dG9uRGl2LmNvbnRhaW5zKHNlbGVjdGlvbkRpdikpXHJcbiAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uRGl2KTtcclxuXHJcbiAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG5cclxuICAgIH1lbHNlXHJcbiAgICAgIHsgICBpZihzZWxlY3Rpb25EaXYuY29udGFpbnMob3B0aW9uc0RpdikpXHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uRGl2LnJlbW92ZUNoaWxkKG9wdGlvbnNEaXYpO1xyXG5cclxuICAgICAgICAgaWYoYnV0dG9uRGl2LmNvbnRhaW5zKHNlbGVjdGlvbkRpdikpXHJcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5yZW1vdmVDaGlsZChzZWxlY3Rpb25EaXYpO1xyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgfSxmYWxzZSk7XHJcblxyXG5cclxuIHBhcmVudERpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG4gdGhpcy5pbml0QWN0aW9uKCk7XHJcbnJldHVybiBidXR0b25EaXY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSIsIlxyXG5pbXBvcnQge0NvbnRleHRNZW51LEFjdGlvblR5cGUsQWN0aW9uRm9ybX0gZnJvbSBcIi4vQ29udGV4dE1lbnVcIlxyXG5pbXBvcnQge01lbnVCdXR0b24sTWVudU9wdGlvbn0gZnJvbSBcIi4vTWVudUJ1dHRvblwiXHJcbmltcG9ydCB7Q29sb3JQaWNrZXJ9IGZyb20gXCIuL0NvbG9yUGlja2VyXCJcclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuXHJcbiAgIHB1YmxpYyBjb250ZXh0TWVudXM6Q29udGV4dE1lbnVbXT1bbmV3IENvbnRleHRNZW51KCldO1xyXG4gICBwdWJsaWMgbWVudUJ1dHRvbnM6TWVudUJ1dHRvbltdPVtdO1xyXG4gICBwdWJsaWMgY29sb3JQaWNrZXI6Q29sb3JQaWNrZXI9bmV3IENvbG9yUGlja2VyKCk7XHJcbiAgIHB1YmxpYyBkZWZhdWx0U2V0dGluZ3NCdXR0b25RdWVyeTogc3RyaW5nO1xyXG4gICBwdWJsaWMgZGVmYXVsdENvbnRleHRNZW51UXVlcnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgIHB1YmxpYyBkZWZhdWx0TW9kYWxRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGluc3RhbmNlc0NsYXNzOiBzdHJpbmcgPSBcImluc3RhbmNlc1wiO1xyXG4gICBwdWJsaWMgaXRlbXNDbGFzczogc3RyaW5nID0gXCJpdGVtcy1pbm5lclwiO1xyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5kZWZhdWx0TW9kYWxRdWVyeSA9IFwiLm1vZGFsOm50aC1jaGlsZCgzKVwiO1xyXG4gICAgICB0aGlzLmRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5ID0gXCIuc2V0dGluZ3MtY29udGVudFwiO1xyXG4gICB9XHJcblxyXG5cclxuICBpbmplY3RDU1MoY3NzOnN0cmluZylcclxue1xyXG4gICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MudHJpbSgpKSk7XHJcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4gIGFkZEFuZEJ1aWxkTWVudUJ1dHRvbihtZW51VGV4dDphbnksbWVudUVtb2ppPzphbnksaW5pdEFjdGlvbj86YW55LG9wdGlvbnM6TWVudU9wdGlvbltdPVtdKVxyXG4gIHsgICAgIGxldCBtQnV0dG9uPW5ldyBNZW51QnV0dG9uKG1lbnVUZXh0LG1lbnVFbW9qaSxpbml0QWN0aW9uLG9wdGlvbnMpXHJcbiAgICB0aGlzLm1lbnVCdXR0b25zLnB1c2gobUJ1dHRvbik7XHJcbiAgICByZXR1cm4gIG1CdXR0b24uYnVpbGRCdXR0b24oKTtcclxuXHJcbiAgfVxyXG5cclxuICAgb25PYnNlcnZpbmdJbnN0YW5jZShhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ub2RlKS5pZCAhPSBcImluc3RhbmNlLTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcbiAgIG9uT2JzZXJ2aW5nSXRlbXMoYXBwbHlPbk9uZUVsZW1lbnQ6IGFueSkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYXBwbHlPbk9uZUVsZW1lbnQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbnN0YW5jZXNDbGFzcylbMF0sIHtcclxuICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxufTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIEdNIGZyb20gXCJncmVhc2Vtb25rZXlcIjtcclxuLy9zb3VyY2UgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB1bnNhZmVXaW5kb3dcclxuZXhwb3J0IGNsYXNzIGRhdGFcclxue1xyXG4gICBwdWJsaWMgIHNvdXJjZTphbnk9bnVsbDtcclxuICAgcHVibGljICBleHBGOmFueT1udWxsO1xyXG5cclxuXHJcblxyXG4gIC8vdVc9dW5zYWZlV2luZG93IG11c3QgYmUgZG9uZSBmcm9tIHVzZXJzY3JpcHRcclxuICAvL2V4cEY9ZXhwb3J0RnVuY3Rpb25cclxuXHJcbnB1YmxpYyBhZGREYXRhU291cmNlKGV4cEY6YW55LHVXOmFueT1zZWxmKVxyXG57IFxyXG4gICB0aGlzLnNvdXJjZT11Vy4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXVxyXG4gICB0aGlzLmV4cEY9ZXhwRjtcclxuXHJcbn1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50cygpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5zb3VyY2UuX2RhdGEuZWxlbWVudHM7XHJcbiAgfVxyXG4gICAgZ2V0SW5zdGFuY2VzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5pbnN0YW5jZXM7XHJcbiAgfVxyXG4gICAgIG9uU29ydGluZyhtZXRob2ROYW1lOnN0cmluZyxuZXdTdmc6c3RyaW5nLGFkZFNvcnRpbmdNZXRob2Q6KHg6YW55LHk6YW55KT0+YW55PXg9PngsYWRkU3R5bGVDaGFuZ2VzPzphbnkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyO1xyXG5cclxuXHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyPXRoaXMuZXhwRigoKSA9PiB7XHJcblxyXG4gICBpZiAodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgIHtcclxuICAgICAgbGV0IHByZXZpb3VzPVsuLi5iZWZvcmUoKV07XHJcbiAgICAgIHJldHVybiBhZGRTb3J0aW5nTWV0aG9kKHByZXZpb3VzLHRoaXMuZ2V0RWxlbWVudHMoKSk7XHJcbiAgICAgfWVsc2VcclxuICAgICB7XHJcbiAgICAgICByZXR1cm4gYmVmb3JlKCk7XHJcblxyXG4gICAgIH1cclxuXHJcbiAgfSx1bnNhZmVXaW5kb3cpO1xyXG4gIFxyXG50aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5zb3J0cy5wdXNoKG1ldGhvZE5hbWUpO1xyXG5jb25zdCBzb3J0QnV0dG9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgIFxyXG5cclxuICAgICAgICAgaWYodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgICAgICAgIHsgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICBpZiggKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjLnRyaW0oKT09XCJodHRwczovL25lYWwuZnVuL2luZmluaXRlLWNyYWZ0L1wiK21ldGhvZE5hbWUrXCIuc3ZnXCIpXHJcbiAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjPW5ld1N2ZztcclxuICAgICAgICAgICAgICAgICBpZihhZGRTdHlsZUNoYW5nZXMhPW51bGwpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC8vaW1nLnN0eWxlLmZpbHRlcj1cIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfSk7XHJcblxyXG4gICAgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuICAgICAgIGNvbnNvbGUubG9nKGltZyxpbWcudGV4dENvbnRlbnQpXHJcbiAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcclxuICAgICAgIHNvcnRCdXR0b25PYnNlcnZlci5vYnNlcnZlKGltZyxjb25maWcpO1xyXG5cclxuXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICAgICBvbkZpbHRlcmluZyhhZGRGaWx0ZXJNZXRob2RPblF1ZXJ5Oih4OmFueSx5OmFueSk9PmFueT0oeDphbnkseTphbnkpPT55KCkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI7XHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuICBsZXQgcXVlcnk9IHRoaXMuc291cmNlLnNlYXJjaFF1ZXJ5XHJcbiBcclxuIFxyXG4gXHJcbiAgcmV0dXJuIGFkZEZpbHRlck1ldGhvZE9uUXVlcnkocXVlcnksYmVmb3JlKTtcclxuICBcclxuICBcclxuICB9LHVuc2FmZVdpbmRvdykgO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgIH1cclxuXHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyB1dGlsc1xyXG57XHJcblxyXG5cclxuICAgIHB1YmxpYyB1c2VyQWRkZWRNZXRob2RzOmFueVtdPVtdO1xyXG4gICAgcHVibGljIEV4cG9ydFNhdmVCdXR0b25RdWVyeTpzdHJpbmcgPVwiLnNldHRpbmdbZm9yPWltcG9ydC1zYXZlXSArIC5zZXR0aW5nXCI7XHJcbiAgICBwdWJsaWMgc2F2ZUZpbGVOYW1lOnN0cmluZz1cImluZmluaXRlY3JhZnQuanNvblwiO1xyXG5cclxuXHJcbiAgICBzYXZlU2F2ZUZpbGVPblBDKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVDbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcclxuICAgICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSAoKSA9PiB7SFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrID0gaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY29uc3QgYm9keU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucywgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlICE9PSBcImNoaWxkTGlzdFwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvciA9IEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykuZmluZCgobm9kZSkgPT57XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgKDxhbnk+bm9kZSkuZG93bmxvYWQgPT09IHRoaXMuc2F2ZUZpbGVOYW1lfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGFuY2hvcikgcmV0dXJuIGZldGNoKCg8SFRNTEFuY2hvckVsZW1lbnQ+YW5jaG9yKS5ocmVmKS50aGVuKHJlc29sdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYm9keU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XHJcbiAgICAgICAgaGFuZGxlQ2xpY2suY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuRXhwb3J0U2F2ZUJ1dHRvblF1ZXJ5KSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHlPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHJlamVjdChcIlRpbWVkIG91dFwiKVxyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3RydWN0b3IoKVxyXG57XHJcblxyXG59XHJcbmFkZEZ1bmN0aW9uKG5hbWU6c3RyaW5nLGNhbGxiYWNrOmFueSlcclxue1xyXG4gICAgdGhpcy51c2VyQWRkZWRNZXRob2RzLnB1c2goe25hbWU6bmFtZSxoYW5kbGVyOmNhbGxiYWNrfSk7XHJcbn1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwibGV0IG1lc3NhZ2U6IHN0cmluZyA9ICdIZWxsbywgV29ybGQhJztcclxuY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbmltcG9ydCB7VUl9IGZyb20gIFwiLi9VSVwiXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSAgXCIuL2RhdGFcIlxyXG5pbXBvcnQge3V0aWxzfSBmcm9tICBcIi4vdXRpbHNcIlxyXG5leHBvcnQgY2xhc3MgTWFpblxyXG57XHJcbiBwdWJsaWMgJHVpOlVJO1xyXG4gcHVibGljICRkYXRhOmRhdGE7XHJcbiBwdWJsaWMgJHV0aWxzOnV0aWxzO1xyXG4gY29uc3RydWN0b3IoKVxyXG4ge1xyXG4gIHRoaXMuJHVpPW5ldyBVSSgpO1xyXG4gIHRoaXMuJGRhdGE9bmV3IGRhdGEoKTtcclxuICB0aGlzLiR1dGlscz1uZXcgdXRpbHMoKTtcclxuIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBvYmplY3RTb3VyY2U6TWFpbj1uZXcgTWFpbigpOyBcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9