// define
import React from 'react';
import styles from './CardPlant.module.css';
import { ILocationTypes, IThirstTypes } from '../../../models';
import LocationIcon from '../../icons/location';
import ThirstIcon from '../../icons/thirst';

type Props = {
    key?: number;
    thumbnail?: string;
    name?: string;
    location?: ILocationTypes;
    thirst?: IThirstTypes;
    onClick?: () => void;
    className?: string;
};

const CardPlant: React.FC<Props> = ({ name, location, thumbnail, thirst }) => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <img src={thumbnail} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.indicator}>
                    <p className={styles.location}>
                        <LocationIcon location={location} size={18} />
                    </p>
                    <p className={styles.thirst}>
                        <ThirstIcon thirst={thirst} size={18} />
                    </p>
                </div>
                <p className={styles.title}>{name}</p>
                <hr className={styles.line}/>
            </div>
            
        </div>


    )
}

export default CardPlant
