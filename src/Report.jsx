import React from 'react';
import GraphReport from './GraphReport';
import ProjectSelector from './ProjectSelector';
import ReportsTableHeader from './ReportsTableHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';




const Report = () => {

//for that used of project selector ok
  

    return(
        <div>
            <div className='container-fluid'>
                <h1 className='headertag mt-5'>
                    report
                </h1>

            </div>
            <ProjectSelector/>
         
            <GraphReport/>
            <ReportsTableHeader/>
        </div>
    );
};

export default Report;


