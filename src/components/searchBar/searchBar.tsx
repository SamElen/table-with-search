import React from 'react';
import styles from './searchBar.module.scss';
import searchBarProps from './searchBarProps';

function SearchBar(props: searchBarProps) {
    const { search, setSearch } = props;
    const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value); 
    }

    return (
        <>
          <input placeholder=' Search...' value={search} onChange={updateSearch} className={styles.Search}/>
        </>
    );
}

export default SearchBar;