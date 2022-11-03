import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenIntermedioComponent } from './examen-intermedio.component';

describe('ExamenIntermedioComponent', () => {
  let component: ExamenIntermedioComponent;
  let fixture: ComponentFixture<ExamenIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
