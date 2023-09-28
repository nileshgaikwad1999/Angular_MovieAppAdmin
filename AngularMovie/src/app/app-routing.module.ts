import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGenrasComponent } from './Genres/index-genras/index-genras.component';
import { IndexActorsComponent } from './Actors/index-actors/index-actors.component';
import { IndexMoviesComponent } from './Movies/index-movies/index-movies.component';
import { IndexTheaterComponent } from './Theater/index-theater/index-theater.component';
import { CreategenrasComponent } from './Genres/creategenras/creategenras.component';
import { CreatemoviesComponent } from './Movies/createmovies/createmovies.component';
import { CreateactorsComponent } from './Actors/createactors/createactors.component';
import { CreatetheaterComponent } from './Theater/createtheater/createtheater.component';
import { LoginComponent } from './Auth/login/login.component';
import { MovieDetailsComponent } from './MovieDetails/movie-details/movie-details.component';
import { AuthGardService } from './Auth/auth-gard.guard';

const routes: Routes = [
  {path:"home",component:HomeComponent,
  canActivate:[AuthGardService],
  children:[
  {path:"",component:MovieDetailsComponent},
  {path:"movieDetails",component:MovieDetailsComponent},

  {path:"genres",component:IndexGenrasComponent},
  {path:"genres/create", component:CreategenrasComponent},
  {path:"genres/edit/:id",component:CreategenrasComponent},


  {path:"movie",component:IndexMoviesComponent},
  {path:"movie/create",component:CreatemoviesComponent},
  {path:"movie/edit/:id",component:CreatemoviesComponent},

  {path:"actors",component:IndexActorsComponent},
  {path:"actors/create",component:CreateactorsComponent},
  {path:"actors/edit/:id",component:CreateactorsComponent},

  {path:"theater",component:IndexTheaterComponent},
  {path:"theater/create",component:CreatetheaterComponent},
  {path:"theater/edit/:id",component:CreatetheaterComponent}
]},
  {path:"",component:LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
