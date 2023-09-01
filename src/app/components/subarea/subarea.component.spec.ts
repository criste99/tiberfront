import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubareaComponent } from './subarea.component';

describe('SubareaComponent', () => {
  let component: SubareaComponent;
  let fixture: ComponentFixture<SubareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubareaComponent]
    });
    fixture = TestBed.createComponent(SubareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
