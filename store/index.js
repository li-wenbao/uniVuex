import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
import {
	getInTest
} from "../apis"

// console.log("全局属性RRR",getInTest())  //测试
// getInTest().then((res)=>{
// 	console.log("res++++",res)
// })

export default new Vuex.Store({
	// 全局属性
	state: {
		num: 0,
		price: 10,
		name: "西瓜",
		order_status: "0",
		mList: []
	},
	/* 
	 全局方法  
	 
	 调用方法  this.$store.commit("XXX")
	 */
	mutations: {
		add(state) {
			state.num++;
			console.log(state.num)
		}
	},
	// vuex中的属性计算，在视图中的变量使用
	getters: {
		count(state) {
			// 这个函数的执行依赖一个可变的变量
			return state.num * state.price
		}
	},
	/* 
	全局异步方法 可以执行异步操作 可以写拦截器 通用的ajax 
	调用方法  this.$store.dispatch("XXX")
	*/
	actions: {
		// getTest(){

		// }
		aCtions(context) {
			getInTest({
					order_status: context.state.order_status,
				})
				.then(data => { //data为一个数组，数组第一项为错误信息，第二项为返回数据
					var [error, res] = data;
					console.log(res.data);
				})
		}
	}
})
