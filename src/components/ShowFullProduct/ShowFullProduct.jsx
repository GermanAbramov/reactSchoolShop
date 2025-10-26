import { FaCartPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import React from "react";
import './ShowFullProduct.css';

export default function ShowFullProduct(props) {
    const product = props.product;
    const checked = props.orders.filter(el => el.id === product.id).length > 0;

    const selectedProduct = props.counter.find(el => el.id === product.id);
    const selectedProductCount = selectedProduct ? selectedProduct.count : 0;

    React.useEffect(() => {
        if (selectedProductCount > 0) {
            return
        }
        props.addCounter(product.id, 1);
    }, []);

    React.useEffect(() => {
        console.log(props.counter)
    }, [props.counter]);

    return (
        <section className="overlay" onClick={() => { props.setShowFullProduct(false) }}>
            <section className='product' onClick={e => e.stopPropagation()}>
                <IoCloseSharp className='close-btn' onClick={() => { props.setShowFullProduct(false) }} />
                <img src={"/reactSchoolShop/img/products/" + product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.desc}</p>

                {product.isAviable &&
                    <>
                        <div className='buy-product'>
                            <b>{product.price}₽</b>
                            <div className="count-control">
                                <div className={`${checked && 'active'}`}>
                                    <button type='button' className='countBtn' onClick={(e) => {
                                        e.stopPropagation()
                                        if (selectedProductCount > 1) {
                                            const newCounter = selectedProductCount - 1;
                                            props.addCounter(product.id, newCounter)
                                            props.onAdd({ ...product, count: newCounter })
                                        }
                                    }}>-</button>
                                    <span>{selectedProductCount + ' шт.'}</span>
                                    <button type='button' className='countBtn' onClick={(e) => {
                                        e.stopPropagation();
                                        const newCounter = selectedProductCount + 1;
                                        props.addCounter(product.id, newCounter)
                                        props.onAdd({ ...product, count: newCounter })
                                    }}>+</button>
                                </div>
                                <button type='button' className={`add-to-cart ${!checked && 'active'}`} onClick={(e) => {
                                    const newCounter = selectedProductCount
                                    props.showModalCart();
                                    props.onAdd({ ...product, count: newCounter });
                                    e.stopPropagation()
                                }}><FaCartPlus />
                                </button>
                            </div>
                        </div>
                    </>
                }
                {
                    !product.isAviable &&
                    <h3 className="not-aviable">Товара нет в наличии</h3>
                }
            </section>
        </section>
    )
}
