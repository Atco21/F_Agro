import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearMaquinaComponent } from './modal-crear-maquina.component';

describe('ModalCrearMaquinaComponent', () => {
  let component: ModalCrearMaquinaComponent;
  let fixture: ComponentFixture<ModalCrearMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearMaquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
