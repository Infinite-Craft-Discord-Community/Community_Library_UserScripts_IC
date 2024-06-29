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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUNBbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQSxJQUFJLE9BQU8sR0FBVyxlQUFlLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQiwwREFBd0I7QUFDeEIsZ0VBQTRCO0FBQzVCLG1FQUE4QjtBQUM5QjtJQUtDO1FBRUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLE9BQUUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksYUFBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDO0FBYlksb0JBQUk7QUFnQk4sb0JBQVksR0FBTSxJQUFJLElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29tbXVuaXR5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvQ29sb3JQaWNrZXIudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL0NvbnRleHRNZW51LnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9NZW51QnV0dG9uLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9Ub2dnbGVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL1VJLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ29tbXVuaXR5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvbW11bml0eVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJleHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJcclxue1xyXG4gcHVibGljICBjYWxsYmFjazphbnk7XHJcbiBwdWJsaWMgIHBpY2tlZENvbG9yOnN0cmluZztcclxuXHJcbm1ha2VDb2xvclBpY2tlcihsb2NhbENvbGJhY2s/OmFueSxkZWJ1Zzpib29sZWFuPWZhbHNlKVxyXG57XHJcbiAgIGlmKGxvY2FsQ29sYmFjayE9bnVsbClcclxuICAgIHRoaXMuY2FsbGJhY2s9bG9jYWxDb2xiYWNrO1xyXG4gICAgICBcclxuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciAgaXNBbmRyb2lkID0gdWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAtMTtcclxuICAgIHZhciAgaXNNb2JpbGUgPSB1YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IC0xO1xyXG4gICAgdmFyICBpc1dlYk9zID0gdWEuaW5kZXhPZihcIndlYm9zXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzSXBob25lID0gdWEuaW5kZXhPZihcImlwaG9uZVwiKSA+IC0xO1xyXG4gICAgdmFyICBpc0lwYWQgPSB1YS5pbmRleE9mKFwiaXBhZFwiKSA+IC0xO1xyXG4gICAgdmFyICBpc0xpbnV4ID0gdWEuaW5kZXhPZihcImxpbnV4XCIpID4gLTE7XHJcbiAgICBsZXQgcGFyZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gIGlmKChpc0FuZHJvaWQgfHwgaXNNb2JpbGUgfHwgaXNMaW51eCB8fCBpc1dlYk9zIHx8IGlzSXBob25lIHx8IGlzSXBhZCkgfHwgZGVidWcpXHJcbiAgICB7XHJcbiAgICAgIFxyXG4gICAgICAgbGV0IGRpYWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcclxuXHJcbiAgICAgICBsZXQgbHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgbHIuaW5uZXJUZXh0PVwiUiAoMC0yNTUpXCI7XHJcbiAgICAgICBsci5zdHlsZS5jb2xvcj1cInJlZFwiO1xyXG4gICAgICAgbGV0IGxnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIGxnLmlubmVyVGV4dD1cIkcgKDAtMjU1KVwiO1xyXG4gICAgICAgbGcuc3R5bGUuY29sb3I9XCJncmVlblwiO1xyXG4gICAgICAgbGV0IGxiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIGxiLmlubmVyVGV4dD1cIkIgKDAtMjU1KVwiO1xyXG4gICAgICAgbGIuc3R5bGUuY29sb3I9XCJibHVlXCI7XHJcbiAgICAgICBsZXQgUHJldmlld3M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgUHJldmlld3MuaW5uZXJUZXh0PVwiUHJldmlldyBjb2xvclwiO1xyXG4gICAgICAgbGV0IHByZXZpZXdEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUud2lkdGg9XCIxMDBweFwiO1xyXG4gICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5oZWlnaHQ9XCIxMDBweFwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICBsZXQgcmk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHJpLnR5cGU9XCJudW1iZXJcIjtcclxuICAgICAgICByaS5taW49XCIwXCI7XHJcbiAgICAgICAgcmkubWF4PVwiMjU1XCI7XHJcbiAgICAgICAgcmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICBsZXQgZ2k9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgZ2kudHlwZT1cIm51bWJlclwiO1xyXG4gICAgICAgZ2kubWluPVwiMFwiO1xyXG4gICAgICAgZ2kubWF4PVwiMjU1XCI7XHJcbiAgICAgICBnaS52YWx1ZT1cIjBcIjtcclxuICAgICAgIGxldCBiaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICBiaS50eXBlPVwibnVtYmVyXCI7XHJcbiAgICAgICBiaS5taW49XCIwXCI7XHJcbiAgICAgICBiaS5tYXg9XCIyNTVcIjtcclxuICAgICAgIGJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgbGV0IHJnYjJIZXggPSAoczphbnkpID0+IHMubWF0Y2goL1swLTldKy9nKS5yZWR1Y2UoKGE6YW55LCBiOmFueSkgPT4gYSsoYnwyNTYpLnRvU3RyaW5nKDE2KS5zbGljZSgxKSwgJyMnKTtcclxuICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuXHJcblxyXG4gICAgICAgICByaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVudDphbnkpe1xyXG5cclxuXHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmk6XCIscmkudmFsdWUsXCJzb21ldGhpbmdcIik7XHJcblxyXG4gICAgICAgICAgaWYocmkudmFsdWU9PVwiXCIpXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgIHJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQocmkudmFsdWUpPDApXHJcbiAgICAgICAgICAgICByaS52YWx1ZT1cIjBcIjtcclxuXHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQocmkudmFsdWUpPjI1NSlcclxuICAgICAgICAgICAgIHJpLnZhbHVlPVwiMjU1XCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuICAgICAgICAgdGhpcy5waWNrZWRDb2xvcj1yZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJvbmVDb2xvcjpcIix0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgZ2kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbjphbnkpe1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJnaTpcIixnaS52YWx1ZSxcInNvbWV0aGluZ1wiKTtcclxuXHJcbiAgICAgICAgIGlmKGdpLnZhbHVlPT1cIlwiKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICBnaS52YWx1ZT1cIjBcIjtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChnaS52YWx1ZSk8MClcclxuICAgICAgICAgICAgIGdpLnZhbHVlPVwiMFwiO1xyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGdpLnZhbHVlKT4yNTUpXHJcbiAgICAgICAgICAgICBnaS52YWx1ZT1cIjI1NVwiO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkX2NvbG9yXCIscmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIikpO1xyXG4gICAgICAgIHRoaXMucGlja2VkQ29sb3I9cmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib25lQ29sb3I6XCIsdGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICBiaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVudDphbnkpe1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmk6XCIsYmkudmFsdWUsXCJzb21ldGhpbmdcIik7XHJcbiAgICAgICAgICBpZihiaS52YWx1ZT09XCJcIilcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgYmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGJpLnZhbHVlKTwwKVxyXG4gICAgICAgICAgICAgIGJpLnZhbHVlPVwiMFwiO1xyXG5cclxuICAgICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoYmkudmFsdWUpPjI1NSlcclxuICAgICAgICAgICAgIGJpLnZhbHVlPVwiMjU1XCI7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcbiAgICAgICAgIHRoaXMucGlja2VkQ29sb3I9cmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib25lQ29sb3I6XCIsdGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcblxyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNsb3NlXCIpKTtcclxuICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICBkaWFnLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgbGV0IGlucHV0RGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBsZXQgcHJldmlld3NEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgIGxldCBtYWluTG9naWM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxyKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChyaSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobGcpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGdpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChsYik7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoYmkpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LnN0eWxlLmZsb2F0PVwibGVmdFwiO1xyXG4gICAgICAgaW5wdXREaXYuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICAgICBtYWluTG9naWMuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xyXG5cclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKFByZXZpZXdzKTtcclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChwcmV2aWV3RGl2KTtcclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5zdHlsZS5mbG9hdD1cInJpZ2h0XCI7XHJcbiAgICAgICBtYWluTG9naWMuYXBwZW5kQ2hpbGQocHJldmlld3NEaXYpO1xyXG4gICAgICAgZGlhZy5hcHBlbmRDaGlsZChtYWluTG9naWMpO1xyXG5cclxuICAgICAgIGRpYWcuYXBwZW5kQ2hpbGQoIGNsb3NlQnV0dG9uKTtcclxuICAgICAgIGRpYWcuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS50b3A9XCIzMyVcIjtcclxuICAgICAgIGRpYWcuc3R5bGUubGVmdD1cIjI1JVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS5iYWNrZ3JvdW5kPVwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuICAgICAgIGRpYWcuc3R5bGUuY29sb3I9KFwidmFyKC0tdGV4dC1jb2xvcilcIikudHJpbSgpO1xyXG4gICAgICAgaWYocGFyZW50KVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaWFnKTtcclxuICAgICAgICBkaWFnLnNob3dNb2RhbCgpO1xyXG59ZWxzZVxyXG57XHJcblxyXG5cclxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNvbG9yXCIpO1xyXG5cclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihldmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbnQ6YW55KVxyXG57XHJcbiAgIHRoaXMucGlja2VkQ29sb3I9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG5cclxuICAgfS5iaW5kKHRoaXMpKTtcclxuICAgaWYocGFyZW50KVxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAvLyBoaWRkZW49MDtcclxuICAgaW5wdXQuY2xpY2soKTtcclxuIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJleHBvcnQgZW51bSBBY3Rpb25UeXBlIHtcclxuICAgIFwiYnV0dG9uXCIsIFwiY2hlY2tib3hcIlxyXG4gfVxyXG4gXHJcbiBleHBvcnQgaW50ZXJmYWNlIEFjdGlvbkZvcm0ge1xyXG4gICAgdGV4dE9uOiBzdHJpbmc7XHJcbiAgICB0ZXh0T2ZmPzogc3RyaW5nO1xyXG4gICAgZW1vamlPbj86c3RyaW5nO1xyXG4gICAgZW1vamlPZmY/OnN0cmluZztcclxuICAgIGhhbmRsZXI6IGFueTtcclxuICAgIGluaXRIYW5kbGVyPzogKHg6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiBcclxuIH1cclxuIFxyXG4gZXhwb3J0IGludGVyZmFjZSBDb250ZXh0TWVudVVpT3B0aW9ucyB7XHJcbiAgICBjb2xvckI6IFwiIzU0QzU3MVwiLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgd2lkdGhCdXR0b246IDUwXHJcbiAgICAsIGhlaWdodEJ1dHRvbjogMjAsXHJcbiAgICBib3JkZXJXaWR0aEJ1dHRvbjogMSxcclxuICAgIHJhZGl1czogNCxcclxuICAgIG1pbldpZHRoOiAxMDAsXHJcbiAgICB4T2Zmc2V0OiAxMjAsXHJcbiAgICB4T2Zmc2V0QnV0dG9uOiAyMCxcclxuICAgIHBhZGRpbmdCdXR0b246IDEsXHJcbiAgICBkdXJhdGlvbjogMVxyXG4gXHJcbiBcclxuIFxyXG4gfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gZXhwb3J0IGNsYXNzIENvbnRleHRNZW51IHtcclxuICAgIHB1YmxpYyB0cmlnZ2VyVHlwZVZpc2libGU6IHN0cmluZyA9IFwibW91c2VvdmVyXCI7XHJcbiAgICBwdWJsaWMgdHJpZ2dlclR5cGVJbnZpc2libGU6IHN0cmluZyA9IFwibW91c2VsZWF2ZVwiO1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VySW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlck91dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb246IGFueTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbjogYW55O1xyXG4gXHJcbiAgICBwdWJsaWMgY29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCIuY29udGV4dE1lbnVcIjtcclxuICAgIHB1YmxpYyBhY3Rpb25zOiBBY3Rpb25Gb3JtW10gPSBbXTtcclxuIFxyXG4gXHJcbiAgICBzZXRDb21wbGV4VHJpZ2dlckluKGNvbXBsZXg6IGFueSkge1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlckluQ29uZGl0aW9uID0gY29tcGxleDtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRDb21wbGV4VHJpZ2dlck91dChjb21wbGV4OiBhbnkpIHtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24gPSBjb21wbGV4O1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dCA9IHRydWU7XHJcbiAgICB9XHJcbiBcclxuICAgIGFkZEFjdGlvbihhY3Rpb246IEFjdGlvbkZvcm0pIHtcclxuICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25zKGFjdGlvbnM6IEFjdGlvbkZvcm1bXSkge1xyXG4gICAgICAgdGhpcy5hY3Rpb25zLnB1c2goLi4uYWN0aW9ucyk7XHJcbiAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgIGJ1aWxkQ29udGV4dE1lbnUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgIH0pXHJcbiB7ICAgaWYodGhpcy5jb21wbGV4VHJpZ2dlckluPT1mYWxzZSlcclxuICAgIHsgXHJcbiAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZVZpc2libGUsKCk9PlxyXG4gICAgICAgdGhpcy5idWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbSxlLG9wdGlvbnMpXHJcbiBcclxuIFxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgfWVsc2VcclxuICAgIHtcclxuIFxyXG4gICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbihpdGVtKTtcclxuIFxyXG4gICAgfVxyXG4gICAgXHJcbiB9XHJcbiBcclxuICAgIGJ1aWxkQ29udGV4dE1lbnVXaGVuVmlzaWJsZShpdGVtOiBhbnksIGU6IGFueSwgb3B0aW9uczogQ29udGV4dE1lbnVVaU9wdGlvbnMgPSB7XHJcbiAgICAgICBjb2xvckI6IFwiIzU0QzU3MVwiLCBoZWlnaHQ6IDQwLCBib3JkZXJXaWR0aDogMiwgd2lkdGhCdXR0b246IDUwXHJcbiAgICAgICAsIGhlaWdodEJ1dHRvbjogMjAsIGJvcmRlcldpZHRoQnV0dG9uOiAxLCByYWRpdXM6IDQsXHJcbiAgICAgICBtaW5XaWR0aDogMTAwLCB4T2Zmc2V0OiAxMjAsIHhPZmZzZXRCdXR0b246IDIwLCBwYWRkaW5nQnV0dG9uOiAxLCBkdXJhdGlvbjogMVxyXG4gICAgfSwgekluZGV4ID0gMTAwMCkge1xyXG4gXHJcbiAgICAgICAgIFxyXG4gXHJcbiAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgaWYocGFyZW50KXtcclxuICAgICAgIGxldCBjb25NZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250ZXh0TWVudVF1ZXJ5KTtcclxuIFxyXG4gICAgICAgaWYgKGNvbk1lbnUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBjb25NZW51LmNsYXNzTGlzdC5hZGQodGhpcy5jb250ZXh0TWVudVF1ZXJ5LnNsaWNlKDEpKTtcclxuICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb25NZW51KTtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uTWVudS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICB9XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmhlaWdodD1cImZpdC1jb250ZW50XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnpJbmRleCA9IHpJbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgLy8gKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5taW5XaWR0aCA9IG9wdGlvbnMubWluV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnRvcCA9IGUuY2xpZW50WS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIG9wdGlvbnMueE9mZnNldCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyID0gb3B0aW9ucy5ib3JkZXJXaWR0aC50b1N0cmluZygpICsgXCJweCBzb2xpZCBcIiArIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGV4dC1jb2xvclwiKS50cmltKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMucmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuIFxyXG4gXHJcbiAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XHJcbiBcclxuIFxyXG4gICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgIGxldCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuIFxyXG4gXHJcbiAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gQWN0aW9uVHlwZS5jaGVja2JveCkge1xyXG4gICAgICAgICAgICAgbGV0IGFjdGlvbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guaWQgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgdGV4dFNwYW4uaHRtbEZvciA9IFwiYWN0aW9uSWRcIiArIGk7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGV4dC1jb2xvcilcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHRCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ0J1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luVG9wID0gKChvcHRpb25zLmhlaWdodCAtIG9wdGlvbnMuaGVpZ2h0QnV0dG9uKSAvIDIpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5SaWdodCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSAob3B0aW9ucy5oZWlnaHRCdXR0b24gLSAyICogb3B0aW9ucy5wYWRkaW5nQnV0dG9uKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IChvcHRpb25zLndpZHRoQnV0dG9uIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gb3B0aW9ucy5kdXJhdGlvbi50b1N0cmluZygpICsgXCJzXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgIGxldCBpc09uID0gYWN0aW9uLmluaXRIYW5kbGVyPyBhY3Rpb24uaW5pdEhhbmRsZXIoaXRlbSk6ZmFsc2U7XHJcbiAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5jaGVja2VkID0gaXNPbjtcclxuIFxyXG4gICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9YWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuIFxyXG4gICAgICAgICAgICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoaXRlbSwgZSwgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBvcHRpb25zLnhPZmZzZXRCdXR0b24udG9TdHJpbmcoKSArIFwicHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBcIjBweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPZmY/P2FjdGlvbi5lbW9qaU9uPz9cIlwiKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICB9KTtcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIC8vICBjaGVja1pvbWJpZS5zdHlsZSxkaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25DaGVja2JveCk7XHJcbiAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gXHJcbiAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLndpZHRoPVwiMTAwJVwiO1xyXG4gICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQ9YWN0aW9uLmVtb2ppT24/P1wiXCIrYWN0aW9uLnRleHRPbjtcclxuICAgICAgICAgICAgaWYoYWN0aW9uLmluaXRIYW5kbGVyKVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmluaXRIYW5kbGVyKGNvbk1lbnUpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmNvbG9yPSBcInZhcigtLXRleHQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvcj1vcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi50ZXh0Q29udGVudD0oYWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIikrYWN0aW9uLnRleHRPZmY/P2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIlxyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQ9KGFjdGlvbi5lbW9qaU9uPz9cIlwiKSthY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT5hY3Rpb24uaGFuZGxlcigpKTtcclxuIFxyXG4gICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbik7XHJcbiBcclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgIGlmKHRoaXMuY29tcGxleFRyaWdnZXJPdXQ9PWZhbHNlKXtcclxuICAgICAgICAgIGNvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRyaWdnZXJUeXBlSW52aXNpYmxlLCAoZSkgPT4ge1xyXG4gXHJcbiAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGV4dE1lbnVRdWVyeSkuZm9yRWFjaCgoZWxlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+ZWxlbSkuc3R5bGUub3BhY2l0eSA9IFwiMFwiKTtcclxuIFxyXG4gICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgIFxyXG4gXHJcbiBcclxuIFxyXG4gICAgICAgICAgfSk7fVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbihjb25NZW51KTtcclxuICAgICAgICAgIH1cclxuIFxyXG4gXHJcbiBcclxuICAgICBcclxuIFxyXG4gXHJcbiAgICB9fVxyXG4gfSIsIlxyXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVPcHRpb25cclxue1xyXG4gXHJcbiAgICBvcHRpb25UZXh0OnN0cmluZztcclxuICAgIG9wdGlvbkVtb2ppPzpzdHJpbmc7XHJcbiAgICBoYW5kbGVyOmFueTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b25cclxue1xyXG4gcHVibGljIHBhcmVudFF1ZXJ5OnN0cmluZz1cIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiBtZW51VGV4dDpzdHJpbmc9XCJDbGljayBPbiBNZVwiO1xyXG4gbWVudUVtb2ppOnN0cmluZz1cIlwiO1xyXG4gb3B0aW9uczpNZW51T3B0aW9uW109W107XHJcbiBoaWRkZW5PYmplY3Q6Ym9vbGVhbj10cnVlO1xyXG4gcHVibGljIGJ1dHRvbkNsYXNzOnN0cmluZz1cInNldHRpbmdcIjtcclxuIHB1YmxpYyBpbml0QWN0aW9uOigpPT5udW1iZXI9KCk9PntyZXR1cm4gMDt9O1xyXG4gXHJcbnNldE9wdGlvbnMob3B0aW9uczpNZW51T3B0aW9uW10pXHJcbntcclxuIHRoaXMub3B0aW9ucz1vcHRpb25zO1xyXG59XHJcbmFkZE9wdGlvbihvcHRpb246TWVudU9wdGlvbilcclxue1xyXG4gdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcclxufVxyXG5cclxuXHJcbiBjb25zdHJ1Y3RvcihtZW51VGV4dDphbnksbWVudUVtb2ppPzphbnksaW5pdEFjdGlvbj86YW55LG9wdGlvbnM6TWVudU9wdGlvbltdPVtdKVxyXG4geyBcclxuICAgIHRoaXMubWVudVRleHQ9bWVudVRleHQ7XHJcbiAgICB0aGlzLmluaXRBY3Rpb249aW5pdEFjdGlvbjtcclxuICAgIHRoaXMubWVudUVtb2ppPW1lbnVFbW9qaTtcclxuICAgIHRoaXMub3B0aW9ucy5wdXNoKC4uLm9wdGlvbnMpO1xyXG5cclxuIH1cclxuXHJcblxyXG5cclxuYnVpbGRCdXR0b24ob3RoZXJQYXJlbnQ/OnN0cmluZylcclxue1xyXG4gbGV0IHBhcmVudERpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG90aGVyUGFyZW50Pz90aGlzLnBhcmVudFF1ZXJ5KTtcclxuIGxldCBidXR0b25EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIik7XHJcbiBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5tZW51VGV4dCtcIiBcIisodGhpcy5tZW51RW1vamk9PW51bGw/XCJcIjp0aGlzLm1lbnVFbW9qaSkpKTtcclxuIGJ1dHRvbkRpdi5zdHlsZS5oZWlnaHQ9XCJmaXQtY29udGVudFwiO1xyXG5cclxuXHJcbiBsZXQgc2VsZWN0aW9uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBsZXQgc2VsZWN0ZWRQPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gbGV0IG9wdGlvbnNEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuIG9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uLW9wdGlvbnNcIik7XHJcbiBvcHRpb25zRGl2LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiO1xyXG4gb3B0aW9uc0Rpdi5zdHlsZS5oZWlnaHQ9XCIxMDBweFwiO1xyXG5cclxuXHJcbiBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCAodGhpcy5idXR0b25DbGFzcyk7XHJcblxyXG5cclxuIGxldCBjc3MgPSBgXHJcbiAubWVudS1idXR0b24tb3B0aW9uOmhvdmVyXHJcbiAgICAge1xyXG4gICAgICAgYmFja2dyb3VuZDpncmF5O1xyXG5cclxuICAgICB9XHJcblxyXG4ubWVudS1idXR0b25cclxue1xyXG5cclxuc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG5cclxufVxyXG4ubWVudS1idXR0b24tb3B0aW9ucyB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL31cclxuIC5tZW51LWJ1dHRvbi1vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhciB7IC8qIFdlYktpdCAqL1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7fVxyXG5gXHJcblxyXG5cclxubGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzLnRyaW0oKSkpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG5sZXQgaW5kZXhPcHRpb249MDtcclxuaWYodGhpcy5pbml0QWN0aW9uKVxyXG4gIGluZGV4T3B0aW9uPXRoaXMuaW5pdEFjdGlvbigpO1xyXG5cclxuY29uc29sZS5sb2coXCJpbmRleE9wdGlvbjpcIixpbmRleE9wdGlvbixcIm9wdGlvbnM6XCIsdGhpcy5vcHRpb25zKTtcclxuc2VsZWN0ZWRQLnRleHRDb250ZW50PXRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uVGV4dCtcIiBcIisodGhpcy5vcHRpb25zW2luZGV4T3B0aW9uXS5vcHRpb25FbW9qaT09bnVsbD9cIlwiOnRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uRW1vamkpO1xyXG5cclxuIHRoaXMub3B0aW9ucy5mb3JFYWNoKCAob3B0aW9uKT0+e1xyXG5cclxuXHJcbiAgbGV0IG9wdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG9wdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tb3B0aW9uXCIpO1xyXG4gIG9wdGlvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvcHRpb24ub3B0aW9uVGV4dCtcIiBcIisob3B0aW9uLm9wdGlvbkVtb2ppPT1udWxsP1wiXCI6b3B0aW9uLm9wdGlvbkVtb2ppKSkpO1xyXG4gIG9wdGlvbkRpdi5zdHlsZS53aGl0ZVNwYWNlPVwibm93cmFwXCI7XHJcbiAgb3B0aW9uRGl2LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7XHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsKCk9PntvcHRpb25EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiZ3JheVwifSk7XHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsKCk9PntvcHRpb25EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIn0pO1xyXG5cclxuICBvcHRpb25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICBvcHRpb24uaGFuZGxlcigpO1xyXG4gIHNlbGVjdGVkUC50ZXh0Q29udGVudD1vcHRpb24ub3B0aW9uVGV4dCtcIiBcIisob3B0aW9uLm9wdGlvbkVtb2ppPT1udWxsP1wiXCI6b3B0aW9uLm9wdGlvbkVtb2ppKTtcclxuICAgIDt9KTtcclxuXHJcbiAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChvcHRpb25EaXYpO1xyXG5cclxuXHJcbiB9KTtcclxuXHJcbiAgc2VsZWN0ZWRQLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvbnNEaXYpO1xyXG4gICAgICB0aGlzLmhpZGRlbk9iamVjdD10cnVlO1xyXG5cclxuXHJcblxyXG4gIH0uYmluZCh0aGlzKSxmYWxzZSk7XHJcblxyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWxlY3RlZFApO1xyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIikpO1xyXG5cclxuXHJcbiAgYnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICBpZih0aGlzLmhpZGRlbk9iamVjdD09dHJ1ZSlcclxuICAgIHsgICAgY29uc29sZS5sb2coXCJnb3QgaGVyZVwiKTtcclxuXHJcbiAgICAgICAgaWYoIWJ1dHRvbkRpdi5jb250YWlucyhzZWxlY3Rpb25EaXYpKVxyXG4gICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHNlbGVjdGlvbkRpdik7XHJcblxyXG4gICAgICAgdGhpcy5oaWRkZW5PYmplY3QgPSBmYWxzZTtcclxuXHJcbiAgICB9ZWxzZVxyXG4gICAgICB7ICAgaWYoc2VsZWN0aW9uRGl2LmNvbnRhaW5zKG9wdGlvbnNEaXYpKVxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvbkRpdi5yZW1vdmVDaGlsZChvcHRpb25zRGl2KTtcclxuXHJcbiAgICAgICAgIGlmKGJ1dHRvbkRpdi5jb250YWlucyhzZWxlY3Rpb25EaXYpKVxyXG4gICAgICAgICAgICBidXR0b25EaXYucmVtb3ZlQ2hpbGQoc2VsZWN0aW9uRGl2KTtcclxuICAgICAgICB0aGlzLmhpZGRlbk9iamVjdCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIH0uYmluZCh0aGlzKSxmYWxzZSk7XHJcblxyXG5cclxuIHBhcmVudERpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG5cclxucmV0dXJuIGJ1dHRvbkRpdjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVCdXR0b25PcHRpb25zXHJcbntcclxuaGFuZGxlcj86KGNoZWNrZWQ6Ym9vbGVhbik9PnZvaWQ7XHJcbm9wdGlvbmFsVGV4dD86c3RyaW5nO1xyXG5jb2xvcj86c3RyaW5nO1xyXG5wYXJlbnQ/OmFueTtcclxuc2l6ZT86bnVtYmVyO1xyXG5pbm5lclJhZGl1cz86YW55O1xyXG5vdXRlclJhZGl1cz86YW55O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uXHJcbntcclxuXHJcbnB1YmxpYyBoYW5kbGVyOihjaGVja2VkOmJvb2xlYW4sYXJnczphbnkpPT52b2lkO1xyXG5wdWJsaWMgY29sb3I6c3RyaW5nPVwiIzcwYjU2NVwiO1xyXG5wdWJsaWMgb3B0aW9uYWxUZXh0OnN0cmluZz1cIlwiO1xyXG5wdWJsaWMgc2l6ZTpudW1iZXI9MjI7XHJcbnB1YmxpYyBpbm5lclJhZGl1czpzdHJpbmc9XCI1MCVcIjtcclxucHVibGljIG91dGVyUmFkaXVzOnN0cmluZz1cIjE1cHhcIjtcclxuXHJcblxyXG5cclxuXHJcbmJ1aWxkQnV0dG9uKG9wdGlvbnM6VG9nZ2xlQnV0dG9uT3B0aW9ucz17fSlcclxue1xyXG5cclxuIGlmKG9wdGlvbnMuaGFuZGxlciE9bnVsbClcclxuICB0aGlzLmhhbmRsZXI9b3B0aW9ucy5oYW5kbGVyO1xyXG5cclxuICAgIGlmKG9wdGlvbnMuY29sb3IhPW51bGwpXHJcbntcclxuICAgIHRoaXMuY29sb3I9b3B0aW9ucy5jb2xvcjtcclxufVxyXG5pZihvcHRpb25zLnNpemUhPW51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaXplPW9wdGlvbnMuc2l6ZTtcclxuICAgIH1cclxuIGlmKG9wdGlvbnMuaW5uZXJSYWRpdXMhPW51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyUmFkaXVzPW9wdGlvbnMuaW5uZXJSYWRpdXM7XHJcbiAgICAgICAgfVxyXG4gaWYob3B0aW9ucy5vdXRlclJhZGl1cyE9bnVsbClcclxuICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJSYWRpdXM9b3B0aW9ucy5vdXRlclJhZGl1cztcclxuICB9XHJcbiBcclxuIGxldCBjc3M9XHJcbiAgYFxyXG4uc2V0dGluZy1ibG9jayB7XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDdweDtcclxuXHRmb250LXNpemU6IDE2LjRweDtcclxufVxyXG5cclxuLnNldHRpbmctYmxvY2sgaDEge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG5cdGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZXR0aW5nLWJsb2NrIGxhYmVsW2Zvcio9XCJpbnB1dFwiXSB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLXJpZ2h0OiA3cHg7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gtY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAke3RoaXMuc2l6ZSsyOH1weDtcclxuXHRoZWlnaHQ6ICR7dGhpcy5zaXplKzh9cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxufVxyXG5cclxuLmNoZWNrYm94LXNsaWRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG5cdGJvcmRlci1yYWRpdXM6ICR7dGhpcy5vdXRlclJhZGl1c31weDtcclxuXHR6LWluZGV4OiAyMDAwO1xyXG59XHJcblxyXG4uY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAke3RoaXMuc2l6ZX1weDtcclxuXHR3aWR0aDogJHt0aGlzLnNpemV9cHg7XHJcblx0bGVmdDogNHB4O1xyXG5cdGJvdHRvbTogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG5cdGJvcmRlci1yYWRpdXM6ICR7dGhpcy5pbm5lclJhZGl1c307XHJcblx0ei1pbmRleDogMTk5OTtcclxufVxyXG5cclxuLmRhcmstbW9kZSAuY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtc2xpZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuY29sb3J9O1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LXNsaWRlcjpiZWZvcmUge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOXB4KTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIge1xyXG5cdHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbmA7XHJcbmxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbnN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcy50cmltKCkpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG5cclxuXHJcblx0ICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nLWJsb2NrXCIpO1xyXG5cdFx0XHRjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuXHRcdFx0aWYob3B0aW9ucy5vcHRpb25hbFRleHQhPW51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvcHRpb25zLm9wdGlvbmFsVGV4dCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YmxvY2suYXBwZW5kQ2hpbGQobmFtZSk7XHJcblx0XHJcblx0XHRcdFx0Y29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcblx0XHRcdFx0Y2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LWNvbnRhaW5lclwiKTtcclxuXHRcdFx0XHRjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHRcdFx0XHRjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XHJcblx0XHRcdFx0Y2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dGhpcy5oYW5kbGVyKGNoZWNrYm94LmNoZWNrZWQpO1xyXG5cdFx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHRcdFx0Y29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdFx0c2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1zbGlkZXJcIik7XHJcblx0XHRcdFx0Y2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcclxuXHRcdFx0XHRuYW1lLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYob3B0aW9ucy5wYXJlbnQpXHJcblx0XHRcdFx0b3B0aW9ucy5wYXJlbnQuYXBwZW5kQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQge0NvbnRleHRNZW51LEFjdGlvblR5cGUsQWN0aW9uRm9ybX0gZnJvbSBcIi4vQ29udGV4dE1lbnVcIlxyXG5pbXBvcnQge01lbnVCdXR0b24sTWVudU9wdGlvbn0gZnJvbSBcIi4vTWVudUJ1dHRvblwiXHJcbmltcG9ydCB7Q29sb3JQaWNrZXJ9IGZyb20gXCIuL0NvbG9yUGlja2VyXCJcclxuaW1wb3J0IHtUb2dnbGVCdXR0b24sVG9nZ2xlQnV0dG9uT3B0aW9uc30gZnJvbSBcIi4vVG9nZ2xlQnV0dG9uXCI7XHJcbmV4cG9ydCBjbGFzcyBVSSB7XHJcblxyXG4gICBwdWJsaWMgY29udGV4dE1lbnVzOkNvbnRleHRNZW51W109W25ldyBDb250ZXh0TWVudSgpXTtcclxuICAgcHVibGljIHRvZ2dsZUJ1dHRvbnM6VG9nZ2xlQnV0dG9uW109W107XHJcbiAgIHB1YmxpYyBtZW51QnV0dG9uczpNZW51QnV0dG9uW109W107XHJcbiAgIHB1YmxpYyBjb2xvclBpY2tlcjpDb2xvclBpY2tlcj1uZXcgQ29sb3JQaWNrZXIoKTtcclxuICAgcHVibGljIGRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5OiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBkZWZhdWx0Q29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGRlZmF1bHRNb2RhbFF1ZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICBwdWJsaWMgaW5zdGFuY2VzQ2xhc3M6IHN0cmluZyA9IFwiaW5zdGFuY2VzXCI7XHJcbiAgIHB1YmxpYyBpdGVtc0NsYXNzOiBzdHJpbmcgPSBcIml0ZW1zLWlubmVyXCI7XHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRNb2RhbFF1ZXJ5ID0gXCIubW9kYWw6bnRoLWNoaWxkKDMpXCI7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzQnV0dG9uUXVlcnkgPSBcIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiAgIH1cclxuXHJcbiAgbWFrZVRvZ2dsZUJ1dHRvbihvcHRpb25zOlRvZ2dsZUJ1dHRvbk9wdGlvbnMpXHJcbiAge1xyXG4gICBsZXQgdG9nZ2xlQnV0dG9uPW5ldyBUb2dnbGVCdXR0b24oKTtcclxuICAgdGhpcy50b2dnbGVCdXR0b25zLnB1c2godG9nZ2xlQnV0dG9uKTtcclxuICAgcmV0dXJuIHRvZ2dsZUJ1dHRvbi5idWlsZEJ1dHRvbihvcHRpb25zKVxyXG4gIH1cclxuICBpbmplY3RDU1MoY3NzOnN0cmluZylcclxue1xyXG4gICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MudHJpbSgpKSk7XHJcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4gIGFkZEFuZEJ1aWxkTWVudUJ1dHRvbihtZW51VGV4dDphbnksbWVudUVtb2ppPzphbnksaW5pdEFjdGlvbj86YW55LG9wdGlvbnM6TWVudU9wdGlvbltdPVtdKVxyXG4gIHsgICAgIGxldCBtQnV0dG9uPW5ldyBNZW51QnV0dG9uKG1lbnVUZXh0LG1lbnVFbW9qaSxpbml0QWN0aW9uLG9wdGlvbnMpXHJcbiAgICB0aGlzLm1lbnVCdXR0b25zLnB1c2gobUJ1dHRvbik7XHJcbiAgICByZXR1cm4gIG1CdXR0b24uYnVpbGRCdXR0b24oKTtcclxuXHJcbiAgfVxyXG5cclxuICAgb25PYnNlcnZpbmdJbnN0YW5jZShhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ub2RlKS5pZCAhPSBcImluc3RhbmNlLTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcbiAgIG9uT2JzZXJ2aW5nSXRlbXMoYXBwbHlPbk9uZUVsZW1lbnQ6IGFueSkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYXBwbHlPbk9uZUVsZW1lbnQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbnN0YW5jZXNDbGFzcylbMF0sIHtcclxuICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxufTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIEdNIGZyb20gXCJncmVhc2Vtb25rZXlcIjtcclxuLy9zb3VyY2UgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB1bnNhZmVXaW5kb3dcclxuZXhwb3J0IGNsYXNzIGRhdGFcclxue1xyXG4gICBwdWJsaWMgIHNvdXJjZTphbnk9bnVsbDtcclxuICAgcHVibGljICBleHBGOmFueT1udWxsO1xyXG5cclxuXHJcblxyXG4gIC8vdVc9dW5zYWZlV2luZG93IG11c3QgYmUgZG9uZSBmcm9tIHVzZXJzY3JpcHRcclxuICAvL2V4cEY9ZXhwb3J0RnVuY3Rpb25cclxuXHJcbnB1YmxpYyBhZGREYXRhU291cmNlKGV4cEY6YW55LHVXOmFueT1zZWxmKVxyXG57IFxyXG4gICB0aGlzLnNvdXJjZT11Vy4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXVxyXG4gICB0aGlzLmV4cEY9ZXhwRjtcclxuXHJcbn1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50cygpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5zb3VyY2UuX2RhdGEuZWxlbWVudHM7XHJcbiAgfVxyXG4gICAgZ2V0SW5zdGFuY2VzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5pbnN0YW5jZXM7XHJcbiAgfVxyXG4gICAgIG9uU29ydGluZyhtZXRob2ROYW1lOnN0cmluZyxuZXdTdmc6c3RyaW5nLGFkZFNvcnRpbmdNZXRob2Q6KHg6YW55LHk6YW55KT0+YW55PXg9PngsYWRkU3R5bGVDaGFuZ2VzPzphbnkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyO1xyXG5cclxuXHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyPXRoaXMuZXhwRigoKSA9PiB7XHJcblxyXG4gICBpZiAodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgIHtcclxuICAgICAgbGV0IHByZXZpb3VzPVsuLi5iZWZvcmUoKV07XHJcbiAgICAgIHJldHVybiBhZGRTb3J0aW5nTWV0aG9kKHByZXZpb3VzLHRoaXMuZ2V0RWxlbWVudHMoKSk7XHJcbiAgICAgfWVsc2VcclxuICAgICB7XHJcbiAgICAgICByZXR1cm4gYmVmb3JlKCk7XHJcblxyXG4gICAgIH1cclxuXHJcbiAgfSx1bnNhZmVXaW5kb3cpO1xyXG4gIFxyXG50aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5zb3J0cy5wdXNoKG1ldGhvZE5hbWUpO1xyXG5jb25zdCBzb3J0QnV0dG9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgIFxyXG5cclxuICAgICAgICAgaWYodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgICAgICAgIHsgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICBpZiggKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjLnRyaW0oKT09XCJodHRwczovL25lYWwuZnVuL2luZmluaXRlLWNyYWZ0L1wiK21ldGhvZE5hbWUrXCIuc3ZnXCIpXHJcbiAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjPW5ld1N2ZztcclxuICAgICAgICAgICAgICAgICBpZihhZGRTdHlsZUNoYW5nZXMhPW51bGwpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC8vaW1nLnN0eWxlLmZpbHRlcj1cIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfSk7XHJcblxyXG4gICAgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuICAgICAgIGNvbnNvbGUubG9nKGltZyxpbWcudGV4dENvbnRlbnQpXHJcbiAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcclxuICAgICAgIHNvcnRCdXR0b25PYnNlcnZlci5vYnNlcnZlKGltZyxjb25maWcpO1xyXG5cclxuXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICAgICBvbkZpbHRlcmluZyhhZGRGaWx0ZXJNZXRob2RPblF1ZXJ5Oih4OmFueSx5OmFueSk9PmFueT0oeDphbnkseTphbnkpPT55KCkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI7XHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuICBsZXQgcXVlcnk9IHRoaXMuc291cmNlLnNlYXJjaFF1ZXJ5XHJcbiBcclxuIFxyXG4gXHJcbiAgcmV0dXJuIGFkZEZpbHRlck1ldGhvZE9uUXVlcnkocXVlcnksYmVmb3JlKTtcclxuICBcclxuICBcclxuICB9LHVuc2FmZVdpbmRvdykgO1xyXG4gIH1cclxuICBcclxuICBcclxuYWRkSW5Ub29sVGlwc0FzeW5jKGNhbGxiYWNrOih0ZXh0OnN0cmluZyxlbW9qaTpzdHJpbmcpPT4gUHJvbWlzZTxzdHJpbmc+KVxyXG57ICAgIFxyXG4gIFxyXG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYC5pdGVtLmluc3RhbmNlOjpiZWZvcmUge3RleHQtYWxpZ246IGNlbnRlcjt9YC50cmltKCkpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG5cclxuICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoIGFzeW5jIChtdXRhdGlvbnMpID0+IHtcclxuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMClcclxuICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKXtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgaWYoKDxIVE1MRWxlbWVudD5ub2RlKS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnN0YW5jZVwiKSlcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdGV4dD0gKDxIVE1MRWxlbWVudD5ub2RlKS5nZXRBdHRyaWJ1dGUoXCJ0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlVGV4dD1cIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGlzdFwiLG5vZGUuY2hpbGROb2RlcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgbiBvZiBBcnJheS5mcm9tKCg8SFRNTEVsZW1lbnQ+bm9kZSkuY2hpbGROb2RlcykpXHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYobi5ub2RlVHlwZT09MyAmJiAoPFRleHQ+bikubGVuZ3RoIT0wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm46XCIsbixcIm5vZGUtdHlwZTpcIixuLm5vZGVUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVGV4dCs9bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgbGV0ICBlbW9qaT0oPEhUTUxFbGVtZW50Pm5vZGUpLnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdGFuY2UtZW1vamlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5vZGVUZXh0PWF3YWl0IGNhbGxiYWNrKG5vZGVUZXh0LGVtb2ppLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYodGV4dD09bnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXRleHQrXCJcXG5cIitub2RlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+bm9kZSkuc2V0QXR0cmlidXRlKFwidG9vbHRpcFwiLHRleHQpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfX1cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnN0YW5jZXNcIilbMF0sIHtcclxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIHN1YnRyZWUgIDogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxuXHJcbn1cclxuYWRkSW5Ub29sVGlwcyhjYWxsYmFjazoodGV4dDpzdHJpbmcsZW1vamk6c3RyaW5nKT0+IHN0cmluZylcclxue1xyXG5cclxuXHJcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgLml0ZW0uaW5zdGFuY2U6OmJlZm9yZSB7dGV4dC1hbGlnbjogY2VudGVyO31gLnRyaW0oKSkpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gIFxyXG4gIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggYXN5bmMgKG11dGF0aW9ucykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2Rlcykpe1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBpZigoPEhUTUxFbGVtZW50Pm5vZGUpLmNsYXNzTGlzdC5jb250YWlucyhcImluc3RhbmNlXCIpKVxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0PSAoPEhUTUxFbGVtZW50Pm5vZGUpLmdldEF0dHJpYnV0ZShcInRvb2x0aXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVUZXh0PVwiXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4aXN0XCIsbm9kZS5jaGlsZE5vZGVzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBuIG9mIEFycmF5LmZyb20oKDxIVE1MRWxlbWVudD5ub2RlKS5jaGlsZE5vZGVzKSlcclxuICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBpZihuLm5vZGVUeXBlPT0zICYmICg8VGV4dD5uKS5sZW5ndGghPTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibjpcIixuLFwibm9kZS10eXBlOlwiLG4ubm9kZVR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUZXh0Kz1uLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBsZXQgIGVtb2ppPSg8SFRNTEVsZW1lbnQ+bm9kZSkucXVlcnlTZWxlY3RvcihcIi5pbnN0YW5jZS1lbW9qaVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgbm9kZVRleHQ9Y2FsbGJhY2sobm9kZVRleHQsZW1vamkudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICBpZih0ZXh0PT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9dGV4dCtcIlxcblwiK25vZGVUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgKDxIVE1MRWxlbWVudD5ub2RlKS5zZXRBdHRyaWJ1dGUoXCJ0b29sdGlwXCIsdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbmNlT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5zdGFuY2VzXCIpWzBdLCB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlICA6IHRydWUsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICB9XHJcblxyXG5cclxufTsiLCJleHBvcnQgY2xhc3MgdXRpbHNcclxue1xyXG5cclxuXHJcbiAgICBwdWJsaWMgdXNlckFkZGVkTWV0aG9kczphbnlbXT1bXTtcclxuICAgIHB1YmxpYyBFeHBvcnRTYXZlQnV0dG9uUXVlcnk6c3RyaW5nID1cIi5zZXR0aW5nW2Zvcj1pbXBvcnQtc2F2ZV0gKyAuc2V0dGluZ1wiO1xyXG4gICAgcHVibGljIHNhdmVGaWxlTmFtZTpzdHJpbmc9XCJpbmZpbml0ZWNyYWZ0Lmpzb25cIjtcclxuXHJcblxyXG4gICAgc2F2ZVNhdmVGaWxlT25QQygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2s7XHJcbiAgICAgICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrID0gKCkgPT4ge0hUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayA9IGhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNvbnN0IGJvZHlPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSAhPT0gXCJjaGlsZExpc3RcIikgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNob3IgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpLmZpbmQoKG5vZGUpID0+e1xyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICg8YW55Pm5vZGUpLmRvd25sb2FkID09PSB0aGlzLnNhdmVGaWxlTmFtZX0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChhbmNob3IpIHJldHVybiBmZXRjaCgoPEhUTUxBbmNob3JFbGVtZW50PmFuY2hvcikuaHJlZikudGhlbihyZXNvbHZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJvZHlPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG4gICAgICAgIGhhbmRsZUNsaWNrLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLkV4cG9ydFNhdmVCdXR0b25RdWVyeSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib2R5T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZWplY3QoXCJUaW1lZCBvdXRcIilcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0cnVjdG9yKClcclxue1xyXG5cclxufVxyXG5hZGRGdW5jdGlvbihuYW1lOnN0cmluZyxjYWxsYmFjazphbnkpXHJcbntcclxuICAgIHRoaXMudXNlckFkZGVkTWV0aG9kcy5wdXNoKHtuYW1lOm5hbWUsaGFuZGxlcjpjYWxsYmFja30pO1xyXG59XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImxldCBtZXNzYWdlOiBzdHJpbmcgPSAnSGVsbG8sIFdvcmxkISc7XHJcbmNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG5pbXBvcnQge1VJfSBmcm9tICBcIi4vVUlcIlxyXG5pbXBvcnQge2RhdGF9IGZyb20gIFwiLi9kYXRhXCJcclxuaW1wb3J0IHt1dGlsc30gZnJvbSAgXCIuL3V0aWxzXCJcclxuZXhwb3J0IGNsYXNzIE1haW5cclxue1xyXG4gcHVibGljICR1aTpVSTtcclxuIHB1YmxpYyAkZGF0YTpkYXRhO1xyXG4gcHVibGljICR1dGlsczp1dGlscztcclxuIGNvbnN0cnVjdG9yKClcclxuIHtcclxuICB0aGlzLiR1aT1uZXcgVUkoKTtcclxuICB0aGlzLiRkYXRhPW5ldyBkYXRhKCk7XHJcbiAgdGhpcy4kdXRpbHM9bmV3IHV0aWxzKCk7XHJcbiB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgb2JqZWN0U291cmNlOk1haW49bmV3IE1haW4oKTsgXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==