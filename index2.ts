import { from, scan } from "rxjs";
import { getData } from "./data";

const ObserResult = async (code: string) => {
	const result = await getData(code);
	return from(result[1])
};


export const flowCode = (code: string) => {
    ObserResult(code).then(res =>{
        res.subscribe((it)=>{
           if(it[1] > 50){
               console.log(it)
           }
        })
   })
}
