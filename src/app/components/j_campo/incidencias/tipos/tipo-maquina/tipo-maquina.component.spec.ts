import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMaquinaComponent } from './tipo-maquina.component';

describe('TipoMaquinaComponent', () => {
  let component: TipoMaquinaComponent;
  let fixture: ComponentFixture<TipoMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoMaquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
