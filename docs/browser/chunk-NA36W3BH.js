import{a as c}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as t,Pa as n,_a as m,jb as a,nb as r,ob as e,pb as s,ra as i}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var d=class g{strategyPatternCode1=i(`export interface SortingStrategy {
  sort(data: number[]): number[];
}
`);strategyPatternCode2=i(`import { SortingStrategy } from './sorting-strategy.interface';

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
`);strategyPatternCode3=i(`import { SortingStrategy } from './sorting-strategy.interface';

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
`);strategyPatternCode4=i(`import { SortingStrategy } from './sorting-strategy.interface';

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
`);strategyPatternCode5=i(`import { Injectable } from '@angular/core';
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
`);strategyPatternCode6=i(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(l){return new(l||g)};static \u0275cmp=m({type:g,selectors:[["app-strategy-pattern"]],decls:108,vars:12,consts:[[1,"mb-4"],[1,"hljs-attr"],[3,"code","language"],["start","2"],["start","3"],["start","4"],[1,"mt-4"]],template:function(l,o){l&1&&(r(0,"h1"),t(1,"Strategy Pattern"),e(),r(2,"div",0),t(3," The "),r(4,"b"),t(5,"Strategy Pattern"),e(),t(6,` is a behavioral design pattern that allows a class to change its behavior at runtime by selecting from a family of algorithms (strategies).\xA0\xA0Instead of having a complex conditional structure, you define a strategy interface and implement different strategies.\xA0\xA0This way, the client can choose the strategy dynamically based on the context.
`),e(),r(7,"h2"),t(8,"Implementation"),e(),r(9,"div",0),t(10," In an Angular 19 application with "),r(11,"b"),t(12,"standalone components"),e(),t(13,", let\u2019s implement the Strategy Pattern for different types of sorting algorithms.\xA0\xA0We\u2019ll create a sorting service that can change its sorting strategy at runtime."),s(14,"br")(15,"br"),r(16,"ol")(17,"li")(18,"b"),t(19,"Define the Strategy Interface"),e()()(),r(20,"div",0),t(21," First, we define a "),r(22,"span",1),t(23,"SortingStrategy"),e(),t(24," interface, which ensures that all sorting strategies implement the "),r(25,"span",1),t(26,"sort"),e(),t(27," method. "),e(),s(28,"app-code-highlight",2),r(29,"ol",3)(30,"li")(31,"b"),t(32,"Concrete Strategies (Sorting Algorithms)"),e()()(),r(33,"div",0),t(34," Next, we implement different sorting algorithms as concrete strategies.\xA0\xA0For simplicity, we\u2019ll implement "),r(35,"b"),t(36,"Bubble Sort"),e(),t(37,", "),r(38,"b"),t(39,"Quick Sort"),e(),t(40,", and "),r(41,"b"),t(42,"Merge Sort"),e(),t(43,". "),e(),s(44,"app-code-highlight",2)(45,"app-code-highlight",2)(46,"app-code-highlight",2),r(47,"ol",4)(48,"li")(49,"b"),t(50,"Context (The Sorting Service)"),e()()(),r(51,"div",0),t(52," Now, let\u2019s define the "),r(53,"b"),t(54,"Context"),e(),t(55," class, which will use the selected strategy to perform the sorting operation. "),e(),s(56,"app-code-highlight",2),r(57,"ol",5)(58,"li")(59,"b"),t(60,"Standalone Component Using the Strategy"),e()()(),r(61,"div",0),t(62," Now let\u2019s create a "),r(63,"b"),t(64,"standalone component"),e(),t(65," that allows the user to select a sorting strategy at runtime.\xA0\xA0The user can select from "),r(66,"b"),t(67,"Bubble Sort"),e(),t(68,", "),r(69,"b"),t(70,"Quick Sort"),e(),t(71,", or "),r(72,"b"),t(73,"Merge Sort"),e(),t(74,". "),e(),s(75,"app-code-highlight",2),e(),r(76,"h4",6),t(77,"Explanation:"),e(),r(78,"ul")(79,"li")(80,"b"),t(81,"SortingStrategy Interface"),e(),t(82,":\xA0\xA0This defines the common interface for all sorting strategies.\xA0\xA0Each sorting algorithm must implement the "),r(83,"span",1),t(84,"sort"),e(),t(85," method. "),e(),r(86,"li")(87,"b"),t(88,"Concrete Strategies"),e(),t(89,":\xA0\xA0These are specific sorting algorithms (Bubble Sort, Quick Sort, Merge Sort) that implement the "),r(90,"span",1),t(91,"SortingStrategy"),e(),t(92," interface. "),e(),r(93,"li")(94,"b"),t(95,"SortingContextService"),e(),t(96,":\xA0\xA0This service acts as the Context in the Strategy Pattern.\xA0\xA0It holds a reference to the current sorting strategy and allows switching between different strategies dynamically. "),e(),r(97,"li")(98,"b"),t(99,"AppComponent"),e(),t(100,":\xA0\xA0This is the client that interacts with the context. It allows the user to choose a sorting algorithm and click a button to sort an array of numbers using the selected strategy. "),e()(),r(101,"h4",6),t(102,"Conclusion:"),e(),r(103,"div",0),t(104," This example demonstrates how the "),r(105,"b"),t(106,"Strategy Pattern"),e(),t(107,` can be used in Angular 19 with standalone components to dynamically choose between different algorithms (strategies) at runtime.\xA0\xA0The client (component) interacts with the context (sorting service) without needing to know which specific sorting algorithm is being used. This design makes it easy to add new sorting strategies without changing the client code.
`),e()),l&2&&(n(28),a("code",o.strategyPatternCode1)("language","typescript"),n(16),a("code",o.strategyPatternCode2)("language","typescript"),n(),a("code",o.strategyPatternCode3)("language","typescript"),n(),a("code",o.strategyPatternCode4)("language","typescript"),n(10),a("code",o.strategyPatternCode5)("language","typescript"),n(19),a("code",o.strategyPatternCode6)("language","typescript"))},dependencies:[c],encapsulation:2})};export{d as StrategyPatternComponent};
