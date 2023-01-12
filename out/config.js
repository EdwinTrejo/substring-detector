"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const vscode = require("vscode");
class Config {
    static get SubstringReplacements() {
        let config = vscode.workspace.getConfiguration('substring-detector');
        return config.get('substringReplacements');
    }
    static get ShowStatusBarButton() {
        let config = vscode.workspace.getConfiguration('substring-detector');
        return config.get('showStatusBarButton');
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map