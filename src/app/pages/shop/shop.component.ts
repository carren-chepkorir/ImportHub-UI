import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  shippingMode: string;
  image: string;
  tag?: string;
  demand: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  cart: Product[] = [];
  wishlist: Product[] = [];

  searchQuery: string = '';
  selectedCategory: string = '';
  shippingMode: string = '';

  categories: string[] = ['Electronics', 'Clothing', 'Beauty', 'Books', 'Accessories'];

  showCart: boolean = false;
  showWishlist: boolean = false;

  ngOnInit(): void {
    this.products = [
      {
        name: 'Bluetooth Speaker',
        description: 'High quality sound with bass',
        price: 45,
        category: 'Electronics',
        shippingMode: 'Sea',
        image: 'https://via.placeholder.com/250x200?text=Bluetooth+Speaker',
        tag: 'Trending',
        demand: 18
      },
      {
        name: 'Smart Watch',
        description: 'Fitness & notification tracker',
        price: 90,
        category: 'Electronics',
        shippingMode: 'Air',
        image: 'https://via.placeholder.com/250x200?text=Smart+Watch',
        demand: 10
      }
      // Add more products
    ];
  }

  filteredProducts(): Product[] {
    return this.products.filter(p =>
      (!this.searchQuery || p.name.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
      (!this.selectedCategory || p.category === this.selectedCategory) &&
      (!this.shippingMode || p.shippingMode === this.shippingMode)
    );
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }

  toggleWishlist(): void {
    this.showWishlist = !this.showWishlist;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  addToWishlist(product: Product): void {
    if (!this.wishlist.includes(product)) {
      this.wishlist.push(product);
    }
  }

  removeFromWishlist(product: Product): void {
    this.wishlist = this.wishlist.filter(p => p !== product);
  }
  removeFromCart(product: Product): void {
  this.cart = this.cart.filter(p => p !== product);
}

}
