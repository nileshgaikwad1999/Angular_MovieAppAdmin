import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanuComponent } from './meanu.component';

describe('MeanuComponent', () => {
  let component: MeanuComponent;
  let fixture: ComponentFixture<MeanuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeanuComponent]
    });
    fixture = TestBed.createComponent(MeanuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
