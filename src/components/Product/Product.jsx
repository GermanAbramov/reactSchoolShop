import { FaCartPlus } from "react-icons/fa";
import './Product.css'
import { useState } from 'react';

export default function Product(props) {
    const product = props.product;
    const [counter, setCounter] = useState(1);

    return (
        <section className='product'>
            <img src={"/reactSchoolShop/img/products/" + product.img} alt={product.title} onClick={() => props.onShowProduct(product)} />
            <h3>{truncate(product.title, 50)}</h3>
            <p>{truncate(product.desc, 75)}</p>
            <section className="count">Количество
                <div className='countControl'>
                    <button type='button' className='countBtn' onClick={() => { if (counter > 1) setCounter(counter - 1) }}>-</button>
                    <span>{counter}</span>
                    <button type='button' className='countBtn' onClick={() => { setCounter(counter + 1) }}>+</button>
                </div>
            </section>
            <b>{product.price}₽</b>
            <button type='button' className='add-to-cart' onClick={() => {
                const productToAdd = { ...product, count: counter };
                props.showModalCart();
                props.onAdd(productToAdd);
            }}><FaCartPlus />
            </button>
        </section>
    )

    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
            str.slice(0, maxlength - 1) + '…' : str;
    }
}
