import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default (props => {
    const [username, setUsername] = useState('')
    const auth = useContext(AuthContext);

    const handleChange = e => {
        setUsername(e.target.value);
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (username.trim().length <= 0) return;
            auth.login(username.trim());
            return;
        }
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col col-12 text-center'>
                    <h3>Who are you?</h3>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" value={username} onChange={handleChange} onKeyDown={onKeyPress} />
                    </div>
                </div>
            </div>
        </div>
    );
})