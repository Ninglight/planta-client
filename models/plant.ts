import { IContent } from "./content";
import { IImage } from "./image";

export interface IPlant {
    date?: string;
    title?: IContent[],
    content?: IContent[],
    coverimage?: IImage,
    excerpt?: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    author?: null,
    name?: string;
    location?: ILocationTypes;
    thirst?: IThirstTypes;
    thumbnail?: any;
}

export interface ILocation {
    name: ILocationTypes;
    icon: string;
}

export type ILocationTypes = 'extern' | 'intern' | 'water';

export type IThirstTypes = 100 | 70 | 50 | 30 | 0;