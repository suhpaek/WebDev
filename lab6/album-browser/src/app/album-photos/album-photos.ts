import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';

import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css'],
})
export class AlbumPhotosComponent implements OnInit {
  error = '';
  photos$!: Observable<Photo[]>;

  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.photos$ = this.route.paramMap.pipe(
      map((p) => Number(p.get('id'))),
      switchMap((id) => {
        this.albumId = id;

        if (!id || Number.isNaN(id)) {
          this.error = 'Неверный id альбома';
          return of([]);
        }

        this.error = '';
        return this.albumService.getAlbumPhotos(id).pipe(
          catchError((err) => {
            console.log('PHOTOS ERROR', err);
            this.error = 'Не получилось загрузить фотки 😢';
            return of([]);
          })
        );
      }),
      shareReplay(1)
    );
  }
onImgError(event: Event): void {
  const img = event.target as HTMLImageElement;
  img.src =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
        <rect width="100%" height="100%" fill="#eee"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-size="14">
          No image
        </text>
      </svg>`
    );
}

  back(): void {
    this.router.navigate(['/albums', this.albumId]);
  }

  
}