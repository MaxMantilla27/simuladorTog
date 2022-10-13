export interface RegistroCcnaExamenDetalleDTO{
  id:number,
  idSimuladorCcnaExamen:number,
  idSimuladorCcnaDominio:number,
  idSimuladorCcnaTarea?:number,
  idSimuladorCcnaPregunta:number,
  ejecutado:boolean,
  idSimuladorCcnaPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
