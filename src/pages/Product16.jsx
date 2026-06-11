import React from 'react';
import ProductDetail from './ProductDetail';
import { PRODUCT_DETAILS } from '../data/productDetailsData';

const Product16 = () => {
  const product = PRODUCT_DETAILS.find((item) => item.id === 16);
  return <ProductDetail product={product} />;
};

export default Product16;
