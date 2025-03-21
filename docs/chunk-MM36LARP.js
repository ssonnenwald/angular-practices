import{a as h}from"./chunk-OEMQRESF.js";import{u as m,v as p}from"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as r,_a as d,jb as o,nb as i,ob as t,pb as n,ra as s}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var c=class l{constructor(){}beforeCode=s(`class Profile {
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
`);static \u0275fac=function(a){return new(a||l)};static \u0275cmp=d({type:l,selectors:[["app-solid-single-responsibility"]],decls:29,vars:4,consts:[[1,"mb-4","mt-2"],[1,"icon-red"],[3,"code","language"],[1,"icon-green"]],template:function(a,g){a&1&&(i(0,"h1"),e(1,"S - Single Responsibility Principle (SRP)"),t(),i(2,"div",0)(3,"h6"),e(4,"Original Definition"),t(),e(5," There should never be more than one reason for a class to change.\xA0\xA0Every class should have only one responsibility."),n(6,"br")(7,"br"),i(8,"h6"),e(9,"Simple Definition"),t(),e(10,` SRP means that each class should only be responsible for one thing.\xA0\xA0It keeps classes focused and makes code easier to understand and maintain.
`),t(),i(11,"h5"),e(12,"Example"),t(),e(13,` Before following the Single Responsibility Principle (SRP), the Profile class
was handling both user profile data (like email, bio, etc.) and user settings
(theme and preferredLanguage).\xA0\xA0This violated SRP because a class
should have only one reason to change, but here the Profile class had multiple
reasons to change - if either the profile data structure or the settings
structure changed.`),n(14,"br")(15,"br"),e(16,` After following SRP, the code was refactored to separate
concerns.\xA0\xA0The Profile class now only deals with profile-related
information such as email and bio.\xA0\xA0The settings-related functionality
has been moved to a new Settings class.\xA0\xA0This change improves
maintainability and makes the codebase more flexible.\xA0\xA0Now, if there's
a need to update how settings are handled, it only affects the Settings class,
keeping the Profile class untouched. Additionally, it enhances code readability
and makes it easier to understand the purpose of each class.`),n(17,"br")(18,"br"),i(19,"mat-icon",1),e(20,"close_small"),t(),i(21,"b"),e(22,"Before following SRP:"),t(),n(23,"app-code-highlight",2),i(24,"mat-icon",3),e(25,"check_small"),t(),i(26,"b"),e(27,"After following SRP:"),t(),n(28,"app-code-highlight",2)),a&2&&(r(23),o("code",g.beforeCode)("language","typescript"),r(5),o("code",g.afterCode)("language","typescript"))},dependencies:[h,p,m],encapsulation:2})};export{c as SolidSingleResponsibilityComponent};
