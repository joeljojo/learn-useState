import "./App.css";
import { useState } from "react";
import { productList } from "./Data";
function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let product = productList[index];

  function handleClickNext() {
    setIndex(index + 1);
  }

  function handleClickShowMore() {
    setShowMore(!showMore);
  }
  // preventout of index error
  // Start again when you get last product

  return (
    <div className="product-card">
      <button onClick={handleClickNext}>Next</button>
      <h3>
        {index + 1} of {productList.length}
      </h3>
      <img
        src={product.thumbnail}
        alt={product.title}
        width={100}
        height={100}
      />
      <h2>{product.title}</h2>
      <button onClick={handleClickShowMore}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && (
        <>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Discount: {product.discountPercentage}</p>
        </>
      )}
    </div>
  );
}

export default App;
