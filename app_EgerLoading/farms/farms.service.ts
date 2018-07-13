import { Injectable } from "@angular/core";

@Injectable({
     providedIn: 'root'
})

export class FarmProduction{
    private produce = new Array<string>();
    constructor(private id:number,private farm:string){

    }

    getId(){
        return this.id;
    }

    addProduce(product:string){
        this.produce.push(product);
    }
}