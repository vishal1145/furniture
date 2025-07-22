import React from 'react';
import ShopHero from './Hero';
import shopData from '../../data/shop.json';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import furnitureData from '../../data/furnitureData.json';
import Header from '../../components/Header';
import Features from '../../components/Features';
// import ProductDetails from '../Products/ProductDetails';



const Shop = () => (
  <div>
    <Navbar data={furnitureData.navigation} />
    <Header data={shopData} />
    <ShopHero data={shopData} />
    <Features data={furnitureData.features} />
    <Footer data={furnitureData.footer} />
    {/* <ProductDetails data={ProductDetails.productDetails}/> */}
  </div>
);

export default Shop;