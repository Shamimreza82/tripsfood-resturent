import React from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

const Banner = () => {
    return (
        <div className=''>
            <div className='h-screen flex items-center gap-24 absolute text-white'>
                <div className='flex-40% '>
                    <h2 className='lg:text-[96px] leading-tight font-bold'>Drink, food <br /> & Enjoy</h2>
                    <button className=" lg:mt-6 bg-[#000000] py-2 px-4 text-[#FFBE00] rounded-3xl font-bold text-sm flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                        MAKE A BOOKING
                        <BiSolidRightArrow />
                    </button>
                </div>
                <div>
                    name
                </div>
            </div>
            <div className='z-10 absolute text-white right-0 top-1/2'>
                <MdOutlineFacebook/>
                <RiInstagramFill/>
                <AiFillTwitterCircle/>
            </div>
        </div>
    );
};

export default Banner;