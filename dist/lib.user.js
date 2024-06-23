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

/***/ "./node_modules/greasemonkey/index.js":
/*!********************************************!*\
  !*** ./node_modules/greasemonkey/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(/*! ./lib/api */ "./node_modules/greasemonkey/lib/api.js");
exports.GMApi = api_1.GMApi;
const Global = __webpack_require__(/*! ./lib/global */ "./node_modules/greasemonkey/lib/global.js");
exports.Global = Global;
exports["default"] = api_1.GMApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLG1DQUFrQztBQUd6QixnQkFIQSxXQUFLLENBR0E7QUFGZCx1Q0FBd0M7QUFFeEIsd0JBQU07QUFFdEIsa0JBQWUsV0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC82LzcvMDA3LlxuICovXG5cbmltcG9ydCB7IEdNQXBpIH0gZnJvbSAnLi9saWIvYXBpJztcbmltcG9ydCBHbG9iYWwgPSByZXF1aXJlKCcuL2xpYi9nbG9iYWwnKTtcblxuZXhwb3J0IHsgR01BcGksIEdsb2JhbCB9XG5cbmV4cG9ydCBkZWZhdWx0IEdNQXBpO1xuIl19

/***/ }),

/***/ "./node_modules/greasemonkey/lib/api.js":
/*!**********************************************!*\
  !*** ./node_modules/greasemonkey/lib/api.js ***!
  \**********************************************/
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var _GMApi;
(function (_GMApi_1) {
    let _hasGM = typeof GM !== 'undefined';
    let _a = [
        'GM_info',
        'GM_deleteValue',
        'GM_getValue',
        'GM_setValue',
        'GM_listValues',
        'GM_openInTab',
        'GM_setClipboard',
        'GM_xmlhttpRequest',
        'GM_getResourceText',
        'GM_log',
        'GM_addStyle',
        'GM_registerMenuCommand',
    ];
    for (let name of _a) {
        let fn = eval(`(typeof ${name} !== 'undefined') ? ${name} : void(0)`);
        _GMApi[name.replace(/^GM_/, '')] = fn;
    }
    _GMApi.getResourceUrl = (typeof GM_getResourceUrl !== 'undefined' ? GM_getResourceUrl : (typeof GM_getResourceURL !== 'undefined' ? GM_getResourceURL : void (0)));
    if (_hasGM) {
        Object.keys(GM)
            .concat([
            'info',
            'deleteValue',
            'getValue',
            'listValues',
            'setValue',
            'getResourceUrl',
            'openInTab',
            'setClipboard',
            'xmlHttpRequest',
            'getResourceText',
            'log',
            'addStyle',
            'registerMenuCommand',
        ])
            .forEach(function (value, index, array) {
            if (typeof _GMApi[value] === 'undefined') {
                _GMApi[value] = typeof GM[value] !== 'undefined' ? GM[value] : void (0);
            }
        });
    }
    if (!_hasGM) {
        try {
            let _a = [
                'GM_notification',
                'GM_getTab',
                'GM_saveTab',
                'GM_getTabs',
                'GM_download',
                'GM_unregisterMenuCommand',
                'GM_addValueChangeListener',
                'GM_removeValueChangeListener',
            ];
            for (let name of _a) {
                let value = name.replace(/^GM_/, '');
                if (typeof _GMApi[value] === 'undefined') {
                    let fn = eval(`(typeof ${name} !== 'undefined') ? ${name} : void(0)`);
                    _GMApi[value] = fn;
                }
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    let _isTampermonkey = null;
    if (_GMApi.info) {
        if (!_GMApi.info.scriptHandler) {
            _isTampermonkey = false;
        }
        else if (_GMApi.info.scriptHandler == 'Tampermonkey') {
            _isTampermonkey = true;
        }
        else if (_GMApi.info.scriptHandler == 'Greasemonkey') {
            _isTampermonkey = false;
        }
    }
    else if (_hasGM) {
        _isTampermonkey = false;
    }
    let _t_list = [];
    let _t_keys = Object.keys(_GMApi);
    _GMApi.GM = _hasGM ? GM : {};
    _t_keys
        .forEach(function (value, index, array) {
        if (typeof _GMApi.GM[value] == 'undefined') {
            _GMApi.GM[value] = _GMApi[value];
        }
        _GMApi['GM_' + value] = _GMApi[value];
        _t_list.push(value);
        _t_list.push('GM_' + value);
    });
    _GMApi_1._list = _t_list;
    _GMApi_1.isTampermonkey = _isTampermonkey;
    _GMApi_1.hasGM = _hasGM;
    _GMApi.unsafeWindow = typeof unsafeWindow !== 'undefined' ? unsafeWindow : (typeof window !== 'undefined'
        ? window
        : void (0));
    function call(method, ...argv) {
        if (typeof _GMApi[method] == 'function') {
            return _GMApi[method].call(_GMApi['GM'] || null, ...argv);
        }
        else if (typeof _GMApi[method] == 'undefined') {
            console.warn(`GMApi.${method} is undefined`);
        }
        return _GMApi[method];
    }
    _GMApi_1.call = call;
    function callSafe(method) {
        if (typeof _GMApi[method] == 'function') {
            return _GMApi[method];
        }
        return new Function();
    }
    _GMApi_1.callSafe = callSafe;
})(_GMApi || (_GMApi = {}));
_GMApi._list.forEach(function (value, index, array) {
    if (value.indexOf('GM_') == 0) {
        module.exports[value] = _GMApi[value];
    }
});
_GMApi.default = _GMApi.GMApi = _GMApi;
exports.GMApi = _GMApi;
exports["default"] = exports.GMApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBNkxBLElBQVUsTUFBTSxDQXlNZjtBQXpNRCxXQUFVLFFBQU07SUFJZixJQUFJLE1BQU0sR0FBRyxPQUFPLEVBQUUsS0FBSyxXQUFXLENBQUM7SUFFdkMsSUFBSSxFQUFFLEdBQUc7UUFDUixTQUFTO1FBRVQsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZTtRQUVmLGNBQWM7UUFFZCxpQkFBaUI7UUFFakIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUVwQixRQUFRO1FBRVIsYUFBYTtRQUNiLHdCQUF3QjtLQUN4QixDQUFDO0lBRUYsS0FBSyxJQUFJLElBQUksSUFBSSxFQUFFLEVBQ25CO1FBQ0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSx1QkFBdUIsSUFBSSxZQUFZLENBQUMsQ0FBQztRQUV0RSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7S0FHdEM7SUFPRCxNQUFNLENBQUMsY0FBYyxHQUFHLENBRXZCLE9BQU8saUJBQWlCLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FDOUQsT0FBTyxpQkFBaUIsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLENBQ3RFLENBQUMsQ0FDRjtJQVdELElBQUksTUFBTSxFQUNWO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDYixNQUFNLENBQUM7WUFDUCxNQUFNO1lBQ04sYUFBYTtZQUNiLFVBQVU7WUFDVixZQUFZO1lBQ1osVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsY0FBYztZQUNkLGdCQUFnQjtZQUVoQixpQkFBaUI7WUFDakIs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LEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUYsTUFBZSxDQUFDLE9BQU8sR0FBSSxNQUFlLENBQUMsS0FBSyxHQUFHLE1BQWMsQ0FBQztBQUV0RCxRQUFBLEtBQUssR0FBUyxNQUFjLENBQUM7QUFFMUMsa0JBQWdCLGFBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvMTEvMjYvMDI2LlxuICovXG5cbi8qKlxuICogQHNlZSBodHRwczovL3dpa2kuZ3JlYXNlc3BvdC5uZXQvR3JlYXNlbW9ua2V5X01hbnVhbDpBUElcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJR01cbntcblx0aW5mbzogSUluZm8sXG5cblx0ZGVsZXRlVmFsdWUobmFtZTogc3RyaW5nKTtcblxuXHRnZXRWYWx1ZTxULCBVPihuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IFUpOiBVO1xuXG5cdGxpc3RWYWx1ZXMoKTogc3RyaW5nW107XG5cblx0c2V0VmFsdWU8VCwgVT4obmFtZTogc3RyaW5nLCB2YWx1ZTogVSk7XG5cblx0Z2V0UmVzb3VyY2VVcmwocmVzb3VyY2VOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG5cblx0b3BlbkluVGFiKHVybDogc3RyaW5nLCBvcGVuX2luX2JhY2tncm91bmQ/OiBib29sZWFuKTogV2luZG93O1xuXG5cdHNldENsaXBib2FyZCh0ZXh0OiBzdHJpbmcpO1xuXG5cdHhtbGh0dHBSZXF1ZXN0KG9wdGlvbnM6IEdNWE1MSHR0cFJlcXVlc3RPcHRpb25zKTogR01YTUxIdHRwUmVxdWVzdFJlc3VsdDtcblxuXHRnZXRSZXNvdXJjZVRleHQocmVzb3VyY2VOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG5cblx0bG9nKG1lc3NhZ2U6IGFueSk7XG5cblx0YWRkU3R5bGUoY3NzOiBzdHJpbmcpO1xuXG5cdHJlZ2lzdGVyTWVudUNvbW1hbmQoY2FwdGlvbjogc3RyaW5nLCBjb21tYW5kRnVuYzogRnVuY3Rpb24sIGFjY2Vzc0tleT86IHN0cmluZyk7XG59XG5cbmRlY2xhcmUgY29uc3QgR006IElHTTtcblxuZXhwb3J0IGludGVyZmFjZSBJQXBpIGV4dGVuZHMgSUdNXG57XG5cdEdNPzogSUdNO1xuXG5cdEdNX2luZm86IElJbmZvLFxuXG5cdEdNX2RlbGV0ZVZhbHVlKG5hbWU6IHN0cmluZyk7XG5cblx0R01fZ2V0VmFsdWU8VCwgVT4obmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBVKTogVTtcblxuXHRHTV9saXN0VmFsdWVzKCk6IHN0cmluZ1tdO1xuXG5cdEdNX3NldFZhbHVlPFQsIFU+KG5hbWU6IHN0cmluZywgdmFsdWU6IFUpO1xuXG5cdEdNX2dldFJlc291cmNlVXJsKHJlc291cmNlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xuXG5cdEdNX29wZW5JblRhYih1cmw6IHN0cmluZywgb3Blbl9pbl9iYWNrZ3JvdW5kPzogYm9vbGVhbik6IFdpbmRvdztcblxuXHRHTV9zZXRDbGlwYm9hcmQodGV4dDogc3RyaW5nKTtcblxuXHRHTV94bWxodHRwUmVxdWVzdChvcHRpb25zOiBHTVhNTEh0dHBSZXF1ZXN0T3B0aW9ucyk6IEdNWE1MSHR0cFJlcXVlc3RSZXN1bHQ7XG5cblx0R01fZ2V0UmVzb3VyY2VUZXh0KHJlc291cmNlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xuXG5cdEdNX2xvZzxUPihtZXNzYWdlOiBUKTtcblxuXHRHTV9hZGRTdHlsZShjc3M6IHN0cmluZyk7XG5cblx0R01fcmVnaXN0ZXJNZW51Q29tbWFuZChjYXB0aW9uOiBzdHJpbmcsIGNvbW1hbmRGdW5jOiBGdW5jdGlvbiwgYWNjZXNzS2V5Pzogc3RyaW5nKTtcblxuXHR1bnNhZmVXaW5kb3c6IFdpbmRvdztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFtcGVybW9ua2V5R01cbntcblx0aW5mbzogSVRhbXBlcm1vbmtleUluZm87XG5cblx0bm90aWZpY2F0aW9uPyxcblxuXHRnZXRUYWI/LFxuXHRzYXZlVGFiPyxcblx0Z2V0VGFicz8sXG5cblx0ZG93bmxvYWQ/LFxuXG5cdHVucmVnaXN0ZXJNZW51Q29tbWFuZD8sXG5cblx0YWRkVmFsdWVDaGFuZ2VMaXN0ZW5lcj8sXG5cdHJlbW92ZVZhbHVlQ2hhbmdlTGlzdGVuZXI/LFxufVxuXG4vKipcbiAqIEBzZWUgaHR0cDovL3RhbXBlcm1vbmtleS5uZXQvZG9jdW1lbnRhdGlvbi5waHBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGFtcGVybW9ua2V5XG57XG5cdEdNX2luZm86IElUYW1wZXJtb25rZXlJbmZvO1xuXG5cdEdNX29wZW5JblRhYih1cmw6IHN0cmluZywgbG9hZEluQmFja2dyb3VuZD86IGJvb2xlYW4pO1xuXG5cdEdNX29wZW5JblRhYih1cmw6IHN0cmluZywgb3B0aW9ucz86IGFueSk7XG5cblx0R01fbm90aWZpY2F0aW9uKHRleHQ6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCBvbmNsaWNrPyk7XG5cblx0R01fbm90aWZpY2F0aW9uKGRldGFpbHM6IHtcblx0XHR0ZXh0Pzogc3RyaW5nLFxuXHRcdHRpdGxlPzogc3RyaW5nLFxuXHRcdGltYWdlPzogc3RyaW5nLFxuXHRcdGhpZ2hsaWdodD86IGJvb2xlYW4sXG5cdFx0dGltZW91dD86IG51bWJlcixcblx0XHRvbmRvbmU/LFxuXHRcdG9uY2xpY2s/LFxuXHR9LCBvbmRvbmU/KTtcblxuXHRHTV9nZXRUYWIoY2IpO1xuXG5cdEdNX3NhdmVUYWIodGFiKTtcblxuXHRHTV9nZXRUYWJzKGNiKTtcblxuXHRHTV9kb3dubG9hZCh1cmw6IHN0cmluZywgbmFtZT86IHN0cmluZyk7XG5cblx0R01fZG93bmxvYWQoZGV0YWlsczoge1xuXHRcdHVybDogc3RyaW5nLFxuXHRcdG5hbWU/OiBzdHJpbmcsXG5cdFx0aGVhZGVycz8sXG5cdFx0c2F2ZUFzPzogYm9vbGVhbixcblx0XHRvbmxvYWQ/LFxuXHRcdG9uZXJyb3I/LFxuXHR9KTtcblxuXHRHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQobWVudUNtZElkKTtcblxuXHRHTV9hZGRWYWx1ZUNoYW5nZUxpc3RlbmVyKG5hbWUsIGNiOiBJR01fYWRkVmFsdWVDaGFuZ2VMaXN0ZW5lckZuKTtcblxuXHRHTV9yZW1vdmVWYWx1ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyX2lkKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR01fYWRkVmFsdWVDaGFuZ2VMaXN0ZW5lckZuIGV4dGVuZHMgRnVuY3Rpb25cbntcblx0KG5hbWU6IHN0cmluZywgb2xkX3ZhbHVlLCBuZXdfdmFsdWUsIHJlbW90ZTogYm9vbGVhbik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhbXBlcm1vbmtleUluZm8gZXh0ZW5kcyBJSW5mb1xue1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwaSBleHRlbmRzIElUYW1wZXJtb25rZXksIElUYW1wZXJtb25rZXlHTVxue1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwaVxue1xuXHRHTUFwaTogSUFwaTtcblx0ZGVmYXVsdDogSUFwaTtcblxuXHRpc1RhbXBlcm1vbmtleTogYm9vbGVhbjtcblx0aGFzR006IGJvb2xlYW47XG5cblx0X2xpc3Q6IHN0cmluZ1tdO1xuXG5cdGNhbGwobWV0aG9kOiBzdHJpbmcsIC4uLmFyZ3YpO1xuXG5cdGNhbGxTYWZlKG1ldGhvZDogc3RyaW5nKTogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUluZm9cbntcblx0c2NyaXB0Pzoge1xuXHRcdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRcdGV4Y2x1ZGVzPzogc3RyaW5nW107XG5cdFx0aW5jbHVkZXM/OiBzdHJpbmdbXTtcblx0XHRtYXRjaGVzPzogc3RyaW5nW107XG5cdFx0bmFtZT86IHN0cmluZztcblx0XHRuYW1lc3BhY2U/OiBzdHJpbmc7XG5cdFx0cmVzb3VyY2VzPzogT2JqZWN0O1xuXHRcdFwicnVuLWF0XCI/OiBzdHJpbmc7XG5cdFx0dW53cmFwPzogYm9vbGVhbjtcblx0XHR2ZXJzaW9uPzogc3RyaW5nO1xuXHR9O1xuXHRzY3JpcHRNZXRhU3RyPzogc3RyaW5nO1xuXHRzY3JpcHRXaWxsVXBkYXRlPzogYm9vbGVhbjtcblx0dmVyc2lvbj86IHN0cmluZztcblxuXHRbaW5kZXg6IHN0cmluZ106IGFueTtcblxuXHRzY3JpcHRIYW5kbGVyPzogc3RyaW5nO1xufVxuXG5uYW1lc3BhY2UgX0dNQXBpXG57XG5cdGRlY2xhcmUgY29uc3QgX0dNQXBpOiBJQXBpO1xuXG5cdGxldCBfaGFzR00gPSB0eXBlb2YgR00gIT09ICd1bmRlZmluZWQnO1xuXG5cdGxldCBfYSA9IFtcblx0XHQnR01faW5mbycsXG5cblx0XHQnR01fZGVsZXRlVmFsdWUnLFxuXHRcdCdHTV9nZXRWYWx1ZScsXG5cdFx0J0dNX3NldFZhbHVlJyxcblx0XHQnR01fbGlzdFZhbHVlcycsXG5cblx0XHQnR01fb3BlbkluVGFiJyxcblxuXHRcdCdHTV9zZXRDbGlwYm9hcmQnLFxuXG5cdFx0J0dNX3htbGh0dHBSZXF1ZXN0Jyxcblx0XHQnR01fZ2V0UmVzb3VyY2VUZXh0JyxcblxuXHRcdCdHTV9sb2cnLFxuXG5cdFx0J0dNX2FkZFN0eWxlJyxcblx0XHQnR01fcmVnaXN0ZXJNZW51Q29tbWFuZCcsXG5cdF07XG5cblx0Zm9yIChsZXQgbmFtZSBvZiBfYSlcblx0e1xuXHRcdGxldCBmbiA9IGV2YWwoYCh0eXBlb2YgJHtuYW1lfSAhPT0gJ3VuZGVmaW5lZCcpID8gJHtuYW1lfSA6IHZvaWQoMClgKTtcblxuXHRcdF9HTUFwaVtuYW1lLnJlcGxhY2UoL15HTV8vLCAnJyldID0gZm47XG5cblx0XHQvL2NvbnNvbGUubG9nKG5hbWUsIGZuKTtcblx0fVxuXG5cdC8vX0dNQXBpLmluZm8gPSB0eXBlb2YgR01faW5mbyAhPT0gJ3VuZGVmaW5lZCcgPyBHTV9pbmZvIDogdm9pZCgwKTtcblx0Ly9fR01BcGkuZGVsZXRlVmFsdWUgPSB0eXBlb2YgR01fZGVsZXRlVmFsdWUgIT09ICd1bmRlZmluZWQnID8gR01fZGVsZXRlVmFsdWUgOiB2b2lkKDApO1xuXHQvL19HTUFwaS5nZXRWYWx1ZSA9IHR5cGVvZiBHTV9nZXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBHTV9nZXRWYWx1ZSA6IHZvaWQoMCk7XG5cdC8vX0dNQXBpLmxpc3RWYWx1ZXMgPSB0eXBlb2YgR01fbGlzdFZhbHVlcyAhPT0gJ3VuZGVmaW5lZCcgPyBHTV9saXN0VmFsdWVzIDogdm9pZCgwKTtcblx0Ly9fR01BcGkuc2V0VmFsdWUgPSB0eXBlb2YgR01fc2V0VmFsdWUgIT09ICd1bmRlZmluZWQnID8gR01fc2V0VmFsdWUgOiB2b2lkKDApO1xuXHRfR01BcGkuZ2V0UmVzb3VyY2VVcmwgPSAoXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHR5cGVvZiBHTV9nZXRSZXNvdXJjZVVybCAhPT0gJ3VuZGVmaW5lZCcgPyBHTV9nZXRSZXNvdXJjZVVybCA6IChcblx0XHRcdHR5cGVvZiBHTV9nZXRSZXNvdXJjZVVSTCAhPT0gJ3VuZGVmaW5lZCcgPyBHTV9nZXRSZXNvdXJjZVVSTCA6IHZvaWQoMClcblx0XHQpKVxuXHQ7XG5cdC8vX0dNQXBpLm9wZW5JblRhYiA9IHR5cGVvZiBHTV9vcGVuSW5UYWIgIT09ICd1bmRlZmluZWQnID8gR01fb3BlbkluVGFiIDogdm9pZCgwKTtcblx0Ly9fR01BcGkuc2V0Q2xpcGJvYXJkID0gdHlwZW9mIEdNX3NldENsaXBib2FyZCAhPT0gJ3VuZGVmaW5lZCcgPyBHTV9zZXRDbGlwYm9hcmQgOiB2b2lkKDApO1xuXHQvL19HTUFwaS54bWxodHRwUmVxdWVzdCA9IHR5cGVvZiBHTV94bWxodHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgPyBHTV94bWxodHRwUmVxdWVzdCA6IHZvaWQoMCk7XG5cblx0Ly9fR01BcGkuZ2V0UmVzb3VyY2VUZXh0ID0gdHlwZW9mIEdNX2dldFJlc291cmNlVGV4dCAhPT0gJ3VuZGVmaW5lZCcgPyBHTV9nZXRSZXNvdXJjZVRleHQgOiB2b2lkKDApO1xuXHQvL19HTUFwaS5sb2cgPSB0eXBlb2YgR01fbG9nICE9PSAndW5kZWZpbmVkJyA/IEdNX2xvZyA6IHZvaWQoMCk7XG5cdC8vX0dNQXBpLmFkZFN0eWxlID0gdHlwZW9mIEdNX2FkZFN0eWxlICE9PSAndW5kZWZpbmVkJyA/IEdNX2FkZFN0eWxlIDogdm9pZCgwKTtcblxuXHQvL19HTUFwaS5yZWdpc3Rlck1lbnVDb21tYW5kID0gdHlwZW9mIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQgIT09ICd1bmRlZmluZWQnID8gR01fcmVnaXN0ZXJNZW51Q29tbWFuZCA6IHZvaWQoMCk7XG5cblx0aWYgKF9oYXNHTSlcblx0e1xuXHRcdE9iamVjdC5rZXlzKEdNKVxuXHRcdFx0LmNvbmNhdChbXG5cdFx0XHRcdCdpbmZvJyxcblx0XHRcdFx0J2RlbGV0ZVZhbHVlJyxcblx0XHRcdFx0J2dldFZhbHVlJyxcblx0XHRcdFx0J2xpc3RWYWx1ZXMnLFxuXHRcdFx0XHQnc2V0VmFsdWUnLFxuXHRcdFx0XHQnZ2V0UmVzb3VyY2VVcmwnLFxuXHRcdFx0XHQnb3BlbkluVGFiJyxcblx0XHRcdFx0J3NldENsaXBib2FyZCcsXG5cdFx0XHRcdCd4bWxIdHRwUmVxdWVzdCcsXG5cblx0XHRcdFx0J2dldFJlc291cmNlVGV4dCcsXG5cdFx0XHRcdCdsb2cnLFxuXHRcdFx0XHQnYWRkU3R5bGUnLFxuXG5cdFx0XHRcdCdyZWdpc3Rlck1lbnVDb21tYW5kJyxcblx0XHRcdF0pXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKHR5cGVvZiBfR01BcGlbdmFsdWVdID09PSAndW5kZWZpbmVkJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9HTUFwaVt2YWx1ZV0gPSB0eXBlb2YgR01bdmFsdWVdICE9PSAndW5kZWZpbmVkJyA/IEdNW3ZhbHVlXSA6IHZvaWQoMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0O1xuXHR9XG5cblx0aWYgKCFfaGFzR00pXG5cdHtcblx0XHR0cnlcblx0XHR7XG5cdFx0XHRsZXQgX2EgPSBbXG5cdFx0XHRcdCdHTV9ub3RpZmljYXRpb24nLFxuXG5cdFx0XHRcdCdHTV9nZXRUYWInLFxuXHRcdFx0XHQnR01fc2F2ZVRhYicsXG5cdFx0XHRcdCdHTV9nZXRUYWJzJyxcblxuXHRcdFx0XHQnR01fZG93bmxvYWQnLFxuXG5cdFx0XHRcdCdHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQnLFxuXG5cdFx0XHRcdCdHTV9hZGRWYWx1ZUNoYW5nZUxpc3RlbmVyJyxcblx0XHRcdFx0J0dNX3JlbW92ZVZhbHVlQ2hhbmdlTGlzdGVuZXInLFxuXHRcdFx0XTtcblxuXHRcdFx0Zm9yIChsZXQgbmFtZSBvZiBfYSlcblx0XHRcdHtcblx0XHRcdFx0bGV0IHZhbHVlID0gbmFtZS5yZXBsYWNlKC9eR01fLywgJycpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgX0dNQXBpW3ZhbHVlXSA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgZm4gPSBldmFsKGAodHlwZW9mICR7bmFtZX0gIT09ICd1bmRlZmluZWQnKSA/ICR7bmFtZX0gOiB2b2lkKDApYCk7XG5cblx0XHRcdFx0XHRfR01BcGlbdmFsdWVdID0gZm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKG5hbWUsIGZuKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKGUpXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgX2lzVGFtcGVybW9ua2V5ID0gbnVsbDtcblxuXHRpZiAoX0dNQXBpLmluZm8pXG5cdHtcblx0XHRpZiAoIV9HTUFwaS5pbmZvLnNjcmlwdEhhbmRsZXIpXG5cdFx0e1xuXHRcdFx0X2lzVGFtcGVybW9ua2V5ID0gZmFsc2U7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKF9HTUFwaS5pbmZvLnNjcmlwdEhhbmRsZXIgPT0gJ1RhbXBlcm1vbmtleScpXG5cdFx0e1xuXHRcdFx0X2lzVGFtcGVybW9ua2V5ID0gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoX0dNQXBpLmluZm8uc2NyaXB0SGFuZGxlciA9PSAnR3JlYXNlbW9ua2V5Jylcblx0XHR7XG5cdFx0XHRfaXNUYW1wZXJtb25rZXkgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0ZWxzZSBpZiAoX2hhc0dNKVxuXHR7XG5cdFx0X2lzVGFtcGVybW9ua2V5ID0gZmFsc2U7XG5cdH1cblxuXHRsZXQgX3RfbGlzdCA9IFtdO1xuXG5cdGxldCBfdF9rZXlzID0gT2JqZWN0LmtleXMoX0dNQXBpKTtcblxuXHRfR01BcGkuR00gPSBfaGFzR00gPyBHTSA6IHt9IGFzIElHTTtcblxuXHRfdF9rZXlzXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBfR01BcGkuR01bdmFsdWVdID09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRfR01BcGkuR01bdmFsdWVdID0gX0dNQXBpW3ZhbHVlXTtcblx0XHRcdH1cblxuXHRcdFx0X0dNQXBpWydHTV8nICsgdmFsdWVdID0gX0dNQXBpW3ZhbHVlXTtcblxuXHRcdFx0X3RfbGlzdC5wdXNoKHZhbHVlKTtcblx0XHRcdF90X2xpc3QucHVzaCgnR01fJyArIHZhbHVlKTtcblx0XHR9KVxuXHQ7XG5cblx0ZXhwb3J0IGNvbnN0IF9saXN0OiBzdHJpbmdbXSA9IF90X2xpc3Q7XG5cdGV4cG9ydCBjb25zdCBpc1RhbXBlcm1vbmtleSA9IF9pc1RhbXBlcm1vbmtleTtcblx0ZXhwb3J0IGNvbnN0IGhhc0dNID0gX2hhc0dNO1xuXG5cdF9HTUFwaS51bnNhZmVXaW5kb3cgPSB0eXBlb2YgdW5zYWZlV2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHVuc2FmZVdpbmRvdyA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXHRcdD8gd2luZG93XG5cdFx0OiB2b2lkKDApKVxuXHQ7XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIGNhbGwobWV0aG9kOiBzdHJpbmcsIC4uLmFyZ3YpXG5cdHtcblx0XHRpZiAodHlwZW9mIF9HTUFwaVttZXRob2RdID09ICdmdW5jdGlvbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9HTUFwaVttZXRob2RdLmNhbGwoX0dNQXBpWydHTSddIHx8IG51bGwsIC4uLmFyZ3YpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0eXBlb2YgX0dNQXBpW21ldGhvZF0gPT0gJ3VuZGVmaW5lZCcpXG5cdFx0e1xuXHRcdFx0Y29uc29sZS53YXJuKGBHTUFwaS4ke21ldGhvZH0gaXMgdW5kZWZpbmVkYCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9HTUFwaVttZXRob2RdO1xuXHR9XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIGNhbGxTYWZlKG1ldGhvZDogc3RyaW5nKVxuXHR7XG5cdFx0aWYgKHR5cGVvZiBfR01BcGlbbWV0aG9kXSA9PSAnZnVuY3Rpb24nKVxuXHRcdHtcblx0XHRcdHJldHVybiBfR01BcGlbbWV0aG9kXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCk7XG5cdH1cbn1cblxuX0dNQXBpLl9saXN0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpXG57XG5cdGlmICh2YWx1ZS5pbmRleE9mKCdHTV8nKSA9PSAwKVxuXHR7XG5cdFx0bW9kdWxlLmV4cG9ydHNbdmFsdWVdID0gX0dNQXBpW3ZhbHVlXTtcblx0fVxufSk7XG5cbihfR01BcGkgYXMgSUFwaSkuZGVmYXVsdCA9IChfR01BcGkgYXMgSUFwaSkuR01BcGkgPSBfR01BcGkgYXMgSUFwaTtcblxuZXhwb3J0IGNvbnN0IEdNQXBpOiBJQXBpID0gX0dNQXBpIGFzIElBcGk7XG5cbmV4cG9ydCBkZWZhdWx0IChHTUFwaSBhcyBJQXBpKTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/greasemonkey/lib/global.js":
/*!*************************************************!*\
  !*** ./node_modules/greasemonkey/lib/global.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const index_1 = __webpack_require__(/*! ../index */ "./node_modules/greasemonkey/index.js");
const _Global = {
    GMApi: index_1.GMApi,
};
module.exports = _Global;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxvQ0FBaUM7QUFFakMsTUFBTSxPQUFPLEdBQUc7SUFDZixLQUFLLEVBQUwsYUFBSztDQUlMLENBQUM7QUFFRixpQkFBUyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzYvNy8wMDcuXG4gKi9cbmltcG9ydCB7IEdNQXBpIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jb25zdCBfR2xvYmFsID0ge1xuXHRHTUFwaSxcbn0gYXMge1xuXHRHTUFwaTogdHlwZW9mIEdNQXBpLFxuXHRbazogc3RyaW5nXTogYW55LFxufTtcblxuZXhwb3J0ID0gX0dsb2JhbDtcbiJdfQ==

/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.UI = void 0;
var UI = (function () {
    function UI() {
        this.contextMenus = [new ComtextMenu()];
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
var ActionType;
(function (ActionType) {
    ActionType[ActionType["button"] = 0] = "button";
    ActionType[ActionType["checkbox"] = 1] = "checkbox";
})(ActionType || (ActionType = {}));
var ComtextMenu = (function () {
    function ComtextMenu() {
        this.triggerTypeVisible = "mouseover";
        this.triggerTypeInvisible = "mouseleft";
        this.complexTriggerIn = false;
        this.complexTriggerOut = false;
        this.contextMenuQuery = ".contextMenu";
        this.actions = [];
    }
    ComtextMenu.prototype.setComplexTriggerIn = function (complex) {
        this.complexTriggerInCondition = complex;
        this.complexTriggerIn = true;
    };
    ComtextMenu.prototype.setComplexTriggerOut = function (complex) {
        this.complexTriggerOutCondition = complex;
        this.complexTriggerOut = true;
    };
    ComtextMenu.prototype.addAction = function (action) {
        this.actions.push(action);
    };
    ComtextMenu.prototype.addActions = function (actions) {
        var _a;
        (_a = this.actions).push.apply(_a, actions);
    };
    ComtextMenu.prototype.buildContextMenu = function (item, e, options) {
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
    ComtextMenu.prototype.buildContextMenuWhenVisible = function (item, e, options, zIndex) {
        if (options === void 0) { options = {
            colorB: "#54C571", height: 40, borderWidth: 2, widthButton: 50,
            heightButton: 20, borderWidthButton: 1, radius: 4,
            minWidth: 100, xOffset: 120, xOffsetButton: 20, paddingButton: 1, duration: 1
        }; }
        if (zIndex === void 0) { zIndex = 1000; }
        var parent = document.querySelector(".container");
        var conMenu = parent.querySelector(this.contextMenuQuery);
        if (conMenu == null) {
            conMenu = document.createElement("div");
            conMenu.classList.add(this.contextMenuQuery.slice(1));
            parent.appendChild(conMenu);
        }
        else {
            conMenu.innerHTML = "";
            conMenu.style.opacity = "1";
        }
        conMenu.style.overflow = "auto";
        conMenu.style.zIndex = zIndex.toString();
        conMenu.style.position = "absolute";
        conMenu.style.height = options.height.toString() + "px";
        conMenu.style.minWidth = options.minWidth + "px";
        conMenu.style.top = e.clientY.toString() + "px";
        conMenu.style.left = (e.clientX - options.xOffset).toString() + "px";
        conMenu.style.border = options.borderWidth.toString() + "px solid " + window.getComputedStyle(document.querySelector(".container")).getPropertyValue("--text-color").trim();
        conMenu.style.borderRadius = options.radius.toString() + "px";
        conMenu.style.backgroundColor = "var(--background-color)";
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
                var isOn = action.initHandler(item);
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
                conMenu.appendChild(actionCheckbox_1);
                conMenu.appendChild(label_1);
                conMenu.appendChild(textSpan);
            }
            else {
                var actionButton = document.createElement("button");
                actionButton.textContent = (_e = action.emojiOn) !== null && _e !== void 0 ? _e : "" + action.textOn;
                if (action.initHandler) {
                    action.initHandler(conMenu);
                }
                actionButton.addEventListener("click", function () { return action.handler(); });
                conMenu.appendChild(actionButton);
            }
            conMenu.appendChild(document.createElement("br"));
            if (this.complexTriggerOut === false) {
                conMenu.addEventListener(this.triggerTypeInvisible, function (e) {
                    setTimeout(function () {
                        document.querySelector(".container").querySelectorAll(_this.contextMenuQuery).forEach(function (elem) {
                            return elem.style.opacity = "0";
                        });
                    }, 500);
                });
            }
            else {
                this.complexTriggerOutCondition(conMenu);
            }
        });
    };
    return ComtextMenu;
}());


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var greasemonkey_1 = __webpack_require__(/*! greasemonkey */ "./node_modules/greasemonkey/index.js");
var data = (function () {
    function data() {
        this.source = null;
        this.sourceWindow = null;
        this.expF = null;
    }
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
        }, greasemonkey_1["default"]);
    };
    data.prototype.onFiltering = function (addFilterMethodOnQuery) {
        var _this = this;
        if (addFilterMethodOnQuery === void 0) { addFilterMethodOnQuery = function (x, y) { return y(); }; }
        var before = this.source._computedWatchers.searchResults.getter;
        this.source._computedWatchers.searchResults.getter = this.expF(function () {
            var query = _this.source.searchQuery;
            return addFilterMethodOnQuery(query, before);
        }, greasemonkey_1["default"]);
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
var utils = (function () {
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
var message = 'Hello, World!';
console.log(message);
var UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
var data_1 = __webpack_require__(/*! ./data */ "./src/data.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Main = (function () {
    function Main() {
        this.$ui = new UI_1.UI();
        this.$data = new data_1.data();
        this.$utils = new utils_1.utils();
    }
    return Main;
}());
var $ = new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDckUsVUFBVSxDQUFDO2dCQUNQLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLRCwyQkFBVyxHQUFYLFVBQVksSUFBVyxFQUFDLFFBQVk7UUFFaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFlBQUM7QUFBRCxDQUFDO0FBNUNZLHNCQUFLOzs7Ozs7O1VDQWxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxJQUFJLE9BQU8sR0FBVyxlQUFlLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQiwwREFBd0I7QUFDeEIsZ0VBQTRCO0FBQzVCLG1FQUE4QjtBQUM5QjtJQUtDO1FBRUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLE9BQUUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksYUFBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDO0FBQ0QsSUFBSSxDQUFDLEdBQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfbGlicmFyeV90b19qcy8uL25vZGVfbW9kdWxlcy9ncmVhc2Vtb25rZXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9saWJyYXJ5X3RvX2pzLy4vbm9kZV9tb2R1bGVzL2dyZWFzZW1vbmtleS9saWIvYXBpLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHRfbGlicmFyeV90b19qcy8uL25vZGVfbW9kdWxlcy9ncmVhc2Vtb25rZXkvbGliL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2xpYnJhcnlfdG9fanMvLi9zcmMvVUkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9saWJyYXJ5X3RvX2pzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9saWJyYXJ5X3RvX2pzLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfbGlicmFyeV90b19qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2xpYnJhcnlfdG9fanMvLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFwaV8xID0gcmVxdWlyZShcIi4vbGliL2FwaVwiKTtcbmV4cG9ydHMuR01BcGkgPSBhcGlfMS5HTUFwaTtcbmNvbnN0IEdsb2JhbCA9IHJlcXVpcmUoXCIuL2xpYi9nbG9iYWxcIik7XG5leHBvcnRzLkdsb2JhbCA9IEdsb2JhbDtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwaV8xLkdNQXBpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVbEJMRzFEUVVGclF6dEJRVWQ2UWl4blFrRklRU3hYUVVGTExFTkJSMEU3UVVGR1pDeDFRMEZCZDBNN1FVRkZlRUlzZDBKQlFVMDdRVUZGZEVJc2EwSkJRV1VzVjBGQlN5eERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYRzRnS2lCRGNtVmhkR1ZrSUdKNUlIVnpaWElnYjI0Z01qQXhPQzgyTHpjdk1EQTNMbHh1SUNvdlhHNWNibWx0Y0c5eWRDQjdJRWROUVhCcElIMGdabkp2YlNBbkxpOXNhV0l2WVhCcEp6dGNibWx0Y0c5eWRDQkhiRzlpWVd3Z1BTQnlaWEYxYVhKbEtDY3VMMnhwWWk5bmJHOWlZV3duS1R0Y2JseHVaWGh3YjNKMElIc2dSMDFCY0drc0lFZHNiMkpoYkNCOVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFZE5RWEJwTzF4dUlsMTkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfR01BcGk7XG4oZnVuY3Rpb24gKF9HTUFwaV8xKSB7XG4gICAgbGV0IF9oYXNHTSA9IHR5cGVvZiBHTSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgbGV0IF9hID0gW1xuICAgICAgICAnR01faW5mbycsXG4gICAgICAgICdHTV9kZWxldGVWYWx1ZScsXG4gICAgICAgICdHTV9nZXRWYWx1ZScsXG4gICAgICAgICdHTV9zZXRWYWx1ZScsXG4gICAgICAgICdHTV9saXN0VmFsdWVzJyxcbiAgICAgICAgJ0dNX29wZW5JblRhYicsXG4gICAgICAgICdHTV9zZXRDbGlwYm9hcmQnLFxuICAgICAgICAnR01feG1saHR0cFJlcXVlc3QnLFxuICAgICAgICAnR01fZ2V0UmVzb3VyY2VUZXh0JyxcbiAgICAgICAgJ0dNX2xvZycsXG4gICAgICAgICdHTV9hZGRTdHlsZScsXG4gICAgICAgICdHTV9yZWdpc3Rlck1lbnVDb21tYW5kJyxcbiAgICBdO1xuICAgIGZvciAobGV0IG5hbWUgb2YgX2EpIHtcbiAgICAgICAgbGV0IGZuID0gZXZhbChgKHR5cGVvZiAke25hbWV9ICE9PSAndW5kZWZpbmVkJykgPyAke25hbWV9IDogdm9pZCgwKWApO1xuICAgICAgICBfR01BcGlbbmFtZS5yZXBsYWNlKC9eR01fLywgJycpXSA9IGZuO1xuICAgIH1cbiAgICBfR01BcGkuZ2V0UmVzb3VyY2VVcmwgPSAodHlwZW9mIEdNX2dldFJlc291cmNlVXJsICE9PSAndW5kZWZpbmVkJyA/IEdNX2dldFJlc291cmNlVXJsIDogKHR5cGVvZiBHTV9nZXRSZXNvdXJjZVVSTCAhPT0gJ3VuZGVmaW5lZCcgPyBHTV9nZXRSZXNvdXJjZVVSTCA6IHZvaWQgKDApKSk7XG4gICAgaWYgKF9oYXNHTSkge1xuICAgICAgICBPYmplY3Qua2V5cyhHTSlcbiAgICAgICAgICAgIC5jb25jYXQoW1xuICAgICAgICAgICAgJ2luZm8nLFxuICAgICAgICAgICAgJ2RlbGV0ZVZhbHVlJyxcbiAgICAgICAgICAgICdnZXRWYWx1ZScsXG4gICAgICAgICAgICAnbGlzdFZhbHVlcycsXG4gICAgICAgICAgICAnc2V0VmFsdWUnLFxuICAgICAgICAgICAgJ2dldFJlc291cmNlVXJsJyxcbiAgICAgICAgICAgICdvcGVuSW5UYWInLFxuICAgICAgICAgICAgJ3NldENsaXBib2FyZCcsXG4gICAgICAgICAgICAneG1sSHR0cFJlcXVlc3QnLFxuICAgICAgICAgICAgJ2dldFJlc291cmNlVGV4dCcsXG4gICAgICAgICAgICAnbG9nJyxcbiAgICAgICAgICAgICdhZGRTdHlsZScsXG4gICAgICAgICAgICAncmVnaXN0ZXJNZW51Q29tbWFuZCcsXG4gICAgICAgIF0pXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfR01BcGlbdmFsdWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF9HTUFwaVt2YWx1ZV0gPSB0eXBlb2YgR01bdmFsdWVdICE9PSAndW5kZWZpbmVkJyA/IEdNW3ZhbHVlXSA6IHZvaWQgKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFfaGFzR00pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBfYSA9IFtcbiAgICAgICAgICAgICAgICAnR01fbm90aWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAnR01fZ2V0VGFiJyxcbiAgICAgICAgICAgICAgICAnR01fc2F2ZVRhYicsXG4gICAgICAgICAgICAgICAgJ0dNX2dldFRhYnMnLFxuICAgICAgICAgICAgICAgICdHTV9kb3dubG9hZCcsXG4gICAgICAgICAgICAgICAgJ0dNX3VucmVnaXN0ZXJNZW51Q29tbWFuZCcsXG4gICAgICAgICAgICAgICAgJ0dNX2FkZFZhbHVlQ2hhbmdlTGlzdGVuZXInLFxuICAgICAgICAgICAgICAgICdHTV9yZW1vdmVWYWx1ZUNoYW5nZUxpc3RlbmVyJyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lIG9mIF9hKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbmFtZS5yZXBsYWNlKC9eR01fLywgJycpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX0dNQXBpW3ZhbHVlXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZuID0gZXZhbChgKHR5cGVvZiAke25hbWV9ICE9PSAndW5kZWZpbmVkJykgPyAke25hbWV9IDogdm9pZCgwKWApO1xuICAgICAgICAgICAgICAgICAgICBfR01BcGlbdmFsdWVdID0gZm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBfaXNUYW1wZXJtb25rZXkgPSBudWxsO1xuICAgIGlmIChfR01BcGkuaW5mbykge1xuICAgICAgICBpZiAoIV9HTUFwaS5pbmZvLnNjcmlwdEhhbmRsZXIpIHtcbiAgICAgICAgICAgIF9pc1RhbXBlcm1vbmtleSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9HTUFwaS5pbmZvLnNjcmlwdEhhbmRsZXIgPT0gJ1RhbXBlcm1vbmtleScpIHtcbiAgICAgICAgICAgIF9pc1RhbXBlcm1vbmtleSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX0dNQXBpLmluZm8uc2NyaXB0SGFuZGxlciA9PSAnR3JlYXNlbW9ua2V5Jykge1xuICAgICAgICAgICAgX2lzVGFtcGVybW9ua2V5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoX2hhc0dNKSB7XG4gICAgICAgIF9pc1RhbXBlcm1vbmtleSA9IGZhbHNlO1xuICAgIH1cbiAgICBsZXQgX3RfbGlzdCA9IFtdO1xuICAgIGxldCBfdF9rZXlzID0gT2JqZWN0LmtleXMoX0dNQXBpKTtcbiAgICBfR01BcGkuR00gPSBfaGFzR00gPyBHTSA6IHt9O1xuICAgIF90X2tleXNcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfR01BcGkuR01bdmFsdWVdID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBfR01BcGkuR01bdmFsdWVdID0gX0dNQXBpW3ZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgICBfR01BcGlbJ0dNXycgKyB2YWx1ZV0gPSBfR01BcGlbdmFsdWVdO1xuICAgICAgICBfdF9saXN0LnB1c2godmFsdWUpO1xuICAgICAgICBfdF9saXN0LnB1c2goJ0dNXycgKyB2YWx1ZSk7XG4gICAgfSk7XG4gICAgX0dNQXBpXzEuX2xpc3QgPSBfdF9saXN0O1xuICAgIF9HTUFwaV8xLmlzVGFtcGVybW9ua2V5ID0gX2lzVGFtcGVybW9ua2V5O1xuICAgIF9HTUFwaV8xLmhhc0dNID0gX2hhc0dNO1xuICAgIF9HTUFwaS51bnNhZmVXaW5kb3cgPSB0eXBlb2YgdW5zYWZlV2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHVuc2FmZVdpbmRvdyA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHdpbmRvd1xuICAgICAgICA6IHZvaWQgKDApKTtcbiAgICBmdW5jdGlvbiBjYWxsKG1ldGhvZCwgLi4uYXJndikge1xuICAgICAgICBpZiAodHlwZW9mIF9HTUFwaVttZXRob2RdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBfR01BcGlbbWV0aG9kXS5jYWxsKF9HTUFwaVsnR00nXSB8fCBudWxsLCAuLi5hcmd2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgX0dNQXBpW21ldGhvZF0gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgR01BcGkuJHttZXRob2R9IGlzIHVuZGVmaW5lZGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfR01BcGlbbWV0aG9kXTtcbiAgICB9XG4gICAgX0dNQXBpXzEuY2FsbCA9IGNhbGw7XG4gICAgZnVuY3Rpb24gY2FsbFNhZmUobWV0aG9kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgX0dNQXBpW21ldGhvZF0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIF9HTUFwaVttZXRob2RdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgX0dNQXBpXzEuY2FsbFNhZmUgPSBjYWxsU2FmZTtcbn0pKF9HTUFwaSB8fCAoX0dNQXBpID0ge30pKTtcbl9HTUFwaS5fbGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJ0dNXycpID09IDApIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHNbdmFsdWVdID0gX0dNQXBpW3ZhbHVlXTtcbiAgICB9XG59KTtcbl9HTUFwaS5kZWZhdWx0ID0gX0dNQXBpLkdNQXBpID0gX0dNQXBpO1xuZXhwb3J0cy5HTUFwaSA9IF9HTUFwaTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuR01BcGk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZWEJwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJOa3hCTEVsQlFWVXNUVUZCVFN4RFFYbE5aanRCUVhwTlJDeFhRVUZWTEZGQlFVMDdTVUZKWml4SlFVRkpMRTFCUVUwc1IwRkJSeXhQUVVGUExFVkJRVVVzUzBGQlN5eFhRVUZYTEVOQlFVTTdTVUZGZGtNc1NVRkJTU3hGUVVGRkxFZEJRVWM3VVVGRFVpeFRRVUZUTzFGQlJWUXNaMEpCUVdkQ08xRkJRMmhDTEdGQlFXRTdVVUZEWWl4aFFVRmhPMUZCUTJJc1pVRkJaVHRSUVVWbUxHTkJRV003VVVGRlpDeHBRa0ZCYVVJN1VVRkZha0lzYlVKQlFXMUNPMUZCUTI1Q0xHOUNRVUZ2UWp0UlFVVndRaXhSUVVGUk8xRkJSVklzWVVGQllUdFJRVU5pTEhkQ1FVRjNRanRMUVVONFFpeERRVUZETzBsQlJVWXNTMEZCU3l4SlFVRkpMRWxCUVVrc1NVRkJTU3hGUVVGRkxFVkJRMjVDTzFGQlEwTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeDFRa0ZCZFVJc1NVRkJTU3haUVVGWkxFTkJRVU1zUTBGQlF6dFJRVVYwUlN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGSGRFTTdTVUZQUkN4TlFVRk5MRU5CUVVNc1kwRkJZeXhIUVVGSExFTkJSWFpDTEU5QlFVOHNhVUpCUVdsQ0xFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZET1VRc1QwRkJUeXhwUWtGQmFVSXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlEzUkZMRU5CUVVNc1EwRkRSanRKUVZkRUxFbEJRVWtzVFVGQlRTeEZRVU5XTzFGQlEwTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03WVVGRFlpeE5RVUZOTEVOQlFVTTdXVUZEVUN4TlFVRk5PMWxCUTA0c1lVRkJZVHRaUVVOaUxGVkJRVlU3V1VGRFZpeFpRVUZaTzFsQlExb3NWVUZCVlR0WlFVTldMR2RDUVVGblFqdFpRVU5vUWl4WFFVRlhPMWxCUTFnc1kwRkJZenRaUVVOa0xHZENRVUZuUWp0WlFVVm9RaXhwUWtGQmFVSTdXVUZEYWtJc1MwRkJTenRaUVVOTUxGVkJRVlU3V1VGRlZpeHhRa0ZCY1VJN1UwRkRja0lzUTBGQlF6dGhRVU5FTEU5QlFVOHNRMEZCUXl4VlFVRlZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN6dFpRVVZ5UXl4SlFVRkpMRTlCUVU4c1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEZkQlFWY3NSVUZEZUVNN1owSkJRME1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRTlCUVU4c1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGRrVTdVVUZEUml4RFFVRkRMRU5CUVVNc1EwRkRSanRMUVVORU8wbEJSVVFzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEV0R0UlFVTkRMRWxCUTBFN1dVRkRReXhKUVVGSkxFVkJRVVVzUjBGQlJ6dG5Ra0ZEVWl4cFFrRkJhVUk3WjBKQlJXcENMRmRCUVZjN1owSkJRMWdzV1VGQldUdG5Ra0ZEV2l4WlFVRlpPMmRDUVVWYUxHRkJRV0U3WjBKQlJXSXNNRUpCUVRCQ08yZENRVVV4UWl3eVFrRkJNa0k3WjBKQlF6TkNMRGhDUVVFNFFqdGhRVU01UWl4RFFVRkRPMWxCUlVZc1MwRkJTeXhKUVVGSkxFbEJRVWtzU1VGQlNTeEZRVUZGTEVWQlEyNUNPMmRDUVVORExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVVnlReXhKUVVGSkxFOUJRVThzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRmRCUVZjc1JVRkRlRU03YjBKQlEwTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeDFRa0ZCZFVJc1NVRkJTU3haUVVGWkxFTkJRVU1zUTBGQlF6dHZRa0ZGZEVVc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0cFFrRkRia0k3WVVGSFJEdFRRVU5FTzFGQlEwUXNUMEZCVHl4RFFVRkRMRVZCUTFJN1dVRkRReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJwQ08wdEJRMFE3U1VGRlJDeEpRVUZKTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1NVRkZNMElzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVTm1PMUZCUTBNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVTTVRanRaUVVORExHVkJRV1VzUjBGQlJ5eExRVUZMTEVOQlFVTTdVMEZEZUVJN1lVRkRTU3hKUVVGSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SlFVRkpMR05CUVdNc1JVRkRjRVE3V1VGRFF5eGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUTNaQ08yRkJRMGtzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1NVRkJTU3hqUVVGakxFVkJRM0JFTzFsQlEwTXNaVUZCWlN4SFFVRkhMRXRCUVVzc1EwRkJRenRUUVVONFFqdExRVU5FTzFOQlEwa3NTVUZCU1N4TlFVRk5MRVZCUTJZN1VVRkRReXhsUVVGbExFZEJRVWNzUzBGQlN5eERRVUZETzB0QlEzaENPMGxCUlVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETzBsQlJXcENMRWxCUVVrc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkZiRU1zVFVGQlRTeERRVUZETEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCVXl4RFFVRkRPMGxCUlhCRExFOUJRVTg3VTBGRFRDeFBRVUZQTEVOQlFVTXNWVUZCVlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXM3VVVGRmNrTXNTVUZCU1N4UFFVRlBMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NWMEZCVnl4RlFVTXhRenRaUVVORExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEycERPMUZCUlVRc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmRFTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU53UWl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGRFJqdEpRVVZaTEdOQlFVc3NSMEZCWVN4UFFVRlBMRU5CUVVNN1NVRkRNVUlzZFVKQlFXTXNSMEZCUnl4bFFVRmxMRU5CUVVNN1NVRkRha01zWTBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVVTFRaXhOUVVGTkxFTkJRVU1zV1VGQldTeEhRVUZITEU5QlFVOHNXVUZCV1N4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1RVRkJUU3hMUVVGTExGZEJRVmM3VVVGRGVFY3NRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkRVaXhEUVVGRExFTkJRVU1zUzBGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUTFZN1NVRkZSQ3hUUVVGblFpeEpRVUZKTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVVjc1NVRkJTVHRSUVVVelF5eEpRVUZKTEU5QlFVOHNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxGVkJRVlVzUlVGRGRrTTdXVUZEUXl4UFFVRlBMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpGRU8yRkJRMGtzU1VGQlNTeFBRVUZQTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hYUVVGWExFVkJRemRETzFsQlEwTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFMUJRVTBzWlVGQlpTeERRVUZETEVOQlFVTTdVMEZETjBNN1VVRkZSQ3hQUVVGUExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJXbVVzWVVGQlNTeFBRVmx1UWl4RFFVRkJPMGxCUlVRc1UwRkJaMElzVVVGQlVTeERRVUZETEUxQlFXTTdVVUZGZEVNc1NVRkJTU3hQUVVGUExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4VlFVRlZMRVZCUTNaRE8xbEJRME1zVDBGQlR5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1UwRkRkRUk3VVVGRlJDeFBRVUZQTEVsQlFVa3NVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF6dEpRVkpsTEdsQ1FVRlJMRmRCVVhaQ0xFTkJRVUU3UVVGRFJpeERRVUZETEVWQmVrMVRMRTFCUVUwc1MwRkJUaXhOUVVGTkxGRkJlVTFtTzBGQlJVUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzN1NVRkZha1FzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRE4wSTdVVUZEUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVOMFF6dEJRVU5HTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJaU3hEUVVGRExFOUJRVThzUjBGQlNTeE5RVUZsTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVdNc1EwRkJRenRCUVVWMFJDeFJRVUZCTEV0QlFVc3NSMEZCVXl4TlFVRmpMRU5CUVVNN1FVRkZNVU1zYTBKQlFXZENMR0ZCUVdNc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nUTNKbFlYUmxaQ0JpZVNCMWMyVnlJRzl1SURJd01UY3ZNVEV2TWpZdk1ESTJMbHh1SUNvdlhHNWNiaThxS2x4dUlDb2dRSE5sWlNCb2RIUndjem92TDNkcGEya3VaM0psWVhObGMzQnZkQzV1WlhRdlIzSmxZWE5sYlc5dWEyVjVYMDFoYm5WaGJEcEJVRWxjYmlBcUwxeHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpSMDFjYm50Y2JseDBhVzVtYnpvZ1NVbHVabThzWEc1Y2JseDBaR1ZzWlhSbFZtRnNkV1VvYm1GdFpUb2djM1J5YVc1bktUdGNibHh1WEhSblpYUldZV3gxWlR4VUxDQlZQaWh1WVcxbE9pQnpkSEpwYm1jc0lHUmxabUYxYkhSV1lXeDFaVDg2SUZVcE9pQlZPMXh1WEc1Y2RHeHBjM1JXWVd4MVpYTW9LVG9nYzNSeWFXNW5XMTA3WEc1Y2JseDBjMlYwVm1Gc2RXVThWQ3dnVlQ0b2JtRnRaVG9nYzNSeWFXNW5MQ0IyWVd4MVpUb2dWU2s3WEc1Y2JseDBaMlYwVW1WemIzVnlZMlZWY213b2NtVnpiM1Z5WTJWT1lXMWxPaUJ6ZEhKcGJtY3BPaUJ6ZEhKcGJtYzdYRzVjYmx4MGIzQmxia2x1VkdGaUtIVnliRG9nYzNSeWFXNW5MQ0J2Y0dWdVgybHVYMkpoWTJ0bmNtOTFibVEvT2lCaWIyOXNaV0Z1S1RvZ1YybHVaRzkzTzF4dVhHNWNkSE5sZEVOc2FYQmliMkZ5WkNoMFpYaDBPaUJ6ZEhKcGJtY3BPMXh1WEc1Y2RIaHRiR2gwZEhCU1pYRjFaWE4wS0c5d2RHbHZibk02SUVkTldFMU1TSFIwY0ZKbGNYVmxjM1JQY0hScGIyNXpLVG9nUjAxWVRVeElkSFJ3VW1WeGRXVnpkRkpsYzNWc2REdGNibHh1WEhSblpYUlNaWE52ZFhKalpWUmxlSFFvY21WemIzVnlZMlZPWVcxbE9pQnpkSEpwYm1jcE9pQnpkSEpwYm1jN1hHNWNibHgwYkc5bktHMWxjM05oWjJVNklHRnVlU2s3WEc1Y2JseDBZV1JrVTNSNWJHVW9ZM056T2lCemRISnBibWNwTzF4dVhHNWNkSEpsWjJsemRHVnlUV1Z1ZFVOdmJXMWhibVFvWTJGd2RHbHZiam9nYzNSeWFXNW5MQ0JqYjIxdFlXNWtSblZ1WXpvZ1JuVnVZM1JwYjI0c0lHRmpZMlZ6YzB0bGVUODZJSE4wY21sdVp5azdYRzU5WEc1Y2JtUmxZMnhoY21VZ1kyOXVjM1FnUjAwNklFbEhUVHRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCSlFYQnBJR1Y0ZEdWdVpITWdTVWROWEc1N1hHNWNkRWROUHpvZ1NVZE5PMXh1WEc1Y2RFZE5YMmx1Wm04NklFbEpibVp2TEZ4dVhHNWNkRWROWDJSbGJHVjBaVlpoYkhWbEtHNWhiV1U2SUhOMGNtbHVaeWs3WEc1Y2JseDBSMDFmWjJWMFZtRnNkV1U4VkN3Z1ZUNG9ibUZ0WlRvZ2MzUnlhVzVuTENCa1pXWmhkV3gwVm1Gc2RXVS9PaUJWS1RvZ1ZUdGNibHh1WEhSSFRWOXNhWE4wVm1Gc2RXVnpLQ2s2SUhOMGNtbHVaMXRkTzF4dVhHNWNkRWROWDNObGRGWmhiSFZsUEZRc0lGVStLRzVoYldVNklITjBjbWx1Wnl3Z2RtRnNkV1U2SUZVcE8xeHVYRzVjZEVkTlgyZGxkRkpsYzI5MWNtTmxWWEpzS0hKbGMyOTFjbU5sVG1GdFpUb2djM1J5YVc1bktUb2djM1J5YVc1bk8xeHVYRzVjZEVkTlgyOXdaVzVKYmxSaFlpaDFjbXc2SUhOMGNtbHVaeXdnYjNCbGJsOXBibDlpWVdOclozSnZkVzVrUHpvZ1ltOXZiR1ZoYmlrNklGZHBibVJ2ZHp0Y2JseHVYSFJIVFY5elpYUkRiR2x3WW05aGNtUW9kR1Y0ZERvZ2MzUnlhVzVuS1R0Y2JseHVYSFJIVFY5NGJXeG9kSFJ3VW1WeGRXVnpkQ2h2Y0hScGIyNXpPaUJIVFZoTlRFaDBkSEJTWlhGMVpYTjBUM0IwYVc5dWN5azZJRWROV0UxTVNIUjBjRkpsY1hWbGMzUlNaWE4xYkhRN1hHNWNibHgwUjAxZloyVjBVbVZ6YjNWeVkyVlVaWGgwS0hKbGMyOTFjbU5sVG1GdFpUb2djM1J5YVc1bktUb2djM1J5YVc1bk8xeHVYRzVjZEVkTlgyeHZaenhVUGlodFpYTnpZV2RsT2lCVUtUdGNibHh1WEhSSFRWOWhaR1JUZEhsc1pTaGpjM002SUhOMGNtbHVaeWs3WEc1Y2JseDBSMDFmY21WbmFYTjBaWEpOWlc1MVEyOXRiV0Z1WkNoallYQjBhVzl1T2lCemRISnBibWNzSUdOdmJXMWhibVJHZFc1ak9pQkdkVzVqZEdsdmJpd2dZV05qWlhOelMyVjVQem9nYzNSeWFXNW5LVHRjYmx4dVhIUjFibk5oWm1WWGFXNWtiM2M2SUZkcGJtUnZkenRjYm4xY2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpWR0Z0Y0dWeWJXOXVhMlY1UjAxY2JudGNibHgwYVc1bWJ6b2dTVlJoYlhCbGNtMXZibXRsZVVsdVptODdYRzVjYmx4MGJtOTBhV1pwWTJGMGFXOXVQeXhjYmx4dVhIUm5aWFJVWVdJL0xGeHVYSFJ6WVhabFZHRmlQeXhjYmx4MFoyVjBWR0ZpY3o4c1hHNWNibHgwWkc5M2JteHZZV1EvTEZ4dVhHNWNkSFZ1Y21WbmFYTjBaWEpOWlc1MVEyOXRiV0Z1WkQ4c1hHNWNibHgwWVdSa1ZtRnNkV1ZEYUdGdVoyVk1hWE4wWlc1bGNqOHNYRzVjZEhKbGJXOTJaVlpoYkhWbFEyaGhibWRsVEdsemRHVnVaWEkvTEZ4dWZWeHVYRzR2S2lwY2JpQXFJRUJ6WldVZ2FIUjBjRG92TDNSaGJYQmxjbTF2Ym10bGVTNXVaWFF2Wkc5amRXMWxiblJoZEdsdmJpNXdhSEJjYmlBcUwxeHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpWR0Z0Y0dWeWJXOXVhMlY1WEc1N1hHNWNkRWROWDJsdVptODZJRWxVWVcxd1pYSnRiMjVyWlhsSmJtWnZPMXh1WEc1Y2RFZE5YMjl3Wlc1SmJsUmhZaWgxY213NklITjBjbWx1Wnl3Z2JHOWhaRWx1UW1GamEyZHliM1Z1WkQ4NklHSnZiMnhsWVc0cE8xeHVYRzVjZEVkTlgyOXdaVzVKYmxSaFlpaDFjbXc2SUhOMGNtbHVaeXdnYjNCMGFXOXVjejg2SUdGdWVTazdYRzVjYmx4MFIwMWZibTkwYVdacFkyRjBhVzl1S0hSbGVIUTZJSE4wY21sdVp5d2dkR2wwYkdVL09pQnpkSEpwYm1jc0lHbHRZV2RsUHpvZ2MzUnlhVzVuTENCdmJtTnNhV05yUHlrN1hHNWNibHgwUjAxZmJtOTBhV1pwWTJGMGFXOXVLR1JsZEdGcGJITTZJSHRjYmx4MFhIUjBaWGgwUHpvZ2MzUnlhVzVuTEZ4dVhIUmNkSFJwZEd4bFB6b2djM1J5YVc1bkxGeHVYSFJjZEdsdFlXZGxQem9nYzNSeWFXNW5MRnh1WEhSY2RHaHBaMmhzYVdkb2REODZJR0p2YjJ4bFlXNHNYRzVjZEZ4MGRHbHRaVzkxZEQ4NklHNTFiV0psY2l4Y2JseDBYSFJ2Ym1SdmJtVS9MRnh1WEhSY2RHOXVZMnhwWTJzL0xGeHVYSFI5TENCdmJtUnZibVUvS1R0Y2JseHVYSFJIVFY5blpYUlVZV0lvWTJJcE8xeHVYRzVjZEVkTlgzTmhkbVZVWVdJb2RHRmlLVHRjYmx4dVhIUkhUVjluWlhSVVlXSnpLR05pS1R0Y2JseHVYSFJIVFY5a2IzZHViRzloWkNoMWNtdzZJSE4wY21sdVp5d2dibUZ0WlQ4NklITjBjbWx1WnlrN1hHNWNibHgwUjAxZlpHOTNibXh2WVdRb1pHVjBZV2xzY3pvZ2UxeHVYSFJjZEhWeWJEb2djM1J5YVc1bkxGeHVYSFJjZEc1aGJXVS9PaUJ6ZEhKcGJtY3NYRzVjZEZ4MGFHVmhaR1Z5Y3o4c1hHNWNkRngwYzJGMlpVRnpQem9nWW05dmJHVmhiaXhjYmx4MFhIUnZibXh2WVdRL0xGeHVYSFJjZEc5dVpYSnliM0kvTEZ4dVhIUjlLVHRjYmx4dVhIUkhUVjkxYm5KbFoybHpkR1Z5VFdWdWRVTnZiVzFoYm1Rb2JXVnVkVU50WkVsa0tUdGNibHh1WEhSSFRWOWhaR1JXWVd4MVpVTm9ZVzVuWlV4cGMzUmxibVZ5S0c1aGJXVXNJR05pT2lCSlIwMWZZV1JrVm1Gc2RXVkRhR0Z1WjJWTWFYTjBaVzVsY2tadUtUdGNibHh1WEhSSFRWOXlaVzF2ZG1WV1lXeDFaVU5vWVc1blpVeHBjM1JsYm1WeUtHeHBjM1JsYm1WeVgybGtLVHRjYm4xY2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpSMDFmWVdSa1ZtRnNkV1ZEYUdGdVoyVk1hWE4wWlc1bGNrWnVJR1Y0ZEdWdVpITWdSblZ1WTNScGIyNWNibnRjYmx4MEtHNWhiV1U2SUhOMGNtbHVaeXdnYjJ4a1gzWmhiSFZsTENCdVpYZGZkbUZzZFdVc0lISmxiVzkwWlRvZ1ltOXZiR1ZoYmlrN1hHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnU1ZSaGJYQmxjbTF2Ym10bGVVbHVabThnWlhoMFpXNWtjeUJKU1c1bWIxeHVlMXh1WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdTVUZ3YVNCbGVIUmxibVJ6SUVsVVlXMXdaWEp0YjI1clpYa3NJRWxVWVcxd1pYSnRiMjVyWlhsSFRWeHVlMXh1WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdTVUZ3YVZ4dWUxeHVYSFJIVFVGd2FUb2dTVUZ3YVR0Y2JseDBaR1ZtWVhWc2REb2dTVUZ3YVR0Y2JseHVYSFJwYzFSaGJYQmxjbTF2Ym10bGVUb2dZbTl2YkdWaGJqdGNibHgwYUdGelIwMDZJR0p2YjJ4bFlXNDdYRzVjYmx4MFgyeHBjM1E2SUhOMGNtbHVaMXRkTzF4dVhHNWNkR05oYkd3b2JXVjBhRzlrT2lCemRISnBibWNzSUM0dUxtRnlaM1lwTzF4dVhHNWNkR05oYkd4VFlXWmxLRzFsZEdodlpEb2djM1J5YVc1bktUb2dSblZ1WTNScGIyNDdYRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1NVbHVabTljYm50Y2JseDBjMk55YVhCMFB6b2dlMXh1WEhSY2RHUmxjMk55YVhCMGFXOXVQem9nYzNSeWFXNW5PMXh1WEhSY2RHVjRZMngxWkdWelB6b2djM1J5YVc1blcxMDdYRzVjZEZ4MGFXNWpiSFZrWlhNL09pQnpkSEpwYm1kYlhUdGNibHgwWEhSdFlYUmphR1Z6UHpvZ2MzUnlhVzVuVzEwN1hHNWNkRngwYm1GdFpUODZJSE4wY21sdVp6dGNibHgwWEhSdVlXMWxjM0JoWTJVL09pQnpkSEpwYm1jN1hHNWNkRngwY21WemIzVnlZMlZ6UHpvZ1QySnFaV04wTzF4dVhIUmNkRndpY25WdUxXRjBYQ0kvT2lCemRISnBibWM3WEc1Y2RGeDBkVzUzY21Gd1B6b2dZbTl2YkdWaGJqdGNibHgwWEhSMlpYSnphVzl1UHpvZ2MzUnlhVzVuTzF4dVhIUjlPMXh1WEhSelkzSnBjSFJOWlhSaFUzUnlQem9nYzNSeWFXNW5PMXh1WEhSelkzSnBjSFJYYVd4c1ZYQmtZWFJsUHpvZ1ltOXZiR1ZoYmp0Y2JseDBkbVZ5YzJsdmJqODZJSE4wY21sdVp6dGNibHh1WEhSYmFXNWtaWGc2SUhOMGNtbHVaMTA2SUdGdWVUdGNibHh1WEhSelkzSnBjSFJJWVc1a2JHVnlQem9nYzNSeWFXNW5PMXh1ZlZ4dVhHNXVZVzFsYzNCaFkyVWdYMGROUVhCcFhHNTdYRzVjZEdSbFkyeGhjbVVnWTI5dWMzUWdYMGROUVhCcE9pQkpRWEJwTzF4dVhHNWNkR3hsZENCZmFHRnpSMDBnUFNCMGVYQmxiMllnUjAwZ0lUMDlJQ2QxYm1SbFptbHVaV1FuTzF4dVhHNWNkR3hsZENCZllTQTlJRnRjYmx4MFhIUW5SMDFmYVc1bWJ5Y3NYRzVjYmx4MFhIUW5SMDFmWkdWc1pYUmxWbUZzZFdVbkxGeHVYSFJjZENkSFRWOW5aWFJXWVd4MVpTY3NYRzVjZEZ4MEowZE5YM05sZEZaaGJIVmxKeXhjYmx4MFhIUW5SMDFmYkdsemRGWmhiSFZsY3ljc1hHNWNibHgwWEhRblIwMWZiM0JsYmtsdVZHRmlKeXhjYmx4dVhIUmNkQ2RIVFY5elpYUkRiR2x3WW05aGNtUW5MRnh1WEc1Y2RGeDBKMGROWDNodGJHaDBkSEJTWlhGMVpYTjBKeXhjYmx4MFhIUW5SMDFmWjJWMFVtVnpiM1Z5WTJWVVpYaDBKeXhjYmx4dVhIUmNkQ2RIVFY5c2IyY25MRnh1WEc1Y2RGeDBKMGROWDJGa1pGTjBlV3hsSnl4Y2JseDBYSFFuUjAxZmNtVm5hWE4wWlhKTlpXNTFRMjl0YldGdVpDY3NYRzVjZEYwN1hHNWNibHgwWm05eUlDaHNaWFFnYm1GdFpTQnZaaUJmWVNsY2JseDBlMXh1WEhSY2RHeGxkQ0JtYmlBOUlHVjJZV3dvWUNoMGVYQmxiMllnSkh0dVlXMWxmU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJRDhnSkh0dVlXMWxmU0E2SUhadmFXUW9NQ2xnS1R0Y2JseHVYSFJjZEY5SFRVRndhVnR1WVcxbExuSmxjR3hoWTJVb0wxNUhUVjh2TENBbkp5bGRJRDBnWm00N1hHNWNibHgwWEhRdkwyTnZibk52YkdVdWJHOW5LRzVoYldVc0lHWnVLVHRjYmx4MGZWeHVYRzVjZEM4dlgwZE5RWEJwTG1sdVptOGdQU0IwZVhCbGIyWWdSMDFmYVc1bWJ5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QkhUVjlwYm1adklEb2dkbTlwWkNnd0tUdGNibHgwTHk5ZlIwMUJjR2t1WkdWc1pYUmxWbUZzZFdVZ1BTQjBlWEJsYjJZZ1IwMWZaR1ZzWlhSbFZtRnNkV1VnSVQwOUlDZDFibVJsWm1sdVpXUW5JRDhnUjAxZlpHVnNaWFJsVm1Gc2RXVWdPaUIyYjJsa0tEQXBPMXh1WEhRdkwxOUhUVUZ3YVM1blpYUldZV3gxWlNBOUlIUjVjR1Z2WmlCSFRWOW5aWFJXWVd4MVpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QkhUVjluWlhSV1lXeDFaU0E2SUhadmFXUW9NQ2s3WEc1Y2RDOHZYMGROUVhCcExteHBjM1JXWVd4MVpYTWdQU0IwZVhCbGIyWWdSMDFmYkdsemRGWmhiSFZsY3lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCSFRWOXNhWE4wVm1Gc2RXVnpJRG9nZG05cFpDZ3dLVHRjYmx4MEx5OWZSMDFCY0drdWMyVjBWbUZzZFdVZ1BTQjBlWEJsYjJZZ1IwMWZjMlYwVm1Gc2RXVWdJVDA5SUNkMWJtUmxabWx1WldRbklEOGdSMDFmYzJWMFZtRnNkV1VnT2lCMmIybGtLREFwTzF4dVhIUmZSMDFCY0drdVoyVjBVbVZ6YjNWeVkyVlZjbXdnUFNBb1hHNWNkRngwTHk4Z1FIUnpMV2xuYm05eVpWeHVYSFJjZEhSNWNHVnZaaUJIVFY5blpYUlNaWE52ZFhKalpWVnliQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJIVFY5blpYUlNaWE52ZFhKalpWVnliQ0E2SUNoY2JseDBYSFJjZEhSNWNHVnZaaUJIVFY5blpYUlNaWE52ZFhKalpWVlNUQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJIVFY5blpYUlNaWE52ZFhKalpWVlNUQ0E2SUhadmFXUW9NQ2xjYmx4MFhIUXBLVnh1WEhRN1hHNWNkQzh2WDBkTlFYQnBMbTl3Wlc1SmJsUmhZaUE5SUhSNWNHVnZaaUJIVFY5dmNHVnVTVzVVWVdJZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z1IwMWZiM0JsYmtsdVZHRmlJRG9nZG05cFpDZ3dLVHRjYmx4MEx5OWZSMDFCY0drdWMyVjBRMnhwY0dKdllYSmtJRDBnZEhsd1pXOW1JRWROWDNObGRFTnNhWEJpYjJGeVpDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QkhUVjl6WlhSRGJHbHdZbTloY21RZ09pQjJiMmxrS0RBcE8xeHVYSFF2TDE5SFRVRndhUzU0Yld4b2RIUndVbVZ4ZFdWemRDQTlJSFI1Y0dWdlppQkhUVjk0Yld4b2RIUndVbVZ4ZFdWemRDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QkhUVjk0Yld4b2RIUndVbVZ4ZFdWemRDQTZJSFp2YVdRb01DazdYRzVjYmx4MEx5OWZSMDFCY0drdVoyVjBVbVZ6YjNWeVkyVlVaWGgwSUQwZ2RIbHdaVzltSUVkTlgyZGxkRkpsYzI5MWNtTmxWR1Y0ZENBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCSFRWOW5aWFJTWlhOdmRYSmpaVlJsZUhRZ09pQjJiMmxrS0RBcE8xeHVYSFF2TDE5SFRVRndhUzVzYjJjZ1BTQjBlWEJsYjJZZ1IwMWZiRzluSUNFOVBTQW5kVzVrWldacGJtVmtKeUEvSUVkTlgyeHZaeUE2SUhadmFXUW9NQ2s3WEc1Y2RDOHZYMGROUVhCcExtRmtaRk4wZVd4bElEMGdkSGx3Wlc5bUlFZE5YMkZrWkZOMGVXeGxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QS9JRWROWDJGa1pGTjBlV3hsSURvZ2RtOXBaQ2d3S1R0Y2JseHVYSFF2TDE5SFRVRndhUzV5WldkcGMzUmxjazFsYm5WRGIyMXRZVzVrSUQwZ2RIbHdaVzltSUVkTlgzSmxaMmx6ZEdWeVRXVnVkVU52YlcxaGJtUWdJVDA5SUNkMWJtUmxabWx1WldRbklEOGdSMDFmY21WbmFYTjBaWEpOWlc1MVEyOXRiV0Z1WkNBNklIWnZhV1FvTUNrN1hHNWNibHgwYVdZZ0tGOW9ZWE5IVFNsY2JseDBlMXh1WEhSY2RFOWlhbVZqZEM1clpYbHpLRWROS1Z4dVhIUmNkRngwTG1OdmJtTmhkQ2hiWEc1Y2RGeDBYSFJjZENkcGJtWnZKeXhjYmx4MFhIUmNkRngwSjJSbGJHVjBaVlpoYkhWbEp5eGNibHgwWEhSY2RGeDBKMmRsZEZaaGJIVmxKeXhjYmx4MFhIUmNkRngwSjJ4cGMzUldZV3gxWlhNbkxGeHVYSFJjZEZ4MFhIUW5jMlYwVm1Gc2RXVW5MRnh1WEhSY2RGeDBYSFFuWjJWMFVtVnpiM1Z5WTJWVmNtd25MRnh1WEhSY2RGeDBYSFFuYjNCbGJrbHVWR0ZpSnl4Y2JseDBYSFJjZEZ4MEozTmxkRU5zYVhCaWIyRnlaQ2NzWEc1Y2RGeDBYSFJjZENkNGJXeElkSFJ3VW1WeGRXVnpkQ2NzWEc1Y2JseDBYSFJjZEZ4MEoyZGxkRkpsYzI5MWNtTmxWR1Y0ZENjc1hHNWNkRngwWEhSY2RDZHNiMmNuTEZ4dVhIUmNkRngwWEhRbllXUmtVM1I1YkdVbkxGeHVYRzVjZEZ4MFhIUmNkQ2R5WldkcGMzUmxjazFsYm5WRGIyMXRZVzVrSnl4Y2JseDBYSFJjZEYwcFhHNWNkRngwWEhRdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2RtRnNkV1VzSUdsdVpHVjRMQ0JoY25KaGVTbGNibHgwWEhSY2RIdGNibHgwWEhSY2RGeDBhV1lnS0hSNWNHVnZaaUJmUjAxQmNHbGJkbUZzZFdWZElEMDlQU0FuZFc1a1pXWnBibVZrSnlsY2JseDBYSFJjZEZ4MGUxeHVYSFJjZEZ4MFhIUmNkRjlIVFVGd2FWdDJZV3gxWlYwZ1BTQjBlWEJsYjJZZ1IwMWJkbUZzZFdWZElDRTlQU0FuZFc1a1pXWnBibVZrSnlBL0lFZE5XM1poYkhWbFhTQTZJSFp2YVdRb01DazdYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDBwWEc1Y2RGeDBPMXh1WEhSOVhHNWNibHgwYVdZZ0tDRmZhR0Z6UjAwcFhHNWNkSHRjYmx4MFhIUjBjbmxjYmx4MFhIUjdYRzVjZEZ4MFhIUnNaWFFnWDJFZ1BTQmJYRzVjZEZ4MFhIUmNkQ2RIVFY5dWIzUnBabWxqWVhScGIyNG5MRnh1WEc1Y2RGeDBYSFJjZENkSFRWOW5aWFJVWVdJbkxGeHVYSFJjZEZ4MFhIUW5SMDFmYzJGMlpWUmhZaWNzWEc1Y2RGeDBYSFJjZENkSFRWOW5aWFJVWVdKekp5eGNibHh1WEhSY2RGeDBYSFFuUjAxZlpHOTNibXh2WVdRbkxGeHVYRzVjZEZ4MFhIUmNkQ2RIVFY5MWJuSmxaMmx6ZEdWeVRXVnVkVU52YlcxaGJtUW5MRnh1WEc1Y2RGeDBYSFJjZENkSFRWOWhaR1JXWVd4MVpVTm9ZVzVuWlV4cGMzUmxibVZ5Snl4Y2JseDBYSFJjZEZ4MEowZE5YM0psYlc5MlpWWmhiSFZsUTJoaGJtZGxUR2x6ZEdWdVpYSW5MRnh1WEhSY2RGeDBYVHRjYmx4dVhIUmNkRngwWm05eUlDaHNaWFFnYm1GdFpTQnZaaUJmWVNsY2JseDBYSFJjZEh0Y2JseDBYSFJjZEZ4MGJHVjBJSFpoYkhWbElEMGdibUZ0WlM1eVpYQnNZV05sS0M5ZVIwMWZMeXdnSnljcE8xeHVYRzVjZEZ4MFhIUmNkR2xtSUNoMGVYQmxiMllnWDBkTlFYQnBXM1poYkhWbFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcFhHNWNkRngwWEhSY2RIdGNibHgwWEhSY2RGeDBYSFJzWlhRZ1ptNGdQU0JsZG1Gc0tHQW9kSGx3Wlc5bUlDUjdibUZ0WlgwZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NBL0lDUjdibUZ0WlgwZ09pQjJiMmxrS0RBcFlDazdYRzVjYmx4MFhIUmNkRngwWEhSZlIwMUJjR2xiZG1Gc2RXVmRJRDBnWm00N1hHNWNkRngwWEhSY2RIMWNibHh1WEhSY2RGeDBYSFF2TDJOdmJuTnZiR1V1Ykc5bktHNWhiV1VzSUdadUtUdGNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkRngwWTJGMFkyZ2dLR1VwWEc1Y2RGeDBlMXh1WEhSY2RGeDBZMjl1YzI5c1pTNWxjbkp2Y2lobEtUdGNibHgwWEhSOVhHNWNkSDFjYmx4dVhIUnNaWFFnWDJselZHRnRjR1Z5Ylc5dWEyVjVJRDBnYm5Wc2JEdGNibHh1WEhScFppQW9YMGROUVhCcExtbHVabThwWEc1Y2RIdGNibHgwWEhScFppQW9JVjlIVFVGd2FTNXBibVp2TG5OamNtbHdkRWhoYm1Sc1pYSXBYRzVjZEZ4MGUxeHVYSFJjZEZ4MFgybHpWR0Z0Y0dWeWJXOXVhMlY1SUQwZ1ptRnNjMlU3WEc1Y2RGeDBmVnh1WEhSY2RHVnNjMlVnYVdZZ0tGOUhUVUZ3YVM1cGJtWnZMbk5qY21sd2RFaGhibVJzWlhJZ1BUMGdKMVJoYlhCbGNtMXZibXRsZVNjcFhHNWNkRngwZTF4dVhIUmNkRngwWDJselZHRnRjR1Z5Ylc5dWEyVjVJRDBnZEhKMVpUdGNibHgwWEhSOVhHNWNkRngwWld4elpTQnBaaUFvWDBkTlFYQnBMbWx1Wm04dWMyTnlhWEIwU0dGdVpHeGxjaUE5UFNBblIzSmxZWE5sYlc5dWEyVjVKeWxjYmx4MFhIUjdYRzVjZEZ4MFhIUmZhWE5VWVcxd1pYSnRiMjVyWlhrZ1BTQm1ZV3h6WlR0Y2JseDBYSFI5WEc1Y2RIMWNibHgwWld4elpTQnBaaUFvWDJoaGMwZE5LVnh1WEhSN1hHNWNkRngwWDJselZHRnRjR1Z5Ylc5dWEyVjVJRDBnWm1Gc2MyVTdYRzVjZEgxY2JseHVYSFJzWlhRZ1gzUmZiR2x6ZENBOUlGdGRPMXh1WEc1Y2RHeGxkQ0JmZEY5clpYbHpJRDBnVDJKcVpXTjBMbXRsZVhNb1gwZE5RWEJwS1R0Y2JseHVYSFJmUjAxQmNHa3VSMDBnUFNCZmFHRnpSMDBnUHlCSFRTQTZJSHQ5SUdGeklFbEhUVHRjYmx4dVhIUmZkRjlyWlhselhHNWNkRngwTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0haaGJIVmxMQ0JwYm1SbGVDd2dZWEp5WVhrcFhHNWNkRngwZTF4dVhIUmNkRngwYVdZZ0tIUjVjR1Z2WmlCZlIwMUJjR2t1UjAxYmRtRnNkV1ZkSUQwOUlDZDFibVJsWm1sdVpXUW5LVnh1WEhSY2RGeDBlMXh1WEhSY2RGeDBYSFJmUjAxQmNHa3VSMDFiZG1Gc2RXVmRJRDBnWDBkTlFYQnBXM1poYkhWbFhUdGNibHgwWEhSY2RIMWNibHh1WEhSY2RGeDBYMGROUVhCcFd5ZEhUVjhuSUNzZ2RtRnNkV1ZkSUQwZ1gwZE5RWEJwVzNaaGJIVmxYVHRjYmx4dVhIUmNkRngwWDNSZmJHbHpkQzV3ZFhOb0tIWmhiSFZsS1R0Y2JseDBYSFJjZEY5MFgyeHBjM1F1Y0hWemFDZ25SMDFmSnlBcklIWmhiSFZsS1R0Y2JseDBYSFI5S1Z4dVhIUTdYRzVjYmx4MFpYaHdiM0owSUdOdmJuTjBJRjlzYVhOME9pQnpkSEpwYm1kYlhTQTlJRjkwWDJ4cGMzUTdYRzVjZEdWNGNHOXlkQ0JqYjI1emRDQnBjMVJoYlhCbGNtMXZibXRsZVNBOUlGOXBjMVJoYlhCbGNtMXZibXRsZVR0Y2JseDBaWGh3YjNKMElHTnZibk4wSUdoaGMwZE5JRDBnWDJoaGMwZE5PMXh1WEc1Y2RGOUhUVUZ3YVM1MWJuTmhabVZYYVc1a2IzY2dQU0IwZVhCbGIyWWdkVzV6WVdabFYybHVaRzkzSUNFOVBTQW5kVzVrWldacGJtVmtKeUEvSUhWdWMyRm1aVmRwYm1SdmR5QTZJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSjF4dVhIUmNkRDhnZDJsdVpHOTNYRzVjZEZ4ME9pQjJiMmxrS0RBcEtWeHVYSFE3WEc1Y2JseDBaWGh3YjNKMElHWjFibU4wYVc5dUlHTmhiR3dvYldWMGFHOWtPaUJ6ZEhKcGJtY3NJQzR1TG1GeVozWXBYRzVjZEh0Y2JseDBYSFJwWmlBb2RIbHdaVzltSUY5SFRVRndhVnR0WlhSb2IyUmRJRDA5SUNkbWRXNWpkR2x2YmljcFhHNWNkRngwZTF4dVhIUmNkRngwY21WMGRYSnVJRjlIVFVGd2FWdHRaWFJvYjJSZExtTmhiR3dvWDBkTlFYQnBXeWRIVFNkZElIeDhJRzUxYkd3c0lDNHVMbUZ5WjNZcE8xeHVYSFJjZEgxY2JseDBYSFJsYkhObElHbG1JQ2gwZVhCbGIyWWdYMGROUVhCcFcyMWxkR2h2WkYwZ1BUMGdKM1Z1WkdWbWFXNWxaQ2NwWEc1Y2RGeDBlMXh1WEhSY2RGeDBZMjl1YzI5c1pTNTNZWEp1S0dCSFRVRndhUzRrZTIxbGRHaHZaSDBnYVhNZ2RXNWtaV1pwYm1Wa1lDazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUY5SFRVRndhVnR0WlhSb2IyUmRPMXh1WEhSOVhHNWNibHgwWlhod2IzSjBJR1oxYm1OMGFXOXVJR05oYkd4VFlXWmxLRzFsZEdodlpEb2djM1J5YVc1bktWeHVYSFI3WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUJmUjAxQmNHbGJiV1YwYUc5a1hTQTlQU0FuWm5WdVkzUnBiMjRuS1Z4dVhIUmNkSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmZSMDFCY0dsYmJXVjBhRzlrWFR0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdibVYzSUVaMWJtTjBhVzl1S0NrN1hHNWNkSDFjYm4xY2JseHVYMGROUVhCcExsOXNhWE4wTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0haaGJIVmxMQ0JwYm1SbGVDd2dZWEp5WVhrcFhHNTdYRzVjZEdsbUlDaDJZV3gxWlM1cGJtUmxlRTltS0NkSFRWOG5LU0E5UFNBd0tWeHVYSFI3WEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhOYmRtRnNkV1ZkSUQwZ1gwZE5RWEJwVzNaaGJIVmxYVHRjYmx4MGZWeHVmU2s3WEc1Y2JpaGZSMDFCY0drZ1lYTWdTVUZ3YVNrdVpHVm1ZWFZzZENBOUlDaGZSMDFCY0drZ1lYTWdTVUZ3YVNrdVIwMUJjR2tnUFNCZlIwMUJjR2tnWVhNZ1NVRndhVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRWROUVhCcE9pQkpRWEJwSUQwZ1gwZE5RWEJwSUdGeklFbEJjR2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoSFRVRndhU0JoY3lCSlFYQnBLVHRjYmlKZGZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwiLi4vaW5kZXhcIik7XG5jb25zdCBfR2xvYmFsID0ge1xuICAgIEdNQXBpOiBpbmRleF8xLkdNQXBpLFxufTtcbm1vZHVsZS5leHBvcnRzID0gX0dsb2JhbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVoyeHZZbUZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laMnh2WW1Gc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZIUVN4dlEwRkJhVU03UVVGRmFrTXNUVUZCVFN4UFFVRlBMRWRCUVVjN1NVRkRaaXhMUVVGTExFVkJRVXdzWVVGQlN6dERRVWxNTEVOQlFVTTdRVUZGUml4cFFrRkJVeXhQUVVGUExFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNiaUFxSUVOeVpXRjBaV1FnWW5rZ2RYTmxjaUJ2YmlBeU1ERTRMell2Tnk4d01EY3VYRzRnS2k5Y2JtbHRjRzl5ZENCN0lFZE5RWEJwSUgwZ1puSnZiU0FuTGk0dmFXNWtaWGduTzF4dVhHNWpiMjV6ZENCZlIyeHZZbUZzSUQwZ2UxeHVYSFJIVFVGd2FTeGNibjBnWVhNZ2UxeHVYSFJIVFVGd2FUb2dkSGx3Wlc5bUlFZE5RWEJwTEZ4dVhIUmJhem9nYzNSeWFXNW5YVG9nWVc1NUxGeHVmVHRjYmx4dVpYaHdiM0owSUQwZ1gwZHNiMkpoYkR0Y2JpSmRmUT09IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgVUkge1xyXG4gICBwdWJsaWMgY29udGV4dE1lbnVzOkNvbXRleHRNZW51W109W25ldyBDb210ZXh0TWVudSgpXTtcclxuICAgcHVibGljIGRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5OiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBkZWZhdWx0Q29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGRlZmF1bHRNb2RhbFF1ZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICBwdWJsaWMgaW5zdGFuY2VzQ2xhc3M6IHN0cmluZyA9IFwiaW5zdGFuY2VzXCI7XHJcbiAgIHB1YmxpYyBpdGVtc0NsYXNzOiBzdHJpbmcgPSBcIml0ZW1zLWlubmVyXCI7XHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRNb2RhbFF1ZXJ5ID0gXCIubW9kYWw6bnRoLWNoaWxkKDMpXCI7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzQnV0dG9uUXVlcnkgPSBcIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiAgIH1cclxuXHJcblxyXG4gICBvbk9ic2VydmluZ0luc3RhbmNlKGFwcGx5T25PbmVFbGVtZW50OiBhbnkpIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICgoPEhUTUxFbGVtZW50Pm5vZGUpLmlkICE9IFwiaW5zdGFuY2UtMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFwcGx5T25PbmVFbGVtZW50KG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGluc3RhbmNlT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuaW5zdGFuY2VzQ2xhc3MpWzBdLCB7XHJcbiAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgIH1cclxuICAgb25PYnNlcnZpbmdJdGVtcyhhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcblxyXG5cclxuXHJcblxyXG59O1xyXG5lbnVtIEFjdGlvblR5cGUge1xyXG4gICBcImJ1dHRvblwiLCBcImNoZWNrYm94XCJcclxufVxyXG5cclxuaW50ZXJmYWNlIEFjdGlvbkZvcm0ge1xyXG4gICB0ZXh0T246IHN0cmluZztcclxuICAgdGV4dE9mZj86IHN0cmluZztcclxuICAgZW1vamlPbj86c3RyaW5nO1xyXG4gICBlbW9qaU9mZj86c3RyaW5nO1xyXG4gICBoYW5kbGVyOiBhbnk7XHJcbiAgIGluaXRIYW5kbGVyPzogKHg6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgdHlwZTogQWN0aW9uVHlwZTtcclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb250ZXh0TWVudVVpT3B0aW9ucyB7XHJcbiAgIGNvbG9yQjogXCIjNTRDNTcxXCIsXHJcbiAgIGhlaWdodDogNDAsXHJcbiAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICB3aWR0aEJ1dHRvbjogNTBcclxuICAgLCBoZWlnaHRCdXR0b246IDIwLFxyXG4gICBib3JkZXJXaWR0aEJ1dHRvbjogMSxcclxuICAgcmFkaXVzOiA0LFxyXG4gICBtaW5XaWR0aDogMTAwLFxyXG4gICB4T2Zmc2V0OiAxMjAsXHJcbiAgIHhPZmZzZXRCdXR0b246IDIwLFxyXG4gICBwYWRkaW5nQnV0dG9uOiAxLFxyXG4gICBkdXJhdGlvbjogMVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIENvbXRleHRNZW51IHtcclxuICAgcHVibGljIHRyaWdnZXJUeXBlVmlzaWJsZTogc3RyaW5nID0gXCJtb3VzZW92ZXJcIjtcclxuICAgcHVibGljIHRyaWdnZXJUeXBlSW52aXNpYmxlOiBzdHJpbmcgPSBcIm1vdXNlbGVmdFwiO1xyXG4gICBwdWJsaWMgY29tcGxleFRyaWdnZXJJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgcHVibGljIGNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb246IGFueTtcclxuICAgcHVibGljIGNvbXBsZXhUcmlnZ2VyT3V0Q29uZGl0aW9uOiBhbnk7XHJcblxyXG4gICBwdWJsaWMgY29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCIuY29udGV4dE1lbnVcIjtcclxuICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbkZvcm1bXSA9IFtdO1xyXG5cclxuXHJcbiAgIHNldENvbXBsZXhUcmlnZ2VySW4oY29tcGxleDogYW55KSB7XHJcbiAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbiA9IGNvbXBsZXg7XHJcbiAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbiA9IHRydWU7XHJcbiAgIH1cclxuICAgc2V0Q29tcGxleFRyaWdnZXJPdXQoY29tcGxleDogYW55KSB7XHJcbiAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24gPSBjb21wbGV4O1xyXG4gICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgYWRkQWN0aW9uKGFjdGlvbjogQWN0aW9uRm9ybSkge1xyXG4gICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICB9XHJcbiAgIGFkZEFjdGlvbnMoYWN0aW9uczogQWN0aW9uRm9ybVtdKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKC4uLmFjdGlvbnMpO1xyXG4gICB9XHJcblxyXG5cclxuXHJcblxyXG4gICBidWlsZENvbnRleHRNZW51KGl0ZW06IGFueSwgZTogYW55LCBvcHRpb25zOiBDb250ZXh0TWVudVVpT3B0aW9ucyA9IHtcclxuICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAsIGhlaWdodEJ1dHRvbjogMjAsIGJvcmRlcldpZHRoQnV0dG9uOiAxLCByYWRpdXM6IDQsXHJcbiAgICAgIG1pbldpZHRoOiAxMDAsIHhPZmZzZXQ6IDEyMCwgeE9mZnNldEJ1dHRvbjogMjAsIHBhZGRpbmdCdXR0b246IDEsIGR1cmF0aW9uOiAxXHJcbiAgIH0pXHJcbnsgICBpZih0aGlzLmNvbXBsZXhUcmlnZ2VySW49PWZhbHNlKVxyXG4gICB7ICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmlnZ2VyVHlwZVZpc2libGUsKCk9PlxyXG4gICAgICB0aGlzLmJ1aWxkQ29udGV4dE1lbnVXaGVuVmlzaWJsZShpdGVtLGUsb3B0aW9ucylcclxuXHJcblxyXG4gICApO1xyXG4gICBcclxuICAgfWVsc2VcclxuICAge1xyXG5cclxuICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbihpdGVtKTtcclxuXHJcbiAgIH1cclxuICAgXHJcbn1cclxuXHJcbiAgIGJ1aWxkQ29udGV4dE1lbnVXaGVuVmlzaWJsZShpdGVtOiBhbnksIGU6IGFueSwgb3B0aW9uczogQ29udGV4dE1lbnVVaU9wdGlvbnMgPSB7XHJcbiAgICAgIGNvbG9yQjogXCIjNTRDNTcxXCIsIGhlaWdodDogNDAsIGJvcmRlcldpZHRoOiAyLCB3aWR0aEJ1dHRvbjogNTBcclxuICAgICAgLCBoZWlnaHRCdXR0b246IDIwLCBib3JkZXJXaWR0aEJ1dHRvbjogMSwgcmFkaXVzOiA0LFxyXG4gICAgICBtaW5XaWR0aDogMTAwLCB4T2Zmc2V0OiAxMjAsIHhPZmZzZXRCdXR0b246IDIwLCBwYWRkaW5nQnV0dG9uOiAxLCBkdXJhdGlvbjogMVxyXG4gICB9LCB6SW5kZXggPSAxMDAwKSB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gICAgICBsZXQgY29uTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGV4dE1lbnVRdWVyeSk7XHJcblxyXG4gICAgICBpZiAoY29uTWVudSA9PSBudWxsKSB7XHJcbiAgICAgICAgIGNvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICBjb25NZW51LmNsYXNzTGlzdC5hZGQodGhpcy5jb250ZXh0TWVudVF1ZXJ5LnNsaWNlKDEpKTtcclxuICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbk1lbnUpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBjb25NZW51LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnpJbmRleCA9IHpJbmRleC50b1N0cmluZygpO1xyXG4gICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0LnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUubWluV2lkdGggPSBvcHRpb25zLm1pbldpZHRoICsgXCJweFwiO1xyXG4gICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLnRvcCA9IGUuY2xpZW50WS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmxlZnQgPSAoZS5jbGllbnRYIC0gb3B0aW9ucy54T2Zmc2V0KS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJvcmRlciA9IG9wdGlvbnMuYm9yZGVyV2lkdGgudG9TdHJpbmcoKSArIFwicHggc29saWQgXCIgKyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKSkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tdGV4dC1jb2xvclwiKS50cmltKCk7XHJcbiAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUuYm9yZGVyUmFkaXVzID0gb3B0aW9ucy5yYWRpdXMudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCI7XHJcblxyXG5cclxuICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xyXG5cclxuXHJcbiAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgIGxldCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuXHJcblxyXG4gICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gQWN0aW9uVHlwZS5jaGVja2JveCkge1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guaWQgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICBhY3Rpb25DaGVja2JveC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICB0ZXh0U3Bhbi5odG1sRm9yID0gXCJhY3Rpb25JZFwiICsgaTtcclxuICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRleHQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBsYWJlbC5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodEJ1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgbGFiZWwuc3R5bGUucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ0J1dHRvbi50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5Ub3AgPSAoKG9wdGlvbnMuaGVpZ2h0IC0gb3B0aW9ucy5oZWlnaHRCdXR0b24pIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgbGFiZWwuc3R5bGUubWFyZ2luUmlnaHQgPSAoKG9wdGlvbnMuaGVpZ2h0IC0gb3B0aW9ucy5oZWlnaHRCdXR0b24pIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIFwiO1xyXG4gICAgICAgICAgICBzcGFuLnN0eWxlLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMucmFkaXVzLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuaGVpZ2h0ID0gKG9wdGlvbnMuaGVpZ2h0QnV0dG9uIC0gMiAqIG9wdGlvbnMucGFkZGluZ0J1dHRvbikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IChvcHRpb25zLndpZHRoQnV0dG9uIC8gMikudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgc3Bhbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gb3B0aW9ucy5kdXJhdGlvbi50b1N0cmluZygpICsgXCJzXCI7XHJcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICAgICBsZXQgaXNPbiA9IGFjdGlvbi5pbml0SGFuZGxlcihpdGVtKTtcclxuICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCA9IGlzT247XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNPbikge1xyXG4gICAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zbGF0ZSA9IG9wdGlvbnMueE9mZnNldEJ1dHRvbi50b1N0cmluZygpICsgXCJweCAwcHhcIjtcclxuICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBvcHRpb25zLmNvbG9yQjtcclxuICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPbj8/XCJcIithY3Rpb24udGV4dE9uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBzcGFuLnN0eWxlLnRyYW5zbGF0ZSA9IFwiMHB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9YWN0aW9uLmVtb2ppT2ZmPz9hY3Rpb24uZW1vamlPbj8/XCJcIisgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBhY3Rpb25DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoaXRlbSwgZSwgYWN0aW9uQ2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgIGlmIChhY3Rpb25DaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gb3B0aW9ucy54T2Zmc2V0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4IDBweFwiO1xyXG4gICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi5zdHlsZS5jb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IGFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPZmY/P2FjdGlvbi5lbW9qaU9uPz9cIlwiKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG5cclxuICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gIGNoZWNrWm9tYmllLnN0eWxlLGRpc3BsYXk9XCJub25lXCI7XHJcbiAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQoYWN0aW9uQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XHJcblxyXG4gICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgbGV0IGFjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50PWFjdGlvbi5lbW9qaU9uPz9cIlwiK2FjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgaWYoYWN0aW9uLmluaXRIYW5kbGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGFjdGlvbi5pbml0SGFuZGxlcihjb25NZW51KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PmFjdGlvbi5oYW5kbGVyKCkpO1xyXG5cclxuICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbik7XHJcblxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgIGlmKHRoaXMuY29tcGxleFRyaWdnZXJPdXQ9PT1mYWxzZSl7XHJcbiAgICAgICAgIGNvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRyaWdnZXJUeXBlSW52aXNpYmxlLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250ZXh0TWVudVF1ZXJ5KS5mb3JFYWNoKChlbGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50PmVsZW0pLnN0eWxlLm9wYWNpdHkgPSBcIjBcIik7XHJcblxyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgfSk7fVxyXG4gICAgICAgICBlbHNlXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV4VHJpZ2dlck91dENvbmRpdGlvbihjb25NZW51KTtcclxuICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcbn0iLCJcclxuaW1wb3J0IHVuc2FmZVdpbmRvdyBmcm9tIFwiZ3JlYXNlbW9ua2V5XCI7XHJcbi8vc291cmNlIG11c3QgYmUgaW5pdGlhdGVkIHdpdGggdW5zYWZlV2luZG93LiRudXh0LiRyb290LiRjaGlsZHJlblsyXS4kY2hpbGRyZW5bMF0uJGNoaWxkcmVuWzBdXHJcbmV4cG9ydCBjbGFzcyBkYXRhXHJcbntcclxuICAgcHVibGljICBzb3VyY2U6YW55PW51bGw7XHJcbiAgIHB1YmxpYyAgc291cmNlV2luZG93OmFueT1udWxsO1xyXG4gICBwdWJsaWMgIGV4cEY6YW55PW51bGw7XHJcbiAgXHJcbiAgcHVibGljIGdldEVsZW1lbnRzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5lbGVtZW50cztcclxuICB9XHJcbiAgICBnZXRJbnN0YW5jZXMoKVxyXG4gIHtcclxuICAgcmV0dXJuIHRoaXMuc291cmNlLl9kYXRhLmluc3RhbmNlcztcclxuICB9XHJcbiAgICAgb25Tb3J0aW5nKGFkZFNvcnRpbmdNZXRob2Q6KHg6YW55LHk6YW55KT0+YW55PXg9PngpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyO1xyXG4gIHRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNvcnRlZEVsZW1lbnRzLmdldHRlcj10aGlzLmV4cEYoKCkgPT4ge1xyXG4gIGxldCBwcmV2aW91cz1bLi4uYmVmb3JlKCldO1xyXG4gIHJldHVybiBhZGRTb3J0aW5nTWV0aG9kKHByZXZpb3VzLHRoaXMuZ2V0RWxlbWVudHMoKSk7XHJcbiAgfSx1bnNhZmVXaW5kb3cpO1xyXG4gIH1cclxuICBcclxuICAgICAgb25GaWx0ZXJpbmcoYWRkRmlsdGVyTWV0aG9kT25RdWVyeTooeDphbnkseTphbnkpPT5hbnk9KHg6YW55LHk6YW55KT0+eSgpKVxyXG4gIHtcclxuICBsZXQgYmVmb3JlPXRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNlYXJjaFJlc3VsdHMuZ2V0dGVyO1xyXG4gIHRoaXMuc291cmNlLl9jb21wdXRlZFdhdGNoZXJzLnNlYXJjaFJlc3VsdHMuZ2V0dGVyPXRoaXMuZXhwRigoKSA9PiB7XHJcbiAgbGV0IHF1ZXJ5PSB0aGlzLnNvdXJjZS5zZWFyY2hRdWVyeVxyXG4gXHJcbiBcclxuIFxyXG4gIHJldHVybiBhZGRGaWx0ZXJNZXRob2RPblF1ZXJ5KHF1ZXJ5LGJlZm9yZSk7XHJcbiAgXHJcbiAgXHJcbiAgfSx1bnNhZmVXaW5kb3cpIDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICB9XHJcblxyXG5cclxufTsiLCJleHBvcnQgY2xhc3MgdXRpbHNcclxue1xyXG5cclxuXHJcbiAgICBwdWJsaWMgdXNlckFkZGVkTWV0aG9kczphbnlbXT1bXTtcclxuICAgIHB1YmxpYyBFeHBvcnRTYXZlQnV0dG9uUXVlcnk6c3RyaW5nID1cIi5zZXR0aW5nW2Zvcj1pbXBvcnQtc2F2ZV0gKyAuc2V0dGluZ1wiO1xyXG4gICAgcHVibGljIHNhdmVGaWxlTmFtZTpzdHJpbmc9XCJpbmZpbml0ZWNyYWZ0Lmpzb25cIjtcclxuXHJcblxyXG4gICAgc2F2ZVNhdmVGaWxlT25QQygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2s7XHJcbiAgICAgICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrID0gKCkgPT4ge0hUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayA9IGhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNvbnN0IGJvZHlPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSAhPT0gXCJjaGlsZExpc3RcIikgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNob3IgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpLmZpbmQoKG5vZGUpID0+e1xyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICg8YW55Pm5vZGUpLmRvd25sb2FkID09PSB0aGlzLnNhdmVGaWxlTmFtZX0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChhbmNob3IpIHJldHVybiBmZXRjaCgoPEhUTUxBbmNob3JFbGVtZW50PmFuY2hvcikuaHJlZikudGhlbihyZXNvbHZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJvZHlPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG4gICAgICAgIGhhbmRsZUNsaWNrLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLkV4cG9ydFNhdmVCdXR0b25RdWVyeSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib2R5T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZWplY3QoXCJUaW1lZCBvdXRcIilcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0cnVjdG9yKClcclxue1xyXG5cclxufVxyXG5hZGRGdW5jdGlvbihuYW1lOnN0cmluZyxjYWxsYmFjazphbnkpXHJcbntcclxuICAgIHRoaXMudXNlckFkZGVkTWV0aG9kcy5wdXNoKHtuYW1lOm5hbWUsaGFuZGxlcjpjYWxsYmFja30pO1xyXG59XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImxldCBtZXNzYWdlOiBzdHJpbmcgPSAnSGVsbG8sIFdvcmxkISc7XHJcbmNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG5pbXBvcnQge1VJfSBmcm9tICBcIi4vVUlcIlxyXG5pbXBvcnQge2RhdGF9IGZyb20gIFwiLi9kYXRhXCJcclxuaW1wb3J0IHt1dGlsc30gZnJvbSAgXCIuL3V0aWxzXCJcclxuY2xhc3MgTWFpblxyXG57XHJcbiBwdWJsaWMgJHVpOlVJO1xyXG4gcHVibGljICRkYXRhOmRhdGE7XHJcbiBwdWJsaWMgJHV0aWxzOnV0aWxzO1xyXG4gY29uc3RydWN0b3IoKVxyXG4ge1xyXG4gIHRoaXMuJHVpPW5ldyBVSSgpO1xyXG4gIHRoaXMuJGRhdGE9bmV3IGRhdGEoKTtcclxuICB0aGlzLiR1dGlscz1uZXcgdXRpbHMoKTtcclxuIH1cclxuXHJcblxyXG59XHJcbmxldCAkOk1haW49bmV3IE1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=