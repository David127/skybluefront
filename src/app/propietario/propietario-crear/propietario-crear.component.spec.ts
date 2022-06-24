import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioCrearComponent } from './propietario-crear.component';

describe('PropietarioCrearComponent', () => {
  let component: PropietarioCrearComponent;
  let fixture: ComponentFixture<PropietarioCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropietarioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
