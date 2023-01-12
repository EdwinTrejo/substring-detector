import * as vscode from 'vscode';
import { Config } from './config';

let substringDetectorStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    console.log('substring-detector is now active!');

    substringDetectorStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
    substringDetectorStatusBarItem.command = "substringDetector.detect";
    substringDetectorStatusBarItem.text = "Detect Substrings";
    substringDetectorStatusBarItem.tooltip = "Click to detect the presence of a specified substring in the selected text";
    substringDetectorStatusBarItem.color = "white";

    if (Config.ShowStatusBarButton === true) {
        substringDetectorStatusBarItem.show();
    } else {
        substringDetectorStatusBarItem.hide();
    }

    let disposable = vscode.commands.registerCommand('substringDetector.detect', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        let document = editor.document;
        let selection = editor.selection;
        let selectedText = document.getText(selection);

        if (!selectedText) {
            return;
        }

        let substringReplacements = Config.SubstringReplacements;

        let found = false;
        let reportstring = `Expanded Substrings\n`;
        for (let i = 0; i < substringReplacements.length; i++) {
            let { substring, replacement } = substringReplacements[i];
            if (selectedText.includes(substring)) {
                reportstring += `"${substring}": "${replacement}"\n`;
                found = true;
            }
        }
        if (found) {
            vscode.window.showInformationMessage(reportstring);
        }
        if (!found) {
            vscode.window.showInformationMessage(`The selected text does not contain any of the specified substrings.`);
        }
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {
    substringDetectorStatusBarItem.dispose();
}
