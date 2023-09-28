import { Component, OnInit } from '@angular/core';
import { IMovieDetails } from 'src/app/Model/IMovieDetails';
import { MovieDetailsService } from '../Movie.details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  MovieDetails: IMovieDetails[] = [];
  constructor(private movieDetailsService: MovieDetailsService) {}
  ngOnInit(): void {
    this.movieDetailsService
      .GetMovieDetails()
      .subscribe((res) => {this.MovieDetails = res});
  }
}
