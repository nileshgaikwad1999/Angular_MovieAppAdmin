import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { GenrasDto } from './genres.model';
import { Environments } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private httpService: HttpClient) {}
  baseUrl = Environments.appBaseUrl;

  GetAll(): Observable<GenrasDto[]> {
    return this.httpService.get<GenrasDto[]>(`${this.baseUrl}/Genras/Get`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  Get(id:number):Observable<GenrasDto>{
    return this.httpService.get<GenrasDto>(`${this.baseUrl}/Genras/Get/${id}`).pipe(
      map(res=>res)
    );

  }
  addGenres(Genres: GenrasDto): Observable<void> {
    return this.httpService.post<void>(`${this.baseUrl}/Genras/post`, Genres);
  }
  updateGenres(Genres:Partial<GenrasDto>): Observable<void> {
    return this.httpService.put<void>(`${this.baseUrl}/Genras/put`, Genres);
  }

  deleteGenres(Genres:Partial<GenrasDto>): Observable<void> {
    return this.httpService.post<void>(`${this.baseUrl}/Genras/delete`, Genres);
  }
}
