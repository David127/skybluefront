import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoActualizarComponent } from './cargo-actualizar.component';

describe('CargoActualizarComponent', () => {
  let component: CargoActualizarComponent;
  let fixture: ComponentFixture<CargoActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
