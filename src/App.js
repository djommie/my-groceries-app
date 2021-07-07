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
    this.emptyCart = this.emptyCart.bind(this)
    this.addGrocery = this.addGrocery.bind(this)
  }

  handleClickGroceryItem(id) {
    this.setState(prevState => {
      const newShoppingItem = prevState.groceryItems.filter(item => item.id === id)
      const updatedShoppingList = prevState.shoppingListItems.concat(newShoppingItem)
      const updatedGroceryItems = prevState.groceryItems.filter(item => item.id !== id)
      return {
        groceryItems: updatedGroceryItems,
        shoppingListItems: updatedShoppingList
      }
    })
  }

  emptyCart() {
    this.setState({
      shoppingListItems: []
    })
  }

  addGrocery(event) {
    alert(event.target.value)
    // this.setState(prevState => {
    //   const updatedGroceryList = prevState.groceryList += { id: 99, title: input }
    //   return {
    //     groceryList: updatedGroceryList
    //   }
    // }
    // )
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addGrocery}>
          <input
            name="input-groceries"
            placeholder="Test addGrocery"
          />
        </form>
        <GroceryList
          groceryItems={this.state.groceryItems}
          handleClick={this.handleClickGroceryItem}
          addGrocery={this.addGrocery}
        />
        <ShoppingCart
          ShoppingItems={this.state.shoppingListItems}
          handleClick={this.handleClickGroceryItem}
          emptyCart={this.emptyCart}
        />
      </div >
    );
  }
}
export default App;
