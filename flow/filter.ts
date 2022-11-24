import dayjs from "dayjs";
import { FlowData } from "./request";

export const filterTime = (data:FlowData[]) => {
    console.log("Filter Time")
    return data.filter((it)=>{
       return  dayjs(it.f124 *1000).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD")
    })
}