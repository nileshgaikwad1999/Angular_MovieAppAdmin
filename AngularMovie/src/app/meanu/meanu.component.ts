import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meanu',
  templateUrl: './meanu.component.html',
  styleUrls: ['./meanu.component.css']
})
export class MeanuComponent implements OnInit  {

loginKey:any;
  
ngOnInit(): void {
  this.loginKey=localStorage.getItem("loginKey");

}

 constructor(private Route:Router){
 }

 logout(){
  localStorage.clear();
  this.loginKey=null;
  this.Route.navigate([''])
 }


  
}
