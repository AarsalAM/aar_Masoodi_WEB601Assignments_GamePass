import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../GamePassService/content.service';
import { contentArray } from '../helper-files/contentDb';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentArray: Content[] = [];

  @Input() searchText: any;

  constructor(private contentService: ContentService) {
  }
  
  ngOnInit(): void {
    this.contentService.getContentObs().subscribe(games => this.contentArray = games);
  }

  isFound: string = "";
  searchContent(searchText: string) {
    this.isFound = "This Item Was Not Found";
    document.getElementById('search')?.classList.add('isNotFound');
    this.contentArray.forEach((contentItem) => {
      if(contentItem.title === searchText) {
        console.log('Item was found');
        this.isFound = "This Item Was Found";
        document.getElementById('search')?.classList.replace('isNotFound', 'isFound');
      }
    });
  }


}
