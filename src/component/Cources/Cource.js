import React from 'react';
import './Cource.css'
import { BiTime, BiVideo } from 'react-icons/bi';
import { FcManager, FcLikePlaceholder } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
const cource = (props) => {

    const { title, category, enrolled, duration, lectures, name, price, url, id } = props.cource;

    let datailsUrl = `/courcesdatails/${id}`
    return (
        <div className='p-3'>
            <div className="">
                <img className='img-fluid ' src={url} alt="" />
            </div>
            <div className='sub-top'>
                <div>
                    <button type="button" class="btn btn-outline-success">{category}</button>
                </div>
                <div >
                    <p>
                        <FcLikePlaceholder />  {enrolled} Enrolled
                    </p>
                </div>
            </div>
            <div className='pt-2 '>
                <NavLink to={datailsUrl}>
                    <h4>{title}</h4>
                </NavLink>
            </div>
            <div className='moreinfo'>
                <p><BiTime /> Duration: {duration}</p>
                <p><BiVideo /> {lectures} Lecture</p>
            </div>
            <hr />
            <div className='moreinfo'>
                <h4><FcManager />  {name}</h4>
                <h4 className='price'><span> {price} </span> USD</h4>
            </div>
        </div>
    );
};

export default cource;