import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../GamePassService/content.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content!: Content;

  constructor(private contentService: ContentService) {
  }

  clickInfo(content: Content) {
    console.log('The ID is: ', content.id, 'The Title is: ', content.title);
  }






}
