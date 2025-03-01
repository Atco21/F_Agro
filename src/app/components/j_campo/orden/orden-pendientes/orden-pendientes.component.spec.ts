import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenPendientesComponent } from './orden-pendientes.component';

describe('OrdenPendientesComponent', () => {
  let component: OrdenPendientesComponent;
  let fixture: ComponentFixture<OrdenPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenPendientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
