import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';

const OurMostPopularRecipies = () => {
    return (
        <div >
            <div className='absolute w-full h-[60%]  bg-gradient-to-b from-red-50 rounded-tl-[300px]'> </div>
            <div>
                <div className='z-20 relative '>
                    <h3 className='text-3xl text-center underline font-bold pt-12'>Our Most Popular Recipies</h3>
                    <p className='font-bold text-center mt-3 text-gray-500'>fresh & local</p>
                </div>
                <div className='mt-10 flex justify-center gap-10'>
                    <div className="card bg-base-100 w-80 shadow-xl">
                        <figure>
                            <img className='hover:scale-125 duration-300'
                                src="https://images.pexels.com/photos/12481168/pexels-photo-12481168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>9.5</p>
                            <p>Mumtoo -stuff cake fish +rise+dasii chicken</p>
                            <div className="card-actions justify-between px-4 mt-2 items-center ">
                                <button className=" bg-slate-400 px-4 py-2 text-white font-bold rounded-full">Add to Cart</button>
                                <div className=" text-red-600 font-bold">$125.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-80 shadow-xl">
                        <figure>
                            <img className='hover:scale-125 duration-300'
                                src="https://images.pexels.com/photos/37352/food-japanese-asian.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>9.5</p>
                            <p>Mumtoo -stuff cake fish +rise+dasii chicken</p>
                            <div className="card-actions justify-between px-4 mt-2 items-center ">
                                <button className=" bg-slate-400 px-4 py-2 text-white font-bold rounded-full">Add to Cart</button>
                                <div className=" text-red-600 font-bold">$125.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-80 shadow-xl">
                        <figure className='w-full h-[214px] overflow-hidden '>
                            <img className='h-72 hover:scale-125 duration-300'
                                src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>9.5</p>
                            <p>Mumtoo -stuff cake fish +rise+dasii chicken</p>
                            <div className="card-actions justify-between px-4 mt-2 items-center ">
                                <button className=" bg-slate-400 px-4 py-2 text-white font-bold rounded-full">Add to Cart</button>
                                <div className=" text-red-600 font-bold">$125.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <button className=" lg:mt-6 bg-[#000000] py-2 px-4 text-[#FFBE00] rounded-3xl font-bold text-sm flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                    MAKE A BOOKING
                    <BiSolidRightArrow />
                </button>
            </div>
        </div>
    );
};

export default OurMostPopularRecipies;