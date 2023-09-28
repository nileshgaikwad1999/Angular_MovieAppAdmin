import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMoviesTheater } from 'src/app/Model/IMovieTheater';
import { MovieTheatersService } from '../Movie.Theathers.Service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/Movies/movie.service';
import { IMovies } from 'src/app/Model/IMovies';
import { ImovieTheaterDetails } from 'src/app/Model/movieTheaterDetails';

@Component({
  selector: 'app-createtheater',
  templateUrl: './createtheater.component.html',
  styleUrls: ['./createtheater.component.css'],
})
export class CreatetheaterComponent {
  pageBtnTitle: string = '';
  moviesList: IMovies[] = [];
  movieTheater: IMoviesTheater = {
    id: 0,
    name: '',
    location: '',
    movieTheaterDetails: [],
  };
  constructor(
    private Route: Router,
    private movieTeatherService: MovieTheatersService,
    private activeRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}
  ngOnInit(): void {
    this.formMaker();
    this.getIdFromUrl();
    this.movieService.GetAll().subscribe((res) => (this.moviesList = res));
  }

  getIdFromUrl() {
    const id = this.activeRoute.snapshot.params['id'];
    this.movieTheater.id = id;
    if (id != null && id != 0 && id != undefined) {
      this.ViewEdit(id);
      this.pageBtnTitle = 'Update Changes';
    } else {
      this.pageBtnTitle = 'Save Changes';
    }
  }
  ViewEdit(id: number) {
    this.movieTeatherService.Get(id).subscribe((res) => {
      this.movieTheater = res;
      this.MoviesTheaterForm.patchValue({
        Name: res.name,
        id: res.id,
        location: res.location,
      });
      const formArry = new FormArray<FormGroup>([]);

      this.movieTheater.movieTheaterDetails.forEach((s) => {
        let d = new FormGroup({
          movieId: new FormControl(s.movieId),
          movieTheatherId: new FormControl(s.movieTheatherId),
          id: new FormControl(s.id),
        });
        formArry.push(d);
      });
      this.MoviesTheaterForm.setControl('Details', formArry);
    });
  }

  SaveChanges() {
    this.movieTheater.movieTheaterDetails = [];
    this.movieTheater.location = this.MoviesTheaterForm.value.location;
    this.movieTheater.name = this.MoviesTheaterForm.value.Name;

    for (let i of this.MoviesTheaterForm.value.Details) {
      const id = i.id ? parseInt(i.id) : 0;

      let d: ImovieTheaterDetails = {
        id: i.id ? parseInt(i.id) : 0,
        movieId: parseInt(i.movieId),
        movieTheatherId: i.movieTheatherId ? parseInt(i.movieTheatherId) : 0,
      };

      this.movieTheater.movieTheaterDetails.push(d);
    }

    if (this.movieTheater.id != 0 && this.movieTheater.id != undefined) {
      this.movieTeatherService.updateMoviesTheater(this.movieTheater).subscribe(
        (res) => {
          this.Route.navigate(['home/theater']);
        },

        (error) => {
          this.errorMessage = `${error}`;
        }
      );
    } else {
      this.movieTeatherService.addMoviesTheater(this.movieTheater).subscribe(
        (res) => {
          this.Route.navigate(['home/theater']);
        },
        (error) => {
          this.errorMessage = `${error}`;
        }
      );
    }
  }

  MoviesTheaterForm!: FormGroup;
  formMaker() {
    this.MoviesTheaterForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      id: new FormControl(0),
      location: new FormControl('', Validators.required),
      Details: new FormArray([]),
    });
  }
  movies() {
    return new FormGroup({
      movieId: new FormControl(''),
      movieTheatherId: new FormControl(''),
      id: new FormControl(''),
    });
  }
  get Details() {
    return this.MoviesTheaterForm.get('Details') as FormArray;
  }
  addMovies() {
    (this.MoviesTheaterForm.get('Details') as FormArray).push(this.movies());
  }
  removeMovies(index: number) {
    this.Details.removeAt(index);
  }
  deleteMovies() {
    this.movieTheater.movieTheaterDetails = [];
    if (confirm('are you sure to delete !')) {
      this.movieTeatherService.deleteMoviesTheater(this.movieTheater).subscribe(
        (res) => {
          this.Route.navigate(['home/theater']);
        },
        (error) => {
          this.errorMessage = `${error}`;
        }
      );
    }
  }
  errorMessage = '';
  CancelClick() {
    this.Route.navigate(['home/theater']);
  }
}
