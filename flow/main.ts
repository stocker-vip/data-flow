import { filterTime } from "./filter";
import { Flow } from "./flow";
import { request } from "./request";

const main = async () => {
    console.log("start")
	const flowMap = new Map<string, Flow>();
	setInterval(async () => {
		const data = await request();
		filterTime(data).map((it) => {
			if (!flowMap.get(it.f12)) {
				flowMap.set(it.f12, new Flow(`${it.f14}.${it.f13}.${it.f12}`));
			}
			const flow = flowMap.get(it.f12);
			flow?.next(it);
		});
	}, 60 * 1000);
};

main();