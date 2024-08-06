import { Component, OnInit } from '@angular/core';
// import { ArrayOperations } from '../../array-operations/array-operations';
import { ArrayOperations } from 'array-utils-shubham';
@Component({
  selector: 'app-generic-test',
  standalone: true,
  imports: [],
  templateUrl: './generic-test.component.html',
  styleUrl: './generic-test.component.scss',
})
export class GenericTestComponent implements OnInit {
  filterExampleResult: number[] = [];
  mapExampleResult: number[] = [];
  reduceExampleResult: number = 0;
  chunkExampleResult: number[][] = [];
  flattenExampleResult: number[] = [];
  uniqueExampleResult: number[] = [];
  intersectionExampleResult: number[] = [];
  unionExampleResult: number[] = [];

  ngOnInit() {
    this.runExample();
  }

  runExample() {
    // Filtering

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const square = (n: number) => n * n;
    this.filterExampleResult = ArrayOperations.map(numbers, square);
  }
}
