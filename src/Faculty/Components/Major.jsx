import React,{useState,useEffect} from "react";
import '../../Styles/Faculty.css';
import styled from 'styled-components';



export default function Major({numText,desktopLeftRow,desktopRightRow,mobile,faculty,infoText}){
    const [hideDiv, setHideDiv] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 1024) {
            setHideDiv(true);
        } else {
            setHideDiv(false);
        }
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className="majorSection py-[72px] ">
            {!hideDiv && <DesktopSize numText={numText} desktopLeftRow={desktopLeftRow} desktopRightRow={desktopRightRow}  faculty={faculty} infoText={infoText} />}
            {hideDiv && <MobileSize mobile={mobile} faculty={faculty} infoText={infoText} />}
        </div>
    )
}






    




function DesktopSize({numText,faculty,desktopLeftRow,desktopRightRow,infoText}){

    const Div2 = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
`;

const Div = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    object-fit: cover;
    background-position: center center;



    


`;


    return(
        <div className="grid grid-cols-2 gap-8 w-full">
                <div className=" pt-[72px]">
                    <div className="leftMajor w-full">
                        <div className="grid grid-col-1 gap-32 w-full" >
                            {desktopLeftRow.map((item) => 
                            <div>
                            <Div2 className="fakeImg w-full aspect-square" image={item.image}></Div2>
                            <h4 className="mt-5">{item.name}</h4>
                            <p className="mt-5 font-[350px] text-lg leading-7">{infoText}</p>
                            </div>
                            )}
                            
                            
                        </div>
                        
                    </div>
                </div>
                <div className="rightMajorWrapper">
                    <div className="majorTitle">
                        <div className="majorSmallTitle">
                        <p className="flex-none text-[#3798a6] text-lg mb-2.5 w-[14px]">.</p>
                    <p className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Majors</p>
                        </div>
                        <h2>{faculty} offers {numText} majors:</h2>
                    </div>
                    <div className="rightMajor w-full">
                        <div className="grid grid-col-1 gap-32 w-full">
                            {desktopRightRow.map((item) => 
                            <div className="w-full">
                                <Div className="fakeImg w-full aspect-square" image={item.image}></Div>
                                <h4 className="mt-5">{item.name}</h4>
                                <p className="mt-5 font-[350px] text-lg leading-7">{infoText}</p>
                            </div>
                            )}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

function MobileSize({numText,faculty,mobile,infoText}){

    const Div2 = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
`;



    return(
        <div className="majorContainer mobileSize w-full">
            <div className="majorTitle w-full">
                <div className="majorSmallTitle">
                    <p className="flex-none text-[#3798a6] text-lg  mb-2.5 w-[11px]">.</p>
                    <p className="text-xs text-[#1c1d20] opacity-50 font-normal leading-[18px]">Majors</p>
                </div>
                <h2 className="pt-[44px]">{faculty} offers {numText} majors:</h2>
            </div>
            <div className="majorImgCon w-full">
                {
                    mobile.map((item) =>
                <div className="grid grid-col-1 w-full">
                    <Div2 className="w-full aspect-square bg-[#d9d9d9] rounded-[32px] mb-[12px]" image={item.image}></Div2>
                    <h4>{item.name}</h4>
                    <p className="my-5 font-[350px] text-lg leading-7">{infoText}</p>
                </div>
                    )
                }
                
            </div>
        </div>
    )
}

// //styleName: p;
// font-family: Oldschool Grotesk;
// font-size: 18px;
// font-weight: 350;
// line-height: 28px;
// text-align: left;
