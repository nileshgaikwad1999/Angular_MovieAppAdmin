import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from '../Actor.service';
import { IActor } from 'src/app/Model/IActor';
import { GenresService } from 'src/app/Genres/genres.service';

@Component({
  selector: 'app-createactors',
  templateUrl: './createactors.component.html',
  styleUrls: ['./createactors.component.css'],
})
export class CreateactorsComponent implements OnInit {
  
  errorMessage="";
    
  constructor(
    private Route: Router,
    private actorService: ActorService,
    private activeRoute: ActivatedRoute,
    private genresService: GenresService
  ) {}
  
  ngOnInit(): void {
    this.formMaker();
    this.GetIdFromIndex();
    this.genresService.GetAll().subscribe((res) => {
      for (let d of res) {
        let data = { id: d.id, name: d.name };
        this.genresList.push(data);
      }
    });
  }
  
  genresList = [{ id: 0, name: '' }];
  BtnSaveTitle = 'Save Changes';
  Actors: IActor = {
    id: 0,
    dateOfBirth: new Date(),
    name: '',
    profilePicture: '',
    genresId: 0,
  };
  
  ActorForm!: FormGroup;
  
  formMaker() {
    this.ActorForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      id: new FormControl(0),
      dateOfBirth: new FormControl('', Validators.required),
      profilePicture: new FormControl('', Validators.required),
      genres: new FormControl('', Validators.required),
    });
  }

  selectedImage(image: any) {
    this.ActorForm.get('profilePicture')?.setValue(image);
  }

  get Name(): FormControl {
    return this.ActorForm.get('Name') as FormControl;
  }

  get dateOfBirth(): FormControl {
    return this.ActorForm.get('dateOfBirth') as FormControl;
  }

  get profilePicture(): FormControl {
    return this.ActorForm.get('profilePicture') as FormControl;
  }

  get genres(): FormControl {
    return this.ActorForm.get('genres') as FormControl;
  }
  
  getNameError() {
    if (this.Name.errors && this.Name.errors['required'] && this.Name.touched)
      return 'Name is required';
    else return null;
  }
  
  getgenresError() {
    if (
      this.genres.errors &&
      this.genres.errors['required'] &&
      this.genres.touched
    )
      return 'genres is required';
    else return null;
  }
  
  getdateOfBirthError() {
    if (
      this.dateOfBirth.errors &&
      this.dateOfBirth.errors['required'] &&
      this.dateOfBirth.touched
    )
      return 'DateOfBirth is required';
    else return null;
  }

  getProfilePictureError() {
    if (
      this.profilePicture.errors &&
      this.profilePicture.errors['required'] &&
      this.profilePicture.touched
    )
      return 'Profile picture is required';
    else return null;
  }
  
  GetIdFromIndex() {
    const id = this.activeRoute.snapshot.params['id'];
    this.Actors.id = id;
    if (
      this.Actors.id != null &&
      this.Actors.id != 0 &&
      this.Actors.id != undefined
    ) {
      this.viewEdit(id);
    }
  }
  
  viewEdit(id: number) {
    this.BtnSaveTitle = 'Update Changes';

    this.actorService.Get(id).subscribe(
      (res) => {
        this.Actors = res;
        this.ActorForm.setValue({
          Name: res.name,
          dateOfBirth: res.dateOfBirth,
          profilePicture: res.profilePicture,
          id: res.id,
          genres: res.genresId,
        });
      },
      (error) => {
       this.errorMessage=`not able to load Actor data due to - ${error}`
      }
    );
  }
  
  SaveChanges() {
    let actors: IActor = {
      name: this.ActorForm.value.Name,
      dateOfBirth: this.ActorForm.value.dateOfBirth,
      profilePicture: this.ActorForm.value.profilePicture.name,
      id: this.Actors.id,
      genresId: this.ActorForm.value.genres,
    };
    if (
      this.Actors.id != undefined &&
      this.Actors.id != null &&
      this.Actors.id != 0
    ) {
      this.actorService.updateActor(actors).subscribe(
        (res) => {
          this.Route.navigate(['home/actors']);
        },
        (error) => {
          this.errorMessage="record not updated"

          // alert(`Data not Updated ${error}`);
        }
      );
    } else {
      this.actorService.addActor(actors).subscribe(
        (res) => {
          this.Route.navigate(['home/actors']);
        },
        (error) => {
          this.errorMessage="record not saved"

          //alert(`Record not saved, ${error}`);
        }
      );
    }
  }
  
  DeleteActors() {
    if (confirm('are you sure to delete !')) {
      this.actorService.deleteActor(this.Actors).subscribe(
        (res) => {
          this.Route.navigate(['home/actors']);
        },
        (error) => {
        this.errorMessage="record not deleted"
        }
      );
    }
  }

  CancelClick() {
    this.Route.navigate(['home/actors']);
  }
}
