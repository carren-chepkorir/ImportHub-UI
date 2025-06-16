import { Component, OnInit } from '@angular/core';

interface Attribute {
  name: string;
  value: string;
}

interface OrderItem {
  productName: string;
  quantity: number;
  attributes: Attribute[]; // ensure it's always an array
}

interface Order {
  id: number;
  userId: number;
  userName: string;
  status: string;
  items: OrderItem[];
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
      items: [
        {
          productName: 'Bluetooth Speaker',
          quantity: 2,
          attributes: [
            { name: 'Color', value: 'Black' },
            { name: 'Model', value: 'X300' }
          ]
        },
        {
          productName: 'LED Ring Light',
          quantity: 1,
          attributes: [] // defined as empty array to avoid undefined
        }
      ]
    },
    {
      id: 2,
      userId: 102,
      userName: 'janedoe',
      status: 'Shipped',
      items: [
        {
          productName: 'Wireless Mouse',
          quantity: 1,
          attributes: [
            { name: 'Color', value: 'White' }
          ]
        }
      ]
    }
  ];

  ngOnInit(): void {
    // In case future data may have undefined attributes
    this.orders.forEach(order => {
      order.items.forEach(item => {
        item.attributes = item.attributes ?? [];
      });
    });
  }
}
