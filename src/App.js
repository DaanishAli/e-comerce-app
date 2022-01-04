
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nabvbar from './Components/Nabvbar'
import Products from './Components/Products'
import ProductsContaxtProvider from './Global/ProductsContaxtProvider'
import NotFound from './Components/NotFound'
import Cart from './Components/Cart'
import CartContaxtProvider from './Global/CartContaxt'

function App() {
  return (
    <div >
      <ProductsContaxtProvider>
        <CartContaxtProvider>
          <Router>
            <Nabvbar />
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/cart" component={Cart} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </CartContaxtProvider>
      </ProductsContaxtProvider>
    </div>
  );
}

export default App;
