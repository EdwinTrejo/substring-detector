"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const vscode = require("vscode");
class Config {
    static get SubstringReplacements() {
        let config = vscode.workspace.getConfiguration('substring-detector');
        return config.get('substringReplacements');
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map