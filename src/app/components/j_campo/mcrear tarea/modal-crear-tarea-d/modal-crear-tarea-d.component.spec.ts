import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearTareaDComponent } from './modal-crear-tarea-d.component';

describe('ModalCrearTareaDComponent', () => {
  let component: ModalCrearTareaDComponent;
  let fixture: ComponentFixture<ModalCrearTareaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearTareaDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearTareaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
