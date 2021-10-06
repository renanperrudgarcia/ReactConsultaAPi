import React, { useState } from 'react';
import useDebounce from './useDebounce';

const SearchInput = ({ value, onChange }) => {
    const [displayValue, setdisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(event) {
        setdisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }
    return (
        <input type="search" placeholder="Digite o nome do Anime" value={displayValue} onChange={handleChange} />
    )
}
export default SearchInput