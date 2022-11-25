import data, { getFlow, ResultData } from "./data";
import { getData } from "./data";
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
import { maN, ud, up } from "./fn";

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

const code = getUrlPara("code") || "90.BK0425";
flowCode(code);

const setChart =
	(dom: string, fn: (code: string) => Promise<ResultData>) =>
	(code: string) => {
		let chartDom = document.getElementById(dom)!;
		let myChart = echarts.init(chartDom);
		let option: EChartsOption;

		fn(code).then((res) => {
			option = {
				title: {
					text: res[0],
				},
				tooltip: {
					trigger: "axis",
				},
				xAxis: {
					type: "category",
					data: res[1].map((it) => it[0]),
				},
				yAxis: {
					type: "value",
				},
				series: [
					{
						data: res[1].map((it) => it[1]),
						type: "line",
						smooth: true,
					},
				],
			};
			option && myChart.setOption(option);
		});
	};

const setChart2 =
	(dom: string, title: string) =>
	(category: string[]) =>
	(data: number[][]) => {
		let chartDom = document.getElementById(dom)!;
		let myChart = echarts.init(chartDom);
		let option: EChartsOption;
		option = {
			title: {
				text: title,
			},
			tooltip: {
				trigger: "axis",
			},
			xAxis: {
				type: "category",
				data: category,
			},
			yAxis: {
				type: "value",
			},
			series: data.map((it) => ({
				data: it,
				type: "line",
				smooth: true,
			})),
		};
		option && myChart.setOption(option);
	};

const items = async () => {
	const data = await fetch(
		"https://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=500&po=1&np=1&fields=f12%2Cf13%2Cf14%2Cf62&fid=f62&fs=m:90+t:2&ut=b2884a393a59ad64002292a3e90d46a5&_=1669140112756"
	);
	const d = await data.json();
	d.data.diff.map((it: any) => {
		const link = document.createElement("a");
		link.href = `./index.html?code=${it.f13}.${it.f12}`;
		link.innerText = it.f14;
		document.getElementById("code")!.appendChild(link);
	});
};
items();

setChart("main", getData)(code);
// setChart("mainflow", getFlow)(code);

const Ma5Flow = async (code: string) => {
	const flow = await getFlow(code);
	const name = flow[0];
	const data = flow[1];
	const flowData = data.map((it) => it[1]);
	const category = data.map((it) => it[0]);
	const ma = maN(20);
	const ma5Flow = ma(ma(flowData));

	if(up(ma5Flow.slice(0,5))){
		console.log(name, 'up')
	}

	ud(2)(category)(ma5Flow)

	setChart2("mainflow", name)(category)([ ma5Flow]);
};
Ma5Flow(code)



function getUrlPara(name: string) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return r[2];
	return null;
}
