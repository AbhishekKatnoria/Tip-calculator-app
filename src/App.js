import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import "@fontsource/ibm-plex-mono";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/400-italic.css";
import { useEffect, useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [people, setPeopleValue] = useState("");
  const [calculateTip, setCalculateTip] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  useEffect(() => {
    if (bill > 0 && tipValue > 0 && people > 0) {
      setCalculateTip(bill * (tipValue / 100));
      setTotalTip(calculateTip + parseInt(bill));
    }
  }, [bill, people, tipValue, calculateTip]);

  function handleResetBtn(e) {
   setBill("");
   setTipValue("");
   setPeopleValue("");
   setCalculateTip(0);
   setTotalTip(0)

  }
  return (
    <div className="container-box">
      <div className="heading-first">
        <h1>SPIT </h1>
        <h1>TTER</h1>
      </div>

      <div className="container-sec">
        <Form
          bill={bill}
          setBill={setBill}
          tipValue={tipValue}
          setTipValue={setTipValue}
          people={people}
          setPeopleValue={setPeopleValue}
        />
        <Display
          calculateTip={calculateTip}
          totalTip={totalTip}
          handleResetBtn={handleResetBtn}
          people={people}
        />
      </div>
    </div>
  );
}

export default App;

