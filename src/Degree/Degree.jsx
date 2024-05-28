
import '../Styles/Degree.css';
import Headline from './Headline';
import MainSec from './MainSec';
import Trivia from './Trivia';
import Image from './Image';
import Text from './Text';
import useResize from '../utils/useResize';
import UltiWrapper from '../Components/UltiWrapper';

function App() {
    const windowWidth = useResize("Degree Programs");


 

  
  return (
      <>
      <UltiWrapper>
          
          <Headline />
          <Image />
          <Text />
          <MainSec />
          <Trivia />
      
    </UltiWrapper>
    </>
    
  );
}

export default App;
