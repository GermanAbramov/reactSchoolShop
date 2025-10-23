import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order/Order";

export default function Header(props) {

    let [isCartOpen, setIsCartOpen] = useState(false);
    let summa = 0;
    props.orders.forEach(el => {
        summa += Number.parseFloat(el.price * el.count)
    })


    return (
        <header>
            <section>
                <h1 className="logo" onClick={() => props.setSelectedTab('main')}>Готовимся к школе</h1>
                <div className="menu">
                    <FaShoppingCart className={`shop-cart-button ${isCartOpen && 'active'}`} onClick={() => { setIsCartOpen(!isCartOpen) }} />
                    <ul className="nav">
                        <li onClick={() => props.setSelectedTab('catalogue')}>Каталог</li>
                        <li onClick={() => props.setSelectedTab('about')}>О компании</li>
                        <li onClick={() => props.setSelectedTab('contacts')}>Контакты</li>
                    </ul>
                </div>
                {isCartOpen && (
                    <div className="shop-cart">
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </section>

            {(props.selectedTab === 'main') &&
                <section className="banner">
                    <div>
                        <h2>Готовьтесь к школе <br /> вместе с нами</h2>
                        <ul>
                            <li>Качественная продукция</li>
                            <li>Приятные и устойчивые цены</li>
                            <li>Разнообразный ассортимент</li>
                        </ul>
                    </div>
                </section>}

            {(props.selectedTab === 'catalogue') &&
                <section className="mini-banner">
                    <h2>Каталог</h2>
                </section>}

            {(props.selectedTab === 'about') &&
                <section className="mini-banner">
                    <h2>О нас</h2>
                </section>}

            {(props.selectedTab === 'contacts') &&
                <section className="mini-banner">
                    <h2>Контакты</h2>
                </section>}
        </header>
    )



    function showOrders(props) {
        return (
            <div>
                <div className="orders-container">
                    {props.orders.map(el => (
                        <Order onDelete={props.onDelete} key={el.id} product={el} />
                    ))}
                </div>
                <p className="summa">Сумма: {summa.toFixed(2)}₽</p>
            </div>
        )
    }

    function showNothing() {
        return (
            <div className="empty">
                <h2>Товаров нет </h2>
            </div>
        )
    }
}
