
import React,{useState,useEffect } from 'react';
import useResize from '../../utils/useResize';
import Heading from '../Components/Heading';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../Components/UltiWrapper';
import Idendity from '../Components/Idendity';
import MajorImg from '../Components/MajorImg';
import Image from '../../Images/researchLab.png';


function Blog() {

  const windowWidth = useResize("Promotion and Transfer Announcement");
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


const Img =[Image];
const title = "Rector";
const name = "Prof. Daw Saw Sanda Aye";
const date = "04 May 2024";

  
  return (
      <>
      <UltiWrapper>
      <Heading name="Promotion and Transfer Announcement" />
      <Idendity title={title} name={name} date={date} />
      <MajorImg Img={Img}/>
      <BodyPart />
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default Blog;
