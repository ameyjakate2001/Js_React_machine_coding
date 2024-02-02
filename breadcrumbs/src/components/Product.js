import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, []);

  return (
    <div className="product_details">
      <div className="visual-section">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="data-section">
        <span className="chip">{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div>
          {product.rating?.rate}⭐ out of {product.rating?.count}
        </div>
      </div>
    </div>
  );
};

export default Product;
