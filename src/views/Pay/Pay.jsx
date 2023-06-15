import Header from "../../components/Header/Header"
import { Link, useParams } from "react-router-dom"
import "./index.scss";

const Pay = ({data}) => {
  const {payId} = useParams();
  const selectProduct = data.find((product) => product.id == payId);

  return (
    <div>
      <Header/>
      <div className="pay-detail">
        <div className="pay-detail__left-side">
          <form action="" className="pay-detail__form">
            <div className="pay-detail__input-wrepper">
              <label htmlFor="name">Nome:</label>
              <input type="text" placeholder="Nome completo" id="name" className="pay-detail__input-name"/>
              <label htmlFor="name">Endereço de entrega:</label>
              <input type="text" placeholder="Entrega" id="entrega"/>
            </div>
            <div className="pay-detail__format">
              <h2>Forma de Pagamento:</h2>
              <div className="pay-detail__pix">
                <input type="checkbox" id="pix" name="format" />
                <label htmlFor="pix">Pix</label>
              </div>
              <div className="pay-detail__boleto">
                <input type="checkbox" id="boleto" name="format" />
                <label htmlFor="boleto">Boleto</label>
              </div>
              <div className="pay-detail__credt-card">
                <input type="checkbox" id="credt-card" name="format" />
                <label htmlFor="credt-card">Cartão de crédito</label>
              </div>
            </div>

            <button type="submit">
              <Link to={"/home"}>Enviar Pedido</Link>
            </button>
          </form>
        </div>
        <div className="pay-detail__right-side">
          <h1>Resumo do Pedido:</h1>
          <div className="pay-detail__product-price">
            <div className="pay-detail__description">Produtos (1):</div>
            <h1>{selectProduct.price}</h1>
          </div>
          <div className="pay-detail__product-total">
            <div className="pay-detail__description">Total:</div>
            <h1>{selectProduct.price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay