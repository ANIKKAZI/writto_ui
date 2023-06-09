import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './component/Home';
import { About } from './component/About';
import { OrderSummary } from './component/OrderSummary';
import { NoMatch } from './component/NoMatch';
import { Products } from './component/Products';
import { FeaturedPrducts } from './component/FeaturedPrducts';
import { NewProducts } from './component/NewProducts';
import { Navigation } from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './component/Contact';

function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route> 
        <Route path='orders' element={<OrderSummary/>}>  
        </Route> 
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedPrducts/>}></Route> 
          <Route path='featured' element={<FeaturedPrducts/>}></Route> 
          <Route path='new' element={<NewProducts/>}></Route>
        </Route> 
        <Route path='contact' element= {<Contact/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route> 
      </Routes>
    </>
  );
}

export default App;
