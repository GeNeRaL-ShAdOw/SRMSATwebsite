import './registration.css'

import bgm from '../music/bgm.mp3';

function Registration()
{
    return (
    <div className="App">
        <audio src={bgm} autoPlay loop/>
        <font size='+8' className='font-face-er-main-text-register'>R E G I S T R A T I O N</font>
        <font size='+2' className='font-face-er-smol-text-join'>J O I N I N G</font>
        <font size='+2' className='font-face-er-smol-text-space'>T H E</font>
        <font size='+2' className='font-face-er-smol-text-space'>F O R C E</font>
    </div>)
}

export default Registration;