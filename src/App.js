import { Route, Switch } from 'react-router';
import './App.css';
import BarcodePage from './pages/barcodePage/barcodePage';
import Homepage from './pages/homepage/homepage';
import QRCodePage from './pages/qrCodePage/qrCodePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/barcode" exact>
          <BarcodePage />
        </Route>
        <Route path="/qrCode" exact>
          <QRCodePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
