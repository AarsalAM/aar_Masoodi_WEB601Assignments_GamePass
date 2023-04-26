import { ApplicationRef, Component } from '@angular/core';
import { ContentService } from './GamePassService/content.service';
import { LogUpdateService } from './log-update.service';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aar_Masoodi_GamePass';

  constructor(private contentService: ContentService, 
              private logService: LogUpdateService,
              private appRef: ApplicationRef,
              private updates: SwUpdate) {}

  ngOnInit(): void {
    this.logService.init();

    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everyHalfHour$ = interval(0.5 * 60 * 60 * 1000);
    const everyHalfHourAppIsStable$ = concat(appIsStable$, everyHalfHour$);

    everyHalfHourAppIsStable$.subscribe( ()=> this.updates.checkForUpdate());
    
  }
}
