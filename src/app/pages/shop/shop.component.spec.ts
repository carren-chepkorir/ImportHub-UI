import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopComponent } from './shop.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]  // Ignores unknown elements like app-cart-sidebar
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter products by searchQuery', () => {
    component.products = [
      { name: 'Phone', description: '', price: 100, category: 'Electronics', shippingMode: 'Air', image: '', demand: 5 },
      { name: 'Watch', description: '', price: 200, category: 'Electronics', shippingMode: 'Sea', image: '', demand: 10 }
    ];
    component.searchQuery = 'phone';
    const result = component.filteredProducts();
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Phone');
  });

  it('should toggle cart visibility', () => {
    expect(component.showCart).toBeFalse();
    component.toggleCart();
    expect(component.showCart).toBeTrue();
  });

  it('should add item to cart', () => {
    const product = { name: 'Test Product', description: '', price: 50, category: '', shippingMode: '', image: '', demand: 1 };
    component.addToCart(product);
    expect(component.cart.length).toBe(1);
    expect(component.cart[0]).toEqual(product);
  });

  it('should add and remove item from wishlist', () => {
    const product = { name: 'Wish Product', description: '', price: 25, category: '', shippingMode: '', image: '', demand: 3 };
    component.addToWishlist(product);
    expect(component.wishlist.length).toBe(1);

    component.removeFromWishlist(product);
    expect(component.wishlist.length).toBe(0);
  });
});
