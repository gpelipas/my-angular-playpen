import { Component } from '@angular/core';
import { Bookmark } from '../../models/bookmark.model';
import { BookmarkService } from '../../services/boomark.service'; 

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css'],
})
export class AddBookmarkComponent {

  bookmark = Bookmark.newInstance();

  submitted = false;

  constructor(private bookmarkService: BookmarkService) {}


  // Save a Bookmark
  saveBookmark(): void {
    const data = {
      name: this.bookmark.name,
      url: this.bookmark.url
    };

    this.bookmarkService.create(data).subscribe({
      next: (res) => {
        console.log(res);

        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  // Prepare form for new bookmark
  newBookmark(): void {
    this.submitted = false;

    this.bookmark = Bookmark.newInstance();
  }
  
}
