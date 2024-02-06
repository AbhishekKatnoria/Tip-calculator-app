import React from "react";
import './Display.css'
function Tip({calculateTip,totalTip,people,handleResetBtn}) {

  const returnCurrencyAmt =(amt) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'}).format(amt);
  
  return (
    <div className="display-row">
      <div className="display-container">
        <div className="display-lable">
          <p className="header">Tip Amount</p>
          <p className="unit">/Person</p>
        </div>
        <div className="display-amt"> { returnCurrencyAmt(`${(calculateTip && people >0)?calculateTip/people:"0"}`)}</div>
      </div>
      <div className="display-container">
        <div className="display-lable">
          <p className="header">Total</p>
          <p className="unit">/Person</p>
        </div>
        <div className="display-amt">
          {returnCurrencyAmt(`${(totalTip && people >0) ? totalTip/people :  "00"}`)}
        </div>
      </div>
      <button className="reset-btn" onClick={handleResetBtn}>RESET</button>
      
    </div>
  );
}

export default Tip;
