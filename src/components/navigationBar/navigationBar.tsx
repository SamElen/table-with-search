import { SvgIcon } from '@mui/material';
import styles from './navigationBar.module.scss';
import { ReactComponent as analyze } from '../../images/analyze.svg';
import { ReactComponent as myCampaigns } from '../../images/myCampaigns.svg';
import { ReactComponent as configure } from '../../images/configure.svg';

function NavigationBar() {
    return (
        <div className={styles.NavigationBar}>
            <div className={styles.NavMenu}>
                <SvgIcon 
                    component={analyze}
                    className={styles.MenuItem}
                    viewBox="0 0 99 56"/>
                <SvgIcon 
                    component={myCampaigns}
                    className={styles.MenuItem}
                    viewBox="0 0 153 56"/>
                <SvgIcon 
                    component={configure}
                    className={styles.MenuItem}
                    viewBox="0 0 112 56"/>
            </div>
        </div>
    );
}

export default NavigationBar;