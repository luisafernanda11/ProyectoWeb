(()=>{"use strict";var e={189:function(e,t,i){var s=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var s=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],a=0,n=o.length;a<n;a++,r++)s[r]=o[a];return s};Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=void 0;var r=i(926),o=i(800),a=i(800);function n(e){return function(e,t){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];if("number"==typeof e)throw new Error("Browser implementation does currently not support externalized strings.");return o.localize.apply(void 0,s([e,t],i))}}function u(e){return o.setPseudo("pseudo"===(null==e?void 0:e.locale.toLowerCase())),n}Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return a.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return a.BundleFormat}}),t.loadMessageBundle=n,t.config=u,r.default.install(Object.freeze({loadMessageBundle:n,config:u}))},800:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var s,r,o,a=i(926);function n(e){return void 0!==e}function u(e,i){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===i.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var s=t[0],r=i[s],o=e;return"string"==typeof r?o=r:"number"!=typeof r&&"boolean"!=typeof r&&null!=r||(o=String(r)),o}))}(o=t.MessageFormat||(t.MessageFormat={})).file="file",o.bundle="bundle",o.both="both",(r=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",r.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&n(t.key)&&n(t.comment)}}(s||(s={})),t.isDefined=n,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=u,t.localize=function(e,t){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];return u(t,i)},t.loadMessageBundle=function(e){return a.default().loadMessageBundle(e)},t.config=function(e){return a.default().config(e)}},926:(e,t)=>{var i;function s(){if(void 0===i)throw new Error("No runtime abstraction layer installed");return i}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");i=e}}(s||(s={})),t.default=s},87:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BinarySizeStatusBarEntry=void 0;const s=i(549),r=i(189),o=i(577),a=r.loadMessageBundle();class n{static formatSize(e){return e<n.KB?a("sizeB","{0}B",e):e<n.MB?a("sizeKB","{0}KB",(e/n.KB).toFixed(2)):e<n.GB?a("sizeMB","{0}MB",(e/n.MB).toFixed(2)):e<n.TB?a("sizeGB","{0}GB",(e/n.GB).toFixed(2)):a("sizeTB","{0}TB",(e/n.TB).toFixed(2))}}n.KB=1024,n.MB=n.KB*n.KB,n.GB=n.MB*n.KB,n.TB=n.GB*n.KB;class u extends o.PreviewStatusBarEntry{constructor(){super("status.imagePreview.binarySize",a("sizeStatusBar.name","Image Binary Size"),s.StatusBarAlignment.Right,100)}show(e,t){"number"==typeof t?super.showItem(e,n.formatSize(t)):this.hide(e)}}t.BinarySizeStatusBarEntry=u},102:(e,t)=>{function i(e){for(;e.length;){const t=e.pop();t&&t.dispose()}}Object.defineProperty(t,"__esModule",{value:!0}),t.Disposable=t.disposeAll=void 0,t.disposeAll=i,t.Disposable=class{constructor(){this._isDisposed=!1,this._disposables=[]}dispose(){this._isDisposed||(this._isDisposed=!0,i(this._disposables))}_register(e){return this._isDisposed?e.dispose():this._disposables.push(e),e}get isDisposed(){return this._isDisposed}}},577:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewStatusBarEntry=void 0;const s=i(549),r=i(102);class o extends r.Disposable{constructor(e,t,i,r){super(),this.entry=this._register(s.window.createStatusBarItem(e,i,r)),this.entry.name=t}showItem(e,t){this._showOwner=e,this.entry.text=t,this.entry.show()}hide(e){e===this._showOwner&&(this.entry.hide(),this._showOwner=void 0)}}t.PreviewStatusBarEntry=o},664:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewManager=void 0;const s=i(549),r=i(189),o=i(102),a=r.loadMessageBundle();class n{constructor(e,t,i,s){this.extensionRoot=e,this.sizeStatusBarEntry=t,this.binarySizeStatusBarEntry=i,this.zoomStatusBarEntry=s,this._previews=new Set}async openCustomDocument(e){return{uri:e,dispose:()=>{}}}async resolveCustomEditor(e,t){const i=new u(this.extensionRoot,e.uri,t,this.sizeStatusBarEntry,this.binarySizeStatusBarEntry,this.zoomStatusBarEntry);this._previews.add(i),this.setActivePreview(i),t.onDidDispose((()=>{this._previews.delete(i)})),t.onDidChangeViewState((()=>{t.active?this.setActivePreview(i):this._activePreview!==i||t.active||this.setActivePreview(void 0)}))}get activePreview(){return this._activePreview}setActivePreview(e){this._activePreview=e,this.setPreviewActiveContext(!!e)}setPreviewActiveContext(e){s.commands.executeCommand("setContext","imagePreviewFocus",e)}}t.PreviewManager=n,n.viewType="imagePreview.previewEditor";class u extends o.Disposable{constructor(e,t,i,r,o,a){super(),this.extensionRoot=e,this.resource=t,this.webviewEditor=i,this.sizeStatusBarEntry=r,this.binarySizeStatusBarEntry=o,this.zoomStatusBarEntry=a,this.id=`${Date.now()}-${Math.random().toString()}`,this._previewState=1,this.emptyPngDataUri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==";const n=t.with({path:t.path.replace(/\/[^\/]+?\.\w+$/,"/")});i.webview.options={enableScripts:!0,enableForms:!1,localResourceRoots:[n,e]},this._register(i.webview.onDidReceiveMessage((e=>{switch(e.type){case"size":this._imageSize=e.value,this.update();break;case"zoom":this._imageZoom=e.value,this.update();break;case"reopen-as-text":s.commands.executeCommand("vscode.openWith",t,"default",i.viewColumn)}}))),this._register(a.onDidChangeScale((e=>{2===this._previewState&&this.webviewEditor.webview.postMessage({type:"setScale",scale:e.scale})}))),this._register(i.onDidChangeViewState((()=>{this.update(),this.webviewEditor.webview.postMessage({type:"setActive",value:this.webviewEditor.active})}))),this._register(i.onDidDispose((()=>{2===this._previewState&&(this.sizeStatusBarEntry.hide(this.id),this.binarySizeStatusBarEntry.hide(this.id),this.zoomStatusBarEntry.hide(this.id)),this._previewState=0})));const u=this._register(s.workspace.createFileSystemWatcher(t.fsPath));this._register(u.onDidChange((e=>{e.toString()===this.resource.toString()&&this.render()}))),this._register(u.onDidDelete((e=>{e.toString()===this.resource.toString()&&this.webviewEditor.dispose()}))),s.workspace.fs.stat(t).then((({size:e})=>{this._imageBinarySize=e,this.update()})),this.render(),this.update(),this.webviewEditor.webview.postMessage({type:"setActive",value:this.webviewEditor.active})}zoomIn(){2===this._previewState&&this.webviewEditor.webview.postMessage({type:"zoomIn"})}zoomOut(){2===this._previewState&&this.webviewEditor.webview.postMessage({type:"zoomOut"})}async render(){0!==this._previewState&&(this.webviewEditor.webview.html=await this.getWebviewContents())}update(){0!==this._previewState&&(this.webviewEditor.active?(this._previewState=2,this.sizeStatusBarEntry.show(this.id,this._imageSize||""),this.binarySizeStatusBarEntry.show(this.id,this._imageBinarySize),this.zoomStatusBarEntry.show(this.id,this._imageZoom||"fit")):(2===this._previewState&&(this.sizeStatusBarEntry.hide(this.id),this.binarySizeStatusBarEntry.hide(this.id),this.zoomStatusBarEntry.hide(this.id)),this._previewState=1))}async getWebviewContents(){const e=Date.now().toString(),t={isMac:"undefined"!=typeof process&&"darwin"===process.platform,src:await this.getResourcePath(this.webviewEditor,this.resource,e)},i=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<64;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}(),s=this.webviewEditor.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Image Preview</title>\n\n\t<link rel="stylesheet" href="${d(this.extensionResource("/media/main.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${s}; script-src 'nonce-${i}'; style-src ${s} 'nonce-${i}';">\n\t<meta id="image-preview-settings" data-settings="${d(JSON.stringify(t))}">\n</head>\n<body class="container image scale-to-fit loading">\n\t<div class="loading-indicator"></div>\n\t<div class="image-load-error">\n\t\t<p>${a("preview.imageLoadError","An error occurred while loading the image.")}</p>\n\t\t<a href="#" class="open-file-link">${a("preview.imageLoadErrorLink","Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${d(this.extensionResource("/media/main.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async getResourcePath(e,t,i){return"git"===t.scheme&&0===(await s.workspace.fs.stat(t)).size?this.emptyPngDataUri:t.query?e.webview.asWebviewUri(t).toString():e.webview.asWebviewUri(t).with({query:`version=${i}`}).toString()}extensionResource(e){return this.webviewEditor.webview.asWebviewUri(this.extensionRoot.with({path:this.extensionRoot.path+e}))}}function d(e){return e.toString().replace(/"/g,"&quot;")}},367:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SizeStatusBarEntry=void 0;const s=i(549),r=i(189),o=i(577),a=r.loadMessageBundle();class n extends o.PreviewStatusBarEntry{constructor(){super("status.imagePreview.size",a("sizeStatusBar.name","Image Size"),s.StatusBarAlignment.Right,101)}show(e,t){this.showItem(e,t)}}t.SizeStatusBarEntry=n},316:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ZoomStatusBarEntry=void 0;const s=i(549),r=i(189),o=i(577),a=r.loadMessageBundle(),n="_imagePreview.selectZoomLevel";class u extends o.PreviewStatusBarEntry{constructor(){super("status.imagePreview.zoom",a("zoomStatusBar.name","Image Zoom"),s.StatusBarAlignment.Right,102),this._onDidChangeScale=this._register(new s.EventEmitter),this.onDidChangeScale=this._onDidChangeScale.event,this._register(s.commands.registerCommand(n,(async()=>{const e=[10,5,2,1,.5,.2,"fit"].map((e=>({label:this.zoomLabel(e),scale:e}))),t=await s.window.showQuickPick(e,{placeHolder:a("zoomStatusBar.placeholder","Select zoom level")});t&&this._onDidChangeScale.fire({scale:t.scale})}))),this.entry.command=n}show(e,t){this.showItem(e,this.zoomLabel(t))}zoomLabel(e){return"fit"===e?a("zoomStatusBar.wholeImageLabel","Whole Image"):`${Math.round(100*e)}%`}}t.ZoomStatusBarEntry=u},549:e=>{e.exports=require("vscode")}},t={};function i(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,i),o.exports}var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=i(549),r=i(87),o=i(664),a=i(367),n=i(316);e.activate=function(e){const i=new a.SizeStatusBarEntry;e.subscriptions.push(i);const s=new r.BinarySizeStatusBarEntry;e.subscriptions.push(s);const u=new n.ZoomStatusBarEntry;e.subscriptions.push(u);const d=new o.PreviewManager(e.extensionUri,i,s,u);e.subscriptions.push(t.window.registerCustomEditorProvider(o.PreviewManager.viewType,d,{supportsMultipleEditorsPerDocument:!0})),e.subscriptions.push(t.commands.registerCommand("imagePreview.zoomIn",(()=>{d.activePreview?.zoomIn()}))),e.subscriptions.push(t.commands.registerCommand("imagePreview.zoomOut",(()=>{d.activePreview?.zoomOut()})))}})();var r=exports;for(var o in s)r[o]=s[o];s.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/23cffa27b806f9e1733e15d611ec251dcdba2c42/extensions/image-preview/dist/browser/extension.js.map