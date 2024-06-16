import FirstText from './FirstText';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import React, { useRef,useState } from 'react';


function CuroselDesktop() {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.3,
      slidesToSlide: 2.3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 0.5 // optional, default to 1.
    }
  };

  const data = [
    {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  }
  ];

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const afterChange = (previousSlide, { currentSlide }) => {
    setCurrentSlide(currentSlide);
    if (currentSlide === 0) {
      setLeft(false);
    } else {
      setLeft(true);
    }
    if (currentSlide >= data.length/2) {
      setRight(false);
    } else {
      setRight(true);
    }
  };

  function shortenIt(text) {
    let sample = text.split(" ");
    return sample.splice(0, 16).join(" ");
  }

  return (
    <div className="py-20 relative flex flex-row w-[111%] ms-[-5.5%]">
      <div className="ps-[5%] me-[57px] flex flex-col justify-between">
        <FirstText />
        <ButtonGroup handleNext={handleNext} handlePrevious={handlePrevious} left={left} right={right} />
      </div>
      <div className="block w-[75%] cursor-grab active:cursor-grabbing">
        <Carousel
          responsive={responsive}
          ref={carouselRef}
          arrows={false}
          renderButtonGroupOutside={true}
          afterChange={afterChange}
        >
          {data.map((item, index) => (
            <div key={index} className="flex flex-col me-[32px]">
              <div className="rounded-[32px] w-full aspect-video bg-[#D9D9D9]"></div>
              <div className="relative mt-5">
                <ul className="absolute top-0 left-[19px] list-disc marker:text-[#3798A6]">
                  <li className="font-normal text-base leading-[18px] text-[#1C1D2080]">{item.type}</li>
                </ul>
                <h5 className="text-xl font-normal leading-7 pt-[26px]">
                  <a href="https://tailwindcss.com/docs/font-size">{item.title}</a>
                </h5>
              </div>
              <p className="pt-5 font-[350] leading-[27px] text-lg">
                {shortenIt(item.discription)}...
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CuroselDesktop;
