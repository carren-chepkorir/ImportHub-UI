import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders: any[] = [];

  ngOnInit(): void {
    this.fetchOrders();
  }

  openOrdersModal(): void {
    const modalEl = document.getElementById('ordersModal');
    if (modalEl) {
      // Ensure Bootstrap JS is available
      const modal = new (window as any).bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  fetchOrders(): void {
    // Replace this mock data with your actual service call
    this.orders = [
      {
        userId: '001',
        userName: 'Alice Johnson',
        items: [
          {
            productName: 'Laptop',
            quantity: 1,
            attributes: [
              { name: 'Color', value: 'Silver' },
              { name: 'RAM', value: '16GB' }
            ]
          }
        ]
      },
      {
        userId: '002',
        userName: 'Bob Smith',
        items: [
          {
            productName: 'Phone',
            quantity: 2,
            attributes: [
              { name: 'Color', value: 'Black' }
            ]
          }
        ]
      }
    ];
  }

  hasAttributes(order: any): boolean {
    return order.items?.some((item: any) => item.attributes && item.attributes.length > 0);
  }
}
