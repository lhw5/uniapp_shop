<template>
	<view class="news">
		<news-list :newsList="newsList" @itemClick="goDetail"></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news-list/news-list.vue'
	export default {
		components: {
			newsList
		},
		data() {
			return {
				newsList: []
			}
		},
		methods: {
			async getNews() {
				for (var i = 1; i <= 30; i++) {
					const res = await this.$myRequest({
						url: '/goods/detail?goods_id=' + i
					})
					this.newsList.push(res.data.message)
				}
				// console.log(this.newsList)
			},
			// 跳转去详情页
			goDetail(id) {
				// console.log(id)
				uni.navigateTo({
					url: `/pages/news-detail/news-detail?goods_id=${id}`
				})

			}
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">
	.news {
		padding: 2rpx 10rpx;
	}
</style>
