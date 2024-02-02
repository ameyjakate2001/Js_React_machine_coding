import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="products_container">
      <h2>Products Page</h2>
      <div className="products">
        {products?.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="product">
              <img src={product.image} alt="" />
              <h3>{product.title.substring(0, 15)}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
