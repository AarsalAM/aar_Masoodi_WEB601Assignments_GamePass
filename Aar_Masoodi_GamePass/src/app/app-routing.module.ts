import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full' },
  {path: 'list', component: ContentListComponent},
  {path: 'detail/:id', component: GameDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { 

}
