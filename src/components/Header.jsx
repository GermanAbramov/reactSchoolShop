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
                <h2 className="logo">Готовимся к школе</h2>
                <div className="menu">
                    <FaShoppingCart className={`shop-cart-button ${isCartOpen && 'active'}`} onClick={() => { setIsCartOpen(!isCartOpen) }} />
                    <ul className="nav">
                        <li>Каталог</li>
                        <li>О компании</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                {isCartOpen && (
                    <div className="shop-cart">
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </section>
            <section className="banner">
                <div>
                    <h3>Готовьтесь к школе <br /> вместе с нами</h3>
                    <ul>
                        <li>Качественная продукция</li>
                        <li>Приятные и устойчивые цены</li>
                        <li>Разнообразный ассортимент</li>
                    </ul>
                </div>
            </section>
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
                <p className="summa">Сумма: {summa.toFixed(2)}$</p>
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
