<template>
	<view class="view_contain">
		<!-- 第一部分 -->
		<view class="view_1">
			<view class="view_image_text">
				<!-- #ifdef MP-WEIXIN -->
				<view class="image_radius">
					<open-data type="userAvatarUrl"></open-data>
				</view>
				<open-data type="userNickName"></open-data>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<view class="image_radius">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<text>web前端工程师</text>
				<!-- #endif -->
			</view>
		</view>
		<!-- 第二部分 -->
		<view class="view_2">
			<view class="view_tupianwenzi">
				<image class="image_tupian" src="../../static/image/sc.png"></image>
				<text class="text_saoyisao">收藏</text>
			</view>
			<navigator url="/pages/my/setup/index" hover-class='none'>
				<view class="view_tupianwenzi">
					<image class="image_tupian" src="../../static/image/sz.png"></image>
					<text class="text_saoyisao">设置</text>
				</view>
			</navigator>

		</view>
		<!-- 第三部分 -->
		<view class="view_3">
			<navigator url="/pages/static/info/index">
				<view class="list-item">
					<image class="item-image" src="../../static/image/grxx.png"></image>
					<text class="item-text">个人信息</text>
					<image class="image-jiantou" src="../../static/image/jt.png"></image>
				</view>
			</navigator>
			<view class="line"></view>
			<navigator url="/pages/static/about/index">
				<view class="list-item">
					<image class="item-image" src="../../static/image/sydd.png"></image>
					<text class="item-text">所有订单</text>
					<image class="image-jiantou" src="../../static/image/jt.png"></image>
				</view>
			</navigator>
			<view class="line"></view>
			<navigator url="/pages/static/suggest/index">
				<view class="list-item">
					<image class="item-image" src="../../static/image/shdz.png"></image>
					<text class="item-text">收货地址</text>
					<image class="image-jiantou" src="../../static/image/jt.png"></image>
				</view>
			</navigator>
			<view class="line"></view>
		</view>
		<!-- 第四部分 -->
		<view class="view_4">退出登录</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
	}

	.view_contain {
		width: 100%;
		height: 100%;
		background: #f8f8f8
	}

	/* 第一部分 */

	.view_1 {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 18%;
		border-bottom-left-radius: 10%;
		border-bottom-right-radius: 10%;
		background: $shop-color;
		color: #fff;
	}

	.view_image_text {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
   // #ifdef MP-WEIXIN
	.image_radius{
		height: 140rpx;
		width: 140rpx;
		border: 4rpx solid #fff;
		border-radius: 50%;
		overflow: hidden;
	}
	// #endif
	
	// #ifndef MP-WEIXIN
	.image_radius image{
		height: 140rpx;
		width: 140rpx;
		border: 4rpx solid #fff;
		border-radius: 50%;
		overflow: hidden;
	}
	// #endif

	/* 第二部分 */

	.view_2 {
		width: 100%;
		height: 15%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background: white;
	}

	.view_tupianwenzi {
		display: flex;
		flex-direction: column;
		width: 120rpx;
		align-items: center;
		margin-left: 25rpx;
		margin-right: 25rpx;
	}

	.image_tupian {
		display: flex;
		width: 60rpx;
		height: 60rpx;
	}

	/* 第三部分 */

	.view_3 {
		width: 100%;
		height: 32%;
		/* background: #f0eeed; */
	}

	.list-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 80rpx;
		margin-top: 20rpx;
		position: relative;
		/*父元素位置要设置为相对*/
		background: white;
	}

	.item-image {
		width: 50rpx;
		height: 50rpx;
		margin: 20rpx;
	}

	.item-text {
		color: gray;
		font-size: 35rpx;
		margin-left: 20rpx;
	}

	.image-jiantou {
		width: 20rpx;
		height: 35rpx;
		position: absolute;
		/* 要约束所在位置的子元素的位置要设置成绝对 */
		right: 0;
		/* 靠右调节 */
		margin-right: 35rpx;
	}

	/* 黑线 使得产生阴影效果 */

	.line {
		width: 100%;
		height: 3rpx;
		background: rgba(199, 199, 199, 0.56);
		margin-left: 90rpx;
	}

	.view_4 {
		width: 60%;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		margin: 60rpx auto;
		color: #fff;
		background: #ff5757;
		border-radius: 8rpx;
	}
</style>
