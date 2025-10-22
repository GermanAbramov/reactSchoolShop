import Product from '../Product/Product'
import './ProductsContainer.css'

export default function PopularProducts(props) {
    return (
        <section className="products-container">
            {props.popularProducts.map(el => (
                <Product key={el.id} product={el} onAdd={props.onAdd} showModalCart={props.showModalCart} />
            ))}
        </section>
    )
}
