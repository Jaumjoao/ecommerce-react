import { Link } from "react-router-dom";
import "./index.scss"

const ProductsCard = ({data}) => {
  console.log(data.title)
  return (
    <div className="home__card">
      <img src={data.imgPath} alt="model" />
      <div className="home__card-description">
        <p>{data.title}</p>
        <Link to={`/products/${data.id}`}>
          <button>Comprar Look</button>
          </Link>
      </div>
    </div>
  );
};

export default ProductsCard