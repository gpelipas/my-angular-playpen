import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from '../../models/bookmark.model';
import { BookmarkService } from '../../services/boomark.service';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.css'],
})
export class BookmarkDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentBookmark : Bookmark = Bookmark.newInstance();

  message = '';

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBookmark(this.route.snapshot.params['id']);
    }
  }

  getBookmark(id: string): void {
    this.bookmarkService.get(id).subscribe({
      next: (data) => {
        this.currentBookmark = data.payload;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  softDeleteBookmark(): void {
    this.message = '';

    const inactiveBookmark = { ...this.currentBookmark, active: false };

    this.bookmarkService.update(inactiveBookmark.id, inactiveBookmark)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentBookmark = inactiveBookmark;

          this.message = res.message
            ? res.message
            : 'Bookmark was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateBookmark(): void {
    this.message = '';

    this.bookmarkService.update(this.currentBookmark.id, this.currentBookmark)
      .subscribe({
        next: (res) => {
          console.log(res);

          this.message = res.message
            ? res.message
            : 'Bookmark was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteBookmark(): void {
    this.bookmarkService.delete(this.currentBookmark.id)
      .subscribe({
        next: (res) => {
          console.log(res);

          this.router.navigate(['/bookmarks']);
        },
        error: (e) => console.error(e)
    });
  }

}
