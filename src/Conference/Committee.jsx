import React,{useState} from "react";
import {motion,AnimatePresence} from 'framer-motion';
import OtherCommittie from "./OtherCommittee";

export default function Committee() {


    return (
      <>
        <div className="py-7 md:py-8 w-full flex flex-col" id="invited">
          <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Committee</h3>   
          <div className="flex flex-row gap-[15px] flex-wrap w-full justify-between">
              
                <div className=" flex justify-start gap-[10px] w-[350px]">
                  <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                  <div className="flex flex-col">
                    <p className="text-[11px] md:text-[16px] text-[#3798a6]">General chair by</p>
                    <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Professor.James White</p>
                    <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">MIT USA</p>
                  </div>
                </div>

                <div className=" flex justify-start gap-[10px] w-[350px]">
                  <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                  <div className="flex flex-col">
                    <p className="text-[11px] md:text-[16px] text-[#3798a6]">General co-chair by</p>
                    <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Senior Lecturer.Michael Brown</p>
                    <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">University of Melbourne Australia</p>
                  </div>
                  
                </div>

                <div className=" flex justify-start gap-[10px] w-[350px]">
                  <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                  <div className="flex flex-col">
                    <p className="text-[11px] md:text-[16px] text-[#3798a6]">Program chair by</p>
                    <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Associate Professor.Jane Smith</p>
                    <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">University of Barcelona Spain</p>
                  </div>
                </div>
            
            
        </div>

        <OtherCommittie/>

      </div>
      </>
      
    );
  
   
  }
  