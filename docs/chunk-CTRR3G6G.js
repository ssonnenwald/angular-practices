import{Ib as e,cb as u,fb as s,kb as c,lb as m,nb as p,sa as r,ub as i,vb as t,wb as l,zb as d}from"./chunk-YRGLSMXJ.js";var h=()=>[import("./chunk-4VRTDKRB.js").then(n=>n.CodeHighLightComponent)];function S(n,a){if(n&1&&l(0,"app-code-highlight",5),n&2){let o=d();p("code",o.optionalMethodCode1)("language","typescript")}}function v(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function x(n,a){if(n&1&&l(0,"app-code-highlight",5),n&2){let o=d();p("code",o.optionalMethodCode2)("language","typescript")}}function g(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function y(n,a){if(n&1&&l(0,"app-code-highlight",5),n&2){let o=d();p("code",o.optionalMethodCode3)("language","typescript")}}function E(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function b(n,a){if(n&1&&l(0,"app-code-highlight",5),n&2){let o=d();p("code",o.optionalMethodCode4)("language","typescript")}}function C(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}var f=class n{optionalMethodCode1=r(`export interface NotificationService {
  sendNotification(message: string, recipient: string): void;

  // Optional method, not all services need to implement it
  trackDeliveryStatus?(recipient: string): string;
}
`);optionalMethodCode2=r(`import { NotificationService } from './notification.interface';

export class EmailNotificationService implements NotificationService {
  sendNotification(message: string, recipient: string): void {
    console.log(\`Sending Email: "\${message}" to \${recipient}\`);
  }

  // Implementing the optional method
  trackDeliveryStatus(recipient: string): string {
    return \`Tracking Email delivery to \${recipient}\`;
  }
}
`);optionalMethodCode3=r(`import { NotificationService } from './notification.interface';

export class SMSNotificationService implements NotificationService {
  sendNotification(message: string, recipient: string): void {
    console.log(\`Sending SMS: "\${message}" to \${recipient}\`);
  }

  // This service does not implement trackDeliveryStatus
}
`);optionalMethodCode4=r(`import { Component } from '@angular/core';
import { EmailNotificationService } from './email-notification.service';
import { SMSNotificationService } from './sms-notification.service';
import { NotificationService } from './notification.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Optional Method Example</h1>
    <div>
      <label for="notificationType">Choose Notification Type:</label>
      <select id="notificationType" (change)="onNotificationTypeChange($event)">
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
    </div>
    <div>
      <button (click)="sendNotification()">Send Notification</button>
      <button (click)="trackStatus()">Track Delivery Status</button>
    </div>
    <div *ngIf="status">
      <h3>Status:</h3>
      <pre>{{ status }}</pre>
    </div>
  \`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  status: string | null = null;
  private notificationService!: NotificationService;

  // Default to Email Notification Service
  constructor() {
    this.notificationService = new EmailNotificationService();
  }

  // Switch between Email and SMS notification services
  onNotificationTypeChange(event: Event): void {
    const type = (event.target as HTMLSelectElement).value;
    if (type === 'sms') {
      this.notificationService = new SMSNotificationService();
    } else {
      this.notificationService = new EmailNotificationService();
    }
  }

  // Call the sendNotification method of the selected service
  sendNotification(): void {
    const message = 'Hello, this is a test notification!';
    const recipient = 'user@example.com';
    this.notificationService.sendNotification(message, recipient);
  }

  // Call the trackDeliveryStatus method if it exists
  trackStatus(): void {
    if ('trackDeliveryStatus' in this.notificationService) {
      this.status = (this.notificationService as any).trackDeliveryStatus('user@example.com');
    } else {
      this.status = 'Tracking status is not available for this notification type.';
    }
  }
}
`);static \u0275fac=function(o){return new(o||n)};static \u0275cmp=u({type:n,selectors:[["app-optional-method"]],decls:125,vars:0,consts:[[1,"mb-4"],[1,"hljs-attr"],["start","2"],["start","3"],[1,"mt-4"],[3,"code","language"]],template:function(o,M){o&1&&(i(0,"h1"),e(1,"Optional Method"),t(),i(2,"div",0),e(3," In TypeScript (and Angular 19 with standalone components), you can define "),i(4,"b"),e(5,"optional methods"),t(),e(6," by using "),i(7,"b"),e(8,"optional properties"),t(),e(9,` in interfaces or classes.\xA0\xA0This is useful when you want a method or property to be available but not necessarily implemented by every class or component.
`),t(),i(10,"h2"),e(11,"Implementation"),t(),i(12,"div",0),e(13," Let's say you have a system where you have different types of "),i(14,"b"),e(15,"notification services"),t(),e(16," (e.g., Email, SMS, and Push).\xA0\xA0Some of these services might implement an optional method, such as "),i(17,"span",1),e(18,"trackDeliveryStatus()"),t(),e(19,", while others may not."),l(20,"br")(21,"br"),e(22,"We can define the optional method in an interface and implement it conditionally in certain services."),l(23,"br")(24,"br"),i(25,"ol")(26,"li")(27,"b"),e(28,"Define an Interface with Optional Methods"),t()()(),i(29,"div",0),e(30," In TypeScript, we can define an interface where a method is optional by using the "),i(31,"span",1),e(32,"?"),t(),e(33," syntax. "),t(),s(34,S,1,2)(35,v,2,0),c(36,34,h,null,35),m(0,-1),i(38,"div",0),e(39," Here, the "),i(40,"span",1),e(41,"trackDeliveryStatus()"),t(),e(42," method is optional, meaning it doesn\u2019t need to be implemented in every class that implements the "),i(43,"span",1),e(44,"NotificationService"),t(),e(45," interface. "),t(),i(46,"ol",2)(47,"li")(48,"b"),e(49,"Concrete Services Implementing the Interface"),t()()(),i(50,"div",0),e(51," Now let\u2019s implement a couple of "),i(52,"b"),e(53,"notification services"),t(),e(54,": one that includes the optional "),i(55,"span",1),e(56,"trackDeliveryStatus()"),t(),e(57," method and one that does not. "),t(),s(58,x,1,2)(59,g,2,0),c(60,58,h,null,59),m(0,-1),s(62,y,1,2)(63,E,2,0),c(64,62,h,null,63),m(0,-1),i(66,"ol",3)(67,"li")(68,"b"),e(69,"Standalone Component Using the Services"),t()()(),i(70,"div",0),e(71," Next, let\u2019s create a "),i(72,"b"),e(73,"standalone component"),t(),e(74," that uses the "),i(75,"span",1),e(76,"NotificationService"),t(),e(77,".\xA0\xA0If the service implements "),i(78,"span",1),e(79,"trackDeliveryStatus()"),t(),e(80,", it will call that method; otherwise, it will simply skip it. "),t(),s(81,b,1,2)(82,C,2,0),c(83,81,h,null,82),m(0,-1),i(85,"h4",4),e(86,"Explanation:"),t(),i(87,"ul")(88,"li")(89,"b"),e(90,"Optional Method in Interface"),t(),e(91,":\xA0\xA0In the "),i(92,"span",1),e(93,"NotificationService"),t(),e(94," interface, "),i(95,"span",1),e(96,"trackDeliveryStatus?()"),t(),e(97," is an optional method.\xA0\xA0Classes implementing this interface can choose to implement it or not.\xA0\xA0This makes the method flexible and non-mandatory for all services. "),t(),i(98,"li")(99,"b"),e(100,"Concrete Classes"),t(),e(101,":\xA0\xA0"),i(102,"span",1),e(103,"EmailNotificationService"),t(),e(104," implements the "),i(105,"span",1),e(106,"trackDeliveryStatus()"),t(),e(107," method, but SMSNotificationService does not.\xA0\xA0This shows how you can have an optional method that doesn\u2019t always need to be implemented. "),t(),i(108,"li")(109,"b"),e(110,"Component Logic"),t(),e(111,":\xA0\xA0The "),i(112,"span",1),e(113,"AppComponent"),t(),e(114," provides functionality to switch between the Email and SMS notification services.\xA0\xA0It also includes a Track Delivery Status button that checks if the service has implemented the "),i(115,"span",1),e(116,"trackDeliveryStatus()"),t(),e(117," method.\xA0\xA0If the method is available, it is called; otherwise, a default message is shown. "),t()(),i(118,"h4",4),e(119,"Conclusion:"),t(),i(120,"div",0),e(121," This example demonstrates how to use "),i(122,"b"),e(123,"optional methods"),t(),e(124," in Angular 19 with standalone components.\xA0\xA0By marking methods as optional in an interface, you can provide flexibility in how services or components implement certain functionality.\xA0\xA0This approach allows you to create more adaptable and modular code. "),t()())},styles:["mark[_ngcontent-%COMP%]{background-color:#424242!important;color:#fff!important}"]})};export{f as a};
