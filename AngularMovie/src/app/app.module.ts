import { NgModule } from '@angular/core';
import { IndexGenrasComponent } from './Genres/index-genras/index-genras.component';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MeanuComponent } from './meanu/meanu.component';
import { CreategenrasComponent } from './Genres/creategenras/creategenras.component';
import { CreateactorsComponent } from './Actors/createactors/createactors.component';
import { IndexActorsComponent } from './Actors/index-actors/index-actors.component';
import { IndexTheaterComponent } from './Theater/index-theater/index-theater.component';
import { CreatetheaterComponent } from './Theater/createtheater/createtheater.component';
import { CreatemoviesComponent } from './Movies/createmovies/createmovies.component';
import { IndexMoviesComponent } from './Movies/index-movies/index-movies.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonSearchComponent } from './search/common-search/common-search.component';
import { ImgInputComponent } from './Utility/img-input/img-input.component';
import { LoginComponent } from './Auth/login/login.component';
import { MovieDetailsComponent } from './MovieDetails/movie-details/movie-details.component';
import { AuthInterceptor } from './Utility/AuthInterceptor';

@NgModule({
  declarations: [AppComponent, IndexGenrasComponent, MeanuComponent, CreategenrasComponent, CreateactorsComponent, IndexActorsComponent, IndexTheaterComponent, CreatetheaterComponent, CreatemoviesComponent, IndexMoviesComponent, HomeComponent, CommonSearchComponent, ImgInputComponent, LoginComponent, MovieDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
