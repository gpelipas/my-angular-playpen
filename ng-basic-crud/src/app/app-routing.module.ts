import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkDetailsComponent } from './components/bookmark-details/bookmark-details.component';
import { AddBookmarkComponent } from './components/add-bookmark/add-bookmark.component';

const routes: Routes = [
  { path: '', redirectTo: 'bookmarks', pathMatch: 'full' },
  { path: 'bookmarks', component: BookmarkListComponent },
  { path: 'bookmarks/:id', component: BookmarkDetailsComponent },
  { path: 'add', component: AddBookmarkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
