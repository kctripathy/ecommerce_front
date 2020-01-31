import React from 'react';
import Layout from '../core/Layout';
import Products from '../core/Products';

const  Home = () => {
    return (
     <Layout title="FullStack React Node MongoDB Ecommerce App" 
				description="Node React E-commerce App"  
				className="container-fluid">  
         <Products />
     </Layout>
    );
}

export default Home;    