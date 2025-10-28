import MakeOrderMap from "../MakeOrderMap";
import './MakeOrder.css';
import { IoCloseSharp } from "react-icons/io5";

export default function MakeOrder(props) {
    return (
        <section className={`make-order-overlay ${props.isMakeOrder && 'hidden'}`} onClick={() => { props.setIsMakeOrder(true) }}>
            <div className="make-order" onClick={(e) => { e.stopPropagation() }}>
                <IoCloseSharp className='close-btn' onClick={() => {
                    props.setIsMakeOrder(true)
                }} />
                <div className="receive-type">
                    <h3>Выберите тип получения заказа</h3>

                    <label htmlFor="delivery">
                        <input type="radio" id="delivery" name="order" defaultChecked />
                        Доставка
                    </label>

                    <label htmlFor="store">
                        <input type="radio" id="store" name="order" />
                        Самовывоз
                    </label>
                </div>
                <div className="location-and-contacts">
                    <h3>Вы можете выбрать адрес на карте</h3>
                    <MakeOrderMap />
                    <label htmlFor="adress">
                        Адрес:
                        <input type="text" id="adress" />
                    </label>

                    <label htmlFor="email">
                        Почта:
                        <input type="text" id="email" placeholder="example@gmail.com" />
                    </label>

                    <label htmlFor="phone">
                        Телефон:
                        <input type="text" id="phone" placeholder="89997774545" />
                    </label>
                </div>
                <div className="pay-type">
                    <h3>Выберите способ оплаты</h3>

                    <label htmlFor="SBP">
                        <input type="radio" id="SBP" name="pay" defaultChecked />
                        <img src="/reactSchoolShop/img/sbp-logotic.png" alt="СБП" />
                    </label>

                    <label htmlFor="card">
                        <input type="radio" id="card" name="pay" />
                        <img src="/reactSchoolShop/img/Mir.jpg" alt="Мир" />
                        <img src="/reactSchoolShop/img/visa.png" alt="Виза" />
                        <img src="/reactSchoolShop/img/Mastercard.png" alt="Мастеркард" />
                    </label>

                    <label htmlFor="money">
                        <input type="radio" id="money" name="pay" />
                        Наличными при получении
                    </label>
                </div>
                <div className="submit-order" onClick={() => {
                    props.orders.forEach(el => {
                        props.addCounter(el.id, 1)
                    })
                    props.setOrders([]);
                    props.setIsMakeOrder(true);
                    props.setFinishOrder(true);
                }}>Оформить заказ на сумму <span>{props.sum}₽</span></div>
            </div>
        </section >
    )
}
