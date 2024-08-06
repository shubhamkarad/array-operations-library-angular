import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayOperations } from './array-operations/array-operations';
import { GenericTestComponent } from './components/generic-test/generic-test.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'array-operations-library';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  names = ['Shubham', 'Sakhi', 'Soham', 'Akash'];
  pairs = ['Hello', 'from', 'Shubham'];
  nameWithS = (name: string): boolean => name.startsWith('S');
  square = (number: number): number => number * number;
  sum = (accumulator: number, value: number): number => accumulator + value;
  sentenceGenerator = (accumulator: string, word: string): string =>
    accumulator + ' ' + word;
  evenNumbers: number[];
  constructor() {
    this.evenNumbers = ArrayOperations.filter(this.numbers, (n) => n % 2 === 0);
    const startwith = ArrayOperations.filter(this.names, this.nameWithS);
    const squaredNumbers = ArrayOperations.map(this.numbers, this.square);
    const sumOfNumbers = ArrayOperations.reduce(this.numbers, this.sum, 0);
    const generateSentence = ArrayOperations.reduce(
      this.pairs,
      this.sentenceGenerator,
      ''
    );
    const uniqueNumbers = ArrayOperations.unique([
      1, 1, 2, 4, 5, 5, 6, 7, 8, 8,
    ]);
    const flattenArray = ArrayOperations.flatten([
      [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Phone' },
      ],
      [{ id: 3, name: 'Tablet' }],
      [
        { id: 4, name: 'Monitor' },
        { id: 5, name: 'Keyboard' },
      ],
    ]);
    const chunkWords = ArrayOperations.chunk(this.numbers, 12);
    const intersection = ArrayOperations.intersection(
      [1, 2, 3, 4, 5],
      [2, 4, 6, 7, 8]
    );
    const uniqueValuesArray = ArrayOperations.union(
      [2, 3, 4, 5],
      [3, 4, 5, 6, 8, 9]
    );
    // const wordChunks = ArrayOperations.chunk(this.numbers, )
    console.log(this.evenNumbers, 'Even Numbers');
    console.log(startwith, 'Letter starts with S');
    console.log(squaredNumbers, 'Squared Numbers');
    console.log(sumOfNumbers, 'Sum using reducer');
    console.log(generateSentence, 'Sentence generator');
    console.log(chunkWords, 'Chunk');
    console.log(flattenArray, 'Flatten Array');
    console.log(uniqueNumbers, 'Unique Numbers');
    console.log(intersection, 'Intersection');
    console.log(uniqueValuesArray, 'Unique Arrays');
  }
}
