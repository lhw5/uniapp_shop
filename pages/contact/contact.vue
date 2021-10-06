<template>
	<view class="contact">
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view class="" @click="call">
				联系电话：中国移动---10086 (点击拨打)
			</view>
			<view class="">
				Github：https://github.com/lhw5
			</view>
			<!-- 地图 -->
			<map :longitude="longitude" :latitude="latitude" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 113.323632,
				latitude: 23.106195,
				markers: [{
					longitude: 113.323632,
					latitude: 23.106195,
					iconPath: '../../static/logo1.png',
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			// 打电话
			async call() {
				uni.makePhoneCall({
					phoneNumber: '10086' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		image {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 35rpx;

			view {
				line-height: 80rpx;
				border-bottom: 1rpx solid #F1F1F1;
			}
		}

		map {
			width: 100%;
			height: 750rpx;
			margin-top: 5px;
		}
	}
</style>
