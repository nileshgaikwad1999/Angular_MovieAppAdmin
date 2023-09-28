import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environments } from '../environments/environments';
import { Observable, map } from 'rxjs';
import { IMovies } from '../Model/IMovies';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private httpService: HttpClient) {}
  baseUrl = Environments.appBaseUrl;

  GetAll(): Observable<IMovies[]> {
    return this.httpService.get<IMovies[]>(`${this.baseUrl}/Movies/Get`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  Get(id: number): Observable<IMovies> {
    return this.httpService
      .get<IMovies>(`${this.baseUrl}/Movies/Get/${id}`)
      .pipe(map((res) => res));
  }
  
  addMovies(Genres: IMovies): Observable<void> {
    return this.httpService.post<void>(`${this.baseUrl}/Movies/post`, Genres);
  }
  updateMovies(Genres: Partial<IMovies>): Observable<void> {
    return this.httpService.put<void>(`${this.baseUrl}/Movies/put`, Genres);
  }

  deleteMovies(Genres: Partial<IMovies>): Observable<void> {
    return this.httpService.post<void>(`${this.baseUrl}/Movies/delete`, Genres);
  }
}
