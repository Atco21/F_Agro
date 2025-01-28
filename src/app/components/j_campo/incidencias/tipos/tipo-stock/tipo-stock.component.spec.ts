import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoStockComponent } from './tipo-stock.component';

describe('TipoStockComponent', () => {
  let component: TipoStockComponent;
  let fixture: ComponentFixture<TipoStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
