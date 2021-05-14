import { useEffect } from 'react';

export const KEYS = {
    UP: 38,
    DOWN: 40,
};

const ResultList = ({ items, activeItem, setActiveItem, handleBlur, handleFocus }) => {
    useEffect(() => {
        const handleKeys = event => {
            const key = event.keyCode;

            switch (key) {
                case KEYS.UP: {
                    event.preventDefault();
                    if (activeItem === 0) {
                        return;
                    }
                    if (activeItem === 1) {
                        handleFocus();
                    }

                    setActiveItem(prevActiveItem => prevActiveItem - 1);
                    break;
                }

                case KEYS.DOWN:
                    event.preventDefault();
                    if (activeItem === items.length) {
                        return;
                    }

                    if (activeItem === 0) {
                        handleBlur();
                    }

                    setActiveItem(prevActiveItem => prevActiveItem + 1);
                    break;

                default:
                    break;
            }
        };
        window.addEventListener('keydown', handleKeys);

        return () => {
            window.removeEventListener('keydown', handleKeys);
        };
    }, [activeItem, setActiveItem, items, handleBlur, handleFocus]);

    return (
        <ul>
            {items.map(({ id, title }) => (
                <li className={id === activeItem ? 'is-selected' : ''} key={id}>
                    {title}
                </li>
            ))}
        </ul>
    );
};

export default ResultList;
