import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barras2Component } from './barras2.component';

describe('Barras2Component', () => {
  let component: Barras2Component;
  let fixture: ComponentFixture<Barras2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barras2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barras2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
