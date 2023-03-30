import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'Halo Infinite',
        description: 'Take back Zeta Halo from The Banished.',
        creator: '343 Studios',
        type: 'FPS',
        imgURL: 'https://cdn2.whatoplay.com/150x/46032-1605512267.jpg',
        tags: ['action','fast-paced']
      },
      {
        id: 2,
        title: 'Forza Horizon 5',
        description: 'Explore Mexico like never before!',
        creator: 'Playground Studios',
        type: 'Racing',
        imgURL: 'https://store-images.s-microsoft.com/image/apps.6614.13806078025361171.9723cf5e-1e29-4d9d-ad0a-cc37a95bb75d.b5dcb363-3613-4901-bf2d-f19c13b54a3d?w=120&h=120&q=60',
        tags: ['racing','open-world']
      },
      {
        id: 3,
        title: 'Doom Eternal',
        description: 'Rip and Tear',
        creator: 'Id Softworks',
        type: 'FPS',
        imgURL: 'https://www.juegostorrentpc.net/wp-content/uploads/2020/03/Doom-eternal-cover-pc-150x150.jpg',
        tags: ['action','fast-paced','violent']
      },
      {
        id: 4,
        title: 'Sea of Thieves',
        description: 'Sail as a pirate!',
        creator: 'Rare',
        type: 'Adventure',
        imgURL: 'https://www.juegostorrentpc.net/wp-content/uploads/2020/03/Doom-eternal-cover-pc-150x150.jpg',
        tags: ['adventure','sailing','pvp']
      },
      {
        id: 5,
        title: 'Dirt 5',
        description: 'Dirt racing!',
        creator: 'Codemasters',
        type: 'Racing',
        imgURL: 'https://www.juegostorrentpc.net/wp-content/uploads/2020/03/Doom-eternal-cover-pc-150x150.jpg',
        tags: ['racing','arcade']
      },
      {
        id: 6,
        title: 'Fable',
        description: 'An adventure awaits.',
        creator: 'Lionhead',
        type: 'Adventure',
        imgURL: 'https://www.juegostorrentpc.net/wp-content/uploads/2020/03/Doom-eternal-cover-pc-150x150.jpg',
        tags: ['adventure','player-choice']
      }
    ];
  }


}
