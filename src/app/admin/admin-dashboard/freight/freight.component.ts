import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Attribute {
  name: string;
  value: string;
}

interface OrderItem {
  productName: string;
  quantity: number;
  price: number;
  attributes: Attribute[];
}

interface Order {
  id: number;
  userId: number;
  userName: string;
  estimatedFreight: number;
  pickedUp: boolean;
  pickupCode: string;
  paid: boolean;
  items: OrderItem[];
}
@Component({
  selector: 'app-freight',
  templateUrl: './freight.component.html',
  styleUrls: ['./freight.component.css']
})
export class FreightComponent implements OnInit {

  displayedOrders: Order[] = [];
  isAdmin = true; // Set this based on user role in real app

  ngOnInit(): void {
    // You might want to fetch from backend in real app
    this.displayedOrders = [
      {
        id: 1,
        userId: 101,
        userName: 'johndoe',
        estimatedFreight: 1000,
        paid: true,
        pickupCode: 'PK101-1234',
        pickedUp: false,
        items: [
          {
            productName: 'Bluetooth Speaker',
            quantity: 2,
            price: 200,
            attributes: []
          },
          {
            productName: 'LED Ring Light',
            quantity: 1,
            price: 150,
            attributes: []
          }
        ]
      },
      {
        id: 2,
        userId: 102,
        userName: 'janedoe',
        estimatedFreight: 500,
        paid: false,
        pickupCode: 'PK101-1234',
        pickedUp: true,
        items: [
          {
            productName: 'Wireless Mouse',
            quantity: 1,
            price: 120,
            attributes: []
          }
        ]
      }
    ];
  }

  isViewing: boolean = false;
  selectedOrder: Order | null = null;

  openEditModal(order: Order): void {
    this.selectedOrder = { ...order };
    this.isViewing = true;
  }

  closeEditModal(): void {
    this.isViewing = false;
    this.selectedOrder = null;
  }

  saveOrder(): void {
    if (!this.selectedOrder) return;

    const index = this.displayedOrders.findIndex(o => o.id === this.selectedOrder!.id);
    if (index !== -1) {
      this.displayedOrders[index] = { ...this.selectedOrder };
    }

    this.closeEditModal();
  }
}
