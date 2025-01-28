import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearTratamientoComponent } from './modal-crear-tratamiento.component';

describe('ModalCrearTratamientoComponent', () => {
  let component: ModalCrearTratamientoComponent;
  let fixture: ComponentFixture<ModalCrearTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearTratamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
