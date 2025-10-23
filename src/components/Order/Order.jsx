import { FaTrash } from "react-icons/fa";
import './Order.css'
import { useState } from "react";

export default function Order(props) {
    const product = props.product;
    const [deleteClass, setDeleteClass] = useState('')

    return (
        <div className='product'>
            <div>
                <img src={"/reactSchoolShop/img/products/" + product.img} alt={product.title} />
                <FaTrash className="delete-icon"
                    onClick={() => {
                        props.onDelete(props.product.id)
                        setDeleteClass('');
                    }}
                    onMouseEnter={() => { setDeleteClass('visible') }}
                    onMouseLeave={() => { setDeleteClass('hidden') }} />
                <span className={deleteClass}>Удалить товар</span>
            </div>
            <h2>{product.title}</h2>
            <b>{`${product.price}₽ / в количестве ${product.count} шт.`}</b>


        </div>
    )

}