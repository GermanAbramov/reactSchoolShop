import "./Categories.css";
import categories from "../../DB_imitation/categories";

export default function Categories(props) {
    return (
        <div className="categories">
            {categories.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}