import axios from "axios";
import dayjs from "dayjs";
import { Subject } from "rxjs";
import { Data } from "../types";
import { filterTime } from "./filter";
import { FlowData } from "./request";

export class Flow {
	private items: FlowData[];
	constructor(public code: string) {
		this.items = [];
	}
	next(data: FlowData) {
		if (this.items.length > 0) {
			const last = this.items[this.items.length - 1];
			if (data.f124 !== last.f124) {
				console.log("push data :", data)
				this.items.push(data);
			}
		}else{
			this.items.push(data);
		}
		if(this.items.length >2){
			this.calule();
		}
	}

	calule() {
		const [pre, cur] = this.items.slice(-2);
		const score = Math.abs(Math.abs(cur.f62) - Math.abs(pre.f62));
		const average = Math.abs(pre.f62) / this.items.length;
		const percent = score / average;
		if (percent > 50) {
			console.log("get MSg:",[this.code, dayjs(cur.f124 * 1000).format("HH:mm"), score])
			this.sendMsg(cur,score);
		}
	}

	sendMsg(info: FlowData,score:number) {
		axios.post(
			"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=3946e1f9-4326-4a9b-9945-887649475ac3",
			{
				msgtype: "markdown",
				markdown: {
					content: `板块：<font color="warning">${info.f14}</font>
                 >时间:<font color="comment">${dayjs(info.f124 * 1000).format("HH:mm")}</font>
                 >分数:<font color="comment">${score}</font>
				 >优选股:<font color="comment">${info.f128} - ${info.f140}</font>
				 `,
				},
			}
		);
	}
	clear(){
		 setInterval(()=>{
			 if( this.items.length > 0){
				if (filterTime(this.items).length  === 0 ) {
					console.log("clear")
					this.items = [];
				}
			 }
		 },1 * 60 * 60 * 1000)
	}
}


