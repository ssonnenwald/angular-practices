import{K as x,L as f}from"./chunk-OJS7LQ6Z.js";import{Ab as u,Jb as e,bb as h,fb as l,lb as c,mb as d,ob as m,ta as r,vb as i,wb as t,xb as o}from"./chunk-7EYVDJ3U.js";var b=()=>[import("./chunk-LTGGY7VK.js").then(n=>n.CodeHighLightComponent)];function S(n,a){if(n&1&&o(0,"app-code-highlight",4),n&2){let s=u();m("code",s.beforeCode)("language","typescript")}}function g(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function A(n,a){if(n&1&&o(0,"app-code-highlight",4),n&2){let s=u();m("code",s.afterCode)("language","typescript")}}function E(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}var p=class n{constructor(){}beforeCode=r(`class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
    // Compress the size of the audio
  }

  changeTempo() {
    // Increase the size of the audio
  }

  separateMusicAndVocal() {
    // Remove the background of the audio
  }

  enhanceQualityWithAI() {
    // Enhance the quality of the audio with AI
  }
}

class LimitedAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  override separateMusicAndVocal(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }

  override enhanceQualityWithAI(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }
}
`);afterCode=r(`class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
    // Compress the size of the audio
  }

  changeTempo() {
    // Increase the size of the audio
  }
}

class PremiumAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  separateMusicAndVocal() {
    // Remove the background of the audio
  }

  enhanceQualityWithAI() {
    // Enhance the quality of the audio with AI
  }
}
`);static \u0275fac=function(s){return new(s||n)};static \u0275cmp=h({type:n,selectors:[["app-solid-liskov-substitution"]],decls:101,vars:0,consts:[[1,"mb-4","mt-2"],[1,"hljs-attr"],[1,"icon-red"],[1,"icon-green"],[3,"code","language"]],template:function(s,v){s&1&&(i(0,"h1"),e(1,"L - Liskov Substitution Principle (LSP)"),t(),i(2,"div",0)(3,"h6"),e(4,"Original Definition"),t(),e(5," If "),i(6,"span",1),e(7,"S"),t(),e(8," is a subtype of "),i(9,"span",1),e(10,"T"),t(),e(11,", then objects of type "),i(12,"span",1),e(13,"T"),t(),e(14," in a program may be replaced with objects of type "),i(15,"span",1),e(16,"S"),t(),e(17," without altering any of the desirable properties of that program."),o(18,"br")(19,"br"),i(20,"h6"),e(21,"Simple Definition"),t(),e(22,` The LSP says that if you have a class, you should be able to use any of its subclasses interchangeably without breaking the program.
`),t(),i(23,"h5"),e(24,"Example"),t(),e(25,` In the initial example, we have an
`),i(26,"span",1),e(27,"AudioProcessor"),t(),e(28,` class responsible for various
audio processing operations such as
`),i(29,"b"),e(30,"compression, increasing audio size, separate music/vocals, and enhancing quality with AI"),t(),e(31,`.\xA0\xA0There's also a
`),i(32,"span",1),e(33,"LimitedAudioProcessor"),t(),e(34,` class that extends
`),i(35,"span",1),e(36,"AudioProcessor"),t(),e(37,`, but it overrides the
`),i(38,"span",1),e(39,"separateMusicAndVocal"),t(),e(40,` and
`),i(41,"span",1),e(42,"enhanceQualityWithAI"),t(),e(43,` methods to throw errors
indicating that these features are only available in the premium version.`),o(44,"br")(45,"br"),e(46,` This violates the Liskov Substitution Principle because substituting an instance
of `),i(47,"span",1),e(48,"LimitedAudioProcessor"),t(),e(49,` for an instance of
`),i(50,"span",1),e(51,"AudioProcessor"),t(),e(52,` could lead to unexpected errors if
code relies on those overridden methods.`),o(53,"br")(54,"br"),e(55,` To adhere to the LSP, we refactor the classes. We create a
`),i(56,"span",1),e(57,"PremiumAudioProcessor"),t(),e(58,` class that extends
`),i(59,"span",1),e(60,"AudioProcessor"),t(),e(61,` and implements the
`),i(62,"span",1),e(63,"separateMusicAndVocal"),t(),e(64,` and
`),i(65,"span",1),e(66,"enhanceQualityWithAI"),t(),e(67,` methods.\xA0\xA0This
way, both classes share a common interface and substituting an instance of
`),i(68,"span",1),e(69,"PremiumAudioProcessor"),t(),e(70,` for an instance of
`),i(71,"span",1),e(72,"AudioProcessor"),t(),e(73,` won't break the program's
correctness.`),o(74,"br")(75,"br"),e(76," In the refactored version, "),i(77,"span",1),e(78,"AudioProcessor"),t(),e(79,` is now
focused on basic audio processing operations like compression and audio size,
while `),i(80,"span",1),e(81,"PremiumAudioProcessor"),t(),e(82,` extends it to include
premium features like separating music/vocals and enhancing quality with
AI.\xA0\xA0This separation allows for better code organization and adherence
to the Liskov Substitution Principle.`),o(83,"br")(84,"br"),i(85,"mat-icon",2),e(86,"close_small"),t(),i(87,"b"),e(88,"Before following LSP:"),t(),l(89,S,1,2)(90,g,2,0),c(91,89,b,null,90),d(0,-1),i(93,"mat-icon",3),e(94,"check_small"),t(),i(95,"b"),e(96,"After following LSP:"),t(),l(97,A,1,2)(98,E,2,0),c(99,97,b,null,98),d(0,-1))},dependencies:[f,x],encapsulation:2})};export{p as a};
