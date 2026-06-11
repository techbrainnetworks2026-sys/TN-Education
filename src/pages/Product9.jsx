import React from 'react';
import ProductDetail from './ProductDetail';
import { PRODUCT_DETAILS } from '../data/productDetailsData';

const Product9 = () => {
  const product = PRODUCT_DETAILS.find((item) => item.id === 9);
  return <ProductDetail product={product} />;
};

export default Product9;
