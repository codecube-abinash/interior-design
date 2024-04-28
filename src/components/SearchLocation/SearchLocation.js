import React from 'react';
import { useNavigate } from "react-router-dom";
import './SearchLocation.css';

const SearchLocation = () => {
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate('/local-interiors-list');
    }

    return (
        <div className='search-location-container mt-5 px-3 py-3'>
            <input
                type="text"
                className="form-control ms-3"
                placeholder="Search Locality"
                aria-label="Search Locality"
                aria-describedby="basic-addon2"
            />
            <button className="btn btn-outline-secondary px-5 mx-2" type="button" onClick={handleSearch} >
                Search
            </button>
        </div>
    );
};

export default SearchLocation;
