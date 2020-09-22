
import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header.js'
import {Burger} from './Burger.js'
import './index.css';
function Main(){
  return (

    <main class="Layout__Content__3KSp3">
      <div class="Modal__Modal__cd320" style={{transform: 'translateY(-100vh)'},{opacity: 0}}></div>

      <Burger />

    </main>


  );
}



function App(){
  return (
      <div>
        <Header />
        <Main />

      </div>


  );
}






ReactDOM.render(<App />, document.getElementById("root"));
