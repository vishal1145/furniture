import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductDetails from "./pages/Products/ProductDetails";
import Cart from "./pages/Cart/Cart"
import Checkout from './pages/Checkout/Checkout';
import Payment from './pages/Payment/Payment';
import ContactUs from './pages/Contact/ContactUs';
import Wishlist from './pages/Wishlist/Wishlist';
import FAQ from './pages/FAQ/Faq';
import About from './pages/About/AboutUs'
import TrackOrder from './pages/Trackorder/TrackOrder';
import TrackResults from './pages/Trackorder/TrackResults';
import OrderCompleted from './pages/Payment/OrderComplted';
import Blog from './pages/Blogs/Blog';
import BlogDetails from './pages/Blogs/BlogDetails';
import MyAccount from './pages/MyAccount/MyAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:type/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/trackorder" element={<TrackOrder/>}/>
        <Route path="/track-results" element={<TrackResults/>}/>
        <Route path="/ordercomplted" element={<OrderCompleted/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogdetails/:slug" element={<BlogDetails />} />
        <Route path="/myaccount" element={<MyAccount/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;