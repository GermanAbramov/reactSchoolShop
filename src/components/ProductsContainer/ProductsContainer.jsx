import Product from '../Product/Product'
import './ProductsContainer.css'

export default function ProductsContainer(props) {
    return (
        <section className="products-container">
            {props.products.map(el => (
                <Product key={el.id} product={el} onAdd={props.onAdd} showModalCart={props.showModalCart} />
            ))}
        </section>
    )
}
