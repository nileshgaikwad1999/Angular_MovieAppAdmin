import { Component } from '@angular/core';
import { IMoviesTheater } from 'src/app/Model/IMovieTheater';
import { MovieTheatersService } from '../Movie.Theathers.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-theater',
  templateUrl: './index-theater.component.html',
  styleUrls: ['./index-theater.component.css']
})
export class IndexTheaterComponent {
errorMessage="";
  movieTheaterList: IMoviesTheater[] = [];
  constructor(private moviesTheaterService: MovieTheatersService,private route:Router) {}
  ngOnInit(): void {
    this.Get();
  }
  Get() {
    this.moviesTheaterService.GetAll().subscribe((res)=>{
      this.movieTheaterList=res
    },
    (error)=>{
      this.errorMessage=`${error}`;
    }
    )
  }
  editMoviesTheaterClick(id:number){

    this.route.navigate(['home/theater/edit',id])
  }
}
