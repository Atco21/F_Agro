import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenPausadasComponent } from './orden-pausadas.component';

describe('OrdenPausadasComponent', () => {
  let component: OrdenPausadasComponent;
  let fixture: ComponentFixture<OrdenPausadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenPausadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenPausadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
