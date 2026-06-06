import React from "react";


const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% overflow-hidden">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/* img */}
        <div className="md:w-1/2">
          <img src="/Group 15.png" alt="zcc" className="hover:rotate-180 z-60" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4 border-red z-10 ">
            <div className="bg-slate-100 px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64  border-red z-10 hover:scale-105 transition-all duration-300">
            <img src="/dish1.png" alt=""  className="rounded-2xl" style={{height:"80px"}}/>
              <div className="space-y-1">
                <h5>Spicy Hot Pizza</h5>
                <div className="rating rating-sm">
              
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-300"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-200"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-100"
                    readOnly
                  />
                
                </div>
                <p className="text-red">Rs 180.00</p>
              </div>
            </div>
            <div className="bg-slate-100 px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden z-10 hover:scale-105 transition-all duration-300">
              <img src="/dish1.png" alt=""  className="rounded-2xl" style={{height:"80px"}}/>
              <div className="space-y-1">
                <h5>Marghreta Pizza   </h5>
                <div className="rating rating-sm">
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-rose-400"
                    readOnly
                  />
                
                </div>
                <p className="text-red">Rs 180.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
          <span className="text-red">Pizza</span> , because anything less is a compromise.
          </h2>
          <p className="text-[#4A4A4A] text-xl">
          Get exclusive deals and discounts when you order through our pizza app – saving money never tasted so good!

          </p>
          <button className="bg-red font-bold btn text-white px-12 py-3 rounded-full ml-19 " style={{marginLeft:"125px"}}>
            Order Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
