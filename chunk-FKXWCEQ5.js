import{k as f}from"./chunk-6JZSNTP6.js";import{Bb as n,Cb as t,Db as o,Gb as p,Pb as e,hb as g,lb as s,qb as d,sb as c,ub as m,xa as l}from"./chunk-VK3H6FRJ.js";var h=()=>[import("./chunk-QSA45S2X.js").then(i=>i.CodeHighLightComponent)];function x(i,r){if(i&1&&o(0,"app-code-highlight",4),i&2){let a=p();m("code",a.beforeCode)("language","typescript")}}function y(i,r){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function S(i,r){if(i&1&&o(0,"app-code-highlight",4),i&2){let a=p();m("code",a.afterCode)("language","typescript")}}function b(i,r){i&1&&(n(0,"span"),e(1,"Loading..."),t())}var u=class i{constructor(){}beforeCode=l(`type DB = "MySQL" | "Redis" | "Neo4j";

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
`);afterCode=l(`interface QueryGenerator {
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
`);static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-solid-open-closed"]],decls:74,vars:0,consts:[[1,"mb-4","mt-2"],[1,"hljs-attr"],[1,"icon-red"],[1,"icon-green"],[3,"code","language"]],template:function(a,C){a&1&&(n(0,"h1"),e(1,"O - Open/Closed Principle (OCP)"),t(),n(2,"div",0)(3,"h6"),e(4,"Original Definition"),t(),e(5," Software entities should be open for extension, but closed for modification."),o(6,"br")(7,"br"),n(8,"h6"),e(9,"Simple Definition"),t(),e(10,` The Open/Closed Principle means that once you write a piece of code, you should be able to add new functionality to it without changing the existing code.\xA0\xA0It promotes extending the behavior of software rather than altering it, ensuring that changes don't break existing functionality.
`),t(),n(11,"h5"),e(12,"Example"),t(),e(13,` Before OCP implementation, the
`),n(14,"span",1),e(15,"QueryGenerator"),t(),e(16,` class directly handles different
types of databases, such as `),n(17,"i"),e(18,"MySQL"),t(),e(19,", "),n(20,"i"),e(21,"Redis"),t(),e(22,", and "),n(23,"i"),e(24,"Neo4j"),t(),e(25,`, within
its methods.\xA0\xA0This violates the Open/Closed Principle because if you
want to add support for a new database, you would need to modify the
`),n(26,"span",1),e(27,"QueryGenerator"),t(),e(28,` class by adding a new case to each
switch statement.\xA0\xA0This could lead to the class becoming bloated and
tightly coupled to specific database implementations, making it harder to
maintain and extend.`),o(29,"br")(30,"br"),e(31,` After implementing OCP, the code is refactored to use interfaces and separate
classes for each database type. Now, the QueryGenerator interface defines common
methods `),n(32,"span",1),e(33,"getReadingQuery"),t(),e(34,` and
`),n(35,"span",1),e(36,"getWritingQuery"),t(),e(37,`, while individual database
classes (`),n(38,"span",1),e(39,"MySql"),t(),e(40,`,
`),n(41,"span",1),e(42,"Redis"),t(),e(43,", and "),n(44,"span",1),e(45,"Neo4j"),t(),e(46,`)
implement these methods according to their specific behavior.`),o(47,"br")(48,"br"),e(49,` This approach adheres to the Open/Closed Principle because the
`),n(50,"span",1),e(51,"QueryGenerator"),t(),e(52,`
interface is open for extension, allowing you to add support for new databases
by creating new classes that implement the interface, without modifying existing
code. Additionally, it's closed for modification because changes to existing
database classes won't affect the
`),n(53,"span",1),e(54,"QueryGenerator"),t(),e(55,` interface or other database
implementations. This results in a more flexible, maintainable, and scalable
design.`),o(56,"br")(57,"br"),n(58,"mat-icon",2),e(59,"close_small"),t(),n(60,"b"),e(61,"Before following OCP:"),t(),s(62,x,1,2)(63,y,2,0),d(64,62,h,null,63),c(0,-1),n(66,"mat-icon",3),e(67,"check_small"),t(),n(68,"b"),e(69,"After following OCP:"),t(),s(70,S,1,2)(71,b,2,0),d(72,70,h,null,71),c(0,-1))},dependencies:[f],styles:[".icon-red[_ngcontent-%COMP%]{color:red;vertical-align:bottom}.icon-green[_ngcontent-%COMP%]{color:green;vertical-align:bottom}"]})};export{u as a};
