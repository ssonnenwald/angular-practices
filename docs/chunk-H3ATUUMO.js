import{a as h}from"./chunk-OEMQRESF.js";import{u as d,v as u}from"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as s,_a as c,jb as r,nb as i,ob as t,pb as n,ra as a}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var p=class l{constructor(){}beforeCode=a(`class AudioProcessor {
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
`);afterCode=a(`class AudioProcessor {
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
`);static \u0275fac=function(o){return new(o||l)};static \u0275cmp=c({type:l,selectors:[["app-solid-liskov-substitution"]],decls:95,vars:4,consts:[[1,"mb-4","mt-2"],[1,"hljs-attr"],[1,"icon-red"],[3,"code","language"],[1,"icon-green"]],template:function(o,m){o&1&&(i(0,"h1"),e(1,"L - Liskov Substitution Principle (LSP)"),t(),i(2,"div",0)(3,"h6"),e(4,"Original Definition"),t(),e(5," If "),i(6,"span",1),e(7,"S"),t(),e(8," is a subtype of "),i(9,"span",1),e(10,"T"),t(),e(11,", then objects of type "),i(12,"span",1),e(13,"T"),t(),e(14," in a program may be replaced with objects of type "),i(15,"span",1),e(16,"S"),t(),e(17," without altering any of the desirable properties of that program."),n(18,"br")(19,"br"),i(20,"h6"),e(21,"Simple Definition"),t(),e(22,` The LSP says that if you have a class, you should be able to use any of its subclasses interchangeably without breaking the program.
`),t(),i(23,"h5"),e(24,"Example"),t(),e(25,` In the initial example, we have an
`),i(26,"span",1),e(27,"ImageProcessor"),t(),e(28,` class responsible for various
image processing operations such as
`),i(29,"b"),e(30,"compression, enhancing size, removing background, and enhancing quality with AI"),t(),e(31,`.\xA0\xA0There's also a
`),i(32,"span",1),e(33,"LimitedImageProcessor"),t(),e(34,` class that extends
`),i(35,"span",1),e(36,"ImageProcessor"),t(),e(37,`, but it overrides the
`),i(38,"span",1),e(39,"removeBackground"),t(),e(40,` and
`),i(41,"span",1),e(42,"enhanceQualityWithAI"),t(),e(43,` methods to throw errors
indicating that these features are only available in the premium version.`),n(44,"br")(45,"br"),e(46,` This violates the Liskov Substitution Principle because substituting an instance
of `),i(47,"span",1),e(48,"LimitedImageProcessor"),t(),e(49,` for an instance of
`),i(50,"span",1),e(51,"ImageProcessor"),t(),e(52,` could lead to unexpected errors if
code relies on those overridden methods.`),n(53,"br")(54,"br"),e(55,` To adhere to the LSP, we refactor the classes. We create a
`),i(56,"span",1),e(57,"PremiumImageProcessor"),t(),e(58,` class that extends
`),i(59,"span",1),e(60,"ImageProcessor"),t(),e(61,` and implements the
`),i(62,"span",1),e(63,"removeBackground"),t(),e(64,` and
`),i(65,"span",1),e(66,"enhanceQualityWithAI"),t(),e(67,` methods.\xA0\xA0This
way, both classes share a common interface and substituting an instance of
`),i(68,"span",1),e(69,"PremiumImageProcessor"),t(),e(70,` for an instance of
`),i(71,"span",1),e(72,"ImageProcessor"),t(),e(73,` won't break the program's
correctness.`),n(74,"br")(75,"br"),e(76," In the refactored version, "),i(77,"span",1),e(78,"ImageProcessor"),t(),e(79,` is now
focused on basic image processing operations like compression and enhancing
size, while `),i(80,"span",1),e(81,"PremiumImageProcessor"),t(),e(82,` extends it to
include premium features like removing background and enhancing quality with
AI.\xA0\xA0This separation allows for better code organization and adherence
to the Liskov Substitution Principle.`),n(83,"br")(84,"br"),i(85,"mat-icon",2),e(86,"close_small"),t(),i(87,"b"),e(88,"Before following LSP:"),t(),n(89,"app-code-highlight",3),i(90,"mat-icon",4),e(91,"check_small"),t(),i(92,"b"),e(93,"After following LSP:"),t(),n(94,"app-code-highlight",3)),o&2&&(s(89),r("code",m.beforeCode)("language","typescript"),s(5),r("code",m.afterCode)("language","typescript"))},dependencies:[h,u,d],encapsulation:2})};export{p as SolidLiskovSubstitutionComponent};
