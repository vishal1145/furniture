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
import Faq from './pages/FAQ/Faq.jsx';
// import FAQ from './pages/Home/FAQ';
import About from './pages/About/AboutUs'
import TrackOrder from './pages/Trackorder/TrackOrder';
import TrackResults from './pages/Trackorder/TrackResults';
import OrderCompleted from './pages/Payment/OrderComplted';
import Blog from './pages/Blogs/Blog';
import BlogDetails from './pages/Blogs/BlogDetails';
import MyAccount from './pages/MyAccount/MyAccount';
import Terms from './pages/Terms&Conditions/Terms.jsx';
import Privacy from './pages/Privacy/privacy.jsx';
import RefundPolicy from './pages/Refund/RefundPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:type/product-details/:id" element={<ProductDetails />} />
        {/* Add this simpler route */}
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/trackorder" element={<TrackOrder/>}/>
        <Route path="/track-results" element={<TrackResults/>}/>
        <Route path="/ordercomplted" element={<OrderCompleted/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogdetails/:slug" element={<BlogDetails />} />
        <Route path="/myaccount" element={<MyAccount/>}/>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path='/RefundPolicy' element={<RefundPolicy/>} />
      </Routes>
    </Router>
  );
}

export default App;