import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dona-puntos2',
  templateUrl: './dona-puntos2.component.html',
  styleUrls: ['./dona-puntos2.component.scss']
})
export class DonaPuntos2Component implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }
  @Input() Puntos=0;
  @Input() width='165px';

  //Dona
  public doughnutChartOptions: any = {};
  public doughnutChartData: ChartData<'doughnut',number[]> = {
    labels:["",""],
    datasets: [{
      data: [ this.Puntos,40-this.Puntos],
      backgroundColor: [
          '#00C356',
          '#E8E8E5'
      ],
      hoverBackgroundColor:[
        '#00C356',
        '#E8E8E5'
      ],
      hoverBorderColor:[
        '#00C356',
        '#E8E8E5'
      ]
    }],

  };
  public doughnutChartType: ChartType = 'doughnut';
  public dosDigitos=false;
  public unDigito=false;
  ngOnChanges(changes: SimpleChanges): void {
    if(this.Puntos>=0){
      this.Puntos=Math.floor(this.Puntos)
      if(this.Puntos<=99 && this.Puntos>=10){
        this.dosDigitos=true;
      }
      else{
        this.unDigito=true;
      }
      this.ValoresChart()
    }
    else{
      this.ValoresChartInicio()
    }
  }

  ngOnInit(): void {
  }
  ValoresChart(){
    //Opciones
    this.doughnutChartOptions={
      responsive: true,
      cutout: '70%',
      plugins: {
      legend: {
        display: false,
        },
      datalabels: {
        formatter: (value:any, ctx:any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      }
    }
    //Datos
    this.doughnutChartData={
      labels:["",""],
      datasets: [{
        data: [ this.Puntos,40-this.Puntos],
        backgroundColor: [
          '#00C356',
          '#E8E8E5'
        ],
        hoverBackgroundColor:[
          '#00C356',
          '#E8E8E5'
        ],
        hoverBorderColor:[
          '#00C356',
          '#E8E8E5'
        ]
      }]
    }
  }

  ValoresChartInicio(){
    //Opciones
    this.doughnutChartOptions={
      responsive: true,
      cutout: '70%',
      plugins: {
      legend: {
        display: false,
        },
      datalabels: {
        formatter: (value:any, ctx:any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      }
    }
    //Datos
    this.doughnutChartData={
      labels:["",""],
      datasets: [{
        data: [ 0,100],
        backgroundColor: [
          '#00C356',
          '#E8E8E5'
        ],
        hoverBackgroundColor:[
          '#00C356',
          '#E8E8E5'
        ],
        hoverBorderColor:[
          '#00C356',
          '#E8E8E5'
        ]
      }]
    }
  }
}
