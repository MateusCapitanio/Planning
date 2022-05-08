import React, { useState } from 'react';
import MyContext from './MyContext';

const Provider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [arrayCard, setArrayCard] = useState([]);

    const context = {
        title,
        setTitle,
        description,
        setDescription,
        time,
        setTime,
        arrayCard,
        setArrayCard
    }

    return (
        <MyContext.Provider value={context}>
            {children}
        </MyContext.Provider>
    );
}

export default Provider;
