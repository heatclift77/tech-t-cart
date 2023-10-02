import cart from "../assets/shopping_cart_black_24dp.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
function Header() {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.products);

  const productCount = useMemo(() => {
    let counter = 0;
    cartProducts.forEach((item) => {
      counter += item.qty;
    });

    return counter;
  }, [cartProducts]);
  return (
    <header>
      <h1>Tokoku.</h1>
      <button className="cart" onClick={() => navigate("/cart")}>
        <img width="28px" height="28px" src={cart} alt="icon" />
        <div className="counter">{productCount}</div>
      </button>
    </header>
  );
}

export default Header;
