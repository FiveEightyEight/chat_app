
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default (props => {
    const [message, setMessage] = useState('')
    const auth = useContext(AuthContext);

    const handleChange = e => {
        setMessage(e.target.value);
    };

    const onKeyPress = (e) => {
        
        if (e.key === 'Enter') {
            if (message.trim().length <= 0) return;
            auth.send(message.trim());
            setMessage('')
            return;
        }
    };

    return (
        <div className="col-auto">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <input className="form-control form-control-lg" type="text" placeholder="..." value={message} onChange={handleChange} onKeyDown={onKeyPress}/>
        </div>
    );
})