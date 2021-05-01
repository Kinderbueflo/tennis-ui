import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { timer } from "rxjs";
import { IGlobalStatistics } from "../model/global";

@Component({
    selector: 'tennis-line',
    templateUrl: './line.component.html'
})
export class LineComponent implements OnChanges {

    @Input() globalStatistics: IGlobalStatistics[];
    public barChartOptions = {
        legend: {
            labels: {
                fontSize: 20
            }
        },
        title: {
            fontSize: 30
        },
        scales: {
            xAxes: [{
                offset: true,
                ticks: {
                    fontSize: 20
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Odds',
                    fontSize: 25
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 20
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Ratio',
                    fontSize: 28
                }
            }]
        },
        tooltip: {
            backgroundColor: 'rgba(36, 117, 198, 1)'
        },
        responsive: true
    };
    public barChartType = 'line';
    public barChartLegend = true;
    public barChartLabels = [];
    public barChartData;

    ngOnChanges(changes: SimpleChanges): void {
        let profitability = [];
        let allLevel = [];
        let atpLevel = [];
        let masterLevel = [];
        let grandSlamLevel = [];

        this.globalStatistics.forEach(element => {
            this.barChartLabels.push(element.odds);
            profitability.push(element.profitability);
            allLevel.push(element.winRatioAllLevel);
            atpLevel.push(element.winRatioATPLevel);
            masterLevel.push(element.winRatioMasterLevel);
            grandSlamLevel.push(element.winRatioGrandSlamLevel);
        });

        this.barChartData = [
            { data: profitability, label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
            { data: allLevel, label: 'All Level', type: 'line', borderColor: 'rgba(26, 140, 255, 1)', backgroundColor: 'rgba(26, 140, 255, 0)', pointBackgroundColor: "rgba(26, 140, 255, 1)", pointBorderColor:'rgba(26, 140, 255, 1)'},
            { data: grandSlamLevel, label: 'Grand Slam', type: 'line', borderColor: 'rgba(255, 51, 51, 1)', backgroundColor: 'rgba(255, 51, 51, 0)', pointBackgroundColor: "rgba(255, 51, 51, 1)", pointBorderColor:'rgba(255, 51, 51, 1)'},
            { data: masterLevel, label: 'Masters', type: 'line', borderColor: 'rgba(255, 153, 0, 1)', backgroundColor: 'rgba(255, 153, 0, 0)', pointBackgroundColor: "rgba(255, 153, 0, 1)", pointBorderColor:'rgba(255, 153, 0, 1)'},
            { data: atpLevel, label: 'ATP', type: 'line', borderColor: 'rgba(230, 230, 0, 1)', backgroundColor: 'rgba(230, 230, 0, 0)', pointBackgroundColor: "rgba(230, 230, 0, 1)", pointBorderColor:'rgba(230, 230, 0, 1)'}
        ];
    }
}