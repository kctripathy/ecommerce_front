import React, {useState,useEffect} from 'react';
import Layout from '../core/Layout';
import Card from '../core/Card';
import ShowLoading from '../core/ShowLoading';


const Cart = () => {
	
return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid"
        >
            <div className="row">
                <div className="col-6">
				
					Cart Items
				
				</div>

                <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    {/*<Checkout products={items} setRun={setRun} run={run} />*/}
                </div>
            </div>
        </Layout>
    );
};

export default Cart;

