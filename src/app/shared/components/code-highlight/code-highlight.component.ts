import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-code-highlight',
  imports: [Highlight, HighlightLineNumbers, MatIconModule, MatTooltipModule],
  templateUrl: './code-highlight.component.html',
  styleUrl: './code-highlight.component.scss',
})
export class CodeHighLightComponent {
  @Input() public code: string = '';
  @Input() public language: string = 'typescript';

  public constructor() {}
}
