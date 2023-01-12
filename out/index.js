"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const extension_1 = require("./extension");
function activate(context) {
    (0, extension_1.activate)(context);
}
exports.activate = activate;
function deactivate() {
    (0, extension_1.deactivate)();
}
exports.deactivate = deactivate;
//# sourceMappingURL=index.js.map