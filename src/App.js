import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import BarcodePage from "./pages/barcodePage/barcodePage";
import Homepage from "./pages/homepage/homepage";
import QRCodePage from "./pages/qrCodePage/qrCodePage";

function App() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/barcode" exact>
          <BarcodePage
            isBtnDisabled={isBtnDisabled}
            setIsBtnDisabled={setIsBtnDisabled}
          />
        </Route>
        <Route path="/qrCode" exact>
          <QRCodePage
          // isBtnDisabled={isBtnDisabled}
          // setIsBtnDisabled={setIsBtnDisabled}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
