import React from 'react';
import classes from './navDrawer.module.css';
import Menu from 'Components/Menu';
import { useDrawer } from 'Talons/Drawer/useDrawer';
import Icon from 'Components/Icon';


const NavDrawer = (props) => {
    const { handleToggleDrawer } = useDrawer();
    return (
        <div className={classes.root}>
            <Menu isMobile={true} showForScreens={['mobile', 'tablet']} />
        </div>
    );
}

export default NavDrawer;