import { Component } from '@angular/core';

interface Payment {
  id: string;
  name: string;
  phone: string;
  amountDue: number;
  status: 'Unpaid' | 'Partial' | 'Paid';
  method: string;
}
@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.css']
})
export class PendingPaymentsComponent {

  selectedPayment: Payment | null = null;

  payments: Payment[] = [
    {
      id: 'ORD1023',
      name: 'Mary Wanjiku',
      phone: '0712XXXXXX',
      amountDue: 3850,
      status: 'Unpaid',
      method: 'M-PESA'
    },
    {
      id: 'ORD1024',
      name: 'Ali Hussein',
      phone: '0791XXXXXX',
      amountDue: 2000,
      status: 'Partial',
      method: 'Bank Transfer'
    },
    {
      id: 'ORD1025',
      name: 'Grace Achieng',
      phone: '0741XXXXXX',
      amountDue: 7500,
      status: 'Unpaid',
      method: ''
    }
  ];

  openDetails(payment: Payment) {
    this.selectedPayment = { ...payment };
    const modalElement = document.getElementById('paymentModal');
    if (modalElement) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }

  updateStatus() {
    if (!this.selectedPayment) return;

    const index = this.payments.findIndex(p => p.id === this.selectedPayment!.id);
    if (index !== -1) {
      this.payments[index].status = this.selectedPayment.status;
    }

    const modal = (window as any).bootstrap.Modal.getInstance(document.getElementById('paymentModal')!);
    modal?.hide();
  }
}
