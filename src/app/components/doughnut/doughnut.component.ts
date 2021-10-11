import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  @Input() leyenda!:any
  @Input() data!:any[]
  @Input() label!:any[]
  @Input() type!:any

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor() { 
    
  }

  ngOnInit(): void {
    //console.log(this.data)
    this.doughnutChartLabels = this.label;
    this.doughnutChartData = this.data;
    this.doughnutChartType = this.type;
  }

}
