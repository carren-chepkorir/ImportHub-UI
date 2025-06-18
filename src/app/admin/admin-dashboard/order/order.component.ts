import { Component, OnInit } from '@angular/core';

interface Attribute {
  name: string;
  value: string;
}

interface OrderItem {
  productName: string;
  quantity: number;
  price: number;              // ✅ Add price per item here
  attributes: Attribute[];
}

interface Order {
  id: number;
  userId: number;
  userName: string;
  status: string;
  estimatedFreight: number;
  items: OrderItem[];         // ✅ Each order contains multiple items
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [
    {
      id: 1,
      userId: 101,
      userName: 'johndoe',
      status: 'Pending',
      estimatedFreight: 1000,
      items: [
        {
          productName: 'Bluetooth Speaker',
          quantity: 2,
          price: 200,
          attributes: [
            { name: 'Color', value: 'Black' },
            { name: 'Model', value: 'X300' }
          ]
        },
        {
          productName: 'LED Ring Light',
          quantity: 1,
          price: 150,
          attributes: [] // explicitly empty
        }
      ]
    },
    {
      id: 2,
      userId: 102,
      userName: 'janedoe',
      status: 'Shipped',
      estimatedFreight: 5000,
      items: [
        {
          productName: 'Wireless Mouse',
          quantity: 1,
          price: 120,
          attributes: [
            { name: 'Color', value: 'White' }
          ]
        }
      ]
    }
  ];

  ngOnInit(): void {
    // Ensure attributes array is always defined
    this.orders.forEach(order => {
      order.items.forEach(item => {
        item.attributes = item.attributes ?? [];
      });
    });
  }
}
