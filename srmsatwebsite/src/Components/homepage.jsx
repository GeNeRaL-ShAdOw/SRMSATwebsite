import './homepage.css'
import Whatwedo from './whatwedo';
//import { useNavigate } from 'react-router-dom';
function Homepage()
{
    return (
        <div className="App">
            <header className="App-header">
                <font size='+8' className='font-face-er-main-text'>S R M S A T</font>
                <font size='+2' className='font-face-er-smol-text-redefine'>R e d e f i n i n g</font>
                <font size='+2' className='font-face-er-smol-text-space'>S p a c e</font>
            </header> 
            <Whatwedo></Whatwedo>
        </div>
    );
}

export default Homepage;