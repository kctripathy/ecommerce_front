import React, {useState,useEffect} from 'react';
import Layout from '../core/Layout';
import Card from '../core/Card';
import CheckBox from '../core/CheckBox';
import RadioBox from '../core/RadioBox';
import ShowLoading from '../core/ShowLoading';
import { getCategories, getProductCategories, getFilteredProducts } from "../core/apiCore";
import { prices } from "../core/fixedPrices";


const Shop = () => {
	
	const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    //const [filteredCategories, setFilteredCategories] = useState([]);
	const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
		
		getCategories().then( data =>{
			if (data.error){
				setError(data.error)
				return
			}
			setCategories(data);	
		});
		/*
        getProductCategories().then(data => {
            if (data.error) {				 
                setError(data.error);
            } else {
				debugger;
                setFilteredCategories(data);
            }
        });
		*/
		
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then(data => {
			//debugger;
			if (!data) {
				setError({error:" error in filter "});
			}
			else{				
				if (data.error) {
					setError(data.error);
				} else {
					setFilteredResults(data.data);
					setSize(data.size);
					setSkip(0);
				}
			}
        });
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load more
                </button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
		
		
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === "price") {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };


//console.log("categories=",categories);
//console.log("filteredCategories=",filteredCategories);	
return (
        <Layout
            title="Shop "
            description="Search and find books of your choice"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-4">
					<h4>Filter by categories</h4>
                    <ul>
                        <CheckBox
                            categories={categories}
                            handleFilters={filters =>
                                handleFilters(filters, "category")
                            }
                        />
                    </ul>					
					
					<h4>Filter by price range</h4>
                    <div>
                        <RadioBox
                            prices={prices}
                            handleFilters={filters =>
                                handleFilters(filters, "price")
                            }
                        />
                    </div>					 
				
				</div>

                <div className="col-8">
                    <h2 className="mb-4">Shop</h2>
                    <hr />
                    <h2 className="mb-4">Products</h2>
                    <div className="row">
                        {filteredResults.map((product, i) => (
                            <div key={i} className="col-4 mb-3">
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                    <hr />
                    {loadMoreButton()}					
                </div>
            </div>
        </Layout>
    );
};

export default Shop;