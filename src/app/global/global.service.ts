import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGlobalStatistics } from "../model/global";

@Injectable({
    providedIn: 'root'
})
export class GlobalStatisticsService {

    private url = '/server/tennis-app/global/';

    constructor(private http: HttpClient) {

    }

    getGlobalStatistics(): Observable<IGlobalStatistics[]> {
        return this.http.get<IGlobalStatistics[]>(this.url);
    }
}