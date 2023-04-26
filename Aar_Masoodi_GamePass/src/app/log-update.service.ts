import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate,
              private snackBar: MatSnackBar) { }

  public init(){
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading the new app version: ${event.version.hash}`);
          break;
          case 'VERSION_READY':
            this.updates.versionUpdates.subscribe(() => {
              const snack = this.snackBar.open('New version available', 'Reload');
              snack.onAction().subscribe(() => {
                window.location.reload();
                      });
                    });
            console.log(`current app version is: ${event.currentVersion.hash}`);
            console.log(`the new app version that is ready for use is: ${event.latestVersion.hash}`);
            break;
      }
    });
  }

  openSnackBar() {
    const snackBarRef = this.snackBar.open('An Update is Available', 'Update');
    snackBarRef.onAction().subscribe(()=> {
      this.updates.activateUpdate().then(()=> document.location.reload());
    });
  }
}
