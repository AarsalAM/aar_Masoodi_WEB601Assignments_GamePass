import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContentObs() : Observable<Content[]>{
    return of(contentArray);
  }
}
