import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPlayer } from "src/app/model/player";
import { IStatistics } from "src/app/model/statistics";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private url = '/server/tennis-app/statistics/';

    constructor(private http: HttpClient) {

    }

    getAllPlayers(): Observable<IPlayer[]> {
        return this.http.get<IPlayer[]>(this.url);
    }

    getStatistics(id: number): Observable<IStatistics> {
        return this.http.get<IStatistics>(this.url + id);
    }
}