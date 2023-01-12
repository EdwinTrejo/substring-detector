import * as vscode from 'vscode';

interface SubstringReplacement {
    substring: string;
    replacement: string;
}

export class Config {
    public static get SubstringReplacements(): SubstringReplacement[] {
        let config = vscode.workspace.getConfiguration('substring-detector');
        return config.get('substringReplacements') as SubstringReplacement[];
    }
}
