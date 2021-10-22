import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="banner" id="home">
            <div className="container">
                <h1 className="fs-1 mt-5">Welcome to <span className="main-color fw-bolder">SoftCopy.</span></h1>
                <p className="banner-description"><span className="main-color fw-bolder">SoftCopy.</span> is built to simplify the web designer's works for building creative & eye-catching <br/> UI designs using amazing colors and gradients.</p>
                <HashLink className="btn btn-primary " to="/home#text-colors" role="button">Try <span
                        className="main-color fw-bolder">SoftCopy.</span></HashLink>
                {/* Modal */}
                <Button className="btn btn-primary m-2" onClick={handleShow}>
                    How To use <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-patch-question-fll"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1.602-2.027c-.05.386-.218.627-.554.627-.377 0-.585-.317-.585-.745v-.11c0-.727.307-1.208.926-1.641.614-.44.822-.762.822-1.325 0-.638-.42-1.084-1.03-1.084-.55 0-.916.323-1.074.914-.109.364-.292.51-.564.51C6.203 6.12 6 5.873 6 5.48c0-.251.045-.468.139-.69.307-.798 1.079-1.29 2.099-1.29 1.341 0 2.262.902 2.262 2.227 0 .896-.376 1.511-1.05 1.986-.648.445-.806.726-.846 1.26z" />
                    </svg>
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <h5><span className="fw-bolder">Learn to use SoftCopy.</span> </h5>
                    </Modal.Header>
                    <Modal.Body>
                        <span className="main-color fw-bolder">SoftCopy.</span> is super fast & easy to use.
                        <hr />
                        <span>To copy a color or gradient follow these steps below:</span>
                        <br/>
                        <strong>Step 1: </strong> Simply click on your favourite color tab.
                        <br/>
                        <br/>
                        <img src="https://i.ibb.co/xmSxCx2/softCopy.gif" className="w-100" alt="" />
                        <br/>
                        <br/>
                        <strong>Step 2: </strong> The color code with the css property will be copied on your clipboard automatically.
                        <br/>
                        <img src="https://i.ibb.co/prJkMBZ/copied.gif" className="w-100" alt="" />
                        <br/>
                        <strong>Step 3: </strong> Paste it anywhere & Enjoy!<br/>
                        <br/>
                        <img src="https://i.ibb.co/mywzj6M/paste.gif" className="w-100" alt="" />
                        <br/>
                        <br/>
                        <img src="https://i.ibb.co/zGmf9hp/ps.gif" className="w-100" alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className="btn btn-primary w-75 mx-auto" onClick={handleClose}>
                        Got it
                    </Button>
                    </Modal.Footer>
                </Modal>
                
                <hr className="my-2"/>
                <br/>
                <p>
                    <q>Color is a power which directly influences soul</q> <br/>
                    <cite className="main-color">---Wasily Kandisky</cite>
                </p>
            </div>
        </div>
    );
};

export default Banner;