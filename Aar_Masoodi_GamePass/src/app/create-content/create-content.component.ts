import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent {
  title: string = '';
  description: string = '';
  tags: string[] = [];
  id: number = 0;
  type: string = '';
  imgURL: string = '';

  @Output() newGameAdd = new EventEmitter<Content>();

  newGameItem: Content | undefined;

  addContent(): void {
    this.newGameAdd.emit(this.newGameItem);
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

