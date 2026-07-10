import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoTransferencia } from './sucesso-transferencia';

describe('SucessoTransferencia', () => {
  let component: SucessoTransferencia;
  let fixture: ComponentFixture<SucessoTransferencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessoTransferencia],
    }).compileComponents();

    fixture = TestBed.createComponent(SucessoTransferencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
