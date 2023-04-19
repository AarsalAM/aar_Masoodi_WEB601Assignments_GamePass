import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  contentList = this.http.get<Content[]>("api/content")

  getContentObs() : Observable<Content[]>{
    this.messageService.add("Content array Loaded!")
    return this.contentList;
  }

  // getGameObs(id: number) : Observable<Content | undefined>{
  //   const game = content.find(h => h.id === id)!;
  //   if(h=> h.id === id){
  //     this.messageService.add("Content Item at id: " + id);
  //   }
  //   console.log(game)
  //   return of(game)
  // }
}
