import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Seconds pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'seconds'
})
@Injectable()
export class Seconds {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {

    let minutes = Math.floor(value/60);
    let hours = Math.floor(minutes/60);
    let seconds = Math.floor(value % 60);

    if(minutes == 0 && hours ==0)
      return seconds + " segundos";
    if(hours >0)
      return hours + " horas, " + minutes + " minutos y " + seconds + " segundos";
    if(hours ==0)
      return minutes + " minutos y " + seconds + " segundos";


  }
}
