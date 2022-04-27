import { useState } from 'react';
import { SvgIcon } from '@mui/material';
import NavigationBar from './components/navigationBar/navigationBar';
import Header from './components/header/header';
import Table from './components/table/table';
import SearchBar from './components/searchBar/searchBar';
import FilterBar from './components/filterBar/filterBar';
import { ReactComponent as dashboardHeader } from './images/dashboardText.svg';
import { ReactComponent as createNewButton } from './images/createNewButton.svg';
import { Filter } from './models/filter';
import styles from './App.module.scss';

function App() {
  const [search, setSearch] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<Filter>(Filter.all);

  return (
    <div className={styles.App}>
      <Header/>
      <NavigationBar/>
      <div className={styles.Content}>
        <div className={styles.FiltersArea}>
          <SvgIcon component={createNewButton} className={styles.CreateNewButton} viewBox="0 0 260 104"/>
          <FilterBar selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
        </div>
        <div className={styles.TableArea}>
          <SvgIcon component={dashboardHeader} className={styles.Header} viewBox="0 0 176 27"/>
          <Table selectedFilter={selectedFilter} search={search}/>
          <SearchBar search={search} setSearch={setSearch}/>
        </div>
      </div>
    </div>
  );
}

export default App;