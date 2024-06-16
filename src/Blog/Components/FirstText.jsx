import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from './ButtonGroup';
import { AnimationButton } from '../../Components/Footer';

function FirstText() {


   

    return (
        <div className="min-w-[255px]">
            <div className=" relative w-full  pt-[38px] mb-6">
        <ul className="absolute top-0 left-[47px] list-disc marker:text-[#3798A6]">
            <li className="font-normal text-base leading-[18px] text-[#1C1D2080]">The news</li>
        </ul>
        <h3 className="font-normal leading-[48px] text-5xl w-full">You might also like</h3>

        

       

    </div>
    <AnimationButton value='News Overview'  left='69%' />

        </div>
     
      
    );
}

export default FirstText;

// //styleName: H6;
// font-family: Oldschool Grotesk;
// font-size: 16px;
// font-weight: 400;
// line-height: 18px;
// text-align: left;

