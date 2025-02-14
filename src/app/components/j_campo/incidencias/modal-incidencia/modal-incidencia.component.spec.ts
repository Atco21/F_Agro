import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIncidenciaComponent } from './modal-incidencia.component';

describe('ModalIncidenciaComponent', () => {
  let component: ModalIncidenciaComponent;
  let fixture: ComponentFixture<ModalIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIncidenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
