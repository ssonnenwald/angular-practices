import {
  Component,
  inject,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { MatTooltip } from '@angular/material/tooltip';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-code-highlight',
  imports: [Highlight, HighlightLineNumbers, MatIcon, MatTooltip],
  templateUrl: './code-highlight.component.html',
  styleUrl: './code-highlight.component.scss',
})
export class CodeHighLightComponent {
  @Input() public code: WritableSignal<string> = signal('');
  @Input() public language: string = 'typescript';

  private clipboardService = inject(ClipboardService);

  public constructor() {}

  public copyToClipboard(code: string): void {
    this.clipboardService.copyFromContent(code);
  }
}
