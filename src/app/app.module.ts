import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './global/navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolbarComponent } from './global/toolbar/toolbar.component';
import { MenuModule } from 'primeng/menu';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BoardComponent } from './parts/board/board.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { BadgeModule } from 'primeng/badge';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { ReadpostComponent } from './parts/readpost/readpost.component';
import { MenubarModule } from 'primeng/menubar';
import { MembersComponent } from './parts/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    BoardComponent,
    ReadpostComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    MenuModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    TableModule,
    CardModule,
    ImageModule,
    BadgeModule,
    GalleriaModule,
    DialogModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
