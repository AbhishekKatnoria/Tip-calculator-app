import React from "react";
import "./Form.css";
function Form({ bill, setBill, setPeopleValue,tipValue,setTipValue,people}) {
  function handleTipValue(e){
    setTipValue(e.target.value);
    console.log(tipValue);
   
  }
 
  
  return (
    <div className="form">
      <div className="lable-group">
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          id="bill"
          placeholder="$"
          className="cutom-bar"
          onChange={(e) => {
            setBill(e.target.value);
          }}
          value={bill}
        />
      </div>

      <div className="tip-section">
        <p className="tip-para"> Select Tip %</p>
        <div className="tip-amount">
          <button value="5" className="input-btn" onClick={handleTipValue}>5%</button>
        
          <button value="10" className="input-btn" onClick={handleTipValue}>
            10%
          </button>
          <button value="15" className="input-btn" onClick={handleTipValue}>
            15%
          </button>
          <button value="25" className="input-btn" onClick={handleTipValue}>
            25%
          </button>
          <button value="50" className="input-btn" onClick={handleTipValue}>
            50%
          </button>
          <input type="text" placeholder="Custom" className="tip-custom" onInput={handleTipValue}/>
        </div>
      </div>

      <div className="lable-group">
        <label htmlFor="Number of People">Number of People</label>
        <p className="error">{ people==0 ? "Can,t be zero" : ""}</p>
        <input 
          type="number"
          id="people"
          placeholder="👤"
          className="cutom-bar"
          onInput={(e) => {
            setPeopleValue(e.target.value);
          }}
          value={people}
        />
      </div>
    </div>
  );
}

export default Form;
