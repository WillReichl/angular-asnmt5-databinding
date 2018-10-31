import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameNumber: number;

  constructor() {
    this.gameNumber = 0;
  }

  ngOnInit() {
  }

  startGame() {
    setInterval(function() { console.log('Game running!'); }, 1000);
    console.log('Game started!');
  }

  stopGame() {
    console.log('Game stopped!');
  }

}
