import { Component } from '@angular/core';
import { ContentService } from './GamePassService/content.service';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aar_Masoodi_GamePass';

  constructor(private contentService: ContentService, private logService: LogUpdateService) {}

  ngOnInit(): void {
    this.logService.init();
  }
}
