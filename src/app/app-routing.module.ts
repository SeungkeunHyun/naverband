import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './parts/board/board.component';
import { MembersComponent } from './parts/members/members.component';
import { AlbumsComponent } from './parts/albums/albums.component';
import { CalendarComponent } from './parts/calendar/calendar.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'members', component: MembersComponent },
  { path: 'board', component: BoardComponent },
  { path: '**', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
