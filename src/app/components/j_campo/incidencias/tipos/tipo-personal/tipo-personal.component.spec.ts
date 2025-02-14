import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPersonalComponent } from './tipo-personal.component';

describe('TipoPersonalComponent', () => {
  let component: TipoPersonalComponent;
  let fixture: ComponentFixture<TipoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
