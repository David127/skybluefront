import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioListarComponent } from './propietario-listar.component';

describe('PropietarioListarComponent', () => {
  let component: PropietarioListarComponent;
  let fixture: ComponentFixture<PropietarioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropietarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
