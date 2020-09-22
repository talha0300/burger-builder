import React from 'react';
import {Footer} from './Footer.js'

import {Lettuce,Bacon,Meat,Cheese} from './Ingredients.js'

class Burger extends React.Component {
  constructor(props) {
    super(props);

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
    const ingredients= {Lettuce:this.props.items.Lettuce,
      Bacon:this.props.items.Bacon,Cheese:this.props.items.Cheese,Meat:this.props.items.Meat}
    return Object.entries(ingredients).map(([key, value]) => this.MakeIngredient(key,value))
  }

  BurgerPrice(){
    const BasicPrice=8
    const LettucePrice=1
    const BaconPrice=2
    const CheesePrice=1
    const MeatPrice=3
    var price=8 + (this.props.items.Lettuce*LettucePrice) +(this.props.items.Bacon*BaconPrice)
    +(this.props.items.Cheese*CheesePrice)+(this.props.items.Meat*MeatPrice)

    return price


  }

  render(){

    const BurgerIndredients = this.BurgerIndredients()
    const Price=this.BurgerPrice()
    const ingredients= {Lettuce:this.props.items.Lettuce,
      Bacon:this.props.items.Bacon,Cheese:this.props.items.Cheese,Meat:this.props.items.Meat}
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

            onClickAdd={i => this.props.items.Add(i)}
            onClickRemove={i => this.props.items.Remove(i)}
            ingredients={ingredients}
          />


          <button class="BuildControls__OrderButton__1ScSk" disabled="">SIGN UP TO ORDER</button></div>
      </div>
    );
  }
}


export default Burger
