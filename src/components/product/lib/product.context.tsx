import { ProductByService } from '@/types';
import React, { useState, createContext } from 'react';

interface ProductProvider {
  productByService: ProductByService | undefined;
  getProduct: () => void;
  updateProduct: (product: ProductByService) => void;
}

export const productContext = createContext<ProductProvider | undefined>(
  undefined
);

productContext.displayName = 'ProductContext';

export const useProduct = () => {
  const context = React.useContext(productContext);
  if (context === undefined) {
    throw new Error(`use Product must be used within a CartProvider`);
  }
  return context;
};

export const ProductProvider: React.FC = (props) => {
  const [product, setProduct] = useState<ProductByService>();
  console.log(product + 'HOLLA');

  const getProduct = () => {
    console.log('GET PRODUCT');
    console.log(product);
  };

  const updateProduct = (product: ProductByService) => {
    setProduct(product);
  };

  const value = {
    productByService: product,
    getProduct,
    updateProduct,
  };

  return <productContext.Provider value={value} {...props} />;
};
