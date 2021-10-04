import React from 'react';
import { useParams } from 'react-router';

const CourcesDatails = (props) => {
    let { id } = useParams();
    console.log(id)
    return (
        <div>
            <h1>datails will added soon</h1>
        </div>
    );
};

export default CourcesDatails;