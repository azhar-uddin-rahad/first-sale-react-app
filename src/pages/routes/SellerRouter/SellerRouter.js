import { useQuery } from '@tanstack/react-query';
import React from 'react';

const SellerRouter = ({ children }) => {
    const {data: users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
         const res =await fetch('https://first-sale-server.vercel.app/users')
         const data =await res.json();
         return data;
        }
     
     })
     if(users.accountType === "seller"){
        return children;
       
     }

    }
export default SellerRouter;