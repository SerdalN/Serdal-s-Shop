import {PRODUCTS} from '../products'
import {Product} from './product'
import '../styles/shop.css'

export const Shop = () => {
    return(
        <div className="Shop">
            <div className="shopTitle">
                <h1>Serdal Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (<Product data={product}/>))}
            </div>
        </div>
    )
}