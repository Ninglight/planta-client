import { IPlant, ILocation } from "../models/plant";

export const plantsMock: IPlant[] = [
    {
        name: "Solanum jasminoïdes",
        location: "extern",
        thirst: 70,
        thumbnail: "images/thumbnail/solanum-jasminoïdes.jpg"
    },
    {
        name: "Asparagus plumosus",
        location: "intern",
        thirst: 30,
        thumbnail: "images/thumbnail/asparagus-plumosus.jpg"
    },
    {
        name: "Alocasia Calidora",
        location: "intern",
        thirst: 30,
        thumbnail: "images/thumbnail/alocasia-calidora.jpg"
    },
    {
        name: "Pachira Gevlochten",
        location: "intern",
        thirst: 50,
        thumbnail: "images/thumbnail/pachira-gevlochten.jpg"
    },
    {
        name: "Myriophyllum Hippuroides",
        location: "water",
        thirst: 100,
        thumbnail: "images/thumbnail/myriophyllum-hippuroides.jpg"
    },
    {
        name: "Lysimachia Aurea",
        location: "water",
        thirst: 100,
        thumbnail: "images/thumbnail/lysimachia-aurea.jpg"
    },
    {
        name: "Thym officinal",
        location: "extern",
        thirst: 30,
        thumbnail: "images/thumbnail/thym-officinal.jpg"
    }
]


import internIcon from '../views/assets/icons/intern.svg';
import externIcon from '../views/assets/icons/extern.svg';
import waterIcon from '../views/assets/icons/water.svg';

export const locations: ILocation[] = [
    {
        name: 'intern',
        icon: internIcon
    },
    {
        name: 'extern',
        icon: externIcon
    },
    {
        name: 'water',
        icon: waterIcon
    }
]