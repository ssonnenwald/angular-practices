import { Component } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-strategy-pattern',
  imports: [CodeHighLightComponent],
  templateUrl: './strategy-pattern.component.html',
  styleUrl: './strategy-pattern.component.scss',
})
export class StrategyPatternComponent {
  public strategyPatternCode1: string = `export interface SortingStrategy {
  sort(data: number[]): number[];
}
`;

  public strategyPatternCode2: string = `import { SortingStrategy } from './sorting-strategy.interface';

export class BubbleSortStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    console.log('Using Bubble Sort');
    let arr = [...data];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
        }
      }
    }
    return arr;
  }
}
`;

  public strategyPatternCode3: string = `import { SortingStrategy } from './sorting-strategy.interface';

export class QuickSortStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    console.log('Using Quick Sort');
    if (data.length <= 1) return data;
    const pivot = data[data.length - 1];
    const left = data.filter(item => item < pivot);
    const right = data.filter(item => item > pivot);
    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}
`;

  public strategyPatternCode4: string = `import { SortingStrategy } from './sorting-strategy.interface';

export class MergeSortStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    console.log('Using Merge Sort');
    if (data.length <= 1) return data;
    const mid = Math.floor(data.length / 2);
    const left = this.sort(data.slice(0, mid));
    const right = this.sort(data.slice(mid));
    return this.merge(left, right);
  }

  private merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(left.slice(i), right.slice(j));
  }
}
`;

  public strategyPatternCode5: string = `import { Injectable } from '@angular/core';
import { SortingStrategy } from './sorting-strategy.interface';

@Injectable({
  providedIn: 'root',
})
export class SortingContextService {
  private strategy: SortingStrategy;

  constructor() {
    // Default strategy can be set here
    this.strategy = new BubbleSortStrategy();
  }

  setStrategy(strategy: SortingStrategy): void {
    this.strategy = strategy;
  }

  sortData(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}
`;

  public strategyPatternCode6: string = `// app.component.ts
import { Component } from '@angular/core';
import { SortingContextService } from './sorting-context.service';
import { BubbleSortStrategy } from './bubble-sort.strategy';
import { QuickSortStrategy } from './quick-sort.strategy';
import { MergeSortStrategy } from './merge-sort.strategy';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Strategy Pattern in Angular 19</h1>
    <div>
      <label for="strategy">Choose Sorting Strategy:</label>
      <select id="strategy" (change)="onStrategyChange($event)">
        <option value="bubble">Bubble Sort</option>
        <option value="quick">Quick Sort</option>
        <option value="merge">Merge Sort</option>
      </select>
    </div>
    <div>
      <button (click)="sortData()">Sort Data</button>
    </div>
    <div *ngIf="sortedData">
      <h3>Sorted Data:</h3>
      <pre>{{ sortedData | json }}</pre>
    </div>
  \`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sortedData: number[] | null = null;
  data: number[] = [5, 3, 8, 1, 2, 7];

  constructor(private sortingContext: SortingContextService) {}

  onStrategyChange(event: Event): void {
    const strategy = (event.target as HTMLSelectElement).value;
    switch (strategy) {
      case 'bubble':
        this.sortingContext.setStrategy(new BubbleSortStrategy());
        break;
      case 'quick':
        this.sortingContext.setStrategy(new QuickSortStrategy());
        break;
      case 'merge':
        this.sortingContext.setStrategy(new MergeSortStrategy());
        break;
    }
  }

  sortData(): void {
    this.sortedData = this.sortingContext.sortData(this.data);
  }
}
`;
}
