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


  newGame: Content = {title: '', id: 0, description: '', creator: '', tags: [], imgURL: '' };

  // public newGame: Content;

  addNewGame(): void {
    this.ourPromise.then(successResult => this.addGameEvent.emit(this.newGame)).catch(failResult => console.log(failResult));
    // this.addGameEvent.emit(this.newGame);
  }





  ourPromise = new Promise((success, fail) =>{
    let testPass = true;
    if (testPass) {
      console.log("The addition was successful");
    }
    else {
      console.log("Adding new content not successful")
    }
  })


  


  }

