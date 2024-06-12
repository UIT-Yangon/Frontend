import Date from '../Components/Date';
import Overview from '../Components/Overview';
import MajorImg from '../Components/MajorImg';
import SubjectOffer from '../Components/SubjectOffer';
import Career from '../Components/Career';
import Syllabus from '../Components/Syllabus';
import Image from '../../Images/researchLab.png';
import Img2 from '../../Images/syllabus.png';



const Img =[Image];

const paragraph = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "];

const content = [
  "Analysis of Algorithms and Parallel Algorithms",
  "Distributed Systems and Distributed Programming",
  "Cryptographic Technique and Data Security",
  "Mobile and Ubiquitous Computing",
  "High Performance Computing Technology",
  "Virtualization Technology and Cloud Computing",
  "Data Center and the New Converged Internet",
  "Blockchain Technology and the Internet of Things (IoT)",
  "Fog Computing",
  "Principles and Strategies of Building a Modern Data Center",
  "Advanced Computer Architectures and Optimization Techniques",
  "High Performance Big Data Analytics",
  "Project and Degree Term Paper"
];

const career = [
  "HPC System Administrator",
  "System Engineer",
  "IT Engineer in Data Center",
  "Solutions Engineer",
  "DevOps Engineer",
  "HPC Software Engineer",
  "HPC Applications Engineer",
  "High Performance Computing Test Engineerr",
  "Technical Consultant on HPC System",
  "Cloud Specialist Architect",
  "HPC System Solution Architect"
  
]

const syllabus = [
  {
    name: "First year syllabus",
    image: Img2
  },
  {
    name: "Second year syllabus",
    image: Img2
  },
  {
    name: "Third year syllabus",
    image: Img2
  },
  {
    name: "Fourth year syllabus",
    image: Img2
  },
  {
    name: "Fifth year syllabus",
    image: Img2
  }
]
  

function BgPart() {

    return (
      <div className="lg:ms-7">
        <Overview paragraph={paragraph} />
        <MajorImg Img={Img}/>
        <SubjectOffer content={content} />
        <Career career={career} />
        <Syllabus syllabus={syllabus} Img={Img2} />
      </div>
      
    );
  
   
  }
  
  export default BgPart;


