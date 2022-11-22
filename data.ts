import dayjs from "dayjs";

const data = [
	"2022-11-22 09:31,-3643410.0",
	"2022-11-22 09:32,-6872728.0",
	"2022-11-22 09:33,12148304.0",
	"2022-11-22 09:34,20395516.0",
	"2022-11-22 09:35,21496765.0",
	"2022-11-22 09:36,20789630.0",
	"2022-11-22 09:37,13619375.0",
	"2022-11-22 09:38,6317756.0",
	"2022-11-22 09:39,11023796.0",
	"2022-11-22 09:40,8237606.0",
	"2022-11-22 09:41,8437559.0",
	"2022-11-22 09:42,5810646.0",
	"2022-11-22 09:43,-845396.0",
	"2022-11-22 09:44,-1433498.0",
	"2022-11-22 09:45,268480.0",
	"2022-11-22 09:46,-722744.0",
	"2022-11-22 09:47,-1448113.0",
	"2022-11-22 09:48,-7652739.0",
	"2022-11-22 09:49,-11105014.0",
	"2022-11-22 09:50,-10486339.0",
	"2022-11-22 09:51,-11812893.0",
	"2022-11-22 09:52,-13182827.0",
	"2022-11-22 09:53,-11664220.0",
	"2022-11-22 09:54,-16600895.0",
	"2022-11-22 09:55,-18061486.0",
	"2022-11-22 09:56,-20627289.0",
	"2022-11-22 09:57,-19967498.0",
	"2022-11-22 09:58,-20698006.0",
	"2022-11-22 09:59,-20029398.0",
	"2022-11-22 10:00,-22704584.0",
	"2022-11-22 10:01,-18597024.0",
	"2022-11-22 10:02,-20184829.0",
	"2022-11-22 10:03,-21991750.0",
	"2022-11-22 10:04,-25688594.0",
	"2022-11-22 10:05,-30903662.0",
	"2022-11-22 10:06,-29826056.0",
	"2022-11-22 10:07,-27943766.0",
	"2022-11-22 10:08,-29963033.0",
	"2022-11-22 10:09,-30887021.0",
	"2022-11-22 10:10,-30022987.0",
	"2022-11-22 10:11,-27518010.0",
	"2022-11-22 10:12,-28653586.0",
	"2022-11-22 10:13,-31425339.0",
	"2022-11-22 10:14,-32784399.0",
	"2022-11-22 10:15,-52660040.0",
	"2022-11-22 10:16,-59008350.0",
	"2022-11-22 10:17,-59990584.0",
	"2022-11-22 10:18,-57654343.0",
	"2022-11-22 10:19,-54656858.0",
	"2022-11-22 10:20,-55225233.0",
	"2022-11-22 10:21,-55102428.0",
	"2022-11-22 10:22,-57874506.0",
	"2022-11-22 10:23,-58924085.0",
	"2022-11-22 10:24,-59696670.0",
	"2022-11-22 10:25,-59740893.0",
	"2022-11-22 10:26,-61286381.0",
	"2022-11-22 10:27,-62422650.0",
	"2022-11-22 10:28,-63150545.0",
	"2022-11-22 10:29,-63343434.0",
	"2022-11-22 10:30,-64304517.0",
	"2022-11-22 10:31,-65488085.0",
	"2022-11-22 10:32,-61322045.0",
	"2022-11-22 10:33,-63868522.0",
	"2022-11-22 10:34,-63536921.0",
	"2022-11-22 10:35,-64354811.0",
	"2022-11-22 10:36,-63641588.0",
	"2022-11-22 10:37,-66656643.0",
	"2022-11-22 10:38,-74464249.0",
	"2022-11-22 10:39,-79918866.0",
	"2022-11-22 10:40,-81452004.0",
	"2022-11-22 10:41,-81832401.0",
	"2022-11-22 10:42,-81521045.0",
	"2022-11-22 10:43,-81581541.0",
	"2022-11-22 10:44,-80317125.0",
	"2022-11-22 10:45,-80082245.0",
	"2022-11-22 10:46,-78098971.0",
	"2022-11-22 10:47,-78822855.0",
	"2022-11-22 10:48,-80035881.0",
	"2022-11-22 10:49,-82031236.0",
	"2022-11-22 10:50,-85746592.0",
	"2022-11-22 10:51,-85723530.0",
	"2022-11-22 10:52,-85787100.0",
	"2022-11-22 10:53,-87914971.0",
	"2022-11-22 10:54,-91773039.0",
	"2022-11-22 10:55,-91284536.0",
	"2022-11-22 10:56,-92070186.0",
	"2022-11-22 10:57,-91621571.0",
	"2022-11-22 10:58,-90572626.0",
	"2022-11-22 10:59,-85236015.0",
	"2022-11-22 11:00,-81149892.0",
	"2022-11-22 11:01,-82616187.0",
	"2022-11-22 11:02,-84424669.0",
	"2022-11-22 11:03,-83723333.0",
	"2022-11-22 11:04,-86283631.0",
	"2022-11-22 11:05,-84852631.0",
	"2022-11-22 11:06,-83464042.0",
	"2022-11-22 11:07,-82972583.0",
	"2022-11-22 11:08,-77272109.0",
	"2022-11-22 11:09,-71669531.0",
	"2022-11-22 11:10,-69724212.0",
	"2022-11-22 11:11,-67492683.0",
	"2022-11-22 11:12,-66288723.0",
	"2022-11-22 11:13,-66507650.0",
	"2022-11-22 11:14,-66865336.0",
	"2022-11-22 11:15,-65354555.0",
	"2022-11-22 11:16,-68855294.0",
	"2022-11-22 11:17,-71535899.0",
	"2022-11-22 11:18,-71261017.0",
	"2022-11-22 11:19,-67589716.0",
	"2022-11-22 11:20,-53314806.0",
	"2022-11-22 11:21,-14328426.0",
	"2022-11-22 11:22,-1915741.0",
	"2022-11-22 11:23,26658303.0",
	"2022-11-22 11:24,53970944.0",
	"2022-11-22 11:25,76202658.0",
	"2022-11-22 11:26,101114221.0",
	"2022-11-22 11:27,144570255.0",
	"2022-11-22 11:28,213889679.0",
	"2022-11-22 11:29,283558803.0",
	"2022-11-22 11:30,391520913.0",
	"2022-11-22 13:01,1165606529.0",
	"2022-11-22 13:02,1336483150.0",
	"2022-11-22 13:03,1426562230.0",
	"2022-11-22 13:04,1522824292.0",
	"2022-11-22 13:05,1581871591.0",
	"2022-11-22 13:06,1610196949.0",
	"2022-11-22 13:07,1656869577.0",
	"2022-11-22 13:08,1708638156.0",
	"2022-11-22 13:09,1748531822.0",
	"2022-11-22 13:10,1799619665.0",
	"2022-11-22 13:11,1872673968.0",
	"2022-11-22 13:12,1933047325.0",
	"2022-11-22 13:13,1969738371.0",
	"2022-11-22 13:14,1988375396.0",
	"2022-11-22 13:15,2022188903.0",
	"2022-11-22 13:16,2062482077.0",
	"2022-11-22 13:17,2096157737.0",
	"2022-11-22 13:18,2213160215.0",
	"2022-11-22 13:19,2274714573.0",
	"2022-11-22 13:20,2307560993.0",
	"2022-11-22 13:21,2319817620.0",
	"2022-11-22 13:22,2322975101.0",
	"2022-11-22 13:23,2334318615.0",
	"2022-11-22 13:24,2338093679.0",
	"2022-11-22 13:25,2354886414.0",
	"2022-11-22 13:26,2368619885.0",
	"2022-11-22 13:27,2396875361.0",
	"2022-11-22 13:28,2428961778.0",
	"2022-11-22 13:29,2445192532.0",
	"2022-11-22 13:30,2436402154.0",
	"2022-11-22 13:31,2430810980.0",
	"2022-11-22 13:32,2428549497.0",
	"2022-11-22 13:33,2442161274.0",
	"2022-11-22 13:34,2448082435.0",
	"2022-11-22 13:35,2458353926.0",
	"2022-11-22 13:36,2468174827.0",
	"2022-11-22 13:37,2464924940.0",
	"2022-11-22 13:38,2461523891.0",
	"2022-11-22 13:39,2449262495.0",
	"2022-11-22 13:40,2445870703.0",
	"2022-11-22 13:41,2431041102.0",
	"2022-11-22 13:42,2439108452.0",
	"2022-11-22 13:43,2428847204.0",
	"2022-11-22 13:44,2428758089.0",
	"2022-11-22 13:45,2426569179.0",
	"2022-11-22 13:46,2424872322.0",
	"2022-11-22 13:47,2429280486.0",
	"2022-11-22 13:48,2433132943.0",
	"2022-11-22 13:49,2434146564.0",
	"2022-11-22 13:50,2435417722.0",
	"2022-11-22 13:51,2444645029.0",
	"2022-11-22 13:52,2450489778.0",
	"2022-11-22 13:53,2445959558.0",
	"2022-11-22 13:54,2441635792.0",
	"2022-11-22 13:55,2446758635.0",
	"2022-11-22 13:56,2445722708.0",
	"2022-11-22 13:57,2448254090.0",
	"2022-11-22 13:58,2449093340.0",
	"2022-11-22 13:59,2451299591.0",
	"2022-11-22 14:00,2445474722.0",
	"2022-11-22 14:01,2445823636.0",
	"2022-11-22 14:02,2448716107.0",
	"2022-11-22 14:03,2458683455.0",
	"2022-11-22 14:04,2460181376.0",
	"2022-11-22 14:05,2461263603.0",
	"2022-11-22 14:06,2460959232.0",
	"2022-11-22 14:07,2463440176.0",
	"2022-11-22 14:08,2460502207.0",
	"2022-11-22 14:09,2474068074.0",
	"2022-11-22 14:10,2470001268.0",
	"2022-11-22 14:11,2464154704.0",
	"2022-11-22 14:12,2461721358.0",
	"2022-11-22 14:13,2453546889.0",
	"2022-11-22 14:14,2448022961.0",
	"2022-11-22 14:15,2451088694.0",
	"2022-11-22 14:16,2450110260.0",
	"2022-11-22 14:17,2451837683.0",
	"2022-11-22 14:18,2452192720.0",
	"2022-11-22 14:19,2456222310.0",
	"2022-11-22 14:20,2462064293.0",
	"2022-11-22 14:21,2476857020.0",
	"2022-11-22 14:22,2487975936.0",
	"2022-11-22 14:23,2492123876.0",
	"2022-11-22 14:24,2496335294.0",
	"2022-11-22 14:25,2506065034.0",
	"2022-11-22 14:26,2528638244.0",
	"2022-11-22 14:27,2548402436.0",
	"2022-11-22 14:28,2555055301.0",
	"2022-11-22 14:29,2570259851.0",
	"2022-11-22 14:30,2572445130.0",
	"2022-11-22 14:31,2580948407.0",
	"2022-11-22 14:32,2592988955.0",
	"2022-11-22 14:33,2600828265.0",
	"2022-11-22 14:34,2608482500.0",
	"2022-11-22 14:35,2607170612.0",
	"2022-11-22 14:36,2609159423.0",
	"2022-11-22 14:37,2615595002.0",
	"2022-11-22 14:38,2621379107.0",
	"2022-11-22 14:39,2629082514.0",
	"2022-11-22 14:40,2630223333.0",
	"2022-11-22 14:41,2630254871.0",
	"2022-11-22 14:42,2633206727.0",
	"2022-11-22 14:43,2629664305.0",
	"2022-11-22 14:44,2631233667.0",
	"2022-11-22 14:45,2640204369.0",
	"2022-11-22 14:46,2638446828.0",
	"2022-11-22 14:47,2635717866.0",
	"2022-11-22 14:48,2647768569.0",
	"2022-11-22 14:49,2646309326.0",
	"2022-11-22 14:50,2652052695.0",
	"2022-11-22 14:51,2660176452.0",
	"2022-11-22 14:52,2695514361.0",
	"2022-11-22 14:53,2697373223.0",
	"2022-11-22 14:54,2700737465.0",
	"2022-11-22 14:55,2702606936.0",
	"2022-11-22 14:56,2710035347.0",
	"2022-11-22 14:57,2713034988.0",
	"2022-11-22 14:58,2712761874.0",
	"2022-11-22 14:59,2712761874.0",
	"2022-11-22 15:00,2712254770.0",
];

const d = data.map((it) => {
	const [time, value] = it.split(",");
	return [dayjs(time).unix(), Number(value)];
});

export default d;

const temp = [0, 0];
export const d1 = d.map((it) => {
	temp[0] += 1;
	temp[1] += it[1];
	return [dayjs(it[0] * 1000).format("HH:mm"), it[1]/(temp[1] / temp[0])];
});

export const getData = async (code:string) => {
    const data = await fetch(`http://push2delay.eastmoney.com/api/qt/stock/fflow/kline/get?lmt=1000&klt=1&fields1=f1,f2,f3&fields2=f51,f52&secid=${code}`)
    const d = await data.json();
    const temp = [0, 0];
    const ddd = d.data.klines.map((it:string) => {
        const [time, value] = it.split(",");
        return [dayjs(time).unix(), Number(value)];
    }).map((it: [number,number]) => {
        temp[0] += 1;
        temp[1] += Math.abs(it[1]);
        return [dayjs(it[0] * 1000).format("HH:mm"), Math.abs(Math.abs(it[1])/(temp[1] / temp[0]))];
    });
    return [d.data.name,ddd]
}
