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
    ColorPicker.prototype.makeColorPicker = function (localColback, debug) {
        if (debug === void 0) { debug = false; }
        if (localColback != null)
            this.callback = localColback;
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;
        var isMobile = ua.indexOf("android") > -1;
        var isWebOs = ua.indexOf("webos") > -1;
        var isIphone = ua.indexOf("iphone") > -1;
        var isIpad = ua.indexOf("ipad") > -1;
        var isLinux = ua.indexOf("linux") > -1;
        var parent = document.querySelector(".container");
        if ((isAndroid || isMobile || isLinux || isWebOs || isIphone || isIpad) || debug) {
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
            if (parent)
                parent.appendChild(diag_1);
            diag_1.showModal();
        }
        else {
            var input = document.createElement("input");
            input.setAttribute("type", "color");
            input.addEventListener("click", function (event) {
                event.stopPropagation();
            });
            input.addEventListener("input", function (event) {
                this.pickedColor = event.target.value;
                this.callback(this.pickedColor);
            }.bind(this));
            if (parent)
                parent.appendChild(input);
            // hidden=0;
            input.click();
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
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    ContextMenu.prototype.defaultBuildItem = function (item, options) {
        var _this = this;
        var timeout = null;
        item.addEventListener("mouseover", function (e) {
            timeout = setTimeout(function () { this.buildContextMenuWhenVisible(item, { clientX: item.getBoundingClientRect().x, clientY: item.getBoundingClientRect().y }, options); }.bind(_this), 1000);
        });
        item.addEventListener("mouseout", function (e) {
            clearTimeout(timeout);
        });
    };
    ContextMenu.prototype.defaultBuild = function (options, zIndex) {
        var _this = this;
        if (options === void 0) { options = {
            colorB: "#54C571", height: 40, borderWidth: 2, widthButton: 50,
            heightButton: 20, borderWidthButton: 1, radius: 4,
            minWidth: 100, xOffset: 120, xOffsetButton: 20, paddingButton: 1, duration: 1
        }; }
        if (zIndex === void 0) { zIndex = 1000; }
        for (var _i = 0, _a = Array.from(document.querySelectorAll(".item")); _i < _a.length; _i++) {
            var item = _a[_i];
            this.defaultBuildItem(item, options);
        }
        var itemsObserver = new MutationObserver(function (mutations) { return __awaiter(_this, void 0, void 0, function () {
            var _i, mutations_1, mutation, _a, _b, node;
            return __generator(this, function (_c) {
                for (_i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                    mutation = mutations_1[_i];
                    if (mutation.addedNodes.length > 0)
                        for (_a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                            node = _b[_a];
                            if (node.classList.contains("item"))
                                this.defaultBuildItem(node, options);
                        }
                }
                return [2 /*return*/];
            });
        }); });
        itemsObserver.observe(document.getElementsByClassName("item-inner")[0], {
            childList: true,
            subtree: true
        });
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

/***/ "./src/ToggleButton.ts":
/*!*****************************!*\
  !*** ./src/ToggleButton.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.ToggleButton = exports.ToggleButtonOptions = void 0;
var ToggleButtonOptions = /** @class */ (function () {
    function ToggleButtonOptions() {
    }
    return ToggleButtonOptions;
}());
exports.ToggleButtonOptions = ToggleButtonOptions;
var ToggleButton = /** @class */ (function () {
    function ToggleButton() {
        this.color = "#70b565";
        this.optionalText = "";
        this.size = 22;
        this.innerRadius = "50%";
        this.outerRadius = "15px";
    }
    ToggleButton.prototype.buildButton = function (options) {
        if (options === void 0) { options = {}; }
        if (options.handler != null)
            this.handler = options.handler;
        if (options.color != null) {
            this.color = options.color;
        }
        if (options.size != null) {
            this.size = options.size;
        }
        if (options.innerRadius != null) {
            this.innerRadius = options.innerRadius;
        }
        if (options.outerRadius != null) {
            this.outerRadius = options.outerRadius;
        }
        var css = "\n.setting-block {\n\tcolor: var(--text-color);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7px;\n\tfont-size: 16.4px;\n}\n\n.setting-block h1 {\n\tfont-size: 20px;\n\tfont-family: Roboto, sans-serif;\n\tline-height: 35px;\n\tcolor: var(--text-color);\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.setting-block label[for*=\"input\"] {\n\tfloat: left;\n\tmargin-right: 7px;\n\tmargin-top: 5px;\n}\n\n.checkbox-container {\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: ".concat(this.size + 28, "px;\n\theight: ").concat(this.size + 8, "px;\n\tcursor: pointer;\n    margin-left:5px;\n}\n\n.checkbox-container input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n\n.checkbox-slider {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--border-color);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n\tborder-radius: ").concat(this.outerRadius, "px;\n\tz-index: 2000;\n}\n\n.checkbox-slider:before {\n\tposition: absolute;\n\tcontent: \"\";\n\theight: ").concat(this.size, "px;\n\twidth: ").concat(this.size, "px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: var(--background-color);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n\tborder-radius: ").concat(this.innerRadius, ";\n\tz-index: 1999;\n}\n\n.dark-mode .checkbox-slider:before {\n\tbackground-color: var(--text-color);\n}\n\ninput:checked + .checkbox-slider {\n\tbackground-color: ").concat(this.color, ";\n}\n\ninput:checked + .checkbox-slider:before {\n\ttransform: translateX(19px);\n}\n\n.input-wrapper {\n\ttransition: 0.4s;\n}\n\n");
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css.trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var block = document.createElement("div");
        block.classList.add("setting-block");
        var name = document.createElement("h1");
        if (options.optionalText != null) {
            name.appendChild(document.createTextNode(options.optionalText));
        }
        block.appendChild(name);
        var checkboxContainer = document.createElement("label");
        checkboxContainer.classList.add("checkbox-container");
        var checkbox = document.createElement("input");
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("type", "checkbox");
        checkboxContainer.appendChild(checkbox);
        checkbox.addEventListener("change", function () {
            this.handler(checkbox.checked);
        }.bind(this));
        var slider = document.createElement("span");
        slider.classList.add("checkbox-slider");
        checkboxContainer.appendChild(slider);
        name.appendChild(checkboxContainer);
        if (options.parent)
            options.parent.appendChild(block);
        return block;
    };
    return ToggleButton;
}());
exports.ToggleButton = ToggleButton;


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
var ToggleButton_1 = __webpack_require__(/*! ./ToggleButton */ "./src/ToggleButton.ts");
var UI = /** @class */ (function () {
    function UI() {
        this.contextMenus = [new ContextMenu_1.ContextMenu()];
        this.contextMenu = this.contextMenus[0];
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
    UI.prototype.makeToggleButton = function (options) {
        var toggleButton = new ToggleButton_1.ToggleButton();
        this.toggleButtons.push(toggleButton);
        return toggleButton.buildButton(options);
    };
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


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    data.prototype.addInToolTipsAsync = function (callback) {
        var _this = this;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(".item.instance::before {text-align: center;}".trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var instanceObserver = new MutationObserver(function (mutations) { return __awaiter(_this, void 0, void 0, function () {
            var _i, mutations_1, mutation, _a, _b, node, text, nodeText, _c, _d, n, emoji;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _i = 0, mutations_1 = mutations;
                        _e.label = 1;
                    case 1:
                        if (!(_i < mutations_1.length)) return [3 /*break*/, 6];
                        mutation = mutations_1[_i];
                        if (!(mutation.addedNodes.length > 0)) return [3 /*break*/, 5];
                        _a = 0, _b = Array.from(mutation.addedNodes);
                        _e.label = 2;
                    case 2:
                        if (!(_a < _b.length)) return [3 /*break*/, 5];
                        node = _b[_a];
                        if (!node.classList.contains("instance")) return [3 /*break*/, 4];
                        text = node.getAttribute("tooltip");
                        nodeText = "";
                        console.log("exist", node.childNodes);
                        for (_c = 0, _d = Array.from(node.childNodes); _c < _d.length; _c++) {
                            n = _d[_c];
                            if (n.nodeType == 3 && n.length != 0) {
                                console.log("n:", n, "node-type:", n.nodeType);
                                nodeText += n.textContent.trim();
                            }
                        }
                        emoji = node.querySelector(".instance-emoji");
                        return [4 /*yield*/, callback(nodeText, emoji.textContent)];
                    case 3:
                        nodeText = _e.sent();
                        if (text == null)
                            text = "";
                        text = text + "\n" + nodeText;
                        node.setAttribute("tooltip", text);
                        _e.label = 4;
                    case 4:
                        _a++;
                        return [3 /*break*/, 2];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
        instanceObserver.observe(document.getElementsByClassName("instances")[0], {
            childList: true,
            subtree: true
        });
    };
    data.prototype.addInToolTips = function (callback) {
        var _this = this;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(".item.instance::before {text-align: center;}".trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var instanceObserver = new MutationObserver(function (mutations) { return __awaiter(_this, void 0, void 0, function () {
            var _i, mutations_2, mutation, _a, _b, node, text, nodeText, _c, _d, n, emoji;
            return __generator(this, function (_e) {
                for (_i = 0, mutations_2 = mutations; _i < mutations_2.length; _i++) {
                    mutation = mutations_2[_i];
                    if (mutation.addedNodes.length > 0)
                        for (_a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                            node = _b[_a];
                            if (node.classList.contains("instance")) {
                                text = node.getAttribute("tooltip");
                                nodeText = "";
                                console.log("exist", node.childNodes);
                                for (_c = 0, _d = Array.from(node.childNodes); _c < _d.length; _c++) {
                                    n = _d[_c];
                                    if (n.nodeType == 3 && n.length != 0) {
                                        console.log("n:", n, "node-type:", n.nodeType);
                                        nodeText += n.textContent.trim();
                                    }
                                }
                                emoji = node.querySelector(".instance-emoji");
                                nodeText = callback(nodeText, emoji.textContent);
                                if (text == null)
                                    text = "";
                                text = text + "\n" + nodeText;
                                node.setAttribute("tooltip", text);
                            }
                        }
                }
                return [2 /*return*/];
            });
        }); });
        instanceObserver.observe(document.getElementsByClassName("instances")[0], {
            childList: true,
            subtree: true
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQVcsRUFBQyxRQUFZO1FBRWhDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxZQUFDO0FBQUQsQ0FBQztBQTVDWSxzQkFBSzs7Ozs7OztVQ0FsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBLElBQUksT0FBTyxHQUFXLGVBQWUsQ0FBQztBQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLDBEQUF3QjtBQUN4QixnRUFBNEI7QUFDNUIsbUVBQThCO0FBQzlCO0lBS0M7UUFFQyxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksT0FBRSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR0YsV0FBQztBQUFELENBQUM7QUFiWSxvQkFBSTtBQWdCTixvQkFBWSxHQUFNLElBQUksSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db21tdW5pdHkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9Db2xvclBpY2tlci50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvQ29udGV4dE1lbnUudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL01lbnVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL1RvZ2dsZUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvVUkudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL0NvbW11bml0eS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb21tdW5pdHlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ29tbXVuaXR5XCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBjbGFzcyBDb2xvclBpY2tlclxyXG57XHJcbiBwdWJsaWMgIGNhbGxiYWNrOmFueTtcclxuIHB1YmxpYyAgcGlja2VkQ29sb3I6c3RyaW5nO1xyXG5cclxubWFrZUNvbG9yUGlja2VyKGxvY2FsQ29sYmFjaz86YW55LGRlYnVnOmJvb2xlYW49ZmFsc2UpXHJcbntcclxuICAgaWYobG9jYWxDb2xiYWNrIT1udWxsKVxyXG4gICAgdGhpcy5jYWxsYmFjaz1sb2NhbENvbGJhY2s7XHJcbiAgICAgIFxyXG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyICBpc0FuZHJvaWQgPSB1YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IC0xO1xyXG4gICAgdmFyICBpc01vYmlsZSA9IHVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzV2ViT3MgPSB1YS5pbmRleE9mKFwid2Vib3NcIikgPiAtMTtcclxuICAgIHZhciAgaXNJcGhvbmUgPSB1YS5pbmRleE9mKFwiaXBob25lXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzSXBhZCA9IHVhLmluZGV4T2YoXCJpcGFkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzTGludXggPSB1YS5pbmRleE9mKFwibGludXhcIikgPiAtMTtcclxuICAgIGxldCBwYXJlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgaWYoKGlzQW5kcm9pZCB8fCBpc01vYmlsZSB8fCBpc0xpbnV4IHx8IGlzV2ViT3MgfHwgaXNJcGhvbmUgfHwgaXNJcGFkKSB8fCBkZWJ1ZylcclxuICAgIHtcclxuICAgICAgXHJcbiAgICAgICBsZXQgZGlhZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG5cclxuICAgICAgIGxldCBscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsci5pbm5lclRleHQ9XCJSICgwLTI1NSlcIjtcclxuICAgICAgIGxyLnN0eWxlLmNvbG9yPVwicmVkXCI7XHJcbiAgICAgICBsZXQgbGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgbGcuaW5uZXJUZXh0PVwiRyAoMC0yNTUpXCI7XHJcbiAgICAgICBsZy5zdHlsZS5jb2xvcj1cImdyZWVuXCI7XHJcbiAgICAgICBsZXQgbGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgbGIuaW5uZXJUZXh0PVwiQiAoMC0yNTUpXCI7XHJcbiAgICAgICBsYi5zdHlsZS5jb2xvcj1cImJsdWVcIjtcclxuICAgICAgIGxldCBQcmV2aWV3cz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBQcmV2aWV3cy5pbm5lclRleHQ9XCJQcmV2aWV3IGNvbG9yXCI7XHJcbiAgICAgICBsZXQgcHJldmlld0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS53aWR0aD1cIjEwMHB4XCI7XHJcbiAgICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmhlaWdodD1cIjEwMHB4XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgIGxldCByaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgcmkudHlwZT1cIm51bWJlclwiO1xyXG4gICAgICAgIHJpLm1pbj1cIjBcIjtcclxuICAgICAgICByaS5tYXg9XCIyNTVcIjtcclxuICAgICAgICByaS52YWx1ZT1cIjBcIjtcclxuICAgICAgIGxldCBnaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICBnaS50eXBlPVwibnVtYmVyXCI7XHJcbiAgICAgICBnaS5taW49XCIwXCI7XHJcbiAgICAgICBnaS5tYXg9XCIyNTVcIjtcclxuICAgICAgIGdpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgbGV0IGJpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgIGJpLnR5cGU9XCJudW1iZXJcIjtcclxuICAgICAgIGJpLm1pbj1cIjBcIjtcclxuICAgICAgIGJpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgYmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICBsZXQgcmdiMkhleCA9IChzOmFueSkgPT4gcy5tYXRjaCgvWzAtOV0rL2cpLnJlZHVjZSgoYTphbnksIGI6YW55KSA9PiBhKyhifDI1NikudG9TdHJpbmcoMTYpLnNsaWNlKDEpLCAnIycpO1xyXG4gICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG5cclxuXHJcbiAgICAgICAgIHJpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSl7XHJcblxyXG5cclxuICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaTpcIixyaS52YWx1ZSxcInNvbWV0aGluZ1wiKTtcclxuXHJcbiAgICAgICAgICBpZihyaS52YWx1ZT09XCJcIilcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChyaS52YWx1ZSk8MClcclxuICAgICAgICAgICAgIHJpLnZhbHVlPVwiMFwiO1xyXG5cclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChyaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG4gICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICBnaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVuOmFueSl7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImdpOlwiLGdpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG5cclxuICAgICAgICAgaWYoZ2kudmFsdWU9PVwiXCIpXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgIGdpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGdpLnZhbHVlKTwwKVxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoZ2kudmFsdWUpPjI1NSlcclxuICAgICAgICAgICAgIGdpLnZhbHVlPVwiMjU1XCI7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRfY29sb3JcIixyZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKSk7XHJcbiAgICAgICAgdGhpcy5waWNrZWRDb2xvcj1yZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJvbmVDb2xvcjpcIix0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgIGJpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSl7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJiaTpcIixiaS52YWx1ZSxcInNvbWV0aGluZ1wiKTtcclxuICAgICAgICAgIGlmKGJpLnZhbHVlPT1cIlwiKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoYmkudmFsdWUpPDApXHJcbiAgICAgICAgICAgICAgYmkudmFsdWU9XCIwXCI7XHJcblxyXG4gICAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChiaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgYmkudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuICAgICAgICAgdGhpcy5waWNrZWRDb2xvcj1yZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJvbmVDb2xvcjpcIix0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuXHJcbiAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ2xvc2VcIikpO1xyXG4gICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIGRpYWcuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICBsZXQgaW5wdXREaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgIGxldCBwcmV2aWV3c0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgbGV0IG1haW5Mb2dpYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobHIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKHJpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChsZyk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZ2kpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxiKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChiaSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuc3R5bGUuZmxvYXQ9XCJsZWZ0XCI7XHJcbiAgICAgICBpbnB1dERpdi5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgICAgIG1haW5Mb2dpYy5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcblxyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoUHJldmlld3MpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKHByZXZpZXdEaXYpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIHByZXZpZXdzRGl2LnN0eWxlLmZsb2F0PVwicmlnaHRcIjtcclxuICAgICAgIG1haW5Mb2dpYy5hcHBlbmRDaGlsZChwcmV2aWV3c0Rpdik7XHJcbiAgICAgICBkaWFnLmFwcGVuZENoaWxkKG1haW5Mb2dpYyk7XHJcblxyXG4gICAgICAgZGlhZy5hcHBlbmRDaGlsZCggY2xvc2VCdXR0b24pO1xyXG4gICAgICAgZGlhZy5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLnRvcD1cIjMzJVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS5sZWZ0PVwiMjUlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmJhY2tncm91bmQ9XCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS5jb2xvcj0oXCJ2YXIoLS10ZXh0LWNvbG9yKVwiKS50cmltKCk7XHJcbiAgICAgICBpZihwYXJlbnQpXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpYWcpO1xyXG4gICAgICAgIGRpYWcuc2hvd01vZGFsKCk7XHJcbn1lbHNlXHJcbntcclxuXHJcblxyXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY29sb3JcIik7XHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVudDphbnkpXHJcbntcclxuICAgdGhpcy5waWNrZWRDb2xvcj0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcblxyXG4gICB9LmJpbmQodGhpcykpO1xyXG4gICBpZihwYXJlbnQpXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gIC8vIGhpZGRlbj0wO1xyXG4gICBpbnB1dC5jbGljaygpO1xyXG4gXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsImV4cG9ydCBlbnVtIEFjdGlvblR5cGUge1xyXG4gICAgXCJidXR0b25cIiwgXCJjaGVja2JveFwiXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRm9ybSB7XHJcbiAgICB0ZXh0T246IHN0cmluZztcclxuICAgIHRleHRPZmY/OiBzdHJpbmc7XHJcbiAgICBlbW9qaU9uPzpzdHJpbmc7XHJcbiAgICBlbW9qaU9mZj86c3RyaW5nO1xyXG4gICAgaGFuZGxlcjogYW55O1xyXG4gICAgaW5pdEhhbmRsZXI/OiAoeDogYW55KSA9PiBib29sZWFuO1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZTtcclxuIFxyXG4gfVxyXG4gXHJcbiBleHBvcnQgaW50ZXJmYWNlIENvbnRleHRNZW51VWlPcHRpb25zIHtcclxuICAgIGNvbG9yQjogXCIjNTRDNTcxXCIsXHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICB3aWR0aEJ1dHRvbjogNTBcclxuICAgICwgaGVpZ2h0QnV0dG9uOiAyMCxcclxuICAgIGJvcmRlcldpZHRoQnV0dG9uOiAxLFxyXG4gICAgcmFkaXVzOiA0LFxyXG4gICAgbWluV2lkdGg6IDEwMCxcclxuICAgIHhPZmZzZXQ6IDEyMCxcclxuICAgIHhPZmZzZXRCdXR0b246IDIwLFxyXG4gICAgcGFkZGluZ0J1dHRvbjogMSxcclxuICAgIGR1cmF0aW9uOiAxXHJcbiBcclxuIFxyXG4gXHJcbiB9XHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBleHBvcnQgY2xhc3MgQ29udGV4dE1lbnUge1xyXG4gICAgcHVibGljIHRyaWdnZXJUeXBlVmlzaWJsZTogc3RyaW5nID0gXCJtb3VzZW92ZXJcIjtcclxuICAgIHB1YmxpYyB0cmlnZ2VyVHlwZUludmlzaWJsZTogc3RyaW5nID0gXCJtb3VzZWxlYXZlXCI7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VyT3V0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbjogYW55O1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VyT3V0Q29uZGl0aW9uOiBhbnk7XHJcbiBcclxuICAgIHB1YmxpYyBjb250ZXh0TWVudVF1ZXJ5OiBzdHJpbmcgPSBcIi5jb250ZXh0TWVudVwiO1xyXG4gICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbkZvcm1bXSA9IFtdO1xyXG4gXHJcbiBcclxuICAgIHNldENvbXBsZXhUcmlnZ2VySW4oY29tcGxleDogYW55KSB7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb24gPSBjb21wbGV4O1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlckluID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNldENvbXBsZXhUcmlnZ2VyT3V0KGNvbXBsZXg6IGFueSkge1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbiA9IGNvbXBsZXg7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0ID0gdHJ1ZTtcclxuICAgIH1cclxuIFxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbjogQWN0aW9uRm9ybSkge1xyXG4gICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbnMoYWN0aW9uczogQWN0aW9uRm9ybVtdKSB7XHJcbiAgICAgICB0aGlzLmFjdGlvbnMucHVzaCguLi5hY3Rpb25zKTtcclxuICAgIH1cclxuIFxyXG4gICBkZWZhdWx0QnVpbGRJdGVtKGl0ZW06YW55LG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zKVxyXG57XHJcbiAgIGxldCB0aW1lb3V0OmFueT1udWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+aXRlbSkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLChlOkV2ZW50KT0+eyAvL2NvbnNvbGUubG9nKFwibW91c2Ugb3ZlclwiKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMuYnVpbGRDb250ZXh0TWVudVdoZW5WaXNpYmxlKGl0ZW0se2NsaWVudFg6aXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54LGNsaWVudFk6aXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55fSxvcHRpb25zKTt9LmJpbmQodGhpcylcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICwgMTAwMCk7fSk7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLChlOkV2ZW50KT0+eyAvL2NvbnNvbGUubG9nKFwibW91c2Ugb3ZlclwiKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIFxyXG4gICBkZWZhdWx0QnVpbGQob3B0aW9uczogQ29udGV4dE1lbnVVaU9wdGlvbnMgPSB7XHJcbiAgICAgIGNvbG9yQjogXCIjNTRDNTcxXCIsIGhlaWdodDogNDAsIGJvcmRlcldpZHRoOiAyLCB3aWR0aEJ1dHRvbjogNTBcclxuICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICBtaW5XaWR0aDogMTAwLCB4T2Zmc2V0OiAxMjAsIHhPZmZzZXRCdXR0b246IDIwLCBwYWRkaW5nQnV0dG9uOiAxLCBkdXJhdGlvbjogMVxyXG4gICB9LCB6SW5kZXggPSAxMDAwKVxyXG4gICB7XHJcbiAgICAgIGZvcihsZXQgaXRlbSBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKSkpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0QnVpbGRJdGVtKGl0ZW0sb3B0aW9ucyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICBjb25zdCBpdGVtc09ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoIGFzeW5jIChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKXtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBpZigoPEhUTUxFbGVtZW50Pm5vZGUpLmNsYXNzTGlzdC5jb250YWlucyhcIml0ZW1cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRCdWlsZEl0ZW0obm9kZSxvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtLWlubmVyXCIpWzBdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidHJlZSAgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBidWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgIH0sIHpJbmRleCA9IDEwMDApIHtcclxuIFxyXG4gICAgICAgICBcclxuIFxyXG4gICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgIGlmKHBhcmVudCl7XHJcbiAgICAgICBsZXQgY29uTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGV4dE1lbnVRdWVyeSk7XHJcbiBcclxuICAgICAgIGlmIChjb25NZW51ID09IG51bGwpIHtcclxuICAgICAgICAgIGNvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgY29uTWVudS5jbGFzc0xpc3QuYWRkKHRoaXMuY29udGV4dE1lbnVRdWVyeS5zbGljZSgxKSk7XHJcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29uTWVudSk7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbk1lbnUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgfVxyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQ9XCJmaXQtY29udGVudFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS56SW5kZXggPSB6SW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgIC8vICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUubWluV2lkdGggPSBvcHRpb25zLm1pbldpZHRoICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS50b3AgPSBlLmNsaWVudFkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSBvcHRpb25zLnhPZmZzZXQpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlciA9IG9wdGlvbnMuYm9yZGVyV2lkdGgudG9TdHJpbmcoKSArIFwicHggc29saWQgXCIgKyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLmdldFByb3BlcnR5VmFsdWUoXCItLXRleHQtY29sb3JcIikudHJpbSgpO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCI7XHJcbiBcclxuIFxyXG4gICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xyXG4gXHJcbiBcclxuICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICBsZXQgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiBcclxuIFxyXG4gICAgICAgICAgaWYgKGFjdGlvbi50eXBlID09IEFjdGlvblR5cGUuY2hlY2tib3gpIHtcclxuICAgICAgICAgICAgIGxldCBhY3Rpb25DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmlkID0gXCJhY3Rpb25JZFwiICsgaTtcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5odG1sRm9yID0gXCJhY3Rpb25JZFwiICsgaTtcclxuICAgICAgICAgICAgIHRleHRTcGFuLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRleHQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGhCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmdCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLm1hcmdpblRvcCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luUmlnaHQgPSAoKG9wdGlvbnMuaGVpZ2h0IC0gb3B0aW9ucy5oZWlnaHRCdXR0b24pIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIiBcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gb3B0aW9ucy5yYWRpdXMudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuaGVpZ2h0ID0gKG9wdGlvbnMuaGVpZ2h0QnV0dG9uIC0gMiAqIG9wdGlvbnMucGFkZGluZ0J1dHRvbikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUud2lkdGggPSAob3B0aW9ucy53aWR0aEJ1dHRvbiAvIDIpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zZm9ybSA9IG9wdGlvbnMuZHVyYXRpb24udG9TdHJpbmcoKSArIFwic1wiO1xyXG4gICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICBsZXQgaXNPbiA9IGFjdGlvbi5pbml0SGFuZGxlcj8gYWN0aW9uLmluaXRIYW5kbGVyKGl0ZW0pOmZhbHNlO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCA9IGlzT247XHJcbiBcclxuICAgICAgICAgICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zbGF0ZSA9IG9wdGlvbnMueE9mZnNldEJ1dHRvbi50b1N0cmluZygpICsgXCJweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT24/P1wiXCIrYWN0aW9uLnRleHRPbjtcclxuICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zbGF0ZSA9IFwiMHB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPWFjdGlvbi5lbW9qaU9mZj8/YWN0aW9uLmVtb2ppT24/P1wiXCIrIGFjdGlvbi50ZXh0T2ZmID8/IGFjdGlvbi50ZXh0T247XHJcbiBcclxuICAgICAgICAgICAgIH1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5oYW5kbGVyKGl0ZW0sIGUsIGFjdGlvbkNoZWNrYm94LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbkNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gICAgICAgICAgICAgfSk7XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICAvLyAgY2hlY2tab21iaWUuc3R5bGUsZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoYWN0aW9uQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuIFxyXG4gICAgICAgICAgfWVsc2VcclxuICAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGFjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS53aWR0aD1cIjEwMCVcIjtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50PWFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5pbml0SGFuZGxlcilcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5pbml0SGFuZGxlcihjb25NZW51KTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5jb2xvcj0gXCJ2YXIoLS10ZXh0LWNvbG9yKVwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwoKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9b3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQ9KGFjdGlvbi5lbW9qaU9mZj8/YWN0aW9uLmVtb2ppT24/P1wiXCIpK2FjdGlvbi50ZXh0T2ZmPz9hY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwoKT0+e1xyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCJcclxuICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50PShhY3Rpb24uZW1vamlPbj8/XCJcIikrYWN0aW9uLnRleHRPbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+YWN0aW9uLmhhbmRsZXIoKSk7XHJcbiBcclxuICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b24pO1xyXG4gXHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBpZih0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0PT1mYWxzZSl7XHJcbiAgICAgICAgICBjb25NZW51LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZUludmlzaWJsZSwgKGUpID0+IHtcclxuIFxyXG4gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRleHRNZW51UXVlcnkpLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50PmVsZW0pLnN0eWxlLm9wYWNpdHkgPSBcIjBcIik7XHJcbiBcclxuICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgIH0pO31cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24oY29uTWVudSk7XHJcbiAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgXHJcbiBcclxuIFxyXG4gICAgfX1cclxuIH0iLCJcclxuZXhwb3J0IGludGVyZmFjZSBNZW51T3B0aW9uXHJcbntcclxuIFxyXG4gICAgb3B0aW9uVGV4dDpzdHJpbmc7XHJcbiAgICBvcHRpb25FbW9qaT86c3RyaW5nO1xyXG4gICAgaGFuZGxlcjphbnk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uXHJcbntcclxuIHB1YmxpYyBwYXJlbnRRdWVyeTpzdHJpbmc9XCIuc2V0dGluZ3MtY29udGVudFwiO1xyXG4gbWVudVRleHQ6c3RyaW5nPVwiQ2xpY2sgT24gTWVcIjtcclxuIG1lbnVFbW9qaTpzdHJpbmc9XCJcIjtcclxuIG9wdGlvbnM6TWVudU9wdGlvbltdPVtdO1xyXG4gaGlkZGVuT2JqZWN0OmJvb2xlYW49dHJ1ZTtcclxuIHB1YmxpYyBidXR0b25DbGFzczpzdHJpbmc9XCJzZXR0aW5nXCI7XHJcbiBwdWJsaWMgaW5pdEFjdGlvbjooKT0+bnVtYmVyPSgpPT57cmV0dXJuIDA7fTtcclxuIFxyXG5zZXRPcHRpb25zKG9wdGlvbnM6TWVudU9wdGlvbltdKVxyXG57XHJcbiB0aGlzLm9wdGlvbnM9b3B0aW9ucztcclxufVxyXG5hZGRPcHRpb24ob3B0aW9uOk1lbnVPcHRpb24pXHJcbntcclxuIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbik7XHJcbn1cclxuXHJcblxyXG4gY29uc3RydWN0b3IobWVudVRleHQ6YW55LG1lbnVFbW9qaT86YW55LGluaXRBY3Rpb24/OmFueSxvcHRpb25zOk1lbnVPcHRpb25bXT1bXSlcclxuIHsgXHJcbiAgICB0aGlzLm1lbnVUZXh0PW1lbnVUZXh0O1xyXG4gICAgdGhpcy5pbml0QWN0aW9uPWluaXRBY3Rpb247XHJcbiAgICB0aGlzLm1lbnVFbW9qaT1tZW51RW1vamk7XHJcbiAgICB0aGlzLm9wdGlvbnMucHVzaCguLi5vcHRpb25zKTtcclxuXHJcbiB9XHJcblxyXG5cclxuXHJcbmJ1aWxkQnV0dG9uKG90aGVyUGFyZW50PzpzdHJpbmcpXHJcbntcclxuIGxldCBwYXJlbnREaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdGhlclBhcmVudD8/dGhpcy5wYXJlbnRRdWVyeSk7XHJcbiBsZXQgYnV0dG9uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBidXR0b25EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uXCIpO1xyXG4gYnV0dG9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubWVudVRleHQrXCIgXCIrKHRoaXMubWVudUVtb2ppPT1udWxsP1wiXCI6dGhpcy5tZW51RW1vamkpKSk7XHJcbiBidXR0b25EaXYuc3R5bGUuaGVpZ2h0PVwiZml0LWNvbnRlbnRcIjtcclxuXHJcblxyXG4gbGV0IHNlbGVjdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gbGV0IHNlbGVjdGVkUD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuIGxldCBvcHRpb25zRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBvcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvbi1vcHRpb25zXCIpO1xyXG4gb3B0aW9uc0Rpdi5zdHlsZS5vdmVyZmxvd1k9XCJzY3JvbGxcIjtcclxuIG9wdGlvbnNEaXYuc3R5bGUuaGVpZ2h0PVwiMTAwcHhcIjtcclxuXHJcblxyXG4gYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQgKHRoaXMuYnV0dG9uQ2xhc3MpO1xyXG5cclxuXHJcbiBsZXQgY3NzID0gYFxyXG4gLm1lbnUtYnV0dG9uLW9wdGlvbjpob3ZlclxyXG4gICAgIHtcclxuICAgICAgIGJhY2tncm91bmQ6Z3JheTtcclxuXHJcbiAgICAgfVxyXG5cclxuLm1lbnUtYnV0dG9uXHJcbntcclxuXHJcbnNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuXHJcbn1cclxuLm1lbnUtYnV0dG9uLW9wdGlvbnMge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi99XHJcbiAubWVudS1idXR0b24tb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBXZWJLaXQgKi9cclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO31cclxuYFxyXG5cclxuXHJcbmxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbnN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcy50cmltKCkpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG5cclxubGV0IGluZGV4T3B0aW9uPTA7XHJcbmlmKHRoaXMuaW5pdEFjdGlvbilcclxuICBpbmRleE9wdGlvbj10aGlzLmluaXRBY3Rpb24oKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiaW5kZXhPcHRpb246XCIsaW5kZXhPcHRpb24sXCJvcHRpb25zOlwiLHRoaXMub3B0aW9ucyk7XHJcbnNlbGVjdGVkUC50ZXh0Q29udGVudD10aGlzLm9wdGlvbnNbaW5kZXhPcHRpb25dLm9wdGlvblRleHQrXCIgXCIrKHRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uRW1vamk9PW51bGw/XCJcIjp0aGlzLm9wdGlvbnNbaW5kZXhPcHRpb25dLm9wdGlvbkVtb2ppKTtcclxuXHJcbiB0aGlzLm9wdGlvbnMuZm9yRWFjaCggKG9wdGlvbik9PntcclxuXHJcblxyXG4gIGxldCBvcHRpb25EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBvcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uLW9wdGlvblwiKTtcclxuICBvcHRpb25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob3B0aW9uLm9wdGlvblRleHQrXCIgXCIrKG9wdGlvbi5vcHRpb25FbW9qaT09bnVsbD9cIlwiOm9wdGlvbi5vcHRpb25FbW9qaSkpKTtcclxuICBvcHRpb25EaXYuc3R5bGUud2hpdGVTcGFjZT1cIm5vd3JhcFwiO1xyXG4gIG9wdGlvbkRpdi5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiO1xyXG4gIG9wdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCgpPT57b3B0aW9uRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImdyYXlcIn0pO1xyXG4gIG9wdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCgpPT57b3B0aW9uRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInZhcigtLWJhY2tncm91bmQtY29sb3IpXCJ9KTtcclxuXHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgb3B0aW9uLmhhbmRsZXIoKTtcclxuICBzZWxlY3RlZFAudGV4dENvbnRlbnQ9b3B0aW9uLm9wdGlvblRleHQrXCIgXCIrKG9wdGlvbi5vcHRpb25FbW9qaT09bnVsbD9cIlwiOm9wdGlvbi5vcHRpb25FbW9qaSk7XHJcbiAgICA7fSk7XHJcblxyXG4gIG9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQob3B0aW9uRGl2KTtcclxuXHJcblxyXG4gfSk7XHJcblxyXG4gIHNlbGVjdGVkUC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChvcHRpb25zRGl2KTtcclxuICAgICAgdGhpcy5oaWRkZW5PYmplY3Q9dHJ1ZTtcclxuXHJcblxyXG5cclxuICB9LmJpbmQodGhpcyksZmFsc2UpO1xyXG5cclxuICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRQKTtcclxuICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpKTtcclxuXHJcblxyXG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgaWYodGhpcy5oaWRkZW5PYmplY3Q9PXRydWUpXHJcbiAgICB7ICAgIGNvbnNvbGUubG9nKFwiZ290IGhlcmVcIik7XHJcblxyXG4gICAgICAgIGlmKCFidXR0b25EaXYuY29udGFpbnMoc2VsZWN0aW9uRGl2KSlcclxuICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChzZWxlY3Rpb25EaXYpO1xyXG5cclxuICAgICAgIHRoaXMuaGlkZGVuT2JqZWN0ID0gZmFsc2U7XHJcblxyXG4gICAgfWVsc2VcclxuICAgICAgeyAgIGlmKHNlbGVjdGlvbkRpdi5jb250YWlucyhvcHRpb25zRGl2KSlcclxuICAgICAgICAgICAgICBzZWxlY3Rpb25EaXYucmVtb3ZlQ2hpbGQob3B0aW9uc0Rpdik7XHJcblxyXG4gICAgICAgICBpZihidXR0b25EaXYuY29udGFpbnMoc2VsZWN0aW9uRGl2KSlcclxuICAgICAgICAgICAgYnV0dG9uRGl2LnJlbW92ZUNoaWxkKHNlbGVjdGlvbkRpdik7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5PYmplY3QgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG5cclxuICB9LmJpbmQodGhpcyksZmFsc2UpO1xyXG5cclxuXHJcbiBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcclxuXHJcbnJldHVybiBidXR0b25EaXY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uT3B0aW9uc1xyXG57XHJcbmhhbmRsZXI/OihjaGVja2VkOmJvb2xlYW4pPT52b2lkO1xyXG5vcHRpb25hbFRleHQ/OnN0cmluZztcclxuY29sb3I/OnN0cmluZztcclxucGFyZW50Pzphbnk7XHJcbnNpemU/Om51bWJlcjtcclxuaW5uZXJSYWRpdXM/OmFueTtcclxub3V0ZXJSYWRpdXM/OmFueTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUJ1dHRvblxyXG57XHJcblxyXG5wdWJsaWMgaGFuZGxlcjooY2hlY2tlZDpib29sZWFuLGFyZ3M6YW55KT0+dm9pZDtcclxucHVibGljIGNvbG9yOnN0cmluZz1cIiM3MGI1NjVcIjtcclxucHVibGljIG9wdGlvbmFsVGV4dDpzdHJpbmc9XCJcIjtcclxucHVibGljIHNpemU6bnVtYmVyPTIyO1xyXG5wdWJsaWMgaW5uZXJSYWRpdXM6c3RyaW5nPVwiNTAlXCI7XHJcbnB1YmxpYyBvdXRlclJhZGl1czpzdHJpbmc9XCIxNXB4XCI7XHJcblxyXG5cclxuXHJcblxyXG5idWlsZEJ1dHRvbihvcHRpb25zOlRvZ2dsZUJ1dHRvbk9wdGlvbnM9e30pXHJcbntcclxuXHJcbiBpZihvcHRpb25zLmhhbmRsZXIhPW51bGwpXHJcbiAgdGhpcy5oYW5kbGVyPW9wdGlvbnMuaGFuZGxlcjtcclxuXHJcbiAgICBpZihvcHRpb25zLmNvbG9yIT1udWxsKVxyXG57XHJcbiAgICB0aGlzLmNvbG9yPW9wdGlvbnMuY29sb3I7XHJcbn1cclxuaWYob3B0aW9ucy5zaXplIT1udWxsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2l6ZT1vcHRpb25zLnNpemU7XHJcbiAgICB9XHJcbiBpZihvcHRpb25zLmlubmVyUmFkaXVzIT1udWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclJhZGl1cz1vcHRpb25zLmlubmVyUmFkaXVzO1xyXG4gICAgICAgIH1cclxuIGlmKG9wdGlvbnMub3V0ZXJSYWRpdXMhPW51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyUmFkaXVzPW9wdGlvbnMub3V0ZXJSYWRpdXM7XHJcbiAgfVxyXG4gXHJcbiBsZXQgY3NzPVxyXG4gIGBcclxuLnNldHRpbmctYmxvY2sge1xyXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiA3cHg7XHJcblx0Zm9udC1zaXplOiAxNi40cHg7XHJcbn1cclxuXHJcbi5zZXR0aW5nLWJsb2NrIGgxIHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuXHRsaW5lLWhlaWdodDogMzVweDtcclxuXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2V0dGluZy1ibG9jayBsYWJlbFtmb3IqPVwiaW5wdXRcIl0ge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1yaWdodDogN3B4O1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogJHt0aGlzLnNpemUrMjh9cHg7XHJcblx0aGVpZ2h0OiAke3RoaXMuc2l6ZSs4fXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jaGVja2JveC1zbGlkZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcblx0dHJhbnNpdGlvbjogMC40cztcclxuXHRib3JkZXItcmFkaXVzOiAke3RoaXMub3V0ZXJSYWRpdXN9cHg7XHJcblx0ei1pbmRleDogMjAwMDtcclxufVxyXG5cclxuLmNoZWNrYm94LXNsaWRlcjpiZWZvcmUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogJHt0aGlzLnNpemV9cHg7XHJcblx0d2lkdGg6ICR7dGhpcy5zaXplfXB4O1xyXG5cdGxlZnQ6IDRweDtcclxuXHRib3R0b206IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcblx0dHJhbnNpdGlvbjogMC40cztcclxuXHRib3JkZXItcmFkaXVzOiAke3RoaXMuaW5uZXJSYWRpdXN9O1xyXG5cdHotaW5kZXg6IDE5OTk7XHJcbn1cclxuXHJcbi5kYXJrLW1vZGUgLmNoZWNrYm94LXNsaWRlcjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LXNsaWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLmNvbG9yfTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1zbGlkZXI6YmVmb3JlIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTlweCk7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG5gO1xyXG5sZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MudHJpbSgpKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuXHJcblxyXG5cdCAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRibG9jay5jbGFzc0xpc3QuYWRkKFwic2V0dGluZy1ibG9ja1wiKTtcclxuXHRcdFx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHJcblx0XHRcdGlmKG9wdGlvbnMub3B0aW9uYWxUZXh0IT1udWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob3B0aW9ucy5vcHRpb25hbFRleHQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGJsb2NrLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cdFxyXG5cdFx0XHRcdGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1jb250YWluZXJcIik7XHJcblx0XHRcdFx0Y29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblx0XHRcdFx0Y2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHRcdFx0XHRjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoaXMuaGFuZGxlcihjaGVja2JveC5jaGVja2VkKTtcclxuXHRcdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0XHRcdGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0XHRcdHNsaWRlci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtc2xpZGVyXCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XHJcblx0XHRcdFx0bmFtZS5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgIGlmKG9wdGlvbnMucGFyZW50KVxyXG5cdFx0XHRcdG9wdGlvbnMucGFyZW50LmFwcGVuZENoaWxkKGJsb2NrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcclxuXHJcblx0XHRcdH1cclxuXHRcdFxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IHtDb250ZXh0TWVudSxBY3Rpb25UeXBlLEFjdGlvbkZvcm19IGZyb20gXCIuL0NvbnRleHRNZW51XCJcclxuaW1wb3J0IHtNZW51QnV0dG9uLE1lbnVPcHRpb259IGZyb20gXCIuL01lbnVCdXR0b25cIlxyXG5pbXBvcnQge0NvbG9yUGlja2VyfSBmcm9tIFwiLi9Db2xvclBpY2tlclwiXHJcbmltcG9ydCB7VG9nZ2xlQnV0dG9uLFRvZ2dsZUJ1dHRvbk9wdGlvbnN9IGZyb20gXCIuL1RvZ2dsZUJ1dHRvblwiO1xyXG5leHBvcnQgY2xhc3MgVUkge1xyXG5cclxuICAgcHVibGljIGNvbnRleHRNZW51czpDb250ZXh0TWVudVtdPVtuZXcgQ29udGV4dE1lbnUoKV07XHJcbiAgIHB1YmxpYyBjb250ZXh0TWVudTpDb250ZXh0TWVudT10aGlzLmNvbnRleHRNZW51c1swXTtcclxuICAgcHVibGljIHRvZ2dsZUJ1dHRvbnM6VG9nZ2xlQnV0dG9uW109W107XHJcbiAgIHB1YmxpYyBtZW51QnV0dG9uczpNZW51QnV0dG9uW109W107XHJcbiAgIHB1YmxpYyBjb2xvclBpY2tlcjpDb2xvclBpY2tlcj1uZXcgQ29sb3JQaWNrZXIoKTtcclxuICAgcHVibGljIGRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5OiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBkZWZhdWx0Q29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGRlZmF1bHRNb2RhbFF1ZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICBwdWJsaWMgaW5zdGFuY2VzQ2xhc3M6IHN0cmluZyA9IFwiaW5zdGFuY2VzXCI7XHJcbiAgIHB1YmxpYyBpdGVtc0NsYXNzOiBzdHJpbmcgPSBcIml0ZW1zLWlubmVyXCI7XHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRNb2RhbFF1ZXJ5ID0gXCIubW9kYWw6bnRoLWNoaWxkKDMpXCI7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzQnV0dG9uUXVlcnkgPSBcIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiAgIH1cclxuXHJcbiAgbWFrZVRvZ2dsZUJ1dHRvbihvcHRpb25zOlRvZ2dsZUJ1dHRvbk9wdGlvbnMpXHJcbiAge1xyXG4gICBsZXQgdG9nZ2xlQnV0dG9uPW5ldyBUb2dnbGVCdXR0b24oKTtcclxuICAgdGhpcy50b2dnbGVCdXR0b25zLnB1c2godG9nZ2xlQnV0dG9uKTtcclxuICAgcmV0dXJuIHRvZ2dsZUJ1dHRvbi5idWlsZEJ1dHRvbihvcHRpb25zKVxyXG4gIH1cclxuICBpbmplY3RDU1MoY3NzOnN0cmluZylcclxue1xyXG4gICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MudHJpbSgpKSk7XHJcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4gIGFkZEFuZEJ1aWxkTWVudUJ1dHRvbihtZW51VGV4dDphbnksbWVudUVtb2ppPzphbnksaW5pdEFjdGlvbj86YW55LG9wdGlvbnM6TWVudU9wdGlvbltdPVtdKVxyXG4gIHsgICAgIGxldCBtQnV0dG9uPW5ldyBNZW51QnV0dG9uKG1lbnVUZXh0LG1lbnVFbW9qaSxpbml0QWN0aW9uLG9wdGlvbnMpXHJcbiAgICB0aGlzLm1lbnVCdXR0b25zLnB1c2gobUJ1dHRvbik7XHJcbiAgICByZXR1cm4gIG1CdXR0b24uYnVpbGRCdXR0b24oKTtcclxuXHJcbiAgfVxyXG5cclxuICAgb25PYnNlcnZpbmdJbnN0YW5jZShhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ub2RlKS5pZCAhPSBcImluc3RhbmNlLTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcbiAgIG9uT2JzZXJ2aW5nSXRlbXMoYXBwbHlPbk9uZUVsZW1lbnQ6IGFueSkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYXBwbHlPbk9uZUVsZW1lbnQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbnN0YW5jZXNDbGFzcylbMF0sIHtcclxuICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxufTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIEdNIGZyb20gXCJncmVhc2Vtb25rZXlcIjtcclxuLy9zb3VyY2UgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB1bnNhZmVXaW5kb3dcclxuZXhwb3J0IGNsYXNzIGRhdGFcclxue1xyXG4gICBwdWJsaWMgIHNvdXJjZTphbnk9bnVsbDtcclxuICAgcHVibGljICBleHBGOmFueT1udWxsO1xyXG5cclxuXHJcblxyXG4gIC8vdVc9dW5zYWZlV2luZG93IG11c3QgYmUgZG9uZSBmcm9tIHVzZXJzY3JpcHRcclxuICAvL2V4cEY9ZXhwb3J0RnVuY3Rpb25cclxuXHJcbnB1YmxpYyBhZGREYXRhU291cmNlKGV4cEY6YW55LHVXOmFueT1zZWxmKVxyXG57IFxyXG4gICB0aGlzLnNvdXJjZT11Vy4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXVxyXG4gICB0aGlzLmV4cEY9ZXhwRjtcclxuXHJcbn1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50cygpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5zb3VyY2UuX2RhdGEuZWxlbWVudHM7XHJcbiAgfVxyXG4gICAgZ2V0SW5zdGFuY2VzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5pbnN0YW5jZXM7XHJcbiAgfVxyXG4gICAgIG9uU29ydGluZyhtZXRob2ROYW1lOnN0cmluZyxuZXdTdmc6c3RyaW5nLGFkZFNvcnRpbmdNZXRob2Q6KHg6YW55LHk6YW55KT0+YW55PXg9PngsYWRkU3R5bGVDaGFuZ2VzPzphbnkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyO1xyXG5cclxuXHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyPXRoaXMuZXhwRigoKSA9PiB7XHJcblxyXG4gICBpZiAodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgIHtcclxuICAgICAgbGV0IHByZXZpb3VzPVsuLi5iZWZvcmUoKV07XHJcbiAgICAgIHJldHVybiBhZGRTb3J0aW5nTWV0aG9kKHByZXZpb3VzLHRoaXMuZ2V0RWxlbWVudHMoKSk7XHJcbiAgICAgfWVsc2VcclxuICAgICB7XHJcbiAgICAgICByZXR1cm4gYmVmb3JlKCk7XHJcblxyXG4gICAgIH1cclxuXHJcbiAgfSx1bnNhZmVXaW5kb3cpO1xyXG4gIFxyXG50aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5zb3J0cy5wdXNoKG1ldGhvZE5hbWUpO1xyXG5jb25zdCBzb3J0QnV0dG9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgIFxyXG5cclxuICAgICAgICAgaWYodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgICAgICAgIHsgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICBpZiggKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjLnRyaW0oKT09XCJodHRwczovL25lYWwuZnVuL2luZmluaXRlLWNyYWZ0L1wiK21ldGhvZE5hbWUrXCIuc3ZnXCIpXHJcbiAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjPW5ld1N2ZztcclxuICAgICAgICAgICAgICAgICBpZihhZGRTdHlsZUNoYW5nZXMhPW51bGwpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC8vaW1nLnN0eWxlLmZpbHRlcj1cIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfSk7XHJcblxyXG4gICAgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuICAgICAgIGNvbnNvbGUubG9nKGltZyxpbWcudGV4dENvbnRlbnQpXHJcbiAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcclxuICAgICAgIHNvcnRCdXR0b25PYnNlcnZlci5vYnNlcnZlKGltZyxjb25maWcpO1xyXG5cclxuXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICAgICBvbkZpbHRlcmluZyhhZGRGaWx0ZXJNZXRob2RPblF1ZXJ5Oih4OmFueSx5OmFueSk9PmFueT0oeDphbnkseTphbnkpPT55KCkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI7XHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuICBsZXQgcXVlcnk9IHRoaXMuc291cmNlLnNlYXJjaFF1ZXJ5XHJcbiBcclxuIFxyXG4gXHJcbiAgcmV0dXJuIGFkZEZpbHRlck1ldGhvZE9uUXVlcnkocXVlcnksYmVmb3JlKTtcclxuICBcclxuICBcclxuICB9LHVuc2FmZVdpbmRvdykgO1xyXG4gIH1cclxuICBcclxuICBcclxuYWRkSW5Ub29sVGlwc0FzeW5jKGNhbGxiYWNrOih0ZXh0OnN0cmluZyxlbW9qaTpzdHJpbmcpPT4gUHJvbWlzZTxzdHJpbmc+KVxyXG57ICAgIFxyXG4gIFxyXG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYC5pdGVtLmluc3RhbmNlOjpiZWZvcmUge3RleHQtYWxpZ246IGNlbnRlcjt9YC50cmltKCkpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG5cclxuICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoIGFzeW5jIChtdXRhdGlvbnMpID0+IHtcclxuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMClcclxuICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKXtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgaWYoKDxIVE1MRWxlbWVudD5ub2RlKS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnN0YW5jZVwiKSlcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdGV4dD0gKDxIVE1MRWxlbWVudD5ub2RlKS5nZXRBdHRyaWJ1dGUoXCJ0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlVGV4dD1cIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGlzdFwiLG5vZGUuY2hpbGROb2RlcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgbiBvZiBBcnJheS5mcm9tKCg8SFRNTEVsZW1lbnQ+bm9kZSkuY2hpbGROb2RlcykpXHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYobi5ub2RlVHlwZT09MyAmJiAoPFRleHQ+bikubGVuZ3RoIT0wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm46XCIsbixcIm5vZGUtdHlwZTpcIixuLm5vZGVUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVGV4dCs9bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgbGV0ICBlbW9qaT0oPEhUTUxFbGVtZW50Pm5vZGUpLnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdGFuY2UtZW1vamlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5vZGVUZXh0PWF3YWl0IGNhbGxiYWNrKG5vZGVUZXh0LGVtb2ppLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYodGV4dD09bnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXRleHQrXCJcXG5cIitub2RlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+bm9kZSkuc2V0QXR0cmlidXRlKFwidG9vbHRpcFwiLHRleHQpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfX1cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnN0YW5jZXNcIilbMF0sIHtcclxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIHN1YnRyZWUgIDogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxuXHJcbn1cclxuYWRkSW5Ub29sVGlwcyhjYWxsYmFjazoodGV4dDpzdHJpbmcsZW1vamk6c3RyaW5nKT0+IHN0cmluZylcclxue1xyXG5cclxuXHJcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgLml0ZW0uaW5zdGFuY2U6OmJlZm9yZSB7dGV4dC1hbGlnbjogY2VudGVyO31gLnRyaW0oKSkpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gIFxyXG4gIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggYXN5bmMgKG11dGF0aW9ucykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2Rlcykpe1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBpZigoPEhUTUxFbGVtZW50Pm5vZGUpLmNsYXNzTGlzdC5jb250YWlucyhcImluc3RhbmNlXCIpKVxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0PSAoPEhUTUxFbGVtZW50Pm5vZGUpLmdldEF0dHJpYnV0ZShcInRvb2x0aXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVUZXh0PVwiXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4aXN0XCIsbm9kZS5jaGlsZE5vZGVzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBuIG9mIEFycmF5LmZyb20oKDxIVE1MRWxlbWVudD5ub2RlKS5jaGlsZE5vZGVzKSlcclxuICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBpZihuLm5vZGVUeXBlPT0zICYmICg8VGV4dD5uKS5sZW5ndGghPTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibjpcIixuLFwibm9kZS10eXBlOlwiLG4ubm9kZVR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUZXh0Kz1uLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBsZXQgIGVtb2ppPSg8SFRNTEVsZW1lbnQ+bm9kZSkucXVlcnlTZWxlY3RvcihcIi5pbnN0YW5jZS1lbW9qaVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgbm9kZVRleHQ9Y2FsbGJhY2sobm9kZVRleHQsZW1vamkudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICBpZih0ZXh0PT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9dGV4dCtcIlxcblwiK25vZGVUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgKDxIVE1MRWxlbWVudD5ub2RlKS5zZXRBdHRyaWJ1dGUoXCJ0b29sdGlwXCIsdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbmNlT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5zdGFuY2VzXCIpWzBdLCB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlICA6IHRydWUsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICB9XHJcblxyXG5cclxufTsiLCJleHBvcnQgY2xhc3MgdXRpbHNcclxue1xyXG5cclxuXHJcbiAgICBwdWJsaWMgdXNlckFkZGVkTWV0aG9kczphbnlbXT1bXTtcclxuICAgIHB1YmxpYyBFeHBvcnRTYXZlQnV0dG9uUXVlcnk6c3RyaW5nID1cIi5zZXR0aW5nW2Zvcj1pbXBvcnQtc2F2ZV0gKyAuc2V0dGluZ1wiO1xyXG4gICAgcHVibGljIHNhdmVGaWxlTmFtZTpzdHJpbmc9XCJpbmZpbml0ZWNyYWZ0Lmpzb25cIjtcclxuXHJcblxyXG4gICAgc2F2ZVNhdmVGaWxlT25QQygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2s7XHJcbiAgICAgICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrID0gKCkgPT4ge0hUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayA9IGhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNvbnN0IGJvZHlPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSAhPT0gXCJjaGlsZExpc3RcIikgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNob3IgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpLmZpbmQoKG5vZGUpID0+e1xyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICg8YW55Pm5vZGUpLmRvd25sb2FkID09PSB0aGlzLnNhdmVGaWxlTmFtZX0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChhbmNob3IpIHJldHVybiBmZXRjaCgoPEhUTUxBbmNob3JFbGVtZW50PmFuY2hvcikuaHJlZikudGhlbihyZXNvbHZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJvZHlPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG4gICAgICAgIGhhbmRsZUNsaWNrLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLkV4cG9ydFNhdmVCdXR0b25RdWVyeSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib2R5T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZWplY3QoXCJUaW1lZCBvdXRcIilcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0cnVjdG9yKClcclxue1xyXG5cclxufVxyXG5hZGRGdW5jdGlvbihuYW1lOnN0cmluZyxjYWxsYmFjazphbnkpXHJcbntcclxuICAgIHRoaXMudXNlckFkZGVkTWV0aG9kcy5wdXNoKHtuYW1lOm5hbWUsaGFuZGxlcjpjYWxsYmFja30pO1xyXG59XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImxldCBtZXNzYWdlOiBzdHJpbmcgPSAnSGVsbG8sIFdvcmxkISc7XHJcbmNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG5pbXBvcnQge1VJfSBmcm9tICBcIi4vVUlcIlxyXG5pbXBvcnQge2RhdGF9IGZyb20gIFwiLi9kYXRhXCJcclxuaW1wb3J0IHt1dGlsc30gZnJvbSAgXCIuL3V0aWxzXCJcclxuZXhwb3J0IGNsYXNzIE1haW5cclxue1xyXG4gcHVibGljICR1aTpVSTtcclxuIHB1YmxpYyAkZGF0YTpkYXRhO1xyXG4gcHVibGljICR1dGlsczp1dGlscztcclxuIGNvbnN0cnVjdG9yKClcclxuIHtcclxuICB0aGlzLiR1aT1uZXcgVUkoKTtcclxuICB0aGlzLiRkYXRhPW5ldyBkYXRhKCk7XHJcbiAgdGhpcy4kdXRpbHM9bmV3IHV0aWxzKCk7XHJcbiB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgb2JqZWN0U291cmNlOk1haW49bmV3IE1haW4oKTsgXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==