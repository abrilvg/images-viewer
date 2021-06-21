import React from 'react';
import './message.scss';

const Message = ({text, danger}) => {
    let classNameValues =  'message';
    if (danger) {
        classNameValues = `${classNameValues} danger`
    }
    return <div className={classNameValues}><h3>{text}</h3></div>;
};

export default Message;
