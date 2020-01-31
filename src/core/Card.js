import React from 'react';
import {Link} from 'react-router-dom';
import ShowImage from './ShowImage';

const Card = ({product}) => {	 
	return (
		<div className='card'>			
			<div className="card-header card-header-1 bg-light" style={{textAlign: "center", minHeight: "250px"}}>
				<ShowImage item={product} url="product" />
			</div>

			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>				
				<p className="card-p">{product.description.substring(0,50)}</p>								
				<Link to={`/product/${product._id}`} className="mr-2">
				  <button className="btn btn-outline-primary mt-1 mb-1 card-btn-1">View</button>
				</Link>								 
				<button className="btn btn-outline-success mt-1 mb-1 card-btn-1">Add To Cart</button>				
			</div>
			<div className="card-footer">
				${product.price}
			</div>			
		</div>
		)
};

export default Card;
