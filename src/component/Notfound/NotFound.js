import React from 'react';
import './Notforund.css';
import { useHistory } from "react-router-dom";
const NotFound = () => {

    let history = useHistory();
    function handleClick() {
        history.push("/home");
    }
    return (
        <div className="contenet">
            <div className='custom'>
                <h1>404</h1>
                <p>Page Not Found</p>
                <button type="button" onClick={handleClick}>
                    Go home
                </button>
            </div>

        </div>
    );
};

export default NotFound;