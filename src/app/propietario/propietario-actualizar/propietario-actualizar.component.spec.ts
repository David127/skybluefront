import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioActualizarComponent } from './propietario-actualizar.component';

describe('PropietarioActualizarComponent', () => {
  let component: PropietarioActualizarComponent;
  let fixture: ComponentFixture<PropietarioActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropietarioActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
