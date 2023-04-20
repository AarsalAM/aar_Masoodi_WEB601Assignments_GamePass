import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentListComponent } from '../content-list/content-list.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ContentService } from '../GamePassService/content.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent {

  game: Content | undefined;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.contentService.getGame(id).subscribe(game => this.game = game);
  }

}
