const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'
export const myRequest = (options) => {
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success:res=> {
				if (res.statusCode !== 200) {
					uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail(err) {
				console.log(err)
				uni.showToast({
					title: '服务器错误'
				})
				reject(err)
			}
		})
	})
}
