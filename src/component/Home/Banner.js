import React from 'react';
import './Banner.css'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FiSearch } from "react-icons/fi";

const Banner = () => {
    return (
        <div className='bg-image'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-9 col-md-10 col-sm-12'>
                        <div className='simple-search-wrap'>
                            <h1 className='banner_title mb-4'>We share knowledge with the world</h1>
                            <p className='font-lg mb-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                            <div>
                                <div class="input-group mb-3">
                                    <InputGroup className="mb-2 input search" >
                                        <FormControl id="inlineFormInputGroup" placeholder="Search Your Cources" />
                                        <InputGroup.Text>
                                            <Button > <FiSearch /> Search</Button>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;