import React from "react";
import { motion } from "framer-motion";
import seller1 from "../../../assits/topSeller/top-sellers1.jpg";
import seller2 from "../../../assits/topSeller/top-sellers2.jpg";
import seller3 from "../../../assits/topSeller/top-sellers3.jpg";
import seller4 from "../../../assits/topSeller/top-sellers4.jpg";
import seller5 from "../../../assits/topSeller/top-sellers5.jpg";
import seller6 from "../../../assits/topSeller/top-sellers6.jpg";
import seller7 from "../../../assits/topSeller/top-sellers7.jpg";
import seller8 from "../../../assits/topSeller/top-sellers8.jpg";
import seller9 from "../../../assits/topSeller/top-sellers9.jpg";
import bgImg from '../../../assits/team-shape.png'

const OurTeam = () => {
  const sellers = [
    {
      id: "1",
      img: seller1,
      sellerName: "Benjamin Doe",
      position: "Head Of Operations",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "2",
      img: seller2,
      sellerName: "Benjamin Doe",
      position: "Manage",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "3",
      img: seller3,
      sellerName: "Aria July",
      position: "Director",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "4",
      img: seller4,
      sellerName: "Sebastian Farnil",
      position: "Founder",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "5",
      img: seller5,
      sellerName: "Henry Martina",
      position: "CEO and Director",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "6",
      img: seller6,
      sellerName: "Daniel Adams",
      position: "Ex Director",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "7",
      img: seller7,
      sellerName: "Evelyn Adison",
      position: "Director",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "8",
      img: seller8,
      sellerName: "Aria July",
      position: "Ex Manager",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "9",
      img: seller9,
      sellerName: "Sebastian Farnil",
      position: "Ex Manager",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "10",
      img: seller5,
      sellerName: "Henry Martina",
      position: "Manager",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "11",
      img: seller6,
      sellerName: "Daniel Adams",
      position: "Head Of Operations",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
    {
      id: "12",
      img: seller6,
      sellerName: "Daniel Adams",
      position: "Ex Manager",
      details: "Lorem ipsum dolor sit amet, elit Velit egestas mattis.",
    },
  ];

  return ( 
    <div className="bg-[#E5E5E5] my-[100px] py-10 z-10 relative px-5">
        <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 ">
        {sellers?.map((seller) => (
          <motion.div
            whileHover={{ x: -50 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card lg:w-80 py-5 px-5 justify-start bg-base-100 shadow-xl">
              <div className="mb-5">
                <img
                  src={seller.img} className="w-[40%] rounded-2xl"
                  alt="Shoes"
                />
              </div>
              <div className="">
                <h2 className="card-title lg:text-3xl text-[#000000] hover:text-[#F14D5D] text-xl"> {seller.sellerName}</h2>
                <h3 className="text-[#F14D5D] text-sm lg:text-2xl ">{seller.position}</h3>
                <p className="text-xl"> {seller.details}</p>
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>  
    </div>
    <div className="absolute bottom-0 right-0 -z-10 ">
        <img src={bgImg} alt="" />
    </div>
    </div>
  );
};

export default OurTeam;
