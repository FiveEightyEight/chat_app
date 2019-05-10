import React from 'react';
import parseString from '../services/main';

export default (({ username, message }) => {
    return (
        <div>
            <span className="badge badge-secondary">{ username }</span>
            <span> { parseString(message) } </span>
            <hr />
        </div>
    );
})