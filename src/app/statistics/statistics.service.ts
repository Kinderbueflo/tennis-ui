import { Injectable } from "@angular/core";
import { IRange } from "src/app/model/range";
import { IStatistics } from "src/app/model/statistics";

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {

    private defeatsInRowPlayerOne: number;
    private defeatsInRowPlayerTwo: number;
    private numberOfMatchPlayerOne: number;
    private numberOfMatchPlayerTwo: number;
    private profitPlayerOne: number;
    private profitPlayerTwo: number;
    private setsPerMatchPlayerOne: number;
    private setsPerMatchPlayerTwo: number;
    private rangesPlayerOne: IRange[];
    private rangesPlayerTwo: IRange[];

    getDefeatsInRowPlayerOne(): number {
        return this.defeatsInRowPlayerOne;
    }
    getDefeatsInRowPlayerTwo(): number {
        return this.defeatsInRowPlayerTwo;
    }
    getNumberOfMatchPlayerOne(): number {
        return this.numberOfMatchPlayerOne;
    }
    getNumberOfMatchPlayerTwo(): number {
        return this.numberOfMatchPlayerTwo;
    }
    getProfitPlayerOne(): number {
        return this.profitPlayerOne;
    }
    getProfitPlayerTwo(): number {
        return this.profitPlayerTwo;
    }
    getSetsPerMatchPlayerOne(): number {
        return this.setsPerMatchPlayerOne;
    }
    getSetsPerMatchPlayerTwo(): number {
        return this.setsPerMatchPlayerTwo;
    }
    getRangesPlayerOne(): IRange[] {
        return this.rangesPlayerOne;
    }
    getRangesPlayerTwo(): IRange[] {
        return this.rangesPlayerTwo;
    }
    setDefeatsInRowPlayerOne(defeatsInRowPlayerOne: number): void {
        this.defeatsInRowPlayerOne = defeatsInRowPlayerOne;
    }
    setDefeatsInRowPlayerTwo(defeatsInRowPlayerTwo: number): void {
        this.defeatsInRowPlayerTwo = defeatsInRowPlayerTwo;
    }
    setNumberOfMatchPlayerOne(numberOfMatchPlayerOne: number): void {
        this.numberOfMatchPlayerOne = numberOfMatchPlayerOne;
    }
    setNumberOfMatchPlayerTwo(numberOfMatchPlayerTwo: number): void {
        this.numberOfMatchPlayerTwo = numberOfMatchPlayerTwo;
    }
    setProfitPlayerOne(profitPlayerOne: number): void {
        this.profitPlayerOne = profitPlayerOne;
    }
    setProfitPlayerTwo(profitPlayerTwo: number): void {
        this.profitPlayerTwo = profitPlayerTwo;
    }
    setSetsPerMatchPlayerOne(setsPerMatchPlayerOne: number): void {
        this.setsPerMatchPlayerOne = setsPerMatchPlayerOne;
    }
    setSetsPerMatchPlayerTwo(setsPerMatchPlayerTwo: number): void {
        this.setsPerMatchPlayerTwo = setsPerMatchPlayerTwo;
    }
    setRangesPlayerOne(rangesPlayerOne: IRange[]): void {
        this.rangesPlayerOne = rangesPlayerOne;
    }
    setRangesPlayerTwo(rangesPlayerTwo: IRange[]): void {
        this.rangesPlayerTwo = rangesPlayerTwo;
    }
}