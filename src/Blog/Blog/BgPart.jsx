
import Overview from '../Components/Overview';
import Image from '../../Images/researchLab.png';
import Img2 from '../../Images/Faculty/CS/Teachers/Teacher_2.png';
import ImgSection from '../Components/ImgSection';
import ShareSpace from '../layout/ShareSpace';



const Img =[Image];

const landscape = [Image,Image,Image,Image,Image];
const potrait = [Img2, Img2];

const paragraph = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "];

function BgPart() {

    return (
      <>
      <div className="lg:ms-7">
        <Overview paragraph={paragraph} />
        <ImgSection Img={Img} potrait={potrait} landscape={landscape}/>
      </div>
      
      {(window.innerWidth < 1024 ) && <div className=" mb-[68px]"><ShareSpace /></div>}
      </>
      
    );
  
   
  }
  
  export default BgPart;


