import { SvgIcon } from '@mui/material';
import clsx from 'clsx';
import styles from './filterBar.module.scss';
import FilterBarProps from './filterBarProps';
import { Filter } from '../../models/filter';
import { ReactComponent as evenRowsButton } from '../../images/evenRowsButton.svg';
import { ReactComponent as oddRowsButton } from '../../images/oddRowsButton.svg';
import { ReactComponent as allDataButton } from '../../images/allDataButton.svg';

function FilterBar (props: FilterBarProps) {
    const { selectedFilter, setSelectedFilter } = props;

    return(
      <>
        <div onClick={() => {setSelectedFilter(Filter.even)}} className={clsx(styles.MenuItem, {[styles.Choosen]: selectedFilter === Filter.even})}>
          <SvgIcon component={evenRowsButton} className={styles.Button} viewBox="0 0 260 56"/>
        </div>
        <div onClick={() => {setSelectedFilter(Filter.odd)}} className={clsx(styles.MenuItem, {[styles.Choosen]: selectedFilter === Filter.odd})}>
          <SvgIcon component={oddRowsButton} className={styles.Button} viewBox="0 0 260 56"/>
        </div>
        <div onClick={() => {setSelectedFilter(Filter.all)}} className={clsx(styles.MenuItem, {[styles.Choosen]: selectedFilter === Filter.all})}>
          <SvgIcon component={allDataButton} className={styles.Button} viewBox="0 0 260 56"/>
        </div>
      </>
    );
}

export default FilterBar; 