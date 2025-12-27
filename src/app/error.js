'use client'
import React from 'react';

const error = ({error}) => {
    return (
        <div>
            <p>{error.message}</p>
        </div>
    );
};

export default error;