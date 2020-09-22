import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { Provider,connect } from 'react-redux'
import { createStore } from 'redux';
import './index.css';

function AddRemoveIngredient(action,state){
  const ingredients = {...state}
  switch (action.type) {
    case "Add":
      switch (action.ingredient) {
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
        return ingredients
    case "Remove":
      switch (action.ingredient) {
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
        return ingredients
    default:
      return state


  }
}

const burgerReducer = function (state = {Lettuce :0,Bacon:0,Cheese:0,Meat:0}, action) {

      return AddRemoveIngredient(action,state)

};

let store = createStore(burgerReducer);





const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);




ReactDOM.render(<ReduxApp />, document.getElementById("root"));
