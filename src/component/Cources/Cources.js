import React, { useEffect, useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import classNames from "classnames";
import Cource from './Cource';
import './Cources.css'
const Cources = (props) => {
    const { show } = props;
    console.log(show);
    const [cources, setCources] = useState([]);
    useEffect(() => {
        fetch('../../fakedata.json')
            .then(res => res.json())
            .then(data => setCources(data))
    }, [])

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                <div className="cources-head">
                    <h1>
                        Explore Featured
                        <span>
                            Cources
                        </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>
            <div className='cards'>
                {
                    show === 'home' ? cources.slice(0, 6).map(cource => <Cource cource={cource} key={cource.id}></Cource>) : cources.map(cource => <Cource cource={cource} key={cource.id}></Cource>)
                }
            </div>

        </div>
    );
};

export default Cources;