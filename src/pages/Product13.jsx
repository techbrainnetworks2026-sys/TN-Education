import React from 'react';
import ProductDetail from './ProductDetail';
import { PRODUCT_DETAILS } from '../data/productDetailsData';

const Product13 = () => {
  const product = PRODUCT_DETAILS.find((item) => item.id === 13);
  return <ProductDetail product={product} />;
};

export default Product13;
