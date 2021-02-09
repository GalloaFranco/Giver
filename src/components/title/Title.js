import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ message }) => {
    return (
        <h1>{message}</h1>
    );
};

Title.propTypes = {
    message: PropTypes.string
};
export default Title;
