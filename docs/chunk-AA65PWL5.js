import{I as p}from"./chunk-4HLAVGCF.js";import{Hb as e,Sa as a,bb as m,mb as l,ta as o,tb as i,ub as t,vb as n}from"./chunk-ENZIFP74.js";var d=class c{optionalMethodCode1=o(`export interface NotificationService {
  sendNotification(message: string, recipient: string): void;

  // Optional method, not all services need to implement it
  trackDeliveryStatus?(recipient: string): string;
}
`);optionalMethodCode2=o(`import { NotificationService } from './notification.interface';

export class EmailNotificationService implements NotificationService {
  sendNotification(message: string, recipient: string): void {
    console.log(\`Sending Email: "\${message}" to \${recipient}\`);
  }

  // Implementing the optional method
  trackDeliveryStatus(recipient: string): string {
    return \`Tracking Email delivery to \${recipient}\`;
  }
}
`);optionalMethodCode3=o(`import { NotificationService } from './notification.interface';

export class SMSNotificationService implements NotificationService {
  sendNotification(message: string, recipient: string): void {
    console.log(\`Sending SMS: "\${message}" to \${recipient}\`);
  }

  // This service does not implement trackDeliveryStatus
}
`);optionalMethodCode4=o(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(s){return new(s||c)};static \u0275cmp=m({type:c,selectors:[["app-optional-method"]],decls:113,vars:8,consts:[[1,"mb-4"],[1,"hljs-attr"],[3,"code","language"],["start","2"],["start","3"],[1,"mt-4"]],template:function(s,r){s&1&&(i(0,"h1"),e(1,"Optional Method"),t(),i(2,"div",0),e(3," In TypeScript (and Angular 19 with standalone components), you can define "),i(4,"b"),e(5,"optional methods"),t(),e(6," by using "),i(7,"b"),e(8,"optional properties"),t(),e(9,` in interfaces or classes.\xA0\xA0This is useful when you want a method or property to be available but not necessarily implemented by every class or component.
`),t(),i(10,"h2"),e(11,"Implementation"),t(),i(12,"div",0),e(13," Let's say you have a system where you have different types of "),i(14,"b"),e(15,"notification services"),t(),e(16," (e.g., Email, SMS, and Push).\xA0\xA0Some of these services might implement an optional method, such as "),i(17,"span",1),e(18,"trackDeliveryStatus()"),t(),e(19,", while others may not."),n(20,"br")(21,"br"),e(22,"We can define the optional method in an interface and implement it conditionally in certain services."),n(23,"br")(24,"br"),i(25,"ol")(26,"li")(27,"b"),e(28,"Define an Interface with Optional Methods"),t()()(),i(29,"div",0),e(30," In TypeScript, we can define an interface where a method is optional by using the "),i(31,"span",1),e(32,"?"),t(),e(33," syntax. "),t(),n(34,"app-code-highlight",2),i(35,"div",0),e(36," Here, the "),i(37,"span",1),e(38,"trackDeliveryStatus()"),t(),e(39," method is optional, meaning it doesn\u2019t need to be implemented in every class that implements the "),i(40,"span",1),e(41,"NotificationService"),t(),e(42," interface. "),t(),i(43,"ol",3)(44,"li")(45,"b"),e(46,"Concrete Services Implementing the Interface"),t()()(),i(47,"div",0),e(48," Now let\u2019s implement a couple of "),i(49,"b"),e(50,"notification services"),t(),e(51,": one that includes the optional "),i(52,"span",1),e(53,"trackDeliveryStatus()"),t(),e(54," method and one that does not. "),t(),n(55,"app-code-highlight",2)(56,"app-code-highlight",2),i(57,"ol",4)(58,"li")(59,"b"),e(60,"Standalone Component Using the Services"),t()()(),i(61,"div",0),e(62," Next, let\u2019s create a "),i(63,"b"),e(64,"standalone component"),t(),e(65," that uses the "),i(66,"span",1),e(67,"NotificationService"),t(),e(68,".\xA0\xA0If the service implements "),i(69,"span",1),e(70,"trackDeliveryStatus()"),t(),e(71,", it will call that method; otherwise, it will simply skip it. "),t(),n(72,"app-code-highlight",2),i(73,"h4",5),e(74,"Explanation:"),t(),i(75,"ul")(76,"li")(77,"b"),e(78,"Optional Method in Interface"),t(),e(79,":\xA0\xA0In the "),i(80,"span",1),e(81,"NotificationService"),t(),e(82," interface, "),i(83,"span",1),e(84,"trackDeliveryStatus?()"),t(),e(85," is an optional method.\xA0\xA0Classes implementing this interface can choose to implement it or not.\xA0\xA0This makes the method flexible and non-mandatory for all services. "),t(),i(86,"li")(87,"b"),e(88,"Concrete Classes"),t(),e(89,":\xA0\xA0"),i(90,"span",1),e(91,"EmailNotificationService"),t(),e(92," implements the "),i(93,"span",1),e(94,"trackDeliveryStatus()"),t(),e(95," method, but SMSNotificationService does not.\xA0\xA0This shows how you can have an optional method that doesn\u2019t always need to be implemented. "),t(),i(96,"li")(97,"b"),e(98,"Component Logic"),t(),e(99,":\xA0\xA0The "),i(100,"span",1),e(101,"AppComponent"),t(),e(102," provides functionality to switch between the Email and SMS notification services.\xA0\xA0It also includes a Track Delivery Status button that checks if the service has implemented the "),i(103,"span",1),e(104,"trackDeliveryStatus()"),t(),e(105," method.\xA0\xA0If the method is available, it is called; otherwise, a default message is shown. "),t()(),i(106,"h4",5),e(107,"Conclusion:"),t(),i(108,"div",0),e(109," This example demonstrates how to use "),i(110,"b"),e(111,"optional methods"),t(),e(112," in Angular 19 with standalone components.\xA0\xA0By marking methods as optional in an interface, you can provide flexibility in how services or components implement certain functionality.\xA0\xA0This approach allows you to create more adaptable and modular code. "),t()()),s&2&&(a(34),l("code",r.optionalMethodCode1)("language","typescript"),a(21),l("code",r.optionalMethodCode2)("language","typescript"),a(),l("code",r.optionalMethodCode3)("language","typescript"),a(16),l("code",r.optionalMethodCode4)("language","typescript"))},dependencies:[p],encapsulation:2})};export{d as a};
