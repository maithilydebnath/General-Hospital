import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <PrivateRoute path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute> */}
          {/* <Route path="/login">
            <Login></Login>
          </Route> */}
          {/* <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
