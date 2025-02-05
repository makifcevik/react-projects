import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { getProducts } from '../services/productService';
import ProductCard from './ProductCard';
import axios from 'axios';

function ProductList() {

    const {data, loading, error} = useFetch(getProducts, null);

    if(loading) return (<p>Loading...</p>);
    if(error) return (<p>Error fetching products</p>);
    if(!data || data.length === 0) return(<p>No products found!</p>);

    return (
        <div className='grid grid-cols-6 gap-3'>
            {data.map((product) => 
                <ProductCard key={product.id} item={product}/>
            )}
        </div>
    )
}

export default ProductList
