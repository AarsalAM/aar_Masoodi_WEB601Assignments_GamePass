import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';
import { MessageService } from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private messageService: MessageService
  ) { }

  getContentObs() : Observable<Content[]>{
    this.messageService.add("Content array Loaded!")
    return of(contentArray);
  }

  getGameObs(id: number) : Observable<Content | undefined>{
    const game = contentArray.find(h => h.id === id)!;
    if(h=> h.id === id){
      this.messageService.add("Content Item at id: " + id);
    }
    console.log(game)
    return of(game)
  }
}
