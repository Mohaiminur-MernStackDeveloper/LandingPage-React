import React from 'react';
import { BsMeta } from "react-icons/bs";

const SectionTitle = ({subtitle, title}) => {
    return (
        <div className='flex justify-center flex-col items-center font-Inter space-y-1'>
            <div className='flex justify-center items-center gap-2 text-primary'>
                <BsMeta/>
                <h1>{subtitle}</h1>
                <BsMeta/>
            </div>
            <h1 className='text-3xl font-Raleway'>{title}</h1>
        </div>
    );
};

export default SectionTitle;