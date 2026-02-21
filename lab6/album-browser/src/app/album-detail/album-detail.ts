import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap, tap } from 'rxjs/operators';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'],
})
export class AlbumDetailComponent implements OnInit {
  error = '';
  saving = false;

  album$!: Observable<Album | null>;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.album$ = this.route.paramMap.pipe(
      map((p) => Number(p.get('id'))),
      switchMap((id) => {
        if (!id || Number.isNaN(id)) {
          this.error = 'Неверный id альбома';
          return of(null);
        }

        this.error = '';
        return this.albumService.getAlbum(id).pipe(
          tap((album) => (this.editedTitle = album.title)),
          catchError((err) => {
            console.log('DETAIL ERROR', err);
            this.error = 'Не получилось загрузить альбом 😢';
            return of(null);
          })
        );
      }),
      shareReplay(1)
    );
  }

  save(album: Album): void {
    const title = this.editedTitle.trim();
    if (!title) {
      this.error = 'Title не может быть пустым';
      return;
    }

    this.saving = true;
    this.error = '';

    const updated: Album = { ...album, title };

    this.albumService.updateAlbum(updated).subscribe({
      next: (saved) => {
        this.editedTitle = saved.title;
        this.saving = false;
      },
      error: (err) => {
        console.log('SAVE ERROR', err);
        this.error = 'Не получилось сохранить 😢';
        this.saving = false;
      },
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}