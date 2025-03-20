import{a as g}from"./chunk-OEMQRESF.js";import{u as c,v as u}from"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as s,_a as d,jb as o,nb as n,ob as t,pb as i,ra as r}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var p=class l{constructor(){}beforeCode=r(`type DB = "MySQL" | "Redis" | "Neo4j";

class QueryGenerator {
  getReadingQuery(database: DB): string {
    switch (database) {
      case "MySQL":
        return "SELECT * FROM MySQL";
      case "Redis":
        return "SCAN 0";
      case "Neo4j":
        return "MATCH (n) RETURN n";
      default:
        return "Unknown";
    }
  }

  getWritingQuery(database: DB, data: string): string {
    switch (database) {
      case "MySQL":
        return \`INSERT INTO MySQL VALUES (\${data})\`;
      case "Redis":
        return \`SET \${data}\`;
      case "Neo4j":
        return \`CREATE (\${data})\`;
      default:
        return "Unknown";
    }
  }
}
`);afterCode=r(`interface QueryGenerator {
  getReadingQuery: () => string;
  getWritingQuery: (data: string) => string;
}

class MySql implements QueryGenerator {
  getReadingQuery() {
    return "SELECT * FROM MySQL";
  }

  getWritingQuery(data: string) {
    return \`INSERT INTO MySQL VALUES (\${data})\`;
  }
}

class Redis implements QueryGenerator {
  getReadingQuery() {
    return "SCAN 0";
  }

  getWritingQuery(data: string) {
    return \`SET \${data}\`;
  }
}

class Neo4j implements QueryGenerator {
  getReadingQuery() {
    return "MATCH (n) RETURN n";
  }

  getWritingQuery(data: string) {
    return \`CREATE (\${data})\`;
  }
}
`);static \u0275fac=function(a){return new(a||l)};static \u0275cmp=d({type:l,selectors:[["app-solid-liskov-substitution"]],decls:89,vars:4,consts:[[1,"mb-4","mt-2"],[1,"hljs-attr"],[1,"icon-red"],[3,"code","language"],[1,"icon-green"]],template:function(a,m){a&1&&(n(0,"h1"),e(1,"L - Liskov Substitution Principle (LSP)"),t(),n(2,"div",0)(3,"h6"),e(4,"Original Definition"),t(),e(5," If "),n(6,"span",1),e(7,"S"),t(),e(8," is a subtype of "),n(9,"span",1),e(10,"T"),t(),e(11,", then objects of type "),n(12,"span",1),e(13,"T"),t(),e(14," in a program may be replaced with objects of type "),n(15,"span",1),e(16,"S"),t(),e(17," without altering any of the desirable properties of that program."),i(18,"br")(19,"br"),n(20,"h6"),e(21,"Simple Definition"),t(),e(22,` The LSP says that if you have a class, you should be able to use any of its subclasses interchangeably without breaking the program.
`),t(),n(23,"h5"),e(24,"Example"),t(),e(25,` In the initial example, we have an
`),n(26,"span",1),e(27,"ImageProcessor"),t(),e(28,` class responsible for various
image processing operations such as
`),n(29,"b"),e(30,"compression, enhancing size, removing background, and enhancing quality with AI"),t(),e(31,`.\xA0\xA0There's also a
`),n(32,"span",1),e(33,"LimitedImageProcessor"),t(),e(34,` class that extends
`),n(35,"span",1),e(36,"ImageProcessor"),t(),e(37,`, but it overrides the
`),n(38,"span",1),e(39,"removeBackground"),t(),e(40,` and
`),n(41,"span",1),e(42,"enhanceQualityWithAI"),t(),e(43,` methods to throw errors
indicating that these features are only available in the premium version.`),i(44,"br")(45,"br"),e(46,` This violates the Liskov Substitution Principle because substituting an instance
of `),n(47,"span",1),e(48,"LimitedImageProcessor"),t(),e(49,` for an instance of
`),n(50,"span",1),e(51,"ImageProcessor"),t(),e(52,` could lead to unexpected errors if
code relies on those overridden methods.`),i(53,"br")(54,"br"),e(55,` To adhere to the LSP, we refactor the classes. We create a
`),n(56,"span",1),e(57,"PremiumImageProcessor"),t(),e(58,` class that extends
`),n(59,"span",1),e(60,"ImageProcessor"),t(),e(61,` and implements the
removeBackground and enhanceQualityWithAI methods.\xA0\xA0This way, both
classes share a common interface and substituting an instance of
`),n(62,"span",1),e(63,"PremiumImageProcessor"),t(),e(64,` for an instance of
`),n(65,"span",1),e(66,"ImageProcessor"),t(),e(67,` won't break the program's
correctness.`),i(68,"br")(69,"br"),e(70," In the refactored version, "),n(71,"span",1),e(72,"ImageProcessor"),t(),e(73,` is now
focused on basic image processing operations like compression and enhancing
size, while `),n(74,"span",1),e(75,"PremiumImageProcessor"),t(),e(76,` extends it to
include premium features like removing background and enhancing quality with
AI.\xA0\xA0This separation allows for better code organization and adherence
to the Liskov Substitution Principle.`),i(77,"br")(78,"br"),n(79,"mat-icon",2),e(80,"close_small"),t(),n(81,"b"),e(82,"Before following LSP:"),t(),i(83,"app-code-highlight",3),n(84,"mat-icon",4),e(85,"check_small"),t(),n(86,"b"),e(87,"After following LSP:"),t(),i(88,"app-code-highlight",3)),a&2&&(s(83),o("code",m.beforeCode)("language","typescript"),s(5),o("code",m.afterCode)("language","typescript"))},dependencies:[g,u,c],encapsulation:2})};export{p as SolidLiskovSubstitutionComponent};
