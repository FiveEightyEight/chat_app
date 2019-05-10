import React from 'react';
import Snippet from './Snippet';

export default (({ chat }) => {
    return (
        <>
            <div className="card">
                <div id='chat_window' className="card-body" style={{ height: `calc(${window.innerHeight}px - 300px)`, overflowY: 'scroll' }}>
                    {
                        (!chat) ? <></>
                            :
                            chat.map((e, i) => {
                                return <Snippet {...e} key={i} />
                            })
                    }
                </div>
            </div>
        </>
    );
});