import { FaCartPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import './ShowFullProduct.css';

export default function ShowFullProduct(props) {
    const product = props.product;
    const [counter, setCounter] = useState(1);

    return (
        <section className="overlay" onClick={() => { props.setShowFullProduct(false) }}>
            <section className='product' onClick={e => e.stopPropagation()}>
                <IoCloseSharp className='close-btn' onClick={() => { props.setShowFullProduct(false) }} />
                <img src={"/reactSchoolShop/img/products/" + product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.desc}</p>

                {product.isAviable &&
                    <>
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
                    </>
                }
            </section>
        </section>
    )
}
