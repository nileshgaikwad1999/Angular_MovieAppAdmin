import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { GenrasDto } from '../genres.model';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index-genras',
  templateUrl: './index-genras.component.html',
  styleUrls: ['./index-genras.component.css'],
})
export class IndexGenrasComponent implements OnInit {
  errorMessage="";
  GenrasList: GenrasDto[] = [];
  constructor(private genrasService: GenresService, private route: Router) {}

  ngOnInit(): void {
   this.GetGenres();
  }
  GetGenres(){
    this.genrasService.GetAll().subscribe((res: GenrasDto[]) => {
      this.GenrasList = res;
    },
    (error)=>{this.errorMessage=error});
  }
  btnSearchClick(from: FormGroup) {
    debugger;
    let searchName = from.value.Name;
    this.GenrasList = this.GenrasList.filter((e) => e.name == searchName);
    if(this.GenrasList.length<=0){
      this.GetGenres();
    }
  }
  editGenresClick(id: number) {
    this.route.navigate(['home/genres/edit', id]);
  }
}
