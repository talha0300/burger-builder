import React from 'react';


const Footer = (props) =>
  (

      <div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Lettuce</div>
            {props.ingredients.Lettuce ? (
              <button class="BuildControl__Less__3X6hg" disabled=""
              onClick={() => props.onClickRemove('Lettuce')}>Less</button>
            ) : (
              <button class="BuildControl__Less__3X6hg" disabled={true}
              onClick={() => props.onClickRemove('Lettuce')}>Less</button>
            )}

            <button class="BuildControl__More__2eQpV"
            onClick={() => props.onClickAdd('Lettuce')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Bacon</div>
            {props.ingredients.Bacon ? (
              <button class="BuildControl__Less__3X6hg" disabled=""
              onClick={() => props.onClickRemove('Bacon')}>Less</button>
            ) : (
              <button class="BuildControl__Less__3X6hg" disabled={true}
              onClick={() => props.onClickRemove('Bacon')}>Less</button>
            )}
            <button class="BuildControl__More__2eQpV" onClick={() => props.onClickAdd('Bacon')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Cheese</div>
            {props.ingredients.Cheese ? (
              <button class="BuildControl__Less__3X6hg" disabled=""
              onClick={() => props.onClickRemove('Cheese')}>Less</button>
            ) : (
              <button class="BuildControl__Less__3X6hg" disabled={true}
              onClick={() => props.onClickRemove('Cheese')}>Less</button>
            )}
            <button class="BuildControl__More__2eQpV" onClick={() => props.onClickAdd('Cheese')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Meat</div>
            {props.ingredients.Meat ? (
              <button class="BuildControl__Less__3X6hg" disabled=""
              onClick={() => props.onClickRemove('Meat')}>Less</button>
            ) : (
              <button class="BuildControl__Less__3X6hg" disabled={true}
              onClick={() => props.onClickRemove('Meat')}>Less</button>
            )}
            <button class="BuildControl__More__2eQpV" onClick={() => props.onClickAdd('Meat')}>More</button>
        </div>
      </div>


    );



export default Footer
