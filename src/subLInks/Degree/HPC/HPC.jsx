
import React,{useState,useEffect } from 'react';
import useResize from '../../../utils/useResize';
import '../../../Styles/Degree.css';
import Heading from './Heading';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../../Components/UltiWrapper';

function HPC() {

  const windowWidth = useResize("High Performance Computing");
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


 

  
  return (
      <>
      <UltiWrapper>
      <Heading name="High Performance Computing (HPC)" />
      <BodyPart />
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default HPC;
