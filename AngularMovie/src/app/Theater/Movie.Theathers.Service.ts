import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IMoviesTheater } from "../Model/IMovieTheater";
import { HttpClient } from "@angular/common/http";
import { Environments } from "../environments/environments";

@Injectable({providedIn:"root"})
export class MovieTheatersService{
  

    constructor(private httpService:HttpClient){}
    baseUrl = Environments.appBaseUrl;

    GetAll(): Observable<IMoviesTheater[]> {
      return this.httpService.get<IMoviesTheater[]>(`${this.baseUrl}/MovieTheater/Get`).pipe(
        map((res) => {
          return res;
        })
      );
    }
  
    Get(id:number):Observable<IMoviesTheater>{
      return this.httpService.get<IMoviesTheater>(`${this.baseUrl}/MovieTheater/Get/${id}`).pipe(
        map(res=>res)
      );
  
    }
    addMoviesTheater(Genres: IMoviesTheater): Observable<void> {
      return this.httpService.post<void>(`${this.baseUrl}/MovieTheater/post`, Genres);
    }
    updateMoviesTheater(Genres:Partial<IMoviesTheater>): Observable<void> {
      return this.httpService.put<void>(`${this.baseUrl}/MovieTheater/put`, Genres);
    }
  
    deleteMoviesTheater(Genres:Partial<IMoviesTheater>): Observable<void> {
      return this.httpService.post<void>(`${this.baseUrl}/MovieTheater/delete`, Genres);
    }
}