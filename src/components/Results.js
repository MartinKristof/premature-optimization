import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Form from './Form';
import ResultList from './ResultList';

const transformData = hits => {
    return hits.filter(({ title }) => title).map(({ title }, index) => ({ title, id: index + 1 }));
};

const fetchHits = async query => {
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
    const { hits } = await response.json();

    return hits;
};

const Results = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [activeItem, setActiveItem] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const hits = await fetchHits(query);

            setData(hits);
        };

        fetchData();
    }, [query]);

    const items = useMemo(() => transformData(data), [data]);

    const handleBlur = useCallback(() => {
        inputRef.current.blur();
    }, []);

    const handleSubmit = useCallback(
        event => {
            event.preventDefault();
            setQuery(inputRef.current.value);
            handleBlur();
        },
        [handleBlur],
    );

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <Form inputRef={inputRef} handleSubmit={handleSubmit} />
            <ResultList
                items={items}
                setActiveItem={setActiveItem}
                activeItem={activeItem}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
            />
        </>
    );
};

export default Results;
