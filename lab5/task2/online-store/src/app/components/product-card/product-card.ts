import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {

  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  remove(): void {
    const ok = confirm('Are you sure you want to delete?');
    if (!ok) return;

    this.delete.emit(this.product.id);
  }


  like(): void {
    this.product.likes++;
  }

  shareText(): string {
    return `${this.product.name} — ${this.product.price} ₸\n${this.product.link}`;
  }

  shareWhatsAppUrl(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.shareText())}`;
  }

  shareTelegramUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }

  selectedImage = '';

  setImage(img: string): void {
    this.selectedImage = img;
  }

  get mainImage(): string {
    return this.selectedImage || this.product.images?.[0] || this.product.image;
  }
  
}