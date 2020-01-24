import React from 'react';
import Header from '../pages/Header';
import NavBar from './NavBar';
import Footer from '../pages/Footer';

const Layout = ({ title = "Title", description = "Description", className, children }) => {
    return (
        <>
            <Header />
            <NavBar />            
            <div className="jumbotron">          
                    <h1 className="display-10">{title}</h1>                    
                    <p>{description}</p>                    
            </div>
            <div className={className} style={{ minHeight: "500px" }}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;    