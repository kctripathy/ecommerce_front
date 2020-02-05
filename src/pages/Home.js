import React, { useState, useEffect } from 'react';
import Card from '../core/Card';
import Layout from '../core/Layout';
import ShowLoading from '../core/ShowLoading';
import { getProducts } from '../core/apiCore';
import Search from './Search';

const Home = () => {
	const [productsByArrival, setProductsByArrival] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [run,setRun] = useState(false)

	useEffect(() => {
		/*
		setTimeout(()=>{ 		
			loadProductsByArrival();
		}, 1000);
		*/
		//console.log("product page .... run=", run)
		loadProductsByArrival();
	}, [run]);

	const setRunFunctionHome=()=>{
		//console.log("setRunFunctionHome.....");
		setRun(!run);
	}
	const loadProductsByArrival = () => {
		getProducts('createdAt').then(data => {
			if (data.error) {
				setError(data.error);
				setLoading(false);
			} else {
				setProductsByArrival(data);
				setLoading(false);
			}
		});
	};

	return (
		<>
      <Layout title="Learn ReactJS, NodeJS, Express and MongoDB" 
 				description="Node React E-commerce App"  
 				className="container-fluid">  

			<Search setRunFunctionHome={setRunFunctionHome} />
			{loading ? (<ShowLoading showLoading={loading} />) : (
				<>
					<h2>Products By Arrival </h2>
					<div className='row mb-5'>
						{
							productsByArrival.map((p, i) => {
								return (
									<div key={i} className='col-lg-3 mb-2'>
										<Card product={p} 
												cartUpdate={false}
												setRun={setRun}
												run={run} />
									</div>
								)
							})
						}
					</div>
				</>
			)}
            </Layout>
		</>
	)
};

export default Home;