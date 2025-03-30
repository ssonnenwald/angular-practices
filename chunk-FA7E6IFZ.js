import{e as ue}from"./chunk-HIDKMYDN.js";import{d as ae,k as he}from"./chunk-EC2FMD3D.js";import{Ca as te,O as D,Q as S,Sb as re,T as B,Va as ie,W as Q,Z as h,Zb as v,_b as oe,aa as Z,ac as le,cc as T,g as J,h as A,i as F,ja as $,jb as _,k as L,kb as ne,n as K,o as H,ta as ee,u as Y,ua as f,va as j,wb as se,x as R,xa as x,z as X}from"./chunk-VK3H6FRJ.js";import{f as a}from"./chunk-EQDQRRRY.js";var E=new Q("HIGHLIGHT_OPTIONS");function Ve(n){return Z([{provide:E,useValue:n}])}var y=function(n){return n.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",n.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",n.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",n.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",n.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",n}(y||{}),Fe=(()=>{class n{constructor(){this.document=h(ae),this.isPlatformBrowser=he(h(te)),this.options=h(E,{optional:!0}),this._ready=new J(null),this.ready=K(this._ready.asObservable().pipe(R(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(D(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(S(r=>{r.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),A)),X(e=>(console.error("[HLJS] ",e),this._ready.error(e),A))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return L(()=>y.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return L(()=>y.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return L(()=>y.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return L(()=>y.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(D(e=>this._loadLanguages(e)))}return L(()=>y.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){let r=Object.entries(this.options.languages).map(([u,M])=>P(M()).pipe(S(b=>e.registerLanguage(u,b))));return Y(r).pipe(H(()=>e))}loadCoreLibrary(){return P(this.options.coreLibraryLoader())}loadFullLibrary(){return P(this.options.fullLibraryLoader())}loadLineNumbers(){return F(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),P=n=>F(n).pipe(R(c=>!!c?.default),H(c=>c.default)),k=(()=>{class n{constructor(){this.loader=h(Fe),this.options=h(E,{optional:!0}),this.hljsSignal=x(null),this.hljs=le(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,r){return a(this,null,function*(){return(yield this.loader.ready).highlight(e,r)})}highlightAuto(e,r){return a(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,r)})}highlightElement(e){return a(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return a(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return a(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,r){return a(this,null,function*(){(yield this.loader.ready).registerLanguage(e,r)})}unregisterLanguage(e){return a(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(u,M){return a(this,arguments,function*(e,{languageName:r}){(yield this.loader.ready).registerAliases(e,{languageName:r})})}listLanguages(){return a(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return a(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return a(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return a(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,r){return a(this,null,function*(){let u=yield this.loader.ready;u.lineNumbersBlock&&u.lineNumbersBlock(e,r)})}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),C;function He(){if(!C)try{C=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:n=>n})}catch{}return C}function Re(n){return He()?.createHTML(n)||n}var O=(()=>{class n{constructor(){this._hljs=h(k),this._nativeElement=h(j).nativeElement,this._sanitizer=h(ue),T({write:()=>{let e=this.code();this.setTextContent(e||""),e&&this.highlightElement(e)}}),T({write:()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}})}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=Re(this._sanitizer.sanitize(ie.HTML,e)||""))}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275dir=_({type:n})}}return n})(),We=(()=>{class n extends O{constructor(){super(...arguments),this.code=f(null,{alias:"highlight"}),this.highlightResult=x(null),this.language=f.required(),this.ignoreIllegals=f(void 0,{transform:v}),this.highlighted=ee()}highlightElement(e){return a(this,null,function*(){let r=yield this._hljs.highlight(e,{language:this.language(),ignoreIllegals:this.ignoreIllegals()});this.highlightResult.set(r)})}static{this.\u0275fac=(()=>{let e;return function(u){return(e||(e=$(n)))(u||n)}})()}static{this.\u0275dir=_({type:n,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(r,u){r&2&&se("hljs",!0)},inputs:{code:[1,"highlight","code"],language:[1,"language"],ignoreIllegals:[1,"ignoreIllegals"]},outputs:{highlighted:"highlighted"},features:[re([{provide:O,useExisting:n}]),ne]})}}return n})();function Xe(){let n=window,c=document,e="hljs-ln",r="hljs-ln-line",u="hljs-ln-code",M="hljs-ln-numbers",b="hljs-ln-n",w="data-line-number",G=/\r\n|\r|\n/g;n.hljs?(n.hljs.initLineNumbersOnLoad=me,n.hljs.lineNumbersBlock=V,n.hljs.lineNumbersValue=Le,fe()):n.console.error("highlight.js not detected!");function ce(t){let i=t;for(;i;){if(i.className&&i.className.indexOf("hljs-ln-code")!==-1)return!0;i=i.parentNode}return!1}function de(t){let i=t;for(;i.nodeName!=="TABLE";)i=i.parentNode;return i}function ge(t){let i=t.toString(),s=t.anchorNode;for(;s.nodeName!=="TD";)s=s.parentNode;let o=t.focusNode;for(;o.nodeName!=="TD";)o=o.parentNode;let l=parseInt(s.dataset.lineNumber),d=parseInt(o.dataset.lineNumber);if(l!=d){let m=s.textContent,p=o.textContent;if(l>d){let g=l;l=d,d=g,g=m,m=p,p=g}for(;i.indexOf(m)!==0;)m=m.slice(1);for(;i.lastIndexOf(p)===-1;)p=p.slice(0,-1);let I=m,Me=de(s);for(let g=l+1;g<d;++g){let we=N('.{0}[{1}="{2}"]',[u,w,g]),Ie=Me.querySelector(we);I+=`
`+Ie.textContent}return I+=`
`+p,I}else return i}document.addEventListener("copy",function(t){let i=window.getSelection();if(ce(i.anchorNode)){let s;window.navigator.userAgent.indexOf("Edge")!==-1?s=ge(i):s=i.toString(),t.clipboardData.setData("text/plain",s),t.preventDefault()}});function fe(){let t=c.createElement("style");t.type="text/css",t.innerHTML=N(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[e,b,w]),c.getElementsByTagName("head")[0].appendChild(t)}function me(t){c.readyState==="interactive"||c.readyState==="complete"?U(t):n.addEventListener("DOMContentLoaded",function(){U(t)})}function U(t){try{let i=c.querySelectorAll("code.hljs,code.nohighlight");for(let s in i)i.hasOwnProperty(s)&&(pe(i[s])||V(i[s],t))}catch(i){n.console.error("LineNumbers error: ",i)}}function pe(t){return t.classList.contains("nohljsln")}function V(t,i){typeof t=="object"&&je(function(){t.innerHTML=W(t,i)})}function Le(t,i){if(typeof t!="string")return;let s=document.createElement("code");return s.innerHTML=t,W(s,i)}function W(t,i){let s=be(t,i);return q(t),ye(t.innerHTML,s)}function ye(t,i){let s=z(t);if(s[s.length-1].trim()===""&&s.pop(),s.length>1||i.singleLine){let o="";for(let l=0,d=s.length;l<d;l++)o+=N('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[r,M,b,w,u,l+i.startFrom,s[l].length>0?s[l]:" "]);return N('<table class="{0}">{1}</table>',[e,o])}return t}function be(t,i){return i=i||{},{singleLine:Ne(i),startFrom:_e(t,i)}}function Ne(t){return t.singleLine?t.singleLine:!1}function _e(t,i){let o=1;isFinite(i.startFrom)&&(o=i.startFrom);let l=ve(t,"data-ln-start-from");return l!==null&&(o=Oe(l,1)),o}function q(t){let i=t.childNodes;for(let s in i)if(i.hasOwnProperty(s)){let o=i[s];Ee(o.textContent)>0&&(o.childNodes.length>0?q(o):Te(o.parentNode))}}function Te(t){let i=t.className;if(!/hljs-/.test(i))return;let s=z(t.innerHTML),o="";for(let l=0;l<s.length;l++){let d=s[l].length>0?s[l]:" ";o+=N(`<span class="{0}">{1}</span>
`,[i,d])}t.innerHTML=o.trim()}function z(t){return t.length===0?[]:t.split(G)}function Ee(t){return(t.trim().match(G)||[]).length}function je(t){n.setTimeout(t,0)}function N(t,i){return t.replace(/\{(\d+)\}/g,function(s,o){return i[o]!==void 0?i[o]:s})}function ve(t,i){return t.hasAttribute(i)?t.getAttribute(i):null}function Oe(t,i){if(!t)return i;let s=Number(t);return isFinite(s)?s:i}}var Qe=(()=>{class n{constructor(){this.options=h(E)?.lineNumbersOptions,this._hljs=h(k),this._highlight=h(O),this._nativeElement=h(j).nativeElement,this.startFrom=f(this.options?.startFrom,{transform:oe}),this.singleLine=f(this.options?.singleLine,{transform:v}),T({write:()=>{this._highlight.highlightResult()&&this.addLineNumbers()}})}addLineNumbers(){this.destroyLineNumbersObserver(),requestAnimationFrame(()=>a(this,null,function*(){yield this._hljs.lineNumbersBlock(this._nativeElement,{startFrom:this.startFrom(),singleLine:this.singleLine()}),this._lineNumbersObs=new MutationObserver(()=>{this._nativeElement.firstElementChild?.tagName.toUpperCase()==="TABLE"&&this._nativeElement.classList.add("hljs-line-numbers"),this.destroyLineNumbersObserver()}),this._lineNumbersObs.observe(this._nativeElement,{childList:!0})}))}destroyLineNumbersObserver(){this._lineNumbersObs&&(this._lineNumbersObs.disconnect(),this._lineNumbersObs=null)}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275dir=_({type:n,selectors:[["","highlight","","lineNumbers",""],["","highlightAuto","","lineNumbers",""]],inputs:{startFrom:[1,"startFrom"],singleLine:[1,"singleLine"]}})}}return n})();export{Ve as a,We as b,Xe as c,Qe as d};
