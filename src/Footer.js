import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);

  }


  render(){

    return(

      <div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Lettuce</div>
            {this.props.ingredients.Lettuce ? (
              <button class="BuildControl__Less__3X6hg" disabled=""
              onClick={() => this.props.onClickRemove('Lettuce')}>Less</button>
            ) : (
              <button class="BuildControl__Less__3X6hg" disabled={true}
              onClick={() => this.props.onClickRemove('Lettuce')}>Less</button>
            )}

            <button class="BuildControl__More__2eQpV"
            onClick={() => this.props.onClickAdd('Lettuce')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Bacon</div>
            {this.props.ingredients.Bacon ? (
              <button class="BuildControl__Less__3X6hg" disabled=""
              onClick={() => this.props.onClickRemove('Bacon')}>Less</button>
            ) : (
              <button class="BuildControl__Less__3X6hg" disabled={true}
              onClick={() => this.props.onClickRemove('Bacon')}>Less</button>
            )}
            <button class="BuildControl__More__2eQpV" onClick={() => this.props.onClickAdd('Bacon')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Cheese</div>
            {this.props.ingredients.Cheese ? (
              <button class="BuildControl__Less__3X6hg" disabled=""
              onClick={() => this.props.onClickRemove('Cheese')}>Less</button>
            ) : (
              <button class="BuildControl__Less__3X6hg" disabled={true}
              onClick={() => this.props.onClickRemove('Cheese')}>Less</button>
            )}
            <button class="BuildControl__More__2eQpV" onClick={() => this.props.onClickAdd('Cheese')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Meat</div>
            {this.props.ingredients.Meat ? (
              <button class="BuildControl__Less__3X6hg" disabled=""
              onClick={() => this.props.onClickRemove('Meat')}>Less</button>
            ) : (
              <button class="BuildControl__Less__3X6hg" disabled={true}
              onClick={() => this.props.onClickRemove('Meat')}>Less</button>
            )}
            <button class="BuildControl__More__2eQpV" onClick={() => this.props.onClickAdd('Meat')}>More</button>
        </div>
      </div>


    );
  }
}

export {Footer}
