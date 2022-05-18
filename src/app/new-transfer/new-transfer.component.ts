import { ITransfer } from './../interfaces/Transfers';
import { Component, EventEmitter, Output } from "@angular/core";
import { TransferService } from '../services/transfer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-transfer',
    templateUrl: "./new-transfer.component.html",
    styleUrls: ["./new-transfer.component.scss"],
})
export class NewTransferComponent {

    @Output() 'on-transfer' = new EventEmitter<ITransfer>();

    constructor(private transferService: TransferService, private router: Router) {

    }

    public _value: number;
    public _to: number;

    public transfer(): void {
        const transfer = { value: this._value, to: this._to }
        // this['on-transfer'].emit(transfer)
        this.transferService.add(transfer).subscribe(result => {
            console.log(result)
            this.clearFields()
            this.router.navigateByUrl('extract')
        })
    }

    public clearFields(): void {
        this._value = 0;
        this._to = 0
    }
}
