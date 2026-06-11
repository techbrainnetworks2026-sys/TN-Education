import React from 'react';
import ProductDetail from './ProductDetail';
import { PRODUCT_DETAILS } from '../data/productDetailsData';

const Product7 = () => {
  const product = PRODUCT_DETAILS.find((item) => item.id === 7);
  return <ProductDetail product={product} />;
};

export default Product7;
