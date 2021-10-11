import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input() valor:number=50
  @Input() leyenda:string='Leyenda'

  @Output() actualizaValor:EventEmitter<number> = new EventEmitter()

  @ViewChild('txtProgress') txtProgress!: ElementRef

  constructor() { 
    console.log(this.valor)
  }

  ngOnInit(): void {
    console.log(this.valor)
  }

  cambiaValor(value:number){
    this.valor=this.valor+value
    if(this.valor>=100)
    {
      this.valor=100
    }
    else if(this.valor<=0){
      this.valor=0
    }
    this.actualizaValor.emit(this.valor)

    this.txtProgress.nativeElement.focus()
  }

  onChanges(newValue:number){
    //let elemHTML:any=document.getElementsByName("progreso")[0]
    if(newValue>=100)
      this.valor=100;
    else if(newValue<=0)
      this.valor=0;
    else
      this.valor=newValue;
    //elemHTML.value=this.valor
    this.txtProgress.nativeElement.value=this.valor;
    
    this.actualizaValor.emit(this.valor);
  }
}
