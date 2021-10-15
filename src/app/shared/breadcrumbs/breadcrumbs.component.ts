import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  titulo!:string

  constructor(
    private router:Router,
    private title:Title
    ) { 
    this.getDataRoute()
    .subscribe(
      res=>{
        this.titulo=res.titulo
        this.title.setTitle(this.titulo)
      }
    )

   
    }

  ngOnInit(): void {
  }

  getDataRoute(){
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento:any) => evento.snapshot.firstChild===null),
      map((evento:any)=>evento.snapshot.data)
    )
  }

}
