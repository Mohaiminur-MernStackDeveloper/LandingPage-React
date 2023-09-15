import React from 'react';
import SectionTitle from './SectionTitle';

const GalleryStore = () => {
    return (
        <div>
            <SectionTitle subtitle="Gallery Store" title="Our Special Gallery"/>
            <div className='my-10 grid grid-cols-3 justify-center items-center gap-1'>
                <img src="https://c.stocksy.com/a/xf0600/z9/1432569.jpg" alt="" />
                <img src="https://www.rrc.ca/alumni/wp-content/uploads/sites/32/2017/11/RRC_Sharon_Steward_November-2017-001_sm.jpg" alt="" />
                <img src="https://c.stocksy.com/a/8g0600/z9/1432580.jpg" alt="" />
            </div>
        </div>
    );
};

export default GalleryStore;