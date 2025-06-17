import { Component } from '@angular/core';
interface Shipment {
  id: number;
  userId: number;
  userName: string;
  status: string;
  mode: 'Sea' | 'Air' | 'Road';
  eta: Date;
  documents?: string[];
}
@Component({
  selector: 'app-intransit-shipment',
  templateUrl: './intransit-shipment.component.html',
  styleUrls: ['./intransit-shipment.component.css']
})
export class IntransitShipmentComponent {
    shipments: Shipment[] = [];
  filteredShipments: Shipment[] = [];
  filters = {
    user: '',
    status: ''
  };

  activeStatuses = ['Left Port', 'At Customs', 'On Sea', 'Cleared', 'Out for Delivery'];

  ngOnInit(): void {
    this.loadShipments();
  }

  loadShipments(): void {
    // Dummy data — replace with service call to backend later
    this.shipments = [
      {
        id: 101,
        userId: 1,
        userName: 'johndoe',
        status: 'Left Port',
        mode: 'Sea',
        eta: new Date('2024-06-25'),
        documents: ['manifest.pdf']
      },
      {
        id: 102,
        userId: 2,
        userName: 'janedoe',
        status: 'At Customs',
        mode: 'Air',
        eta: new Date('2024-06-20')
      }
    ];

    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredShipments = this.shipments.filter(shipment => {
      const userMatch = this.filters.user === '' || shipment.userName.toLowerCase().includes(this.filters.user.toLowerCase());
      const statusMatch = this.filters.status === '' || shipment.status === this.filters.status;
      return userMatch && statusMatch;
    });
  }

  viewDetails(shipment: Shipment): void {
    // Navigate to a detailed page or show modal
    alert(`Viewing details for shipment #${shipment.id}`);
  }

  trackShipment(shipment: Shipment): void {
    // Open tracking timeline or map view
    alert(`Tracking shipment #${shipment.id} — currently: ${shipment.status}`);
  }

}
