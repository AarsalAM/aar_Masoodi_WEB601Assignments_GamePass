import { Component } from '@angular/core';
import { ContentService } from './GamePassService/content.service';
import { Observable } from 'rxjs';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aar_Masoodi_GamePass';

  game$: Observable<Content>;

  constructor(public contentService: ContentService) {}

  // ngOnInit(): void {
  //   this.game$ = this.contentService.getGameObs(1);
  // }

  getGameObs(id: number) {
    let gameFound;
    this.contentService.getGameObs(id).subscribe((game) => {
      gameFound = game;
      // this.messageService.add("New content loaded in");
    });
    return gameFound;
  }

  
}
