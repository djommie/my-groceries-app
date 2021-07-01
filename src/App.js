import React, { Component } from "react";
import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"

class App extends Component {
  constructor() {
    super()
    this.state = {
      groceryItems: [
        { id: 1, title: "Melk" },
        { id: 2, title: "Kaas" },
        { id: 3, title: "Koffie" },
        { id: 4, title: "Eieren" },
        { id: 5, title: "Pils" },
        { id: 6, title: "Tomaten" },
        { id: 7, title: "Appels" },
        { id: 8, title: "Gehakt" },
        { id: 9, title: "Meer Pils" }
      ],
      shoppingListItems: [
        { id: 10, title: "Broccoli" },
        { id: 11, title: "Kwark" },
        { id: 12, title: "Chips" }
      ]
    }
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
  }

  handleClickGroceryItem() {
    alert('handleClickGroceryItem')
  }

  render() {
    return (
      <div>
        <GroceryList
          groceryItems={this.state.groceryItems}
          handleClick={this.handleClickGroceryItem}
        />
        <ShoppingCart
          ShoppingItems={this.state.shoppingListItems}
        />
      </div>
    );
  }
}
export default App;
