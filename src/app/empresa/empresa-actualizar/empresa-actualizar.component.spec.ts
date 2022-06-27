import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaActualizarComponent } from './empresa-actualizar.component';

describe('EmpresaActualizarComponent', () => {
  let component: EmpresaActualizarComponent;
  let fixture: ComponentFixture<EmpresaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
