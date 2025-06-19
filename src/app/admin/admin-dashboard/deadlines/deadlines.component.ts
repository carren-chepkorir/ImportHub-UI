import { Component } from '@angular/core';

interface Deadline {
    type: string;
    date: string;
    description: string;
    relatedOrders: string[];
  }

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.css']
})
export class DeadlinesComponent {

  deadlines: Deadline[] = [
    {
      type: 'Order Placement',
      date: '2025-06-20',
      description: 'Last date for June batch orders',
      relatedOrders: ['ORD1023', 'ORD1024']
    },
    {
      type: 'Final Payment',
      date: '2025-06-22',
      description: 'Full payment must be completed',
      relatedOrders: ['ORD1024']
    },
    {
      type: 'Shipping Deadline',
      date: '2025-06-25',
      description: 'Items shipped from China',
      relatedOrders: ['ORD1023']
    },
    {
      type: 'Arrival in Kenya',
      date: '2025-07-10',
      description: 'Estimated arrival date',
      relatedOrders: ['ORD1023', 'ORD1024']
    }
  ];

  selectedDeadline: Deadline | null = null;

  isViewing: boolean = false;
relatedOrdersInput: string = ''; // for editable relatedOrders

openDetails(deadline: Deadline) {
  this.selectedDeadline = { ...deadline };
  this.relatedOrdersInput = deadline.relatedOrders.join(', ');
  this.isViewing = true;
}

closeViewDeadlineModal() {
  this.isViewing = false;
  this.selectedDeadline = null;
  this.relatedOrdersInput = '';
}

updateDeadline() {
  if (this.selectedDeadline) {
    this.selectedDeadline.relatedOrders = this.relatedOrdersInput
      .split(',')
      .map(order => order.trim())
      .filter(order => order !== '');
    // Update the deadline in the array or backend
    this.isViewing = false;
  }
}

deleteDeadline() {
  if (this.selectedDeadline) {
    // Remove the deadline from the list
    this.deadlines = this.deadlines.filter(d => d !== this.selectedDeadline);
    this.closeViewDeadlineModal();
  }
}

  getDaysLeft(deadlineDate: string): number {
    const today = new Date();
    const deadline = new Date(deadlineDate);
    const diff = deadline.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  getBadgeClass(daysLeft: number): string {
    if (daysLeft <= 2) return 'bg-danger';
    if (daysLeft <= 5) return 'bg-warning text-dark';
    return 'bg-success';
  }

}
