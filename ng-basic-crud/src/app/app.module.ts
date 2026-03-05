import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookmarkComponent } from './components/add-bookmark/add-bookmark.component';
import { BookmarkDetailsComponent } from './components/bookmark-details/bookmark-details.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookmarkComponent,
    BookmarkDetailsComponent,
    BookmarkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
