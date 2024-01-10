import { Pipe, PipeTransform } from "@angular/core";
import { Products } from "../products.class";


@Pipe({
   name : 'filterProducts' 
})
export class FilterProductsPipe implements PipeTransform {

    transform(value: Products[], serchedValue : string) {

        if(value === null || value === undefined || serchedValue === null || serchedValue === undefined){
            return value;
        }
        else{
          return value.filter((x)=>{
                return x.name.toLowerCase().includes(serchedValue.toLowerCase())
            })
        }
        
    }

}