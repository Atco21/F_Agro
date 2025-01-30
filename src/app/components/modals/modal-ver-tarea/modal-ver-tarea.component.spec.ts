import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerTareaComponent } from './modal-ver-tarea.component';

describe('ModalVerTareaComponent', () => {
  let component: ModalVerTareaComponent;
  let fixture: ComponentFixture<ModalVerTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVerTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalVerTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
