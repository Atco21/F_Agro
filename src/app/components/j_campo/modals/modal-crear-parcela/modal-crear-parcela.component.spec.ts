import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearParcelaComponent } from './modal-crear-parcela.component';

describe('ModalCrearParcelaComponent', () => {
  let component: ModalCrearParcelaComponent;
  let fixture: ComponentFixture<ModalCrearParcelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearParcelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
