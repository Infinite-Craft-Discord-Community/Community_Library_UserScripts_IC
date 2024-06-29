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
                this.handler(this.pickedColor);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxhQUFhLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNyRSxVQUFVLENBQUM7Z0JBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMxQixNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUtELDJCQUFXLEdBQVgsVUFBWSxJQUFXLEVBQUMsUUFBWTtRQUVoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsWUFBQztBQUFELENBQUM7QUE1Q1ksc0JBQUs7Ozs7Ozs7VUNBbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQSxJQUFJLE9BQU8sR0FBVyxlQUFlLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQiwwREFBd0I7QUFDeEIsZ0VBQTRCO0FBQzVCLG1FQUE4QjtBQUM5QjtJQUtDO1FBRUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLE9BQUUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksYUFBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDO0FBYlksb0JBQUk7QUFnQk4sb0JBQVksR0FBTSxJQUFJLElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29tbXVuaXR5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvQ29sb3JQaWNrZXIudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL0NvbnRleHRNZW51LnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9NZW51QnV0dG9uLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9Ub2dnbGVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL1VJLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL01haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ29tbXVuaXR5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvbW11bml0eVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJleHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJcclxue1xyXG4gcHVibGljICBjYWxsYmFjazphbnk7XHJcbiBwdWJsaWMgIHBpY2tlZENvbG9yOnN0cmluZztcclxuXHJcbm1ha2VDb2xvclBpY2tlcihsb2NhbENvbGJhY2s/OmFueSlcclxue1xyXG4gICBpZihsb2NhbENvbGJhY2shPW51bGwpXHJcbiAgICB0aGlzLmNhbGxiYWNrPWxvY2FsQ29sYmFjaztcclxuICAgICAgXHJcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgIGlzQW5kcm9pZCA9IHVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzTW9iaWxlID0gdWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAtMTtcclxuICAgIHZhciAgaXNXZWJPcyA9IHVhLmluZGV4T2YoXCJ3ZWJvc1wiKSA+IC0xO1xyXG4gICAgdmFyICBpc0lwaG9uZSA9IHVhLmluZGV4T2YoXCJpcGhvbmVcIikgPiAtMTtcclxuICAgIHZhciAgaXNJcGFkID0gdWEuaW5kZXhPZihcImlwYWRcIikgPiAtMTtcclxuICAgIHZhciAgaXNMaW51eCA9IHVhLmluZGV4T2YoXCJsaW51eFwiKSA+IC0xO1xyXG4gICAgbGV0IHBhcmVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuICBpZigoaXNBbmRyb2lkIHx8IGlzTW9iaWxlIHx8IGlzTGludXggfHwgaXNXZWJPcyB8fCBpc0lwaG9uZSB8fCBpc0lwYWQpKVxyXG4gICAge1xyXG4gICAgICBcclxuICAgICAgIGxldCBkaWFnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcblxyXG4gICAgICAgbGV0IGxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIGxyLmlubmVyVGV4dD1cIlIgKDAtMjU1KVwiO1xyXG4gICAgICAgbHIuc3R5bGUuY29sb3I9XCJyZWRcIjtcclxuICAgICAgIGxldCBsZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsZy5pbm5lclRleHQ9XCJHICgwLTI1NSlcIjtcclxuICAgICAgIGxnLnN0eWxlLmNvbG9yPVwiZ3JlZW5cIjtcclxuICAgICAgIGxldCBsYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsYi5pbm5lclRleHQ9XCJCICgwLTI1NSlcIjtcclxuICAgICAgIGxiLnN0eWxlLmNvbG9yPVwiYmx1ZVwiO1xyXG4gICAgICAgbGV0IFByZXZpZXdzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgIFByZXZpZXdzLmlubmVyVGV4dD1cIlByZXZpZXcgY29sb3JcIjtcclxuICAgICAgIGxldCBwcmV2aWV3RGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLndpZHRoPVwiMTAwcHhcIjtcclxuICAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuaGVpZ2h0PVwiMTAwcHhcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgbGV0IHJpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICByaS50eXBlPVwibnVtYmVyXCI7XHJcbiAgICAgICAgcmkubWluPVwiMFwiO1xyXG4gICAgICAgIHJpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgIHJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgbGV0IGdpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgIGdpLnR5cGU9XCJudW1iZXJcIjtcclxuICAgICAgIGdpLm1pbj1cIjBcIjtcclxuICAgICAgIGdpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcbiAgICAgICBsZXQgYmk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgYmkudHlwZT1cIm51bWJlclwiO1xyXG4gICAgICAgYmkubWluPVwiMFwiO1xyXG4gICAgICAgYmkubWF4PVwiMjU1XCI7XHJcbiAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuICAgICAgIGxldCByZ2IySGV4ID0gKHM6YW55KSA9PiBzLm1hdGNoKC9bMC05XSsvZykucmVkdWNlKChhOmFueSwgYjphbnkpID0+IGErKGJ8MjU2KS50b1N0cmluZygxNikuc2xpY2UoMSksICcjJyk7XHJcbiAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcblxyXG5cclxuICAgICAgICAgcmkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbnQ6YW55KXtcclxuXHJcblxyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJpOlwiLHJpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG5cclxuICAgICAgICAgIGlmKHJpLnZhbHVlPT1cIlwiKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICByaS52YWx1ZT1cIjBcIjtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KHJpLnZhbHVlKTwwKVxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIwXCI7XHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KHJpLnZhbHVlKT4yNTUpXHJcbiAgICAgICAgICAgICByaS52YWx1ZT1cIjI1NVwiO1xyXG5cclxuXHJcblxyXG4gICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcbiAgICAgICAgIHRoaXMucGlja2VkQ29sb3I9cmdiMkhleChcInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib25lQ29sb3I6XCIsdGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgIGdpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW46YW55KXtcclxuXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2k6XCIsZ2kudmFsdWUsXCJzb21ldGhpbmdcIik7XHJcblxyXG4gICAgICAgICBpZihnaS52YWx1ZT09XCJcIilcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoZ2kudmFsdWUpPDApXHJcbiAgICAgICAgICAgICBnaS52YWx1ZT1cIjBcIjtcclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChnaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZF9jb2xvclwiLHJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpKTtcclxuICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgYmkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZXZlbnQ6YW55KXtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJpOlwiLGJpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG4gICAgICAgICAgaWYoYmkudmFsdWU9PVwiXCIpXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgIGJpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChiaS52YWx1ZSk8MClcclxuICAgICAgICAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuXHJcbiAgICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGJpLnZhbHVlKT4yNTUpXHJcbiAgICAgICAgICAgICBiaS52YWx1ZT1cIjI1NVwiO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG4gICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG5cclxuICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgY2xvc2VCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDbG9zZVwiKSk7XHJcbiAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgZGlhZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgIGxldCBpbnB1dERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgbGV0IHByZXZpZXdzRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBsZXQgbWFpbkxvZ2ljPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChscik7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocmkpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxnKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChnaSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobGIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGJpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5zdHlsZS5mbG9hdD1cImxlZnRcIjtcclxuICAgICAgIGlucHV0RGl2LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gICAgICAgbWFpbkxvZ2ljLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuXHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChQcmV2aWV3cyk7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQocHJldmlld0Rpdik7XHJcbiAgICAgICBwcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgcHJldmlld3NEaXYuc3R5bGUuZmxvYXQ9XCJyaWdodFwiO1xyXG4gICAgICAgbWFpbkxvZ2ljLmFwcGVuZENoaWxkKHByZXZpZXdzRGl2KTtcclxuICAgICAgIGRpYWcuYXBwZW5kQ2hpbGQobWFpbkxvZ2ljKTtcclxuXHJcbiAgICAgICBkaWFnLmFwcGVuZENoaWxkKCBjbG9zZUJ1dHRvbik7XHJcbiAgICAgICBkaWFnLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIjtcclxuICAgICAgIGRpYWcuc3R5bGUudG9wPVwiMzMlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmxlZnQ9XCIyNSVcIjtcclxuICAgICAgIGRpYWcuc3R5bGUuYmFja2dyb3VuZD1cInZhcigtLWJhY2tncm91bmQtY29sb3IpXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmNvbG9yPShcInZhcigtLXRleHQtY29sb3IpXCIpLnRyaW0oKTtcclxuICAgICAgIGlmKHBhcmVudClcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGlhZyk7XHJcbiAgICAgICAgZGlhZy5zaG93TW9kYWwoKTtcclxufWVsc2Vcclxue1xyXG5cclxuXHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcclxuXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSlcclxue1xyXG4gICB0aGlzLnBpY2tlZENvbG9yPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgdGhpcy5oYW5kbGVyKHRoaXMucGlja2VkQ29sb3IpO1xyXG5cclxuICAgfS5iaW5kKHRoaXMpKTtcclxuICAgaWYocGFyZW50KVxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAvLyBoaWRkZW49MDtcclxuICAgaW5wdXQuY2xpY2soKTtcclxuIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJleHBvcnQgZW51bSBBY3Rpb25UeXBlIHtcclxuICAgIFwiYnV0dG9uXCIsIFwiY2hlY2tib3hcIlxyXG4gfVxyXG4gXHJcbiBleHBvcnQgaW50ZXJmYWNlIEFjdGlvbkZvcm0ge1xyXG4gICAgdGV4dE9uOiBzdHJpbmc7XHJcbiAgICB0ZXh0T2ZmPzogc3RyaW5nO1xyXG4gICAgZW1vamlPbj86c3RyaW5nO1xyXG4gICAgZW1vamlPZmY/OnN0cmluZztcclxuICAgIGhhbmRsZXI6IGFueTtcclxuICAgIGluaXRIYW5kbGVyPzogKHg6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiBcclxuIH1cclxuIFxyXG4gZXhwb3J0IGludGVyZmFjZSBDb250ZXh0TWVudVVpT3B0aW9ucyB7XHJcbiAgICBjb2xvckI6IFwiIzU0QzU3MVwiLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgd2lkdGhCdXR0b246IDUwXHJcbiAgICAsIGhlaWdodEJ1dHRvbjogMjAsXHJcbiAgICBib3JkZXJXaWR0aEJ1dHRvbjogMSxcclxuICAgIHJhZGl1czogNCxcclxuICAgIG1pbldpZHRoOiAxMDAsXHJcbiAgICB4T2Zmc2V0OiAxMjAsXHJcbiAgICB4T2Zmc2V0QnV0dG9uOiAyMCxcclxuICAgIHBhZGRpbmdCdXR0b246IDEsXHJcbiAgICBkdXJhdGlvbjogMVxyXG4gXHJcbiBcclxuIFxyXG4gfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gZXhwb3J0IGNsYXNzIENvbnRleHRNZW51IHtcclxuICAgIHB1YmxpYyB0cmlnZ2VyVHlwZVZpc2libGU6IHN0cmluZyA9IFwibW91c2VvdmVyXCI7XHJcbiAgICBwdWJsaWMgdHJpZ2dlclR5cGVJbnZpc2libGU6IHN0cmluZyA9IFwibW91c2VsZWF2ZVwiO1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VySW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlck91dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb246IGFueTtcclxuICAgIHB1YmxpYyBjb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbjogYW55O1xyXG4gXHJcbiAgICBwdWJsaWMgY29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCIuY29udGV4dE1lbnVcIjtcclxuICAgIHB1YmxpYyBhY3Rpb25zOiBBY3Rpb25Gb3JtW10gPSBbXTtcclxuIFxyXG4gXHJcbiAgICBzZXRDb21wbGV4VHJpZ2dlckluKGNvbXBsZXg6IGFueSkge1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlckluQ29uZGl0aW9uID0gY29tcGxleDtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRDb21wbGV4VHJpZ2dlck91dChjb21wbGV4OiBhbnkpIHtcclxuICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24gPSBjb21wbGV4O1xyXG4gICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dCA9IHRydWU7XHJcbiAgICB9XHJcbiBcclxuICAgIGFkZEFjdGlvbihhY3Rpb246IEFjdGlvbkZvcm0pIHtcclxuICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25zKGFjdGlvbnM6IEFjdGlvbkZvcm1bXSkge1xyXG4gICAgICAgdGhpcy5hY3Rpb25zLnB1c2goLi4uYWN0aW9ucyk7XHJcbiAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgIGJ1aWxkQ29udGV4dE1lbnUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgIH0pXHJcbiB7ICAgaWYodGhpcy5jb21wbGV4VHJpZ2dlckluPT1mYWxzZSlcclxuICAgIHsgXHJcbiAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZVZpc2libGUsKCk9PlxyXG4gICAgICAgdGhpcy5idWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbSxlLG9wdGlvbnMpXHJcbiBcclxuIFxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgfWVsc2VcclxuICAgIHtcclxuIFxyXG4gICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbihpdGVtKTtcclxuIFxyXG4gICAgfVxyXG4gICAgXHJcbiB9XHJcbiBcclxuICAgIGJ1aWxkQ29udGV4dE1lbnVXaGVuVmlzaWJsZShpdGVtOiBhbnksIGU6IGFueSwgb3B0aW9uczogQ29udGV4dE1lbnVVaU9wdGlvbnMgPSB7XHJcbiAgICAgICBjb2xvckI6IFwiIzU0QzU3MVwiLCBoZWlnaHQ6IDQwLCBib3JkZXJXaWR0aDogMiwgd2lkdGhCdXR0b246IDUwXHJcbiAgICAgICAsIGhlaWdodEJ1dHRvbjogMjAsIGJvcmRlcldpZHRoQnV0dG9uOiAxLCByYWRpdXM6IDQsXHJcbiAgICAgICBtaW5XaWR0aDogMTAwLCB4T2Zmc2V0OiAxMjAsIHhPZmZzZXRCdXR0b246IDIwLCBwYWRkaW5nQnV0dG9uOiAxLCBkdXJhdGlvbjogMVxyXG4gICAgfSwgekluZGV4ID0gMTAwMCkge1xyXG4gXHJcbiAgICAgICAgIFxyXG4gXHJcbiAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgaWYocGFyZW50KXtcclxuICAgICAgIGxldCBjb25NZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250ZXh0TWVudVF1ZXJ5KTtcclxuIFxyXG4gICAgICAgaWYgKGNvbk1lbnUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBjb25NZW51LmNsYXNzTGlzdC5hZGQodGhpcy5jb250ZXh0TWVudVF1ZXJ5LnNsaWNlKDEpKTtcclxuICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb25NZW51KTtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uTWVudS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICB9XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmhlaWdodD1cImZpdC1jb250ZW50XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnpJbmRleCA9IHpJbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgLy8gKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5taW5XaWR0aCA9IG9wdGlvbnMubWluV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnRvcCA9IGUuY2xpZW50WS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIG9wdGlvbnMueE9mZnNldCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyID0gb3B0aW9ucy5ib3JkZXJXaWR0aC50b1N0cmluZygpICsgXCJweCBzb2xpZCBcIiArIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGV4dC1jb2xvclwiKS50cmltKCk7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMucmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuIFxyXG4gXHJcbiAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XHJcbiBcclxuIFxyXG4gICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgIGxldCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuIFxyXG4gXHJcbiAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gQWN0aW9uVHlwZS5jaGVja2JveCkge1xyXG4gICAgICAgICAgICAgbGV0IGFjdGlvbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guaWQgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgdGV4dFNwYW4uaHRtbEZvciA9IFwiYWN0aW9uSWRcIiArIGk7XHJcbiAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGV4dC1jb2xvcilcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHRCdXR0b24udG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ0J1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luVG9wID0gKChvcHRpb25zLmhlaWdodCAtIG9wdGlvbnMuaGVpZ2h0QnV0dG9uKSAvIDIpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5SaWdodCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSAob3B0aW9ucy5oZWlnaHRCdXR0b24gLSAyICogb3B0aW9ucy5wYWRkaW5nQnV0dG9uKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IChvcHRpb25zLndpZHRoQnV0dG9uIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gb3B0aW9ucy5kdXJhdGlvbi50b1N0cmluZygpICsgXCJzXCI7XHJcbiAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgIGxldCBpc09uID0gYWN0aW9uLmluaXRIYW5kbGVyPyBhY3Rpb24uaW5pdEhhbmRsZXIoaXRlbSk6ZmFsc2U7XHJcbiAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5jaGVja2VkID0gaXNPbjtcclxuIFxyXG4gICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9YWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuIFxyXG4gICAgICAgICAgICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoaXRlbSwgZSwgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBvcHRpb25zLnhPZmZzZXRCdXR0b24udG9TdHJpbmcoKSArIFwicHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBcIjBweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPZmY/P2FjdGlvbi5lbW9qaU9uPz9cIlwiKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuIFxyXG4gXHJcbiAgICAgICAgICAgICB9KTtcclxuIFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgIC8vICBjaGVja1pvbWJpZS5zdHlsZSxkaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25DaGVja2JveCk7XHJcbiAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gXHJcbiAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLndpZHRoPVwiMTAwJVwiO1xyXG4gICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQ9YWN0aW9uLmVtb2ppT24/P1wiXCIrYWN0aW9uLnRleHRPbjtcclxuICAgICAgICAgICAgaWYoYWN0aW9uLmluaXRIYW5kbGVyKVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmluaXRIYW5kbGVyKGNvbk1lbnUpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiO1xyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmNvbG9yPSBcInZhcigtLXRleHQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvcj1vcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi50ZXh0Q29udGVudD0oYWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIikrYWN0aW9uLnRleHRPZmY/P2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIlxyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQ9KGFjdGlvbi5lbW9qaU9uPz9cIlwiKSthY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT5hY3Rpb24uaGFuZGxlcigpKTtcclxuIFxyXG4gICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbik7XHJcbiBcclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgIGlmKHRoaXMuY29tcGxleFRyaWdnZXJPdXQ9PWZhbHNlKXtcclxuICAgICAgICAgIGNvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRyaWdnZXJUeXBlSW52aXNpYmxlLCAoZSkgPT4ge1xyXG4gXHJcbiAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGV4dE1lbnVRdWVyeSkuZm9yRWFjaCgoZWxlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+ZWxlbSkuc3R5bGUub3BhY2l0eSA9IFwiMFwiKTtcclxuIFxyXG4gICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgIFxyXG4gXHJcbiBcclxuIFxyXG4gICAgICAgICAgfSk7fVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbihjb25NZW51KTtcclxuICAgICAgICAgIH1cclxuIFxyXG4gXHJcbiBcclxuICAgICBcclxuIFxyXG4gXHJcbiAgICB9fVxyXG4gfSIsIlxyXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVPcHRpb25cclxue1xyXG4gXHJcbiAgICBvcHRpb25UZXh0OnN0cmluZztcclxuICAgIG9wdGlvbkVtb2ppPzpzdHJpbmc7XHJcbiAgICBoYW5kbGVyOmFueTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b25cclxue1xyXG4gcHVibGljIHBhcmVudFF1ZXJ5OnN0cmluZz1cIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiBtZW51VGV4dDpzdHJpbmc9XCJDbGljayBPbiBNZVwiO1xyXG4gbWVudUVtb2ppOnN0cmluZz1cIlwiO1xyXG4gb3B0aW9uczpNZW51T3B0aW9uW109W107XHJcbiBoaWRkZW5PYmplY3Q6Ym9vbGVhbj10cnVlO1xyXG4gcHVibGljIGJ1dHRvbkNsYXNzOnN0cmluZz1cInNldHRpbmdcIjtcclxuIHB1YmxpYyBpbml0QWN0aW9uOigpPT5udW1iZXI9KCk9PntyZXR1cm4gMDt9O1xyXG4gXHJcbnNldE9wdGlvbnMob3B0aW9uczpNZW51T3B0aW9uW10pXHJcbntcclxuIHRoaXMub3B0aW9ucz1vcHRpb25zO1xyXG59XHJcbmFkZE9wdGlvbihvcHRpb246TWVudU9wdGlvbilcclxue1xyXG4gdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcclxufVxyXG5cclxuXHJcbiBjb25zdHJ1Y3RvcihtZW51VGV4dDphbnksbWVudUVtb2ppPzphbnksaW5pdEFjdGlvbj86YW55LG9wdGlvbnM6TWVudU9wdGlvbltdPVtdKVxyXG4geyBcclxuICAgIHRoaXMubWVudVRleHQ9bWVudVRleHQ7XHJcbiAgICB0aGlzLmluaXRBY3Rpb249aW5pdEFjdGlvbjtcclxuICAgIHRoaXMubWVudUVtb2ppPW1lbnVFbW9qaTtcclxuICAgIHRoaXMub3B0aW9ucy5wdXNoKC4uLm9wdGlvbnMpO1xyXG5cclxuIH1cclxuXHJcblxyXG5cclxuYnVpbGRCdXR0b24ob3RoZXJQYXJlbnQ/OnN0cmluZylcclxue1xyXG4gbGV0IHBhcmVudERpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG90aGVyUGFyZW50Pz90aGlzLnBhcmVudFF1ZXJ5KTtcclxuIGxldCBidXR0b25EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIik7XHJcbiBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5tZW51VGV4dCtcIiBcIisodGhpcy5tZW51RW1vamk9PW51bGw/XCJcIjp0aGlzLm1lbnVFbW9qaSkpKTtcclxuIGJ1dHRvbkRpdi5zdHlsZS5oZWlnaHQ9XCJmaXQtY29udGVudFwiO1xyXG5cclxuXHJcbiBsZXQgc2VsZWN0aW9uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBsZXQgc2VsZWN0ZWRQPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gbGV0IG9wdGlvbnNEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuIG9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uLW9wdGlvbnNcIik7XHJcbiBvcHRpb25zRGl2LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiO1xyXG4gb3B0aW9uc0Rpdi5zdHlsZS5oZWlnaHQ9XCIxMDBweFwiO1xyXG5cclxuXHJcbiBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCAodGhpcy5idXR0b25DbGFzcyk7XHJcblxyXG5cclxuIGxldCBjc3MgPSBgXHJcbiAubWVudS1idXR0b24tb3B0aW9uOmhvdmVyXHJcbiAgICAge1xyXG4gICAgICAgYmFja2dyb3VuZDpncmF5O1xyXG5cclxuICAgICB9XHJcblxyXG4ubWVudS1idXR0b25cclxue1xyXG5cclxuc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG5cclxufVxyXG4ubWVudS1idXR0b24tb3B0aW9ucyB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL31cclxuIC5tZW51LWJ1dHRvbi1vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhciB7IC8qIFdlYktpdCAqL1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7fVxyXG5gXHJcblxyXG5cclxubGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzLnRyaW0oKSkpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG5sZXQgaW5kZXhPcHRpb249MDtcclxuaWYodGhpcy5pbml0QWN0aW9uKVxyXG4gIGluZGV4T3B0aW9uPXRoaXMuaW5pdEFjdGlvbigpO1xyXG5cclxuY29uc29sZS5sb2coXCJpbmRleE9wdGlvbjpcIixpbmRleE9wdGlvbixcIm9wdGlvbnM6XCIsdGhpcy5vcHRpb25zKTtcclxuc2VsZWN0ZWRQLnRleHRDb250ZW50PXRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uVGV4dCtcIiBcIisodGhpcy5vcHRpb25zW2luZGV4T3B0aW9uXS5vcHRpb25FbW9qaT09bnVsbD9cIlwiOnRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uRW1vamkpO1xyXG5cclxuIHRoaXMub3B0aW9ucy5mb3JFYWNoKCAob3B0aW9uKT0+e1xyXG5cclxuXHJcbiAgbGV0IG9wdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG9wdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tb3B0aW9uXCIpO1xyXG4gIG9wdGlvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvcHRpb24ub3B0aW9uVGV4dCtcIiBcIisob3B0aW9uLm9wdGlvbkVtb2ppPT1udWxsP1wiXCI6b3B0aW9uLm9wdGlvbkVtb2ppKSkpO1xyXG4gIG9wdGlvbkRpdi5zdHlsZS53aGl0ZVNwYWNlPVwibm93cmFwXCI7XHJcbiAgb3B0aW9uRGl2LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7XHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsKCk9PntvcHRpb25EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiZ3JheVwifSk7XHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsKCk9PntvcHRpb25EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIn0pO1xyXG5cclxuICBvcHRpb25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICBvcHRpb24uaGFuZGxlcigpO1xyXG4gIHNlbGVjdGVkUC50ZXh0Q29udGVudD1vcHRpb24ub3B0aW9uVGV4dCtcIiBcIisob3B0aW9uLm9wdGlvbkVtb2ppPT1udWxsP1wiXCI6b3B0aW9uLm9wdGlvbkVtb2ppKTtcclxuICAgIDt9KTtcclxuXHJcbiAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChvcHRpb25EaXYpO1xyXG5cclxuXHJcbiB9KTtcclxuXHJcbiAgc2VsZWN0ZWRQLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKG9wdGlvbnNEaXYpO1xyXG4gICAgICB0aGlzLmhpZGRlbk9iamVjdD10cnVlO1xyXG5cclxuXHJcblxyXG4gIH0uYmluZCh0aGlzKSxmYWxzZSk7XHJcblxyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWxlY3RlZFApO1xyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIikpO1xyXG5cclxuXHJcbiAgYnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICBpZih0aGlzLmhpZGRlbk9iamVjdD09dHJ1ZSlcclxuICAgIHsgICAgY29uc29sZS5sb2coXCJnb3QgaGVyZVwiKTtcclxuXHJcbiAgICAgICAgaWYoIWJ1dHRvbkRpdi5jb250YWlucyhzZWxlY3Rpb25EaXYpKVxyXG4gICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHNlbGVjdGlvbkRpdik7XHJcblxyXG4gICAgICAgdGhpcy5oaWRkZW5PYmplY3QgPSBmYWxzZTtcclxuXHJcbiAgICB9ZWxzZVxyXG4gICAgICB7ICAgaWYoc2VsZWN0aW9uRGl2LmNvbnRhaW5zKG9wdGlvbnNEaXYpKVxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvbkRpdi5yZW1vdmVDaGlsZChvcHRpb25zRGl2KTtcclxuXHJcbiAgICAgICAgIGlmKGJ1dHRvbkRpdi5jb250YWlucyhzZWxlY3Rpb25EaXYpKVxyXG4gICAgICAgICAgICBidXR0b25EaXYucmVtb3ZlQ2hpbGQoc2VsZWN0aW9uRGl2KTtcclxuICAgICAgICB0aGlzLmhpZGRlbk9iamVjdCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIH0uYmluZCh0aGlzKSxmYWxzZSk7XHJcblxyXG5cclxuIHBhcmVudERpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG5cclxucmV0dXJuIGJ1dHRvbkRpdjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFRvZ2dsZUJ1dHRvblxyXG57XHJcblxyXG5wdWJsaWMgaGFuZGxlcjooY2hlY2tlZDpib29sZWFuLGFyZ3M6YW55KT0+dm9pZDtcclxucHVibGljIGNvbG9yOnN0cmluZz1cIiM3MGI1NjVcIjtcclxucHVibGljIHNpemU6bnVtYmVyPTIyO1xyXG5wdWJsaWMgaW5uZXJSYWRpdXM6c3RyaW5nPVwiNTAlXCI7XHJcbnB1YmxpYyBvdXRlclJhZGl1czpzdHJpbmc9XCIxNXB4XCI7XHJcbmJ1aWxkQnV0dG9uKGhhbmRsZXI/OmFueSxjb2xvcj86YW55LHBhcmVudD86YW55LHNpemU/OmFueSxpbm5lclJhZGl1cz86YW55LG91dGVyUmFkaXVzPzphbnkpXHJcbntcclxuXHJcbiBpZihoYW5kbGVyIT1udWxsKVxyXG4gIHRoaXMuaGFuZGxlcj1oYW5kbGVyO1xyXG5cclxuICAgIGlmKGNvbG9yIT1udWxsKVxyXG57XHJcbiAgICB0aGlzLmNvbG9yPWNvbG9yO1xyXG59XHJcbmlmKHNpemUhPW51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaXplPXNpemU7XHJcbiAgICB9XHJcbiBpZihpbm5lclJhZGl1cyE9bnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJSYWRpdXM9aW5uZXJSYWRpdXM7XHJcbiAgICAgICAgfVxyXG4gaWYob3V0ZXJSYWRpdXMhPW51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyUmFkaXVzPW91dGVyUmFkaXVzO1xyXG4gIH1cclxuIFxyXG4gbGV0IGNzcz1cclxuICBgXHJcbi5zZXR0aW5nLWJsb2NrIHtcclxuXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogN3B4O1xyXG5cdGZvbnQtc2l6ZTogMTYuNHB4O1xyXG59XHJcblxyXG4uc2V0dGluZy1ibG9jayBoMSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcblx0bGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNldHRpbmctYmxvY2sgbGFiZWxbZm9yKj1cImlucHV0XCJdIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tcmlnaHQ6IDdweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6ICR7dGhpcy5zaXplKzI4fXB4O1xyXG5cdGhlaWdodDogJHt0aGlzLnNpemUrOH1weDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2hlY2tib3gtc2xpZGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xyXG5cdHRyYW5zaXRpb246IDAuNHM7XHJcblx0Ym9yZGVyLXJhZGl1czogJHt0aGlzLm91dGVyUmFkaXVzfXB4O1xyXG5cdHotaW5kZXg6IDIwMDA7XHJcbn1cclxuXHJcbi5jaGVja2JveC1zbGlkZXI6YmVmb3JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6ICR7c2l6ZX1weDtcclxuXHR3aWR0aDogJHtzaXplfXB4O1xyXG5cdGxlZnQ6IDRweDtcclxuXHRib3R0b206IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcblx0dHJhbnNpdGlvbjogMC40cztcclxuXHRib3JkZXItcmFkaXVzOiAke3RoaXMuaW5uZXJSYWRpdXN9O1xyXG5cdHotaW5kZXg6IDE5OTk7XHJcbn1cclxuXHJcbi5kYXJrLW1vZGUgLmNoZWNrYm94LXNsaWRlcjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LXNsaWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtc2xpZGVyOmJlZm9yZSB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE5cHgpO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciB7XHJcblx0dHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuYDtcclxubGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzLnRyaW0oKSkpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG5cclxuXHQgICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0YmxvY2suY2xhc3NMaXN0LmFkZChcInNldHRpbmctYmxvY2tcIik7XHJcblx0XHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblx0XHRcdGJsb2NrLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cdFxyXG5cdFx0XHRcdGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1jb250YWluZXJcIik7XHJcblx0XHRcdFx0Y29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblx0XHRcdFx0Y2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHRcdFx0XHRjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoaXMuaGFuZGxlcihjaGVja2JveC5jaGVja2VkKTtcclxuXHRcdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0XHRcdGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0XHRcdHNsaWRlci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtc2xpZGVyXCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XHJcblx0XHRcdFx0bmFtZS5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgIGlmKHBhcmVudClcclxuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQge0NvbnRleHRNZW51LEFjdGlvblR5cGUsQWN0aW9uRm9ybX0gZnJvbSBcIi4vQ29udGV4dE1lbnVcIlxyXG5pbXBvcnQge01lbnVCdXR0b24sTWVudU9wdGlvbn0gZnJvbSBcIi4vTWVudUJ1dHRvblwiXHJcbmltcG9ydCB7Q29sb3JQaWNrZXJ9IGZyb20gXCIuL0NvbG9yUGlja2VyXCJcclxuaW1wb3J0IHtUb2dnbGVCdXR0b259IGZyb20gXCIuL1RvZ2dsZUJ1dHRvblwiO1xyXG5leHBvcnQgY2xhc3MgVUkge1xyXG5cclxuICAgcHVibGljIGNvbnRleHRNZW51czpDb250ZXh0TWVudVtdPVtuZXcgQ29udGV4dE1lbnUoKV07XHJcbiAgIHB1YmxpYyB0b2dnbGVCdXR0b25zOlRvZ2dsZUJ1dHRvbltdPVtdO1xyXG4gICBwdWJsaWMgbWVudUJ1dHRvbnM6TWVudUJ1dHRvbltdPVtdO1xyXG4gICBwdWJsaWMgY29sb3JQaWNrZXI6Q29sb3JQaWNrZXI9bmV3IENvbG9yUGlja2VyKCk7XHJcbiAgIHB1YmxpYyBkZWZhdWx0U2V0dGluZ3NCdXR0b25RdWVyeTogc3RyaW5nO1xyXG4gICBwdWJsaWMgZGVmYXVsdENvbnRleHRNZW51UXVlcnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgIHB1YmxpYyBkZWZhdWx0TW9kYWxRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGluc3RhbmNlc0NsYXNzOiBzdHJpbmcgPSBcImluc3RhbmNlc1wiO1xyXG4gICBwdWJsaWMgaXRlbXNDbGFzczogc3RyaW5nID0gXCJpdGVtcy1pbm5lclwiO1xyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5kZWZhdWx0TW9kYWxRdWVyeSA9IFwiLm1vZGFsOm50aC1jaGlsZCgzKVwiO1xyXG4gICAgICB0aGlzLmRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5ID0gXCIuc2V0dGluZ3MtY29udGVudFwiO1xyXG4gICB9XHJcblxyXG4gIG1ha2VUb2dnbGVCdXR0b24oaGFuZGxlcj86YW55LGNvbG9yPzphbnkscGFyZW50Pzphbnksc2l6ZT86YW55LGlubmVyUmFkaXVzPzphbnksb3V0ZXJSYWRpdXM/OmFueSlcclxuICB7XHJcbiAgIGxldCB0b2dnbGVCdXR0b249bmV3IFRvZ2dsZUJ1dHRvbigpO1xyXG4gICB0aGlzLnRvZ2dsZUJ1dHRvbnMucHVzaCh0b2dnbGVCdXR0b24pO1xyXG4gICByZXR1cm4gdG9nZ2xlQnV0dG9uLmJ1aWxkQnV0dG9uKGhhbmRsZXIsY29sb3IscGFyZW50LHNpemUsaW5uZXJSYWRpdXMsb3V0ZXJSYWRpdXMpXHJcbiAgfVxyXG4gIGluamVjdENTUyhjc3M6c3RyaW5nKVxyXG57XHJcbiAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcy50cmltKCkpKTtcclxuICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiAgYWRkQW5kQnVpbGRNZW51QnV0dG9uKG1lbnVUZXh0OmFueSxtZW51RW1vamk/OmFueSxpbml0QWN0aW9uPzphbnksb3B0aW9uczpNZW51T3B0aW9uW109W10pXHJcbiAgeyAgICAgbGV0IG1CdXR0b249bmV3IE1lbnVCdXR0b24obWVudVRleHQsbWVudUVtb2ppLGluaXRBY3Rpb24sb3B0aW9ucylcclxuICAgIHRoaXMubWVudUJ1dHRvbnMucHVzaChtQnV0dG9uKTtcclxuICAgIHJldHVybiAgbUJ1dHRvbi5idWlsZEJ1dHRvbigpO1xyXG5cclxuICB9XHJcblxyXG4gICBvbk9ic2VydmluZ0luc3RhbmNlKGFwcGx5T25PbmVFbGVtZW50OiBhbnkpIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICgoPEhUTUxFbGVtZW50Pm5vZGUpLmlkICE9IFwiaW5zdGFuY2UtMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFwcGx5T25PbmVFbGVtZW50KG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGluc3RhbmNlT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuaW5zdGFuY2VzQ2xhc3MpWzBdLCB7XHJcbiAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgIH1cclxuICAgb25PYnNlcnZpbmdJdGVtcyhhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcblxyXG5cclxuXHJcblxyXG59O1xyXG4iLCJcclxuaW1wb3J0ICogYXMgR00gZnJvbSBcImdyZWFzZW1vbmtleVwiO1xyXG4vL3NvdXJjZSBtdXN0IGJlIGluaXRpYXRlZCB3aXRoIHVuc2FmZVdpbmRvd1xyXG5leHBvcnQgY2xhc3MgZGF0YVxyXG57XHJcbiAgIHB1YmxpYyAgc291cmNlOmFueT1udWxsO1xyXG4gICBwdWJsaWMgIGV4cEY6YW55PW51bGw7XHJcblxyXG5cclxuXHJcbiAgLy91Vz11bnNhZmVXaW5kb3cgbXVzdCBiZSBkb25lIGZyb20gdXNlcnNjcmlwdFxyXG4gIC8vZXhwRj1leHBvcnRGdW5jdGlvblxyXG5cclxucHVibGljIGFkZERhdGFTb3VyY2UoZXhwRjphbnksdVc6YW55PXNlbGYpXHJcbnsgXHJcbiAgIHRoaXMuc291cmNlPXVXLiRudXh0LiRyb290LiRjaGlsZHJlblsyXS4kY2hpbGRyZW5bMF0uJGNoaWxkcmVuWzBdXHJcbiAgIHRoaXMuZXhwRj1leHBGO1xyXG5cclxufVxyXG5cclxuXHJcbiAgcHVibGljIGdldEVsZW1lbnRzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5lbGVtZW50cztcclxuICB9XHJcbiAgICBnZXRJbnN0YW5jZXMoKVxyXG4gIHtcclxuICAgcmV0dXJuIHRoaXMuc291cmNlLl9kYXRhLmluc3RhbmNlcztcclxuICB9XHJcbiAgICAgb25Tb3J0aW5nKG1ldGhvZE5hbWU6c3RyaW5nLG5ld1N2ZzpzdHJpbmcsYWRkU29ydGluZ01ldGhvZDooeDphbnkseTphbnkpPT5hbnk9eD0+eCxhZGRTdHlsZUNoYW5nZXM/OmFueSlcclxuICB7XHJcbiAgbGV0IGJlZm9yZT10aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zb3J0ZWRFbGVtZW50cy5nZXR0ZXI7XHJcblxyXG5cclxuICB0aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zb3J0ZWRFbGVtZW50cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuXHJcbiAgIGlmICh0aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5fZGF0YS5zb3J0QnkgPT09IG1ldGhvZE5hbWUpXHJcbiAgICAge1xyXG4gICAgICBsZXQgcHJldmlvdXM9Wy4uLmJlZm9yZSgpXTtcclxuICAgICAgcmV0dXJuIGFkZFNvcnRpbmdNZXRob2QocHJldmlvdXMsdGhpcy5nZXRFbGVtZW50cygpKTtcclxuICAgICB9ZWxzZVxyXG4gICAgIHtcclxuICAgICAgIHJldHVybiBiZWZvcmUoKTtcclxuXHJcbiAgICAgfVxyXG5cclxuICB9LHVuc2FmZVdpbmRvdyk7XHJcbiAgXHJcbnRoaXMuc291cmNlLiRudXh0LiRyb290LiRjaGlsZHJlblsyXS4kY2hpbGRyZW5bMF0uJGNoaWxkcmVuWzBdLnNvcnRzLnB1c2gobWV0aG9kTmFtZSk7XHJcbmNvbnN0IHNvcnRCdXR0b25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgXHJcblxyXG4gICAgICAgICBpZih0aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5fZGF0YS5zb3J0QnkgPT09IG1ldGhvZE5hbWUpXHJcbiAgICAgICAgICAgeyAgICBsZXQgaW1nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1zb3J0ID4gaW1nXCIpO1xyXG5cclxuICAgICAgICAgICAgIGlmKCAoPEhUTUxJbWFnZUVsZW1lbnQ+aW1nKS5zcmMudHJpbSgpPT1cImh0dHBzOi8vbmVhbC5mdW4vaW5maW5pdGUtY3JhZnQvXCIrbWV0aG9kTmFtZStcIi5zdmdcIilcclxuICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAoPEhUTUxJbWFnZUVsZW1lbnQ+aW1nKS5zcmM9bmV3U3ZnO1xyXG4gICAgICAgICAgICAgICAgIGlmKGFkZFN0eWxlQ2hhbmdlcyE9bnVsbClcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICBhZGRTdHlsZUNoYW5nZXMoaW1nLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgLy9pbWcuc3R5bGUuZmlsdGVyPVwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBhZGRTdHlsZUNoYW5nZXMoaW1nLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICB9KTtcclxuXHJcbiAgICAgICBsZXQgaW1nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1zb3J0ID4gaW1nXCIpO1xyXG4gICAgICAgY29uc29sZS5sb2coaW1nLGltZy50ZXh0Q29udGVudClcclxuICAgICAgIHZhciBjb25maWcgPSB7IGNoYXJhY3RlckRhdGE6IGZhbHNlLCBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IGZhbHNlLCBzdWJ0cmVlOiBmYWxzZSB9O1xyXG4gICAgICAgc29ydEJ1dHRvbk9ic2VydmVyLm9ic2VydmUoaW1nLGNvbmZpZyk7XHJcblxyXG5cclxuICBcclxuICB9XHJcbiAgXHJcbiAgICAgIG9uRmlsdGVyaW5nKGFkZEZpbHRlck1ldGhvZE9uUXVlcnk6KHg6YW55LHk6YW55KT0+YW55PSh4OmFueSx5OmFueSk9PnkoKSlcclxuICB7XHJcbiAgbGV0IGJlZm9yZT10aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zZWFyY2hSZXN1bHRzLmdldHRlcjtcclxuICB0aGlzLnNvdXJjZS5fY29tcHV0ZWRXYXRjaGVycy5zZWFyY2hSZXN1bHRzLmdldHRlcj10aGlzLmV4cEYoKCkgPT4ge1xyXG4gIGxldCBxdWVyeT0gdGhpcy5zb3VyY2Uuc2VhcmNoUXVlcnlcclxuIFxyXG4gXHJcbiBcclxuICByZXR1cm4gYWRkRmlsdGVyTWV0aG9kT25RdWVyeShxdWVyeSxiZWZvcmUpO1xyXG4gIFxyXG4gIFxyXG4gIH0sdW5zYWZlV2luZG93KSA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgfVxyXG5cclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIHV0aWxzXHJcbntcclxuXHJcblxyXG4gICAgcHVibGljIHVzZXJBZGRlZE1ldGhvZHM6YW55W109W107XHJcbiAgICBwdWJsaWMgRXhwb3J0U2F2ZUJ1dHRvblF1ZXJ5OnN0cmluZyA9XCIuc2V0dGluZ1tmb3I9aW1wb3J0LXNhdmVdICsgLnNldHRpbmdcIjtcclxuICAgIHB1YmxpYyBzYXZlRmlsZU5hbWU6c3RyaW5nPVwiaW5maW5pdGVjcmFmdC5qc29uXCI7XHJcblxyXG5cclxuICAgIHNhdmVTYXZlRmlsZU9uUEMoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrO1xyXG4gICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayA9ICgpID0+IHtIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSBoYW5kbGVDbGlja31cclxuICAgICAgICBjb25zdCBib2R5T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT09IFwiY2hpbGRMaXN0XCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKS5maW5kKChub2RlKSA9PntcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAoPGFueT5ub2RlKS5kb3dubG9hZCA9PT0gdGhpcy5zYXZlRmlsZU5hbWV9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yKSByZXR1cm4gZmV0Y2goKDxIVE1MQW5jaG9yRWxlbWVudD5hbmNob3IpLmhyZWYpLnRoZW4ocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcclxuICAgICAgICBoYW5kbGVDbGljay5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5FeHBvcnRTYXZlQnV0dG9uUXVlcnkpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm9keU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVqZWN0KFwiVGltZWQgb3V0XCIpXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdHJ1Y3RvcigpXHJcbntcclxuXHJcbn1cclxuYWRkRnVuY3Rpb24obmFtZTpzdHJpbmcsY2FsbGJhY2s6YW55KVxyXG57XHJcbiAgICB0aGlzLnVzZXJBZGRlZE1ldGhvZHMucHVzaCh7bmFtZTpuYW1lLGhhbmRsZXI6Y2FsbGJhY2t9KTtcclxufVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJsZXQgbWVzc2FnZTogc3RyaW5nID0gJ0hlbGxvLCBXb3JsZCEnO1xyXG5jb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuaW1wb3J0IHtVSX0gZnJvbSAgXCIuL1VJXCJcclxuaW1wb3J0IHtkYXRhfSBmcm9tICBcIi4vZGF0YVwiXHJcbmltcG9ydCB7dXRpbHN9IGZyb20gIFwiLi91dGlsc1wiXHJcbmV4cG9ydCBjbGFzcyBNYWluXHJcbntcclxuIHB1YmxpYyAkdWk6VUk7XHJcbiBwdWJsaWMgJGRhdGE6ZGF0YTtcclxuIHB1YmxpYyAkdXRpbHM6dXRpbHM7XHJcbiBjb25zdHJ1Y3RvcigpXHJcbiB7XHJcbiAgdGhpcy4kdWk9bmV3IFVJKCk7XHJcbiAgdGhpcy4kZGF0YT1uZXcgZGF0YSgpO1xyXG4gIHRoaXMuJHV0aWxzPW5ldyB1dGlscygpO1xyXG4gfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IG9iamVjdFNvdXJjZTpNYWluPW5ldyBNYWluKCk7IFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=