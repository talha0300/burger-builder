import React from 'react';
import {Footer} from './Footer.js'

import {Lettuce,Bacon,Meat,Cheese} from './Ingredients.js'

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Lettuce :0,
      Bacon:0,
      Cheese:0,
      Meat:0
    };
  }

  Add(i) {
    const ingredients = {...this.state}
    switch (i) {
      case "Lettuce":
        ingredients.Lettuce=ingredients.Lettuce +1
        break;
      case "Bacon":
        ingredients.Bacon=ingredients.Bacon +1
        break;
      case "Cheese":
          ingredients.Cheese=ingredients.Cheese +1
        break;
      case "Meat":
        ingredients.Meat=ingredients.Meat +1
        break;
      }
    this.setState({
      Lettuce:ingredients.Lettuce,
      Bacon:ingredients.Bacon,
      Cheese:ingredients.Cheese,
      Meat:ingredients.Meat
    });
    this.BurgerPrice();
  }
  Remove(i) {
    const ingredients = {...this.state}
    switch (i) {
      case "Lettuce":
        ingredients.Lettuce=ingredients.Lettuce -1
        break;
      case "Bacon":
        ingredients.Bacon=ingredients.Bacon -1
        break;
      case "Cheese":
          ingredients.Cheese=ingredients.Cheese -1
        break;
      case "Meat":
        ingredients.Meat=ingredients.Meat -1
        break;
      }
    this.setState({
      Lettuce:ingredients.Lettuce,
      Bacon:ingredients.Bacon,
      Cheese:ingredients.Cheese,
      Meat:ingredients.Meat
    });

    this.BurgerPrice();
  }

  MakeIngredient(key,value){
    let ingredients=[]
    switch (key) {
      case "Lettuce":
        ingredients=Array.from({length:value},(v,k)=>k+1).map(x => <Lettuce />)
        break;
      case "Bacon":
        ingredients=Array.from({length:value},(v,k)=>k+1).map(x => <Bacon />)
        break;
      case "Cheese":
        ingredients=Array.from({length:value},(v,k)=>k+1).map(x => <Cheese />)
        break;
      case "Meat":
        ingredients=Array.from({length:value},(v,k)=>k+1).map(x => <Meat />)
        break;
      }

    return ingredients
  }

  BurgerIndredients(){
    return Object.entries(this.state).map(([key, value]) => this.MakeIngredient(key,value))
  }

  BurgerPrice(){
    const BasicPrice=8
    const LettucePrice=1
    const BaconPrice=2
    const CheesePrice=1
    const MeatPrice=3
    var price=8 + (this.state.Lettuce*LettucePrice) +(this.state.Bacon*BaconPrice)
    +(this.state.Cheese*CheesePrice)+(this.state.Meat*MeatPrice)

    return price


  }

  render(){
    const BurgerIndredients = this.BurgerIndredients()
    const Price=this.BurgerPrice()
    return(
      <div>
          <div className="Burger__Burger__2h2kL">
            <div className="BurgerIngredient__BreadTop__2Pkwe">
              <div className="BurgerIngredient__Seeds1__2k2x7"></div>
              <div className="BurgerIngredient__Seeds2__9Mret"></div>
            </div>
          {BurgerIndredients}
          <div className="BurgerIngredient__BreadBottom__2z9NQ"></div>
        </div>
        <div class="BuildControls__BuildControls__220uz">
          <p>Current price: <strong>{Price}</strong></p>
          <Footer

            onClickAdd={i => this.Add(i)}
            onClickRemove={i => this.Remove(i)}
            ingredients={this.state}
          />


          <button class="BuildControls__OrderButton__1ScSk" disabled="">SIGN UP TO ORDER</button></div>
      </div>
    );
  }
}


export {Burger}
