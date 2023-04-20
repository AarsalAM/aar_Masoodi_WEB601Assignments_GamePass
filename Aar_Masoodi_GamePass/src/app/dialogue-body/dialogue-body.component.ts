import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialogue-body',
  templateUrl: './dialogue-body.component.html',
  styleUrls: ['./dialogue-body.component.scss']
})


export class DialogueBodyComponent {

  @Output() addGameEvent = new EventEmitter<Content>();


  newGame: Content = {title: '', id: 0, description: '', creator: '', tags: [], imgURL: '' };


  addNewGame(): void {
    this.addGameEvent.emit(this.newGame);
    console.log(this.newGame);
    this.newGame = {title: '', id: 0, description: '', creator: '', tags: [], imgURL: '' }
  }

}
