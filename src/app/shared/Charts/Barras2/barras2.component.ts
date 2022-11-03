import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras2',
  templateUrl: './barras2.component.html',
  styleUrls: ['./barras2.component.scss']
})
export class Barras2Component implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor() { }
  @Input() ResultadoDominio12=0;
  @Input() ResultadoDominio13=0;
  @Input() ResultadoDominio14=0;
  @Input() ResultadoDominio15=0;
  @Input() ResultadoDominio16=0;
  @Input() ResultadoDominio17=0;
  @Input() ResultadoDominio18=0;
  @Input() ResultadoDominio19=0;
  
  
  public barChartOptions: ChartConfiguration['options'] = {};
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DatalabelsPlugin];
  // Nivel2
  public barChartDataNivel2: ChartData<'bar'> = {
    labels: [ 'P1', 'P2', 'P3', 'P4', 'P5' ,'P6' ,'P7', 'P8'],
    datasets: [
      { data: [ 0, 0, 0, 0, 0, 0, 0, 0],
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
    if(
      this.ResultadoDominio12!=0 ||
      this.ResultadoDominio13!=0 ||
      this.ResultadoDominio14!=0 ||
      this.ResultadoDominio15!=0 ||
      this.ResultadoDominio16!=0 ||
      this.ResultadoDominio17!=0 ||
      this.ResultadoDominio18!=0 ||
      this.ResultadoDominio19!=0 ){
      this.ValoresChart()
    }
    if(
      this.ResultadoDominio12==0 &&
      this.ResultadoDominio13==0 &&
      this.ResultadoDominio14==0 &&
      this.ResultadoDominio15==0 &&
      this.ResultadoDominio16==0 &&
      this.ResultadoDominio17==0 &&
      this.ResultadoDominio18==0 &&
      this.ResultadoDominio19==0 ){
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
    // Datos Nivel2
    this.barChartDataNivel2={
      labels: [ 'P1', 'P2', 'P3', 'P4', 'P5','P6', 'P7', 'P8'],
      datasets: [
        { data: [
          this.ResultadoDominio12,
          this.ResultadoDominio13,
          this.ResultadoDominio14,
          this.ResultadoDominio15,
          this.ResultadoDominio16,
          this.ResultadoDominio17,
          this.ResultadoDominio18,
          this.ResultadoDominio19,
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
        //Datos Nivel2
    this.barChartDataNivel2={
      labels: [ 'P1', 'P2', 'P3', 'P4', 'P5','P6', 'P7', 'P8'],
      datasets: [
        { data: [ 0, 0, 0, 0, 0, 0, 0, 0],
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
