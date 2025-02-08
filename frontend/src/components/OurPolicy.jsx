import React from 'react';
import {assets} from '../assets/frontend_assets/assets.js';
const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=''/>
                <p className=' font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We Offer Hassle Free Exchnage policy</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=''/>
                <p className=' font-semibold'>Seven Days Return Policy</p>
                <p className='text-gray-400'>We Provide 7 Days free Return Policy</p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt=''/>
                <p className=' font-semibold'>Best Customer Support</p>
                <p className='text-gray-400'>We provide 24/7 support</p>
            </div>
        </div>
    );
};

export default OurPolicy;