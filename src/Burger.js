import React from 'react';
import Footer from './Footer.js'

import {Lettuce,Bacon,Meat,Cheese} from './Ingredients.js'


const BASEPRICE = 8
const LETTUCEPRICE = 1
const BACONPRICE = 2
const CHEESEPRICE = 1
const MEATPRICE = 3

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

  Add(ingredient) {
    let {Lettuce, Bacon, Cheese, Meat} = this.state;
    switch (ingredient) {
      case "Lettuce":
        Lettuce=Lettuce +1
        break;
      case "Bacon":
        Bacon=Bacon +1
        break;
      case "Cheese":
        Cheese=Cheese +1
        break;
      case "Meat":
        Meat=Meat +1
        break;
      }
    this.setState({
      Lettuce:Lettuce,
      Bacon:Bacon,
      Cheese:Cheese,
      Meat:Meat
    });
    this.BurgerPrice();
  }
  Remove(ingredient) {
    let {Lettuce, Bacon, Cheese, Meat} = this.state;
    switch (ingredient) {
      case "Lettuce":
        Lettuce=Lettuce -1
        break;
      case "Bacon":
        Bacon=Bacon -1
        break;
      case "Cheese":
        Cheese=Cheese -1
        break;
      case "Meat":
        Meat=Meat -1
        break;
      }
    this.setState({
      Lettuce:Lettuce,
      Bacon:Bacon,
      Cheese:Cheese,
      Meat:Meat
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
    var price=BASEPRICE + (this.state.Lettuce*LETTUCEPRICE) +(this.state.Bacon*BACONPRICE)
    +(this.state.Cheese*CHEESEPRICE)+(this.state.Meat*MEATPRICE)

    return price


  }

  render(){
    const [BurgerIndredients,Price] = [this.BurgerIndredients(),this.BurgerPrice()]
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

            onClickAdd={ingredient => this.Add(ingredient)}
            onClickRemove={ingredient => this.Remove(ingredient)}
            ingredients={this.state}
          />


          <button class="BuildControls__OrderButton__1ScSk" disabled="">SIGN UP TO ORDER</button></div>
      </div>
    );
  }
}


export default Burger
