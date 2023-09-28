import { Component, OnInit } from '@angular/core';
import{ActorService} from '../Actor.service'
import { IActor } from 'src/app/Model/IActor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})
export class IndexActorsComponent implements OnInit {
actors:IActor[]=[];
errorMessage="";

constructor(private ActorService:ActorService,private route:Router){}
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.ActorService.GetAll().subscribe(
    (res)=>this.actors=res,
    (error)=>{console.log(error);
      this.errorMessage=error;
    })
  }
  
  editActorClick(id:number)
  {
    this.route.navigate(['home/actors/edit',id])
  }
}
