import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayOperations } from './array-operations/array-operations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
    const chunkWords = ArrayOperations.chunk(this.numbers, 3);
    // const wordChunks = ArrayOperations.chunk(this.numbers, )
    console.log(this.evenNumbers, 'This');
    console.log(startwith, 'This');
    console.log(squaredNumbers, 'Squared Numbers');
    console.log(sumOfNumbers, 'Sum using reducer');
    console.log(generateSentence, 'Sentence');
    console.log(chunkWords, 'Chunked');
  }
}
