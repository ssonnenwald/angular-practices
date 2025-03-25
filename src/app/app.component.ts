import { Component } from '@angular/core';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';

@Component({
  selector: 'app-root',
  imports: [AppLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Practices';
}
