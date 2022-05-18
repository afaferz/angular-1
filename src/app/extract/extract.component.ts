import { TransferService } from './../services/transfer.service';
import { ITransfer } from './../interfaces/Transfers';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-extract',
    templateUrl: './extract.component.html',
    styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

    transfers: ITransfer[]

    constructor(private transferService: TransferService) {

    }

    ngOnInit(): void {
        this.transferService.getAllTransfers().subscribe((transfers: ITransfer[]) => {
            console.table(transfers)
            this.transfers = transfers
        })
    }

}
