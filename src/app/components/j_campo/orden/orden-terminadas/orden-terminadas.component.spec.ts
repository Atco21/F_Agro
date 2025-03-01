import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTerminadasComponent } from './orden-terminadas.component';

describe('OrdenTerminadasComponent', () => {
  let component: OrdenTerminadasComponent;
  let fixture: ComponentFixture<OrdenTerminadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenTerminadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenTerminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
