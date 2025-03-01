import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenEnCursoComponent } from './orden-en-curso.component';

describe('OrdenEnCursoComponent', () => {
  let component: OrdenEnCursoComponent;
  let fixture: ComponentFixture<OrdenEnCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenEnCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenEnCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
