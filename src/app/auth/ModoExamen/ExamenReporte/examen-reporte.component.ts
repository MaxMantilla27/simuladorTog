import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-examen-reporte',
  templateUrl: './examen-reporte.component.html',
  styleUrls: ['./examen-reporte.component.scss']
})
export class ExamenReporteComponent implements OnInit {

  constructor(
    private _ExamenService: ExamenService,
    private activatedRoute: ActivatedRoute,
  ) { }
  public migaPan = [
    {
      titulo: 'Simulador TOGAF',
      urlWeb: '/',
    },
    {
      titulo: 'Modo examen',
      urlWeb: '/ModoExamen',
    },
  ];
  public ExamenResultado:any;
  public Examen:any;
  public NombreExamen='';
  public IdExamen=0
  public TiempoTotalEstudio=0;
  public Minuto=0;
  public MinutoMostrar='';
  public MinutoPromedio=0;
  public MinutoPromedioMostrar='';
  public SegundoPromedio=0;
  public SegundoPromedioMostrar='';
  public TiempoPromedio=0;
  public Percentil=0;
  public Desempenio=0;
  public Nivel1 = true;
  public Nivel2 = false;
  public Nivel =1;
  public CantRespuestasCorrectas=0;
  public CantRespuestasIncorrectas=0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let auxParams = params["IdExamen"].split('-')
      this.IdExamen = auxParams[auxParams.length -1];
    })
    this.ObtenerExamenReporteResultadosPorId()
    this.ObtenerRespuestasCorrectas()
  }
  ObtenerExamenReporteResultadosPorId(){
    this._ExamenService.ObtenerExamenReporteResultadosPorId(this.IdExamen).subscribe({
      next:(x)=>{
        this.ExamenResultado=x.dominioResultado;
        this.Examen=x.examen;
        this.NombreExamen=x.examen.nombreExamen;
        this.TiempoTotalEstudio=x.examen.tiempo;
        this.TiempoPromedio=Math.floor(x.examen.tiempo/x.examen.preguntasRespondidas)
        this.Percentil=Math.floor(x.examen.mayor-x.examen.percentil)
        this.Desempenio=Math.floor(this.Examen.desempenio)


      },
      complete:()=>{
        this.Minuto = Math.floor(this.TiempoTotalEstudio / 60);
        this.MinutoMostrar = (this.Minuto < 10) ? '0' + this.Minuto : this.Minuto.toString();
        this.MinutoPromedio = Math.floor((this.TiempoPromedio / 60) % 60);
        this.MinutoPromedioMostrar = (this.MinutoPromedio < 10) ? '0' + this.MinutoPromedio : this.MinutoPromedio.toString();
        this.SegundoPromedio = this.TiempoPromedio % 60;
        this.SegundoPromedioMostrar = (this.SegundoPromedio < 10) ? '0' + this.SegundoPromedio : this.SegundoPromedio.toString();
      }
    })
  }
  SeleccionarNivel1(){
    this.Nivel1=true;
    this.Nivel2=false;
    this.Nivel=1
  }
  SeleccionarNivel2(){
    this.Nivel1=false;
    this.Nivel2=true;
    this.Nivel=2
  }
  ObtenerRespuestasCorrectas()
  {
    this._ExamenService.ObtenerRespuestasCorrectas(this.IdExamen).subscribe({
      next:(x)=>{
        console.log(x)
        this.CantRespuestasCorrectas=x.respuestasCorrectas;
        console.log(this.CantRespuestasCorrectas)
        this.CantRespuestasIncorrectas=x.respuestasIncorrectas;
        console.log(this.CantRespuestasIncorrectas)

      },
      complete:()=>{
      }
    })
  
  }


}