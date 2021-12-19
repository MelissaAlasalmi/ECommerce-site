import React from 'react'
import data from '../data';
import { Rating } from '../components/Rating'
import { useParams } from "react-router-dom";

export default function ProductScreen() {
    const { id } = useParams();
    const product = data.products.find((item) => item._id === id);
    if (!product)
        return <div>Product not found</div>
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img className="medium" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>
                                {product.name}
                            </h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            <p>Description: {product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary-block">Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
