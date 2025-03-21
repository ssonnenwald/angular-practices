import{a as d}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as o,_a as m,jb as s,nb as i,ob as t,pb as n,ra as a}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var p=class r{abstractMethodCode1=a(`export abstract class NotificationService {
  // Abstract method - subclasses must implement this
  abstract sendNotification(message: string, recipient: string): void;

  // Optional helper method that can be used by subclasses
  logNotification(message: string, recipient: string): void {
    console.log(\`Notification sent to \${recipient}: \${message}\`);
  }
}
`);abstractMethodCode2=a(`import { NotificationService } from './notification.service';

export class EmailNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Custom logic for sending an email
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending Email: "\${message}" to \${recipient}\`);
  }
}
`);abstractMethodCode3=a(`import { NotificationService } from './notification.service';

export class SMSNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Custom logic for sending an SMS
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending SMS: "\${message}" to \${recipient}\`);
  }
}
`);abstractMethodCode4=a(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(c){return new(c||r)};static \u0275cmp=m({type:r,selectors:[["app-abstract-method"]],decls:142,vars:8,consts:[[1,"mb-4"],[1,"hljs-attr"],[3,"code","language"],["start","2"],["start","3"],[1,"mt-4"]],template:function(c,l){c&1&&(i(0,"h1"),e(1,"Abstract Method"),t(),i(2,"div",0),e(3," In TypeScript, "),i(4,"b"),e(5,"abstract methods"),t(),e(6,` are methods defined in an abstract class without implementation.\xA0\xA0The concrete subclasses are then required to provide the actual implementation of these methods.\xA0\xA0This is useful when you want to define a common interface or contract for a set of related classes while allowing each class to provide its own specific behavior.
`),t(),i(7,"h2"),e(8,"Implementation"),t(),i(9,"div",0),e(10," Let\u2019s look at an example where we define an "),i(11,"b"),e(12,"abstract class"),t(),e(13," that contains an "),i(14,"b"),e(15,"abstract method"),t(),e(16,", and then we implement this method in subclasses.\xA0\xA0We\u2019ll implement a notification system, where we have different types of notification services (like "),i(17,"b"),e(18,"Email"),t(),e(19," and "),i(20,"b"),e(21,"SMS"),t(),e(22,") and each service will have its own implementation of sending notifications."),n(23,"br")(24,"br"),e(25," In this example, we'll define an abstract class "),i(26,"span",1),e(27,"NotificationService"),t(),e(28," with an abstract method "),i(29,"span",1),e(30,"sendNotification()"),t(),e(31,".\xA0\xA0We\u2019ll then create two concrete classes, "),i(32,"b"),e(33,"EmailNotificationService"),t(),e(34," and "),i(35,"b"),e(36,"SMSNotificationService"),t(),e(37,", that will implement the "),i(38,"span",1),e(39,"sendNotification()"),t(),e(40," method."),n(41,"br")(42,"br"),i(43,"ol")(44,"li")(45,"b"),e(46,"Define the Abstract Class with Abstract Method"),t()()(),i(47,"div",0),e(48," First, we define an abstract class "),i(49,"span",1),e(50,"NotificationService"),t(),e(51," with the abstract method "),i(52,"span",1),e(53,"sendNotification()"),t(),e(54,".\xA0\xA0This method will be implemented by the subclasses. "),t(),n(55,"app-code-highlight",2),i(56,"ol",3)(57,"li")(58,"b"),e(59,"Create Concrete Classes Implementing the Abstract Method"),t()()(),n(60,"app-code-highlight",2)(61,"app-code-highlight",2),i(62,"ol",4)(63,"li")(64,"b"),e(65,"Standalone Component Using the Notification Services"),t()()(),i(66,"div",0),e(67," We now create a "),i(68,"b"),e(69,"standalone component"),t(),e(70," that will use either the "),i(71,"b"),e(72,"EmailNotificationService"),t(),e(73," or "),i(74,"b"),e(75,"SMSNotificationService"),t(),e(76," to send notifications.\xA0\xA0The component will inject the service and call the "),i(77,"span",1),e(78,"sendNotification()"),t(),e(79," method, which is abstract and must be implemented by the concrete services. "),t(),n(80,"app-code-highlight",2),i(81,"h4",5),e(82,"Explanation:"),t(),i(83,"ul")(84,"li")(85,"b"),e(86,"Abstract Class"),t(),e(87," ("),i(88,"span",1),e(89,"NotificationService"),t(),e(90,"):\xA0\xA0This class defines an abstract method "),i(91,"span",1),e(92,"sendNotification()"),t(),e(93," that must be implemented by any subclass.\xA0\xA0It also provides a helper method "),i(94,"span",1),e(95,"logNotification()"),t(),e(96," that can be used by subclasses to log notifications.\xA0\xA0The abstract method enforces that every subclass provides its own logic for sending notifications. "),t(),i(97,"li")(98,"b"),e(99,"Concrete Classes"),t(),e(100," ("),i(101,"span",1),e(102,"EmailNotificationService"),t(),e(103," and "),i(104,"span",1),e(105,"SMSNotificationService"),t(),e(106,"):\xA0\xA0These classes extend the abstract class and implement the "),i(107,"span",1),e(108,"sendNotification()"),t(),e(109," method with their own custom logic.\xA0\xA0"),i(110,"span",1),e(111,"EmailNotificationService"),t(),e(112," sends emails, while "),i(113,"span",1),e(114,"SMSNotificationService"),t(),e(115," sends SMS messages. "),t(),i(116,"li")(117,"b"),e(118,"AppComponent"),t(),e(119,":\xA0\xA0The component lets the user select between Email and SMS notification types and triggers the "),i(120,"span",1),e(121,"sendNotification()"),t(),e(122," method of the selected service.\xA0\xA0It uses the "),i(123,"span",1),e(124,"NotificationService"),t(),e(125," class to interact with either of the concrete classes. "),t()(),i(126,"h4",5),e(127,"Conclusion:"),t(),i(128,"div",0),e(129," This example demonstrates how to use "),i(130,"b"),e(131,"abstract methods"),t(),e(132," in Angular 19 with "),i(133,"b"),e(134,"standalone components"),t(),e(135,".\xA0\xA0The "),i(136,"span",1),e(137,"NotificationService"),t(),e(138," abstract class defines a contract for subclasses (i.e., that they must implement the "),i(139,"span",1),e(140,"sendNotification()"),t(),e(141," method).\xA0\xA0Each subclass provides its own implementation of this method, allowing you to create flexible and reusable services that follow a common structure. "),t()()),c&2&&(o(55),s("code",l.abstractMethodCode1)("language","typescript"),o(5),s("code",l.abstractMethodCode2)("language","typescript"),o(),s("code",l.abstractMethodCode3)("language","typescript"),o(19),s("code",l.abstractMethodCode4)("language","typescript"))},dependencies:[d],encapsulation:2})};export{p as AbstractMethodComponent};
