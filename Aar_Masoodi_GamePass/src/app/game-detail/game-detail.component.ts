import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentListComponent } from '../content-list/content-list.component';
import { ActivatedRoute } from '@angular/router';

import { ContentService } from '../GamePassService/content.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  game: Content | undefined;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private messsageService: MessageService
  ) {}


  ngOnInit(): void {
    this.getGame();
      // this.route.paramMap.subscribe((params) => {
      // this.id = Number(params.get("id") ?? 0);
      // this.contentService.getGame(this.id).subscribe((c) => { this.game = c})
    }

  getGame(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.contentService.getGame(id).subscribe(game => this.game = game);
     this.messsageService.add("Detailed Information for ID: " + id)
   }

}
