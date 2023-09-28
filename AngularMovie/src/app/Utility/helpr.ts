import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export function toconvert(file:File){
    return new Promise((resolve,reject)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>resolve(reader.result);
        reader.onerror=(err)=>reject(err);
    })
}
export function handleError(httpError: HttpErrorResponse) {
    let errorMessage="";
    if (httpError.status === 0) {
      errorMessage=`client return code${httpError.status},body was:`,httpError.error;
      
    } else {
      errorMessage=`backend return code${httpError.status},body was:`,httpError.error;
    }
    errorMessage+="something bad happened; please try again later";
    return throwError(
      () => new Error(errorMessage)
    );
  }