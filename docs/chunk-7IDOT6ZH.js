import{K as u,L as f}from"./chunk-OJS7LQ6Z.js";import{Ab as m,Jb as e,bb as h,fb as r,lb as d,mb as p,ob as g,ta as s,vb as n,wb as i,xb as a}from"./chunk-7EYVDJ3U.js";var b=()=>[import("./chunk-LTGGY7VK.js").then(t=>t.CodeHighLightComponent)];function S(t,l){if(t&1&&a(0,"app-code-highlight",3),t&2){let o=m();g("code",o.beforeCode)("language","typescript")}}function y(t,l){t&1&&(n(0,"span"),e(1,"Loading..."),i())}function x(t,l){if(t&1&&a(0,"app-code-highlight",3),t&2){let o=m();g("code",o.afterCode)("language","typescript")}}function L(t,l){t&1&&(n(0,"span"),e(1,"Loading..."),i())}var c=class t{constructor(){}beforeCode=s(`class Profile {
  private email: string;
  private bio: string;
  private theme: "LIGHT" | "DARK";
  private preferredLanguage: string;

  constructor(params: { email: string; bio: string; theme: "LIGHT" | "DARK"; preferredLanguage: string }) {
    const { email, bio, theme, preferredLanguage } = params;

    this.email = email;
    this.bio = bio;
    this.theme = theme;
    this.preferredLanguage = preferredLanguage;
  }

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public updatePreferredLanguage(language: string): void {
    this.preferredLanguage = language;
  }

  public getProfile() {
    return {
      email: this.email,
      bio: this.bio,
      theme: this.theme,
      preferredLanguage: this.preferredLanguage,
    };
  }
}
`);afterCode=s(`class Settings {
  constructor(
    protected theme: "LIGHT" | "DARK",
    protected preferredLanguage: string,
  ) {}

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public updatePreferredLanguage(language: string): void {
    this.preferredLanguage = language;
  }

  public getSettings() {
    return { theme: this.theme, preferredLanguage: this.preferredLanguage };
  }
}

class Profile {
  constructor(
    protected email: string,
    protected bio: string,
    protected settings: Settings,
  ) {}

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public getProfile() {
    return { email: this.email, bio: this.bio, settings: this.settings.getSettings() };
  }
}
`);static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["app-solid-single-responsibility"]],decls:35,vars:0,consts:[[1,"mb-4","mt-2"],[1,"icon-red"],[1,"icon-green"],[3,"code","language"]],template:function(o,v){o&1&&(n(0,"h1"),e(1,"S - Single Responsibility Principle (SRP)"),i(),n(2,"div",0)(3,"h6"),e(4,"Original Definition"),i(),e(5," There should never be more than one reason for a class to change.\xA0\xA0Every class should have only one responsibility."),a(6,"br")(7,"br"),n(8,"h6"),e(9,"Simple Definition"),i(),e(10,` SRP means that each class should only be responsible for one thing.\xA0\xA0It keeps classes focused and makes code easier to understand and maintain.
`),i(),n(11,"h5"),e(12,"Example"),i(),e(13,` Before following the Single Responsibility Principle (SRP), the Profile class
was handling both user profile data (like email, bio, etc.) and user settings
(theme and preferredLanguage).\xA0\xA0This violated SRP because a class
should have only one reason to change, but here the Profile class had multiple
reasons to change - if either the profile data structure or the settings
structure changed.`),a(14,"br")(15,"br"),e(16,` After following SRP, the code was refactored to separate
concerns.\xA0\xA0The Profile class now only deals with profile-related
information such as email and bio.\xA0\xA0The settings-related functionality
has been moved to a new Settings class.\xA0\xA0This change improves
maintainability and makes the codebase more flexible.\xA0\xA0Now, if there's
a need to update how settings are handled, it only affects the Settings class,
keeping the Profile class untouched. Additionally, it enhances code readability
and makes it easier to understand the purpose of each class.`),a(17,"br")(18,"br"),n(19,"mat-icon",1),e(20,"close_small"),i(),n(21,"b"),e(22,"Before following SRP:"),i(),r(23,S,1,2)(24,y,2,0),d(25,23,b,null,24),p(0,-1),n(27,"mat-icon",2),e(28,"check_small"),i(),n(29,"b"),e(30,"After following SRP:"),i(),r(31,x,1,2)(32,L,2,0),d(33,31,b,null,32),p(0,-1))},dependencies:[f,u],encapsulation:2})};export{c as a};
