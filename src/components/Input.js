import { useState } from 'react';

const Input = ({ children }) => {
    const [name, setName] = useState('name');

    return (
        <div>
            <input value={name} onChange={event => setName(event.target.value)} />
            {children}
        </div>
    );
};

export default Input;
