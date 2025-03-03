import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenFinalizadaComponent } from './orden-finalizada.component';

describe('OrdenFinalizadaComponent', () => {
  let component: OrdenFinalizadaComponent;
  let fixture: ComponentFixture<OrdenFinalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenFinalizadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenFinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
