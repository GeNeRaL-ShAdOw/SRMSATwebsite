import './missions.css'

function Missions()
{
    return(
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
    )
}
export default Missions;