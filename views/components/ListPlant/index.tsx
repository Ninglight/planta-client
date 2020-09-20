// define
import React from 'react';
import { IPlant } from '../../../models';
import CardPlant from '../CardPlant';
import styles from './ListPlant.module.css';

type Props = {
    plants: IPlant[];
};

const ListPlants: React.FC<Props> = ({ plants }) => {
    return (
        <div className={styles.list}>
            {plants.map((plant, index) => (
                <CardPlant key={index} thumbnail={plant.thumbnail} location={plant.location} name={plant.name} thirst={plant.thirst} />
            ))}
        </div>
    )
}

export default ListPlants
