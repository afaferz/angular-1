export interface ITransfer {
    id?: number | string;
    value: number;
    to: number | string;
    date?: Date | string
}
