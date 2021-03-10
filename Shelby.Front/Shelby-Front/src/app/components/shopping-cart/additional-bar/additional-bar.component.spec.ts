import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalBarComponent } from './additional-bar.component';

describe('AdditionalBarComponent', () => {
  let component: AdditionalBarComponent;
  let fixture: ComponentFixture<AdditionalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
