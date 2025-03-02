import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIncidenciaMaquinaComponent } from './crear-incidencia-maquina.component';

describe('CrearIncidenciaMaquinaComponent', () => {
  let component: CrearIncidenciaMaquinaComponent;
  let fixture: ComponentFixture<CrearIncidenciaMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearIncidenciaMaquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearIncidenciaMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
