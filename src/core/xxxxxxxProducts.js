// import React, { useState, useEffect } from 'react';
// import Card from './Card';
// import ShowLoading from './ShowLoading';
// import { getProducts } from './apiCore';


// const Products = () => {
// 	const [productsByArrival, setProductsByArrival] = useState([]);
// 	const [error, setError] = useState(false);
// 	const [loading, setLoading] = useState(true);
// 	const [run,setRun] = useState(false)

// 	useEffect(() => {
// 		/*
// 		setTimeout(()=>{ 		
// 			loadProductsByArrival();
// 		}, 1000);
// 		*/
// 		console.log("product page .... run=", run)
// 		loadProductsByArrival();
// 	}, [run]);

// 	const loadProductsByArrival = () => {
// 		getProducts('createdAt').then(data => {
// 			if (data.error) {
// 				setError(data.error);
// 				setLoading(false);
// 			} else {
// 				setProductsByArrival(data);
// 				setLoading(false);
// 			}
// 		});
// 	};

// 	return (
// 		<>

// 			{loading ? (<ShowLoading showLoading={loading} />) : (
// 				<>
// 					<h2>Products By Arrival </h2>
// 					<div className='row mb-5'>
// 						{
// 							productsByArrival.map((p, i) => {
// 								return (
// 									<div key={i} className='col-lg-3 mb-2'>
// 										<Card product={p} 
// 												setRun={setRun}
// 												run={run} />
// 									</div>
// 								)
// 							})
// 						}
// 					</div>
// 				</>
// 			)}
// 		</>
// 	)
// };

// export default Products;