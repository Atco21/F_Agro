import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearAplicadorComponent } from './modal-crear-aplicador.component';

describe('ModalCrearAplicadorComponent', () => {
  let component: ModalCrearAplicadorComponent;
  let fixture: ComponentFixture<ModalCrearAplicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearAplicadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearAplicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
