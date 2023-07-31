import { Injectable, OnInit } from '@angular/core';
import { BookInterface } from '../config/bookInterface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private newBooks: BookInterface[] = [];
  private cart: BookInterface[] = [];
  private cartSubject: BehaviorSubject<BookInterface[]> = new BehaviorSubject<
    BookInterface[]
  >([]);

  constructor() {
    this.cartSubject.next(this.cart);
  }

  setNewBooks(books: BookInterface[]): void {
    this.newBooks = books;
  }
  getBookById(id: string): BookInterface | undefined {
    return this.newBooks.find((book) => book?.isbn13 === id);
  }

  addToCart(product: BookInterface) {
    const existingItem = this.cart.find(
      (item) => item.isbn13 === product.isbn13
    );

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 0) + 1;
      if (existingItem.totalPrice) {
        existingItem.totalPrice = this.calculateTotalPrice(existingItem);
      }
    } else {
      const productWithQuantity: BookInterface = {
        ...product,
        quantity: 1,
        totalPrice: parseFloat(product.price.replace('$', '')),
      };
      this.calculateTotalPrice(productWithQuantity);
      this.cart.push(productWithQuantity);
      this.cartSubject.next(this.cart);
    }
  }

  removeFromCart(id: string) {
    this.cart = this.cart.filter((item) => item.isbn13 !== id);
    this.cartSubject.next(this.cart);
  }

  getCartObservable(): Observable<BookInterface[]> {
    return this.cartSubject.asObservable();
  }

  updateProductQuantity(id: string, count: number) {
    const existingItem = this.cart.find((item) => item.isbn13 === id);
    if (existingItem && existingItem.quantity) {
      const newQuantity = existingItem.quantity + count;
      if (newQuantity >= 1) {
        existingItem.quantity = newQuantity;
        existingItem.totalPrice = this.calculateTotalPrice(existingItem);
      } else {
        const confirmRemoval = window.confirm(
          'Are you sure you want to remove this item from the cart?'
        );
        if (confirmRemoval) {
          this.removeFromCart(id);
        } else {
          return;
        }
      }
      this.calculateTotalPrice(existingItem);
    }
 
  }

  calculateTotalPrice(book: BookInterface): number {
    const totalPrice =
      book.price && book.quantity
        ? parseFloat(book.price.replace('$', '')) * book.quantity
        : 1;
    return +totalPrice.toFixed(2);
  }

 
getTotalPriceProducts(){
  const totalPrice:number = this.cart.reduce((acc, curr) => acc + (curr.totalPrice ?? 0), 0);
  const totalProducts:number = this.cart.reduce((acc, curr) => acc + (curr.quantity ?? 0), 0);
  return {totalPrice,totalProducts}
}
  getCartCount() {
    return this.cart.length;
  }
  getCart() {
    return this.cart;
  }

  getAllBooks() {
    return this.newBooks;
  }
}
