import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className="col-lg-12 p-0 pb-3 footer bg-white">
                <div className="container p-0 mt-3">
                    <div className="d-flex justify-content-center bd-highlight mb-3">
                        <div className="mr-auto p-1 bd-highlight copywrite-text text-dark" id="author">
                            Copyright &copy; {new Date().getFullYear()} 
                        </div>
                        <div className="p-1 bd-highlight ">
                            <a href="https://www.facebook.com/junjun.odarbe.9" target="_blank">
                                <i className="fa fa-facebook-f text-light bg-primary p-2 rounded text-center" id="iconLogo"></i>
                            </a>
                        </div>
                        <div className="p-1 bd-highlight ">
                            <a href="https://github.com/Odarbe" target="_blank">
                                <i className="fa fa-github  text-light bg-dark p-2 rounded text-center" id="iconLogo"></i>
                            </a>
                        </div>
                        <div className="p-1 bd-highlight ">
                            <a href="https://ph.linkedin.com/in/junjun-odarbe-4985b5187" target="_blank">
                                <i className="fa fa-linkedin text-light bg-primary p-2 rounded text-center" id="iconLogo"></i>
                            </a>
                        </div>
                        <div className="p-1 bd-highlight ">
                            <a href="mailto:odarbejr19@mail.com" target="_blank">
                                <i className="fa fa-google-plus  text-danger bg-white  p-2 rounded text-center" id="iconLogo"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;