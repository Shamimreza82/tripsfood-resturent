import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import dish from '../assets/02.png'

const ExploreOurMenu = () => {
    return (
        <div className='mb-40'>
            <div className='absolute w-[80%] h-[60%] bg-gradient-to-b from-red-50 rounded-br-[300px]'> </div>
            <div className='z-20 relative '>
                <h3 className='text-3xl text-center underline font-bold pt-12'>Explore Our Menu</h3>
                <p className='font-bold text-center mt-3 text-gray-500'>fresh & local</p>
            </div>
            <div className='flex justify-center mt-8 gap-14'>
                <div className='w-44 h-40 '>
                    <div className='absolute w-44 h-20 mt-16 bg-gradient-to-b from-red-100 rounded-t-[50px] '> </div>
                    <div className='relative '>
                        <img src={dish} alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <button className=" relative py-2 px-4 rounded-3xl font-bold text-sm flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                            Lunch
                            <BiSolidRightArrow className='w-2' />
                        </button>
                    </div>
                </div>
                <div className='w-44 h-40 '>
                    <div className='absolute w-44 h-20 mt-16 bg-gradient-to-b from-red-100 rounded-t-[50px] '> </div>
                    <div className='relative '>
                        <img src={dish} alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <button className=" relative py-2 px-4 rounded-3xl font-bold text-sm flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                            Lunch
                            <BiSolidRightArrow className='w-2' />
                        </button>
                    </div>
                </div>
                <div className='w-44 h-40 '>
                    <div className='absolute w-44 h-20 mt-16 bg-gradient-to-b from-red-100 rounded-t-[50px] '> </div>
                    <div className='relative '>
                        <img src={dish} alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <button className=" relative py-2 px-4 rounded-3xl font-bold text-sm flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                            Lunch
                            <BiSolidRightArrow className='w-2' />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExploreOurMenu;