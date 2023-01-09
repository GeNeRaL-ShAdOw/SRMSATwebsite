import './homepage.css';

import Missions from './missions';
import Whatwedo from './whatwedo';

import bgm from '../music/bgm.mp3';

function Homepage()
{
    return (
        <div className="App">
            <audio src={bgm} autoPlay loop/>
            <font size='+8' className='font-face-er-main-text'>S R M S A T</font>
            <font size='+2' className='font-face-er-smol-text-redefine'>R e d e f i n i n g</font>
            <font size='+2' className='font-face-er-smol-text-space'>S p a c e</font>
            <body className='flexible'>
                <Whatwedo/>
                <Missions/>
            </body>
        </div>
    );
}

export default Homepage;