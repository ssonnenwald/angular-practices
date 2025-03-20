import{a as d}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as a,_a as m,jb as o,nb as i,ob as t,pb as s,ra as n}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var p=class c{facadePatternCode1=n(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  login(username: string, password: string): string {
    // Simulate login logic
    console.log(\`Logging in user \${username}\`);
    return \`User \${username} logged in successfully\`;
  }

  logout(): string {
    // Simulate logout logic
    console.log('Logging out');
    return 'User logged out';
  }
}
`);facadePatternCode2=n(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  updateProfile(name: string, email: string): string {
    // Simulate updating profile
    console.log(\`Updating profile for \${name}\`);
    return \`Profile updated for \${name} with email \${email}\`;
  }
}
`);facadePatternCode3=n(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  sendNotification(message: string): string {
    // Simulate sending a notification
    console.log(\`Sending notification: \${message}\`);
    return \`Notification sent: \${message}\`;
  }
}
`);facadePatternCode4=n(`import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ProfileService } from './profile.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class UserFacadeService {
  constructor(
    private authService: AuthenticationService,
    private profileService: ProfileService,
    private notificationService: NotificationService
  ) {}

  loginAndUpdateProfile(username: string, password: string, name: string, email: string): string {
    // Use AuthenticationService to log in
    const loginMessage = this.authService.login(username, password);

    // Use ProfileService to update profile
    const profileMessage = this.profileService.updateProfile(name, email);

    // Use NotificationService to notify the user
    const notificationMessage = this.notificationService.sendNotification('Profile updated successfully');

    // Combine the results
    return \`\${loginMessage}\\n\${profileMessage}\\n\${notificationMessage}\`;
  }

  logoutAndNotify(): string {
    // Use AuthenticationService to log out
    const logoutMessage = this.authService.logout();

    // Use NotificationService to notify the user
    const notificationMessage = this.notificationService.sendNotification('You have been logged out');

    // Combine the results
    return \`\${logoutMessage}
\${notificationMessage}\`;
  }
}
`);facadePatternCode5=n(`import { Component } from '@angular/core';
import { UserFacadeService } from './user-facade.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`<h1>Facade Pattern in Angular 19</h1>
            <div>
              <button (click)="performLogin()">Login and Update Profile</button>
              <button (click)="performLogout()">Logout</button>
              <pre>{{ resultMessage }}</pre>
            </div>\`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultMessage: string = '';

  constructor(private userFacade: UserFacadeService) {}

  performLogin(): void {
    this.resultMessage = this.userFacade.loginAndUpdateProfile(
      'john_doe',
      'password123',
      'John Doe',
      'john.doe@example.com'
    );
  }

  performLogout(): void {
    this.resultMessage = this.userFacade.logoutAndNotify();
  }
}
`);static \u0275fac=function(l){return new(l||c)};static \u0275cmp=m({type:c,selectors:[["app-facade-pattern"]],decls:97,vars:10,consts:[[1,"mb-4"],[3,"code","language"],["start","2"],["start","3"],[1,"mt-4"],[1,"hljs-attr"]],template:function(l,r){l&1&&(i(0,"h1"),e(1,"Facade Pattern"),t(),i(2,"div",0),e(3," The "),i(4,"b"),e(5,"Facade Pattern"),t(),e(6,` is a structural design pattern that provides a simplified interface to a complex system of classes or subsystems.\xA0\xA0It acts as a "wrapper" to simplify the interactions for the end user, hiding the complexities of the underlying system.
`),t(),i(7,"h2"),e(8,"Implementation"),t(),i(9,"div",0),e(10," In the context of "),i(11,"b"),e(12,"Angular 19"),t(),e(13," with "),i(14,"b"),e(15,"standalone components"),t(),e(16,", let's create a scenario where we have a "),i(17,"b"),e(18,"complex subsystem"),t(),e(19," involving multiple services, and we want to simplify the interaction by creating a "),i(20,"b"),e(21,"Facade"),t(),e(22," service that abstracts away the complexity."),s(23,"br")(24,"br"),i(25,"ol")(26,"li")(27,"b"),e(28,"Subsystem Services (Simulating Complex Logic)"),t()()(),i(29,"div",0),e(30," Let\u2019s define several services that represent different parts of the system, each having a distinct responsibility. "),t(),s(31,"app-code-highlight",1)(32,"app-code-highlight",1)(33,"app-code-highlight",1),i(34,"ol",2)(35,"li")(36,"b"),e(37,"Facade Service (Simplifying the Interface)"),t()()(),i(38,"div",0),e(39," We now create the "),i(40,"b"),e(41,"Facade Service"),t(),e(42,", which will use the above subsystem services but offer a simpler API to the user. "),t(),s(43,"app-code-highlight",1),i(44,"ol",3)(45,"li")(46,"b"),e(47,"Standalone Component (Using the Facade)"),t()()(),i(48,"div",0),e(49," Now, let\u2019s create a "),i(50,"b"),e(51,"standalone Angular"),t(),e(52," component that uses the Facade service to interact with the subsystem in a simplified way. "),t(),s(53,"app-code-highlight",1),t(),i(54,"h4",4),e(55,"Explanation:"),t(),i(56,"ul")(57,"li")(58,"b"),e(59,"Subsystem Services"),t(),e(60," ("),i(61,"span",5),e(62,"AuthenticationService"),t(),e(63,", "),i(64,"span",5),e(65,"ProfileService"),t(),e(66,", "),i(67,"span",5),e(68,"NotificationService"),t(),e(69,"):\xA0\xA0These represent different, unrelated parts of the system, each handling specific tasks (e.g., login, profile management, notifications). "),t(),i(70,"li")(71,"b"),e(72,"Facade Service"),t(),e(73," ("),i(74,"span",5),e(75,"UserFacadeService"),t(),e(76,"):\xA0\xA0This service abstracts the complexity of interacting with multiple services by providing a simpler API ("),i(77,"span",5),e(78,"loginAndUpdateProfile"),t(),e(79,", "),i(80,"span",5),e(81,"logoutAndNotify"),t(),e(82,"). "),t(),i(83,"li")(84,"b"),e(85,"AppComponent"),t(),e(86,":\xA0\xA0In this component, we interact with the "),i(87,"span",5),e(88,"UserFacadeService"),t(),e(89," instead of directly interacting with each subsystem service, simplifying the logic and making the code cleaner. "),t()(),i(90,"h4",4),e(91,"Conclusion:"),t(),i(92,"div",0),e(93," The "),i(94,"b"),e(95,"Facade Pattern"),t(),e(96,` in Angular 19 with standalone components simplifies the interaction with a complex system of services by providing a unified and simpler interface.\xA0\xA0In this example, instead of calling multiple services directly (which might involve more complicated logic), the component interacts only with the facade, making the code cleaner and easier to maintain.
`),t()),l&2&&(a(31),o("code",r.facadePatternCode1)("language","typescript"),a(),o("code",r.facadePatternCode2)("language","typescript"),a(),o("code",r.facadePatternCode3)("language","typescript"),a(10),o("code",r.facadePatternCode4)("language","typescript"),a(10),o("code",r.facadePatternCode5)("language","typescript"))},dependencies:[d],encapsulation:2})};export{p as FacadePatternComponent};
