import{a as Ce}from"./chunk-V67GWZCI.js";import{a as Se}from"./chunk-JIMHWQXU.js";import{a as Me}from"./chunk-OQB3XOE3.js";import{a as xe}from"./chunk-427NUMYP.js";import{a as Pe}from"./chunk-452KF474.js";import{a as be}from"./chunk-3JPKWOCE.js";import{a as fe}from"./chunk-BLJZ5FXY.js";import{a as ge}from"./chunk-FKXWCEQ5.js";import{a as ve}from"./chunk-DANJF34I.js";import{a as ye}from"./chunk-4YB5YJP7.js";import{a as _e}from"./chunk-DFC575RQ.js";import{a as de}from"./chunk-ZJHMVH32.js";import{a as ce}from"./chunk-7W6WYTFD.js";import{a as ue}from"./chunk-7KUOAJAU.js";import{a as he}from"./chunk-N7IHODSG.js";import"./chunk-OG37YBBR.js";import"./chunk-7F22WIBR.js";import"./chunk-VNWHF5VY.js";import"./chunk-4VR3POOM.js";import"./chunk-2ZU3MP2K.js";import"./chunk-X56MGAKP.js";import{a as re}from"./chunk-TRDYVHAH.js";import{a as ae}from"./chunk-VTICK64L.js";import{a as le}from"./chunk-SGXXXPB2.js";import{a as se}from"./chunk-635265GJ.js";import{a as me}from"./chunk-563CCBCM.js";import{a as pe}from"./chunk-NERVCIW7.js";import{a as ne}from"./chunk-7SPX23B6.js";import{a as oe}from"./chunk-V324JVPG.js";import{a as ie}from"./chunk-BT35CURF.js";import{a as X,b as J,c as K,e as ee}from"./chunk-RJZVHOPJ.js";import"./chunk-6JZSNTP6.js";import"./chunk-G2XZRRWZ.js";import{a as te}from"./chunk-FA7E6IFZ.js";import{b as $,c as G}from"./chunk-HIDKMYDN.js";import{d as Z}from"./chunk-EC2FMD3D.js";import{$a as V,Ab as j,Bb as i,Cb as a,Da as R,Db as h,Eb as I,Fb as _,Gb as f,Ia as N,Lb as W,Mb as Q,Nb as Y,Ob as d,Pb as l,R as w,T as k,W as T,Wb as q,Xa as B,Ya as m,Z as g,aa as D,bc as U,cb as H,fa as M,ga as x,hb as y,la as E,lb as b,oa as F,qb as P,ra as O,rb as A,ub as p,xa as v,yb as u,zb as z}from"./chunk-VK3H6FRJ.js";import"./chunk-EQDQRRRY.js";var De="@",Ee=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=g(E);loadingSchedulerFn=g(Fe,{optional:!0});_engine;constructor(e,o,r,s,c){this.doc=e,this.delegate=o,this.zone=r,this.animationType=s,this.moduleImpl=c}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-MAFJRSSU.js").then(r=>r),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(r=>{throw new w(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let c=new s(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(e,o){let r=this.delegate.createRenderer(e,o);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new L(r);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let Te=c.createRenderer(e,o);s.use(Te),this.scheduler??=this.injector.get(F,null,{optional:!0}),this.scheduler?.notify(10)}).catch(c=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(o){H()};static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),L=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,o,r){this.delegate.insertBefore(n,e,o,r)}removeChild(n,e,o){this.delegate.removeChild(n,e,o)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,o,r){this.delegate.setAttribute(n,e,o,r)}removeAttribute(n,e,o){this.delegate.removeAttribute(n,e,o)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,o,r){this.delegate.setStyle(n,e,o,r)}removeStyle(n,e,o){this.delegate.removeStyle(n,e,o)}setProperty(n,e,o){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,o)),this.delegate.setProperty(n,e,o)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,o,r){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(n,e,o,r)),this.delegate.listen(n,e,o,r)}shouldReplay(n){return this.replay!==null&&n.startsWith(De)}},Fe=new T("");function Ie(t="animations"){return N("NgAsyncAnimations"),D([{provide:V,useFactory:(n,e,o)=>new Ee(n,e,o,t),deps:[Z,$,O]},{provide:R,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Le=[{path:"",pathMatch:"full",redirectTo:"home"},{title:"Home",path:"home",loadComponent:()=>import("./chunk-E4WDZS7T.js")},{title:"Patterns",path:"patterns",loadChildren:()=>import("./chunk-OVY47LAI.js")},{title:"SOLID",path:"solid",loadChildren:()=>import("./chunk-4B7FIVH3.js")},{title:"Typescript",path:"typescript",loadChildren:()=>import("./chunk-5JFTWST2.js")},{title:"Interview",path:"interview",loadChildren:()=>import("./chunk-VWEU3LTA.js")},{path:"**",redirectTo:""}];var we={providers:[q({eventCoalescing:!0}),ee(Le),Ie(),te({coreLibraryLoader:()=>import("./chunk-Z7S7HRF4.js"),lineNumbersLoader:()=>import("./chunk-RKNSGIOM.js"),languages:{typescript:()=>import("./chunk-V46M7662.js"),css:()=>import("./chunk-XBYYSBR6.js"),scss:()=>import("./chunk-5ZZQM5RM.js"),html:()=>import("./chunk-DOUVPFV5.js")}})]};var ke=[{icon:"home",label:"Home",route:"/",component:ne},{icon:"dashboard",label:"Patterns",route:"patterns",subItems:[{icon:"dashboard",label:"Design Patterns Overview",route:"/design-patterns",component:oe},{icon:"dashboard",label:"Creational Patterns",route:"/creational-patterns",component:ie,subItems:[{icon:"dashboard",label:"Singleton Pattern",route:"/singleton-pattern",component:re},{icon:"dashboard",label:"Builder Pattern",route:"/builder-pattern",component:ae},{icon:"dashboard",label:"Factory Pattern",route:"/factory-pattern",component:le}]},{icon:"dashboard",label:"Structural Patterns",route:"/structural-patterns",component:se,subItems:[{icon:"dashboard",label:"Facade Pattern",route:"/facade-pattern",component:me},{icon:"dashboard",label:"Adapter Pattern",route:"/adapter-pattern",component:pe}]},{icon:"dashboard",label:"Behavioral Patterns",route:"/behavioral-patterns",component:de,subItems:[{icon:"dashboard",label:"Strategy Pattern",route:"/strategy-pattern",component:ce},{icon:"dashboard",label:"Observer Pattern",route:"/observer-pattern",component:ue}]},{icon:"dashboard",label:"MVVM Pattern",route:"/mvvm-pattern",component:he}]},{icon:"dashboard",label:"SOLID",route:"solid",subItems:[{icon:"dashboard",label:"SOLID Overview",route:"/solid-overview",component:be},{icon:"dashboard",label:"Single Responsibility",route:"/solid-single-responsibility",component:fe},{icon:"dashboard",label:"Open/Closed",route:"/solid-open-closed",component:ge},{icon:"dashboard",label:"Liskov Substitution",route:"/solid-liskov-substitution",component:ve},{icon:"dashboard",label:"Interface Segregation",route:"/solid-interface-segregation",component:ye},{icon:"dashboard",label:"Dependency Inversion",route:"/solid-dependency-inversion",component:_e}]},{icon:"dashboard",label:"Typescript",route:"typescript",subItems:[{icon:"dashboard",label:"Abstract Class",route:"/abstract-class",component:Ce},{icon:"dashboard",label:"Abstract Method",route:"/abstract-method",component:Se},{icon:"dashboard",label:"Optional Method",route:"/optional-method",component:Me}]},{icon:"dashboard",label:"Interview",route:"interview",subItems:[{icon:"dashboard",label:"Interview",route:"/interview-questions",component:xe},{icon:"dashboard",label:"Tell Me About Yourself",route:"/tell-me-about-yourself",component:Pe}]}];var Re=["sidenav"],Ne=()=>[import("./chunk-2O4LIHCN.js").then(t=>t.MatToolbar),import("./chunk-XRDT5VOW.js").then(t=>t.MatButton),import("./chunk-EKMJGHWU.js").then(t=>t.MatMenu),import("./chunk-EKMJGHWU.js").then(t=>t.MatMenuItem),import("./chunk-EKMJGHWU.js").then(t=>t.MatMenuTrigger),import("./chunk-IACHN5MC.js").then(t=>t.MatIcon),import("./chunk-XRDT5VOW.js").then(t=>t.MatIconButton),K],Be=()=>[import("./chunk-XTUINQEO.js").then(t=>t.MatSidenav),import("./chunk-XTUINQEO.js").then(t=>t.MatSidenavContainer),import("./chunk-XTUINQEO.js").then(t=>t.MatSidenavContent),import("./chunk-IXWKU5YE.js").then(t=>t.MatNavList),X,import("./chunk-L46GR4CM.js").then(t=>t.MenuItemComponent)],Ve=(t,n)=>n.label;function He(t,n){if(t&1){let e=I();i(0,"button",10),_("click",function(){M(e);let r=f(2);return x(r.toggleSideNav())}),i(1,"mat-icon"),l(2,"menu"),a()()}}function ze(t,n){if(t&1&&(i(0,"button",11),l(1,"Patterns"),a(),i(2,"mat-menu",null,0)(4,"button",12),l(5," Design Patterns Overview "),a(),i(6,"button",13),l(7," Creational Patterns "),a(),i(8,"button",13),l(9," Structural Patterns "),a(),i(10,"button",13),l(11," Behavioral Patterns "),a(),i(12,"button",14),l(13," MVVM Pattern "),a()(),i(14,"mat-menu",null,1)(16,"button",15),l(17," Singleton Pattern "),a(),i(18,"button",16),l(19," Builder Pattern "),a(),i(20,"button",17),l(21," Factory Pattern "),a()(),i(22,"mat-menu",null,2)(24,"button",18),l(25," Facade Pattern "),a(),i(26,"button",19),l(27," Adapter Pattern "),a()(),i(28,"mat-menu",null,3)(30,"button",20),l(31," Strategy Pattern "),a(),i(32,"button",21),l(33," Observer Pattern "),a()()),t&2){let e=d(3),o=d(15),r=d(23),s=d(29);p("matMenuTriggerFor",e),m(6),p("matMenuTriggerFor",o),m(2),p("matMenuTriggerFor",r),m(2),p("matMenuTriggerFor",s)}}function je(t,n){if(t&1&&(i(0,"button",11),l(1,"SOLID"),a(),i(2,"mat-menu",null,4)(4,"button",22),l(5," SOLID Overview "),a(),i(6,"button",23),l(7," Single Responsibility "),a(),i(8,"button",24),l(9," Open/Closed "),a(),i(10,"button",25),l(11," Liskov Substitution "),a(),i(12,"button",26),l(13," Interface Segregation "),a(),i(14,"button",27),l(15," Dependency Inversion "),a()()),t&2){let e=d(3);p("matMenuTriggerFor",e)}}function We(t,n){if(t&1&&(i(0,"button",11),l(1,"Typescript"),a(),i(2,"mat-menu",null,5)(4,"button",28),l(5," Abstract Class "),a(),i(6,"button",29),l(7," Abstract Method "),a(),i(8,"button",30),l(9," Optional Method "),a()()),t&2){let e=d(3);p("matMenuTriggerFor",e)}}function Qe(t,n){if(t&1&&(i(0,"button",11),l(1,"Interview"),a(),i(2,"mat-menu",null,6)(4,"button",31),l(5," Interview Questions "),a(),i(6,"button",32),l(7," Tell Me About Yourself "),a()()),t&2){let e=d(3);p("matMenuTriggerFor",e)}}function Ye(t,n){if(t&1){let e=I();i(0,"mat-toolbar"),b(1,He,3,0,"button",8),i(2,"span",9),_("click",function(){M(e);let r=f();return x(r.navigateToHome())}),l(3,"Angular Practices"),a(),b(4,ze,34,4)(5,je,16,1)(6,We,10,1)(7,Qe,8,1),a()}if(t&2){let e=f();m(),u(e.isMobile()?1:-1),m(3),u(e.isMobile()?-1:4),m(),u(e.isMobile()?-1:5),m(),u(e.isMobile()?-1:6),m(),u(e.isMobile()?-1:7)}}function qe(t,n){t&1&&h(0,"div",33)}function Ue(t,n){if(t&1&&h(0,"app-menu-item",36),t&2){let e=n.$implicit,o=f(3);p("item",e)("collapsed",o.sideNavCollapsed())}}function Ze(t,n){if(t&1&&(i(0,"mat-nav-list"),z(1,Ue,1,2,"app-menu-item",36,Ve),a()),t&2){let e=f(2);m(),j(e.menuItems())}}function $e(t,n){if(t&1&&(i(0,"mat-sidenav-container")(1,"mat-sidenav",34,7),b(3,Ze,3,0,"mat-nav-list"),a(),i(4,"mat-sidenav-content")(5,"div",35),h(6,"router-outlet"),a()()()),t&2){let e=d(2);m(3),u(e.opened?3:-1)}}function Ge(t,n){t&1&&h(0,"div",37)}var C=class t{sidenav;router=g(J);isMobile=v(!1);sideNavCollapsed=v(!0);menuItems=v([...ke]);constructor(){this.checkMobileScreen(),U(()=>{this.isMobile()||(this.sidenav?.close(),this.sideNavCollapsed.set(!0))})}onResize(n){this.checkMobileScreen()}checkMobileScreen(){this.isMobile.set(window.innerWidth<=768)}navigateToHome(){this.router.navigate(["/"])}toggleSideNav(){this.sidenav?.toggle(),this.sideNavCollapsed.set(!this.sideNavCollapsed())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=y({type:t,selectors:[["app-layout"]],viewQuery:function(e,o){if(e&1&&W(Re,5),e&2){let r;Q(r=Y())&&(o.sidenav=r.first)}},hostBindings:function(e,o){e&1&&_("resize",function(s){return o.onResize(s)},!1,B)},decls:8,vars:0,consts:[["menuPatterns","matMenu"],["creationalPatterns","matMenu"],["structuralPatterns","matMenu"],["behavioralPatterns","matMenu"],["menuSolid","matMenu"],["menuTypescript","matMenu"],["menuInterview","matMenu"],["sidenav",""],["mat-icon-button",""],["role","button",1,"logo-text","me-2",3,"click"],["mat-icon-button","",3,"click"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","patterns/design-patterns"],["mat-menu-item","",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","/patterns/mvvm-pattern"],["mat-menu-item","","routerLink","/patterns/creational-patterns/singleton-pattern"],["mat-menu-item","","routerLink","/patterns/creational-patterns/builder-pattern"],["mat-menu-item","","routerLink","/patterns/creational-patterns/factory-pattern"],["mat-menu-item","","routerLink","/patterns/structural-patterns/facade-pattern"],["mat-menu-item","","routerLink","/patterns/structural-patterns/adapter-pattern"],["mat-menu-item","","routerLink","/patterns/behavioral-patterns/strategy-pattern"],["mat-menu-item","","routerLink","/patterns/behavioral-patterns/observer-pattern"],["mat-menu-item","","routerLink","/solid/solid-overview"],["mat-menu-item","","routerLink","/solid/solid-single-responsibility"],["mat-menu-item","","routerLink","/solid/solid-open-closed"],["mat-menu-item","","routerLink","/solid/solid-liskov-substitution"],["mat-menu-item","","routerLink","/solid/solid-interface-segregation"],["mat-menu-item","","routerLink","/solid/solid-dependency-inversion"],["mat-menu-item","","routerLink","/typescript/abstract-class"],["mat-menu-item","","routerLink","/typescript/abstract-method"],["mat-menu-item","","routerLink","/typescript/optional-method"],["mat-menu-item","","routerLink","/interview/interview-questions"],["mat-menu-item","","routerLink","/interview/tell-me-about-yourself"],[1,"loading-toolbar"],["mode","over","opened","false"],[1,"content"],[3,"item","collapsed"],[1,"loading-sidenav-container"]],template:function(e,o){e&1&&(b(0,Ye,8,5)(1,qe,1,0),P(2,0,Ne,null,1),A(),b(4,$e,7,1)(5,Ge,1,0),P(6,4,Be,null,5),A())},styles:[".loading-toolbar[_ngcontent-%COMP%]{height:64px}mat-toolbar[_ngcontent-%COMP%]{position:sticky;top:0;left:0;right:0;z-index:1000}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{padding:0 8px}mat-icon[_ngcontent-%COMP%]{margin-right:8px;color:#fff;width:24px;height:24px;font-size:24px;line-height:24px;display:inline-block}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-sidenav-container[_ngcontent-%COMP%]{height:calc(100vh - 64px)}.loading-sidenav-container[_ngcontent-%COMP%]{height:calc(100vh - 64px)}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;padding:32px;min-height:calc(100vh - 128px);background-color:var(--mat-sys-background);color:var(--mat-sys-on-background);overflow:auto}.logo-text[_ngcontent-%COMP%]{background:linear-gradient(168deg,#f033d6,#8b33ff 96%);background-clip:text;-webkit-background-clip:text;color:transparent;cursor:pointer}"]})};var S=class t{title="Angular Practices";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=y({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,o){e&1&&h(0,"app-layout")},dependencies:[C],encapsulation:2})};G(S,we).catch(t=>console.error(t));
