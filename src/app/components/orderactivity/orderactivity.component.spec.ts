import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderactivityComponent } from './orderactivity.component';

describe('OrderactivityComponent', () => {
  let component: OrderactivityComponent;
  let fixture: ComponentFixture<OrderactivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderactivityComponent]
    });
    fixture = TestBed.createComponent(OrderactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
