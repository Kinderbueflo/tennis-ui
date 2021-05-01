import { IPeriod } from "./period";

export interface IStatistics {

    playerName: string;
    defeatsInRow: number;
    sixMonth: IPeriod;
    oneYear: IPeriod;
    twoYear: IPeriod;
    all: IPeriod;
}