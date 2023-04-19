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

  errorMessage = "";


  newGame: Content = {title: '', id: 0, description: '', creator: '', tags: [], imgURL: '' };

  //public newGame: Content;

  addNewGame(): void{
    //this.ourPromise.then(successResult => this.addGameEvent.emit(this.newGame)).catch(failResult => console.log(failResult));
    const ourPromise = new Promise((success,fail) => {
      let testPass = true;
      if(testPass) {
        success(this.newGame);
      }
      else {
        fail("Error. Reason is: ");
      }
    });

    ourPromise.then((successResult) => {
      console.log("successfully added the content");
      this.addGameEvent.emit(this.newGame);
      //successResult was originally put in the box above

      this.newGame = {title: '', id: 0, description: '', creator: '', tags: [], imgURL: '' }
        
      }).catch((failResult) => {
        this.errorMessage = "AN ERROR OCCURED"
        console.log("The game was not added successfuly");
      })
    };
  }





  // ourPromise = new Promise((success, fail) =>{
  //   let testPass = true;
  //   if (testPass) {
  //     console.log("The addition was successful");
  //   }
  //   else {
  //     console.log("Adding new content not successful")
  //   }
  // })


  


