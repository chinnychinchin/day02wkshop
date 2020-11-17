import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart;
  @Output() removeItem = new EventEmitter<string>();
  constructor() { }

  onRemove($event) {
    this.removeItem.next($event.target.value)
  }

  ngOnInit(): void {
  }

}
