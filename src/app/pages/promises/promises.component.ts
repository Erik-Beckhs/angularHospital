import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      valor=>console.log('Amonooss', valor)
      )
      .catch(
        error=>console.log('Ocurrio un error', error)
      )
   }

   contarTres():Promise<boolean>{
    return new Promise ((resolve, reject)=>{
      let contador=0
      let intervalo = setInterval(()=>{
        contador+=1
        console.log(contador)
        if(contador==3){
          reject(false)
          clearInterval(intervalo)
        }
      }, 1000)
    })
  }
   

  ngOnInit(): void {
  }

}
