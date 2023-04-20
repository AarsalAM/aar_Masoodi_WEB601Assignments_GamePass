import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../GamePassService/content.service';
// import { contentArray } from '../helper-files/contentDb';
import { Observable } from 'rxjs';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentArray: Content[] = [];
  game$: Observable<Content>;

  @Input() searchText: any;

  constructor(public contentService: ContentService) {
  }

 
  
  ngOnInit(): void {
    this.contentService.getContentObs().subscribe(games => this.contentArray = games);
  };

  addContentToList(newContentItem: Content): void {
    this.contentService.addContent(newContentItem as Content).subscribe(game => this.contentArray.push(game))
    this.contentArray = [...this.contentArray];
    console.log(this.contentArray);
  };



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
