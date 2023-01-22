import './screenone.css';

import { useNavigate } from 'react-router-dom';

function Screenone()
{
    const navigate=useNavigate();
    function gotohome()
    {
        navigate('/home');
    }
    return (
        <div className="WelcometoSRMSAT" onClick={gotohome}>
            <button className='buttonwelcome'>
                <font size='+8' className='font-face-er-main-welcome'>W E L C O M E</font>
                <font size='+1' className='font-face-er-smol-text-click blinking'>C L I C K</font>
                <font size='+1' className='font-face-er-smol-text-anywhere blinking'>A N Y W H E R E</font>
                <font size='+1' className='font-face-er-smol-text-anywhere blinking'>T O</font>
                <font size='+1' className='font-face-er-smol-text-anywhere blinking'>C O N T I N U E</font>

            </button>
        </div>
    );
}

export default Screenone;