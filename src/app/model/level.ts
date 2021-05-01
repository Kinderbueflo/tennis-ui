import { IRange } from "./range";

export interface ILevel {

    profit: number;
    setsPerMatch: number;
    numberOfMatch: number;
    ranges: IRange[];
}