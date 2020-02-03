import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import ShowImage from './ShowImage';
import { addItem, updateItem, removeItem, itemTotal } from '../pages/cartHelpers';

const Card = ({ product,
	showViewButton = true,
	showAddToCartButton = true,
	showRemoveProductButton = false,
	cartUpdate = false,
	setRun = f => f,
	run = undefined }) => {

	const [redirect, setRedirect] = useState(false);
	const [count, setCount] = useState(product.count);

	const addToCart = () => {
		addItem(product, setRedirect(true));
		//console.log("added to cart...product", product)
		setRun(run);
	};

	const shouldRedirect = redirect => {
		//console.log("redirect", redirect)
		if (redirect) {
			return <Redirect to="/cart" />;
		}
	};

	const showViewProductButton = showViewButton => {
		return (
			showViewButton && (
				<Link to={`/product/${product._id}`} className="mr-2" style={{ display: showViewButton ? null : 'none' }}>
					<button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View</button>
				</Link>
			)
		)
	};

	const showRemoveButton = showRemoveProductButton => {
		return (
			showRemoveProductButton && (
				<button
					onClick={() => {
						removeItem(product._id);
						setRun(!run); // run useEffect in parent Cart
					}}
					className="btn btn-outline-danger mt-2 mb-2"
				>
					Remove Product
			</button>
			)
		);
	};

	const showAddToCartBtn = showAddToCartButton => {
		return (
			showAddToCartButton && (
				<button onClick={() => {
					addToCart();
					setRun(!run);
				}
				} className="btn btn-outline-success mt-2 mb-2 card-btn-1  ">
					Add to cart
			</button>
			)
		);
	};
	const showCartUpdateOptions = cartUpdate => {
		//console.log("showCartUpdateOptions=",cartUpdate)
		return (
		  cartUpdate && (
			<div>
			  <div className="input-group mb-3">
				<div className="input-group-prepend">
				  <span className="input-group-text">Adjust Quantity</span>
				</div>
				<input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
			  </div>
			</div>
		  )
		);
	  };

	const handleChange = productId => event => {
		setRun(!run); // run useEffect in parent Cart
		setCount(event.target.value < 1 ? 1 : event.target.value);
		//debugger;
		if (event.target.value >= 1) {
		  updateItem(productId, event.target.value);
		}
	  };
	  
	const showStock = quantity => {
		return quantity > 0 ? (
			<span className="badge badge-primary badge-pill">In Stock </span>
		) : (
				<span className="badge badge-primary badge-pill">Out of Stock </span>
			);
	};

	function truncate(str, no_words) {
		return str.split(" ").splice(0, no_words).join(" ");
	}

	return (
		<div className='card' style={{border: "solid 1px", minHeight: "300px"}}>
			<div className="card-header card-header-1 bg-light name">
				{product.name}
			</div>
			{shouldRedirect()}
			<div className="card-body mb-1">		
				<ShowImage item={product} url="product" />		
				<p className="card-p"> {
					!showViewButton ? (product.description) : (
						product.description && product.description.length > 50 ? truncate(product.description, 7) + "..." : product.description
					)					
				}
				</p>
				<p className="card-p black-10 mb-0">Price: ${product.price}</p>
				<p className="black-9 mb-0">Category: {product.category && product.category.name}</p>
				<p className="black-8 mb-0">Added on {moment(product.createdAt).fromNow()}</p>
				{showStock(product.quantity)}<br/>
				{showViewProductButton(showViewButton)}
				{showAddToCartBtn(showAddToCartButton)}
				{showRemoveButton(showRemoveProductButton)}
				{showCartUpdateOptions(cartUpdate)}
			</div>
		</div>
	)
};

export default Card;
