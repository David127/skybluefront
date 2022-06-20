import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorListarComponent } from './conductor-listar.component';

describe('ConductorListarComponent', () => {
  let component: ConductorListarComponent;
  let fixture: ComponentFixture<ConductorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductorListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
