export interface RegistroTogExamenDetalleDTO{
    id:number,
    idSimuladorTogExamen:number,
    idSimuladorTogNivel: number,
    idSimuladorTogDominio:number,
    idSimuladorTogTarea?:number,
    idSimuladorTogPregunta:number,
    ejecutado:boolean,
    idSimuladorTogPreguntaRespuesta?:number,
    puntaje?:number,
    idAspNetUsers:string,
    usuario:string
  }