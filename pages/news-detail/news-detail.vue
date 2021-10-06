<template>
	<view class="news_detail">
		<image :src="detail.goods_small_logo" mode=""></image>
		<view class="title">
			商品名称:{{detail.goods_name}}
		</view>

		<view class="info">
			<view>
				<text>商品价格:￥{{detail.goods_price}}</text>
				<text>商品重量:{{detail.goods_weight}}</text>
				<text>商品数量:{{detail.goods_number}}</text>
			</view>
			<view class="info1">
				<text>发表时间: {{detail.add_time}}</text>
				<text>浏览量: {{detail.upd_time - detail.add_time+10}}</text>
			</view>
			<view class="goods_introduce">
				<rich-text :nodes="detail.goods_introduce"></rich-text>
			</view>
		</view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				id: 1,
				detail: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			this.id = options.goods_id
			this.getNewsDetail()
		},
		methods: {
			// 获取资讯详情
			async getNewsDetail() {
				const res = await this.$myRequest({
					url: '/goods/detail?goods_id=' + this.id
				})
				// console.log(this.id)
				this.detail = res.data.message
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.news_detail {
		font-size: 30rpx;


		image {
			width: 100%;
		}

		.title {
			text-align: center;
			padding: 0 20rpx;
			font-weight: bold;
		}

		.info>view:nth-child(1) {
			font-weight: bold;
			padding: 0 20rpx;
		}
		.info>view:nth-child(1)>text:nth-of-type(1){
				color: #e1251b;
			}

		.info1 {
			padding: 0 20rpx;
		}

		.info view {
			padding-top: 10rpx;
			display: flex;
			justify-content: space-between;
		}

		.goods_introduce {
			padding-bottom: 50px;
		}

		.goods-nav {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
