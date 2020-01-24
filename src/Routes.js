import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from "./user/Signin"
import Signup from "./user/Signup"
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PageNotFound from './pages/PageNotFound';
import UserDashboard from './user/UserDashboard';
import PrivateRoute from './auth/PrivateRoute';
import AdminDashboard from './user/AdminDashboard';
import AdminRoute from './auth/AdminRoute';

const Routers = () => (
    <>
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={Signin} exact />
                <Route path="/signup" component={Signup} exact />
                <Route path="/about" component={About} exact />
                <Route path="/services" component={Services} exact />
                <PrivateRoute path="/dashboard" component={UserDashboard} />
                <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    </>
)


export default Routers;