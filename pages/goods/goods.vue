<template>
	<view class="goods_list">
		<goods-list :goods="goods" @itemClick="goDetail"></goods-list>
		<view class="isOver" v-if="goods.length">
			--- 我是有底线的 ---
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				// flag: false
			}
		},
		components: {
			goodsList
		},
		methods: {
			async getGoodsList(callback) {
				for (let i = 1; i <= 50; i++) {
					const res = await this.$myRequest({
						url: '/goods/detail?goods_id=' + i
					})
					this.goods.push(res.data.message)
					callback && callback()
				}
				// console.log(this.goods)
				this.goods = this.goods
			},
			// async getGoodsList(callback) {
			// 	const res = await this.$myRequest({
			// 		url: '/goods/search?pageindex=' + this.pageindex
			// 	})
			// 	callback && callback()
			// 	// console.log(res.data.message.goods)
			// 	this.goods = res.data.message.goods
			// }
			// 跳转去详情页
			goDetail(id) {
				// console.log(id)
				uni.navigateTo({
					url: `/pages/news-detail/news-detail?goods_id=${id}`
				})

			}
		},

		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			// console.log('触底了')
			// if (this.goods.length < this.pageindex) return this.flag = true
			// this.pageindex++
			// this.getGoodsList()
		},
		onPullDownRefresh() {
			// console.log('下拉刷新了')
			// this.pageindex = 1
			this.goods = []
			// this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				})
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	}

	.isOver {
		text-align: center;
		color: #C0C0C0;
		padding-bottom: 5px;
	}
</style>
