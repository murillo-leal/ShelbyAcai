import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBarComponent } from './shopping-bar.component';

describe('ShoppingBarComponent', () => {
  let component: ShoppingBarComponent;
  let fixture: ComponentFixture<ShoppingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
