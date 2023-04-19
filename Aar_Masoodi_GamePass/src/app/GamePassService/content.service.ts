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

  getGameObs(id: number) : Observable<Content>{
    const game = contentArray.find(h => h.id === id)!;
    console.log(game)
    return of(game)
  }
}
