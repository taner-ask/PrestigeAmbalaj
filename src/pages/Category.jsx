import { Link } from "react-router-dom";
import './Category.css';

const Category = () => {
    return (
        <div className="category-page">
            <h2 className="category-title">Categories</h2>
            <ul className="category-list">
                <li className="category-item"><Link to="/category/power">Power</Link></li>
                <li className="category-item"><Link to="/category/construction">Construction</Link></li>
                <li className="category-item"><Link to="/category/spare-part">Spare Part</Link></li>
                <li className="category-item"><Link to="/category/chemicals">Chemicals</Link></li>
                <li className="category-item"><Link to="/category/pet-reisin">Pet Reisin</Link></li>
            </ul>
        </div>
    );
};

export default Category;