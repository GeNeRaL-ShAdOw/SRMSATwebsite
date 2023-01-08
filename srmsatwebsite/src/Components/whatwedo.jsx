import './whatwedo.css'

function Whatwedo()
{
    return (
        <div className='flexible'>
            <div className='borderline-wwd'>
                <font size='+4' className="WWD-box-content-title">WHAT WE DO</font>
                <font size='+2' className="WWD-box-content">SRMSAT IS A STUDENT-RUN ORGANIZATION THAT RESEARCHES AND DEVELOPS SATELLITES, PRIMARILY NANOSATELLITES. </font>
                <font size='+2' className="WWD-box-content">SRMSAT REQUIRES THE BEST AMONG THE BEST, THIS IS LITERALLY ROCKET SCIENCE. THINK YOU HAVE WHAT IT TAKES?</font>
            </div>
            <div className='borderline-mssn'>
                <font size='+4' className="mssn-box-title">MISSIONS</font>
                <font size='+2' className="WWD-box-content">
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