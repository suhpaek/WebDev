import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model'; 
import { ProductListComponent } from '../components/product-list/product-list';
import { PRODUCTS } from '../data/products';
import { FormsModule } from '@angular/forms';
import { Category } from '../models/category.model';
import { CATEGORIES } from '../data/categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  products: Product[] = PRODUCTS;  
  categories: Category[] = CATEGORIES;
  selectedCategoryId: number | null = null;
  showTopRated = false;
  query = '';

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.showTopRated = false;
  }

  showTopProduct() {
    this.showTopRated = true;
    this.selectedCategoryId = null;
  }

  showAll() {
    this.selectedCategoryId = null;
  }

  get filteredProducts(): Product[] {

    if (this.showTopRated) {
      if (this.products.length === 0) return [];

      const top = this.products.reduce((max, p) =>
        p.rating > max.rating ? p : max
      );

      return [top];
    }

    if (this.selectedCategoryId === null) return [];

    return this.products.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }

  isLimonEasterEgg(): boolean {
    return this.query.trim().toLowerCase() === 'limon';
  }

  deleteFromSource(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }


  get shownCount(): number {
    return this.filteredProducts.length;
  }

}


