import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription!:Subscription

  constructor() { 
    //this.observer().pipe(retry(2)).subscribe(
    this.subscription=this.observer().subscribe(
      valor=>console.log('Valor',valor),
      error=>console.error('Intentos agotados',error),
      ()=>console.log('El observador terminó')
      )
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    console.log('se cerrara la pagina')
    this.subscription.unsubscribe()
  }

  observer():Observable<any>{
    return new Observable((observer:Subscriber<any>)=>{
      let contador = 0
      let interval = setInterval(()=>{
        contador += 1
        let lista = {
          valor:contador
        }
        observer.next(lista)
        // if(contador === 3){
        //   clearInterval(interval)
        //   observer.complete()
        // }
        // if(contador === 2){
        //   clearInterval(interval)
        //   observer.error('Error encontrado')
        // }
      }, 1000)
    }).pipe(map(
      res=>res.valor
    ), filter((value, index)=>{
      if((value%2)==1){
        return true
      }
      else{
        return false
      }
    }))
  }

}
