import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent {

  @Output() addGameEvent = new EventEmitter<Content>();


  newGame: Content = {title: '', id: 0, description: '', creator: '' };

  addNewGame(): void {
    this.addGameEvent.emit(this.newGame);
  }



  }

