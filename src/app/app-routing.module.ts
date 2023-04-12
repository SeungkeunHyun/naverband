import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './parts/board/board.component';
import { MembersComponent } from './parts/members/members.component';

const routes: Routes = [
  { path: '**', component: BoardComponent },
  { path: '/members', component: MembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
