import React from 'react';

const Testmonials = () => {
    return (
        <div className='flex justify-around items-center mt-20 h-[500px]'>
            <div className='overflow-hidden  w-[50%] flex justify-center '>
                <img className='w-[80%] rounded-lg' src={'https://images.pexels.com/photos/14302291/pexels-photo-14302291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" />
            </div>
            <div className='w-[50%] space-y-6 ' >
                <div className='flex items-center gap-5' >
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>

                    </div>
                    <div>
                        <div>
                            <h2 className="font-bold">Shamim Reza</h2>
                            <p>Lorem, ipsum dolor </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div >
                        <p className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi inventore enim, odit qui rem sit reiciendis earum nisi facilis itaque commodi quas molestias distinctio dolore voluptates alias quis expedita deleniti? Deserunt nisi distinctio in? Cumque accusantium eligendi a nemo ipsum. Quae est qui nulla veniam corrupti tempore id recusandae.</p>
                    </div>
                    <div className='flex lg:gap-60 gap-20 mt-6'>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div >
                            <button> Arrow</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testmonials;