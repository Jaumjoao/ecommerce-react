import React from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import HeaderMenu from '../../components/Header-menu/HeaderMenu';
import Search from '../../components/Search/Search';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const Products = ({data}) => {
  const {productId} = useParams();
  const selectedProduct = data.find((product) => product.id == productId);
  console.log(selectedProduct)
  

  return (
    <section className='products'>
      <HeaderMenu/>
      <Search/>
      <ProductDetail data={selectedProduct}/>
    </section>
  );
};

export default Products