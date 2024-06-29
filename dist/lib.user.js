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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCwyQkFBVyxHQUFYLFVBQVksSUFBVyxFQUFDLFFBQVk7UUFFaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFlBQUM7QUFBRCxDQUFDO0FBNUNZLHNCQUFLOzs7Ozs7O1VDQWxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkEsSUFBSSxPQUFPLEdBQVcsZUFBZSxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsMERBQXdCO0FBQ3hCLGdFQUE0QjtBQUM1QixtRUFBOEI7QUFDOUI7SUFLQztRQUVDLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxPQUFFLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLGFBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRixXQUFDO0FBQUQsQ0FBQztBQWJZLG9CQUFJO0FBZ0JOLG9CQUFZLEdBQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0NvbW11bml0eS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL0NvbG9yUGlja2VyLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9Db250ZXh0TWVudS50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvTWVudUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvVG9nZ2xlQnV0dG9uLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9NYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNvbW11bml0eVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb21tdW5pdHlcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyXHJcbntcclxuIHB1YmxpYyAgY2FsbGJhY2s6YW55O1xyXG4gcHVibGljICBwaWNrZWRDb2xvcjpzdHJpbmc7XHJcblxyXG5tYWtlQ29sb3JQaWNrZXIobG9jYWxDb2xiYWNrPzphbnksZGVidWc6Ym9vbGVhbj1mYWxzZSlcclxue1xyXG4gICBpZihsb2NhbENvbGJhY2shPW51bGwpXHJcbiAgICB0aGlzLmNhbGxiYWNrPWxvY2FsQ29sYmFjaztcclxuICAgICAgXHJcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgIGlzQW5kcm9pZCA9IHVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzTW9iaWxlID0gdWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAtMTtcclxuICAgIHZhciAgaXNXZWJPcyA9IHVhLmluZGV4T2YoXCJ3ZWJvc1wiKSA+IC0xO1xyXG4gICAgdmFyICBpc0lwaG9uZSA9IHVhLmluZGV4T2YoXCJpcGhvbmVcIikgPiAtMTtcclxuICAgIHZhciAgaXNJcGFkID0gdWEuaW5kZXhPZihcImlwYWRcIikgPiAtMTtcclxuICAgIHZhciAgaXNMaW51eCA9IHVhLmluZGV4T2YoXCJsaW51eFwiKSA+IC0xO1xyXG4gICAgbGV0IHBhcmVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuICBpZigoaXNBbmRyb2lkIHx8IGlzTW9iaWxlIHx8IGlzTGludXggfHwgaXNXZWJPcyB8fCBpc0lwaG9uZSB8fCBpc0lwYWQpIHx8IGRlYnVnKVxyXG4gICAge1xyXG4gICAgICBcclxuICAgICAgIGxldCBkaWFnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcblxyXG4gICAgICAgbGV0IGxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIGxyLmlubmVyVGV4dD1cIlIgKDAtMjU1KVwiO1xyXG4gICAgICAgbHIuc3R5bGUuY29sb3I9XCJyZWRcIjtcclxuICAgICAgIGxldCBsZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsZy5pbm5lclRleHQ9XCJHICgwLTI1NSlcIjtcclxuICAgICAgIGxnLnN0eWxlLmNvbG9yPVwiZ3JlZW5cIjtcclxuICAgICAgIGxldCBsYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsYi5pbm5lclRleHQ9XCJCICgwLTI1NSlcIjtcclxuICAgICAgIGxiLnN0eWxlLmNvbG9yPVwiYmx1ZVwiO1xyXG4gICAgICAgbGV0IFByZXZpZXdzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIFByZXZpZXdzLmlubmVyVGV4dD1cIlByZXZpZXcgY29sb3JcIjtcclxuICAgICAgIGxldCBwcmV2aWV3RGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLndpZHRoPVwiMTAwcHhcIjtcclxuICAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuaGVpZ2h0PVwiMTAwcHhcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgbGV0IHJpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICByaS50eXBlPVwibnVtYmVyXCI7XHJcbiAgICAgICAgcmkubWluPVwiMFwiO1xyXG4gICAgICAgIHJpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgIHJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgbGV0IGdpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgIGdpLnR5cGU9XCJudW1iZXJcIjtcclxuICAgICAgIGdpLm1pbj1cIjBcIjtcclxuICAgICAgIGdpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcbiAgICAgICBsZXQgYmk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgYmkudHlwZT1cIm51bWJlclwiO1xyXG4gICAgICAgYmkubWluPVwiMFwiO1xyXG4gICAgICAgYmkubWF4PVwiMjU1XCI7XHJcbiAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuICAgICAgIGxldCByZ2IySGV4ID0gKHM6YW55KSA9PiBzLm1hdGNoKC9bMC05XSsvZykucmVkdWNlKChhOmFueSwgYjphbnkpID0+IGErKGJ8MjU2KS50b1N0cmluZygxNikuc2xpY2UoMSksICcjJyk7XHJcbiAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcblxyXG5cclxuICAgICAgICAgcmkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbnQ6YW55KXtcclxuXHJcblxyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJpOlwiLHJpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG5cclxuICAgICAgICAgIGlmKHJpLnZhbHVlPT1cIlwiKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICByaS52YWx1ZT1cIjBcIjtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KHJpLnZhbHVlKTwwKVxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIwXCI7XHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KHJpLnZhbHVlKT4yNTUpXHJcbiAgICAgICAgICAgICByaS52YWx1ZT1cIjI1NVwiO1xyXG5cclxuXHJcblxyXG4gICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcbiAgICAgICAgIHRoaXMucGlja2VkQ29sb3I9cmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib25lQ29sb3I6XCIsdGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgIGdpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW46YW55KXtcclxuXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2k6XCIsZ2kudmFsdWUsXCJzb21ldGhpbmdcIik7XHJcblxyXG4gICAgICAgICBpZihnaS52YWx1ZT09XCJcIilcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoZ2kudmFsdWUpPDApXHJcbiAgICAgICAgICAgICBnaS52YWx1ZT1cIjBcIjtcclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChnaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZF9jb2xvclwiLHJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpKTtcclxuICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgYmkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbnQ6YW55KXtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJpOlwiLGJpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG4gICAgICAgICAgaWYoYmkudmFsdWU9PVwiXCIpXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgIGJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChiaS52YWx1ZSk8MClcclxuICAgICAgICAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuXHJcbiAgICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGJpLnZhbHVlKT4yNTUpXHJcbiAgICAgICAgICAgICBiaS52YWx1ZT1cIjI1NVwiO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG4gICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG5cclxuICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgY2xvc2VCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDbG9zZVwiKSk7XHJcbiAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgZGlhZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgIGxldCBpbnB1dERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgbGV0IHByZXZpZXdzRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBsZXQgbWFpbkxvZ2ljPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChscik7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocmkpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxnKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChnaSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobGIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGJpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5zdHlsZS5mbG9hdD1cImxlZnRcIjtcclxuICAgICAgIGlucHV0RGl2LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gICAgICAgbWFpbkxvZ2ljLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuXHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChQcmV2aWV3cyk7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQocHJldmlld0Rpdik7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgcHJldmlld3NEaXYuc3R5bGUuZmxvYXQ9XCJyaWdodFwiO1xyXG4gICAgICAgbWFpbkxvZ2ljLmFwcGVuZENoaWxkKHByZXZpZXdzRGl2KTtcclxuICAgICAgIGRpYWcuYXBwZW5kQ2hpbGQobWFpbkxvZ2ljKTtcclxuXHJcbiAgICAgICBkaWFnLmFwcGVuZENoaWxkKCBjbG9zZUJ1dHRvbik7XHJcbiAgICAgICBkaWFnLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIjtcclxuICAgICAgIGRpYWcuc3R5bGUudG9wPVwiMzMlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmxlZnQ9XCIyNSVcIjtcclxuICAgICAgIGRpYWcuc3R5bGUuYmFja2dyb3VuZD1cInZhcigtLWJhY2tncm91bmQtY29sb3IpXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmNvbG9yPShcInZhcigtLXRleHQtY29sb3IpXCIpLnRyaW0oKTtcclxuICAgICAgIGlmKHBhcmVudClcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGlhZyk7XHJcbiAgICAgICAgZGlhZy5zaG93TW9kYWwoKTtcclxufWVsc2Vcclxue1xyXG5cclxuXHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcclxuXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSlcclxue1xyXG4gICB0aGlzLnBpY2tlZENvbG9yPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuXHJcbiAgIH0uYmluZCh0aGlzKSk7XHJcbiAgIGlmKHBhcmVudClcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgLy8gaGlkZGVuPTA7XHJcbiAgIGlucHV0LmNsaWNrKCk7XHJcbiBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XHJcbiAgIFwiYnV0dG9uXCIsIFwiY2hlY2tib3hcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkZvcm0ge1xyXG4gICB0ZXh0T246IHN0cmluZztcclxuICAgdGV4dE9mZj86IHN0cmluZztcclxuICAgZW1vamlPbj86IHN0cmluZztcclxuICAgZW1vamlPZmY/OiBzdHJpbmc7XHJcbiAgIGhhbmRsZXI6IGFueTtcclxuICAgaW5pdEhhbmRsZXI/OiAoeDogYW55KSA9PiBib29sZWFuO1xyXG4gICB0eXBlOiBBY3Rpb25UeXBlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250ZXh0TWVudVVpT3B0aW9ucyB7XHJcbiAgIGNvbG9yQjogXCIjNTRDNTcxXCIsXHJcbiAgIGhlaWdodDogNDAsXHJcbiAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICB3aWR0aEJ1dHRvbjogNTBcclxuICAgLCBoZWlnaHRCdXR0b246IDIwLFxyXG4gICBib3JkZXJXaWR0aEJ1dHRvbjogMSxcclxuICAgcmFkaXVzOiA0LFxyXG4gICBtaW5XaWR0aDogMTAwLFxyXG4gICB4T2Zmc2V0OiAxMjAsXHJcbiAgIHhPZmZzZXRCdXR0b246IDIwLFxyXG4gICBwYWRkaW5nQnV0dG9uOiAxLFxyXG4gICBkdXJhdGlvbjogMVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudSB7XHJcbiAgIHB1YmxpYyB0cmlnZ2VyVHlwZVZpc2libGU6IHN0cmluZyA9IFwibW91c2VvdmVyXCI7XHJcbiAgIHB1YmxpYyB0cmlnZ2VyVHlwZUludmlzaWJsZTogc3RyaW5nID0gXCJtb3VzZWxlYXZlXCI7XHJcbiAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlckluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlck91dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBwdWJsaWMgY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbjogYW55O1xyXG4gICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb246IGFueTtcclxuXHJcbiAgIHB1YmxpYyBjb250ZXh0TWVudVF1ZXJ5OiBzdHJpbmcgPSBcIi5jb250ZXh0TWVudVwiO1xyXG4gICBwdWJsaWMgYWN0aW9uczogQWN0aW9uRm9ybVtdID0gW107XHJcblxyXG5cclxuICAgc2V0Q29tcGxleFRyaWdnZXJJbihjb21wbGV4OiBhbnkpIHtcclxuICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlckluQ29uZGl0aW9uID0gY29tcGxleDtcclxuICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlckluID0gdHJ1ZTtcclxuICAgfVxyXG4gICBzZXRDb21wbGV4VHJpZ2dlck91dChjb21wbGV4OiBhbnkpIHtcclxuICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbiA9IGNvbXBsZXg7XHJcbiAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXQgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBhZGRBY3Rpb24oYWN0aW9uOiBBY3Rpb25Gb3JtKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgIH1cclxuICAgYWRkQWN0aW9ucyhhY3Rpb25zOiBBY3Rpb25Gb3JtW10pIHtcclxuICAgICAgdGhpcy5hY3Rpb25zLnB1c2goLi4uYWN0aW9ucyk7XHJcbiAgIH1cclxuXHJcbiAgIGRlZmF1bHRCdWlsZEl0ZW0oaXRlbTogYW55LCBvcHRpb25zOiBDb250ZXh0TWVudVVpT3B0aW9ucykge1xyXG4gICAgICBsZXQgdGltZW91dDogYW55ID0gbnVsbDtcclxuICAgICAgKDxIVE1MRWxlbWVudD5pdGVtKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlOiBFdmVudCkgPT4geyAvL2NvbnNvbGUubG9nKFwibW91c2Ugb3ZlclwiKTtcclxuXHJcbiAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgdGhpcy5idWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbSwgeyBjbGllbnRYOiBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLngsIGNsaWVudFk6IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSB9LCBvcHRpb25zKTsgfS5iaW5kKHRoaXMpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICwgMTAwMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZTogRXZlbnQpID0+IHsgLy9jb25zb2xlLmxvZyhcIm1vdXNlIG92ZXJcIik7XHJcblxyXG4gICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG5cclxuICAgZGVmYXVsdEJ1aWxkKG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICBjb2xvckI6IFwiIzU0QzU3MVwiLCBoZWlnaHQ6IDQwLCBib3JkZXJXaWR0aDogMiwgd2lkdGhCdXR0b246IDUwXHJcbiAgICAgICwgaGVpZ2h0QnV0dG9uOiAyMCwgYm9yZGVyV2lkdGhCdXR0b246IDEsIHJhZGl1czogNCxcclxuICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgfSwgekluZGV4ID0gMTAwMCkge1xyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpKSkge1xyXG4gICAgICAgICB0aGlzLmRlZmF1bHRCdWlsZEl0ZW0oaXRlbSwgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihhc3luYyAobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ub2RlKS5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGVtXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRCdWlsZEl0ZW0obm9kZSwgb3B0aW9ucyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICBpdGVtc09ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW0taW5uZXJcIilbMF0sIHtcclxuICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgYnVpbGRDb250ZXh0TWVudVdoZW5WaXNpYmxlKGl0ZW06IGFueSwgZTogYW55LCBvcHRpb25zOiBDb250ZXh0TWVudVVpT3B0aW9ucyA9IHtcclxuICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAsIGhlaWdodEJ1dHRvbjogMjAsIGJvcmRlcldpZHRoQnV0dG9uOiAxLCByYWRpdXM6IDQsXHJcbiAgICAgIG1pbldpZHRoOiAxMDAsIHhPZmZzZXQ6IDEyMCwgeE9mZnNldEJ1dHRvbjogMjAsIHBhZGRpbmdCdXR0b246IDEsIGR1cmF0aW9uOiAxXHJcbiAgIH0sIHpJbmRleCA9IDEwMDApIHtcclxuXHJcblxyXG5cclxuICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICBsZXQgY29uTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGV4dE1lbnVRdWVyeSk7XHJcblxyXG4gICAgICAgICBpZiAoY29uTWVudSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb25NZW51LmNsYXNzTGlzdC5hZGQodGhpcy5jb250ZXh0TWVudVF1ZXJ5LnNsaWNlKDEpKTtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbk1lbnUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25NZW51LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xyXG4gICAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuekluZGV4ID0gekluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgIC8vICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5taW5XaWR0aCA9IG9wdGlvbnMubWluV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUudG9wID0gZS5jbGllbnRZLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSBvcHRpb25zLnhPZmZzZXQpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyID0gb3B0aW9ucy5ib3JkZXJXaWR0aC50b1N0cmluZygpICsgXCJweCBzb2xpZCBcIiArIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGV4dC1jb2xvclwiKS50cmltKCk7XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyUmFkaXVzID0gb3B0aW9ucy5yYWRpdXMudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCI7XHJcblxyXG5cclxuICAgICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gQWN0aW9uVHlwZS5jaGVja2JveCkge1xyXG4gICAgICAgICAgICAgICBsZXQgYWN0aW9uQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guaWQgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgICB0ZXh0U3Bhbi5odG1sRm9yID0gXCJhY3Rpb25JZFwiICsgaTtcclxuICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRleHQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ0J1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5Ub3AgPSAoKG9wdGlvbnMuaGVpZ2h0IC0gb3B0aW9ucy5oZWlnaHRCdXR0b24pIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luUmlnaHQgPSAoKG9wdGlvbnMuaGVpZ2h0IC0gb3B0aW9ucy5oZWlnaHRCdXR0b24pIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIFwiO1xyXG4gICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMucmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuaGVpZ2h0ID0gKG9wdGlvbnMuaGVpZ2h0QnV0dG9uIC0gMiAqIG9wdGlvbnMucGFkZGluZ0J1dHRvbikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IChvcHRpb25zLndpZHRoQnV0dG9uIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gb3B0aW9ucy5kdXJhdGlvbi50b1N0cmluZygpICsgXCJzXCI7XHJcbiAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICAgICAgICBsZXQgaXNPbiA9IGFjdGlvbi5pbml0SGFuZGxlciA/IGFjdGlvbi5pbml0SGFuZGxlcihpdGVtKSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5jaGVja2VkID0gaXNPbjtcclxuXHJcbiAgICAgICAgICAgICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uID8/IFwiXCIgKyBhY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zbGF0ZSA9IFwiMHB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9mZiA/PyBhY3Rpb24uZW1vamlPbiA/PyBcIlwiICsgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoaXRlbSwgZSwgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25DaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uID8/IFwiXCIgKyBhY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zbGF0ZSA9IFwiMHB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT2ZmID8/IGFjdGlvbi5lbW9qaU9uID8/IFwiXCIgKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgLy8gIGNoZWNrWm9tYmllLnN0eWxlLGRpc3BsYXk9XCJub25lXCI7XHJcbiAgICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoYWN0aW9uQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBsZXQgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uID8/IFwiXCIgKyBhY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgICBpZiAoYWN0aW9uLmluaXRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbi5pbml0SGFuZGxlcihjb25NZW51KTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiO1xyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gKGFjdGlvbi5lbW9qaU9mZiA/PyBhY3Rpb24uZW1vamlPbiA/PyBcIlwiKSArIGFjdGlvbi50ZXh0T2ZmID8/IGFjdGlvbi50ZXh0T247XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9IChhY3Rpb24uZW1vamlPbiA/PyBcIlwiKSArIGFjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3Rpb24uaGFuZGxlcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgIGlmICh0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRyaWdnZXJUeXBlSW52aXNpYmxlLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGV4dE1lbnVRdWVyeSkuZm9yRWFjaCgoZWxlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgKDxIVE1MRWxlbWVudD5lbGVtKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0Q29uZGl0aW9uKGNvbk1lbnUpO1xyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVudU9wdGlvblxyXG57XHJcbiBcclxuICAgIG9wdGlvblRleHQ6c3RyaW5nO1xyXG4gICAgb3B0aW9uRW1vamk/OnN0cmluZztcclxuICAgIGhhbmRsZXI6YW55O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvblxyXG57XHJcbiBwdWJsaWMgcGFyZW50UXVlcnk6c3RyaW5nPVwiLnNldHRpbmdzLWNvbnRlbnRcIjtcclxuIG1lbnVUZXh0OnN0cmluZz1cIkNsaWNrIE9uIE1lXCI7XHJcbiBtZW51RW1vamk6c3RyaW5nPVwiXCI7XHJcbiBvcHRpb25zOk1lbnVPcHRpb25bXT1bXTtcclxuIGhpZGRlbk9iamVjdDpib29sZWFuPXRydWU7XHJcbiBwdWJsaWMgYnV0dG9uQ2xhc3M6c3RyaW5nPVwic2V0dGluZ1wiO1xyXG4gcHVibGljIGluaXRBY3Rpb246KCk9Pm51bWJlcj0oKT0+e3JldHVybiAwO307XHJcbiBcclxuc2V0T3B0aW9ucyhvcHRpb25zOk1lbnVPcHRpb25bXSlcclxue1xyXG4gdGhpcy5vcHRpb25zPW9wdGlvbnM7XHJcbn1cclxuYWRkT3B0aW9uKG9wdGlvbjpNZW51T3B0aW9uKVxyXG57XHJcbiB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pO1xyXG59XHJcblxyXG5cclxuIGNvbnN0cnVjdG9yKG1lbnVUZXh0OmFueSxtZW51RW1vamk/OmFueSxpbml0QWN0aW9uPzphbnksb3B0aW9uczpNZW51T3B0aW9uW109W10pXHJcbiB7IFxyXG4gICAgdGhpcy5tZW51VGV4dD1tZW51VGV4dDtcclxuICAgIHRoaXMuaW5pdEFjdGlvbj1pbml0QWN0aW9uO1xyXG4gICAgdGhpcy5tZW51RW1vamk9bWVudUVtb2ppO1xyXG4gICAgdGhpcy5vcHRpb25zLnB1c2goLi4ub3B0aW9ucyk7XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG5idWlsZEJ1dHRvbihvdGhlclBhcmVudD86c3RyaW5nKVxyXG57XHJcbiBsZXQgcGFyZW50RGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3RoZXJQYXJlbnQ/P3RoaXMucGFyZW50UXVlcnkpO1xyXG4gbGV0IGJ1dHRvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvblwiKTtcclxuIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLm1lbnVUZXh0K1wiIFwiKyh0aGlzLm1lbnVFbW9qaT09bnVsbD9cIlwiOnRoaXMubWVudUVtb2ppKSkpO1xyXG4gYnV0dG9uRGl2LnN0eWxlLmhlaWdodD1cImZpdC1jb250ZW50XCI7XHJcblxyXG5cclxuIGxldCBzZWxlY3Rpb25EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuIGxldCBzZWxlY3RlZFA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiBsZXQgb3B0aW9uc0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gb3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tb3B0aW9uc1wiKTtcclxuIG9wdGlvbnNEaXYuc3R5bGUub3ZlcmZsb3dZPVwic2Nyb2xsXCI7XHJcbiBvcHRpb25zRGl2LnN0eWxlLmhlaWdodD1cIjEwMHB4XCI7XHJcblxyXG5cclxuIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkICh0aGlzLmJ1dHRvbkNsYXNzKTtcclxuXHJcblxyXG4gbGV0IGNzcyA9IGBcclxuIC5tZW51LWJ1dHRvbi1vcHRpb246aG92ZXJcclxuICAgICB7XHJcbiAgICAgICBiYWNrZ3JvdW5kOmdyYXk7XHJcblxyXG4gICAgIH1cclxuXHJcbi5tZW51LWJ1dHRvblxyXG57XHJcblxyXG5zY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcblxyXG59XHJcbi5tZW51LWJ1dHRvbi1vcHRpb25zIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovfVxyXG4gLm1lbnUtYnV0dG9uLW9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgLyogV2ViS2l0ICovXHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDt9XHJcbmBcclxuXHJcblxyXG5sZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MudHJpbSgpKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuXHJcbmxldCBpbmRleE9wdGlvbj0wO1xyXG5pZih0aGlzLmluaXRBY3Rpb24pXHJcbiAgaW5kZXhPcHRpb249dGhpcy5pbml0QWN0aW9uKCk7XHJcblxyXG5jb25zb2xlLmxvZyhcImluZGV4T3B0aW9uOlwiLGluZGV4T3B0aW9uLFwib3B0aW9uczpcIix0aGlzLm9wdGlvbnMpO1xyXG5zZWxlY3RlZFAudGV4dENvbnRlbnQ9dGhpcy5vcHRpb25zW2luZGV4T3B0aW9uXS5vcHRpb25UZXh0K1wiIFwiKyh0aGlzLm9wdGlvbnNbaW5kZXhPcHRpb25dLm9wdGlvbkVtb2ppPT1udWxsP1wiXCI6dGhpcy5vcHRpb25zW2luZGV4T3B0aW9uXS5vcHRpb25FbW9qaSk7XHJcblxyXG4gdGhpcy5vcHRpb25zLmZvckVhY2goIChvcHRpb24pPT57XHJcblxyXG5cclxuICBsZXQgb3B0aW9uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgb3B0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvbi1vcHRpb25cIik7XHJcbiAgb3B0aW9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9wdGlvbi5vcHRpb25UZXh0K1wiIFwiKyhvcHRpb24ub3B0aW9uRW1vamk9PW51bGw/XCJcIjpvcHRpb24ub3B0aW9uRW1vamkpKSk7XHJcbiAgb3B0aW9uRGl2LnN0eWxlLndoaXRlU3BhY2U9XCJub3dyYXBcIjtcclxuICBvcHRpb25EaXYuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjtcclxuICBvcHRpb25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwoKT0+e29wdGlvbkRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJncmF5XCJ9KTtcclxuICBvcHRpb25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwoKT0+e29wdGlvbkRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwifSk7XHJcblxyXG4gIG9wdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gIG9wdGlvbi5oYW5kbGVyKCk7XHJcbiAgc2VsZWN0ZWRQLnRleHRDb250ZW50PW9wdGlvbi5vcHRpb25UZXh0K1wiIFwiKyhvcHRpb24ub3B0aW9uRW1vamk9PW51bGw/XCJcIjpvcHRpb24ub3B0aW9uRW1vamkpO1xyXG4gICAgO30pO1xyXG5cclxuICBvcHRpb25zRGl2LmFwcGVuZENoaWxkKG9wdGlvbkRpdik7XHJcblxyXG5cclxuIH0pO1xyXG5cclxuICBzZWxlY3RlZFAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQob3B0aW9uc0Rpdik7XHJcbiAgICAgIHRoaXMuaGlkZGVuT2JqZWN0PXRydWU7XHJcblxyXG5cclxuXHJcbiAgfS5iaW5kKHRoaXMpLGZhbHNlKTtcclxuXHJcbiAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlbGVjdGVkUCk7XHJcbiAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKSk7XHJcblxyXG5cclxuICBidXR0b25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gIGlmKHRoaXMuaGlkZGVuT2JqZWN0PT10cnVlKVxyXG4gICAgeyAgICBjb25zb2xlLmxvZyhcImdvdCBoZXJlXCIpO1xyXG5cclxuICAgICAgICBpZighYnV0dG9uRGl2LmNvbnRhaW5zKHNlbGVjdGlvbkRpdikpXHJcbiAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uRGl2KTtcclxuXHJcbiAgICAgICB0aGlzLmhpZGRlbk9iamVjdCA9IGZhbHNlO1xyXG5cclxuICAgIH1lbHNlXHJcbiAgICAgIHsgICBpZihzZWxlY3Rpb25EaXYuY29udGFpbnMob3B0aW9uc0RpdikpXHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uRGl2LnJlbW92ZUNoaWxkKG9wdGlvbnNEaXYpO1xyXG5cclxuICAgICAgICAgaWYoYnV0dG9uRGl2LmNvbnRhaW5zKHNlbGVjdGlvbkRpdikpXHJcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5yZW1vdmVDaGlsZChzZWxlY3Rpb25EaXYpO1xyXG4gICAgICAgIHRoaXMuaGlkZGVuT2JqZWN0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgfS5iaW5kKHRoaXMpLGZhbHNlKTtcclxuXHJcblxyXG4gcGFyZW50RGl2LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XHJcblxyXG5yZXR1cm4gYnV0dG9uRGl2O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUJ1dHRvbk9wdGlvbnNcclxue1xyXG5oYW5kbGVyPzooY2hlY2tlZDpib29sZWFuKT0+dm9pZDtcclxub3B0aW9uYWxUZXh0PzpzdHJpbmc7XHJcbmNvbG9yPzpzdHJpbmc7XHJcbnBhcmVudD86YW55O1xyXG5zaXplPzpudW1iZXI7XHJcbmlubmVyUmFkaXVzPzphbnk7XHJcbm91dGVyUmFkaXVzPzphbnk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVCdXR0b25cclxue1xyXG5cclxucHVibGljIGhhbmRsZXI6KGNoZWNrZWQ6Ym9vbGVhbixhcmdzOmFueSk9PnZvaWQ7XHJcbnB1YmxpYyBjb2xvcjpzdHJpbmc9XCIjNzBiNTY1XCI7XHJcbnB1YmxpYyBvcHRpb25hbFRleHQ6c3RyaW5nPVwiXCI7XHJcbnB1YmxpYyBzaXplOm51bWJlcj0yMjtcclxucHVibGljIGlubmVyUmFkaXVzOnN0cmluZz1cIjUwJVwiO1xyXG5wdWJsaWMgb3V0ZXJSYWRpdXM6c3RyaW5nPVwiMTVweFwiO1xyXG5cclxuXHJcblxyXG5cclxuYnVpbGRCdXR0b24ob3B0aW9uczpUb2dnbGVCdXR0b25PcHRpb25zPXt9KVxyXG57XHJcblxyXG4gaWYob3B0aW9ucy5oYW5kbGVyIT1udWxsKVxyXG4gIHRoaXMuaGFuZGxlcj1vcHRpb25zLmhhbmRsZXI7XHJcblxyXG4gICAgaWYob3B0aW9ucy5jb2xvciE9bnVsbClcclxue1xyXG4gICAgdGhpcy5jb2xvcj1vcHRpb25zLmNvbG9yO1xyXG59XHJcbmlmKG9wdGlvbnMuc2l6ZSE9bnVsbClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNpemU9b3B0aW9ucy5zaXplO1xyXG4gICAgfVxyXG4gaWYob3B0aW9ucy5pbm5lclJhZGl1cyE9bnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJSYWRpdXM9b3B0aW9ucy5pbm5lclJhZGl1cztcclxuICAgICAgICB9XHJcbiBpZihvcHRpb25zLm91dGVyUmFkaXVzIT1udWxsKVxyXG4gICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlclJhZGl1cz1vcHRpb25zLm91dGVyUmFkaXVzO1xyXG4gIH1cclxuIFxyXG4gbGV0IGNzcz1cclxuICBgXHJcbi5zZXR0aW5nLWJsb2NrIHtcclxuXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogN3B4O1xyXG5cdGZvbnQtc2l6ZTogMTYuNHB4O1xyXG59XHJcblxyXG4uc2V0dGluZy1ibG9jayBoMSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcblx0bGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNldHRpbmctYmxvY2sgbGFiZWxbZm9yKj1cImlucHV0XCJdIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tcmlnaHQ6IDdweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6ICR7dGhpcy5zaXplKzI4fXB4O1xyXG5cdGhlaWdodDogJHt0aGlzLnNpemUrOH1weDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2hlY2tib3gtc2xpZGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xyXG5cdHRyYW5zaXRpb246IDAuNHM7XHJcblx0Ym9yZGVyLXJhZGl1czogJHt0aGlzLm91dGVyUmFkaXVzfXB4O1xyXG5cdHotaW5kZXg6IDIwMDA7XHJcbn1cclxuXHJcbi5jaGVja2JveC1zbGlkZXI6YmVmb3JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6ICR7dGhpcy5zaXplfXB4O1xyXG5cdHdpZHRoOiAke3RoaXMuc2l6ZX1weDtcclxuXHRsZWZ0OiA0cHg7XHJcblx0Ym90dG9tOiA0cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xyXG5cdHRyYW5zaXRpb246IDAuNHM7XHJcblx0Ym9yZGVyLXJhZGl1czogJHt0aGlzLmlubmVyUmFkaXVzfTtcclxuXHR6LWluZGV4OiAxOTk5O1xyXG59XHJcblxyXG4uZGFyay1tb2RlIC5jaGVja2JveC1zbGlkZXI6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1zbGlkZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5jb2xvcn07XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE5cHgpO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciB7XHJcblx0dHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuYDtcclxubGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzLnRyaW0oKSkpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG5cclxuXHQgICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0YmxvY2suY2xhc3NMaXN0LmFkZChcInNldHRpbmctYmxvY2tcIik7XHJcblx0XHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG5cdFx0XHRpZihvcHRpb25zLm9wdGlvbmFsVGV4dCE9bnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9wdGlvbnMub3B0aW9uYWxUZXh0KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRibG9jay5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHRcclxuXHRcdFx0XHRjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuXHRcdFx0XHRjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtY29udGFpbmVyXCIpO1xyXG5cdFx0XHRcdGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcclxuXHRcdFx0XHRjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcblx0XHRcdFx0Y2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR0aGlzLmhhbmRsZXIoY2hlY2tib3guY2hlY2tlZCk7XHJcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdFx0XHRjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRcdFx0XHRzbGlkZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LXNsaWRlclwiKTtcclxuXHRcdFx0XHRjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xyXG5cdFx0XHRcdG5hbWUuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICBpZihvcHRpb25zLnBhcmVudClcclxuXHRcdFx0XHRvcHRpb25zLnBhcmVudC5hcHBlbmRDaGlsZChibG9jayk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiXHJcbmltcG9ydCB7Q29udGV4dE1lbnUsQWN0aW9uVHlwZSxBY3Rpb25Gb3JtfSBmcm9tIFwiLi9Db250ZXh0TWVudVwiXHJcbmltcG9ydCB7TWVudUJ1dHRvbixNZW51T3B0aW9ufSBmcm9tIFwiLi9NZW51QnV0dG9uXCJcclxuaW1wb3J0IHtDb2xvclBpY2tlcn0gZnJvbSBcIi4vQ29sb3JQaWNrZXJcIlxyXG5pbXBvcnQge1RvZ2dsZUJ1dHRvbixUb2dnbGVCdXR0b25PcHRpb25zfSBmcm9tIFwiLi9Ub2dnbGVCdXR0b25cIjtcclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuXHJcbiAgIHB1YmxpYyBjb250ZXh0TWVudXM6Q29udGV4dE1lbnVbXT1bbmV3IENvbnRleHRNZW51KCldO1xyXG4gICBwdWJsaWMgY29udGV4dE1lbnU6Q29udGV4dE1lbnU9dGhpcy5jb250ZXh0TWVudXNbMF07XHJcbiAgIHB1YmxpYyB0b2dnbGVCdXR0b25zOlRvZ2dsZUJ1dHRvbltdPVtdO1xyXG4gICBwdWJsaWMgbWVudUJ1dHRvbnM6TWVudUJ1dHRvbltdPVtdO1xyXG4gICBwdWJsaWMgY29sb3JQaWNrZXI6Q29sb3JQaWNrZXI9bmV3IENvbG9yUGlja2VyKCk7XHJcbiAgIHB1YmxpYyBkZWZhdWx0U2V0dGluZ3NCdXR0b25RdWVyeTogc3RyaW5nO1xyXG4gICBwdWJsaWMgZGVmYXVsdENvbnRleHRNZW51UXVlcnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgIHB1YmxpYyBkZWZhdWx0TW9kYWxRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGluc3RhbmNlc0NsYXNzOiBzdHJpbmcgPSBcImluc3RhbmNlc1wiO1xyXG4gICBwdWJsaWMgaXRlbXNDbGFzczogc3RyaW5nID0gXCJpdGVtcy1pbm5lclwiO1xyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5kZWZhdWx0TW9kYWxRdWVyeSA9IFwiLm1vZGFsOm50aC1jaGlsZCgzKVwiO1xyXG4gICAgICB0aGlzLmRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5ID0gXCIuc2V0dGluZ3MtY29udGVudFwiO1xyXG4gICB9XHJcblxyXG4gIG1ha2VUb2dnbGVCdXR0b24ob3B0aW9uczpUb2dnbGVCdXR0b25PcHRpb25zKVxyXG4gIHtcclxuICAgbGV0IHRvZ2dsZUJ1dHRvbj1uZXcgVG9nZ2xlQnV0dG9uKCk7XHJcbiAgIHRoaXMudG9nZ2xlQnV0dG9ucy5wdXNoKHRvZ2dsZUJ1dHRvbik7XHJcbiAgIHJldHVybiB0b2dnbGVCdXR0b24uYnVpbGRCdXR0b24ob3B0aW9ucylcclxuICB9XHJcbiAgaW5qZWN0Q1NTKGNzczpzdHJpbmcpXHJcbntcclxuICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzLnRyaW0oKSkpO1xyXG4gICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuICBhZGRBbmRCdWlsZE1lbnVCdXR0b24obWVudVRleHQ6YW55LG1lbnVFbW9qaT86YW55LGluaXRBY3Rpb24/OmFueSxvcHRpb25zOk1lbnVPcHRpb25bXT1bXSlcclxuICB7ICAgICBsZXQgbUJ1dHRvbj1uZXcgTWVudUJ1dHRvbihtZW51VGV4dCxtZW51RW1vamksaW5pdEFjdGlvbixvcHRpb25zKVxyXG4gICAgdGhpcy5tZW51QnV0dG9ucy5wdXNoKG1CdXR0b24pO1xyXG4gICAgcmV0dXJuICBtQnV0dG9uLmJ1aWxkQnV0dG9uKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgIG9uT2JzZXJ2aW5nSW5zdGFuY2UoYXBwbHlPbk9uZUVsZW1lbnQ6IGFueSkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKCg8SFRNTEVsZW1lbnQ+bm9kZSkuaWQgIT0gXCJpbnN0YW5jZS0wXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgYXBwbHlPbk9uZUVsZW1lbnQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbnN0YW5jZXNDbGFzcylbMF0sIHtcclxuICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG4gICBvbk9ic2VydmluZ0l0ZW1zKGFwcGx5T25PbmVFbGVtZW50OiBhbnkpIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSkge1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFwcGx5T25PbmVFbGVtZW50KG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGluc3RhbmNlT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuaW5zdGFuY2VzQ2xhc3MpWzBdLCB7XHJcbiAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgIH1cclxuXHJcblxyXG5cclxuXHJcbn07XHJcbiIsIlxyXG5pbXBvcnQgKiBhcyBHTSBmcm9tIFwiZ3JlYXNlbW9ua2V5XCI7XHJcbi8vc291cmNlIG11c3QgYmUgaW5pdGlhdGVkIHdpdGggdW5zYWZlV2luZG93XHJcbmV4cG9ydCBjbGFzcyBkYXRhXHJcbntcclxuICAgcHVibGljICBzb3VyY2U6YW55PW51bGw7XHJcbiAgIHB1YmxpYyAgZXhwRjphbnk9bnVsbDtcclxuXHJcblxyXG5cclxuICAvL3VXPXVuc2FmZVdpbmRvdyBtdXN0IGJlIGRvbmUgZnJvbSB1c2Vyc2NyaXB0XHJcbiAgLy9leHBGPWV4cG9ydEZ1bmN0aW9uXHJcblxyXG5wdWJsaWMgYWRkRGF0YVNvdXJjZShleHBGOmFueSx1Vzphbnk9c2VsZilcclxueyBcclxuICAgdGhpcy5zb3VyY2U9dVcuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF1cclxuICAgdGhpcy5leHBGPWV4cEY7XHJcblxyXG59XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0RWxlbWVudHMoKVxyXG4gIHtcclxuICAgcmV0dXJuIHRoaXMuc291cmNlLl9kYXRhLmVsZW1lbnRzO1xyXG4gIH1cclxuICAgIGdldEluc3RhbmNlcygpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5zb3VyY2UuX2RhdGEuaW5zdGFuY2VzO1xyXG4gIH1cclxuICAgICBvblNvcnRpbmcobWV0aG9kTmFtZTpzdHJpbmcsbmV3U3ZnOnN0cmluZyxhZGRTb3J0aW5nTWV0aG9kOih4OmFueSx5OmFueSk9PmFueT14PT54LGFkZFN0eWxlQ2hhbmdlcz86YW55KVxyXG4gIHtcclxuICBsZXQgYmVmb3JlPXRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNvcnRlZEVsZW1lbnRzLmdldHRlcjtcclxuXHJcblxyXG4gIHRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNvcnRlZEVsZW1lbnRzLmdldHRlcj10aGlzLmV4cEYoKCkgPT4ge1xyXG5cclxuICAgaWYgKHRoaXMuc291cmNlLiRudXh0LiRyb290LiRjaGlsZHJlblsyXS4kY2hpbGRyZW5bMF0uJGNoaWxkcmVuWzBdLl9kYXRhLnNvcnRCeSA9PT0gbWV0aG9kTmFtZSlcclxuICAgICB7XHJcbiAgICAgIGxldCBwcmV2aW91cz1bLi4uYmVmb3JlKCldO1xyXG4gICAgICByZXR1cm4gYWRkU29ydGluZ01ldGhvZChwcmV2aW91cyx0aGlzLmdldEVsZW1lbnRzKCkpO1xyXG4gICAgIH1lbHNlXHJcbiAgICAge1xyXG4gICAgICAgcmV0dXJuIGJlZm9yZSgpO1xyXG5cclxuICAgICB9XHJcblxyXG4gIH0sdW5zYWZlV2luZG93KTtcclxuICBcclxudGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uc29ydHMucHVzaChtZXRob2ROYW1lKTtcclxuY29uc3Qgc29ydEJ1dHRvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICBcclxuXHJcbiAgICAgICAgIGlmKHRoaXMuc291cmNlLiRudXh0LiRyb290LiRjaGlsZHJlblsyXS4kY2hpbGRyZW5bMF0uJGNoaWxkcmVuWzBdLl9kYXRhLnNvcnRCeSA9PT0gbWV0aG9kTmFtZSlcclxuICAgICAgICAgICB7ICAgIGxldCBpbWc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXNvcnQgPiBpbWdcIik7XHJcblxyXG4gICAgICAgICAgICAgaWYoICg8SFRNTEltYWdlRWxlbWVudD5pbWcpLnNyYy50cmltKCk9PVwiaHR0cHM6Ly9uZWFsLmZ1bi9pbmZpbml0ZS1jcmFmdC9cIittZXRob2ROYW1lK1wiLnN2Z1wiKVxyXG4gICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD5pbWcpLnNyYz1uZXdTdmc7XHJcbiAgICAgICAgICAgICAgICAgaWYoYWRkU3R5bGVDaGFuZ2VzIT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFkZFN0eWxlQ2hhbmdlcyhpbWcsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAvL2ltZy5zdHlsZS5maWx0ZXI9XCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGFkZFN0eWxlQ2hhbmdlcyhpbWcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgIH0pO1xyXG5cclxuICAgICAgIGxldCBpbWc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXNvcnQgPiBpbWdcIik7XHJcbiAgICAgICBjb25zb2xlLmxvZyhpbWcsaW1nLnRleHRDb250ZW50KVxyXG4gICAgICAgdmFyIGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogZmFsc2UsIGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogZmFsc2UsIHN1YnRyZWU6IGZhbHNlIH07XHJcbiAgICAgICBzb3J0QnV0dG9uT2JzZXJ2ZXIub2JzZXJ2ZShpbWcsY29uZmlnKTtcclxuXHJcblxyXG4gIFxyXG4gIH1cclxuICBcclxuICAgICAgb25GaWx0ZXJpbmcoYWRkRmlsdGVyTWV0aG9kT25RdWVyeTooeDphbnkseTphbnkpPT5hbnk9KHg6YW55LHk6YW55KT0+eSgpKVxyXG4gIHtcclxuICBsZXQgYmVmb3JlPXRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNlYXJjaFJlc3VsdHMuZ2V0dGVyO1xyXG4gIHRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNlYXJjaFJlc3VsdHMuZ2V0dGVyPXRoaXMuZXhwRigoKSA9PiB7XHJcbiAgbGV0IHF1ZXJ5PSB0aGlzLnNvdXJjZS5zZWFyY2hRdWVyeVxyXG4gXHJcbiBcclxuIFxyXG4gIHJldHVybiBhZGRGaWx0ZXJNZXRob2RPblF1ZXJ5KHF1ZXJ5LGJlZm9yZSk7XHJcbiAgXHJcbiAgXHJcbiAgfSx1bnNhZmVXaW5kb3cpIDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbmFkZEluVG9vbFRpcHNBc3luYyhjYWxsYmFjazoodGV4dDpzdHJpbmcsZW1vamk6c3RyaW5nKT0+IFByb21pc2U8c3RyaW5nPilcclxueyAgICBcclxuICBcclxuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAuaXRlbS5pbnN0YW5jZTo6YmVmb3JlIHt0ZXh0LWFsaWduOiBjZW50ZXI7fWAudHJpbSgpKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG5cclxuXHJcbiAgY29uc3QgaW5zdGFuY2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCBhc3luYyAobXV0YXRpb25zKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIGlmKCg8SFRNTEVsZW1lbnQ+bm9kZSkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5zdGFuY2VcIikpXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHRleHQ9ICg8SFRNTEVsZW1lbnQ+bm9kZSkuZ2V0QXR0cmlidXRlKFwidG9vbHRpcFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZVRleHQ9XCJcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhpc3RcIixub2RlLmNoaWxkTm9kZXMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBmb3IobGV0IG4gb2YgQXJyYXkuZnJvbSgoPEhUTUxFbGVtZW50Pm5vZGUpLmNoaWxkTm9kZXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmKG4ubm9kZVR5cGU9PTMgJiYgKDxUZXh0Pm4pLmxlbmd0aCE9MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuOlwiLG4sXCJub2RlLXR5cGU6XCIsbi5ub2RlVHlwZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRleHQrPW4udGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCAgZW1vamk9KDxIVE1MRWxlbWVudD5ub2RlKS5xdWVyeVNlbGVjdG9yKFwiLmluc3RhbmNlLWVtb2ppXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICBub2RlVGV4dD1hd2FpdCBjYWxsYmFjayhub2RlVGV4dCxlbW9qaS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHRleHQ9PW51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD10ZXh0K1wiXFxuXCIrbm9kZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50Pm5vZGUpLnNldEF0dHJpYnV0ZShcInRvb2x0aXBcIix0ZXh0KTtcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH19XHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbmluc3RhbmNlT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5zdGFuY2VzXCIpWzBdLCB7XHJcbiAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICBzdWJ0cmVlICA6IHRydWUsXHJcblxyXG59KTtcclxuXHJcblxyXG59XHJcbmFkZEluVG9vbFRpcHMoY2FsbGJhY2s6KHRleHQ6c3RyaW5nLGVtb2ppOnN0cmluZyk9PiBzdHJpbmcpXHJcbntcclxuXHJcblxyXG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYC5pdGVtLmluc3RhbmNlOjpiZWZvcmUge3RleHQtYWxpZ246IGNlbnRlcjt9YC50cmltKCkpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICBcclxuICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoIGFzeW5jIChtdXRhdGlvbnMpID0+IHtcclxuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMClcclxuICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKXtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgaWYoKDxIVE1MRWxlbWVudD5ub2RlKS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnN0YW5jZVwiKSlcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdGV4dD0gKDxIVE1MRWxlbWVudD5ub2RlKS5nZXRBdHRyaWJ1dGUoXCJ0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlVGV4dD1cIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGlzdFwiLG5vZGUuY2hpbGROb2RlcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgbiBvZiBBcnJheS5mcm9tKCg8SFRNTEVsZW1lbnQ+bm9kZSkuY2hpbGROb2RlcykpXHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYobi5ub2RlVHlwZT09MyAmJiAoPFRleHQ+bikubGVuZ3RoIT0wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm46XCIsbixcIm5vZGUtdHlwZTpcIixuLm5vZGVUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVGV4dCs9bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgbGV0ICBlbW9qaT0oPEhUTUxFbGVtZW50Pm5vZGUpLnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdGFuY2UtZW1vamlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5vZGVUZXh0PWNhbGxiYWNrKG5vZGVUZXh0LGVtb2ppLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYodGV4dD09bnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXRleHQrXCJcXG5cIitub2RlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+bm9kZSkuc2V0QXR0cmlidXRlKFwidG9vbHRpcFwiLHRleHQpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImluc3RhbmNlc1wiKVswXSwge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZSAgOiB0cnVlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgfVxyXG5cclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIHV0aWxzXHJcbntcclxuXHJcblxyXG4gICAgcHVibGljIHVzZXJBZGRlZE1ldGhvZHM6YW55W109W107XHJcbiAgICBwdWJsaWMgRXhwb3J0U2F2ZUJ1dHRvblF1ZXJ5OnN0cmluZyA9XCIuc2V0dGluZ1tmb3I9aW1wb3J0LXNhdmVdICsgLnNldHRpbmdcIjtcclxuICAgIHB1YmxpYyBzYXZlRmlsZU5hbWU6c3RyaW5nPVwiaW5maW5pdGVjcmFmdC5qc29uXCI7XHJcblxyXG5cclxuICAgIHNhdmVTYXZlRmlsZU9uUEMoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrO1xyXG4gICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayA9ICgpID0+IHtIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSBoYW5kbGVDbGlja31cclxuICAgICAgICBjb25zdCBib2R5T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT09IFwiY2hpbGRMaXN0XCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKS5maW5kKChub2RlKSA9PntcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAoPGFueT5ub2RlKS5kb3dubG9hZCA9PT0gdGhpcy5zYXZlRmlsZU5hbWV9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yKSByZXR1cm4gZmV0Y2goKDxIVE1MQW5jaG9yRWxlbWVudD5hbmNob3IpLmhyZWYpLnRoZW4ocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcclxuICAgICAgICBoYW5kbGVDbGljay5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5FeHBvcnRTYXZlQnV0dG9uUXVlcnkpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm9keU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVqZWN0KFwiVGltZWQgb3V0XCIpXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdHJ1Y3RvcigpXHJcbntcclxuXHJcbn1cclxuYWRkRnVuY3Rpb24obmFtZTpzdHJpbmcsY2FsbGJhY2s6YW55KVxyXG57XHJcbiAgICB0aGlzLnVzZXJBZGRlZE1ldGhvZHMucHVzaCh7bmFtZTpuYW1lLGhhbmRsZXI6Y2FsbGJhY2t9KTtcclxufVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJsZXQgbWVzc2FnZTogc3RyaW5nID0gJ0hlbGxvLCBXb3JsZCEnO1xyXG5jb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuaW1wb3J0IHtVSX0gZnJvbSAgXCIuL1VJXCJcclxuaW1wb3J0IHtkYXRhfSBmcm9tICBcIi4vZGF0YVwiXHJcbmltcG9ydCB7dXRpbHN9IGZyb20gIFwiLi91dGlsc1wiXHJcbmV4cG9ydCBjbGFzcyBNYWluXHJcbntcclxuIHB1YmxpYyAkdWk6VUk7XHJcbiBwdWJsaWMgJGRhdGE6ZGF0YTtcclxuIHB1YmxpYyAkdXRpbHM6dXRpbHM7XHJcbiBjb25zdHJ1Y3RvcigpXHJcbiB7XHJcbiAgdGhpcy4kdWk9bmV3IFVJKCk7XHJcbiAgdGhpcy4kZGF0YT1uZXcgZGF0YSgpO1xyXG4gIHRoaXMuJHV0aWxzPW5ldyB1dGlscygpO1xyXG4gfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IG9iamVjdFNvdXJjZTpNYWluPW5ldyBNYWluKCk7IFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=