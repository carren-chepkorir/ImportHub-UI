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
  selector: 'app-wishlist-sidebar',
  templateUrl: './wishlist-sidebar.component.html',
  styleUrls: ['./wishlist-sidebar.component.css']
})
export class WishlistSidebarComponent {
  @Input() wishlist: Product[] = [];
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() remove = new EventEmitter<Product>();

  closeSidebar(): void {
    this.close.emit();
  }

  removeItem(product: Product): void {
    this.remove.emit(product);
  }
}
