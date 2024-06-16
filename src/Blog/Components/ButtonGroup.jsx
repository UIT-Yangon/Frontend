import React from 'react';

const ButtonGroup = ({ handleNext, handlePrevious, left, right }) => {
  return (
    <div className="flex flex-row">
      
      <div onClick={handlePrevious} className={`p-4 rounded-[32px] bg-[#FAFAFA] inline-block ${!left ? 'opacity-50' : 'opacity-100'} cursor-pointer`}>
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M6.89789 11.6453L6.30331 12.2399C6.05156 12.4916 5.64446 12.4916 5.39538 12.2399L0.188818 7.03598C-0.0629394 6.78422 -0.0629394 6.37713 0.188818 6.12805L5.39538 0.921484C5.64714 0.669727 6.05423 0.669727 6.30331 0.921484L6.89789 1.51606C7.15233 1.7705 7.14697 2.18563 6.88718 2.43471L3.65986 5.50937H11.3572C11.7134 5.50937 12 5.79594 12 6.15215V7.0092C12 7.36541 11.7134 7.65198 11.3572 7.65198H3.65986L6.88718 10.7266C7.14965 10.9757 7.155 11.3909 6.89789 11.6453Z" fill="#1C1D20" />
</svg>

      </div>
      <div onClick={handleNext} className={`p-4 rounded-[32px] bg-[#FAFAFA] inline-block ms-4 ${!right ? 'opacity-50' : 'opacity-100'} cursor-pointer`}>
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.10211 1.51609L5.69669 0.921513C5.94844 0.669755 6.35554 0.669755 6.60462 0.921513L11.8112 6.1254C12.0629 6.37715 12.0629 6.78425 11.8112 7.03333L6.60462 12.2399C6.35286 12.4917 5.94577 12.4917 5.69669 12.2399L5.10211 11.6453C4.84767 11.3909 4.85303 10.9757 5.11282 10.7267L8.34014 7.65201L0.642786 7.65201C0.286575 7.65201 0 7.36544 0 7.00923V6.15218C0 5.79597 0.286575 5.50939 0.642786 5.50939L8.34014 5.50939L5.11282 2.43474C4.85035 2.18566 4.845 1.77052 5.10211 1.51609Z" fill="#1C1D20"/>
</svg>
      </div>
</div> 
  );
};

export default ButtonGroup;

// width: Hug (44px)px;
// height: Hug (43.7px)px;
// padding: 16px 0px 0px 0px;
// gap: 10px;
// border-radius: 32px 0px 0px 0px;
// opacity: 0px;
