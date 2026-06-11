import React from 'react';
import ProductDetail from './ProductDetail';
import { PRODUCT_DETAILS } from '../data/productDetailsData';

const Product11 = () => {
  const product = PRODUCT_DETAILS.find((item) => item.id === 11);
  return <ProductDetail product={product} />;
};

export default Product11;
