import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  computed,
  input,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-item',
  imports: [
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatIcon,
    MatListItemIcon,
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' })),
      ]),
    ]),
  ],
})
export class MenuItemComponent {
  public item = input.required<MenuItem>();
  public collapsed = input<boolean>(false);
  public routeHistory = input<string>('');

  public level: Signal<number> = computed<number>(
    () => this.routeHistory().split('/').length - 1
  );

  public indentation: Signal<string> = computed<string>(() =>
    this.collapsed() ? '16px' : `${16 + this.level() * 16}px`
  );

  public nestedMenuOpen: WritableSignal<boolean> = signal<boolean>(false);

  public constructor() {}

  public toggleNested(): void {
    if (!this.item().subItems) {
      return;
    }

    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
