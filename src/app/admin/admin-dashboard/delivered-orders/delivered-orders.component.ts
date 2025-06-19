import { Component } from '@angular/core';
interface DeliveredOrder {
  id: number;
  userId: number;
  userName: string;
  status: string; // should be "Picked"
  estimatedFreight: number;
  deliveryDate: Date;
  pickupDate: Date;
  pickedBy: string;
}
@Component({
  selector: 'app-delivered-orders',
  templateUrl: './delivered-orders.component.html',
  styleUrls: ['./delivered-orders.component.css']
})
export class DeliveredOrdersComponent {
   deliveredOrders: DeliveredOrder[] = [];

  ngOnInit(): void {
    // Example static data, replace with service call
    this.deliveredOrders = [
      {
        id: 101,
        userId: 2001,
        userName: 'johndoe',
        status: 'Picked',
        estimatedFreight: 1200,
        deliveryDate: new Date('2024-06-28'),
        pickupDate: new Date('2024-06-30'),
        pickedBy: 'John Doe'
      },
      {
        id: 102,
        userId: 2002,
        userName: 'janedoe',
        status: 'Picked',
        estimatedFreight: 950,
        deliveryDate: new Date('2024-06-26'),
        pickupDate: new Date('2024-06-28'),
        pickedBy: 'Jane Doe'
      }
    ];
  }


}
