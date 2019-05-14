'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const os = require("os");
const vscode_jsonrpc_1 = require("vscode-jsonrpc");
const vscode_1 = require("vscode");
const vscode_languageclient_1 = require("vscode-languageclient");
function activate(context) {
    // The server is a locally installed in src/mydsl
    let launcher = os.platform() === 'win32' ? 'problem-standalone.bat' : 'problem-standalone';
    let script = context.asAbsolutePath(path.join('src', 'problem', 'bin', launcher));
    let serverOptions = {
        run: { command: script },
        debug: { command: script, args: [], options: { env: createDebugEnv() } }
    };
    let clientOptions = {
        documentSelector: ['problem'],
        synchronize: {
            fileEvents: vscode_1.workspace.createFileSystemWatcher('**/*.*')
        }
    };
    // Create the language client and start the client.
    let lc = new vscode_languageclient_1.LanguageClient('Xtext Server', serverOptions, clientOptions);
    var disposable2 = vscode_1.commands.registerCommand("problem.diagram", () => __awaiter(this, void 0, void 0, function* () {
        let activeEditor = vscode_1.window.activeTextEditor;
        if (!activeEditor || !activeEditor.document || activeEditor.document.languageId !== 'problem') {
            return;
        }
        if (activeEditor.document.uri instanceof vscode_1.Uri) {
            vscode_1.commands.executeCommand("argument.create", activeEditor.document.uri.toString());
        }
    }));
    context.subscriptions.push(disposable2);
    // enable tracing (.Off, .Messages, Verbose)
    lc.trace = vscode_jsonrpc_1.Trace.Verbose;
    let disposable = lc.start();
    // Push the disposable to the context's subscriptions so that the 
    // client can be deactivated on extension deactivation
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function createDebugEnv() {
    return Object.assign({
        JAVA_OPTS: "-Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n,quiet=y"
    }, process.env);
}
