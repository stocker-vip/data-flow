import data from "./data";
import { d1, getData } from "./data";
import * as echarts from "echarts/core";
import {
	GridComponent,
	GridComponentOption,
	TooltipComponent,
	TitleComponent,
} from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import dayjs from "dayjs";
import { flowCode } from "./index2";

echarts.use([
	GridComponent,
	TooltipComponent,
	TitleComponent,
	LineChart,
	CanvasRenderer,
	UniversalTransition,
]);
type EChartsOption = echarts.ComposeOption<
	GridComponentOption | LineSeriesOption
>;

var chartDom = document.getElementById("main")!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

const code = getUrlPara("code") || "90.BK0425";
flowCode(code);
getData(code).then((it: any) => {
	option = {
		xAxis: {
			type: "category",
			data: it[1].map((it: any[]) => it[0]),
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: it[1].map((it: any[]) => it[1]),
				type: "line",
			},
		],
		tooltip: {
			show: true,
		},
		title: {
			text: it[0],
			show: true,
		},
	};

	option && myChart.setOption(option);
});
const items = async () => {
	const data = await fetch(
		"https://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=500&po=1&np=1&fields=f12%2Cf13%2Cf14%2Cf62&fid=f62&fs=m:90+t:3&ut=b2884a393a59ad64002292a3e90d46a5&_=1669140112756"
	);
	const d = await data.json();
	console.log(d);
	d.data.diff.map((it: any) => {
		const link = document.createElement("a");
		link.href = `./index.html?code=${it.f13}.${it.f12}`;
		link.innerText = it.f14;
		document.getElementById("code")!.appendChild(link);
	});
};
items();

function getUrlPara(name: string) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return r[2];
	return null;
}
