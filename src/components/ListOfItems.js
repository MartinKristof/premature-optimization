import { memo, useCallback } from 'react';
import { Item, MemoizedItem } from './Item';

export const MemoizedListOfItems = memo(({ items, onRemove }) => {
    console.log('Rendering <MemoizedListOfItems />');

    const handleRemove = useCallback(id => onRemove(id), [onRemove]); // highlight-line

    if (items === []) {
        return null;
    }

    return (
        <ul>
            {items.map(item => (
                <MemoizedItem {...item} key={item.id} onRemove={handleRemove} />
            ))}
        </ul>
    );
});

MemoizedListOfItems.displayName = 'MemoizedListOfItems';

export const ListOfItems = ({ items, onRemove }) => {
    console.log('Rendering <ListOfItems />');

    if (items === []) {
        return null;
    }

    return (
        <ul>
            {items.map(item => (
                <Item {...item} key={item.id} onRemove={id => onRemove(id)} />
            ))}
        </ul>
    );
};

ListOfItems.whyDidYouRender = true;
