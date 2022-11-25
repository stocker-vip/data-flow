const average = (arr: number[]) => arr.reduce((p, c) => p + c, 0) / arr.length;

const group = (arr: number[], size: number) => {
    const result = [];
    for(let i=0;i<arr.length;i++){
        if(i<size){
            result.push(arr.slice(0,i+1))
        }else{
            result.push(arr.slice(i-size+1,i+1))
        }
    }
    return result;
}

export const maN = (n:number) =>  (arr: number[]) => {
    const result = group(arr,n);
    return result.map(it=>average(it))
}

export const up = (arr: number[]) =>  arr.every((value,index)=> index === 0 || value > arr[index -1])

export const down = (arr: number[]) => arr.every((value,index)=> index === 0 || value < arr[index -1])

export const ud =(n:number) =>(time:string[]) => (arr: number[]) => {
    group(arr,2*n+1).map((it,index)=>{
        if(it.length === 2*n+1){
            if(up(it.slice(0,n)) && down(it.slice(n,2*n+1))){
                console.log("卖出：",time[index])
            }
            if(down(it.slice(0,n)) && up(it.slice(n,2*n+1))){
                console.log("买入：", time[index])
            }
        }
    })
}