import React from 'react';

export default (({ username, message }) => {
    return (
        <div>
            <span className="badge badge-secondary">{ username }</span>
            <span> { message } </span>
            <hr />
        </div>
    );
})