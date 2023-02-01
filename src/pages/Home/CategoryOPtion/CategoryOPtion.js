import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
//https://first-sale-server.vercel.app/brands
const CategoryOPtion = () => {
  const {
    data: categoryData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`category.json`);
      const data = await res.json();

      return data;
    },
  });

  return (
    <div className="mt-[100px] max-w-[1440px] mx-auto">
      <div className="mb-[100px]">
        <h1 className="text-5xl font-bold text-center text-[#000000]">
          Our Product Category
        </h1>
        <p className="text-2xl mt-5 font-bold text-center text-[#666666]">
          Please click category and choice the product under the category
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 my-10 gap-4">
        {categoryData.map((Category) => (
         
            <div key={Category.brand_id}>
              <div class="flex">
                <div
                  className="hero py-10 px-5"
                  style={{
                    backgroundImage: `url(${Category.img})`,width:"100%"
                  }} >
                  <div className="hero-content">
                    <div className="max-w-md">
                      <h5 className="mb-5 text-xl capitalize">{Category.brand_name}</h5>
                      <p className="mb-5 text-2xl font-bold pr-20">{Category.brand_details}</p>
                      <Link to={`category/${Category.brand_id}`} className="text-[#ffffff] rounded hover:transition duration-150 ease-linear hover:bg-[#0A1831] p-5 bg-[#F14D5D]">View product</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryOPtion;
