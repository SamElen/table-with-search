import { SvgIcon } from '@mui/material';
import styles from './header.module.scss';
import { ReactComponent as mainlLogo } from '../../images/mainLogo.svg';
import { ReactComponent as userIcon } from '../../images/userIcon.svg';
import { ReactComponent as upgrade } from '../../images/upgradeButton.svg';
import { ReactComponent as help } from '../../images/helpButton.svg';

function Header() {
    return (
      <div className={styles.AppHeader}>
        <SvgIcon 
          component={mainlLogo}
          className={styles.Logo}
          viewBox="10 3 187 42"/>
        <div className={styles.UserInfoArea}>
          <SvgIcon 
            component={help}
            className={styles.UserInfo}
            viewBox="0 0 96 45"/>
          <SvgIcon 
            component={upgrade}
            className={styles.UserInfo}
            viewBox="0 2 112 48"/>
          <SvgIcon 
            component={userIcon}
            className={styles.UserInfo}
            viewBox="0 0 40 40"/>
        </div>
      </div>
    )
}

export default Header;