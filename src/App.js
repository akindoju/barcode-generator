import { Route, Switch } from 'react-router';
import './App.css';
import Barcode from './pages/barcode/barcode';
import Homepage from './pages/homepage/homepage';
import QRCode from './pages/qrCode/qrCode';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/barcode" exact>
          <Barcode />
        </Route>
        <Route path="/qrCode" exact>
          <QRCode />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
