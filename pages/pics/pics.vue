<template>
	<view class="pics">
		<!-- 左侧 -->
		<scroll-view scroll-y="true" class="left">
			<view :class="active === index?'active': '' " v-for="(item,index) in cates" :key="index"
				@click="clickActive(index,item.cat_id)">{{item.cat_name}}</view>
		</scroll-view>

		<!-- 右侧 -->
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-if="imgs.length>0" v-for="(item, index) in imgs" :key="index">
				<view>
					<image :src="item.cat_icon" mode="aspectFill" @click="previewImg(item.cat_icon)">
					</image>
					<view>{{item.cat_name}}</view>
				</view>
			</view>
			<view class="noData" v-if="imgs===undefined">
				暂无数据
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/* 分类列表 */
				cates: [],
				// 激活标志
				active: 0,
				// 图片数据
				imgs: []
			}
		},
		onLoad() {
			this.getPicesCate()
		},
		methods: {
			// 获取图片分类列表
			async getPicesCate() {
				const res = await this.$myRequest({
					url: '/categories'
				})
				this.cates = res.data.message
				// console.log(res.data.message)
				this.clickActive(0, this.cates[0].id)
			},
			// 分类点击事件, 获取分类下图片
			async clickActive(index, cat_id) {
				// console.log(index)
				this.active = index

				// 发起请求
				const res = await this.$myRequest({
					url: `/categories`,
				})
				this.imgs = res.data.message[index].children[0].children
				// console.log(this.imgs)
			},
			// 放大预览图片
			previewImg(current) {
				const urls = this.imgs.map(item=>{
					return item.cat_icon
				})
				uni.previewImage({
					current,
					urls 
				})
				// console.log(urls)
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				background-color: $shop-color;
				color: #FFFFFF;
			}
		}

		.right {
			width: 550rpx;
			margin: 10rpx auto;

			.item {
				border-bottom: 1px solid #eee;
				text-align: center;
				image {
					width: 320rpx;
					height: 320rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}

				padding-bottom: 10rpx;
			}
		}

		.noData {
			text-align: center;
			// margin: 0 auto;
			line-height: 750rpx;
			color: #999999;
			font-size: 60rpx;

		}
	}
</style>
