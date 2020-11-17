import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory = [{item: 'Apples', imgUrl: "assets/apple.png"},{item: 'Oranges', imgUrl: "assets/orange.png"},{item: 'Pears', imgUrl: "assets/pear.png"}]
  appleCount:number = 0;
  orangeCount:number = 0;
  pearCount:number = 0;

  constructor() { }

  onAdd($event) {
    console.log($event.target.value)
    switch($event.target.value) {
      case 'Apples': 
        this.appleCount += 1;
        break;
      case 'Oranges': 
        this.orangeCount += 1
        break;
      case 'Pears': 
        this.pearCount += 1;
        break;
    }
  }

  removeItem($event) {
    console.log($event.target.value)
    switch($event.target.value) {
      case 'Apples': 
        this.appleCount = 0;
        break;
      case 'Oranges': 
        this.orangeCount = 0;
        break;
      case 'Pears': 
        this.pearCount = 0;
        break;
    }
  }

  ngOnInit(): void {
  }

}
