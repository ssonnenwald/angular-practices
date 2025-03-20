import{B as E,C as ht,a as K,b as J,c as tt,e as k,f as N,h as et,l as it,m as ot,o as st,p as j,u as nt,v as rt,w as at,y as lt,z as ct}from"./chunk-PEALLUVR.js";import{b as dt}from"./chunk-YB4KKQIU.js";import{j as q}from"./chunk-4WPPCIBR.js";import{d as S,k as Q}from"./chunk-ISSYNZCZ.js";import{$a as A,Bb as v,Ca as M,Cb as B,Db as W,Ib as $,N as a,Pa as c,Q as H,R as O,T as u,V as b,W as r,Wa as R,_a as I,aa as T,ab as P,ba as C,f as m,fa as F,jb as _,kb as x,la as w,nb as l,ob as g,pa as f,pb as L,qb as D,ra as Y,rb as y,vb as X,xa as z,xb as G,yb as U,zb as Z}from"./chunk-SY7OXONI.js";import{a as p}from"./chunk-EQDQRRRY.js";var wt=["tooltip"],ft=20;var _t=new u("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let s=r(E);return()=>s.scrollStrategies.reposition({scrollThrottle:ft})}});function It(s){return()=>s.scrollStrategies.reposition({scrollThrottle:ft})}var Dt={provide:_t,deps:[E],useFactory:It};function St(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}var Et=new u("mat-tooltip-default-options",{providedIn:"root",factory:St});var pt="tooltip-panel",mt=tt({passive:!0}),Ot=8,Mt=8,Rt=24,At=200,gt=(()=>{class s{_elementRef=r(f);_ngZone=r(w);_platform=r(J);_ariaDescriber=r(et);_focusMonitor=r(it);_dir=r(st);_injector=r(F);_viewContainerRef=r(R);_defaultOptions=r(Et,{optional:!0});_overlayRef;_tooltipInstance;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Pt;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=k(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=k(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=N(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=N(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_passiveListeners=[];_touchstartTimeout=null;_destroyed=new m;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Ot}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(a(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([e,i])=>{t.removeEventListener(e,i,mt)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new at(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(a(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let n=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&n._origin instanceof f)return this._overlayRef;this._detach()}let e=this._injector.get(lt).getAncestorScrollContainers(this._elementRef),i=this._injector.get(E),o=i.position().flexibleConnectedTo(this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e);return o.positionChanges.pipe(a(this._destroyed)).subscribe(n=>{this._updateCurrentPositionClass(n.connectionPair),this._tooltipInstance&&n.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=i.create({direction:this._dir,positionStrategy:o,panelClass:`${this._cssClassPrefix}-${pt}`,scrollStrategy:this._injector.get(_t)()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(a(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(a(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(a(this._destroyed)).subscribe(n=>{this._isTooltipVisible()&&n.keyCode===27&&!K(n)&&(n.preventDefault(),n.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(a(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(p(p({},i.main),o.main)),this._addOffset(p(p({},i.fallback),o.fallback))])}_addOffset(t){let e=Mt,i=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=i?-e:e:t.originX==="end"&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"||e=="below"?i={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={originX:"end",originY:"center"});let{x:o,y:n}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:n}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"?i={overlayX:"center",overlayY:"bottom"}:e=="below"?i={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={overlayX:"start",overlayY:"center"});let{x:o,y:n}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:n}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),M(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,n;if(e==="center"?this._dir&&this._dir.value==="rtl"?n=i==="end"?"left":"right":n=i==="start"?"left":"right":n=e==="bottom"&&o==="top"?"above":"below",n!==this._currentPosition){let d=this._overlayRef;if(d){let V=`${this._cssClassPrefix}-${pt}-`;d.removePanelClass(V+this._currentPosition),d.addPanelClass(V+n)}this._currentPosition=n}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}]):this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;let t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}],["wheel",e=>this._wheelListener(e)]);else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};t.push(["touchend",e],["touchcancel",e])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([e,i])=>{this._elementRef.nativeElement.addEventListener(e,i,mt)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){let e=this._injector.get(S).elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,i=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(t==="on"||!e.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||M({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}static \u0275fac=function(e){return new(e||s)};static \u0275dir=P({type:s,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,i){e&2&&x("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return s})(),Pt=(()=>{class s{_changeDetectorRef=r($);_elementRef=r(f);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled;_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new m;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){let t=r(z,{optional:!0});this._animationsDisabled=t==="NoopAnimations"}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Rt&&t.width>=At}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let n=getComputedStyle(e);(n.getPropertyValue("animation-duration")==="0s"||n.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=I({type:s,selectors:[["mat-tooltip-component"]],viewQuery:function(e,i){if(e&1&&G(wt,7),e&2){let o;U(o=Z())&&(i._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,i){e&1&&y("mouseleave",function(n){return i._handleMouseLeave(n)})},decls:4,vars:4,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend","ngClass"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,i){if(e&1){let o=D();l(0,"div",1,0),y("animationend",function(d){return T(o),C(i._handleAnimationEnd(d))}),l(2,"div",2),v(3),g()()}e&2&&(x("mdc-tooltip--multiline",i._isMultiline),_("ngClass",i.tooltipClass),c(3),B(i.message))},dependencies:[Q],styles:['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0})}return s})();var yt=(()=>{class s{static \u0275fac=function(e){return new(e||s)};static \u0275mod=A({type:s});static \u0275inj=O({providers:[Dt],imports:[ot,ht,j,j,ct]})}return s})();var vt=new u("WindowToken",typeof window<"u"&&window.document?{providedIn:"root",factory:()=>window}:{providedIn:"root",factory:()=>{}});var bt=(()=>{class s{constructor(t,e,i){this.ngZone=t,this.document=e,this.window=i,this.copySubject=new m,this.copyResponse$=this.copySubject.asObservable(),this.config={}}configure(t){this.config=t}copy(t){if(!this.isSupported||!t)return this.pushCopyResponse({isSuccess:!1,content:t});let e=this.copyFromContent(t);return e?this.pushCopyResponse({content:t,isSuccess:e}):this.pushCopyResponse({isSuccess:!1,content:t})}get isSupported(){return!!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(t){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){if(t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return!0}throw new Error("Target should be input or textarea")}copyFromInputElement(t,e=!0){try{this.selectTarget(t);let i=this.copyText();return this.clearSelection(e?t:void 0,this.window),i&&this.isCopySuccessInIE11()}catch{return!1}}isCopySuccessInIE11(){let t=this.window.clipboardData;return!(t&&t.getData&&!t.getData("Text"))}copyFromContent(t,e=this.document.body){if(this.tempTextArea&&!e.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement||void 0),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{e.appendChild(this.tempTextArea)}catch{throw new Error("Container should be a Dom element")}}this.tempTextArea.value=t;let i=this.copyFromInputElement(this.tempTextArea,!1);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement||void 0),i}destroy(t=this.document.body){this.tempTextArea&&(t.removeChild(this.tempTextArea),this.tempTextArea=void 0)}selectTarget(t){return t.select(),t.setSelectionRange(0,t.value.length),t.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(t,e){t&&t.focus(),e.getSelection()?.removeAllRanges()}createTempTextArea(t,e){let i=t.documentElement.getAttribute("dir")==="rtl",o;o=t.createElement("textarea"),o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[i?"right":"left"]="-9999px";let n=e.pageYOffset||t.documentElement.scrollTop;return o.style.top=n+"px",o.setAttribute("readonly",""),o}pushCopyResponse(t){this.copySubject.observers.length>0&&this.ngZone.run(()=>{this.copySubject.next(t)})}pushCopyReponse(t){this.pushCopyResponse(t)}}return s.\u0275fac=function(t){return new(t||s)(b(w),b(S),b(vt,8))},s.\u0275prov=H({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var Tt=class s{code=Y("");language="typescript";clipboardService=r(bt);constructor(){}copyToClipboard(h){this.clipboardService.copyFromContent(h)}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=I({type:s,selectors:[["app-code-highlight"]],inputs:{code:"code",language:"language"},decls:8,vars:4,consts:[["tooltip","matTooltip"],[1,"d-flex","justify-content-between","rounded-top-4","px-4","py-2","code-header","text-xs"],["aria-label","Copy","matTooltip","Copy",1,"d-flex","gap-1","px-4","py-1","copy-button",3,"click","matTooltipPosition"],["fontIcon","content_copy","aria-label","Copy","aria-hidden","false",1,"copy-icon"],["lineNumbers","",1,"rounded-bottom-4","ps-4",3,"highlight","language"]],template:function(t,e){if(t&1){let i=D();l(0,"div",1),v(1),l(2,"button",2,0),y("click",function(){return T(i),C(e.copyToClipboard(e.code()))}),L(4,"mat-icon",3),v(5,"Copy "),g()(),l(6,"pre"),L(7,"code",4),g()}t&2&&(c(),W(" ",e.language," "),c(),_("matTooltipPosition","below"),c(5),X("language",e.language),_("highlight",e.code()))},dependencies:[q,dt,rt,nt,yt,gt],styles:[".code-header[_ngcontent-%COMP%]{background-color:#2f2f2f;color:#b4b4b4}.text-xs[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}.icon-xs[_ngcontent-%COMP%]{stroke-width:1.5;flex-shrink:0;height:.75rem;width:.75rem}.copy-button[_ngcontent-%COMP%]{background-color:transparent;background-image:none;font-size:.75rem;line-height:1rem;color:#b4b4b4;margin:0;border-style:none;padding:0!important}.copy-icon[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem;width:fit-content;height:fit-content}"]})};export{Tt as a};
