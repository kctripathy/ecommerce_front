import React, {useState,useEffect} from 'react';
import Layout from '../core/Layout';
import Card from '../core/Card';
import ShowLoading from '../core/ShowLoading';
import {read,listRelated} from '../core/apiCore';

const Product = (props) => {
	const [product, setProduct] = useState([]);
	const [relatedProducts, setRelatedProducts] = useState([]);
    const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [run, setRun] = useState(false);
 
     const loadSingleProduct = productId => {		 
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProducts(data);
                    }
                });
            }
        });
    };


	useEffect(()=>{
		//loadSingleAndProducts();	
		const productId = props.match.params.productId;
		loadSingleProduct(productId);
		//console.log("productId",productId)
	},[props,run]);
	
		
	return (
	 <Layout title="Product "  description="Product details and the related products" className="container-fluid">  		
			 <div className='row fluid'>
				<div className='col-6'>
					<h3>Product Detail</h3>
					<Card product={product} showViewButton={false} setRun={setRun}/>
					{/* {JSON.stringify(product,null,4)} */}
				</div>
				<div className='col-6'>					
					<h3>Related Products</h3>
					<div className='row'>
					{											
						relatedProducts.map((p,i) =><div key={i} className='col-6'><Card setRun={setRun} product={p} /></div>)
					}
					</div>
					{/* {JSON.stringify(relatedProducts,null,4)} */}
				</div>
			 </div>			 
	</Layout>
	)	
};

export default Product;