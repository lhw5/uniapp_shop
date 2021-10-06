<template>
	<view class="goods_list">
		<view class="goods_item" @click="navigator(item.goods_id)" v-for="(item,index) in goods" :key="index">
			<image
				:src="item.goods_small_logo !== '' ? item.goods_small_logo : 'https://api-hmugo-web.itheima.net/full/06c2d4c4b52235d1f961cffcc0af5256c975c87b.jpg' "
				mode=""></image>
			<view class="price">
				<text>￥{{item.goods_price > 0 ? item.goods_price : 199}}</text>
				<text>￥{{item.goods_price+299}}</text>
			</view>
			<view class="name">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goodsList",
		props:['goods'],
		data() {
			return {

			}
		},
		methods: {
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	/* 商品列表样式 */
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		// 商品列表子元素样式
		.goods_item {
			background-color: #fff;
			width: 49%;
			margin: 10rpx 0;
			padding: 15rpx;
			// 缩小盒子里面的内容而不把盒子变大
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150rpx;
				display: block;
				// 水平居中
				margin: 0 auto;
			}

			// 价格字体设置
			.price {
				color: $shop-color;
				font-size: 36rpx;

				// 原价样式. 获取元素内第二个text元素
				text:nth-child(2) {
					color: #999999;
					font-size: 28rpx;
					margin-left: 20rpx;
					// line-through	定义穿过文本下的一条线。
					text-decoration: line-through;
				}
			}

			// 商品标题样式
			.name {
				font-size: 30rpx;
				line-height: 50rpx;
				padding-top: 15rpx;
				padding-bottom: 10rpx;

				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		}

	}
</style>
