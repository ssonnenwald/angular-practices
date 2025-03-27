import {
  Component,
  effect,
  HostListener,
  inject,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton, MatIconButton } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MenuItem, menuItems } from '../../models/menu-item';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbar,
    MatButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatIcon,
    MatIconButton,
    MatButton,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatNavList,
    RouterOutlet,
    RouterLink,
    MenuItemComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  private router: Router = inject(Router);

  public isMobile: WritableSignal<boolean> = signal(false);
  public sideNavCollapsed: WritableSignal<boolean> = signal<boolean>(true);
  public menuItems: WritableSignal<MenuItem[]> = signal<MenuItem[]>([
    ...menuItems,
  ]);

  public constructor() {
    this.checkMobileScreen();

    effect(() => {
      if (!this.isMobile()) {
        this.sidenav?.close();
        this.sideNavCollapsed.set(true);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event): void {
    this.checkMobileScreen();
  }

  private checkMobileScreen(): void {
    this.isMobile.set(window.innerWidth <= 768); // Threshold for mobile view (can be adjusted)
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public toggleSideNav(): void {
    this.sidenav?.toggle();
    this.sideNavCollapsed.set(!this.sideNavCollapsed());
  }
}
