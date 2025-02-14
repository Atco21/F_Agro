import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearFechaComponent } from './modal-crear-fecha.component';

describe('ModalCrearFechaComponent', () => {
  let component: ModalCrearFechaComponent;
  let fixture: ComponentFixture<ModalCrearFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearFechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
