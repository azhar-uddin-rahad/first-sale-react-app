import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductSummaryCard from '../ProductSummaryCard/ProductSummaryCard';

const Category = () => {
    const categorys=useLoaderData();

    return (
        <div>
            {
            categorys.map(category => <ProductSummaryCard key={categorys._id}
                category={category}></ProductSummaryCard>
            
            
           )
           }
            
        </div>
    );
};

export default Category;