import { FC, ChangeEvent } from 'react';
import { Search } from '@/app/components';
import styles from './search-input.module.css';

interface SearchInputProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ placeholder = 'Search', onSearch }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        onSearch(query);
    };

    return (
        <div className={styles.root}>
            <Search />
            <input
                className={styles.input}
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchInput;
