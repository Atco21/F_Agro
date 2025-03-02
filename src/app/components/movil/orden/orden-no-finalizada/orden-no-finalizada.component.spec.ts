import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenNoFinalizadaComponent } from './orden-no-finalizada.component';

describe('OrdenNoFinalizadaComponent', () => {
  let component: OrdenNoFinalizadaComponent;
  let fixture: ComponentFixture<OrdenNoFinalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenNoFinalizadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenNoFinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
