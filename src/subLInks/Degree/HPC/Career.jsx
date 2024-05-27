function SubjectOffer() {

    const content = [
        "HPC system administrator",
        "System engineer",
        "IT engineer in data center",
        "Solutions engineer",
        "DevOps engineer",
        "HPC software engineer",
        "HPC applications engineer",
        "High performance computing test engineer",
        "Technical consultant on HPC system",
        "Cloud specialist architect",
        "HPC system solution architect"
        
    ]

    return (
      <>
        <div className="py-7 md:py-8 w-full" id="career">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Career opportunities</h3>   
        <div className="flex flex-row flex-wrap w-full justify-between">
            {content.map((item) => 
            <div className="flex flex-row  w-full md:w-[45%] items-start mb-[12px]">
                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-[10px] flex-none">
<path d="M6 7.42892C7.89375 7.42892 9.42857 5.8941 9.42857 4.00035C9.42857 2.1066 7.89375 0.571777 6 0.571777C4.10625 0.571777 2.57143 2.1066 2.57143 4.00035C2.57143 5.8941 4.10625 7.42892 6 7.42892ZM8.56607 8.30214L7.28571 13.4289L6.42857 9.78606L7.28571 8.28606H4.71429L5.57143 9.78606L4.71429 13.4289L3.43393 8.30214C1.52411 8.39321 0 9.95481 0 11.8861V13.0003C0 13.7102 0.575893 14.2861 1.28571 14.2861H10.7143C11.4241 14.2861 12 13.7102 12 13.0003V11.8861C12 9.95481 10.4759 8.39321 8.56607 8.30214Z" fill="#3798A6"/>
</svg>
                <p className="infoText">{item}</p>

            </div>)}
            
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default SubjectOffer;