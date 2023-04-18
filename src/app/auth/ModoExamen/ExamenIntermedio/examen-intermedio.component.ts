import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';
import { ExamenIntentoDTO, RegistroTogExamenDTO } from 'src/app/Models/ExamenDTO';

@Component({
  selector: 'app-examen-intermedio',
  templateUrl: './examen-intermedio.component.html',
  styleUrls: ['./examen-intermedio.component.scss']
})
export class ExamenIntermedioComponent implements OnInit {

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
  public RegistrarExamenEnvio:RegistroTogExamenDTO={
    id:0,
    idSimuladorTogNivel:0,
    idSimuladorTogModo:0,
    nombreExamen:'',
    tiempo:0,
    idSimuladorTogDominio:0
  }
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
  public NumeroIntento=0;
  public IdExamenNivel2=0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let auxParams = params["IdExamen"].split('-')
      this.IdExamen = auxParams[auxParams.length -1];

    })
    this.ObtenerExamenReporteResultadosPorId()



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
        this.NumeroIntento=Math.floor(this.Examen.numeroIntento)
        this.ObtenerIdExamenNivel2();



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
  ObtenerIdExamenNivel2()
  {
    this._ExamenService.ObtenerIdExamenNivel2(this.NumeroIntento).subscribe({
      next:(x)=>{
        this.IdExamenNivel2=x;
      },
      complete:()=>{
      }
    })

  }


}
