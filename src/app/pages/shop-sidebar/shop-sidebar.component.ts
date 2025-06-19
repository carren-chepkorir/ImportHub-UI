import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shop-sidebar',
  templateUrl: './shop-sidebar.component.html',
  styleUrls: ['./shop-sidebar.component.css']
})
export class ShopSidebarComponent {
  @Input() searchQuery: string = '';
  @Input() selectedCategory: string = '';
  @Input() shippingMode: string = '';
  @Output() searchChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();
  @Output() shippingModeChange = new EventEmitter<string>();

  categories = ['Electronics', 'Fashion', 'Accessories', 'Toys'];
}
