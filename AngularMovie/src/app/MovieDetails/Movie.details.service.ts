import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IMovieDetails } from "../Model/IMovieDetails";
import { Environments } from "../environments/environments";

@Injectable({providedIn:"root"})
export class MovieDetailsService{

    baseUrl=Environments.appBaseUrl;
    constructor(private http:HttpClient){}

    GetMovieDetails():Observable<IMovieDetails[]>{

        return this.http.get<IMovieDetails[]>(`${this.baseUrl}/MovieDetails/Get`).pipe(
            map((res)=>res)
        )
    }
}