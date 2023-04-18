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
  public ExamenResultado2:any;
  public Examen:any;
  public Examen2:any;
  public NombreExamen='';
  public NombreExamen2='';
  public IdExamen=0
  public TiempoTotalEstudio=0;
  public TiempoTotalEstudio2=0;
  public Minuto=0;
  public MinutoMostrar='';
  public MinutoPromedio=0;
  public MinutoPromedioMostrar='';
  public SegundoPromedio=0;
  public SegundoPromedioMostrar='';
  public Minuto2=0;
  public MinutoMostrar2='';
  public MinutoPromedio2=0;
  public MinutoPromedioMostrar2='';
  public SegundoPromedio2=0;
  public SegundoPromedioMostrar2='';
  public TiempoPromedio=0;
  public TiempoPromedio2=0;
  public Percentil=0;
  public Desempenio=0;
  public Percentil2=0;
  public Desempenio2=0;
  public Nivel1 = true;
  public Nivel2 = false;
  public Nivel =1;
  public CantRespuestasCorrectas=0;
  public CantRespuestasIncorrectas=0;
  public CantRespuestasCorrectas2=0;
  public CantRespuestasIncorrectas2=0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let auxParams = params["IdExamen"].split('-')
      this.IdExamen = auxParams[auxParams.length -1];
    })
    this.ObtenerExamenReporteResultadosPorId2()
    this.ObtenerRespuestasCorrectas2()
  }
  ObtenerExamenReporteResultadosPorId2(){
    this._ExamenService.ObtenerExamenReporteResultadosPorId2(this.IdExamen).subscribe({
      next:(x)=>{
        this.ExamenResultado=x.dominioResultado;
        this.Examen=x.examen;
        this.NombreExamen=x.examen.nombreExamen;
        this.TiempoTotalEstudio=x.examen.tiempo;
        this.TiempoPromedio=Math.floor(x.examen.tiempo/x.examen.preguntasRespondidas)
        this.Percentil=Math.floor(x.examen.mayor-x.examen.percentil)
        this.Desempenio=Math.floor(this.Examen.desempenio)

        if(x.dominioResultadoNivel2!=null){
          this.ExamenResultado2=x.dominioResultadoNivel2;
        }
        if(x.examenNivel2!=null){
          this.Examen2=x.examenNivel2;
          this.NombreExamen2=x.examenNivel2.nombreExamen;
          this.TiempoTotalEstudio2=x.examenNivel2.tiempo;
          this.TiempoPromedio2=Math.floor(x.examenNivel2.tiempo/x.examenNivel2.preguntasRespondidas)
          this.Percentil2=Math.floor(x.examenNivel2.mayor-x.examenNivel2.percentil)
          this.Desempenio2=Math.floor(this.Examen2.desempenio)
        }


      },
      complete:()=>{
        this.Minuto = Math.floor(this.TiempoTotalEstudio / 60);
        this.MinutoMostrar = (this.Minuto < 10) ? '0' + this.Minuto : this.Minuto.toString();
        this.MinutoPromedio = Math.floor((this.TiempoPromedio / 60) % 60);
        this.MinutoPromedioMostrar = (this.MinutoPromedio < 10) ? '0' + this.MinutoPromedio : this.MinutoPromedio.toString();
        this.SegundoPromedio = this.TiempoPromedio % 60;
        this.SegundoPromedioMostrar = (this.SegundoPromedio < 10) ? '0' + this.SegundoPromedio : this.SegundoPromedio.toString();

        if(this.Examen2!=undefined){
          this.Minuto2 = Math.floor(this.TiempoTotalEstudio2 / 60);
          this.MinutoMostrar2 = (this.Minuto2 < 10) ? '0' + this.Minuto2 : this.Minuto2.toString();
          this.MinutoPromedio2 = Math.floor((this.TiempoPromedio2 / 60) % 60);
          this.MinutoPromedioMostrar2 = (this.MinutoPromedio2 < 10) ? '0' + this.MinutoPromedio2 : this.MinutoPromedio2.toString();
          this.SegundoPromedio2 = this.TiempoPromedio2 % 60;
          this.SegundoPromedioMostrar2 = (this.SegundoPromedio2 < 10) ? '0' + this.SegundoPromedio2 : this.SegundoPromedio2.toString();
        }
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
  ObtenerRespuestasCorrectas2()
  {
    this._ExamenService.ObtenerRespuestasCorrectas2(this.IdExamen).subscribe({
      next:(x)=>{
        this.CantRespuestasCorrectas=x.respuestasCorrectas;
        this.CantRespuestasIncorrectas=x.respuestasIncorrectas;
        this.CantRespuestasIncorrectas2=x.respuestasIncorrectasNivel2;
        this.CantRespuestasCorrectas2=x.respuestasCorrectasNivel2;

      },
      complete:()=>{
      }
    })

  }


}
