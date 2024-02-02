import { Link } from "react-router-dom";

const Home = ({ products }) => {
  return (
    <div className="products_container">
      <h2>Home Page</h2>
      <p>Trending Products🔥</p>
      <div className="products">
        {products?.slice(0, 5).map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="product">
              <img src={product.image} alt="" />
              <h3>{product.title.substring(0, 15)}</h3>
            </div>
          </Link>
        ))}
      </div>
      <button>
        <Link to="/products">View All Products</Link>
      </button>
    </div>
  );
};
export default Home;
