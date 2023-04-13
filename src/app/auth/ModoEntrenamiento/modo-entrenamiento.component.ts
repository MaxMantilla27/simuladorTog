import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroTogExamenDTO } from 'src/app/Models/ExamenDTO';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-modo-entrenamiento',
  templateUrl: './modo-entrenamiento.component.html',
  styleUrls: ['./modo-entrenamiento.component.scss']
})
export class ModoEntrenamientoComponent implements OnInit {

  constructor(
    private _router: Router,
    private _ExamenService:ExamenService
  ) { }
  public migaPan = [
    {
      titulo: 'Simulador TOGAF',
      urlWeb: '/',
    },
    {
      titulo: 'Modo entrenamiento',
      urlWeb: '/ModoEntrenamiento',
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
  public Nivel1 = true;
  public Nivel2 = false;
  public Nivel =1;
  public IdExamen=0;
  public userForm :UntypedFormGroup=new UntypedFormGroup({
    NombreSimulacion: new UntypedFormControl('',Validators.required),
  })
  public DominioSeleccionado=0;
  public SimulacionesTotales=0;
  public SimulacionesInconclusas=0;
  public CantMEntrenamiento=0;
  public ListaEntrenamiento:any;
  public TiempoTotalEstudio=0;
  public Hora=0;
  public Minuto=0;
  public HoraMostrar='';
  public MinutoMostrar='';
  public SimulacionesIncompletas:any;
  public ContSimulacionesIncompletas=0;
  public SimulacionesCompletadas:any;
  public ContSimulacionesCompletadas=0;
  public PromedioDominio=0
  public ContEntrenamiento=0;
  public Promedio=0;
  public PromedioDominio2=0
  public ContEntrenamiento2=0;
  public Promedio2=0;
  public BotonResgistrar=false;
  public ResultadosPorDominio:any;
  public ResultadosPorDominioV2:any;
  public ResultadosPorDominioV2N1:Array<any>=[];
  public ResultadosPorDominioV2N2:Array<any>=[];
  // public PuntajePorcentaje=0;


  ngOnInit(): void {
    this.ListaExamenesIncompletos();
    this.ListaExamenesConcluidos();
    this.ListaExamenesPorModo();
    // this.ObtenerPromedioDominioPorModo()
    // this.ObtenerPromedioDominioPorModoV2();
  }
  RegistrarExamen(){
    if(this.userForm.valid && this.Nivel!=0){
      this.BotonResgistrar=true;
      this.RegistrarExamenEnvio.id=0,
      this.RegistrarExamenEnvio.idSimuladorTogModo=2,
      this.RegistrarExamenEnvio.idSimuladorTogNivel=this.Nivel,
      this.RegistrarExamenEnvio.nombreExamen=this.userForm.get('NombreSimulacion')?.value;
      this.RegistrarExamenEnvio.tiempo=0,
      this.RegistrarExamenEnvio.idSimuladorTogDominio=0

      console.log(this.RegistrarExamenEnvio)
      this._ExamenService.Registrar(this.RegistrarExamenEnvio).subscribe({
        next:(x)=>{
          this.IdExamen=x.id
          this._router.navigate(['/ModoEntrenamiento/EntrenamientoPregunta/'+this.IdExamen]);
        }
      })
    }
  }
  ListaExamenesPorModo(){
    this.TiempoTotalEstudio=0;
    this._ExamenService.ListaExamenesPorModo(2).subscribe({
      next:(x)=>{
        console.log(x)
        this.ListaEntrenamiento=x
        this.CantMEntrenamiento=x.length;
        this.ListaEntrenamiento.forEach((x:any)=>{
          this.TiempoTotalEstudio=this.TiempoTotalEstudio+x.tiempo;
          if(x.estadoExamen=="Finalizado")
          this.SimulacionesTotales=this.SimulacionesTotales+1;
        })
        this.SimulacionesInconclusas=this.CantMEntrenamiento-this.SimulacionesTotales;
      },
      complete: () => {
        this.Hora = Math.floor(this.TiempoTotalEstudio / 3600);
        this.HoraMostrar = (this.Hora < 10) ? '0' + this.Hora : this.Hora.toString();
        this.Minuto = Math.floor((this.TiempoTotalEstudio / 60) % 60);
        this.MinutoMostrar = (this.Minuto < 10) ? '0' + this.Minuto : this.Minuto.toString();
      }
    });
  }

  ListaExamenesIncompletos(){
    this._ExamenService.ListaExamenesIncompletos().subscribe({
      next:(x)=>{
        console.log(x)
        this.SimulacionesIncompletas=x;
        this.SimulacionesIncompletas.forEach((y:any)=>{
          if(y.idEstadoExamen!=3 && y.idSimuladorTogModo==2){
            this.ContSimulacionesIncompletas++;
          }
        })
      }
    })
  }
  ListaExamenesConcluidos(){
    this.ContEntrenamiento=0;
    this.PromedioDominio=0;
    this.Promedio=0;
    this.ContEntrenamiento2=0;
    this.PromedioDominio2=0;
    this.Promedio2=0;
    this._ExamenService.ListaExamenesConcluidos().subscribe({
      next:(x)=>{
        console.log(x)
        this.SimulacionesCompletadas=x;
        console.log(x.filter((x:any)=>x.idSimuladorTogModo==2))
        console.log(x.filter((x:any)=>x.idSimuladorTogModo==2 && x.idSimuladorTogNivel==1))
        console.log(x.filter((x:any)=>x.idSimuladorTogModo==2 && x.idSimuladorTogNivel==2))
        this.SimulacionesCompletadas.forEach((y:any)=>{
          if(y.idEstadoExamen==3 && y.idSimuladorTogModo==2 ){
            this.ContSimulacionesCompletadas++;
            if(y.idSimuladorTogNivel==1){
              this.ContEntrenamiento++;
              this.PromedioDominio+=y.desempenio;
            }
            if(y.idSimuladorTogNivel==2){
              this.ContEntrenamiento2++;
              this.PromedioDominio2+=y.desempenio;
            }
          }

        })
        this.Promedio=Math.floor(this.PromedioDominio/this.ContEntrenamiento);
        this.Promedio2=Math.floor(this.PromedioDominio2/this.ContEntrenamiento2);


      }
    })
  }
  ObtenerPromedioDominioPorModo(){
    this._ExamenService.ObtenerPromedioDominioPorModo(2).subscribe({
      next:(x)=>{
        this.ResultadosPorDominio=x
      }
    })
  }
  ObtenerPromedioDominioPorModoV2(){
    this._ExamenService.ObtenerPromedioDominioPorModoV2(2,3).subscribe({
      next:(x)=>{
        this.ResultadosPorDominioV2=x
        if(this.ResultadosPorDominioV2!=null){
          this.ResultadosPorDominioV2.forEach((rd:any) => {
            rd.Categoria=rd.leyenda.split('T')[1];
            if(rd.idSimuladorTogNivel==1){
              this.ResultadosPorDominioV2N1.push(rd)
            }else{
              this.ResultadosPorDominioV2N2.push(rd)
            }
          });
        }
        console.log(this.ResultadosPorDominioV2N1)
        console.log(this.ResultadosPorDominioV2N2)
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
}
