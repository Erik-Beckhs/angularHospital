import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progreso1:number=20
  progreso2:number=30

  constructor() { }

  ngOnInit(): void {
  }

  obtValor(valor:number){
    return {
      'bg-danger' : valor>50
    }
  }
}
