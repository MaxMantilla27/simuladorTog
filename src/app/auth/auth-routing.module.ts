import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: AuthComponent  , canActivateChild:[AuthGuard] , children:
      [
        { path: '', component: HomeComponent},
      
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

