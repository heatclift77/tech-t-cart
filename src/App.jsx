import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store";
import { createBrowserRouter } from "react-router-dom";

// pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="container">
            <RouterProvider router={router} />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
