import './whatwedo.css'
import { useNavigate } from 'react-router-dom';
function Whatwedo()
{
    const navigate=useNavigate();
    function gotoregistration()
    {
        navigate('/registration');
    }
    return (
            <div className='borderline-wwd'>
                <font size='+4' className="WWD-box-content-title">WHAT WE DO</font>
                <font size='+2' className="WWD-box-content">SRMSAT IS A STUDENT-RUN ORGANIZATION THAT RESEARCHES AND DEVELOPS SATELLITES, PRIMARILY NANOSATELLITES. </font>
                <font size='+2' className="WWD-box-content">SRMSAT WAS FOUNDED IN 2009, WITH A SMAILL TEAM OF 59 STUDENTS AND ONE AMBITION - TO SEND A SATELLITE TO SPACE.</font>
                <font size='+2' className="WWD-box-content">THIS IS REALISED IN 2011, WHEN THE FIRST SRM INDEGENOUSLY BUILT NANOSATELLITE, SRMSAT 1 WAS LAUNCHED INTO SPACE.</font>
                <font size='+2' className="WWD-box-content">SRMSAT REQUIRES THE BEST AMONG THE BEST, THIS IS LITERALLY ROCKET SCIENCE. THINK YOU HAVE WHAT IT TAKES?</font>
                <button className='button1' onClick={gotoregistration}><font size='+1'>SIGN ME UP!</font></button>
            </div>
    );
}

export default Whatwedo;