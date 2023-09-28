import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILogin } from '../Model/ILogin';
import { Environments } from '../environments/environments';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({providedIn:"root"})
export class LoginService {
  constructor(private http: HttpClient) {}
  baseUrl = Environments.appBaseUrl;
  Login(user: ILogin):Observable<any>
  {
 let data= this.http.post<any>
  (`${this.baseUrl}/Login/post`, user,{responseType: 'text' as 'json'  }).pipe(
    map((res)=>{
      if(res=="sucess")
    localStorage.setItem("loginKey",res)
    return res;
    }
    )
  )
  return data;
  }


}
