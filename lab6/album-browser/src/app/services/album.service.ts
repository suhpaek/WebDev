import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private updatedTitles: { [key: number]: string } = {};

  constructor(private http: HttpClient) {}

    getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
        map(albums =>
        albums.map(album => ({
            ...album,
            title: this.updatedTitles[album.id] ?? album.title
        }))
        )
    );
    }

    getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`).pipe(
        map(album => ({
        ...album,
        title: this.updatedTitles[id] ?? album.title
        }))
    );
    }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

    updateAlbum(album: Album): Observable<Album> {
    this.updatedTitles[album.id] = album.title;

    return this.http.put<Album>(
        `${this.baseUrl}/albums/${album.id}`,
        album
    );
    }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}