import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderemployeeComponent } from './orderemployee.component';

describe('OrderemployeeComponent', () => {
  let component: OrderemployeeComponent;
  let fixture: ComponentFixture<OrderemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderemployeeComponent]
    });
    fixture = TestBed.createComponent(OrderemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
