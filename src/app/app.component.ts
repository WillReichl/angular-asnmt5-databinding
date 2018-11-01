import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberChanged(numberData: { gameNum: number} ) {
    console.log('Game running: ' + numberData.gameNum);
    if (numberData.gameNum % 2 === 1) {
      this.oddNumbers.push(numberData.gameNum);
    } else {
      this.evenNumbers.push(numberData.gameNum);
    }
  }
}


