import { Carousel } from "flowbite-react";
import React  from "react";

import banner1 from "../LoginAssests/main.jpg";
import banner2 from "../LoginAssests/second.jpeg"

import banner3 from "../LoginAssests/third.jpg"

const HomePage=()=>{
  return(
<>
<div className="bg-neutralSilver">
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">

    <Carousel className="w-full mx-auto">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between">
        <div>
            <img src={banner1} alt="" />
          </div>
          {/**
           * Here will be the text
           */}
           <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug">Lession and insites <span className="text-brandPrimary leading-snug">from 8 Years</span>

            </h1>
            <p className="text-neutralGray text-base md-8">Where to check your heath as a clint</p>
            <button className="btn-primary">Register</button>

           </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between">
        <div>
            <img src={banner1} alt="" />
          </div>
          {/**
           * Here will be the text
           */}
           <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug">Lession and insites <span className="text-brandPrimary leading-snug">from 8 Years</span>

            </h1>
            <p className="text-neutralGray text-base md-8">Where to check your heath as a clint</p>
            <button className="btn-primary">Register</button>

           </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between">
        <div>
            <img src={banner1} alt="" />
          </div>
          {/**
           * Here will be the text
           */}
           <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug">Lession and insites <span className="text-brandPrimary leading-snug">from 8 Years</span>

            </h1>
            <p className="text-neutralGray text-base md-8">Where to check your heath as a clint</p>
            <button className="btn-primary">Register</button>

           </div>
        </div>
      
  
      </Carousel>
    </div>
    </div>
</>
  );
}
export default HomePage;