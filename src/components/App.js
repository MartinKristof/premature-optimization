import { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ColorPicker } from './Color';
import { MemoizedListOfItems, ListOfItems } from './ListOfItems';

const initialState = [
    { value: 1, id: uuid() },
    { value: 2, id: uuid() },
    { value: 3, id: uuid() },
    { value: 4, id: uuid() },
];

export const MemoizedApp = () => {
    console.log('Rendering <MemoizedApp />');

    const [items, setItems] = useState(initialState);
    const [newItem, setNewItem] = useState({ value: '', id: uuid() });

    const addItem = event => {
        event.preventDefault();

        if (newItem.value === '') {
            return;
        }

        setItems([...items, newItem]);

        setNewItem({ value: '', id: uuid() });
    };

    const handleRemove = useCallback(id => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }, []);

    return (
        <div className="App">
            <form onSubmit={addItem}>
                <input
                    placeholder="New number"
                    type="number"
                    value={newItem.value}
                    onChange={({ target: { value } }) => setNewItem({ value, id: newItem.id })}
                />

                <input type="submit" value="Add" />
            </form>

            <MemoizedListOfItems items={items} onRemove={handleRemove} />
        </div>
    );
};

export const App = () => {
    console.log('Rendering <App />');

    const [items, setItems] = useState(initialState);
    const [newItem, setNewItem] = useState({ value: '', id: uuid() });

    const addItem = event => {
        event.preventDefault();

        if (newItem.value === '') {
            return;
        }

        setItems([...items, newItem]);

        setNewItem({ value: '', id: uuid() });
    };

    const handleRemove = id => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <div className="App">
            <form onSubmit={addItem}>
                <input
                    placeholder="New number"
                    type="number"
                    value={newItem.value}
                    onChange={({ target: { value } }) => setNewItem({ value, id: newItem.id })}
                />

                <input type="submit" value="Add" />
            </form>
            <ColorPicker />

            <ListOfItems items={items} onRemove={handleRemove} />
        </div>
    );
};

App.whyDidYouRender = true;
