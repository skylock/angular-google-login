import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleOneTapComponent } from './google-one-tap.component';

describe('GoogleOneTapComponent', () => {
  let component: GoogleOneTapComponent;
  let fixture: ComponentFixture<GoogleOneTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleOneTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleOneTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
