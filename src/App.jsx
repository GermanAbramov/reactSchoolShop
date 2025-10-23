import Categories from "./components/Categories/Categories.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer.jsx";
import Map from "./components/Map.jsx";

import popular_products_ from "./DB_imitation/popular.js";
import products_ from './DB_imitation/products.js';
import { useState } from "react";
import ShowFullProduct from "./components/ShowFullProduct/ShowFullProduct.jsx";

function App() {
  const [popularProducts] = useState(popular_products_);
  const [orders, setOrders] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('main');
  const [currentProducts, setCurrentProducts] = useState(products_);
  const [showFullProduct, setShowFullProduct] = useState(false);
  const [fullProduct, setFullProduct] = useState({});

  return (
    <div className="wrapper">
      <div className="page-wrapper">
        <div>{showCartModal && <div className='add-to-cart-modal'>Товар добавлен</div>}</div>
        <Header orders={orders} onDelete={deleteOrder} selectedTab={selectedTab} setSelectedTab={selectTab} />

        {showFullProduct && <ShowFullProduct product={fullProduct} onAdd={addToOrders}
          setShowFullProduct={setShowFullProduct} showModalCart={showModalCart} />}

        {(selectedTab === 'main') &&
          <main>
            <section className="popular-products-title">
              <h2>Популярные товары</h2>
              <p>Посмотрите, какие принадлежности покупают чаще всего</p>
            </section>
            <ProductsContainer products={popularProducts} onAdd={addToOrders} showModalCart={showModalCart}
              onShowProduct={onShowProduct} />
          </main>
        }

        {(selectedTab === 'catalogue') &&
          <main>
            <Categories chooseCategory={chooseCategory} />
            <section className="products">
              <ProductsContainer products={currentProducts} onAdd={addToOrders} showModalCart={showModalCart}
                onShowProduct={onShowProduct} />
            </section>
          </main>
        }

        {(selectedTab === 'about') &&
          <main>
            <section className="about">
              <h2>Наша команда.</h2>
              <p>Мы - команда энтузиастов, которые искренне верят, что учеба должна быть не только полезной, но и вдохновляющей. Наш магазин создан для того, чтобы помочь каждому ученику и студенту найти всё необходимое для успешного и комфортного обучения.</p>


              <h2>Наша миссия.</h2>
              <p>Мы стремимся сделать процесс подготовки к школе и учебе максимально приятным и удобным. В нашем ассортименте вы найдете качественные и яркие товары: от классических тетрадей и ручек до современных гаджетов и аксессуаров для творчества.</p>


              <h2>Почему выбирают нас?</h2>
              <ul>
                <li>Широкий ассортимент - мы тщательно подбираем товары, чтобы удовлетворить потребности учеников разных возрастов и интересов.</li>
                <li>Качество и надежность - работаем только с проверенными производителями, гарантируя долговечность и безопасность продукции.</li>
                <li>Доступные цены - предлагаем выгодные условия и регулярные акции, чтобы покупка школьных принадлежностей была доступной для каждой семьи.</li>
                <li>Удобство и сервис - заботимся о вашем времени: удобный онлайн-заказ, быстрая доставка и внимательная поддержка клиентов.</li>
              </ul>

              <h2>Наши ценности.</h2>
              <p>Мы верим, что правильные инструменты помогают раскрыть потенциал каждого ребенка. Поэтому мы не просто продаем товары - мы создаем атмосферу, в которой учеба становится увлекательным путешествием к знаниям и новым открытиям.</p>


              <h2>Спасибо, что выбираете нас! Вместе мы сделаем учебный год ярким и успешным!</h2>

            </section>
          </main>
        }

        {(selectedTab === 'contacts') &&
          <main>
            <section className="contacts">
              <div className="contacts-ontainer">
                <h2>Как нас найти</h2>
                <p>Проспект Мира, 102 с12</p>
                <p>Email: readyforschool@gmail.com</p>
                <p>Телефон: 8-800-333-23-05</p>
                <p>Контактное лицо: Степанов В. И.</p>
              </div>
              <Map />
            </section>
          </main>
        }
      </div>

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

  function selectTab(name) {
    setSelectedTab(name);
  }

  function chooseCategory(category) {
    if (category === 'all') {
      setCurrentProducts(products_)
      return
    }
    setCurrentProducts(products_.filter(el => el.category === category))
  }

  function onShowProduct(product) {
    setFullProduct(product)
    setShowFullProduct(!showFullProduct)
  }
}

export default App;
