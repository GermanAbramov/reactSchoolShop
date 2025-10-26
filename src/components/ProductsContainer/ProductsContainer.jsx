import Product from '../Product/Product'
import './ProductsContainer.css'

export default function ProductsContainer(props) {
    return (
        <section className="products-container">
            {props.products.map(el => (
                <Product key={el.id} product={el} onAdd={props.onAdd} showModalCart={props.showModalCart} onShowProduct={props.onShowProduct} isProductInCart={props.isProductInCart} setIsProductInCart={props.setIsProductInCart} orders={props.orders} counter={props.counter} addCounter={props.addCounter} />
            ))}
        </section>
    )
}
