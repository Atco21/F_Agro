import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearTareaComponent } from './crear-orden.component';

describe('ModalCrearTareaComponent', () => {
  let component: ModalCrearTareaComponent;
  let fixture: ComponentFixture<ModalCrearTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
