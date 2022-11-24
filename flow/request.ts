import axios from "axios"

export type Response = {
    data: {
        diff:FlowData[]
    }
}

export type FlowData = {
    "f12": string,
    "f13": number,
    "f14": string,
    "f62": number,
    "f124": number,
    "f128":string,
    "f140":string,
  }

export const request = async () => {
    const data = await axios.get<Response>("https://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=500&po=1&np=1&fields=f12,f13,f14,f62,f128,f124,140&fid=f62&fs=m%3A90%2Bt%3A2")
    // console.log(data.data.data.diff)   
    console.log("Send Request")
    return data.data.data.diff
}