import{a as c}from"./chunk-OEMQRESF.js";import{u as d,v as g}from"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as o,_a as p,jb as l,nb as n,ob as t,pb as i,ra as a}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var h=class r{constructor(){}beforeCode=a(`class TelegramApi {
  start() {
    console.log("You are connected to Telegram API!");
  }

  messageTo(targetId: number, message: string) {
    console.log(\`\${message} sent to \${targetId} by Telegram!\`);
  }
}

class WhatsappApi {
  setup() {
    console.log("You are connected to Whatsapp API!");
  }

  pushMessage(message: string, targetId: number) {
    console.log(\`\${message} sent to \${targetId} by Whatsapp!\`);
  }
}

class SignalApi {
  open() {
    console.log("You are connected to Signal API!");
  }

  postMessage(params: { id: number; text: string }) {
    console.log(\`\${params.text} sent to \${params.id} by Signal!\`);
  }
}

class Messenger {
  constructor(private api: TelegramApi | WhatsappApi | SignalApi) {}

  sendMessage(targetId: number, message: string) {
    if (this.api instanceof TelegramApi) {
      this.api.start();
      this.api.messageTo(targetId, message);
    } else if (this.api instanceof WhatsappApi) {
      this.api.setup();
      this.api.pushMessage(message, targetId);
    } else {
      this.api.open();
      this.api.postMessage({ id: targetId, text: message });
    }
  }
}
`);afterCode=a(`interface MessengerApi {
  connect: () => void;
  send: (targetId: string, message: string) => void;
}

class TelegramApi implements MessengerApi {
  connect() {
    console.log("You are connected to Telegram API!");
  }

  send(targetId: string, message: string) {
    console.log(\`\${message} sent to \${targetId} by Telegram!\`);
  }
}

class WhatsappApi implements MessengerApi {
  connect() {
    console.log("You are connected to Whatsapp API!");
  }

  send(targetId: string, message: string) {
    console.log(\`\${message} sent to \${targetId} by Whatsapp!\`);
  }
}

class SignalApi implements MessengerApi {
  connect() {
    console.log("You are connected to Signal API!");
  }

  send(targetId: string, message: string) {
    console.log(\`\${message} sent to \${targetId} by Signal!\`);
  }
}

class Messenger {
  constructor(private api: MessengerApi) {}

  sendMessage(targetId: string, message: string) {
    this.api.connect();
    this.api.send(targetId, message);
  }
}
`);static \u0275fac=function(s){return new(s||r)};static \u0275cmp=p({type:r,selectors:[["app-solid-dependency-inversion"]],decls:77,vars:4,consts:[[1,"mb-4","mt-2"],[1,"hljs-attr"],[1,"icon-red"],[3,"code","language"],[1,"icon-green"]],template:function(s,m){s&1&&(n(0,"h1"),e(1,"D - Dependency Inversion Principle (DIP)"),t(),n(2,"div",0)(3,"h6"),e(4,"Original Definition"),t(),e(5," High-level modules should not import anything from low-level modules.\xA0\xA0Both should depend on abstractions.\xA0\xA0Abstractions should not depend on details.\xA0\xA0Details (concrete implementations) should depend on abstractions."),i(6,"br")(7,"br"),n(8,"h6"),e(9,"Simple Definition"),t(),e(10,` DIP means that instead of high-level modules depending directly on low-level modules, both should depend on abstractions.\xA0\xA0This way, changes in low-level modules don't directly affect high-level ones, promoting flexible and maintainable code.
`),t(),n(11,"h5"),e(12,"Example"),t(),e(13," In the original code, the "),n(14,"span",1),e(15,"Messenger"),t(),e(16,` class
directly depends on specific implementations of messaging APIs like
`),n(17,"span",1),e(18,"TelegramApi"),t(),e(19,`,
`),n(20,"span",1),e(21,"WhatsappApi"),t(),e(22,`, and
`),n(23,"span",1),e(24,"SignalApi"),t(),e(25,`.\xA0\xA0This tightly couples
Messenger with these concrete implementations, making it difficult to change or
extend the system without modifying the
`),n(26,"span",1),e(27,"Messenger"),t(),e(28,` class itself.\xA0\xA0This violates
the Dependency Inversion Principle (DIP), which suggests that high-level modules
should not depend on low-level modules but rather on abstractions.`),i(29,"br")(30,"br"),e(31,` To adhere to DIP, we introduce an interface called
`),n(32,"span",1),e(33,"MessengerApi"),t(),e(34,`, which defines the methods that the
`),n(35,"span",1),e(36,"Messenger"),t(),e(37,` class requires from a messaging
API.\xA0\xA0Then, each messaging API class (`),n(38,"span",1),e(39,"TelegramApi"),t(),e(40,", "),n(41,"span",1),e(42,"WhatsappApi"),t(),e(43,` and
`),n(44,"span",1),e(45,"SignalApi"),t(),e(46,`) implements this interface, providing
their own implementation of the connect and send methods.`),i(47,"br")(48,"br"),e(49," By doing this, we decouple the "),n(50,"span",1),e(51,"Messenger"),t(),e(52,` class
from specific messaging API implementations.\xA0\xA0Now,
`),n(53,"span",1),e(54,"Messenger"),t(),e(55,` depends on the
`),n(56,"span",1),e(57,"MessengerApi"),t(),e(58,` interface rather than concrete
implementations.\xA0\xA0This allows us to easily switch between different
messaging APIs or add new ones without modifying the
`),n(59,"span",1),e(60,"Messenger"),t(),e(61,` class.\xA0\xA0Additionally, it
promotes code reusability and simplifies testing, as we can now easily mock the
`),n(62,"span",1),e(63,"MessengerApi"),t(),e(64,` interface for testing
purposes.\xA0\xA0Overall, following DIP enhances the flexibility,
maintainability, and testability of the codebase.`),i(65,"br")(66,"br"),n(67,"mat-icon",2),e(68,"close_small"),t(),n(69,"b"),e(70,"Before following DIP:"),t(),i(71,"app-code-highlight",3),n(72,"mat-icon",4),e(73,"check_small"),t(),n(74,"b"),e(75,"After following DIP:"),t(),i(76,"app-code-highlight",3)),s&2&&(o(71),l("code",m.beforeCode)("language","typescript"),o(5),l("code",m.afterCode)("language","typescript"))},dependencies:[c,g,d],encapsulation:2})};export{h as SolidDependencyInversionComponent};
