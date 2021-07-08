import React, { Component } from "react";
import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"

class App extends Component {
  constructor() {
    super()
    this.state = {
      groceryItems: [
        { id: 1, amount: 0, title: "Melk" },
        { id: 2, amount: 0, title: "Kaas" },
        { id: 3, amount: 0, title: "Koffie" },
        { id: 4, amount: 0, title: "Eieren" },
        { id: 5, amount: 0, title: "Pils" },
        { id: 6, amount: 0, title: "Tomaten" },
        { id: 7, amount: 0, title: "Appels" },
        { id: 8, amount: 0, title: "Gehakt" },
        { id: 9, amount: 0, title: "Meer Pils" },
        { id: 10, amount: 1, title: "Broccoli" },
        { id: 11, amount: 1, title: "Kwark" },
        { id: 12, amount: 1, title: "Chips" }
      ],
      shoppingListItems: [

      ]
    }
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.emptyCart = this.emptyCart.bind(this)
    this.addGrocery = this.addGrocery.bind(this)
  }

  handleClickGroceryItem(id) {
    this.setState(prevState => {
      const prev = prevState.shoppingListItems.map(item => item.id)
      if (prev.includes(id)) {
        const updatedShoppingList = prevState.shoppingListItems.map(item => {
          if (item.id === id) {
            // Was eerst += 1, maar op die manier kwam er steeds 2 bij per click, voor de grap op 0.5 gezet en dat werkt perfect, niet ideaal.
            item.amount += 0.5
            return item
          } else {
            return item
          }
        })
        return {
          shoppingListItems: updatedShoppingList
        }
      }
      else {
        let newShoppingItem = prevState.groceryItems.filter(item => item.id === id)
        newShoppingItem[0].amount = 1
        const updatedShoppingList = prevState.shoppingListItems.concat(newShoppingItem)
        return {
          shoppingListItems: updatedShoppingList
        }
      }
    })
  }






  emptyCart() {
    this.setState({
      shoppingListItems: []
    })
  }

  addGrocery(event) {
    event.preventDefault()
    const input = document.getElementById('input-groceries').value
    this.setState(prevState => {
      const updatedGroceryItems = prevState.groceryItems.concat({ id: Math.floor(Math.random() * 100000), amount: 0, title: input })
      return {
        groceryItems: updatedGroceryItems
      }
    })
  }

  render() {
    return (
      <div className="container" >
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
