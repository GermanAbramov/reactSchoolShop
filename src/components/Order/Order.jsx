import { FaTrash } from "react-icons/fa";
import './Order.css'
import { useState } from "react";

export default function Order(props) {
    const product = props.product;
    const selectedProduct = props.counter.find(el => el.id === product.id);
    const selectedProductCount = selectedProduct ? selectedProduct.count : 0;

    return (
        <div className='product'>
            <div className="product-title">
                <img src={"/reactSchoolShop/img/products/" + product.img} alt={product.title} />
                <h2>{product.title}</h2>
            </div>
            <div className="container">
                <b>{`${product.price}₽ / Шт.`}</b>
                <div className="product-count">
                    <div className="count">
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
                </div>
                <div className="sum">{`Итого: ${selectedProductCount * product.price}₽`}</div>
                <FaTrash className="delete-icon" onClick={() => {
                    props.addCounter(product.id, 1)
                    props.onDelete(product.id)
                }} />
                <div className="delete-product" onClick={() => {
                    props.addCounter(product.id, 1)
                    props.onDelete(product.id)
                }}>
                    Удалить
                </div>
            </div>
        </div>
    )

}