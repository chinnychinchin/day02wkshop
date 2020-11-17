import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day02wkshop';
  inventory = [{item: 'Apples', imgUrl: "assets/apple.png"},{item: 'Oranges', imgUrl: "assets/orange.png"},{item: 'Pears', imgUrl: "assets/pear.png"}, {item: "Grapes", imgUrl: "assets/grape.png"}]

  cart = this.inventory.map(item => {return { item: item.item, count: 0 } }); //initialize cart 
  //cart = [{item: 'Apples', count: 0}, { }, { }]

  pushToCart($event) {
   
    const index = this.cart.findIndex(x => x.item == $event);
    const itemCount = this.cart[index].count;
    this.cart[index] = {item: $event, count: itemCount+1}; 
       
  }

  removeItem($event) {
    const index = this.cart.findIndex(x => x.item == $event);
    this.cart[index] = {item: $event, count: 0};
  }
  
}
