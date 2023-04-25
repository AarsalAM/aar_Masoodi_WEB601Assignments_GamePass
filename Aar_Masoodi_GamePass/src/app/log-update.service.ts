import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate) { }

  public init(){
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading the new app version: ${event.version.hash}`);
          break;
          case 'VERSION_READY':
            console.log(`current app version is: ${event.currentVersion.hash}`);
            console.log(`the new app version that is ready for use is: ${event.latestVersion.hash}`);
            break;
      }
    });
  }
}
