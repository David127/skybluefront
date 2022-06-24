import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorActualizarComponent } from './conductor-actualizar.component';

describe('ConductorActualizarComponent', () => {
  let component: ConductorActualizarComponent;
  let fixture: ComponentFixture<ConductorActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductorActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductorActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
