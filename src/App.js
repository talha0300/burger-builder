import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'

import {Header} from './Header.js'
import Burger from './Burger.js'



function Main(props){
  return (

    <main class="Layout__Content__3KSp3">
      <div class="Modal__Modal__cd320" style={{transform: 'translateY(-100vh)'},{opacity: 0}}></div>

      <Burger items={props.items}/>

    </main>


  );
}



function App(props){
  console.log(props);
  return (
      <div>
        <Header />
        <Main items={props} />

      </div>


  );
}

const addIngredient = (ingredient) => {
  return {
    type: "Add",
    ingredient: ingredient
  }
};

const removeIngredient = (ingredient) => {
  return {
    type: "Remove",
    ingredient: ingredient
  }
};


const mapStateToProps = state => {
  return {
    Lettuce: state.Lettuce,
    Bacon:state.Bacon,
    Cheese:state.Cheese,
    Meat:state.Meat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Add: (i) => {
       dispatch(addIngredient(i))
    },
    Remove: (i) => {
       dispatch(removeIngredient(i))
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
