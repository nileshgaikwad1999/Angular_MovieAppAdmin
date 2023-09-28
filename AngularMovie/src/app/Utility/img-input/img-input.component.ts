import { Component, EventEmitter, Output } from '@angular/core';
import { toconvert } from '../helpr';

@Component({
  selector: 'app-img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.css']
})
export class ImgInputComponent {
  @Output() imageEmit=new EventEmitter<File>();
  imageConvert!:string
  change(event:any){
if(event.target.files.length>0){
  const file:File=event.target.files[0];
  toconvert(file).then((val:any)=>this.imageConvert=val);
  this.imageEmit.emit(file);
}
  }
}
