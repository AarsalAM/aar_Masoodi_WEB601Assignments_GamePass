import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  myContentList : ContentList = new ContentList();

  contentItem1 : Content = {
    id: 0,
    title: 'Halo Infinite',
    description: 'Take back Zeta Halo from The Banished.',
    creator: '343 Studios',
    type: 'FPS',
    imgURL: 'https://cdn2.whatoplay.com/150x/46032-1605512267.jpg'

  }

  contentItem2 : Content = {
    id: 0,
    title: 'Forza Horizon 5',
    description: 'Explore Mexico like never before!',
    creator: 'Playground Studios',
    type: 'Racing',
    imgURL: 'https://store-images.s-microsoft.com/image/apps.6614.13806078025361171.9723cf5e-1e29-4d9d-ad0a-cc37a95bb75d.b5dcb363-3613-4901-bf2d-f19c13b54a3d?w=120&h=120&q=60'
  }

  contentItem3 : Content = {
    id: 0,
    title: 'Doom Eternal',
    description: 'Rip and Tear',
    creator: 'Id Softworks',
    type: 'FPS',
    imgURL: 'https://www.juegostorrentpc.net/wp-content/uploads/2020/03/Doom-eternal-cover-pc-150x150.jpg'
  }

  constructor() {
    this.myContentList.addItem(this.contentItem1);
    this.myContentList.addItem(this.contentItem2);
    this.myContentList.addItem(this.contentItem3);
  }

}
