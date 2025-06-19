import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  shippingMode: string;
  demand: number;
  tag?: string;
}

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css']
})
export class CartSidebarComponent {
  @Input() cart: Product[] = [];
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() remove = new EventEmitter<Product>();

  closeSidebar(): void {
    this.close.emit();
  }

  removeItem(product: Product): void {
    this.remove.emit(product);
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
