import { asNativeElements, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu') matMenu!: MatMenu;
  constructor(
    private _router: Router,
  ) { }
  private signal$ = new Subject();

  ngOnDestroy(): void {
    this.signal$.next(true)
    this.signal$.complete()
  }
  public NombreAlumno=''
  public resise=false;


  ngOnInit(): void {

  }
  OpenMenu(){

    console.log(document.getElementsByClassName('matmenuCustom')[0].clientWidth)

  }
  resiseMenu(e:any){
    e.stopPropagation();
    this.resise=!this.resise
  }
  cerrarSesion(){

  }
}
