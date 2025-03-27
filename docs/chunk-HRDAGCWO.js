import{E as g}from"./chunk-Z7HOT556.js";import{Ib as e,cb as f,fb as s,kb as c,lb as d,nb as m,sa as l,ub as n,vb as t,wb as r,zb as p}from"./chunk-YRGLSMXJ.js";var x=()=>[import("./chunk-4VRTDKRB.js").then(i=>i.CodeHighLightComponent)];function h(i,a){if(i&1&&r(0,"app-code-highlight",4),i&2){let o=p();m("code",o.beforeCode)("language","typescript")}}function S(i,a){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function y(i,a){if(i&1&&r(0,"app-code-highlight",4),i&2){let o=p();m("code",o.afterCode)("language","typescript")}}function P(i,a){i&1&&(n(0,"span"),e(1,"Loading..."),t())}var u=class i{constructor(){}beforeCode=l(`interface VPNConnection {
  useL2TP: () => void;
  useOpenVPN: () => void;
  useV2Ray: () => void;
  useShadowsocks: () => void;
}

class ExternalNetwork implements VPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your external network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your external network!");
  }

  useV2Ray() {
    console.log("V2Ray is ready for your external network!");
  }

  useShadowsocks() {
    console.log("Shadowsocks is ready for your external network!");
  }
}

class InternalNetwork implements VPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your internal network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your internal network!");
  }

  useV2Ray() {
    throw Error("V2Ray is not available for your internal network!");
  }

  useShadowsocks() {
    throw Error("Shadowsocks is not available for your internal network!");
  }
}
`);afterCode=l(`interface BaseVPNConnection {
  useL2TP: () => void;
  useOpenVPN: () => void;
}

interface ExtraVPNConnection {
  useV2Ray: () => void;
  useShadowsocks: () => void;
}

class ExternalNetwork implements BaseVPNConnection, ExtraVPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your external network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your external network!");
  }

  useV2Ray() {
    console.log("V2Ray is ready for your external network!");
  }

  useShadowsocks() {
    console.log("Shadowsocks is ready for your external network!");
  }
}

class InternalNetwork implements BaseVPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your internal network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your internal network!");
  }
}
`);static \u0275fac=function(o){return new(o||i)};static \u0275cmp=f({type:i,selectors:[["app-solid-interface-segregation"]],decls:89,vars:0,consts:[[1,"mb-4","mt-2"],[1,"hljs-attr"],[1,"icon-red"],[1,"icon-green"],[3,"code","language"]],template:function(o,w){o&1&&(n(0,"h1"),e(1,"I - Interface Segregation Principle (ISP)"),t(),n(2,"div",0)(3,"h6"),e(4,"Original Definition"),t(),e(5," No code should be forced to depend on methods it does not use."),r(6,"br")(7,"br"),n(8,"h6"),e(9,"Simple Definition"),t(),e(10,` The ISP means that clients should not be forced to implement methods they don't use.\xA0\xA0It's like saying, "Don't make people take things they don't need."
`),t(),n(11,"h5"),e(12,"Example"),t(),e(13,` In the initial implementation before applying the ISP, the
`),n(14,"span",1),e(15,"VPNConnection"),t(),e(16,` interface encompasses methods for
various VPN protocols, including `),n(17,"span",1),e(18,"useL2TP"),t(),e(19,`,
`),n(20,"span",1),e(21,"useOpenVPN"),t(),e(22,`,
`),n(23,"span",1),e(24,"useV2Ray"),t(),e(25,`, and
`),n(26,"span",1),e(27,"useShadowsocks"),t(),e(28,`.\xA0\xA0However, not all
classes implementing this interface require all these methods.\xA0\xA0For
instance, the `),n(29,"span",1),e(30,"InternalNetwork"),t(),e(31,` class only utilizes
`),n(32,"span",1),e(33,"useL2TP"),t(),e(34,` and
`),n(35,"span",1),e(36,"useOpenVPN"),t(),e(37,`, yet it is forced to implement all
methods defined in the `),n(38,"span",1),e(39,"VPNConnection"),t(),e(40,` interface,
leading to unnecessary dependencies and potential errors if methods are called
inappropriately.`),r(41,"br")(42,"br"),e(43,` To address this issue, the Interface Segregation Principle suggests breaking
down the monolithic interface into smaller, more focused
interfaces.\xA0\xA0In the improved implementation, two interfaces are
introduced: `),n(44,"span",1),e(45,"BaseVPNConnection"),t(),e(46,` and
`),n(47,"span",1),e(48,"ExtraVPNConnection"),t(),e(49,`.\xA0\xA0The
`),n(50,"span",1),e(51,"BaseVPNConnection"),t(),e(52,` interface contains methods
common to both external and internal networks (`),n(53,"span",1),e(54,"useL2TP"),t(),e(55,`
and `),n(56,"span",1),e(57,"useOpenVPN"),t(),e(58,`), while the ExtraVPNConnection
interface includes methods specific to external networks (`),n(59,"span",1),e(60,"useV2Ray"),t(),e(61,`
and `),n(62,"span",1),e(63,"useShadowsocks"),t(),e(64,")."),r(65,"br")(66,"br"),e(67," With this segregation, the "),n(68,"span",1),e(69,"InternalNetwork"),t(),e(70,` class
now only needs to implement the methods relevant to its functionality, adhering
to the principle of "clients should not be forced to depend on interfaces they
do not use."\xA0\xA0This restructuring enhances code clarity, reduces
unnecessary dependencies, and makes the system more maintainable and
flexible.\xA0\xA0Additionally, it mitigates the risk of errors by ensuring
that classes only expose the methods they actually support, promoting better
encapsulation and separation of concerns.`),r(71,"br")(72,"br"),n(73,"mat-icon",2),e(74,"close_small"),t(),n(75,"b"),e(76,"Before following ISP:"),t(),s(77,h,1,2)(78,S,2,0),c(79,77,x,null,78),d(0,-1),n(81,"mat-icon",3),e(82,"check_small"),t(),n(83,"b"),e(84,"After following ISP:"),t(),s(85,y,1,2)(86,P,2,0),c(87,85,x,null,86),d(0,-1))},dependencies:[g],styles:[".icon-red[_ngcontent-%COMP%]{color:red;vertical-align:bottom}.icon-green[_ngcontent-%COMP%]{color:green;vertical-align:bottom}"]})};export{u as a};
