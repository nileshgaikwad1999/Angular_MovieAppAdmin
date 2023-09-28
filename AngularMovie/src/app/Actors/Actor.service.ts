import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActor } from '../Model/IActor';
import { Environments } from '../environments/environments';
import { Observable, catchError, map, throwError } from 'rxjs';
import { handleError } from '../Utility/helpr';

@Injectable({ providedIn: 'root' })
export class ActorService {
  baseUrl = Environments.appBaseUrl;
  constructor(private http: HttpClient) {}

  public GetAll(): Observable<IActor[]> {
    return this.http.get<IActor[]>(`${this.baseUrl}/Actors/Get`).pipe(
      map((res) => res),
      catchError(handleError)
    );
  }
  public Get(id: number): Observable<IActor> {
    return this.http
      .get<IActor>(`${this.baseUrl}/Actors/Get/${id}`)
      .pipe(map((res) => res),
      catchError(handleError)
      );
  }

  public addActor(actors: IActor): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/Actors/post`, actors)
    .pipe(
      catchError(handleError)

    );
  }
  public updateActor(actors: Partial<IActor>): Observable<void> {
    return this.http
      .put<void>(`${this.baseUrl}/Actors/put`, actors)
      .pipe(catchError(handleError));
  }

  public deleteActor(actors: IActor): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/Actors/delete`, actors)
    .pipe(
      catchError(handleError)
    );
  }

  
}
