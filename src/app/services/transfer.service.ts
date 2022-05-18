import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransfer } from '../interfaces/Transfers';

@Injectable({
    providedIn: 'root'
})
export class TransferService {

    private _transfers: ITransfer[]
    private url = "http://localhost:3000/transfers";

    constructor(private httpClient: HttpClient) {
        this._transfers = []
    }

    get transfers(): ITransfer[] {
        return this._transfers
    }

    public getAllTransfers(): Observable<ITransfer[]> {
        return this.httpClient.get<ITransfer[]>(this.url)
    }

    public add(transfer: ITransfer): Observable<ITransfer> {
        this.hidratate(transfer)
        this.transfers.push(transfer)
        return this.httpClient.post<ITransfer>(this.url, transfer)
    }

    private hidratate(transfer: ITransfer) {
        transfer.date = new Date();
    }
}
