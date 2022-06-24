import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoListarComponent } from './cargo-listar.component';

describe('CargoListarComponent', () => {
  let component: CargoListarComponent;
  let fixture: ComponentFixture<CargoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
