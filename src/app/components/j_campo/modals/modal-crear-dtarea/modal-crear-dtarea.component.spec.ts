import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearDTareaComponent } from './modal-crear-dtarea.component';

describe('ModalCrearDTareaComponent', () => {
  let component: ModalCrearDTareaComponent;
  let fixture: ComponentFixture<ModalCrearDTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearDTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearDTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
