import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-estudio-respuesta-pregunta',
  templateUrl: './estudio-respuesta-pregunta.component.html',
  styleUrls: ['./estudio-respuesta-pregunta.component.scss']
})
export class EstudioRespuestaPreguntaComponent implements OnInit {

  constructor(
    private _router: Router,
    private _ExamenService:ExamenService,
    private activatedRoute: ActivatedRoute,
  ) { }
  public migaPan = [
    {
      titulo: 'Simulador Tog',
      urlWeb: '/',
    },
    {
      titulo: 'Modo estudio',
      urlWeb: '/ModoEstudio',
    },
  ];
  public IdExamen=0
  public DatosExamen:any;
  public ListaPreguntas:any;
  public CantidadTotalPreguntas=0;
  public ContadorPreguntaActual=0;
  public ContadorPregunta=0;
  public NombreDominio=''
  public NombreExamen=''
  public IdNivel=0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let auxParams = params["IdExamen"].split('-')
      this.IdExamen = auxParams[auxParams.length -1];
      let auxParamsNivel = params["IdNivel"].split('-')
      this.IdNivel = auxParamsNivel[auxParamsNivel.length -1];
    })

    if(this.IdNivel==1)
    {
      this.ObtenerRespuestaExamenDetallePreguntaPorId()
    }
    else if(this.IdNivel==2)
    {
    this.ObtenerRespuestaExamenDetallePreguntaPorIdNivel2()
    }
  }
  ObtenerRespuestaExamenDetallePreguntaPorId(){
    this._ExamenService.ObtenerRespuestaExamenDetallePreguntaPorId(this.IdExamen).subscribe({
      next:(x)=>{
        this.DatosExamen=x;
        this.ListaPreguntas=x.pregunta
        this.CantidadTotalPreguntas=x.length;
        this.ContadorPreguntaActual=this.ContadorPregunta+1;
        this.NombreDominio=x[0].dominioNombre;
        this.NombreExamen=x[0].nombreExamen;
      }
    })
  }
  ObtenerRespuestaExamenDetallePreguntaPorIdNivel2(){
    this._ExamenService.ObtenerRespuestaExamenDetallePreguntaPorIdNivel2(this.IdExamen).subscribe({
      next:(x)=>{
        this.DatosExamen=x;
        this.ListaPreguntas=x.pregunta
        this.CantidadTotalPreguntas=x.length;
        this.ContadorPreguntaActual=this.ContadorPregunta+1;
        this.NombreDominio=x[0].dominioNombre;
        this.NombreExamen=x[0].nombreExamen;
      }
    })
  }
  RegresarMenu(){
    this._router.navigate(['/ModoEstudio']);
  }
  SiguientePregunta(){
    this.ContadorPreguntaActual=this.ContadorPreguntaActual+1;
    this.ContadorPregunta=this.ContadorPregunta+1;
    if (this.ContadorPreguntaActual>this.CantidadTotalPreguntas){
      this._router.navigate(['/ModoEstudio/EstudioReporte/'+this.IdExamen]);
    }
  }

}
