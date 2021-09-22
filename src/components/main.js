import React from "react";
import PROJECTS from "./Projects.js";
import Swal from 'sweetalert2';

const successAlert = (siteLink) => {
    if(siteLink==''){
        Swal.fire({   
            title: 'This page is not yet Live',
            icon: 'warning'
        }); 
    }else{
        window.open(siteLink);
    }
}

const SiteInfo = () => {
    return(
        <div className="container mt-5 mb-5">
            <div className="row rpt-5">
                {PROJECTS.map((project, index) => (
                    <div className="col-lg-6 col-md-6 p-1 mb-0 pb-0 item">
                        <div className="card p-3 mb-0 pb-0 border border-0 bg-white">
                            <div className="view mt-5">
                                <a onClick={() => successAlert(project.siteLink)}>
                                    <img src={project.image} />
                                </a>
                                <div className="card-body text-lef">
                                    <h5 className="card-title white-text">{project.title}</h5>
                                    <p className="card-text white-text">{project.discription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SiteInfo;