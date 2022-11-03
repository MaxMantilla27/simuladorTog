import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barras1Component } from './barras1.component';

describe('Barras1Component', () => {
  let component: Barras1Component;
  let fixture: ComponentFixture<Barras1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barras1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barras1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
