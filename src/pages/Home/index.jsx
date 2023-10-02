import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
function Page() {
  const dispatch = useDispatch();
  const createRandomProducts = (num = 10) => {
    return Array.from({ length: num }, () => {
      return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        img: faker.image.urlLoremFlickr({ category: "fashion" }),
        qty: 1,
        stock: 50,
      };
    });
  };

  const products = createRandomProducts();
  const addProduct = (item) => {
    dispatch({
      payload: item,
      type: "ADD_PRODUCT",
    });
  };

  return (
    <div>
      <Header />
      <section className="list-product">
        {products.map((item) => {
          return (
            <div className="card-container" key={item.id}>
              <div className="card">
                <img style={{ width: "100%" }} src={item.img} alt="icon" />
                <div>
                  <p className="card-name">{item.name}</p>
                  <p className="card-price">${item.price}</p>
                  <button className="card-btn" onClick={() => addProduct(item)}>
                    Add To Chart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Page;
