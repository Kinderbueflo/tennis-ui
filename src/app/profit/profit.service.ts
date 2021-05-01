import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGlobalStatistics } from "../model/global";
import { IProfit } from "../model/profit";

@Injectable({
    providedIn: 'root'
})
export class ProfitService {

    private url = '/server/tennis-app/profit/';

    constructor(private http: HttpClient) {

    }

    getProfit(period: string): Observable<IProfit[]> {
        return this.http.get<IProfit[]>(this.url + period);
    }
}