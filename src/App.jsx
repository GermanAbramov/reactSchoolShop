import Footer from "./components/Footer";
import Header from "./components/Header";
import PopularProducts from "./components/ProductsContainer/PopularProducts.jsx";
import popular_products from "./DB_imitation/popular.js";
import { useState } from "react";

function App() {
  const [popularProducts] = useState(popular_products);
  const [orders, setOrders] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <div className="wrapper">
      <div>{showCartModal && <div className='add-to-cart-modal'>Товар добавлен</div>}</div>
      <div className="page-wrapper">
        <Header orders={orders} onDelete={deleteOrder} />
        <main>
          <section className="popular-products-title">
            <h2>Популярные товары</h2>
            <p>Посмотрите, какие принадлежности покупают чаще всего</p>
          </section>
          <PopularProducts popularProducts={popularProducts} onAdd={addToOrders} showModalCart={showModalCart} />
        </main>
      </div>

      {/* Компонент уведомления при добавлении товара находится в подвале */}

      <Footer />
    </div >
  );



  function deleteOrder(id) {
    setOrders(orders.filter(el => el.id !== id))
  }

  function addToOrders(item) {
    setOrders(prevOrders => {

      const index = prevOrders.findIndex(order => order.id === item.id);

      if (index === -1) {
        return [...prevOrders, item];
      } else {
        const updatedOrders = [...prevOrders];
        updatedOrders[index] = {
          ...updatedOrders[index],
          count: updatedOrders[index].count + item.count
        };
        return updatedOrders;
      }
    });
  }

  function showModalCart() {
    if (showCartModal) return
    setShowCartModal(!showCartModal);
    setTimeout(() => {
      setShowCartModal(false);
    }, 2000);
  }
}

export default App;
