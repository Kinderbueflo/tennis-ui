import { Component, OnInit } from "@angular/core";
import { IGlobalStatistics } from "../model/global";
import { GlobalStatisticsService } from "./global.service";

@Component({
  templateUrl: './global.component.html',
})
export class GlobalStatisticsComponent implements OnInit {

  globalStatistics: IGlobalStatistics[];

  constructor(private globalService: GlobalStatisticsService) {

  }

  ngOnInit(): void {
    this.globalService.getGlobalStatistics().subscribe(
      data => {
        this.globalStatistics = data;
      });
  }
}