import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Help from './help';
import Leftcontainer from './left_container';
import Headcontainer from './head_container';
import Footer from './footer';
import ProductDetail from "./ProductDetail"
import Cart from './cart'
import Calculator from './calculator'
import CheckoutStarter from './checkout-starter'
import Receipt from './receipt'

function App(props) {
  return (
    <Router>
      <bs.Container fluid className='min-vh-100 d-flex flex-column'>
        <bs.Row className='flex-grow-0 flex-shrink-0 shadow-sm'>
          <bs.Col >
            <Headcontainer />
          </bs.Col>
        </bs.Row>
        <bs.Row  className='flex-grow-1'>
          <bs.Col md='10'>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/help'>
                <Help />
              </Route>
              <Route path='/campaign/:pid'>
                <ProductDetail />
              </Route>
              <Route path="/cart">
                  <Cart />
              </Route>
              <Route path="/checkout-starter">
                  <CheckoutStarter />
              </Route>
              <Route path="/calculator">
                  <Calculator />
              </Route>
              <Route path="/receipt">
                  <Receipt />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </bs.Col>
        </bs.Row>
        <bs.Row className='flex-grow-0 flex-shrink-0 shadow-sm'>
          <bs.Col>
            <Footer />
          </bs.Col>
        </bs.Row>
      </bs.Container>
    </Router>
  );
}

export default App;
