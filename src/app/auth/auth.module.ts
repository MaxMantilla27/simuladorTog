import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ModoEntrenamientoComponent } from './ModoEntrenamiento/modo-entrenamiento.component';
import { ModoEstudioComponent } from './ModoEstudio/modo-estudio.component';
import { ModoExamenComponent } from './ModoExamen/modo-examen.component';
import { RankingComponent } from './Ranking/ranking.component';
import { ResultadosSimulacionesComponent } from './ResultadosSimulaciones/resultados-simulaciones.component';
import { SimulacionesGuardadasComponent } from './SimulacionesGuardadas/simulaciones-guardadas.component';
import { EstudioPreguntaComponent } from './ModoEstudio/EstudioPregunta/estudio-pregunta.component';
import { EstudioRespuestaPreguntaComponent } from './ModoEstudio/EstudioRespuestaPregunta/estudio-respuesta-pregunta.component';
import {EstudioReporteComponent} from './ModoEstudio/EstudioReporte/estudio-reporte.component';
import { EntrenamientoPreguntaComponent } from './ModoEntrenamiento/EntrenamientoPregunta/entrenamiento-pregunta.component';
import { EntrenamientoReporteComponent } from './ModoEntrenamiento/EntrenamientoReporte/entrenamiento-reporte.component';
import { EntrenamientoRespuestaPreguntaComponent } from './ModoEntrenamiento/EntrenamientoRespuestaPregunta/entrenamiento-respuesta-pregunta.component';
import { ExamenPreguntaComponent } from './ModoExamen/ExamenPregunta/examen-pregunta.component';
import { ExamenReporteComponent } from './ModoExamen/ExamenReporte/examen-reporte.component';
import { ExamenRespuestaPreguntaComponent } from './ModoExamen/ExamenRespuestaPregunta/examen-respuesta-pregunta.component';
import { ExamenIntermedioComponent } from './ModoExamen/ExamenIntermedio/examen-intermedio.component';

@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    ModoEntrenamientoComponent,
    ModoEstudioComponent,
    ModoExamenComponent,
    RankingComponent,
    ResultadosSimulacionesComponent,
    SimulacionesGuardadasComponent,
    EstudioPreguntaComponent,
    EstudioRespuestaPreguntaComponent,
    EstudioReporteComponent,
    EntrenamientoPreguntaComponent,
    EntrenamientoReporteComponent,
    EntrenamientoRespuestaPreguntaComponent,
    ExamenPreguntaComponent,
    ExamenReporteComponent,
    ExamenRespuestaPreguntaComponent,
    ExamenIntermedioComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
