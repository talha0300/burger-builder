
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'
import Main from './Main.js'
import './index.css';




function App(){
  return (
      <div>
        <Header />
        <Main />

      </div>


  );
}






ReactDOM.render(<App />, document.getElementById("root"));
