import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../models/bookmark.model';
import { BookmarkService } from '../../services/boomark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css'],
})
export class BookmarkListComponent implements OnInit {

  bookmarks?: Bookmark[];
  currentBookmark: Bookmark = {};
  currentIndex = -1;
  name = '';

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.retrieveBookmarks();
  }

  private retrieveBookmarks(): void {
    this.bookmarkService.getAll().subscribe({
      next: (data) => {
        this.bookmarks = data.payload;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveBookmarks();
    this.currentBookmark = {};
    this.currentIndex = -1;
  }

  setActiveBookmark(bookmark: Bookmark, index: number): void {
    this.currentBookmark = bookmark;
    this.currentIndex = index;
  }

  // removeAllBookmarks(): void {

  //   this.bookmarkService.deleteAll().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       //this.refreshList();
  //     },
  //     error: (e) => console.error(e)
  //   });

  // }

  searchByName(): void {
    this.currentBookmark = {};
    this.currentIndex = -1;

    this.bookmarkService.findByName(this.name).subscribe({
      next: (data) => {
        this.bookmarks = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    
  }


}
