import { Component } from '@angular/core';

interface Payment {
  id: string;
  name: string;
  phone: string;
  amountDue: number;
  status: 'Unpaid' | 'Partial' | 'Paid';
  method: string;
  receipt?: string;
}
@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.css']
})
export class PendingPaymentsComponent {

  selectedPayment: Payment | null = null;
  isViewing = false;

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

  showViewIssueModal(payments: any){
    this.selectedPayment = payments;
    this.isViewing = true;

  }

  closeViewPaymentModal() {
    this.isViewing = false;
    this.selectedPayment = null;
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

  openDetails(payment: Payment) {
    this.selectedPayment = { ...payment };
    this.isViewing = true;
  }

  updatePayment() {
    if (!this.selectedPayment) return;
    const index = this.payments.findIndex(p => p.id === this.selectedPayment?.id);
    if (index !== -1) {
      this.payments[index] = { ...this.selectedPayment };
    }
    this.closeViewPaymentModal();
  }

  deletePayment() {
    if (!this.selectedPayment) return;
    this.payments = this.payments.filter(p => p.id !== this.selectedPayment?.id);
    this.closeViewPaymentModal();
  }

  onReceiptUpload(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files?.length) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (this.selectedPayment) {
          this.selectedPayment.receipt = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  clearReceipt() {
    if (this.selectedPayment) {
      this.selectedPayment.receipt = '';
    }
  }
}
