import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-search',
  templateUrl: './common-search.component.html',
  styleUrls: ['./common-search.component.css']
})
export class CommonSearchComponent implements OnInit {
@Output() searchBtn=new EventEmitter();

searchForm!:FormGroup;
constructor(){}
  ngOnInit(): void {
    this.searchForm=new FormGroup({
      Name:new FormControl(''),
      Id:new FormControl(0)
    })
  }

  SearchBtnClick(){
    this.searchBtn.emit(this.searchForm);
  }

}
