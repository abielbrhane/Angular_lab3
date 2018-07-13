import { Injectable } from "@angular/core";
import { FarmProduction } from '../farms/farms.service';

@Injectable()
export class DbService{
    private farmData: FarmProduction[]=[];
    constructor(){
        this.addHardCodedData();
    }

    private addHardCodedData(){
        let obj1=new FarmProduction(1,'Natural Prairie 1');
        obj1.addProduce('Celery');
    obj1.addProduce('Broccoli');

    let obj2=new FarmProduction(2, 'Natural Prairie 2');
    obj2.addProduce('Cabbage');
    obj2.addProduce('Carrot');

    let obj3=new FarmProduction(3, 'Natural Prairie 3');
    obj3.addProduce('potato');
    obj3.addProduce('onion');

    this.farmData.push(obj1);
    this.farmData.push(obj2);
    this.farmData.push(obj3);
    }

    getData(id){
        for(var idx in this.farmData){
            if(this.farmData[idx].getId()==id){
                return JSON.stringify(this.farmData[idx], undefined,2);
            }
        }
    }

    getAllData(){
        return this.farmData;
    }
}