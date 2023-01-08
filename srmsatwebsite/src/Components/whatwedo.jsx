import './whatwedo.css'

function Whatwedo()
{
    return (
        <div className='flexible'>
            <div className='borderline-wwd'>
                <font size='+4' className="WWD-box-content-title">WHAT WE DO</font>
                <font size='+2' className="WWD-box-content">SRMSAT IS A STUDENT-RUN ORGANIZATION THAT RESEARCHES AND DEVELOPS SATELLITES, PRIMARILY NANOSATELLITES. </font>
                <font size='+2' className="WWD-box-content">SRMSAT WAS FOUNDED IN 2009, WITH A SMAILL TEAM OF 59 STUDENTS AND ONE AMBITION - TO SEND A SATELLITE TO SPACE.</font>
                <font size='+2' className="WWD-box-content">THIS IS REALISED IN 2011, WHEN THE FIRST SRM INDEGENOUSLY BUILT NANOSATELLITE, SRMSAT 1 WAS LAUNCHED INTO SPACE.</font>
                <font size='+2' className="WWD-box-content">SRMSAT REQUIRES THE BEST AMONG THE BEST, THIS IS LITERALLY ROCKET SCIENCE. THINK YOU HAVE WHAT IT TAKES?</font>
                <button><font size='+1'>SIGN ME UP!</font></button>
            </div>
            <div className='borderline-mssn'>
                <font size='+4' className="mssn-box-title">MISSIONS</font>
                <font size='+2' className="WWD-box-content">
                    <p>SRMSAT HAS A PROUD HISTORY OF ITS MISSION, AND HAS PROVED TIME AND AGAIN TO BE ONE OF THE BEST CLUBS IN SRM. WITH ITS STELLAR PERFORMANCE AND EVER CONTINUING RESEARCH INTO HUMAN INTERACTION WITH THE VOID, SRMSAT HAS BEEN PROVIDED WITH CUTTING SPACE EDGE TECHNOLOGY ALLOWING IT TO REACH ITS PEAK. </p>
                    <p>WE HAVE TWO COMPLETED MISSIONS AND 2 ONGOING MISSIONS AS OF 2023. THESE ARE:</p>
                    <ul>
                        <li className='spacedlist'><a href='https://www.eoportal.org/satellite-missions/srmsat'>SRMSAT 1</a></li>
                        <li className='spacedlist'><a href='https://www.researchgate.net/publication/308007263_Mechanical_Systems_of_SRMSAT_-_2'>SRMSAT 2</a></li>
                        <li className='spacedlist'><a href='https://www.researchgate.net/figure/Mechanical-Structure-of-SRMSAT-3-Dimension-300300300-mm-Mass-10-Kg-Structure_fig5_344585206'>SRMSAT 3 (ONGOING)</a></li>
                        <li className='spacedlist'>SRMSAT 4 (ONGOING)</li>
                    </ul>
                </font>
            </div>
        </div>
    );
}

export default Whatwedo;