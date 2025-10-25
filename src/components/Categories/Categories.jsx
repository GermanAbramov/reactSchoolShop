import "./Categories.css";
import categories from "../../DB_imitation/categories";
import { useState } from "react";

export default function Categories(props) {
    const [activeCategory, setActiveCategory] = useState('Всё')

    return (
        <section className="categories">
            {categories.map(el => (
                <div className={`categories ${(activeCategory === el.name) && 'active'}`} key={el.key} onClick={() => {
                    props.chooseCategory(el.key);
                    setActiveCategory(el.name);
                }}>{el.name}</div>
            ))}
        </section>
    )
}