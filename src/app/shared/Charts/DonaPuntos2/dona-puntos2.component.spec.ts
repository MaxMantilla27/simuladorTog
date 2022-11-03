import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaPuntos2Component } from './dona-puntos2.component';

describe('DonaPuntos2Component', () => {
  let component: DonaPuntos2Component;
  let fixture: ComponentFixture<DonaPuntos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaPuntos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonaPuntos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
