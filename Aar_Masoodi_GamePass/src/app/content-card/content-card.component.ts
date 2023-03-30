import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content!: Content;

  constructor() {
  }

  clickInfo(content: Content) {
    console.log('The ID is: ', content.id, 'The Title is: ', content.title);
  }

}
