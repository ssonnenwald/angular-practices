import{Ab as p,Jb as e,bb as S,fb as l,lb as r,mb as m,ob as d,ta as c,vb as i,wb as t,xb as s}from"./chunk-7EYVDJ3U.js";var f=()=>[import("./chunk-LTGGY7VK.js").then(n=>n.CodeHighLightComponent)];function x(n,a){if(n&1&&s(0,"app-code-highlight",5),n&2){let o=p();d("code",o.abstractMethodCode1)("language","typescript")}}function u(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function b(n,a){if(n&1&&s(0,"app-code-highlight",5),n&2){let o=p();d("code",o.abstractMethodCode2)("language","typescript")}}function g(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function v(n,a){if(n&1&&s(0,"app-code-highlight",5),n&2){let o=p();d("code",o.abstractMethodCode3)("language","typescript")}}function E(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function N(n,a){if(n&1&&s(0,"app-code-highlight",5),n&2){let o=p();d("code",o.abstractMethodCode4)("language","typescript")}}function A(n,a){n&1&&(i(0,"span"),e(1,"Loading..."),t())}var h=class n{abstractMethodCode1=c(`export abstract class NotificationService {
  // Abstract method - subclasses must implement this
  abstract sendNotification(message: string, recipient: string): void;

  // Optional helper method that can be used by subclasses
  logNotification(message: string, recipient: string): void {
    console.log(\`Notification sent to \${recipient}: \${message}\`);
  }
}
`);abstractMethodCode2=c(`import { NotificationService } from './notification.service';

export class EmailNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Custom logic for sending an email
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending Email: "\${message}" to \${recipient}\`);
  }
}
`);abstractMethodCode3=c(`import { NotificationService } from './notification.service';

export class SMSNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Custom logic for sending an SMS
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending SMS: "\${message}" to \${recipient}\`);
  }
}
`);abstractMethodCode4=c(`import { Component } from '@angular/core';
import { EmailNotificationService } from './email-notification.service';
import { SMSNotificationService } from './sms-notification.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Abstract Method Example</h1>
    <div>
      <label for="notificationType">Choose Notification Type:</label>
      <select id="notificationType" (change)="onNotificationTypeChange($event)">
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
    </div>
    <div>
      <button (click)="sendNotification()">Send Notification</button>
    </div>
    <div *ngIf="notificationResult">
      <h3>Notification Sent:</h3>
      <pre>{{ notificationResult }}</pre>
    </div>
  \`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notificationResult: string | null = null;
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
    this.notificationResult = \`Notification sent using \${this.notificationService.constructor.name}\`;
  }
}
`);static \u0275fac=function(o){return new(o||n)};static \u0275cmp=S({type:n,selectors:[["app-abstract-method"]],decls:154,vars:0,consts:[[1,"mb-4"],[1,"hljs-attr"],["start","2"],["start","3"],[1,"mt-4"],[3,"code","language"]],template:function(o,C){o&1&&(i(0,"h1"),e(1,"Abstract Method"),t(),i(2,"div",0),e(3," In TypeScript, "),i(4,"b"),e(5,"abstract methods"),t(),e(6,` are methods defined in an abstract class without implementation.\xA0\xA0The concrete subclasses are then required to provide the actual implementation of these methods.\xA0\xA0This is useful when you want to define a common interface or contract for a set of related classes while allowing each class to provide its own specific behavior.
`),t(),i(7,"h2"),e(8,"Implementation"),t(),i(9,"div",0),e(10," Let\u2019s look at an example where we define an "),i(11,"b"),e(12,"abstract class"),t(),e(13," that contains an "),i(14,"b"),e(15,"abstract method"),t(),e(16,", and then we implement this method in subclasses.\xA0\xA0We\u2019ll implement a notification system, where we have different types of notification services (like "),i(17,"b"),e(18,"Email"),t(),e(19," and "),i(20,"b"),e(21,"SMS"),t(),e(22,") and each service will have its own implementation of sending notifications."),s(23,"br")(24,"br"),e(25," In this example, we'll define an abstract class "),i(26,"span",1),e(27,"NotificationService"),t(),e(28," with an abstract method "),i(29,"span",1),e(30,"sendNotification()"),t(),e(31,".\xA0\xA0We\u2019ll then create two concrete classes, "),i(32,"b"),e(33,"EmailNotificationService"),t(),e(34," and "),i(35,"b"),e(36,"SMSNotificationService"),t(),e(37,", that will implement the "),i(38,"span",1),e(39,"sendNotification()"),t(),e(40," method."),s(41,"br")(42,"br"),i(43,"ol")(44,"li")(45,"b"),e(46,"Define the Abstract Class with Abstract Method"),t()()(),i(47,"div",0),e(48," First, we define an abstract class "),i(49,"span",1),e(50,"NotificationService"),t(),e(51," with the abstract method "),i(52,"span",1),e(53,"sendNotification()"),t(),e(54,".\xA0\xA0This method will be implemented by the subclasses. "),t(),l(55,x,1,2)(56,u,2,0),r(57,55,f,null,56),m(0,-1),i(59,"ol",2)(60,"li")(61,"b"),e(62,"Create Concrete Classes Implementing the Abstract Method"),t()()(),l(63,b,1,2)(64,g,2,0),r(65,63,f,null,64),m(0,-1),l(67,v,1,2)(68,E,2,0),r(69,67,f,null,68),m(0,-1),i(71,"ol",3)(72,"li")(73,"b"),e(74,"Standalone Component Using the Notification Services"),t()()(),i(75,"div",0),e(76," We now create a "),i(77,"b"),e(78,"standalone component"),t(),e(79," that will use either the "),i(80,"b"),e(81,"EmailNotificationService"),t(),e(82," or "),i(83,"b"),e(84,"SMSNotificationService"),t(),e(85," to send notifications.\xA0\xA0The component will inject the service and call the "),i(86,"span",1),e(87,"sendNotification()"),t(),e(88," method, which is abstract and must be implemented by the concrete services. "),t(),l(89,N,1,2)(90,A,2,0),r(91,89,f,null,90),m(0,-1),i(93,"h4",4),e(94,"Explanation:"),t(),i(95,"ul")(96,"li")(97,"b"),e(98,"Abstract Class"),t(),e(99," ("),i(100,"span",1),e(101,"NotificationService"),t(),e(102,"):\xA0\xA0This class defines an abstract method "),i(103,"span",1),e(104,"sendNotification()"),t(),e(105," that must be implemented by any subclass.\xA0\xA0It also provides a helper method "),i(106,"span",1),e(107,"logNotification()"),t(),e(108," that can be used by subclasses to log notifications.\xA0\xA0The abstract method enforces that every subclass provides its own logic for sending notifications. "),t(),i(109,"li")(110,"b"),e(111,"Concrete Classes"),t(),e(112," ("),i(113,"span",1),e(114,"EmailNotificationService"),t(),e(115," and "),i(116,"span",1),e(117,"SMSNotificationService"),t(),e(118,"):\xA0\xA0These classes extend the abstract class and implement the "),i(119,"span",1),e(120,"sendNotification()"),t(),e(121," method with their own custom logic.\xA0\xA0"),i(122,"span",1),e(123,"EmailNotificationService"),t(),e(124," sends emails, while "),i(125,"span",1),e(126,"SMSNotificationService"),t(),e(127," sends SMS messages. "),t(),i(128,"li")(129,"b"),e(130,"AppComponent"),t(),e(131,":\xA0\xA0The component lets the user select between Email and SMS notification types and triggers the "),i(132,"span",1),e(133,"sendNotification()"),t(),e(134," method of the selected service.\xA0\xA0It uses the "),i(135,"span",1),e(136,"NotificationService"),t(),e(137," class to interact with either of the concrete classes. "),t()(),i(138,"h4",4),e(139,"Conclusion:"),t(),i(140,"div",0),e(141," This example demonstrates how to use "),i(142,"b"),e(143,"abstract methods"),t(),e(144," in Angular 19 with "),i(145,"b"),e(146,"standalone components"),t(),e(147,".\xA0\xA0The "),i(148,"span",1),e(149,"NotificationService"),t(),e(150," abstract class defines a contract for subclasses (i.e., that they must implement the "),i(151,"span",1),e(152,"sendNotification()"),t(),e(153," method).\xA0\xA0Each subclass provides its own implementation of this method, allowing you to create flexible and reusable services that follow a common structure. "),t()())},encapsulation:2})};export{h as a};
