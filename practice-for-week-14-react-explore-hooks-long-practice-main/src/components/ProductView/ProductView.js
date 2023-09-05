import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'
import { useEffect, useState } from 'react';

function ProductView({ products }) {
  const [selectedProduct, setSelectedProduct] = useState();

  // Because sidePanelOpen is stored as a string, it will be
  // "truthy" even when "false" (as well as "true")
  const [sideOpen, setSideOpen] = useState(
    localStorage.getItem('sidePanelOpen') !== "false"
  );

  useEffect(() => {
    console.log(`selectedProduct CHANGED TO`, selectedProduct);
    if (selectedProduct)
      setSideOpen(true);
  }, [selectedProduct]);


  useEffect(() => {
    console.log(`sideOpen CHANGED TO`, sideOpen);
    localStorage.setItem('sidePanelOpen', sideOpen);
    if (!sideOpen)
      setSelectedProduct();
  }, [sideOpen]);
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={selectedProduct && selectedProduct.id === item.id}
              onClick={() => setSelectedProduct(item)}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
            onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;