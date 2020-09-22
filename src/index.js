
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './burger-logo.png';


function Logo(){
  return (
    <div class="Toolbar__Logo__24rue">
      <div class="Logo__Logo__2A07e">
        <img src={logo} alt="BurgerBulder"/>
      </div>
    </div>
  );
}

function Toolbar(){
  return (
    <nav class="Toolbar__DesktopOnly__15Sc_">
      <ul class="NavigationItems__NavigationItems__3HY9i">
        <li class="NavigationItem__NavigationItem__3YSjr">
          <a aria-current="true" href="/" class="NavigationItem__active__2GQz1">Burger Builder</a>
        </li>
        <li class="NavigationItem__NavigationItem__3YSjr">
          <a aria-current="false" href="/auth">Login</a>
        </li>
      </ul>
    </nav>
  );
}

function Header(){
  return (
    <header class="Toolbar__Toolbar__2hkfg">
      <div class="DrawerToggle__DrawerToggle__1eThf">
      <div></div><div></div><div></div>
      </div>
      <Logo />
      <Toolbar />

    </header>

  );
}




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
    if (i==="Lettuce"){
      this.setState({
        Lettuce:this.state.Lettuce +1
      });
    }

    if (i==="Bacon"){
      this.setState({
        Bacon:this.state.Bacon +1
      });
    }

    if (i==="Cheese"){
      this.setState({
        Cheese:this.state.Cheese +1
      });
    }
    if (i==="Meat"){
      this.setState({
        Meat:this.state.Meat +1
      });
    }
    this.BurgerPrice();
  }
  Remove(i) {

    if (i==="Lettuce" && this.state.Lettuce){
      this.setState({
        Lettuce:this.state.Lettuce -1
      });
    }

    if (i==="Bacon" && this.state.Bacon){
      this.setState({
        Bacon:this.state.Bacon -1
      });
    }

    if (i==="Cheese" && this.state.Cheese){
      this.setState({
        Cheese:this.state.Cheese -1
      });
    }
    if (i==="Meat" && this.state.Meat){
      this.setState({
        Meat:this.state.Meat -1
      });
    }
    this.BurgerPrice();
  }



  BurgerIndredients(){
    var burger=[]
    for (var i=0;i<this.state.Lettuce;i++){
      burger.push(<Lettuce />)
    }
    for (var i=0;i<this.state.Bacon;i++){
      burger.push(<Bacon />)
    }
    for (var i=0;i<this.state.Cheese;i++){
      burger.push(<Cheese />)
    }
    for (var i=0;i<this.state.Meat;i++){
      burger.push(<Meat />)
    }
    return burger
  }

  BurgerPrice(){
    var price=8 + (this.state.Lettuce*1) +(this.state.Bacon*2)+(this.state.Cheese*1)+(this.state.Meat*3)

    return price


  }

  render(){
    return(
      <div>
          <div className="Burger__Burger__2h2kL">
            <div className="BurgerIngredient__BreadTop__2Pkwe">
            <div className="BurgerIngredient__Seeds1__2k2x7"></div>
            <div className="BurgerIngredient__Seeds2__9Mret"></div>
          </div>
          {this.BurgerIndredients()}
          <div className="BurgerIngredient__BreadBottom__2z9NQ"></div>
        </div>
        <div class="BuildControls__BuildControls__220uz">
          <p>Current price: <strong>{this.BurgerPrice()}</strong></p>
          <div class="BuildControl__BuildControl__ibcUQ">
            <div class="BuildControl__Label__2VLnR">Lettuce</div>

            <button class="BuildControl__Less__3X6hg" disabled="" onClick={() => this.Remove('Lettuce')}>Less</button>

            <button class="BuildControl__More__2eQpV"
          onClick={() => this.Add('Lettuce')}>More</button>
          </div>
          <div class="BuildControl__BuildControl__ibcUQ">
            <div class="BuildControl__Label__2VLnR">Bacon</div>
            <button class="BuildControl__Less__3X6hg" disabled="" onClick={() => this.Remove('Bacon')}>Less</button>
            <button class="BuildControl__More__2eQpV" onClick={() => this.Add('Bacon')}>More</button>
          </div>
          <div class="BuildControl__BuildControl__ibcUQ">
            <div class="BuildControl__Label__2VLnR">Cheese</div>
            <button class="BuildControl__Less__3X6hg" disabled="" onClick={() => this.Remove('Cheese')}>Less</button>
            <button class="BuildControl__More__2eQpV" onClick={() => this.Add('Cheese')}>More</button>
          </div>
          <div class="BuildControl__BuildControl__ibcUQ">
            <div class="BuildControl__Label__2VLnR">Meat</div>
            <button class="BuildControl__Less__3X6hg" disabled="" onClick={() => this.Remove('Meat')}>Less</button>
            <button class="BuildControl__More__2eQpV" onClick={() => this.Add('Meat')}>More</button>
          </div>
          <button class="BuildControls__OrderButton__1ScSk" disabled="">SIGN UP TO ORDER</button></div>
      </div>
    );
  }
}




function Lettuce(){
  return(
    <div class="BurgerIngredient__Lettuce__zoLnB"></div>
  );

}

function Bacon(){
  return(
    <div class="BurgerIngredient__Bacon__2RZZH"></div>
  );

}

function Cheese(){
  return(
    <div class="BurgerIngredient__Cheese__1eqwP"></div>
  );

}

function Meat(){
  return(
    <div class="BurgerIngredient__Meat__1LdrR"></div>
  );

}



class Footer extends React.Component {
  constructor(props) {
    super(props);

  }


  render(){

    return(
      <div>

      <div class="BuildControls__BuildControls__220uz">
        <p>Current price: <strong>$3.00</strong></p>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Lettuce</div>

          <button class="BuildControl__Less__3X6hg" disabled="" onClick={() => this.Remove('Lettuce')}>Less</button>

          <button class="BuildControl__More__2eQpV"
        onClick={() => this.Add('Lettuce')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Bacon</div>
          <button class="BuildControl__Less__3X6hg" disabled="" onClick={() => this.Remove('Bacon')}>Less</button>
          <button class="BuildControl__More__2eQpV" onClick={() => this.Add('Bacon')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Cheese</div>
          <button class="BuildControl__Less__3X6hg" disabled="" onClick={() => this.Remove('Cheese')}>Less</button>
          <button class="BuildControl__More__2eQpV" onClick={() => this.Add('Cheese')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Meat</div>
          <button class="BuildControl__Less__3X6hg" disabled="" onClick={() => this.Remove('Meat')}>Less</button>
          <button class="BuildControl__More__2eQpV" onClick={() => this.Add('Meat')}>More</button>
        </div>
        <button class="BuildControls__OrderButton__1ScSk" disabled="">SIGN UP TO ORDER</button></div>
      </div>

    );
  }
}

function Main(){
  return (

    <main class="Layout__Content__3KSp3">
      <div class="Modal__Modal__cd320" style={{transform: 'translateY(-100vh)'},{opacity: 0}}></div>

      <Burger />

    </main>


  );
}



function Body(){
  return (
      <div>
        <Header />
        <Main />

      </div>


  );
}






ReactDOM.render(<Body />, document.getElementById("root"));
