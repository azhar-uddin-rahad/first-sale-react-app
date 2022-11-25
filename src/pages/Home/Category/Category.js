import React from 'react';

import apple from '../../../assits/icon/apple.svg';
import hp from '../../../assits/icon/icons8-hp.svg';
import dell from '../../../assits/icon/dell.svg';
import { Link } from 'react-router-dom';

const Category = () => {
    const CategoryData=[
        {
            id: 1,
            name: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: apple,
            link: '/apple'

        },
        {
            id: 2,
            name: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: hp,
            link: '/hp'

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: dell,
            link: '/dell'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4'>
           {
             CategoryData.map(Category => <Link to={Category.link}>
             <div className="card w-96 bg-base-100 hover:bg-gradient-to-r from-orange-200 to-orange-300	hover:text-white shadow-xl">
             <figure className="px-10 pt-10">
               <img src={Category.img} alt="Shoes" className="rounded-xl w-20" />
             </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title">{Category.name}</h2>
               <p>{Category.details}</p>
               <div className="card-actions">
                
               </div>
             </div>
           </div>
             
             
             
             </Link>
           )
           }
        </div>
    );
};

export default Category;