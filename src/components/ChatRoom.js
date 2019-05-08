import React from 'react';
import Snippet from './Snippet';

export default (({ chat }) => {

    return (
        <>
            <div className="card">
                <div className="card-body">
                    {
                        (!chat) ? <></>
                            :
                            chat.map( (e, i ) => {
                                return <Snippet {...e} />
                            })
                    }
                </div>
            </div>
        </>
    );
})