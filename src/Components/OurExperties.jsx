import React from 'react';
import SectionTitle from './SectionTitle';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const OurExperties = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <SectionTitle subtitle="Our Experties" title="Restho's Best Chef"/>
            <div className='my-10 grid md:grid-cols-3 grid-cols-1 gap-5 justify-center items-center'>
                <div className='rounded-md border'>
                    <img className='w-full h-96 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgS2yBlGk_x12NBxR8-znPgC_cz-HyAZ9lwf_opDRoWooAiiJRCRN6AyQ4b4SA7vl_YE&usqp=CAU" alt="" />
                    <div className='mt-5 p-5 flex justify-center items-center flex-col'>
                        <h1 className='text-2xl'>Mr. Willium Jhon</h1>
                        <p className='text-sm text-gray-500'>Chef of Head</p>
                        <div className='mt-5 flex justify-center items-center gap-5'>
                            <FaFacebookF className='text-gray-500'/>
                            <FaInstagram className='text-gray-500'/>
                            <FaLinkedinIn className='text-gray-500'/>
                            <FaTwitter className='text-gray-500'/>
                        </div>
                    </div>
                </div>
                <div className='rounded-md border'>
                    <img className='w-full h-96 rounded-md' src="https://images.delightedcooking.com/linecook.jpg" alt="" />
                    <div className='mt-5 p-5 flex justify-center items-center flex-col'>
                        <h1 className='text-2xl'>Mr. Willium Jhon</h1>
                        <p className='text-sm text-gray-500'>Chef of Head</p>
                        <div className='mt-5 flex justify-center items-center gap-5'>
                            <FaFacebookF className='text-gray-500'/>
                            <FaInstagram className='text-gray-500'/>
                            <FaLinkedinIn className='text-gray-500'/>
                            <FaTwitter className='text-gray-500'/>
                        </div>
                    </div>
                </div>
                <div className='rounded-md border'>
                    <img className='w-full h-96 rounded-md' src="https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg" alt="" />
                    <div className='mt-5 p-5 flex justify-center items-center flex-col'>
                        <h1 className='text-2xl'>Mr. Willium Jhon</h1>
                        <p className='text-sm text-gray-500'>Chef of Head</p>
                        <div className='mt-5 flex justify-center items-center gap-5'>
                            <FaFacebookF className='text-gray-500'/>
                            <FaInstagram className='text-gray-500'/>
                            <FaLinkedinIn className='text-gray-500'/>
                            <FaTwitter className='text-gray-500'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurExperties;