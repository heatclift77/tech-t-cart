import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
function Page() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const deleteProduct = (item) => {
    dispatch({
      payload: {
        id: item.id,
      },
      type: "DELETE_PRODUCT",
    });
  };

  const addQty = (item) => {
    if (item.qty !== item.stock) {
      dispatch({
        payload: {
          id: item.id,
        },
        type: "ADD_QTY_PRODUCT",
      });
    }
  };

  const subsQty = (item) => {
    if (item.qty > 1) {
      dispatch({
        payload: {
          id: item.id,
        },
        type: "SUBS_QTY_PRODUCT",
      });
    }
  };

  const totalPrice = useMemo(() => {
    let result = 0;
    products.forEach((item) => {
      result += item.subTotal;
    });

    return result;
  }, [products]);

  return (
    <div>
      <Header />
      <div>
        {products?.map((item) => {
          return (
            <div key={item.id} className="card-cart-container">
              <div className="card-cart">
                <button
                  className="btn-remove"
                  onClick={() => deleteProduct(item)}
                >
                  x
                </button>
                <div>
                  <img src={item.img} alt="picture" />
                </div>
                <div>
                  <p className="card-cart-name">{item.name}</p>
                  <div className="d-flex justify-between">
                    <p className="card-cart-price">${item.subTotal}</p>
                    <p className="card-cart-stock">Stock: {item.stock}</p>
                  </div>
                  <div className="card-cart-btn-container">
                    <button
                      className="card-cart-btn"
                      onClick={() => addQty(item)}
                    >
                      +
                    </button>
                    <p>{item.qty}</p>
                    <button
                      className="card-cart-btn"
                      onClick={() => subsQty(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <footer className="price-box">
        <div>
          <p className="">Total Harga</p>
          <p className="total-price">${totalPrice}</p>
        </div>
        <button className="btn-buy">Beli</button>
      </footer>
    </div>
  );
}

export default Page;
