import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];
  visibleProducts: Product[] = [];

  @Output() deleted = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.visibleProducts = [...this.products];
    }
  }

  removeProduct(id: number): void {
    this.visibleProducts = this.visibleProducts.filter(p => p.id !== id);
    this.deleted.emit(id);
  }
}
