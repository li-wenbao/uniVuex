const baseUrl = "http://localhost:3000"

export const getInTest = params => (
	// new Promise((resolve, reject) => { promise是直接返回的
	// resolve("test")
	uni.request({
		url: `${baseUrl}/qiShouOrderList`,
		data: params,
		method: "GET",
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		// success: (res) => {
		// 	console.log("qiShouOrderList:",res.data);
		// }
	})
	// })
)
