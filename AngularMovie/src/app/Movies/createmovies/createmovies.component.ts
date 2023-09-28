import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovies } from 'src/app/Model/IMovies';
import { MoviesService } from '../movie.service';
import { IActor } from 'src/app/Model/IActor';
import { ActorService } from 'src/app/Actors/Actor.service';

@Component({
  selector: 'app-createmovies',
  templateUrl: './createmovies.component.html',
  styleUrls: ['./createmovies.component.css'],
})
export class CreatemoviesComponent implements OnInit {
  pageBtnTitle: string = '';
  movie: IMovies = {
    id: 0,
    name: '',
    actorId: '',
    relaseDate: new Date(),
    price: '',
  };
  Actors: IActor[] = [];
  constructor(
    private Route: Router,
    private MovieService: MoviesService,
    private activeRoute: ActivatedRoute,
    private actorService: ActorService
  ) {}
  ngOnInit(): void {
    this.formMaker();
    this.getIdFromUrl();
    this.actorService.GetAll().subscribe((res) => {
      this.Actors = res;
    });
  }

  getIdFromUrl() {
    const id = this.activeRoute.snapshot.params['id'];
    this.movie.id = id;
    if (id != null && id != 0 && id != undefined) {
      this.pageBtnTitle="Update Changes"
      this.ViewEdit(id);
    }
    else{
      this.pageBtnTitle="Save Changes"

    }
  }
  ViewEdit(id: number) {
    this.pageBtnTitle = 'Update Changes';

    this.MovieService.Get(id).subscribe((res) => {
      this.movie = res;
      this.MoviesForm.setValue({
        Name: res.name,
        ReleaseDate: res.relaseDate,
        price: res.price,
        id: res.id,
        actorId: res.actorId,
      });
    });
  }
  errorMessage="";

  SaveChanges() {
    this.movie.price = this.MoviesForm.value.price;
    this.movie.name = this.MoviesForm.value.Name;
    this.movie.relaseDate = this.MoviesForm.value.ReleaseDate;
    this.movie.actorId = this.MoviesForm.value.actorId;
    if (this.movie.id != 0 && this.movie.id != undefined) {
      this.MovieService.updateMovies(this.movie).subscribe((res) => {
        this.Route.navigate(['home/movie']);
      },
      (error)=>{
        this.errorMessage=`${error}`;
      }
      );
    } else {
      this.MovieService.addMovies(this.movie).subscribe((res) => {
        this.Route.navigate(['home/movie']);
      },
      (error)=>{
        this.errorMessage=`${error}`;
      });
    }
  }

  MoviesForm!: FormGroup;
  formMaker() {
    this.MoviesForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      ReleaseDate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      id: new FormControl(0),
      actorId: new FormControl('', Validators.required),
    });
  }

  deleteMovies() {
    if (confirm('are you sure to delete !')) {
      this.MovieService.deleteMovies(this.movie).subscribe((res) => {
        this.Route.navigate(['home/movie']);
      },
      (error)=>{
        this.errorMessage=`${error}`;
      }   
      );
    }
  }
  CancelClick(){
    this.Route.navigate(['/home/movie']);
  }
}
