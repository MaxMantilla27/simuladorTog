import { RegistroTogExamenDetalleDTO } from "./ExamenDetalleDTO";

export interface RegistroTogExamenDTO{
  id:number,
  idSimuladorTogNivel:number,
  idSimuladorTogModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  idSimuladorTogTarea?:number,
  idSimuladorTogDominio:number,
  IdTogExamen?:number
}
export interface RegistroTogExamenRespuestaDTO{
  id:number,
  idSimuladorTogNivel:number,
  idSimuladorTogModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  respuestaDetalle: Array<RegistroTogExamenDetalleDTO>,
  idSimuladorTipoRespuesta:number
}
export interface ExamenIntentoDTO{
  Intento1:number;
  Intento2:number;
  Intento3:number;
  Intento4:number;
  Intento5:number;
  Intento6:number;
  Intento7:number;
  Intento8:number;
  Intento9:number;
  Intento10:number;
}
