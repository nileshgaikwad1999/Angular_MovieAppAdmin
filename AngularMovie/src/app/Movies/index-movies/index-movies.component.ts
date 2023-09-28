import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie.service';
import { IMovies } from 'src/app/Model/IMovies';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index-movies',
  templateUrl: './index-movies.component.html',
  styleUrls: ['./index-movies.component.css'],
})
export class IndexMoviesComponent implements OnInit {
  errorMessage="";
  movieList: IMovies[] = [];
  constructor(private MoviesService: MoviesService,private route:Router) {}
  ngOnInit(): void {
    this.Get();
  }
  Get() {
    this.MoviesService.GetAll().subscribe((res)=>{
      this.movieList=res
    },
    (error)=>
    {
      this.errorMessage=`${error}`;
      
    }
    )
  }
  editMoviesClick(id:number){

    this.route.navigate(['home/movie/edit',id])
  }
}
