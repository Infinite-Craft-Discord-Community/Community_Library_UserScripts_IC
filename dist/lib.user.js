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
    ColorPicker.prototype.makeColorPicker = function (localColback) {
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
        if ((isAndroid || isMobile || isLinux || isWebOs || isIphone || isIpad)) {
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
exports.ToggleButton = void 0;
var ToggleButton = /** @class */ (function () {
    function ToggleButton() {
        this.color = "#70b565";
        this.size = 22;
        this.innerRadius = "50%";
        this.outerRadius = "15px";
    }
    ToggleButton.prototype.buildButton = function (handler, color, parent, size, innerRadius, outerRadius) {
        if (handler != null)
            this.handler = handler;
        if (color != null) {
            this.color = color;
        }
        if (size != null) {
            this.size = size;
        }
        if (innerRadius != null) {
            this.innerRadius = innerRadius;
        }
        if (outerRadius != null) {
            this.outerRadius = outerRadius;
        }
        var css = "\n.setting-block {\n\tcolor: var(--text-color);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7px;\n\tfont-size: 16.4px;\n}\n\n.setting-block h1 {\n\tfont-size: 20px;\n\tfont-family: Roboto, sans-serif;\n\tline-height: 35px;\n\tcolor: var(--text-color);\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.setting-block label[for*=\"input\"] {\n\tfloat: left;\n\tmargin-right: 7px;\n\tmargin-top: 5px;\n}\n\n.checkbox-container {\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: ".concat(this.size + 28, "px;\n\theight: ").concat(this.size + 8, "px;\n\tcursor: pointer;\n}\n\n.checkbox-container input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n\n.checkbox-slider {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--border-color);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n\tborder-radius: ").concat(this.outerRadius, "px;\n\tz-index: 2000;\n}\n\n.checkbox-slider:before {\n\tposition: absolute;\n\tcontent: \"\";\n\theight: ").concat(size, "px;\n\twidth: ").concat(size, "px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: var(--background-color);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n\tborder-radius: ").concat(this.innerRadius, ";\n\tz-index: 1999;\n}\n\n.dark-mode .checkbox-slider:before {\n\tbackground-color: var(--text-color);\n}\n\ninput:checked + .checkbox-slider {\n\tbackground-color: ").concat(color, ";\n}\n\ninput:checked + .checkbox-slider:before {\n\ttransform: translateX(19px);\n}\n\n.input-wrapper {\n\ttransition: 0.4s;\n}\n\n");
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css.trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var block = document.createElement("div");
        block.classList.add("setting-block");
        var name = document.createElement("h1");
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
        if (parent)
            parent.appendChild(block);
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
    UI.prototype.makeToggleButton = function (handler, color, parent, size, innerRadius, outerRadius) {
        var toggleButton = new ToggleButton_1.ToggleButton();
        this.toggleButtons.push(toggleButton);
        return toggleButton.buildButton(handler, color, parent, size, innerRadius, outerRadius);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxhQUFhLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNyRSxVQUFVLENBQUM7Z0JBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMxQixNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUtELDJCQUFXLEdBQVgsVUFBWSxJQUFXLEVBQUMsUUFBWTtRQUVoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsWUFBQztBQUFELENBQUM7QUE1Q1ksc0JBQUs7Ozs7Ozs7VUNBbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQSxJQUFJLE9BQU8sR0FBVyxlQUFlLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQiwwREFBd0I7QUFDeEIsZ0VBQTRCO0FBQzVCLG1FQUE4QjtBQUM5QjtJQUtDO1FBRUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLE9BQUUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksYUFBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDO0FBYlksb0JBQUk7QUFnQk4sb0JBQVksR0FBTSxJQUFJLElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29tbXVuaXR5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvQ29sb3JQaWNrZXIudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL0NvbnRleHRNZW51LnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9NZW51QnV0dG9uLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9Ub2dnbGVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL1VJLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ29tbXVuaXR5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvbW11bml0eVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJleHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJcclxue1xyXG4gcHVibGljICBjYWxsYmFjazphbnk7XHJcbiBwdWJsaWMgIHBpY2tlZENvbG9yOnN0cmluZztcclxuXHJcbm1ha2VDb2xvclBpY2tlcihsb2NhbENvbGJhY2s/OmFueSlcclxue1xyXG4gICBpZihsb2NhbENvbGJhY2shPW51bGwpXHJcbiAgICB0aGlzLmNhbGxiYWNrPWxvY2FsQ29sYmFjaztcclxuICAgICAgXHJcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgIGlzQW5kcm9pZCA9IHVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzTW9iaWxlID0gdWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAtMTtcclxuICAgIHZhciAgaXNXZWJPcyA9IHVhLmluZGV4T2YoXCJ3ZWJvc1wiKSA+IC0xO1xyXG4gICAgdmFyICBpc0lwaG9uZSA9IHVhLmluZGV4T2YoXCJpcGhvbmVcIikgPiAtMTtcclxuICAgIHZhciAgaXNJcGFkID0gdWEuaW5kZXhPZihcImlwYWRcIikgPiAtMTtcclxuICAgIHZhciAgaXNMaW51eCA9IHVhLmluZGV4T2YoXCJsaW51eFwiKSA+IC0xO1xyXG4gICAgbGV0IHBhcmVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuICBpZigoaXNBbmRyb2lkIHx8IGlzTW9iaWxlIHx8IGlzTGludXggfHwgaXNXZWJPcyB8fCBpc0lwaG9uZSB8fCBpc0lwYWQpKVxyXG4gICAge1xyXG4gICAgICBcclxuICAgICAgIGxldCBkaWFnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcblxyXG4gICAgICAgbGV0IGxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIGxyLmlubmVyVGV4dD1cIlIgKDAtMjU1KVwiO1xyXG4gICAgICAgbHIuc3R5bGUuY29sb3I9XCJyZWRcIjtcclxuICAgICAgIGxldCBsZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsZy5pbm5lclRleHQ9XCJHICgwLTI1NSlcIjtcclxuICAgICAgIGxnLnN0eWxlLmNvbG9yPVwiZ3JlZW5cIjtcclxuICAgICAgIGxldCBsYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsYi5pbm5lclRleHQ9XCJCICgwLTI1NSlcIjtcclxuICAgICAgIGxiLnN0eWxlLmNvbG9yPVwiYmx1ZVwiO1xyXG4gICAgICAgbGV0IFByZXZpZXdzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIFByZXZpZXdzLmlubmVyVGV4dD1cIlByZXZpZXcgY29sb3JcIjtcclxuICAgICAgIGxldCBwcmV2aWV3RGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLndpZHRoPVwiMTAwcHhcIjtcclxuICAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuaGVpZ2h0PVwiMTAwcHhcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgbGV0IHJpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICByaS50eXBlPVwibnVtYmVyXCI7XHJcbiAgICAgICAgcmkubWluPVwiMFwiO1xyXG4gICAgICAgIHJpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgIHJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgbGV0IGdpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgIGdpLnR5cGU9XCJudW1iZXJcIjtcclxuICAgICAgIGdpLm1pbj1cIjBcIjtcclxuICAgICAgIGdpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcbiAgICAgICBsZXQgYmk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgYmkudHlwZT1cIm51bWJlclwiO1xyXG4gICAgICAgYmkubWluPVwiMFwiO1xyXG4gICAgICAgYmkubWF4PVwiMjU1XCI7XHJcbiAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuICAgICAgIGxldCByZ2IySGV4ID0gKHM6YW55KSA9PiBzLm1hdGNoKC9bMC05XSsvZykucmVkdWNlKChhOmFueSwgYjphbnkpID0+IGErKGJ8MjU2KS50b1N0cmluZygxNikuc2xpY2UoMSksICcjJyk7XHJcbiAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcblxyXG5cclxuICAgICAgICAgcmkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbnQ6YW55KXtcclxuXHJcblxyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJpOlwiLHJpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG5cclxuICAgICAgICAgIGlmKHJpLnZhbHVlPT1cIlwiKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICByaS52YWx1ZT1cIjBcIjtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KHJpLnZhbHVlKTwwKVxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIwXCI7XHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KHJpLnZhbHVlKT4yNTUpXHJcbiAgICAgICAgICAgICByaS52YWx1ZT1cIjI1NVwiO1xyXG5cclxuXHJcblxyXG4gICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcbiAgICAgICAgIHRoaXMucGlja2VkQ29sb3I9cmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib25lQ29sb3I6XCIsdGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgIGdpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW46YW55KXtcclxuXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2k6XCIsZ2kudmFsdWUsXCJzb21ldGhpbmdcIik7XHJcblxyXG4gICAgICAgICBpZihnaS52YWx1ZT09XCJcIilcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoZ2kudmFsdWUpPDApXHJcbiAgICAgICAgICAgICBnaS52YWx1ZT1cIjBcIjtcclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChnaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZF9jb2xvclwiLHJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpKTtcclxuICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgYmkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbnQ6YW55KXtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJpOlwiLGJpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG4gICAgICAgICAgaWYoYmkudmFsdWU9PVwiXCIpXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgIGJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChiaS52YWx1ZSk8MClcclxuICAgICAgICAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuXHJcbiAgICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGJpLnZhbHVlKT4yNTUpXHJcbiAgICAgICAgICAgICBiaS52YWx1ZT1cIjI1NVwiO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG4gICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG5cclxuICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgY2xvc2VCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDbG9zZVwiKSk7XHJcbiAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgZGlhZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgIGxldCBpbnB1dERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgbGV0IHByZXZpZXdzRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBsZXQgbWFpbkxvZ2ljPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChscik7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocmkpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxnKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChnaSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobGIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGJpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5zdHlsZS5mbG9hdD1cImxlZnRcIjtcclxuICAgICAgIGlucHV0RGl2LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gICAgICAgbWFpbkxvZ2ljLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuXHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChQcmV2aWV3cyk7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQocHJldmlld0Rpdik7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgcHJldmlld3NEaXYuc3R5bGUuZmxvYXQ9XCJyaWdodFwiO1xyXG4gICAgICAgbWFpbkxvZ2ljLmFwcGVuZENoaWxkKHByZXZpZXdzRGl2KTtcclxuICAgICAgIGRpYWcuYXBwZW5kQ2hpbGQobWFpbkxvZ2ljKTtcclxuXHJcbiAgICAgICBkaWFnLmFwcGVuZENoaWxkKCBjbG9zZUJ1dHRvbik7XHJcbiAgICAgICBkaWFnLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIjtcclxuICAgICAgIGRpYWcuc3R5bGUudG9wPVwiMzMlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmxlZnQ9XCIyNSVcIjtcclxuICAgICAgIGRpYWcuc3R5bGUuYmFja2dyb3VuZD1cInZhcigtLWJhY2tncm91bmQtY29sb3IpXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmNvbG9yPShcInZhcigtLXRleHQtY29sb3IpXCIpLnRyaW0oKTtcclxuICAgICAgIGlmKHBhcmVudClcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGlhZyk7XHJcbiAgICAgICAgZGlhZy5zaG93TW9kYWwoKTtcclxufWVsc2Vcclxue1xyXG5cclxuXHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcclxuXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSlcclxue1xyXG4gICB0aGlzLnBpY2tlZENvbG9yPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuXHJcbiAgIH0uYmluZCh0aGlzKSk7XHJcbiAgIGlmKHBhcmVudClcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgLy8gaGlkZGVuPTA7XHJcbiAgIGlucHV0LmNsaWNrKCk7XHJcbiBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XHJcbiAgICBcImJ1dHRvblwiLCBcImNoZWNrYm94XCJcclxuIH1cclxuIFxyXG4gZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Gb3JtIHtcclxuICAgIHRleHRPbjogc3RyaW5nO1xyXG4gICAgdGV4dE9mZj86IHN0cmluZztcclxuICAgIGVtb2ppT24/OnN0cmluZztcclxuICAgIGVtb2ppT2ZmPzpzdHJpbmc7XHJcbiAgICBoYW5kbGVyOiBhbnk7XHJcbiAgICBpbml0SGFuZGxlcj86ICh4OiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlO1xyXG4gXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dE1lbnVVaU9wdGlvbnMge1xyXG4gICAgY29sb3JCOiBcIiM1NEM1NzFcIixcclxuICAgIGhlaWdodDogNDAsXHJcbiAgICBib3JkZXJXaWR0aDogMixcclxuICAgIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgLCBoZWlnaHRCdXR0b246IDIwLFxyXG4gICAgYm9yZGVyV2lkdGhCdXR0b246IDEsXHJcbiAgICByYWRpdXM6IDQsXHJcbiAgICBtaW5XaWR0aDogMTAwLFxyXG4gICAgeE9mZnNldDogMTIwLFxyXG4gICAgeE9mZnNldEJ1dHRvbjogMjAsXHJcbiAgICBwYWRkaW5nQnV0dG9uOiAxLFxyXG4gICAgZHVyYXRpb246IDFcclxuIFxyXG4gXHJcbiBcclxuIH1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIGV4cG9ydCBjbGFzcyBDb250ZXh0TWVudSB7XHJcbiAgICBwdWJsaWMgdHJpZ2dlclR5cGVWaXNpYmxlOiBzdHJpbmcgPSBcIm1vdXNlb3ZlclwiO1xyXG4gICAgcHVibGljIHRyaWdnZXJUeXBlSW52aXNpYmxlOiBzdHJpbmcgPSBcIm1vdXNlbGVhdmVcIjtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlckluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlckluQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb246IGFueTtcclxuIFxyXG4gICAgcHVibGljIGNvbnRleHRNZW51UXVlcnk6IHN0cmluZyA9IFwiLmNvbnRleHRNZW51XCI7XHJcbiAgICBwdWJsaWMgYWN0aW9uczogQWN0aW9uRm9ybVtdID0gW107XHJcbiBcclxuIFxyXG4gICAgc2V0Q29tcGxleFRyaWdnZXJJbihjb21wbGV4OiBhbnkpIHtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbiA9IGNvbXBsZXg7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0Q29tcGxleFRyaWdnZXJPdXQoY29tcGxleDogYW55KSB7XHJcbiAgICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0Q29uZGl0aW9uID0gY29tcGxleDtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gXHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uOiBBY3Rpb25Gb3JtKSB7XHJcbiAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9ucyhhY3Rpb25zOiBBY3Rpb25Gb3JtW10pIHtcclxuICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKC4uLmFjdGlvbnMpO1xyXG4gICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiAgICBidWlsZENvbnRleHRNZW51KGl0ZW06IGFueSwgZTogYW55LCBvcHRpb25zOiBDb250ZXh0TWVudVVpT3B0aW9ucyA9IHtcclxuICAgICAgIGNvbG9yQjogXCIjNTRDNTcxXCIsIGhlaWdodDogNDAsIGJvcmRlcldpZHRoOiAyLCB3aWR0aEJ1dHRvbjogNTBcclxuICAgICAgICwgaGVpZ2h0QnV0dG9uOiAyMCwgYm9yZGVyV2lkdGhCdXR0b246IDEsIHJhZGl1czogNCxcclxuICAgICAgIG1pbldpZHRoOiAxMDAsIHhPZmZzZXQ6IDEyMCwgeE9mZnNldEJ1dHRvbjogMjAsIHBhZGRpbmdCdXR0b246IDEsIGR1cmF0aW9uOiAxXHJcbiAgICB9KVxyXG4geyAgIGlmKHRoaXMuY29tcGxleFRyaWdnZXJJbj09ZmFsc2UpXHJcbiAgICB7IFxyXG4gICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJpZ2dlclR5cGVWaXNpYmxlLCgpPT5cclxuICAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudVdoZW5WaXNpYmxlKGl0ZW0sZSxvcHRpb25zKVxyXG4gXHJcbiBcclxuICAgICk7XHJcbiAgICBcclxuICAgIH1lbHNlXHJcbiAgICB7XHJcbiBcclxuICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb24oaXRlbSk7XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG4gfVxyXG4gXHJcbiAgICBidWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgIH0sIHpJbmRleCA9IDEwMDApIHtcclxuIFxyXG4gICAgICAgICBcclxuIFxyXG4gICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgIGlmKHBhcmVudCl7XHJcbiAgICAgICBsZXQgY29uTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGV4dE1lbnVRdWVyeSk7XHJcbiBcclxuICAgICAgIGlmIChjb25NZW51ID09IG51bGwpIHtcclxuICAgICAgICAgIGNvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgY29uTWVudS5jbGFzc0xpc3QuYWRkKHRoaXMuY29udGV4dE1lbnVRdWVyeS5zbGljZSgxKSk7XHJcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29uTWVudSk7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbk1lbnUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgfVxyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQ9XCJmaXQtY29udGVudFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS56SW5kZXggPSB6SW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgIC8vICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUubWluV2lkdGggPSBvcHRpb25zLm1pbldpZHRoICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS50b3AgPSBlLmNsaWVudFkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSBvcHRpb25zLnhPZmZzZXQpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlciA9IG9wdGlvbnMuYm9yZGVyV2lkdGgudG9TdHJpbmcoKSArIFwicHggc29saWQgXCIgKyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLmdldFByb3BlcnR5VmFsdWUoXCItLXRleHQtY29sb3JcIikudHJpbSgpO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCI7XHJcbiBcclxuIFxyXG4gICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xyXG4gXHJcbiBcclxuICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICBsZXQgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiBcclxuIFxyXG4gICAgICAgICAgaWYgKGFjdGlvbi50eXBlID09IEFjdGlvblR5cGUuY2hlY2tib3gpIHtcclxuICAgICAgICAgICAgIGxldCBhY3Rpb25DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmlkID0gXCJhY3Rpb25JZFwiICsgaTtcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5odG1sRm9yID0gXCJhY3Rpb25JZFwiICsgaTtcclxuICAgICAgICAgICAgIHRleHRTcGFuLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRleHQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGhCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmdCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLm1hcmdpblRvcCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luUmlnaHQgPSAoKG9wdGlvbnMuaGVpZ2h0IC0gb3B0aW9ucy5oZWlnaHRCdXR0b24pIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIiBcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gb3B0aW9ucy5yYWRpdXMudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuaGVpZ2h0ID0gKG9wdGlvbnMuaGVpZ2h0QnV0dG9uIC0gMiAqIG9wdGlvbnMucGFkZGluZ0J1dHRvbikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUud2lkdGggPSAob3B0aW9ucy53aWR0aEJ1dHRvbiAvIDIpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zZm9ybSA9IG9wdGlvbnMuZHVyYXRpb24udG9TdHJpbmcoKSArIFwic1wiO1xyXG4gICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICBsZXQgaXNPbiA9IGFjdGlvbi5pbml0SGFuZGxlcj8gYWN0aW9uLmluaXRIYW5kbGVyKGl0ZW0pOmZhbHNlO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCA9IGlzT247XHJcbiBcclxuICAgICAgICAgICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zbGF0ZSA9IG9wdGlvbnMueE9mZnNldEJ1dHRvbi50b1N0cmluZygpICsgXCJweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT24/P1wiXCIrYWN0aW9uLnRleHRPbjtcclxuICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zbGF0ZSA9IFwiMHB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPWFjdGlvbi5lbW9qaU9mZj8/YWN0aW9uLmVtb2ppT24/P1wiXCIrIGFjdGlvbi50ZXh0T2ZmID8/IGFjdGlvbi50ZXh0T247XHJcbiBcclxuICAgICAgICAgICAgIH1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5oYW5kbGVyKGl0ZW0sIGUsIGFjdGlvbkNoZWNrYm94LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbkNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gICAgICAgICAgICAgfSk7XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICAvLyAgY2hlY2tab21iaWUuc3R5bGUsZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoYWN0aW9uQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuIFxyXG4gICAgICAgICAgfWVsc2VcclxuICAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGFjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS53aWR0aD1cIjEwMCVcIjtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50PWFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5pbml0SGFuZGxlcilcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5pbml0SGFuZGxlcihjb25NZW51KTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5jb2xvcj0gXCJ2YXIoLS10ZXh0LWNvbG9yKVwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwoKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9b3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQ9KGFjdGlvbi5lbW9qaU9mZj8/YWN0aW9uLmVtb2ppT24/P1wiXCIpK2FjdGlvbi50ZXh0T2ZmPz9hY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwoKT0+e1xyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCJcclxuICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50PShhY3Rpb24uZW1vamlPbj8/XCJcIikrYWN0aW9uLnRleHRPbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+YWN0aW9uLmhhbmRsZXIoKSk7XHJcbiBcclxuICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b24pO1xyXG4gXHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBpZih0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0PT1mYWxzZSl7XHJcbiAgICAgICAgICBjb25NZW51LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZUludmlzaWJsZSwgKGUpID0+IHtcclxuIFxyXG4gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRleHRNZW51UXVlcnkpLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50PmVsZW0pLnN0eWxlLm9wYWNpdHkgPSBcIjBcIik7XHJcbiBcclxuICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgIH0pO31cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24oY29uTWVudSk7XHJcbiAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgXHJcbiBcclxuIFxyXG4gICAgfX1cclxuIH0iLCJcclxuZXhwb3J0IGludGVyZmFjZSBNZW51T3B0aW9uXHJcbntcclxuIFxyXG4gICAgb3B0aW9uVGV4dDpzdHJpbmc7XHJcbiAgICBvcHRpb25FbW9qaT86c3RyaW5nO1xyXG4gICAgaGFuZGxlcjphbnk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uXHJcbntcclxuIHB1YmxpYyBwYXJlbnRRdWVyeTpzdHJpbmc9XCIuc2V0dGluZ3MtY29udGVudFwiO1xyXG4gbWVudVRleHQ6c3RyaW5nPVwiQ2xpY2sgT24gTWVcIjtcclxuIG1lbnVFbW9qaTpzdHJpbmc9XCJcIjtcclxuIG9wdGlvbnM6TWVudU9wdGlvbltdPVtdO1xyXG4gaGlkZGVuT2JqZWN0OmJvb2xlYW49dHJ1ZTtcclxuIHB1YmxpYyBidXR0b25DbGFzczpzdHJpbmc9XCJzZXR0aW5nXCI7XHJcbiBwdWJsaWMgaW5pdEFjdGlvbjooKT0+bnVtYmVyPSgpPT57cmV0dXJuIDA7fTtcclxuIFxyXG5zZXRPcHRpb25zKG9wdGlvbnM6TWVudU9wdGlvbltdKVxyXG57XHJcbiB0aGlzLm9wdGlvbnM9b3B0aW9ucztcclxufVxyXG5hZGRPcHRpb24ob3B0aW9uOk1lbnVPcHRpb24pXHJcbntcclxuIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbik7XHJcbn1cclxuXHJcblxyXG4gY29uc3RydWN0b3IobWVudVRleHQ6YW55LG1lbnVFbW9qaT86YW55LGluaXRBY3Rpb24/OmFueSxvcHRpb25zOk1lbnVPcHRpb25bXT1bXSlcclxuIHsgXHJcbiAgICB0aGlzLm1lbnVUZXh0PW1lbnVUZXh0O1xyXG4gICAgdGhpcy5pbml0QWN0aW9uPWluaXRBY3Rpb247XHJcbiAgICB0aGlzLm1lbnVFbW9qaT1tZW51RW1vamk7XHJcbiAgICB0aGlzLm9wdGlvbnMucHVzaCguLi5vcHRpb25zKTtcclxuXHJcbiB9XHJcblxyXG5cclxuXHJcbmJ1aWxkQnV0dG9uKG90aGVyUGFyZW50PzpzdHJpbmcpXHJcbntcclxuIGxldCBwYXJlbnREaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdGhlclBhcmVudD8/dGhpcy5wYXJlbnRRdWVyeSk7XHJcbiBsZXQgYnV0dG9uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBidXR0b25EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uXCIpO1xyXG4gYnV0dG9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubWVudVRleHQrXCIgXCIrKHRoaXMubWVudUVtb2ppPT1udWxsP1wiXCI6dGhpcy5tZW51RW1vamkpKSk7XHJcbiBidXR0b25EaXYuc3R5bGUuaGVpZ2h0PVwiZml0LWNvbnRlbnRcIjtcclxuXHJcblxyXG4gbGV0IHNlbGVjdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gbGV0IHNlbGVjdGVkUD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuIGxldCBvcHRpb25zRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBvcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvbi1vcHRpb25zXCIpO1xyXG4gb3B0aW9uc0Rpdi5zdHlsZS5vdmVyZmxvd1k9XCJzY3JvbGxcIjtcclxuIG9wdGlvbnNEaXYuc3R5bGUuaGVpZ2h0PVwiMTAwcHhcIjtcclxuXHJcblxyXG4gYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQgKHRoaXMuYnV0dG9uQ2xhc3MpO1xyXG5cclxuXHJcbiBsZXQgY3NzID0gYFxyXG4gLm1lbnUtYnV0dG9uLW9wdGlvbjpob3ZlclxyXG4gICAgIHtcclxuICAgICAgIGJhY2tncm91bmQ6Z3JheTtcclxuXHJcbiAgICAgfVxyXG5cclxuLm1lbnUtYnV0dG9uXHJcbntcclxuXHJcbnNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuXHJcbn1cclxuLm1lbnUtYnV0dG9uLW9wdGlvbnMge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi99XHJcbiAubWVudS1idXR0b24tb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBXZWJLaXQgKi9cclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO31cclxuYFxyXG5cclxuXHJcbmxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbnN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcy50cmltKCkpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG5cclxubGV0IGluZGV4T3B0aW9uPTA7XHJcbmlmKHRoaXMuaW5pdEFjdGlvbilcclxuICBpbmRleE9wdGlvbj10aGlzLmluaXRBY3Rpb24oKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiaW5kZXhPcHRpb246XCIsaW5kZXhPcHRpb24sXCJvcHRpb25zOlwiLHRoaXMub3B0aW9ucyk7XHJcbnNlbGVjdGVkUC50ZXh0Q29udGVudD10aGlzLm9wdGlvbnNbaW5kZXhPcHRpb25dLm9wdGlvblRleHQrXCIgXCIrKHRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uRW1vamk9PW51bGw/XCJcIjp0aGlzLm9wdGlvbnNbaW5kZXhPcHRpb25dLm9wdGlvbkVtb2ppKTtcclxuXHJcbiB0aGlzLm9wdGlvbnMuZm9yRWFjaCggKG9wdGlvbik9PntcclxuXHJcblxyXG4gIGxldCBvcHRpb25EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBvcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uLW9wdGlvblwiKTtcclxuICBvcHRpb25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob3B0aW9uLm9wdGlvblRleHQrXCIgXCIrKG9wdGlvbi5vcHRpb25FbW9qaT09bnVsbD9cIlwiOm9wdGlvbi5vcHRpb25FbW9qaSkpKTtcclxuICBvcHRpb25EaXYuc3R5bGUud2hpdGVTcGFjZT1cIm5vd3JhcFwiO1xyXG4gIG9wdGlvbkRpdi5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiO1xyXG4gIG9wdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCgpPT57b3B0aW9uRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImdyYXlcIn0pO1xyXG4gIG9wdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCgpPT57b3B0aW9uRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInZhcigtLWJhY2tncm91bmQtY29sb3IpXCJ9KTtcclxuXHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgb3B0aW9uLmhhbmRsZXIoKTtcclxuICBzZWxlY3RlZFAudGV4dENvbnRlbnQ9b3B0aW9uLm9wdGlvblRleHQrXCIgXCIrKG9wdGlvbi5vcHRpb25FbW9qaT09bnVsbD9cIlwiOm9wdGlvbi5vcHRpb25FbW9qaSk7XHJcbiAgICA7fSk7XHJcblxyXG4gIG9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQob3B0aW9uRGl2KTtcclxuXHJcblxyXG4gfSk7XHJcblxyXG4gIHNlbGVjdGVkUC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChvcHRpb25zRGl2KTtcclxuICAgICAgdGhpcy5oaWRkZW5PYmplY3Q9dHJ1ZTtcclxuXHJcblxyXG5cclxuICB9LmJpbmQodGhpcyksZmFsc2UpO1xyXG5cclxuICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRQKTtcclxuICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpKTtcclxuXHJcblxyXG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgaWYodGhpcy5oaWRkZW5PYmplY3Q9PXRydWUpXHJcbiAgICB7ICAgIGNvbnNvbGUubG9nKFwiZ290IGhlcmVcIik7XHJcblxyXG4gICAgICAgIGlmKCFidXR0b25EaXYuY29udGFpbnMoc2VsZWN0aW9uRGl2KSlcclxuICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChzZWxlY3Rpb25EaXYpO1xyXG5cclxuICAgICAgIHRoaXMuaGlkZGVuT2JqZWN0ID0gZmFsc2U7XHJcblxyXG4gICAgfWVsc2VcclxuICAgICAgeyAgIGlmKHNlbGVjdGlvbkRpdi5jb250YWlucyhvcHRpb25zRGl2KSlcclxuICAgICAgICAgICAgICBzZWxlY3Rpb25EaXYucmVtb3ZlQ2hpbGQob3B0aW9uc0Rpdik7XHJcblxyXG4gICAgICAgICBpZihidXR0b25EaXYuY29udGFpbnMoc2VsZWN0aW9uRGl2KSlcclxuICAgICAgICAgICAgYnV0dG9uRGl2LnJlbW92ZUNoaWxkKHNlbGVjdGlvbkRpdik7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5PYmplY3QgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG5cclxuICB9LmJpbmQodGhpcyksZmFsc2UpO1xyXG5cclxuXHJcbiBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcclxuXHJcbnJldHVybiBidXR0b25EaXY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBUb2dnbGVCdXR0b25cclxue1xyXG5cclxucHVibGljIGhhbmRsZXI6KGNoZWNrZWQ6Ym9vbGVhbixhcmdzOmFueSk9PnZvaWQ7XHJcbnB1YmxpYyBjb2xvcjpzdHJpbmc9XCIjNzBiNTY1XCI7XHJcbnB1YmxpYyBzaXplOm51bWJlcj0yMjtcclxucHVibGljIGlubmVyUmFkaXVzOnN0cmluZz1cIjUwJVwiO1xyXG5wdWJsaWMgb3V0ZXJSYWRpdXM6c3RyaW5nPVwiMTVweFwiO1xyXG5idWlsZEJ1dHRvbihoYW5kbGVyPzphbnksY29sb3I/OmFueSxwYXJlbnQ/OmFueSxzaXplPzphbnksaW5uZXJSYWRpdXM/OmFueSxvdXRlclJhZGl1cz86YW55KVxyXG57XHJcblxyXG4gaWYoaGFuZGxlciE9bnVsbClcclxuICB0aGlzLmhhbmRsZXI9aGFuZGxlcjtcclxuXHJcbiAgICBpZihjb2xvciE9bnVsbClcclxue1xyXG4gICAgdGhpcy5jb2xvcj1jb2xvcjtcclxufVxyXG5pZihzaXplIT1udWxsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2l6ZT1zaXplO1xyXG4gICAgfVxyXG4gaWYoaW5uZXJSYWRpdXMhPW51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyUmFkaXVzPWlubmVyUmFkaXVzO1xyXG4gICAgICAgIH1cclxuIGlmKG91dGVyUmFkaXVzIT1udWxsKVxyXG4gICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlclJhZGl1cz1vdXRlclJhZGl1cztcclxuICB9XHJcbiBcclxuIGxldCBjc3M9XHJcbiAgYFxyXG4uc2V0dGluZy1ibG9jayB7XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDdweDtcclxuXHRmb250LXNpemU6IDE2LjRweDtcclxufVxyXG5cclxuLnNldHRpbmctYmxvY2sgaDEge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG5cdGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZXR0aW5nLWJsb2NrIGxhYmVsW2Zvcio9XCJpbnB1dFwiXSB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLXJpZ2h0OiA3cHg7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gtY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAke3RoaXMuc2l6ZSsyOH1weDtcclxuXHRoZWlnaHQ6ICR7dGhpcy5zaXplKzh9cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxufVxyXG5cclxuLmNoZWNrYm94LXNsaWRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG5cdGJvcmRlci1yYWRpdXM6ICR7dGhpcy5vdXRlclJhZGl1c31weDtcclxuXHR6LWluZGV4OiAyMDAwO1xyXG59XHJcblxyXG4uY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAke3NpemV9cHg7XHJcblx0d2lkdGg6ICR7c2l6ZX1weDtcclxuXHRsZWZ0OiA0cHg7XHJcblx0Ym90dG9tOiA0cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xyXG5cdHRyYW5zaXRpb246IDAuNHM7XHJcblx0Ym9yZGVyLXJhZGl1czogJHt0aGlzLmlubmVyUmFkaXVzfTtcclxuXHR6LWluZGV4OiAxOTk5O1xyXG59XHJcblxyXG4uZGFyay1tb2RlIC5jaGVja2JveC1zbGlkZXI6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1zbGlkZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9O1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LXNsaWRlcjpiZWZvcmUge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOXB4KTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIge1xyXG5cdHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbmA7XHJcbmxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbnN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcy50cmltKCkpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG5cclxuXHJcblx0ICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nLWJsb2NrXCIpO1xyXG5cdFx0XHRjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cdFx0XHRibG9jay5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHRcclxuXHRcdFx0XHRjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuXHRcdFx0XHRjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtY29udGFpbmVyXCIpO1xyXG5cdFx0XHRcdGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcclxuXHRcdFx0XHRjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcblx0XHRcdFx0Y2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR0aGlzLmhhbmRsZXIoY2hlY2tib3guY2hlY2tlZCk7XHJcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdFx0XHRjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRcdFx0XHRzbGlkZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LXNsaWRlclwiKTtcclxuXHRcdFx0XHRjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xyXG5cdFx0XHRcdG5hbWUuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICBpZihwYXJlbnQpXHJcblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKGJsb2NrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcclxuXHJcblx0XHRcdH1cclxuXHRcdFxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IHtDb250ZXh0TWVudSxBY3Rpb25UeXBlLEFjdGlvbkZvcm19IGZyb20gXCIuL0NvbnRleHRNZW51XCJcclxuaW1wb3J0IHtNZW51QnV0dG9uLE1lbnVPcHRpb259IGZyb20gXCIuL01lbnVCdXR0b25cIlxyXG5pbXBvcnQge0NvbG9yUGlja2VyfSBmcm9tIFwiLi9Db2xvclBpY2tlclwiXHJcbmltcG9ydCB7VG9nZ2xlQnV0dG9ufSBmcm9tIFwiLi9Ub2dnbGVCdXR0b25cIjtcclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuXHJcbiAgIHB1YmxpYyBjb250ZXh0TWVudXM6Q29udGV4dE1lbnVbXT1bbmV3IENvbnRleHRNZW51KCldO1xyXG4gICBwdWJsaWMgdG9nZ2xlQnV0dG9uczpUb2dnbGVCdXR0b25bXT1bXTtcclxuICAgcHVibGljIG1lbnVCdXR0b25zOk1lbnVCdXR0b25bXT1bXTtcclxuICAgcHVibGljIGNvbG9yUGlja2VyOkNvbG9yUGlja2VyPW5ldyBDb2xvclBpY2tlcigpO1xyXG4gICBwdWJsaWMgZGVmYXVsdFNldHRpbmdzQnV0dG9uUXVlcnk6IHN0cmluZztcclxuICAgcHVibGljIGRlZmF1bHRDb250ZXh0TWVudVF1ZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICBwdWJsaWMgZGVmYXVsdE1vZGFsUXVlcnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgIHB1YmxpYyBpbnN0YW5jZXNDbGFzczogc3RyaW5nID0gXCJpbnN0YW5jZXNcIjtcclxuICAgcHVibGljIGl0ZW1zQ2xhc3M6IHN0cmluZyA9IFwiaXRlbXMtaW5uZXJcIjtcclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdE1vZGFsUXVlcnkgPSBcIi5tb2RhbDpudGgtY2hpbGQoMylcIjtcclxuICAgICAgdGhpcy5kZWZhdWx0U2V0dGluZ3NCdXR0b25RdWVyeSA9IFwiLnNldHRpbmdzLWNvbnRlbnRcIjtcclxuICAgfVxyXG5cclxuICBtYWtlVG9nZ2xlQnV0dG9uKGhhbmRsZXI/OmFueSxjb2xvcj86YW55LHBhcmVudD86YW55LHNpemU/OmFueSxpbm5lclJhZGl1cz86YW55LG91dGVyUmFkaXVzPzphbnkpXHJcbiAge1xyXG4gICBsZXQgdG9nZ2xlQnV0dG9uPW5ldyBUb2dnbGVCdXR0b24oKTtcclxuICAgdGhpcy50b2dnbGVCdXR0b25zLnB1c2godG9nZ2xlQnV0dG9uKTtcclxuICAgcmV0dXJuIHRvZ2dsZUJ1dHRvbi5idWlsZEJ1dHRvbihoYW5kbGVyLGNvbG9yLHBhcmVudCxzaXplLGlubmVyUmFkaXVzLG91dGVyUmFkaXVzKVxyXG4gIH1cclxuICBpbmplY3RDU1MoY3NzOnN0cmluZylcclxue1xyXG4gICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MudHJpbSgpKSk7XHJcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4gIGFkZEFuZEJ1aWxkTWVudUJ1dHRvbihtZW51VGV4dDphbnksbWVudUVtb2ppPzphbnksaW5pdEFjdGlvbj86YW55LG9wdGlvbnM6TWVudU9wdGlvbltdPVtdKVxyXG4gIHsgICAgIGxldCBtQnV0dG9uPW5ldyBNZW51QnV0dG9uKG1lbnVUZXh0LG1lbnVFbW9qaSxpbml0QWN0aW9uLG9wdGlvbnMpXHJcbiAgICB0aGlzLm1lbnVCdXR0b25zLnB1c2gobUJ1dHRvbik7XHJcbiAgICByZXR1cm4gIG1CdXR0b24uYnVpbGRCdXR0b24oKTtcclxuXHJcbiAgfVxyXG5cclxuICAgb25PYnNlcnZpbmdJbnN0YW5jZShhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ub2RlKS5pZCAhPSBcImluc3RhbmNlLTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcbiAgIG9uT2JzZXJ2aW5nSXRlbXMoYXBwbHlPbk9uZUVsZW1lbnQ6IGFueSkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYXBwbHlPbk9uZUVsZW1lbnQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbnN0YW5jZXNDbGFzcylbMF0sIHtcclxuICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxufTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIEdNIGZyb20gXCJncmVhc2Vtb25rZXlcIjtcclxuLy9zb3VyY2UgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB1bnNhZmVXaW5kb3dcclxuZXhwb3J0IGNsYXNzIGRhdGFcclxue1xyXG4gICBwdWJsaWMgIHNvdXJjZTphbnk9bnVsbDtcclxuICAgcHVibGljICBleHBGOmFueT1udWxsO1xyXG5cclxuXHJcblxyXG4gIC8vdVc9dW5zYWZlV2luZG93IG11c3QgYmUgZG9uZSBmcm9tIHVzZXJzY3JpcHRcclxuICAvL2V4cEY9ZXhwb3J0RnVuY3Rpb25cclxuXHJcbnB1YmxpYyBhZGREYXRhU291cmNlKGV4cEY6YW55LHVXOmFueT1zZWxmKVxyXG57IFxyXG4gICB0aGlzLnNvdXJjZT11Vy4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXVxyXG4gICB0aGlzLmV4cEY9ZXhwRjtcclxuXHJcbn1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50cygpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5zb3VyY2UuX2RhdGEuZWxlbWVudHM7XHJcbiAgfVxyXG4gICAgZ2V0SW5zdGFuY2VzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5pbnN0YW5jZXM7XHJcbiAgfVxyXG4gICAgIG9uU29ydGluZyhtZXRob2ROYW1lOnN0cmluZyxuZXdTdmc6c3RyaW5nLGFkZFNvcnRpbmdNZXRob2Q6KHg6YW55LHk6YW55KT0+YW55PXg9PngsYWRkU3R5bGVDaGFuZ2VzPzphbnkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyO1xyXG5cclxuXHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyPXRoaXMuZXhwRigoKSA9PiB7XHJcblxyXG4gICBpZiAodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgIHtcclxuICAgICAgbGV0IHByZXZpb3VzPVsuLi5iZWZvcmUoKV07XHJcbiAgICAgIHJldHVybiBhZGRTb3J0aW5nTWV0aG9kKHByZXZpb3VzLHRoaXMuZ2V0RWxlbWVudHMoKSk7XHJcbiAgICAgfWVsc2VcclxuICAgICB7XHJcbiAgICAgICByZXR1cm4gYmVmb3JlKCk7XHJcblxyXG4gICAgIH1cclxuXHJcbiAgfSx1bnNhZmVXaW5kb3cpO1xyXG4gIFxyXG50aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5zb3J0cy5wdXNoKG1ldGhvZE5hbWUpO1xyXG5jb25zdCBzb3J0QnV0dG9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgIFxyXG5cclxuICAgICAgICAgaWYodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgICAgICAgIHsgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICBpZiggKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjLnRyaW0oKT09XCJodHRwczovL25lYWwuZnVuL2luZmluaXRlLWNyYWZ0L1wiK21ldGhvZE5hbWUrXCIuc3ZnXCIpXHJcbiAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjPW5ld1N2ZztcclxuICAgICAgICAgICAgICAgICBpZihhZGRTdHlsZUNoYW5nZXMhPW51bGwpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC8vaW1nLnN0eWxlLmZpbHRlcj1cIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfSk7XHJcblxyXG4gICAgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuICAgICAgIGNvbnNvbGUubG9nKGltZyxpbWcudGV4dENvbnRlbnQpXHJcbiAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcclxuICAgICAgIHNvcnRCdXR0b25PYnNlcnZlci5vYnNlcnZlKGltZyxjb25maWcpO1xyXG5cclxuXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICAgICBvbkZpbHRlcmluZyhhZGRGaWx0ZXJNZXRob2RPblF1ZXJ5Oih4OmFueSx5OmFueSk9PmFueT0oeDphbnkseTphbnkpPT55KCkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI7XHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuICBsZXQgcXVlcnk9IHRoaXMuc291cmNlLnNlYXJjaFF1ZXJ5XHJcbiBcclxuIFxyXG4gXHJcbiAgcmV0dXJuIGFkZEZpbHRlck1ldGhvZE9uUXVlcnkocXVlcnksYmVmb3JlKTtcclxuICBcclxuICBcclxuICB9LHVuc2FmZVdpbmRvdykgO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgIH1cclxuXHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyB1dGlsc1xyXG57XHJcblxyXG5cclxuICAgIHB1YmxpYyB1c2VyQWRkZWRNZXRob2RzOmFueVtdPVtdO1xyXG4gICAgcHVibGljIEV4cG9ydFNhdmVCdXR0b25RdWVyeTpzdHJpbmcgPVwiLnNldHRpbmdbZm9yPWltcG9ydC1zYXZlXSArIC5zZXR0aW5nXCI7XHJcbiAgICBwdWJsaWMgc2F2ZUZpbGVOYW1lOnN0cmluZz1cImluZmluaXRlY3JhZnQuanNvblwiO1xyXG5cclxuXHJcbiAgICBzYXZlU2F2ZUZpbGVPblBDKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVDbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcclxuICAgICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSAoKSA9PiB7SFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrID0gaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY29uc3QgYm9keU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucywgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlICE9PSBcImNoaWxkTGlzdFwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvciA9IEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykuZmluZCgobm9kZSkgPT57XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgKDxhbnk+bm9kZSkuZG93bmxvYWQgPT09IHRoaXMuc2F2ZUZpbGVOYW1lfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGFuY2hvcikgcmV0dXJuIGZldGNoKCg8SFRNTEFuY2hvckVsZW1lbnQ+YW5jaG9yKS5ocmVmKS50aGVuKHJlc29sdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYm9keU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XHJcbiAgICAgICAgaGFuZGxlQ2xpY2suY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuRXhwb3J0U2F2ZUJ1dHRvblF1ZXJ5KSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHlPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHJlamVjdChcIlRpbWVkIG91dFwiKVxyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3RydWN0b3IoKVxyXG57XHJcblxyXG59XHJcbmFkZEZ1bmN0aW9uKG5hbWU6c3RyaW5nLGNhbGxiYWNrOmFueSlcclxue1xyXG4gICAgdGhpcy51c2VyQWRkZWRNZXRob2RzLnB1c2goe25hbWU6bmFtZSxoYW5kbGVyOmNhbGxiYWNrfSk7XHJcbn1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwibGV0IG1lc3NhZ2U6IHN0cmluZyA9ICdIZWxsbywgV29ybGQhJztcclxuY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbmltcG9ydCB7VUl9IGZyb20gIFwiLi9VSVwiXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSAgXCIuL2RhdGFcIlxyXG5pbXBvcnQge3V0aWxzfSBmcm9tICBcIi4vdXRpbHNcIlxyXG5leHBvcnQgY2xhc3MgTWFpblxyXG57XHJcbiBwdWJsaWMgJHVpOlVJO1xyXG4gcHVibGljICRkYXRhOmRhdGE7XHJcbiBwdWJsaWMgJHV0aWxzOnV0aWxzO1xyXG4gY29uc3RydWN0b3IoKVxyXG4ge1xyXG4gIHRoaXMuJHVpPW5ldyBVSSgpO1xyXG4gIHRoaXMuJGRhdGE9bmV3IGRhdGEoKTtcclxuICB0aGlzLiR1dGlscz1uZXcgdXRpbHMoKTtcclxuIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBvYmplY3RTb3VyY2U6TWFpbj1uZXcgTWFpbigpOyBcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9