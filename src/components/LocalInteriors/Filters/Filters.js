import React, { useEffect } from 'react';
import './Filters.css';
import InteriorFilterOptions from './InteriorFilterOptions/InteriorFilterOptions';

const Filters = (prop) => {
    return (
        <div >
            {prop?.filters.map(filter => (
                <div key={filter?.id}>
                    <div className='filter-header' >{filter?.name}</div>
                    <InteriorFilterOptions options={filter?.values} />
                </div>
            ))}
        </div>
    );
};

export default Filters;
