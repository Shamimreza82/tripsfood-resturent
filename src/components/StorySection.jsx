import React from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
const StorySection = () => {
    return (
        <div>
            <div className='lg:flex p-11 gap-36 items-center overflow-hidden my-20'>
                <div className='h-[500px]  flex-1 rounded-3xl' style={{
                    backgroundImage: "url('https://images.pexels.com/photos/7312995/pexels-photo-7312995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>

                </div>
                <div className='flex-1 space-y-8'>
                    <h2 className='text-4xl font-bold'>Welcome to Top <br /> tripsfood where the <br /> food changes with <br /> the seasions</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa quibusdam  ad quo sit eaque et. Et sapiente quis nesciunt!</p>
                    <button className=" lg:mt-6 bg-[#000000] py-2 px-4 text-[#FFBE00] rounded-3xl font-bold text-sm flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                        MAKE A BOOKING
                        <BiSolidRightArrow />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StorySection;