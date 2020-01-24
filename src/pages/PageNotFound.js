import React from 'react';
import Layout from '../core/Layout';

function PageNotFound() {
    return (
        <Layout title="Page Not Found"
            description="description. Sample tex. This is a jumbotron that occupies the entire horizontal space of its parent."
            className="container col-md-8 offset-md-2">

                <h4 className="alert alert-danger">Requested Page Not Found!</h4>
        </Layout>
    );
}

export default PageNotFound;