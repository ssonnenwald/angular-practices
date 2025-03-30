import{a as et,c as T,e as it}from"./chunk-VNWHF5VY.js";import{a as p}from"./chunk-2ZU3MP2K.js";import{a as tt,c as Rt}from"./chunk-X56MGAKP.js";import{d as q,e as k,f as I,k as J,l as Q,q as Ot,u as Ct,v as kt}from"./chunk-G2XZRRWZ.js";import{d as w,f as wt}from"./chunk-EC2FMD3D.js";import{$a as F,$b as mt,Da as ft,Ja as _t,Ka as ut,P as dt,T as m,U as x,W as pt,Z as h,a as U,ca as D,dc as bt,eb as gt,f as v,hb as yt,ib as N,ja as M,la as A,pb as vt,ra as C,va as B,w as ht,x as ct}from"./chunk-VK3H6FRJ.js";import{a as E,b as lt}from"./chunk-EQDQRRRY.js";var O=class{_attachedHost;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},Y=class extends O{component;viewContainerRef;injector;componentFactoryResolver;projectableNodes;constructor(t,e,i,s,n){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=n}},R=class extends O{templateRef;viewContainerRef;context;injector;constructor(t,e,i,s){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=s}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},V=class extends O{element;constructor(t){super(),this.element=t instanceof B?t.nativeElement:t}},X=class{_attachedPortal;_disposeFn;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Y)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof R)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof V)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var S=class extends X{outletElement;_appRef;_defaultInjector;_document;constructor(t,e,i,s,n){super(),this.outletElement=t,this._appRef=i,this._defaultInjector=s,this._document=n}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,s=i.get(gt,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:s,projectableNodes:t.projectableNodes||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,s=t.injector||this._defaultInjector||A.NULL,n=s.get(D,i.injector);e=bt(t.component,{elementInjector:s,environmentInjector:n,projectableNodes:t.projectableNodes||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(s=>this.outletElement.appendChild(s)),i.detectChanges(),this.setDisposeFn(()=>{let s=e.indexOf(i);s!==-1&&e.remove(s)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this._document.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var st=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=N({type:o});static \u0275inj=x({})}return o})();var St=Rt(),j=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=p(-this._previousScrollPosition.left),t.style.top=p(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,s=e.style,n=i.scrollBehavior||"",r=s.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),St&&(i.scrollBehavior=s.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),St&&(i.scrollBehavior=n,s.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};var L=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,s){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=s}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(ct(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}},P=class{enable(){}disable(){}attach(){}};function ot(o,t){return t.some(e=>{let i=o.bottom<e.top,s=o.top>e.bottom,n=o.right<e.left,r=o.left>e.right;return i||s||n||r})}function Pt(o,t){return t.some(e=>{let i=o.top<e.top,s=o.bottom>e.bottom,n=o.left<e.left,r=o.right>e.right;return i||s||n||r})}var H=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=s}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:s}=this._viewportRuler.getViewportSize();ot(e,[{width:i,height:s,bottom:s,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Bt=(()=>{class o{_scrollDispatcher=h(et);_viewportRuler=h(T);_ngZone=h(C);_document=h(w);constructor(){}noop=()=>new P;close=e=>new L(this._scrollDispatcher,this._ngZone,this._viewportRuler,e);block=()=>new j(this._viewportRuler,this._document);reposition=e=>new H(this._scrollDispatcher,this._viewportRuler,this._ngZone,e);static \u0275fac=function(i){return new(i||o)};static \u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),W=class{positionStrategy;scrollStrategy=new P;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var z=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Ft=(()=>{class o{_attachedOverlays=[];_document=h(w);_isAttached;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}static \u0275fac=function(i){return new(i||o)};static \u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Nt=(()=>{class o extends Ft{_ngZone=h(C);_renderer=h(F).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let s=i.length-1;s>-1;s--)if(i[s]._keydownEvents.observers.length>0){this._ngZone.run(()=>i[s]._keydownEvents.next(e));break}};static \u0275fac=(()=>{let e;return function(s){return(e||(e=M(o)))(s||o)}})();static \u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),It=(()=>{class o extends Ft{_platform=h(I);_ngZone=h(C);_renderer=h(F).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,s={capture:!0};this._cleanups=this._ngZone.runOutsideAngular(()=>[k(this._renderer,i,"pointerdown",this._pointerDownListener,s),k(this._renderer,i,"click",this._clickListener,s),k(this._renderer,i,"auxclick",this._clickListener,s),k(this._renderer,i,"contextmenu",this._clickListener,s)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=q(e)};_clickListener=e=>{let i=q(e),s=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let n=this._attachedOverlays.slice();for(let r=n.length-1;r>-1;r--){let a=n[r];if(a._outsidePointerEvents.observers.length<1||!a.hasAttached())continue;if(Et(a.overlayElement,i)||Et(a.overlayElement,s))break;let c=a._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}};static \u0275fac=(()=>{let e;return function(s){return(e||(e=M(o)))(s||o)}})();static \u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Et(o,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=t;for(;i;){if(i===o)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Tt=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=yt({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,s){},styles:[".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}"],encapsulation:2,changeDetection:0})}return o})(),rt=(()=>{class o{_platform=h(I);_containerElement;_document=h(w);_styleLoader=h(J);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||tt()){let s=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let n=0;n<s.length;n++)s[n].remove()}let i=this._document.createElement("div");i.classList.add(e),tt()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Tt)}static \u0275fac=function(i){return new(i||o)};static \u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),nt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,s){this._renderer=e,this._ngZone=i,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",s)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}},Z=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new v;_attachments=new v;_detachments=new v;_positionStrategy;_scrollStrategy;_locationChanges=U.EMPTY;_backdropRef=null;_previousHostParent;_keydownEvents=new v;_outsidePointerEvents=new v;_renders=new v;_afterRenderRef;_afterNextRenderRef;constructor(t,e,i,s,n,r,a,c,d,l=!1,f,y){this._portalOutlet=t,this._host=e,this._pane=i,this._config=s,this._ngZone=n,this._keyboardDispatcher=r,this._document=a,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=l,this._injector=f,this._renderer=y,s.scrollStrategy&&(this._scrollStrategy=s.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=s.positionStrategy,this._afterRenderRef=mt(()=>_t(()=>{this._renders.next()},{injector:this._injector}))}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}attach(t){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let e=this._portalOutlet.attach(t);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ut(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._afterRenderRef.destroy(),this._renders.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=E(E({},this._config),t),this._updateElementSize()}setDirection(t){this._config=lt(E({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=p(this._config.width),t.height=p(this._config.height),t.minWidth=p(this._config.minWidth),t.minHeight=p(this._config.minHeight),t.maxWidth=p(this._config.maxWidth),t.maxHeight=p(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new nt(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let s=Q(e||[]).filter(n=>!!n);s.length&&(i?t.classList.add(...s):t.classList.remove(...s))}_detachContentWhenEmpty(){this._ngZone.runOutsideAngular(()=>{let t=this._renders.pipe(dt(ht(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),t.unsubscribe())})})}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},xt="cdk-overlay-connected-position-bounding-box",Wt=/([A-Za-z%]+)$/,K=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed;_boundingBox;_lastPosition;_lastScrollVisibility;_positionChanges=new v;_resizeSubscription=U.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,s,n){this._viewportRuler=e,this._document=i,this._platform=s,this._overlayContainer=n,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(xt),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,s=this._containerRect,n=[],r;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,s,a),d=this._getOverlayPoint(c,e,a),l=this._getOverlayFit(d,e,i,a);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(l,d,i)){n.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!r||r.overlayFit.visibleArea<l.visibleArea)&&(r={overlayFit:l,overlayPoint:d,originPoint:c,position:a,overlayRect:e})}if(n.length){let a=null,c=-1;for(let d of n){let l=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);l>c&&(c=l,a=d)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&b(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(xt),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;if(t){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let e=this._getOriginPoint(this._originRect,this._containerRect,t);this._applyPosition(t,e)}else this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}_getOriginPoint(t,e,i){let s;if(i.originX=="center")s=t.left+t.width/2;else{let r=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;s=i.originX=="start"?r:a}e.left<0&&(s-=e.left);let n;return i.originY=="center"?n=t.top+t.height/2:n=i.originY=="top"?t.top:t.bottom,e.top<0&&(n-=e.top),{x:s,y:n}}_getOverlayPoint(t,e,i){let s;i.overlayX=="center"?s=-e.width/2:i.overlayX==="start"?s=this._isRtl()?-e.width:0:s=this._isRtl()?0:-e.width;let n;return i.overlayY=="center"?n=-e.height/2:n=i.overlayY=="top"?0:-e.height,{x:t.x+s,y:t.y+n}}_getOverlayFit(t,e,i,s){let n=Mt(e),{x:r,y:a}=t,c=this._getOffset(s,"x"),d=this._getOffset(s,"y");c&&(r+=c),d&&(a+=d);let l=0-r,f=r+n.width-i.width,y=0-a,u=a+n.height-i.height,_=this._subtractOverflows(n.width,l,f),g=this._subtractOverflows(n.height,y,u),at=_*g;return{visibleArea:at,isCompletelyWithinViewport:n.width*n.height===at,fitsInViewportVertically:g===n.height,fitsInViewportHorizontally:_==n.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let s=i.bottom-e.y,n=i.right-e.x,r=Dt(this._overlayRef.getConfig().minHeight),a=Dt(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||r!=null&&r<=s,d=t.fitsInViewportHorizontally||a!=null&&a<=n;return c&&d}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let s=Mt(e),n=this._viewportRect,r=Math.max(t.x+s.width-n.width,0),a=Math.max(t.y+s.height-n.height,0),c=Math.max(n.top-i.top-t.y,0),d=Math.max(n.left-i.left-t.x,0),l=0,f=0;return s.width<=n.width?l=d||-r:l=t.x<this._viewportMargin?n.left-i.left-t.x:0,s.height<=n.height?f=c||-a:f=t.y<this._viewportMargin?n.top-i.top-t.y:0,this._previousPushAmount={x:l,y:f},{x:t.x+l,y:t.y+f}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!zt(this._lastScrollVisibility,i)){let s=new z(t,i);this._positionChanges.next(s)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,s=t.overlayY;t.overlayX==="center"?i="center":this._isRtl()?i=t.overlayX==="start"?"right":"left":i=t.overlayX==="start"?"left":"right";for(let n=0;n<e.length;n++)e[n].style.transformOrigin=`${i} ${s}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,s=this._isRtl(),n,r,a;if(e.overlayY==="top")r=t.y,n=i.height-r+this._viewportMargin;else if(e.overlayY==="bottom")a=i.height-t.y+this._viewportMargin*2,n=i.height-a+this._viewportMargin;else{let u=Math.min(i.bottom-t.y+i.top,t.y),_=this._lastBoundingBoxSize.height;n=u*2,r=t.y-u,n>_&&!this._isInitialRender&&!this._growAfterOpen&&(r=t.y-_/2)}let c=e.overlayX==="start"&&!s||e.overlayX==="end"&&s,d=e.overlayX==="end"&&!s||e.overlayX==="start"&&s,l,f,y;if(d)y=i.width-t.x+this._viewportMargin*2,l=t.x-this._viewportMargin;else if(c)f=t.x,l=i.right-t.x;else{let u=Math.min(i.right-t.x+i.left,t.x),_=this._lastBoundingBoxSize.width;l=u*2,f=t.x-u,l>_&&!this._isInitialRender&&!this._growAfterOpen&&(f=t.x-_/2)}return{top:r,left:f,bottom:a,right:y,width:l,height:n}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let s={};if(this._hasExactPosition())s.top=s.left="0",s.bottom=s.right=s.maxHeight=s.maxWidth="",s.width=s.height="100%";else{let n=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;s.height=p(i.height),s.top=p(i.top),s.bottom=p(i.bottom),s.width=p(i.width),s.left=p(i.left),s.right=p(i.right),e.overlayX==="center"?s.alignItems="center":s.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?s.justifyContent="center":s.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",n&&(s.maxHeight=p(n)),r&&(s.maxWidth=p(r))}this._lastBoundingBoxSize=i,b(this._boundingBox.style,s)}_resetBoundingBoxStyles(){b(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){b(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let i={},s=this._hasExactPosition(),n=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(s){let l=this._viewportRuler.getViewportScrollPosition();b(i,this._getExactOverlayY(e,t,l)),b(i,this._getExactOverlayX(e,t,l))}else i.position="static";let a="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),d&&(a+=`translateY(${d}px)`),i.transform=a.trim(),r.maxHeight&&(s?i.maxHeight=p(r.maxHeight):n&&(i.maxHeight="")),r.maxWidth&&(s?i.maxWidth=p(r.maxWidth):n&&(i.maxWidth="")),b(this._pane.style,i)}_getExactOverlayY(t,e,i){let s={top:"",bottom:""},n=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(n=this._pushOverlayOnScreen(n,this._overlayRect,i)),t.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;s.bottom=`${r-(n.y+this._overlayRect.height)}px`}else s.top=p(n.y);return s}_getExactOverlayX(t,e,i){let s={left:"",right:""},n=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(n=this._pushOverlayOnScreen(n,this._overlayRect,i));let r;if(this._isRtl()?r=t.overlayX==="end"?"left":"right":r=t.overlayX==="end"?"right":"left",r==="right"){let a=this._document.documentElement.clientWidth;s.right=`${a-(n.x+this._overlayRect.width)}px`}else s.left=p(n.x);return s}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(s=>s.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Pt(t,i),isOriginOutsideView:ot(t,i),isOverlayClipped:Pt(e,i),isOverlayOutsideView:ot(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,s)=>i-Math.max(s,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+t-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:t-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&Q(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getOriginRect(){let t=this._origin;if(t instanceof B)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}};function b(o,t){for(let e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);return o}function Dt(o){if(typeof o!="number"&&o!=null){let[t,e]=o.split(Wt);return!e||e==="px"?parseFloat(t):null}return o||null}function Mt(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function zt(o,t){return o===t?!0:o.isOriginClipped===t.isOriginClipped&&o.isOriginOutsideView===t.isOriginOutsideView&&o.isOverlayClipped===t.isOverlayClipped&&o.isOverlayOutsideView===t.isOverlayOutsideView}var At="cdk-global-overlay-wrapper",$=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(At),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:s,height:n,maxWidth:r,maxHeight:a}=i,c=(s==="100%"||s==="100vw")&&(!r||r==="100%"||r==="100vw"),d=(n==="100%"||n==="100vh")&&(!a||a==="100%"||a==="100vh"),l=this._xPosition,f=this._xOffset,y=this._overlayRef.getConfig().direction==="rtl",u="",_="",g="";c?g="flex-start":l==="center"?(g="center",y?_=f:u=f):y?l==="left"||l==="end"?(g="flex-end",u=f):(l==="right"||l==="start")&&(g="flex-start",_=f):l==="left"||l==="start"?(g="flex-start",u=f):(l==="right"||l==="end")&&(g="flex-end",_=f),t.position=this._cssPosition,t.marginLeft=c?"0":u,t.marginTop=d?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":_,e.justifyContent=g,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(At),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},Yt=(()=>{class o{_viewportRuler=h(T);_document=h(w);_platform=h(I);_overlayContainer=h(rt);constructor(){}global(){return new $}flexibleConnectedTo(e){return new K(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}static \u0275fac=function(i){return new(i||o)};static \u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),G=(()=>{class o{scrollStrategies=h(Bt);_overlayContainer=h(rt);_positionBuilder=h(Yt);_keyboardDispatcher=h(Nt);_injector=h(A);_ngZone=h(C);_document=h(w);_directionality=h(Ct);_location=h(wt);_outsideClickDispatcher=h(It);_animationsModuleType=h(ft,{optional:!0});_idGenerator=h(Ot);_renderer=h(F).createRenderer(null,null);_appRef;_styleLoader=h(J);constructor(){}create(e){this._styleLoader.load(Tt);let i=this._createHostElement(),s=this._createPaneElement(i),n=this._createPortalOutlet(s),r=new W(e);return r.direction=r.direction||this._directionality.value,new Z(n,i,s,r,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations",this._injector.get(D),this._renderer)}position(){return this._positionBuilder}_createPaneElement(e){let i=this._document.createElement("div");return i.id=this._idGenerator.getId("cdk-overlay-"),i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){let e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(vt)),new S(e,null,this._appRef,this._injector,this._document)}static \u0275fac=function(i){return new(i||o)};static \u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Zt=new pt("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let o=h(G);return()=>o.scrollStrategies.reposition()}});function Kt(o){return()=>o.scrollStrategies.reposition()}var $t={provide:Zt,deps:[G],useFactory:Kt},Gt=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=N({type:o});static \u0275inj=x({providers:[G,$t],imports:[kt,st,it,it]})}return o})();export{Y as a,R as b,S as c,W as d,G as e,Gt as f};
