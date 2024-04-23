import React from 'react';
import './Filters.css';
import InteriorFilterOptions from './InteriorFilterOptions/InteriorFilterOptions';

const Filters = ({ filters }) => {
    return (
        <div className='filter-container'>
            {filters?.map(filter => (
                <div key={filter?.id}>
                    <div className='filter-header'>{filter?.name}</div>
                    <InteriorFilterOptions options={filter?.values} />
                </div>
            ))}
        </div>
    );
};

export default Filters;
