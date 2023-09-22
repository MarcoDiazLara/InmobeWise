import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGComponent } from './registro-g.component';

describe('RegistroGComponent', () => {
  let component: RegistroGComponent;
  let fixture: ComponentFixture<RegistroGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroGComponent]
    });
    fixture = TestBed.createComponent(RegistroGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
