import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerUIComponent } from './shimmer-ui.component';

describe('ShimmerUIComponent', () => {
  let component: ShimmerUIComponent;
  let fixture: ComponentFixture<ShimmerUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShimmerUIComponent]
    });
    fixture = TestBed.createComponent(ShimmerUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
