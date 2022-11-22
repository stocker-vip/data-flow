import { Observable } from "rxjs";

export interface Data {
    time:string;
    data:number;
}

export interface Flow {
    code:string;
    flow:Observable<Data>
}