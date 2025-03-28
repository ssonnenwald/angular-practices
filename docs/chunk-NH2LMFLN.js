import{Ib as e,cb as u,fb as s,kb as c,lb as m,nb as d,sa as l,ub as i,vb as t,wb as r,zb as p}from"./chunk-DG46SKAS.js";var f=()=>[import("./chunk-OUUINALE.js").then(n=>n.CodeHighLightComponent)];function h(n,o){if(n&1&&r(0,"app-code-highlight",5),n&2){let a=p();d("code",a.facadePatternCode1)("language","typescript")}}function x(n,o){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function S(n,o){if(n&1&&r(0,"app-code-highlight",5),n&2){let a=p();d("code",a.facadePatternCode2)("language","typescript")}}function v(n,o){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function b(n,o){if(n&1&&r(0,"app-code-highlight",5),n&2){let a=p();d("code",a.facadePatternCode3)("language","typescript")}}function y(n,o){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function P(n,o){if(n&1&&r(0,"app-code-highlight",5),n&2){let a=p();d("code",a.facadePatternCode4)("language","typescript")}}function C(n,o){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function E(n,o){if(n&1&&r(0,"app-code-highlight",5),n&2){let a=p();d("code",a.facadePatternCode5)("language","typescript")}}function _(n,o){n&1&&(i(0,"span"),e(1,"Loading..."),t())}var g=class n{facadePatternCode1=l(`import { Injectable } from '@angular/core';

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
`);facadePatternCode2=l(`import { Injectable } from '@angular/core';

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
`);facadePatternCode3=l(`import { Injectable } from '@angular/core';

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
`);facadePatternCode4=l(`import { Injectable } from '@angular/core';
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
`);facadePatternCode5=l(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(a){return new(a||n)};static \u0275cmp=u({type:n,selectors:[["app-facade-pattern"]],decls:112,vars:0,consts:[[1,"mb-4"],["start","2"],["start","3"],[1,"mt-4"],[1,"hljs-attr"],[3,"code","language"]],template:function(a,F){a&1&&(i(0,"h1"),e(1,"Facade Pattern"),t(),i(2,"div",0),e(3," The "),i(4,"b"),e(5,"Facade Pattern"),t(),e(6,` is a structural design pattern that provides a simplified interface to a complex system of classes or subsystems.\xA0\xA0It acts as a "wrapper" to simplify the interactions for the end user, hiding the complexities of the underlying system.
`),t(),i(7,"h2"),e(8,"Implementation"),t(),i(9,"div",0),e(10," In the context of "),i(11,"b"),e(12,"Angular 19"),t(),e(13," with "),i(14,"b"),e(15,"standalone components"),t(),e(16,", let's create a scenario where we have a "),i(17,"b"),e(18,"complex subsystem"),t(),e(19," involving multiple services, and we want to simplify the interaction by creating a "),i(20,"b"),e(21,"Facade"),t(),e(22," service that abstracts away the complexity."),r(23,"br")(24,"br"),i(25,"ol")(26,"li")(27,"b"),e(28,"Subsystem Services (Simulating Complex Logic)"),t()()(),i(29,"div",0),e(30," Let\u2019s define several services that represent different parts of the system, each having a distinct responsibility. "),t(),s(31,h,1,2)(32,x,2,0),c(33,31,f,null,32),m(0,-1),s(35,S,1,2)(36,v,2,0),c(37,35,f,null,36),m(0,-1),s(39,b,1,2)(40,y,2,0),c(41,39,f,null,40),m(0,-1),i(43,"ol",1)(44,"li")(45,"b"),e(46,"Facade Service (Simplifying the Interface)"),t()()(),i(47,"div",0),e(48," We now create the "),i(49,"b"),e(50,"Facade Service"),t(),e(51,", which will use the above subsystem services but offer a simpler API to the user. "),t(),s(52,P,1,2)(53,C,2,0),c(54,52,f,null,53),m(0,-1),i(56,"ol",2)(57,"li")(58,"b"),e(59,"Standalone Component (Using the Facade)"),t()()(),i(60,"div",0),e(61," Now, let\u2019s create a "),i(62,"b"),e(63,"standalone Angular"),t(),e(64," component that uses the Facade service to interact with the subsystem in a simplified way. "),t(),s(65,E,1,2)(66,_,2,0),c(67,65,f,null,66),m(0,-1),t(),i(69,"h4",3),e(70,"Explanation:"),t(),i(71,"ul")(72,"li")(73,"b"),e(74,"Subsystem Services"),t(),e(75," ("),i(76,"span",4),e(77,"AuthenticationService"),t(),e(78,", "),i(79,"span",4),e(80,"ProfileService"),t(),e(81,", "),i(82,"span",4),e(83,"NotificationService"),t(),e(84,"):\xA0\xA0These represent different, unrelated parts of the system, each handling specific tasks (e.g., login, profile management, notifications). "),t(),i(85,"li")(86,"b"),e(87,"Facade Service"),t(),e(88," ("),i(89,"span",4),e(90,"UserFacadeService"),t(),e(91,"):\xA0\xA0This service abstracts the complexity of interacting with multiple services by providing a simpler API ("),i(92,"span",4),e(93,"loginAndUpdateProfile"),t(),e(94,", "),i(95,"span",4),e(96,"logoutAndNotify"),t(),e(97,"). "),t(),i(98,"li")(99,"b"),e(100,"AppComponent"),t(),e(101,":\xA0\xA0In this component, we interact with the "),i(102,"span",4),e(103,"UserFacadeService"),t(),e(104," instead of directly interacting with each subsystem service, simplifying the logic and making the code cleaner. "),t()(),i(105,"h4",3),e(106,"Conclusion:"),t(),i(107,"div",0),e(108," The "),i(109,"b"),e(110,"Facade Pattern"),t(),e(111,` in Angular 19 with standalone components simplifies the interaction with a complex system of services by providing a unified and simpler interface.\xA0\xA0In this example, instead of calling multiple services directly (which might involve more complicated logic), the component interacts only with the facade, making the code cleaner and easier to maintain.
`),t())},encapsulation:2})};export{g as a};
