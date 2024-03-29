import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }
  @Input() TotalPuntos=0;
  @Input() Puntos=0;
  public tresDigitos=false;
  public dosDigitos=false;
  public unDigito=false;
  //Dona
  public doughnutChartOptions: ChartConfiguration['options'] = {};
  public doughnutChartData: ChartData<'doughnut',number[]> = {
    labels:["",""],
    datasets: [{
      data: [ this.Puntos,this.TotalPuntos-this.Puntos],
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
  };
  public doughnutChartType: ChartType = 'doughnut';
  ngOnChanges(changes: SimpleChanges): void {
    if(this.Puntos>=0){
      this.Puntos=Math.floor(this.Puntos)
      if(this.Puntos>=100){
        this.tresDigitos=true;
      }
      else if(this.Puntos<=99 && this.Puntos>=10){
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
      plugins: {
      legend: {
        display: false,
        },
      datalabels: {
        formatter: (value, ctx) => {
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
        data: [ this.Puntos, (this.TotalPuntos>this.Puntos?(this.TotalPuntos-this.Puntos):0)],
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
      plugins: {
      legend: {
        display: false,
        },
      datalabels: {
        formatter: (value, ctx) => {
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

