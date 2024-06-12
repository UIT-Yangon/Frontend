import Mobile from '../layout/Mobile';
import Pc from '../layout/Pc';
import BgPart from './BgPart';
function BodyPart({condition}) {

  const bgPart = BgPart;

    return (
      
      <section className="lg:pb-[88px] pt-7 ">
        {(window.innerWidth < 1024 ) ? <Mobile bgPart={bgPart} /> : <Pc bgPart={bgPart} />}
      </section>

    );
  }
  
  export default BodyPart;







