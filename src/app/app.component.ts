import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
player1Name: any;
markCell(arg0: number,arg1: number) {
throw new Error('Method not implemented.');
}
  title = 'myfirstproject';
  constructor(public gameService:GameService){}
  resetGame(){
    this.gameService.newGame();
  }
}
