import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent {
 private route = inject(ActivatedRoute);

  shipmentId: string = '';
  shipment = {
    id: '',
    status: '',
    mode: '',
    eta: '',
    arrivalPort: '',
    shippingLine: '',
    clearanceStatus: '',
    ordersContained: '',
    contact: ''
  };

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.shipmentId = params.get('id') ?? '';
      this.loadShipment(this.shipmentId);
    });
  }

  loadShipment(id: string) {
    // Simulate fetch with dummy data
    this.shipment = {
      id,
      status: 'At Customs',
      mode: 'Air',
      eta: '2024-06-25',
      arrivalPort: 'JKIA',
      shippingLine: 'DHL',
      clearanceStatus: 'Pending',
      ordersContained: 'JAN/001, JAN/004',
      contact: 'Forwarder XYZ'
    };
  }

  saveChanges() {
    console.log('Saving shipment:', this.shipment);
    alert('Changes saved successfully!');
  }
}
