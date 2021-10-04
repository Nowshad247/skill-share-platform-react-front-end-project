import React from 'react';
import logo from '../../asset/logo.png';
import udemy from '../../asset/udemy.png';
import coursera from '../../asset/coursera.png';
import edx from '../../asset/EdX.png';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './Awards.css'
const Awards = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className="custom-section">
                    <div >
                        <p>
                            Over 700+ Cources
                        </p>
                        <p>
                            In One Place
                        </p>
                    </div>
                    <div>
                        <img className="logo" src={edx} alt="Logo" />
                    </div>
                    <div>
                        <img className="logo" src={udemy} alt="Logo" />
                    </div>
                    <div>
                        <img className="logo" src={coursera} alt="Logo" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Awards;