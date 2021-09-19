"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = exports.showMessage = void 0;
var TITLE = 'typescript';
function showMessage() {
    console.log(TITLE);
}
exports.showMessage = showMessage;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getVersion = function () {
        return '1.0.0';
    };
    return Util;
}());
exports.Util = Util;
