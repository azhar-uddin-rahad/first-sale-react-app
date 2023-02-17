
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductSummaryCard from '../ProductSummaryCard/ProductSummaryCard';

const Category = () => {
    const categorys=useLoaderData();
    const [productInfo,setProductInfo]=useState(null);
    console.log(categorys);
    
    return (
        <div>
            {
            categorys.map(category => <ProductSummaryCard key={categorys._id}
                category={category} setProductInfo={setProductInfo}></ProductSummaryCard>  

           )
           }

           {productInfo &&
            <BookingModal 
            productInfo={productInfo}
            setProductInfo={setProductInfo}
            >

            </BookingModal>
           }
            
        </div>
    );
};

export default Category;