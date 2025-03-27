import{Ib as t,cb as S,fb as s,kb as g,lb as m,nb as c,sa as l,ub as n,vb as e,wb as o,zb as p}from"./chunk-YRGLSMXJ.js";var d=()=>[import("./chunk-4VRTDKRB.js").then(i=>i.CodeHighLightComponent)];function h(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=p();c("code",r.strategyPatternCode1)("language","typescript")}}function f(i,a){i&1&&(n(0,"span"),t(1,"Loading..."),e())}function y(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=p();c("code",r.strategyPatternCode2)("language","typescript")}}function x(i,a){i&1&&(n(0,"span"),t(1,"Loading..."),e())}function b(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=p();c("code",r.strategyPatternCode3)("language","typescript")}}function C(i,a){i&1&&(n(0,"span"),t(1,"Loading..."),e())}function E(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=p();c("code",r.strategyPatternCode4)("language","typescript")}}function v(i,a){i&1&&(n(0,"span"),t(1,"Loading..."),e())}function _(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=p();c("code",r.strategyPatternCode5)("language","typescript")}}function P(i,a){i&1&&(n(0,"span"),t(1,"Loading..."),e())}function w(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=p();c("code",r.strategyPatternCode6)("language","typescript")}}function A(i,a){i&1&&(n(0,"span"),t(1,"Loading..."),e())}var u=class i{strategyPatternCode1=l(`export interface SortingStrategy {
  sort(data: number[]): number[];
}
`);strategyPatternCode2=l(`import { SortingStrategy } from './sorting-strategy.interface';

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
`);strategyPatternCode3=l(`import { SortingStrategy } from './sorting-strategy.interface';

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
`);strategyPatternCode4=l(`import { SortingStrategy } from './sorting-strategy.interface';

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
`);strategyPatternCode5=l(`import { Injectable } from '@angular/core';
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
`);strategyPatternCode6=l(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(r){return new(r||i)};static \u0275cmp=S({type:i,selectors:[["app-strategy-pattern"]],decls:126,vars:0,consts:[[1,"mb-4"],[1,"hljs-attr"],["start","2"],["start","3"],["start","4"],[1,"mt-4"],[3,"code","language"]],template:function(r,D){r&1&&(n(0,"h1"),t(1,"Strategy Pattern"),e(),n(2,"div",0),t(3," The "),n(4,"b"),t(5,"Strategy Pattern"),e(),t(6,` is a behavioral design pattern that allows a class to change its behavior at runtime by selecting from a family of algorithms (strategies).\xA0\xA0Instead of having a complex conditional structure, you define a strategy interface and implement different strategies.\xA0\xA0This way, the client can choose the strategy dynamically based on the context.
`),e(),n(7,"h2"),t(8,"Implementation"),e(),n(9,"div",0),t(10," In an Angular 19 application with "),n(11,"b"),t(12,"standalone components"),e(),t(13,", let\u2019s implement the Strategy Pattern for different types of sorting algorithms.\xA0\xA0We\u2019ll create a sorting service that can change its sorting strategy at runtime."),o(14,"br")(15,"br"),n(16,"ol")(17,"li")(18,"b"),t(19,"Define the Strategy Interface"),e()()(),n(20,"div",0),t(21," First, we define a "),n(22,"span",1),t(23,"SortingStrategy"),e(),t(24," interface, which ensures that all sorting strategies implement the "),n(25,"span",1),t(26,"sort"),e(),t(27," method. "),e(),s(28,h,1,2)(29,f,2,0),g(30,28,d,null,29),m(0,-1),n(32,"ol",2)(33,"li")(34,"b"),t(35,"Concrete Strategies (Sorting Algorithms)"),e()()(),n(36,"div",0),t(37," Next, we implement different sorting algorithms as concrete strategies.\xA0\xA0For simplicity, we\u2019ll implement "),n(38,"b"),t(39,"Bubble Sort"),e(),t(40,", "),n(41,"b"),t(42,"Quick Sort"),e(),t(43,", and "),n(44,"b"),t(45,"Merge Sort"),e(),t(46,". "),e(),s(47,y,1,2)(48,x,2,0),g(49,47,d,null,48),m(0,-1),s(51,b,1,2)(52,C,2,0),g(53,51,d,null,52),m(0,-1),s(55,E,1,2)(56,v,2,0),g(57,55,d,null,56),m(0,-1),n(59,"ol",3)(60,"li")(61,"b"),t(62,"Context (The Sorting Service)"),e()()(),n(63,"div",0),t(64," Now, let\u2019s define the "),n(65,"b"),t(66,"Context"),e(),t(67," class, which will use the selected strategy to perform the sorting operation. "),e(),s(68,_,1,2)(69,P,2,0),g(70,68,d,null,69),m(0,-1),n(72,"ol",4)(73,"li")(74,"b"),t(75,"Standalone Component Using the Strategy"),e()()(),n(76,"div",0),t(77," Now let\u2019s create a "),n(78,"b"),t(79,"standalone component"),e(),t(80," that allows the user to select a sorting strategy at runtime.\xA0\xA0The user can select from "),n(81,"b"),t(82,"Bubble Sort"),e(),t(83,", "),n(84,"b"),t(85,"Quick Sort"),e(),t(86,", or "),n(87,"b"),t(88,"Merge Sort"),e(),t(89,". "),e(),s(90,w,1,2)(91,A,2,0),g(92,90,d,null,91),m(0,-1),e(),n(94,"h4",5),t(95,"Explanation:"),e(),n(96,"ul")(97,"li")(98,"b"),t(99,"SortingStrategy Interface"),e(),t(100,":\xA0\xA0This defines the common interface for all sorting strategies.\xA0\xA0Each sorting algorithm must implement the "),n(101,"span",1),t(102,"sort"),e(),t(103," method. "),e(),n(104,"li")(105,"b"),t(106,"Concrete Strategies"),e(),t(107,":\xA0\xA0These are specific sorting algorithms (Bubble Sort, Quick Sort, Merge Sort) that implement the "),n(108,"span",1),t(109,"SortingStrategy"),e(),t(110," interface. "),e(),n(111,"li")(112,"b"),t(113,"SortingContextService"),e(),t(114,":\xA0\xA0This service acts as the Context in the Strategy Pattern.\xA0\xA0It holds a reference to the current sorting strategy and allows switching between different strategies dynamically. "),e(),n(115,"li")(116,"b"),t(117,"AppComponent"),e(),t(118,":\xA0\xA0This is the client that interacts with the context. It allows the user to choose a sorting algorithm and click a button to sort an array of numbers using the selected strategy. "),e()(),n(119,"h4",5),t(120,"Conclusion:"),e(),n(121,"div",0),t(122," This example demonstrates how the "),n(123,"b"),t(124,"Strategy Pattern"),e(),t(125,` can be used in Angular 19 with standalone components to dynamically choose between different algorithms (strategies) at runtime.\xA0\xA0The client (component) interacts with the context (sorting service) without needing to know which specific sorting algorithm is being used. This design makes it easy to add new sorting strategies without changing the client code.
`),e())},encapsulation:2})};export{u as a};
