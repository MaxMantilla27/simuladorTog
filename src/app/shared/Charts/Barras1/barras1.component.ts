import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras1',
  templateUrl: './barras1.component.html',
  styleUrls: ['./barras1.component.scss']
})
export class Barras1Component implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor() { }

  @Input() ResultadoDominio1=0;
  @Input() ResultadoDominio2=0;
  @Input() ResultadoDominio3=0;
  @Input() ResultadoDominio4=0;
  @Input() ResultadoDominio5=0;
  @Input() ResultadoDominio6=0;
  @Input() ResultadoDominio7=0;
  @Input() ResultadoDominio8=0;
  @Input() ResultadoDominio9=0;
  @Input() ResultadoDominio10=0;
  @Input() ResultadoDominio11=0;
  
  
  public barChartOptions: ChartConfiguration['options'] = {};
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DatalabelsPlugin];
  // Nivel1
  public barChartDataNivel1: ChartData<'bar'> = {
    labels: [ 'P1', 'P2', 'P3', 'P4', 'P5' ,'P6' ,'P7', 'P8', 'P9', 'P10', 'P11'],
    datasets: [
      { data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        label: 'Puntaje',
        backgroundColor: '#00C356',
        hoverBackgroundColor:[
          '#00C356',
        ],
        hoverBorderColor:[
          '#00C356',
        ],
        borderColor:[
          '#00C356',
        ]
      }
    ]
  };
  ngOnChanges(changes: SimpleChanges): void {
    if(this.ResultadoDominio1!=0 ||
      this.ResultadoDominio2!=0 ||
      this.ResultadoDominio3!=0 ||
      this.ResultadoDominio4!=0 ||
      this.ResultadoDominio5!=0 ||
      this.ResultadoDominio6!=0 ||
      this.ResultadoDominio7!=0 ||
      this.ResultadoDominio8!=0 ||
      this.ResultadoDominio9!=0 ||
      this.ResultadoDominio10!=0 ||
      this.ResultadoDominio11!=0){
      this.ValoresChart()
    }
    if(this.ResultadoDominio1==0 &&
      this.ResultadoDominio2==0 &&
      this.ResultadoDominio3==0 &&
      this.ResultadoDominio4==0 &&
      this.ResultadoDominio5==0 &&
      this.ResultadoDominio6==0 &&
      this.ResultadoDominio7==0 &&
      this.ResultadoDominio8==0 &&
      this.ResultadoDominio9==0 &&
      this.ResultadoDominio10==0 &&
      this.ResultadoDominio11==0 ){
      this.ValoresChartInicio()
    }
  }
  ngOnInit(): void {

  }
  ValoresChart(){
    //Opciones
    this.barChartOptions={
      responsive: true,
      scales: {
        x: {},
        y: {
          min: 0
        }
      },
      plugins: {
        legend: {
          display: true,
        },

      }
    }
    // Datos Nivel1
    this.barChartDataNivel1={
      labels: [ 'P1', 'P2', 'P3', 'P4', 'P5','P6', 'P7', 'P8', 'P9', 'P10', 'P11'],
      datasets: [
        { data: [ this.ResultadoDominio1,
          this.ResultadoDominio2,
          this.ResultadoDominio3,
          this.ResultadoDominio4,
          this.ResultadoDominio5,
          this.ResultadoDominio6,
          this.ResultadoDominio7,
          this.ResultadoDominio8,
          this.ResultadoDominio9,
          this.ResultadoDominio10,
          this.ResultadoDominio11,
          ],
          label: 'Puntaje (%)',
          backgroundColor: '#00C356',
          hoverBackgroundColor:[
            '#00C356',
          ],
          hoverBorderColor:[
            '#00C356',
          ],
          borderColor:[
            '#00C356',
          ]}
      ]
    }
  }

  ValoresChartInicio(){
    //Opciones
    this.barChartOptions={
      responsive: true,
      scales: {
        x: {},
        y: {
          min: 0
        }
      },
      plugins: {
        legend: {
          display: true,
        },
        datalabels: {
          anchor: 'end',
          align: 'end'
        }
      }
    }
      //Datos Nivel1
      this.barChartDataNivel1={
        labels: [ 'P1', 'P2', 'P3', 'P4', 'P5','P6', 'P7', 'P8', 'P9', 'P10','P11'],
        datasets: [
          { data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            label: 'Puntaje',
            backgroundColor: '#00C356',
            hoverBackgroundColor:[
              '#00C356',
            ],
            hoverBorderColor:[
              '#00C356',
            ],
            borderColor:[
              '#00C356',
            ]}
        ]
      }
  }

}