import '../Styles/Degree.css';
import { AnimatedText } from '../Components/AnimatedText';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";


const header = [
  "High Performance Computing",
  "(HPC)"
]


const headerMobile = [
  "High Performance",
  "Computing (HPC)",
]



    
function Headline() {


  

  // const title = "Admissions infromation and requirements";
  // const MyanText = "Admissions infromation and requirements";

  // const display = (language == "EN") ? title : MyanText;

  return (
    <>
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} >
    <div className="hide hero py-14">
    {header.map((header) => 
       <span className="overflow-hidden fade">
          <AnimatedText
          once
          text={header}
          el="h1"
          className="lg:text-7xl text-4xl font-normal leading-9 lg:leading-[80px]"
          language="EN"
          
        />
      </span>
        
  
)}
</div>
<div className="sm:hidden hero pt-14 pb-5">
{headerMobile.map((header) => 
       <span className="overflow-hidden fade">
        <AnimatedText
       once
       text={header}
       el="h1"
       className="lg:text-7xl text-3xl font-normal leading-9 lg:leading-[80px]"
       language="EN"
       
     />
       </span>
       
 
)}

  </div>
    </motion.div>
     
  
    </>
  );

 
}

export default Headline;



