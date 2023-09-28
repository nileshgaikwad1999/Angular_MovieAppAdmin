import { ImovieTheaterDetails } from "./movieTheaterDetails";

export interface IMoviesTheater{

    id:number;
    name:string;
    location:string;
    movieTheaterDetails:ImovieTheaterDetails[]
}