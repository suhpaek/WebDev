import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css'],
})
export class AlbumsComponent implements OnInit {
  error = '';
  albums$!: Observable<Album[]>;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.error = '';
    this.albums$ = this.albumService.getAlbums().pipe(
      shareReplay(1),
      catchError((err) => {
        console.log('ERROR', err);
        this.error = 'Не получилось загрузить альбомы 😢';
        return of([]);
      })
    );
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => this.loadAlbums(),
      error: (err) => {
        console.log('DELETE ERROR', err);
        this.error = 'Не получилось удалить альбом 😢';
      },
    });
  }

  prettyTitle(id: number): string {
  const themes = ['Cute Cats', 'Sleepy Kittens', 'Meow Moments', 'Paws & Whiskers', 'Cat Adventures'];
  return `${themes[(id - 1) % themes.length]} #${id}`;
}
}