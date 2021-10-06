<template>
	<view>
		<view class="news_item" v-for="(item,index) in newsList" @click="navigator(item.goods_id)" :key="index">
			<image
				:src="item.goods_small_logo !== '' ? item.goods_small_logo : 'https://api-hmugo-web.itheima.net/full/06c2d4c4b52235d1f961cffcc0af5256c975c87b.jpg' "
				mode=""></image>
			<view class="right" @click="clickAddNum">
				<view class="title">
					{{item.goods_name}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time}}</text>
					<text>浏览量：{{addClickNum}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['newsList'],
		data() {
			return {
				addClickNum: 1
			}
		},
		methods: {
			clickAddNum() {
				this.addClickNum++
			},
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 0rpx;
		border-bottom: 1px solid pink;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}

		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.title {
				font-size: 30rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

			.info {
				font-size: 24rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
