import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaInmuebleComponent } from './alta-inmueble.component';

describe('AltaInmuebleComponent', () => {
  let component: AltaInmuebleComponent;
  let fixture: ComponentFixture<AltaInmuebleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaInmuebleComponent]
    });
    fixture = TestBed.createComponent(AltaInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
