import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() inventory;
  @Output() updateCart = new EventEmitter<string> ();
  appleCount:number = 0;
  orangeCount:number = 0;
  pearCount:number = 0;

  constructor() { }

  onAdd($event) {
    //console.log($event.target.value);
    this.updateCart.next($event.target.value);
  }



  ngOnInit(): void {
  }

}
