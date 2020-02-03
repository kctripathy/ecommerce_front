import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import Card from '../core/Card';
import Checkout from './Checkout'
import { getCart, itemTotal } from './cartHelpers'
import ShowLoading from '../core/ShowLoading';


const Cart = () => {

    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        //console.log("run",run);
        setItems(getCart());
    }, [run]);


    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                <div className='row col-12'>
                {items.map((product, i) => {
                    return (
                    <div  key={i} className='col-lg-6 col-sm-12'>
                        <Card                           
                            product={product}
                            showAddToCartButton={false}
                            cartUpdate={true}
                            showRemoveProductButton={true}
                            setRun={setRun}
                            run={run}
                        />
                    </div>
                )})}
                </div>
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid"
        >
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />
                </div>
            </div>
        </Layout>
    );
};

export default Cart;

