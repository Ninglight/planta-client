import React from 'react';
import styles from './Header.module.css';
import PlantIcon from '../../icons/plant';

const Header: React.FC = () => {

    return (
        <div className={styles.header} >
            <div className={styles.logo}>
                <PlantIcon size={70} />
            </div>
        </div>
    )
}

export default Header
