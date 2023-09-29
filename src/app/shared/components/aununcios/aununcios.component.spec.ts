import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AununciosComponent } from './aununcios.component';

describe('AununciosComponent', () => {
  let component: AununciosComponent;
  let fixture: ComponentFixture<AununciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AununciosComponent]
    });
    fixture = TestBed.createComponent(AununciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
