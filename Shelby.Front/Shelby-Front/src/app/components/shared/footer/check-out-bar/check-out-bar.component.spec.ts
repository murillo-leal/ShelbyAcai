import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutBarComponent } from './check-out-bar.component';

describe('CheckOutBarComponent', () => {
  let component: CheckOutBarComponent;
  let fixture: ComponentFixture<CheckOutBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
