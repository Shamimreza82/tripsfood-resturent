import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import iceCream from '../assets/01.jpg'

const HotDesserts = () => {
    return (
        <div>
            <h2>HOT DESSERTS</h2>
            <div className='grid grid-cols-4 p-10 gap-6 '>
                <div className='flex h-44 rounded-xl p-3 gap-5 shadow-slate-300 shadow-2xl'>
                    <div className='overflow-hidden h-36px flex-1'>
                        <img src={iceCream} alt="" />
                    </div>
                    <div className='flex-1 mt-7 space-y-4 '>
                        <h4 className='font-bold text-xl'>Choclate <br /> ice creame</h4>
                        <p className='inline-flex justify-center items-center gap-20 font-bold text-red-600'>$4 <span className='text-black'><RiArrowRightSLine /></span></p>
                    </div>
                </div>
                <div className='flex h-44 rounded-xl p-3 gap-5 shadow-slate-300 shadow-2xl'>
                    <div className='overflow-hidden h-36px flex-1'>
                        <img src={iceCream} alt="" />
                    </div>
                    <div className='flex-1 mt-7 space-y-4 '>
                        <h4 className='font-bold text-xl'>Choclate <br /> ice creame</h4>
                        <p className='inline-flex justify-center items-center gap-20 font-bold text-red-600'>$4 <span className='text-black'><RiArrowRightSLine /></span></p>
                    </div>
                </div>
                <div className='flex h-44 rounded-xl p-3 gap-5 shadow-slate-300 shadow-2xl'>
                    <div className='overflow-hidden h-36px flex-1'>
                        <img src={iceCream} alt="" />
                    </div>
                    <div className='flex-1 mt-7 space-y-4 '>
                        <h4 className='font-bold text-xl'>Choclate <br /> ice creame</h4>
                        <p className='inline-flex justify-center items-center gap-20 font-bold text-red-600'>$4 <span className='text-black'><RiArrowRightSLine /></span></p>
                    </div>
                </div>
                <div className='flex h-44 rounded-xl p-3 gap-5 shadow-slate-300 shadow-2xl'>
                    <div className='overflow-hidden h-36px flex-1'>
                        <img src={iceCream} alt="" />
                    </div>
                    <div className='flex-1 mt-7 space-y-4 '>
                        <h4 className='font-bold text-xl'>Choclate <br /> ice creame</h4>
                        <p className='inline-flex justify-center items-center gap-20 font-bold text-red-600'>$4 <span className='text-black'><RiArrowRightSLine /></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotDesserts;