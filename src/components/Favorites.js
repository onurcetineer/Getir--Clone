import { useEffect, useState } from 'react';
import Products from "api/products.json";
import ProductItem from "components/ui/Productitem";

export default function Favorites (){

    const [products, setProducts] = useState ([]);
    useEffect(() =>{
        //istek atma

        setProducts(Products);
        },
        [])
    return (
        <div>
            <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
            <div className='grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden'>
                {products.length && products.map((product, index) => <ProductItem key={index} product={product}/> )}
            </div>
        </div>
    )
}