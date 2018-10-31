import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameNumber: number;
  gameInterval;
  @Output() numberEmitted = new EventEmitter<{ gameNum: number }>();

  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 2000); // flip to true after 2 seconds
  // }

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.gameNumber = 0;
    this.gameInterval = setInterval(() => {
      this.gameNumber++;
      this.numberEmitted.emit({
        gameNum: this.gameNumber
      });
    }, 1000);
    console.log('Game started!');
  }

  stopGame() {
    clearInterval(this.gameInterval);
    this.gameNumber = 0;
    console.log('Game stopped!');
  }

}
