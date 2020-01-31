import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from "./user/Signin"
import Signup from "./user/Signup"
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import UserDashboard from './user/UserDashboard';
import PrivateRoute from './auth/PrivateRoute';
import AdminDashboard from './user/AdminDashboard';
import AdminRoute from './auth/AdminRoute';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

const Routers = () => (
    <>
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/shop" component={Shop} exact />
                <Route path="/signin" component={Signin} exact />
                <Route path="/signup" component={Signup} exact />
                <Route path="/about" component={About} exact />
                <Route path="/services" component={Services} exact />
				<Route path="/cart" component={Cart} exact />
				<Route path="/product/:productId" exact component={Product} />
                <PrivateRoute path="/dashboard" component={UserDashboard} />
                <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    </>
)


export default Routers;