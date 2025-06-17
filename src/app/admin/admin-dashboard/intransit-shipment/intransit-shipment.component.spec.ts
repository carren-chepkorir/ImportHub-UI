import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntransitShipmentComponent } from './intransit-shipment.component';

describe('IntransitShipmentComponent', () => {
  let component: IntransitShipmentComponent;
  let fixture: ComponentFixture<IntransitShipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntransitShipmentComponent]
    });
    fixture = TestBed.createComponent(IntransitShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
