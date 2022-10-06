import React from "react";
import products from "../../data/products";
import "./Products.css";

export default (props) => {
  function getProducts() {
    return products.map((product, i) => {
      return (
        <tr className={i % 2 == 0 ? "even" : "odd"} key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>R$ {product.price.toFixed(2)}</td>
        </tr>
      );
    });
  }

  return (
    <div className="products-table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{getProducts()}</tbody>
      </table>
    </div>
  );
};
