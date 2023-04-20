import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Output, EventEmitter } from '@angular/core';
import { ContentService } from '../GamePassService/content.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {

  @Output() addGameEvent = new EventEmitter<Content>();

  constructor(private contentService: ContentService) {};

  newGame: Content = {title: '', id: 0, description: '', creator: '', tags: [], imgURL: '' };


addNewGame(): void {
  this.addGameEvent.emit(this.newGame);
  console.log(this.newGame);

  this.newGame = {title: '', id: 0, description: '', creator: '', tags: [], imgURL: '' }
}
   



}
