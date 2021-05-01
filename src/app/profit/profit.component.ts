import { Component, OnInit } from "@angular/core";
import { IProfit } from "../model/profit";
import { ProfitService } from "./profit.service";

@Component({
    templateUrl: './profit.component.html',
  })
  export class ProfitComponent implements OnInit {

    sixMonth : boolean;
    oneYear : boolean;
    threeMonth : boolean;
    threeWeeks : boolean;

    players: string[] = [];
    profits : IProfit[];
    profitsFiltered : IProfit[];
    _profit: string;
    
    constructor(private profitService: ProfitService) {}

    ngOnInit(): void {
        this.sixMonth = false;
        this.oneYear = false;
        this.threeMonth = false;
        this.threeWeeks = false;
    }

    sixMonthRanking() {
      this.sixMonth = true;
      this.oneYear = false;
      this.threeMonth = false;
      this.threeWeeks = false;
      this.getProfit("Six_Month");
    }

    oneYearRanking() {
      this.sixMonth = false;
      this.oneYear = true;
      this.threeMonth = false;
      this.threeWeeks = false;
      this.getProfit("One_Year");
    }

    threeMonthRanking() {
      this.sixMonth = false;
      this.oneYear = false;
      this.threeMonth = true;
      this.threeWeeks = false;
      this.getProfit("Three_Month");
    }

    threeWeeksRanking() {
      this.sixMonth = false;
      this.oneYear = false;
      this.threeMonth = false;
      this.threeWeeks = true;
      this.getProfit("Three_Weeks");
    }

    getProfit(period: string) {
      this.profitService.getProfit(period).subscribe(data => {
        this.profits = data;
        this.players = [];
        for (let entry of this.profits) {
          this.players.push(entry.player);
        }
        this.profitsFiltered = this.profits;
      });
    }

    filter(filterBy: string): IProfit[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.profits.filter((data: IProfit) => data.player.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    get profit(): string {
      return this._profit;
    }
  
    set profit(value: string) {
      this._profit = value;
      this.profitsFiltered = this.profit ? this.filter(this.profit) : this.profits;
    }
  }