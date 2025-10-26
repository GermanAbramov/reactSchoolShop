import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order/Order";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";

export default function Header(props) {

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false);
    let summa = 0;
    props.orders.forEach(el => {
        summa += Number.parseFloat(el.price * el.count)
    })


    return (
        <header>
            <section>
                <GiHamburgerMenu className="hamburger-menu" onClick={() => { setIsNavOpen(!isNavOpen) }} />
                <h1 className="logo" onClick={() => props.setSelectedTab('main')}>Готовимся к школе</h1>
                <div className="menu">
                    <div className="shop-cart-button-container">
                        <FaShoppingCart className={`shop-cart-button ${isCartOpen && 'active'}`} onClick={() => { setIsCartOpen(!isCartOpen) }} />
                        <FaCheckCircle className={`check ${(props.orders.length > 0) && 'active'}`} />
                    </div>
                    <div className={`nav-overlay ${isNavOpen && 'active'}`} onClick={() => { setIsNavOpen(false) }}>
                    </div>
                    <ul className={`nav ${isNavOpen && 'active'}`}>
                        <li onClick={(e) => {
                            e.stopPropagation()
                            props.setSelectedTab('main')
                            setIsNavOpen(false)
                        }}>Главная</li>
                        <li onClick={(e) => {
                            e.stopPropagation()
                            props.setSelectedTab('catalogue')
                            setIsNavOpen(false)
                        }}>Каталог</li>
                        <li onClick={(e) => {
                            e.stopPropagation()
                            props.setSelectedTab('about')
                            setIsNavOpen(false)
                        }}>О компании</li>
                        <li onClick={(e) => {
                            e.stopPropagation()
                            props.setSelectedTab('contacts')
                            setIsNavOpen(false)
                        }}>Контакты</li>
                    </ul>
                </div>
                {isCartOpen && (
                    <>
                        <div className="shop-cart-overlay" onClick={() => { setIsCartOpen(false) }}></div>
                        <div className="shop-cart">
                            <div className="shop-cart-content">
                                {props.orders.length > 0 ?
                                    showOrders(props) : showNothing()}
                            </div>
                        </div>
                    </>
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
                        <Order onDelete={props.onDelete} key={el.id} product={el} counter={props.counter} addCounter={props.addCounter} onAdd={props.onAdd} />
                    ))}
                </div>
                <div className="finish">
                    <div className="summa">К оформлению: ${summa.toFixed(2)}₽ ⮞</div>
                    <div className="delete" onClick={() => {
                        props.orders.forEach(el => {
                            props.addCounter(el.id, 1)
                        })
                        props.setOrders([]);
                    }}>Очистить корзину</div>
                </div>
            </div>
        )
    }

    function showNothing() {
        return (
            <div className="empty">
                <h2>В корзине пусто</h2>
            </div>
        )
    }
}
