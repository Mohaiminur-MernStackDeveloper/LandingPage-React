import React from 'react';
import SectionTitle from './SectionTitle';

const OnlineReserve = () => {
    return (
        <div className='bg-[url(https://i.pinimg.com/1200x/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg)] min-h-[400px] bg-no-repeat bg-cover bg-gray-500 bg-blend-multiply py-10'>
            <SectionTitle subtitle="Online Reserve" title="For Online Reservation"/>
            <form className='w-3/5 mx-auto my-10 space-y-5 text-center'>
                <div className='grid grid-cols-2 gap-5'>
                    <input className='px-4 py-2 rounded-full bg-transparent border border-gray-500 bg-gray-950 w-full' type="text" placeholder='name' />
                    <input className='px-4 py-2 rounded-full bg-transparent border border-gray-500 bg-gray-950 w-full' type="text" placeholder='phone' />
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <input className='px-4 py-2 rounded-full bg-transparent border border-gray-500 bg-gray-950 w-full' type="text" placeholder='people' />
                    <input className='px-4 py-2 rounded-full bg-transparent border border-gray-500 bg-gray-950 w-full' type="text" placeholder='Check In' />
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <input className='px-4 py-2 rounded-full bg-transparent border border-gray-500 bg-gray-950 w-full text-white' type="text" defaultValue="8:00 am" />
                    <input className='px-4 py-2 rounded-full bg-transparent border border-gray-500 bg-gray-950 w-full' type="text" placeholder='Email' />
                </div>
                <button className='w-3/5 font-bold bg-primary rounded-full text-white py-3'>Reserve Now</button>
            </form>
            
        </div>
    );
};

export default OnlineReserve;