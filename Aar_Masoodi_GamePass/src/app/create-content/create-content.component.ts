import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent {

  @Output() newGameEvent = new EventEmitter<string>();
  @Output() addGameEvent = new EventEmitter<Content>();


  newGame!: Content;

  addNewGame(): void {
    this.addGameEvent.emit(this.newGame);
  }

  public addGame(value: string) {
    this.newGameEvent.emit(value);
    console.log(this.newGameEvent);
  }

  // onAddContent() {
  //   const content = {
  //     title: this.title,
  //     description: this.description,
  //     type: this.type,
  //     tags: this.tags,
  //     id: this.id,
  //     imgURL: this.imgURL
  //   };
    // contentAddedCallback(content);
    // console.log('New content added successfully!');
    // this.title = '';
    // this.description = '';
    // this.tags = [];
    // this.id = 0;
    // this.imgURL = '';
  }

