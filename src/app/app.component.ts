import { TransferService } from './services/transfer.service';
import { ITransfer } from './interfaces/Transfers';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'bytebank';

    constructor(private transferService: TransferService) {

    }

    public transfer($event: ITransfer): void {
        this.transferService.add($event)
    }
}
