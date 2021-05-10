import { useState } from 'react';

export const ColorPicker = () => {
    const [color, setColor] = useState('pink');

    return <Child style={{ color }} />;
};

const Child = ({ style }) => {
    return <p style={style}>Text</p>;
};
