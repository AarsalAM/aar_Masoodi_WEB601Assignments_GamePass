import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentArray: Content[];

  @Input() searchText: any;
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
        imgURL: 'https://th.bing.com/th/id/OIP.MNlwdmNMB8H7hakc109i7wHaLH?pid=ImgDet&rs=1',
        tags: ['adventure','sailing','pvp']
      },
      {
        id: 5,
        title: 'Dirt 5',
        description: 'Dirt racing!',
        creator: 'Codemasters',
        imgURL: 'https://th.bing.com/th/id/OIP.o6zCWyyqWMIod-N_0GtmbAHaIX?pid=ImgDet&rs=1',
        tags: ['racing','arcade']
      },
      {
        id: 6,
        title: 'Fable',
        description: 'An adventure awaits.',
        creator: 'Lionhead',
        type: 'Adventure',
        imgURL: 'https://th.bing.com/th/id/R.2dccf8c844dbf311b51565b66efb2cd2?rik=PxhFKWe%2fzjtXxw&pid=ImgRaw&r=0',
        tags: ['adventure','player-choice']
      },
      {
        id: 7,
        title: 'Monster Hunter Rise',
        description: 'Hunt them all!',
        creator: 'Capcom',
        imgURL: 'https://cdn-prod.scalefast.com/public/assets/user/8731055/image/ba9d8b58c4c8e28d103a4b90cee7cd58.png',
        tags: ['co-op','grindy']
      }
    ];
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


  addGameToList(newGameFromChild: Content): void {
    this.contentArray.push(newGameFromChild);

    // this.contentArray = Object.assign([], this.contentArray)

    this.contentArray = [...this.contentArray];
  }


}
