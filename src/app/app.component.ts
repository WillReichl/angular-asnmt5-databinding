import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onNumberChanged(numberData: { gameNum: number} ) {
    console.log('Game running: ' + numberData.gameNum);
  }
}


