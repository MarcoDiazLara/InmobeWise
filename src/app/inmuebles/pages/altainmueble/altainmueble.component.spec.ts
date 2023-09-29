import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltainmuebleComponent } from './altainmueble.component';

describe('AltainmuebleComponent', () => {
  let component: AltainmuebleComponent;
  let fixture: ComponentFixture<AltainmuebleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltainmuebleComponent]
    });
    fixture = TestBed.createComponent(AltainmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
