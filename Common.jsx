import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import p1 from './p1.png';
import { useNavigate } from 'react-router-dom'
function Common(props) {
    const navigate = useNavigate();
    return (
        <section id="header" className="d-flex align-item-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto pt-5">
                        <div className="row">
                            <div className="col-lg-6 my-6 d-flex justify-content-center flex-column order-1">
                                <h1>
                                    {props.name}
                                    <strong className="brand-name">ArkaTechnical</strong>
                                </h1>
                                <h5>We are the team of talented web developers.</h5>
                                <button type="button" className="btn btn-warning mt-5" onClick={() => navigate('signin')}>Sign In</button>
                                <button type="button" className="btn btn-primary mt-5" onClick={() => navigate('signup')}>
                                    Sign Up
                                </button>

                            </div>
                            <div className="col-lg-6">
                                <img src={props.imgsrc} className="img-fluid animated-image with-margin-top" alt="home-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Common;
