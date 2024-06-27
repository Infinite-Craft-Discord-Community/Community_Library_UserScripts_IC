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
            conMenu_1.style.height = "fit-content";
            conMenu_1.style.overflow = "auto";
            conMenu_1.style.zIndex = zIndex.toString();
            conMenu_1.style.position = "absolute";
            // (<HTMLElement>conMenu).style.height = options.height.toString() + "px";
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
                    var actionButton_1 = document.createElement("button");
                    actionButton_1.style.width = "100%";
                    actionButton_1.textContent = (_e = action.emojiOn) !== null && _e !== void 0 ? _e : "" + action.textOn;
                    if (action.initHandler) {
                        action.initHandler(conMenu_1);
                    }
                    actionButton_1.style.backgroundColor = "var(--background-color)";
                    actionButton_1.style.color = "var(--text-color)";
                    actionButton_1.addEventListener("mousedown", function () {
                        var _a, _b, _c;
                        actionButton_1.style.backgroundColor = options.colorB;
                        actionButton_1.textContent = (_c = ((_b = (_a = action.emojiOff) !== null && _a !== void 0 ? _a : action.emojiOn) !== null && _b !== void 0 ? _b : "") + action.textOff) !== null && _c !== void 0 ? _c : action.textOn;
                    });
                    actionButton_1.addEventListener("mouseup", function () {
                        var _a;
                        actionButton_1.style.backgroundColor = "var(--background-color)";
                        actionButton_1.textContent = ((_a = action.emojiOn) !== null && _a !== void 0 ? _a : "") + action.textOn;
                    });
                    actionButton_1.addEventListener("click", function () { return action.handler(); });
                    conMenu_1.appendChild(actionButton_1);
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
        this.options = [];
        this.hiddenObject = true;
        this.buttonClass = "setting";
        this.initAction = function () { return 0; };
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
        buttonDiv.classList.add("menu-button");
        buttonDiv.appendChild(document.createTextNode(this.menuText + " " + (this.menuEmoji == null ? "" : this.menuEmoji)));
        buttonDiv.style.height = "fit-content";
        var selectionDiv = document.createElement("div");
        var selectedP = document.createElement("p");
        var optionsDiv = document.createElement("div");
        optionsDiv.classList.add("menu-button-options");
        optionsDiv.style.overflowY = "scroll";
        optionsDiv.style.height = "100px";
        buttonDiv.classList.add(this.buttonClass);
        var css = "\n .menu-button-option:hover\n     {\n       background:gray;\n\n     }\n\n.menu-button\n{\n\nscrollbar-width: none;\n\n}\n.menu-button-options {\n    overflow-y: scroll;\n    scrollbar-width: none; /* Firefox */\n    -ms-overflow-style: none;  /* Internet Explorer 10+ */}\n .menu-button-options::-webkit-scrollbar { /* WebKit */\n    width: 0;\n    height: 0;}\n";
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css.trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var indexOption = 0;
        if (this.initAction)
            indexOption = this.initAction();
        console.log("indexOption:", indexOption, "options:", this.options);
        selectedP.textContent = this.options[indexOption].optionText + " " + (this.options[indexOption].optionEmoji == null ? "" : this.options[indexOption].optionEmoji);
        this.options.forEach(function (option) {
            var optionDiv = document.createElement("div");
            optionDiv.classList.add("menu-button-option");
            optionDiv.appendChild(document.createTextNode(option.optionText + " " + (option.optionEmoji == null ? "" : option.optionEmoji)));
            optionDiv.style.whiteSpace = "nowrap";
            optionDiv.style.overflow = "hidden";
            optionDiv.addEventListener("mouseenter", function () { optionDiv.style.backgroundColor = "gray"; });
            optionDiv.addEventListener("mouseleave", function () { optionDiv.style.backgroundColor = "var(--background-color)"; });
            optionDiv.addEventListener("click", function () {
                option.handler();
                selectedP.textContent = option.optionText + " " + (option.optionEmoji == null ? "" : option.optionEmoji);
                ;
            });
            optionsDiv.appendChild(optionDiv);
        });
        selectedP.addEventListener("click", function () {
            selectionDiv.appendChild(optionsDiv);
            this.hiddenObject = true;
        }.bind(this), false);
        selectionDiv.appendChild(selectedP);
        selectionDiv.appendChild(document.createElement("hr"));
        buttonDiv.addEventListener("click", function () {
            if (this.hiddenObject == true) {
                console.log("got here");
                if (!buttonDiv.contains(selectionDiv))
                    buttonDiv.appendChild(selectionDiv);
                this.hiddenObject = false;
            }
            else {
                if (selectionDiv.contains(optionsDiv))
                    selectionDiv.removeChild(optionsDiv);
                if (buttonDiv.contains(selectionDiv))
                    buttonDiv.removeChild(selectionDiv);
                this.hiddenObject = true;
            }
        }.bind(this), false);
        parentDiv.appendChild(buttonDiv);
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
        this.toggleButtons = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztZQUNyRSxVQUFVLENBQUM7Z0JBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMxQixNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUtELDJCQUFXLEdBQVgsVUFBWSxJQUFXLEVBQUMsUUFBWTtRQUVoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsWUFBQztBQUFELENBQUM7QUE1Q1ksc0JBQUs7Ozs7Ozs7VUNBbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQSxJQUFJLE9BQU8sR0FBVyxlQUFlLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQiwwREFBd0I7QUFDeEIsZ0VBQTRCO0FBQzVCLG1FQUE4QjtBQUM5QjtJQUtDO1FBRUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLE9BQUUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksYUFBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDO0FBYlksb0JBQUk7QUFnQk4sb0JBQVksR0FBTSxJQUFJLElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29tbXVuaXR5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvQ29sb3JQaWNrZXIudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL0NvbnRleHRNZW51LnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9NZW51QnV0dG9uLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNvbW11bml0eVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb21tdW5pdHlcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyXHJcbntcclxuIHB1YmxpYyAgY2FsbGJhY2s6YW55O1xyXG4gcHVibGljICBwaWNrZWRDb2xvcjpzdHJpbmc7XHJcblxyXG5tYWtlQ29sb3JQaWNoZXIobG9jYWxDb2xiYWNrPzphbnkpXHJcbntcclxuICAgaWYobG9jYWxDb2xiYWNrIT1udWxsKVxyXG4gICAgdGhpcy5jYWxsYmFjaz1sb2NhbENvbGJhY2s7XHJcbiAgICAgIFxyXG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyICBpc0FuZHJvaWQgPSB1YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IC0xO1xyXG4gICAgdmFyICBpc01vYmlsZSA9IHVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzV2ViT3MgPSB1YS5pbmRleE9mKFwid2Vib3NcIikgPiAtMTtcclxuICAgIHZhciAgaXNJcGhvbmUgPSB1YS5pbmRleE9mKFwiaXBob25lXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzSXBhZCA9IHVhLmluZGV4T2YoXCJpcGFkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzTGludXggPSB1YS5pbmRleE9mKFwibGludXhcIikgPiAtMTtcclxuXHJcbiAgaWYoKGlzQW5kcm9pZCB8fCBpc01vYmlsZSB8fCBpc0xpbnV4IHx8IGlzV2ViT3MgfHwgaXNJcGhvbmUgfHwgaXNJcGFkKSlcclxuICAgIHtcclxuICAgICAgIGxldCBwYXJlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgICAgICBsZXQgZGlhZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG5cclxuICAgICAgIGxldCBscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsci5pbm5lclRleHQ9XCJSICgwLTI1NSlcIjtcclxuICAgICAgIGxyLnN0eWxlLmNvbG9yPVwicmVkXCI7XHJcbiAgICAgICBsZXQgbGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgbGcuaW5uZXJUZXh0PVwiRyAoMC0yNTUpXCI7XHJcbiAgICAgICBsZy5zdHlsZS5jb2xvcj1cImdyZWVuXCI7XHJcbiAgICAgICBsZXQgbGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgbGIuaW5uZXJUZXh0PVwiQiAoMC0yNTUpXCI7XHJcbiAgICAgICBsYi5zdHlsZS5jb2xvcj1cImJsdWVcIjtcclxuICAgICAgIGxldCBQcmV2aWV3cz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBQcmV2aWV3cy5pbm5lclRleHQ9XCJQcmV2aWV3IGNvbG9yXCI7XHJcbiAgICAgICBsZXQgcHJldmlld0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS53aWR0aD1cIjEwMHB4XCI7XHJcbiAgICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmhlaWdodD1cIjEwMHB4XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgIGxldCByaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgcmkudHlwZT1cIm51bWJlclwiO1xyXG4gICAgICAgIHJpLm1pbj1cIjBcIjtcclxuICAgICAgICByaS5tYXg9XCIyNTVcIjtcclxuICAgICAgICByaS52YWx1ZT1cIjBcIjtcclxuICAgICAgIGxldCBnaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICBnaS50eXBlPVwibnVtYmVyXCI7XHJcbiAgICAgICBnaS5taW49XCIwXCI7XHJcbiAgICAgICBnaS5tYXg9XCIyNTVcIjtcclxuICAgICAgIGdpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgbGV0IGJpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgIGJpLnR5cGU9XCJudW1iZXJcIjtcclxuICAgICAgIGJpLm1pbj1cIjBcIjtcclxuICAgICAgIGJpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgYmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICBsZXQgcmdiMkhleCA9IChzOmFueSkgPT4gcy5tYXRjaCgvWzAtOV0rL2cpLnJlZHVjZSgoYTphbnksIGI6YW55KSA9PiBhKyhifDI1NikudG9TdHJpbmcoMTYpLnNsaWNlKDEpLCAnIycpO1xyXG4gICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG5cclxuXHJcbiAgICAgICAgIHJpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSl7XHJcblxyXG5cclxuICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaTpcIixyaS52YWx1ZSxcInNvbWV0aGluZ1wiKTtcclxuXHJcbiAgICAgICAgICBpZihyaS52YWx1ZT09XCJcIilcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChyaS52YWx1ZSk8MClcclxuICAgICAgICAgICAgIHJpLnZhbHVlPVwiMFwiO1xyXG5cclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChyaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG4gICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICBnaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVuOmFueSl7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImdpOlwiLGdpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG5cclxuICAgICAgICAgaWYoZ2kudmFsdWU9PVwiXCIpXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgIGdpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGdpLnZhbHVlKTwwKVxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoZ2kudmFsdWUpPjI1NSlcclxuICAgICAgICAgICAgIGdpLnZhbHVlPVwiMjU1XCI7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRfY29sb3JcIixyZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKSk7XHJcbiAgICAgICAgdGhpcy5waWNrZWRDb2xvcj1yZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJvbmVDb2xvcjpcIix0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgIGJpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSl7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJiaTpcIixiaS52YWx1ZSxcInNvbWV0aGluZ1wiKTtcclxuICAgICAgICAgIGlmKGJpLnZhbHVlPT1cIlwiKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoYmkudmFsdWUpPDApXHJcbiAgICAgICAgICAgICAgYmkudmFsdWU9XCIwXCI7XHJcblxyXG4gICAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChiaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgYmkudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuICAgICAgICAgdGhpcy5waWNrZWRDb2xvcj1yZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJvbmVDb2xvcjpcIix0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuXHJcbiAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ2xvc2VcIikpO1xyXG4gICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIGRpYWcuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICBsZXQgaW5wdXREaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgIGxldCBwcmV2aWV3c0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgbGV0IG1haW5Mb2dpYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobHIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKHJpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChsZyk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZ2kpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxiKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChiaSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuc3R5bGUuZmxvYXQ9XCJsZWZ0XCI7XHJcbiAgICAgICBpbnB1dERpdi5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgICAgIG1haW5Mb2dpYy5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcblxyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoUHJldmlld3MpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKHByZXZpZXdEaXYpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIHByZXZpZXdzRGl2LnN0eWxlLmZsb2F0PVwicmlnaHRcIjtcclxuICAgICAgIG1haW5Mb2dpYy5hcHBlbmRDaGlsZChwcmV2aWV3c0Rpdik7XHJcbiAgICAgICBkaWFnLmFwcGVuZENoaWxkKG1haW5Mb2dpYyk7XHJcblxyXG4gICAgICAgZGlhZy5hcHBlbmRDaGlsZCggY2xvc2VCdXR0b24pO1xyXG4gICAgICAgZGlhZy5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLnRvcD1cIjMzJVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS5sZWZ0PVwiMjUlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmJhY2tncm91bmQ9XCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS5jb2xvcj0oXCJ2YXIoLS10ZXh0LWNvbG9yKVwiKS50cmltKCk7XHJcbiAgICAgICBpZihwYXJlbnQpXHJcbiAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGlhZyk7XHJcbiAgICAgICBkaWFnLnNob3dNb2RhbCgpO1xyXG59XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJleHBvcnQgZW51bSBBY3Rpb25UeXBlIHtcclxuICAgIFwiYnV0dG9uXCIsIFwiY2hlY2tib3hcIlxyXG4gfVxyXG4gXHJcbiBleHBvcnQgaW50ZXJmYWNlIEFjdGlvbkZvcm0ge1xyXG4gICAgdGV4dE9uOiBzdHJpbmc7XHJcbiAgICB0ZXh0T2ZmPzogc3RyaW5nO1xyXG4gICAgZW1vamlPbj86c3RyaW5nO1xyXG4gICAgZW1vamlPZmY/OnN0cmluZztcclxuICAgIGhhbmRsZXI6IGFueTtcclxuICAgIGluaXRIYW5kbGVyPzogKHg6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiBcclxuIH1cclxuIFxyXG4gZXhwb3J0IGludGVyZmFjZSBDb250ZXh0TWVudVVpT3B0aW9ucyB7XHJcbiAgICBjb2xvckI6IFwiIzU0QzU3MVwiLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgd2lkdGhCdXR0b246IDUwXHJcbiAgICAsIGhlaWdodEJ1dHRvbjogMjAsXHJcbiAgICBib3JkZXJXaWR0aEJ1dHRvbjogMSxcclxuICAgIHJhZGl1czogNCxcclxuICAgIG1pbldpZHRoOiAxMDAsXHJcbiAgICB4T2Zmc2V0OiAxMjAsXHJcbiAgICB4T2Zmc2V0QnV0dG9uOiAyMCxcclxuICAgIHBhZGRpbmdCdXR0b246IDEsXHJcbiAgICBkdXJhdGlvbjogMVxyXG4gXHJcbiBcclxuIFxyXG4gfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gZXhwb3J0IGNsYXNzIENvbnRleHRNZW51IHtcclxuICAgIHB1YmxpYyB0cmlnZ2VyVHlwZVZpc2libGU6IHN0cmluZyA9IFwibW91c2VvdmVyXCI7XHJcbiAgICBwdWJsaWMgdHJpZ2dlclR5cGVJbnZpc2libGU6IHN0cmluZyA9IFwibW91c2VsZWF2ZVwiO1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VySW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlck91dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb246IGFueTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbjogYW55O1xyXG4gXHJcbiAgICBwdWJsaWMgY29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCIuY29udGV4dE1lbnVcIjtcclxuICAgIHB1YmxpYyBhY3Rpb25zOiBBY3Rpb25Gb3JtW10gPSBbXTtcclxuIFxyXG4gXHJcbiAgICBzZXRDb21wbGV4VHJpZ2dlckluKGNvbXBsZXg6IGFueSkge1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlckluQ29uZGl0aW9uID0gY29tcGxleDtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRDb21wbGV4VHJpZ2dlck91dChjb21wbGV4OiBhbnkpIHtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24gPSBjb21wbGV4O1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dCA9IHRydWU7XHJcbiAgICB9XHJcbiBcclxuICAgIGFkZEFjdGlvbihhY3Rpb246IEFjdGlvbkZvcm0pIHtcclxuICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25zKGFjdGlvbnM6IEFjdGlvbkZvcm1bXSkge1xyXG4gICAgICAgdGhpcy5hY3Rpb25zLnB1c2goLi4uYWN0aW9ucyk7XHJcbiAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgIGJ1aWxkQ29udGV4dE1lbnUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgIH0pXHJcbiB7ICAgaWYodGhpcy5jb21wbGV4VHJpZ2dlckluPT1mYWxzZSlcclxuICAgIHsgXHJcbiAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZVZpc2libGUsKCk9PlxyXG4gICAgICAgdGhpcy5idWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbSxlLG9wdGlvbnMpXHJcbiBcclxuIFxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgfWVsc2VcclxuICAgIHtcclxuIFxyXG4gICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbihpdGVtKTtcclxuIFxyXG4gICAgfVxyXG4gICAgXHJcbiB9XHJcbiBcclxuICAgIGJ1aWxkQ29udGV4dE1lbnVXaGVuVmlzaWJsZShpdGVtOiBhbnksIGU6IGFueSwgb3B0aW9uczogQ29udGV4dE1lbnVVaU9wdGlvbnMgPSB7XHJcbiAgICAgICBjb2xvckI6IFwiIzU0QzU3MVwiLCBoZWlnaHQ6IDQwLCBib3JkZXJXaWR0aDogMiwgd2lkdGhCdXR0b246IDUwXHJcbiAgICAgICAsIGhlaWdodEJ1dHRvbjogMjAsIGJvcmRlcldpZHRoQnV0dG9uOiAxLCByYWRpdXM6IDQsXHJcbiAgICAgICBtaW5XaWR0aDogMTAwLCB4T2Zmc2V0OiAxMjAsIHhPZmZzZXRCdXR0b246IDIwLCBwYWRkaW5nQnV0dG9uOiAxLCBkdXJhdGlvbjogMVxyXG4gICAgfSwgekluZGV4ID0gMTAwMCkge1xyXG4gXHJcbiAgICAgICAgIFxyXG4gXHJcbiAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgaWYocGFyZW50KXtcclxuICAgICAgIGxldCBjb25NZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250ZXh0TWVudVF1ZXJ5KTtcclxuIFxyXG4gICAgICAgaWYgKGNvbk1lbnUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBjb25NZW51LmNsYXNzTGlzdC5hZGQodGhpcy5jb250ZXh0TWVudVF1ZXJ5LnNsaWNlKDEpKTtcclxuICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb25NZW51KTtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uTWVudS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICB9XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmhlaWdodD1cImZpdC1jb250ZW50XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnpJbmRleCA9IHpJbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgLy8gKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5taW5XaWR0aCA9IG9wdGlvbnMubWluV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnRvcCA9IGUuY2xpZW50WS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIG9wdGlvbnMueE9mZnNldCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyID0gb3B0aW9ucy5ib3JkZXJXaWR0aC50b1N0cmluZygpICsgXCJweCBzb2xpZCBcIiArIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGV4dC1jb2xvclwiKS50cmltKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMucmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuIFxyXG4gXHJcbiAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XHJcbiBcclxuIFxyXG4gICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgIGxldCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuIFxyXG4gXHJcbiAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gQWN0aW9uVHlwZS5jaGVja2JveCkge1xyXG4gICAgICAgICAgICAgbGV0IGFjdGlvbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guaWQgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgdGV4dFNwYW4uaHRtbEZvciA9IFwiYWN0aW9uSWRcIiArIGk7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGV4dC1jb2xvcilcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHRCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ0J1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luVG9wID0gKChvcHRpb25zLmhlaWdodCAtIG9wdGlvbnMuaGVpZ2h0QnV0dG9uKSAvIDIpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5SaWdodCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSAob3B0aW9ucy5oZWlnaHRCdXR0b24gLSAyICogb3B0aW9ucy5wYWRkaW5nQnV0dG9uKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IChvcHRpb25zLndpZHRoQnV0dG9uIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gb3B0aW9ucy5kdXJhdGlvbi50b1N0cmluZygpICsgXCJzXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgIGxldCBpc09uID0gYWN0aW9uLmluaXRIYW5kbGVyPyBhY3Rpb24uaW5pdEhhbmRsZXIoaXRlbSk6ZmFsc2U7XHJcbiAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5jaGVja2VkID0gaXNPbjtcclxuIFxyXG4gICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9YWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuIFxyXG4gICAgICAgICAgICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoaXRlbSwgZSwgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBvcHRpb25zLnhPZmZzZXRCdXR0b24udG9TdHJpbmcoKSArIFwicHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBcIjBweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPZmY/P2FjdGlvbi5lbW9qaU9uPz9cIlwiKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICB9KTtcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIC8vICBjaGVja1pvbWJpZS5zdHlsZSxkaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25DaGVja2JveCk7XHJcbiAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gXHJcbiAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLndpZHRoPVwiMTAwJVwiO1xyXG4gICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQ9YWN0aW9uLmVtb2ppT24/P1wiXCIrYWN0aW9uLnRleHRPbjtcclxuICAgICAgICAgICAgaWYoYWN0aW9uLmluaXRIYW5kbGVyKVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmluaXRIYW5kbGVyKGNvbk1lbnUpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmNvbG9yPSBcInZhcigtLXRleHQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvcj1vcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi50ZXh0Q29udGVudD0oYWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIikrYWN0aW9uLnRleHRPZmY/P2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIlxyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQ9KGFjdGlvbi5lbW9qaU9uPz9cIlwiKSthY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT5hY3Rpb24uaGFuZGxlcigpKTtcclxuIFxyXG4gICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbik7XHJcbiBcclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgIGlmKHRoaXMuY29tcGxleFRyaWdnZXJPdXQ9PWZhbHNlKXtcclxuICAgICAgICAgIGNvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRyaWdnZXJUeXBlSW52aXNpYmxlLCAoZSkgPT4ge1xyXG4gXHJcbiAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGV4dE1lbnVRdWVyeSkuZm9yRWFjaCgoZWxlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+ZWxlbSkuc3R5bGUub3BhY2l0eSA9IFwiMFwiKTtcclxuIFxyXG4gICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgIFxyXG4gXHJcbiBcclxuIFxyXG4gICAgICAgICAgfSk7fVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbihjb25NZW51KTtcclxuICAgICAgICAgIH1cclxuIFxyXG4gXHJcbiBcclxuICAgICBcclxuIFxyXG4gXHJcbiAgICB9fVxyXG4gfSIsIlxyXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVPcHRpb25cclxue1xyXG4gXHJcbiAgICBvcHRpb25UZXh0OnN0cmluZztcclxuICAgIG9wdGlvbkVtb2ppPzpzdHJpbmc7XHJcbiAgICBoYW5kbGVyOmFueTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b25cclxue1xyXG4gcHVibGljIHBhcmVudFF1ZXJ5OnN0cmluZz1cIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiBtZW51VGV4dDpzdHJpbmc9XCJDbGljayBPbiBNZVwiO1xyXG4gbWVudUVtb2ppOnN0cmluZz1cIlwiO1xyXG4gb3B0aW9uczpNZW51T3B0aW9uW109W107XHJcbiBoaWRkZW5PYmplY3Q6Ym9vbGVhbj10cnVlO1xyXG4gcHVibGljIGJ1dHRvbkNsYXNzOnN0cmluZz1cInNldHRpbmdcIjtcclxuIHB1YmxpYyBpbml0QWN0aW9uOigpPT5udW1iZXI9KCk9PntyZXR1cm4gMDt9O1xyXG4gXHJcbnNldE9wdGlvbnMob3B0aW9uczpNZW51T3B0aW9uW10pXHJcbntcclxuIHRoaXMub3B0aW9ucz1vcHRpb25zO1xyXG59XHJcbmFkZE9wdGlvbihvcHRpb246TWVudU9wdGlvbilcclxue1xyXG4gdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcclxufVxyXG5cclxuXHJcbiBjb25zdHJ1Y3RvcihtZW51VGV4dDphbnksbWVudUVtb2ppPzphbnksaW5pdEFjdGlvbj86YW55LG9wdGlvbnM6TWVudU9wdGlvbltdPVtdKVxyXG4geyBcclxuICAgIHRoaXMubWVudVRleHQ9bWVudVRleHQ7XHJcbiAgICB0aGlzLmluaXRBY3Rpb249aW5pdEFjdGlvbjtcclxuICAgIHRoaXMubWVudUVtb2ppPW1lbnVFbW9qaTtcclxuICAgIHRoaXMub3B0aW9ucy5wdXNoKC4uLm9wdGlvbnMpO1xyXG5cclxuIH1cclxuXHJcblxyXG5cclxuYnVpbGRCdXR0b24ob3RoZXJQYXJlbnQ/OnN0cmluZylcclxue1xyXG4gbGV0IHBhcmVudERpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG90aGVyUGFyZW50Pz90aGlzLnBhcmVudFF1ZXJ5KTtcclxuIGxldCBidXR0b25EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIik7XHJcbiBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5tZW51VGV4dCtcIiBcIisodGhpcy5tZW51RW1vamk9PW51bGw/XCJcIjp0aGlzLm1lbnVFbW9qaSkpKTtcclxuIGJ1dHRvbkRpdi5zdHlsZS5oZWlnaHQ9XCJmaXQtY29udGVudFwiO1xyXG5cclxuXHJcbiBsZXQgc2VsZWN0aW9uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBsZXQgc2VsZWN0ZWRQPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gbGV0IG9wdGlvbnNEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuIG9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uLW9wdGlvbnNcIik7XHJcbiBvcHRpb25zRGl2LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiO1xyXG4gb3B0aW9uc0Rpdi5zdHlsZS5oZWlnaHQ9XCIxMDBweFwiO1xyXG5cclxuXHJcbiBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCAodGhpcy5idXR0b25DbGFzcyk7XHJcblxyXG5cclxuIGxldCBjc3MgPSBgXHJcbiAubWVudS1idXR0b24tb3B0aW9uOmhvdmVyXHJcbiAgICAge1xyXG4gICAgICAgYmFja2dyb3VuZDpncmF5O1xyXG5cclxuICAgICB9XHJcblxyXG4ubWVudS1idXR0b25cclxue1xyXG5cclxuc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG5cclxufVxyXG4ubWVudS1idXR0b24tb3B0aW9ucyB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL31cclxuIC5tZW51LWJ1dHRvbi1vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhciB7IC8qIFdlYktpdCAqL1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7fVxyXG5gXHJcblxyXG5cclxubGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzLnRyaW0oKSkpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG5sZXQgaW5kZXhPcHRpb249MDtcclxuaWYodGhpcy5pbml0QWN0aW9uKVxyXG4gIGluZGV4T3B0aW9uPXRoaXMuaW5pdEFjdGlvbigpO1xyXG5cclxuY29uc29sZS5sb2coXCJpbmRleE9wdGlvbjpcIixpbmRleE9wdGlvbixcIm9wdGlvbnM6XCIsdGhpcy5vcHRpb25zKTtcclxuc2VsZWN0ZWRQLnRleHRDb250ZW50PXRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uVGV4dCtcIiBcIisodGhpcy5vcHRpb25zW2luZGV4T3B0aW9uXS5vcHRpb25FbW9qaT09bnVsbD9cIlwiOnRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uRW1vamkpO1xyXG5cclxuIHRoaXMub3B0aW9ucy5mb3JFYWNoKCAob3B0aW9uKT0+e1xyXG5cclxuXHJcbiAgbGV0IG9wdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG9wdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tb3B0aW9uXCIpO1xyXG4gIG9wdGlvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvcHRpb24ub3B0aW9uVGV4dCtcIiBcIisob3B0aW9uLm9wdGlvbkVtb2ppPT1udWxsP1wiXCI6b3B0aW9uLm9wdGlvbkVtb2ppKSkpO1xyXG4gIG9wdGlvbkRpdi5zdHlsZS53aGl0ZVNwYWNlPVwibm93cmFwXCI7XHJcbiAgb3B0aW9uRGl2LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7XHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsKCk9PntvcHRpb25EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiZ3JheVwifSk7XHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsKCk9PntvcHRpb25EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIn0pO1xyXG5cclxuICBvcHRpb25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICBvcHRpb24uaGFuZGxlcigpO1xyXG4gIHNlbGVjdGVkUC50ZXh0Q29udGVudD1vcHRpb24ub3B0aW9uVGV4dCtcIiBcIisob3B0aW9uLm9wdGlvbkVtb2ppPT1udWxsP1wiXCI6b3B0aW9uLm9wdGlvbkVtb2ppKTtcclxuICAgIDt9KTtcclxuXHJcbiAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChvcHRpb25EaXYpO1xyXG5cclxuXHJcbiB9KTtcclxuXHJcbiAgc2VsZWN0ZWRQLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvbnNEaXYpO1xyXG4gICAgICB0aGlzLmhpZGRlbk9iamVjdD10cnVlO1xyXG5cclxuXHJcblxyXG4gIH0uYmluZCh0aGlzKSxmYWxzZSk7XHJcblxyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWxlY3RlZFApO1xyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIikpO1xyXG5cclxuXHJcbiAgYnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICBpZih0aGlzLmhpZGRlbk9iamVjdD09dHJ1ZSlcclxuICAgIHsgICAgY29uc29sZS5sb2coXCJnb3QgaGVyZVwiKTtcclxuXHJcbiAgICAgICAgaWYoIWJ1dHRvbkRpdi5jb250YWlucyhzZWxlY3Rpb25EaXYpKVxyXG4gICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHNlbGVjdGlvbkRpdik7XHJcblxyXG4gICAgICAgdGhpcy5oaWRkZW5PYmplY3QgPSBmYWxzZTtcclxuXHJcbiAgICB9ZWxzZVxyXG4gICAgICB7ICAgaWYoc2VsZWN0aW9uRGl2LmNvbnRhaW5zKG9wdGlvbnNEaXYpKVxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvbkRpdi5yZW1vdmVDaGlsZChvcHRpb25zRGl2KTtcclxuXHJcbiAgICAgICAgIGlmKGJ1dHRvbkRpdi5jb250YWlucyhzZWxlY3Rpb25EaXYpKVxyXG4gICAgICAgICAgICBidXR0b25EaXYucmVtb3ZlQ2hpbGQoc2VsZWN0aW9uRGl2KTtcclxuICAgICAgICB0aGlzLmhpZGRlbk9iamVjdCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIH0uYmluZCh0aGlzKSxmYWxzZSk7XHJcblxyXG5cclxuIHBhcmVudERpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG5cclxucmV0dXJuIGJ1dHRvbkRpdjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59IiwiXHJcbmltcG9ydCB7Q29udGV4dE1lbnUsQWN0aW9uVHlwZSxBY3Rpb25Gb3JtfSBmcm9tIFwiLi9Db250ZXh0TWVudVwiXHJcbmltcG9ydCB7TWVudUJ1dHRvbixNZW51T3B0aW9ufSBmcm9tIFwiLi9NZW51QnV0dG9uXCJcclxuaW1wb3J0IHtDb2xvclBpY2tlcn0gZnJvbSBcIi4vQ29sb3JQaWNrZXJcIlxyXG5pbXBvcnQge1RvZ2dsZUJ1dHRvbn0gZnJvbSBcIi4vVG9nZ2xlQnV0dG9uXCI7XHJcbmV4cG9ydCBjbGFzcyBVSSB7XHJcblxyXG4gICBwdWJsaWMgY29udGV4dE1lbnVzOkNvbnRleHRNZW51W109W25ldyBDb250ZXh0TWVudSgpXTtcclxuICAgcHVibGljIHRvZ2dsZUJ1dHRvbnM6VG9nZ2xlQnV0dG9uW109W107XHJcbiAgIHB1YmxpYyBtZW51QnV0dG9uczpNZW51QnV0dG9uW109W107XHJcbiAgIHB1YmxpYyBjb2xvclBpY2tlcjpDb2xvclBpY2tlcj1uZXcgQ29sb3JQaWNrZXIoKTtcclxuICAgcHVibGljIGRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5OiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBkZWZhdWx0Q29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGRlZmF1bHRNb2RhbFF1ZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICBwdWJsaWMgaW5zdGFuY2VzQ2xhc3M6IHN0cmluZyA9IFwiaW5zdGFuY2VzXCI7XHJcbiAgIHB1YmxpYyBpdGVtc0NsYXNzOiBzdHJpbmcgPSBcIml0ZW1zLWlubmVyXCI7XHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRNb2RhbFF1ZXJ5ID0gXCIubW9kYWw6bnRoLWNoaWxkKDMpXCI7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzQnV0dG9uUXVlcnkgPSBcIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiAgIH1cclxuXHJcblxyXG4gIGluamVjdENTUyhjc3M6c3RyaW5nKVxyXG57XHJcbiAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcy50cmltKCkpKTtcclxuICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiAgYWRkQW5kQnVpbGRNZW51QnV0dG9uKG1lbnVUZXh0OmFueSxtZW51RW1vamk/OmFueSxpbml0QWN0aW9uPzphbnksb3B0aW9uczpNZW51T3B0aW9uW109W10pXHJcbiAgeyAgICAgbGV0IG1CdXR0b249bmV3IE1lbnVCdXR0b24obWVudVRleHQsbWVudUVtb2ppLGluaXRBY3Rpb24sb3B0aW9ucylcclxuICAgIHRoaXMubWVudUJ1dHRvbnMucHVzaChtQnV0dG9uKTtcclxuICAgIHJldHVybiAgbUJ1dHRvbi5idWlsZEJ1dHRvbigpO1xyXG5cclxuICB9XHJcblxyXG4gICBvbk9ic2VydmluZ0luc3RhbmNlKGFwcGx5T25PbmVFbGVtZW50OiBhbnkpIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICgoPEhUTUxFbGVtZW50Pm5vZGUpLmlkICE9IFwiaW5zdGFuY2UtMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFwcGx5T25PbmVFbGVtZW50KG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGluc3RhbmNlT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuaW5zdGFuY2VzQ2xhc3MpWzBdLCB7XHJcbiAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgIH1cclxuICAgb25PYnNlcnZpbmdJdGVtcyhhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcblxyXG5cclxuXHJcblxyXG59O1xyXG4iLCJcclxuaW1wb3J0ICogYXMgR00gZnJvbSBcImdyZWFzZW1vbmtleVwiO1xyXG4vL3NvdXJjZSBtdXN0IGJlIGluaXRpYXRlZCB3aXRoIHVuc2FmZVdpbmRvd1xyXG5leHBvcnQgY2xhc3MgZGF0YVxyXG57XHJcbiAgIHB1YmxpYyAgc291cmNlOmFueT1udWxsO1xyXG4gICBwdWJsaWMgIGV4cEY6YW55PW51bGw7XHJcblxyXG5cclxuXHJcbiAgLy91Vz11bnNhZmVXaW5kb3cgbXVzdCBiZSBkb25lIGZyb20gdXNlcnNjcmlwdFxyXG4gIC8vZXhwRj1leHBvcnRGdW5jdGlvblxyXG5cclxucHVibGljIGFkZERhdGFTb3VyY2UoZXhwRjphbnksdVc6YW55PXNlbGYpXHJcbnsgXHJcbiAgIHRoaXMuc291cmNlPXVXLiRudXh0LiRyb290LiRjaGlsZHJlblsyXS4kY2hpbGRyZW5bMF0uJGNoaWxkcmVuWzBdXHJcbiAgIHRoaXMuZXhwRj1leHBGO1xyXG5cclxufVxyXG5cclxuXHJcbiAgcHVibGljIGdldEVsZW1lbnRzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5lbGVtZW50cztcclxuICB9XHJcbiAgICBnZXRJbnN0YW5jZXMoKVxyXG4gIHtcclxuICAgcmV0dXJuIHRoaXMuc291cmNlLl9kYXRhLmluc3RhbmNlcztcclxuICB9XHJcbiAgICAgb25Tb3J0aW5nKG1ldGhvZE5hbWU6c3RyaW5nLG5ld1N2ZzpzdHJpbmcsYWRkU29ydGluZ01ldGhvZDooeDphbnkseTphbnkpPT5hbnk9eD0+eCxhZGRTdHlsZUNoYW5nZXM/OmFueSlcclxuICB7XHJcbiAgbGV0IGJlZm9yZT10aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zb3J0ZWRFbGVtZW50cy5nZXR0ZXI7XHJcblxyXG5cclxuICB0aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zb3J0ZWRFbGVtZW50cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuXHJcbiAgIGlmICh0aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5fZGF0YS5zb3J0QnkgPT09IG1ldGhvZE5hbWUpXHJcbiAgICAge1xyXG4gICAgICBsZXQgcHJldmlvdXM9Wy4uLmJlZm9yZSgpXTtcclxuICAgICAgcmV0dXJuIGFkZFNvcnRpbmdNZXRob2QocHJldmlvdXMsdGhpcy5nZXRFbGVtZW50cygpKTtcclxuICAgICB9ZWxzZVxyXG4gICAgIHtcclxuICAgICAgIHJldHVybiBiZWZvcmUoKTtcclxuXHJcbiAgICAgfVxyXG5cclxuICB9LHVuc2FmZVdpbmRvdyk7XHJcbiAgXHJcbnRoaXMuc291cmNlLiRudXh0LiRyb290LiRjaGlsZHJlblsyXS4kY2hpbGRyZW5bMF0uJGNoaWxkcmVuWzBdLnNvcnRzLnB1c2gobWV0aG9kTmFtZSk7XHJcbmNvbnN0IHNvcnRCdXR0b25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgXHJcblxyXG4gICAgICAgICBpZih0aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5fZGF0YS5zb3J0QnkgPT09IG1ldGhvZE5hbWUpXHJcbiAgICAgICAgICAgeyAgICBsZXQgaW1nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1zb3J0ID4gaW1nXCIpO1xyXG5cclxuICAgICAgICAgICAgIGlmKCAoPEhUTUxJbWFnZUVsZW1lbnQ+aW1nKS5zcmMudHJpbSgpPT1cImh0dHBzOi8vbmVhbC5mdW4vaW5maW5pdGUtY3JhZnQvXCIrbWV0aG9kTmFtZStcIi5zdmdcIilcclxuICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAoPEhUTUxJbWFnZUVsZW1lbnQ+aW1nKS5zcmM9bmV3U3ZnO1xyXG4gICAgICAgICAgICAgICAgIGlmKGFkZFN0eWxlQ2hhbmdlcyE9bnVsbClcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICBhZGRTdHlsZUNoYW5nZXMoaW1nLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgLy9pbWcuc3R5bGUuZmlsdGVyPVwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBhZGRTdHlsZUNoYW5nZXMoaW1nLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICB9KTtcclxuXHJcbiAgICAgICBsZXQgaW1nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1zb3J0ID4gaW1nXCIpO1xyXG4gICAgICAgY29uc29sZS5sb2coaW1nLGltZy50ZXh0Q29udGVudClcclxuICAgICAgIHZhciBjb25maWcgPSB7IGNoYXJhY3RlckRhdGE6IGZhbHNlLCBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IGZhbHNlLCBzdWJ0cmVlOiBmYWxzZSB9O1xyXG4gICAgICAgc29ydEJ1dHRvbk9ic2VydmVyLm9ic2VydmUoaW1nLGNvbmZpZyk7XHJcblxyXG5cclxuICBcclxuICB9XHJcbiAgXHJcbiAgICAgIG9uRmlsdGVyaW5nKGFkZEZpbHRlck1ldGhvZE9uUXVlcnk6KHg6YW55LHk6YW55KT0+YW55PSh4OmFueSx5OmFueSk9PnkoKSlcclxuICB7XHJcbiAgbGV0IGJlZm9yZT10aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zZWFyY2hSZXN1bHRzLmdldHRlcjtcclxuICB0aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zZWFyY2hSZXN1bHRzLmdldHRlcj10aGlzLmV4cEYoKCkgPT4ge1xyXG4gIGxldCBxdWVyeT0gdGhpcy5zb3VyY2Uuc2VhcmNoUXVlcnlcclxuIFxyXG4gXHJcbiBcclxuICByZXR1cm4gYWRkRmlsdGVyTWV0aG9kT25RdWVyeShxdWVyeSxiZWZvcmUpO1xyXG4gIFxyXG4gIFxyXG4gIH0sdW5zYWZlV2luZG93KSA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgfVxyXG5cclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIHV0aWxzXHJcbntcclxuXHJcblxyXG4gICAgcHVibGljIHVzZXJBZGRlZE1ldGhvZHM6YW55W109W107XHJcbiAgICBwdWJsaWMgRXhwb3J0U2F2ZUJ1dHRvblF1ZXJ5OnN0cmluZyA9XCIuc2V0dGluZ1tmb3I9aW1wb3J0LXNhdmVdICsgLnNldHRpbmdcIjtcclxuICAgIHB1YmxpYyBzYXZlRmlsZU5hbWU6c3RyaW5nPVwiaW5maW5pdGVjcmFmdC5qc29uXCI7XHJcblxyXG5cclxuICAgIHNhdmVTYXZlRmlsZU9uUEMoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrO1xyXG4gICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayA9ICgpID0+IHtIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSBoYW5kbGVDbGlja31cclxuICAgICAgICBjb25zdCBib2R5T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT09IFwiY2hpbGRMaXN0XCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKS5maW5kKChub2RlKSA9PntcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAoPGFueT5ub2RlKS5kb3dubG9hZCA9PT0gdGhpcy5zYXZlRmlsZU5hbWV9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yKSByZXR1cm4gZmV0Y2goKDxIVE1MQW5jaG9yRWxlbWVudD5hbmNob3IpLmhyZWYpLnRoZW4ocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcclxuICAgICAgICBoYW5kbGVDbGljay5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5FeHBvcnRTYXZlQnV0dG9uUXVlcnkpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm9keU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVqZWN0KFwiVGltZWQgb3V0XCIpXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdHJ1Y3RvcigpXHJcbntcclxuXHJcbn1cclxuYWRkRnVuY3Rpb24obmFtZTpzdHJpbmcsY2FsbGJhY2s6YW55KVxyXG57XHJcbiAgICB0aGlzLnVzZXJBZGRlZE1ldGhvZHMucHVzaCh7bmFtZTpuYW1lLGhhbmRsZXI6Y2FsbGJhY2t9KTtcclxufVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJsZXQgbWVzc2FnZTogc3RyaW5nID0gJ0hlbGxvLCBXb3JsZCEnO1xyXG5jb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuaW1wb3J0IHtVSX0gZnJvbSAgXCIuL1VJXCJcclxuaW1wb3J0IHtkYXRhfSBmcm9tICBcIi4vZGF0YVwiXHJcbmltcG9ydCB7dXRpbHN9IGZyb20gIFwiLi91dGlsc1wiXHJcbmV4cG9ydCBjbGFzcyBNYWluXHJcbntcclxuIHB1YmxpYyAkdWk6VUk7XHJcbiBwdWJsaWMgJGRhdGE6ZGF0YTtcclxuIHB1YmxpYyAkdXRpbHM6dXRpbHM7XHJcbiBjb25zdHJ1Y3RvcigpXHJcbiB7XHJcbiAgdGhpcy4kdWk9bmV3IFVJKCk7XHJcbiAgdGhpcy4kZGF0YT1uZXcgZGF0YSgpO1xyXG4gIHRoaXMuJHV0aWxzPW5ldyB1dGlscygpO1xyXG4gfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IG9iamVjdFNvdXJjZTpNYWluPW5ldyBNYWluKCk7IFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=