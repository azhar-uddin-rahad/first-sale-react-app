import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const CategoryOPtion = () => {
  const {
    data: categoryData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`https://first-sale-server.vercel.app/brands`);
      const data = await res.json();

      return data;
    },
  });

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Our Product Category</h1>
      <p className="text-2xl mt-5 font-bold text-center text-gray-300">
        Please Click Category and choice the product under the category
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 my-10 gap-4">
        {categoryData.map((Category) => (
          <Link to={`category/${Category.brand_id}`} key={Category.brand_id}>
            <div className="card w-96 h-96 bg-base-100 hover:bg-gradient-to-r from-fuchsia-100 via-white to-gray-100	hover:text-black shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={Category.img}
                  alt="Shoes"
                  className="rounded-xl w-30 h-20"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{Category.brand_name}</h2>
                <p>{Category.brand_details}</p>
                <div className="card-actions"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryOPtion;
