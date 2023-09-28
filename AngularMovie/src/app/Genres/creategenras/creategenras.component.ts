import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenrasDto } from '../genres.model';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-creategenras',
  templateUrl: './creategenras.component.html',
  styleUrls: ['./creategenras.component.css'],
})
export class CreategenrasComponent implements OnInit {
  errorMessage="";
  genres: GenrasDto = {
    id: 0,
    name: '',
  };
  SubmitBtnTitle:string="Save Changes";
  genresForm!: FormGroup;
  constructor(
    private Route: Router,
    private fb: FormBuilder,
    private genresService: GenresService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.FormMaker();
    this.GetIdFromRoute();
  }

  FormMaker() {
    this.genresForm = this.fb.group({
      Name: ['', [Validators.required, NameCheck]],
    });
  }

  GetIdFromRoute() {
    const id = this.activeRoute.snapshot.params['id'];
    this.genres.id = id;
    if (this.genres.id != null && this.genres.id != 0&&this.genres.id!=undefined){
    this.ViewEdit(this.genres.id)
    }
  }

  SaveChanges() {
    let genres: GenrasDto = {
      name: this.genresForm.value.Name,
      id: this.genres.id,
    };
    if (this.genres.id == null || this.genres.id == 0) {
      this.genresService.addGenres(genres).subscribe((res) => {
        this.Route.navigate(['home/genres']);
      },
      
      (error)=>{
        this.errorMessage=`${error}`;
      });
    } else {
    
      this.genresService.updateGenres(genres).subscribe((res) => {
        this.Route.navigate(['home/genres']);
      },
      (error)=>{
        this.errorMessage=`${error}`;
      }
      );
    }
  }

  ViewEdit(id: number) {
    this.SubmitBtnTitle="Update Changes"
    this.genresService.Get(id).subscribe((res) => {
      this.genresForm.patchValue({
        Name: res.name,
      });
      this.genres.id = res.id;
      this.genres.name=res.name;
    });
  }

  DeleteGenres(){
    if(confirm("are you sure to delete "+this.genres.name)){
    this.genresService.deleteGenres(this.genres).subscribe((res) => {
      this.Route.navigate(['home/genres']);
    },
    (error)=>{
      this.errorMessage=`${error}`;
    }
    );
  }
  }
  CancelClick(){
    this.Route.navigate(['home/genres']);
  }
}

export function NameCheck(control: AbstractControl): ValidationErrors | null {
  let name = control.value.match(/\d+/g);
  if (name == null) {
    return null;
  } else {
    return { 'Name-check': true };
  }
}
