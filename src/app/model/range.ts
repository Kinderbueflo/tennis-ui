import { ISurface } from "./surface";

export interface IRange {

    lowOdds: number;
    highOdds: number;
    winRatioAllPlayer: number;
    clay: ISurface;
    grass: ISurface;
    hard: ISurface;
    all: ISurface;
}