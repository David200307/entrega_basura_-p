import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOCancelarCitaComponent } from './consultar-o-cancelar-cita.component';

describe('ConsultarOCancelarCitaComponent', () => {
  let component: ConsultarOCancelarCitaComponent;
  let fixture: ComponentFixture<ConsultarOCancelarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarOCancelarCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarOCancelarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
