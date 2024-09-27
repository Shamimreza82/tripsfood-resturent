import React from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

const Banner = () => {
    return (
        <div >
            <div className='h-screen lg:flex items-center lg:gap-36 gap-10 absolute text-white'>
                <div className='flex-40% lg:text-left text-center'>
                    <h2 className='lg:text-[96px] text-4xl leading-tight font-bold'>Drink, food <br /> & Enjoy</h2>
                    <button className=" lg:mt-6 bg-[#000000] py-2 px-4 text-[#FFBE00] rounded-3xl font-bold text-sm flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                        MAKE A BOOKING
                        <BiSolidRightArrow />
                    </button>
                </div>
                <div>
                    <div className='h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] bg-[#FCBD9A] rounded-full inline-flex items-center justify-center'>
                        <div className='h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] md:h-[430px] md:w-[430px] bg-slate-100 rounded-full inline-flex items-center justify-center'>
                            <div
                                className='h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] bg-slate-500 rounded-full'
                                style={{
                                    backgroundImage: "url('https://images.pexels.com/photos/5908232/pexels-photo-5908232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' absolute text-white right-10 top-1/2 space-y-5 text-2xl shadow-md'>
                <MdOutlineFacebook />
                <RiInstagramFill />
                <AiFillTwitterCircle />
            </div>
        </div>
    );
};

export default Banner;