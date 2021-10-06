<template>
	<view class="home">
		<!-- 顶部轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in swipers" :key="index">
				<image :src="item.image_src" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<!-- 导航子元素 -->
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navItemClick(item.path)">
				<!-- iconfont 图标 -->
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="hot_title">
				推荐商品
			</view>
			<!-- 使用商品列表组件 ，:goods 绑定 子组件需要的变量， "goods" 将本页的数据传递给商品列表子组件 -->
			<goods-list :goods="goods"  @itemClick="goDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				navs: [{
						// 导航icon
						icon: 'iconfont icon-ziyuan',
						// 导航名称
						title: '超市',
						// 跳转路径
						path: '/pages/goods/goods'
					},
					{
						// 导航icon
						icon: 'iconfont icon-guanyuwomen',
						// 导航名称
						title: '联系我们',
						// 跳转路径
						path: '/pages/contact/contact'
					},
					{
						// 导航icon
						icon: 'iconfont icon-tupian',
						// 导航名称
						title: '社区图片',
						// 跳转路径
						path: '/pages/pics/pics'
					},
					{
						// 导航icon
						icon: 'iconfont icon-shipin',
						// 导航名称
						title: '学习视频',
						// 跳转路径
						path: '/pages/videos/videos'
					}
				],
				goods: []
			}
		},
		onLoad() {
			this.getSwipers(),
			this.getGoods()
		},
		components: {
			goodsList
		},
		methods: {
			//获取轮播图
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/home/swiperdata'
				})
				// console.log(res.data.message)
				this.swipers = res.data.message
			},
			// 获取推荐商品列表数据
			async getGoods() {
				for (let i = 1; i <= 30; i++) {
					const res = await this.$myRequest({
						url: '/goods/detail?goods_id=' + i
					})
					this.goods.push(res.data.message)
				}
				// console.log(this.goods)
			},
			// 导航跳转
			navItemClick(path) {
				// 跳转页面
				uni.navigateTo({
					url: path
				})
			},
			goDetail(id) {
				// console.log(id)
				uni.navigateTo({
					url: `/pages/news-detail/news-detail?goods_id=${id}`
				})
			
			}
		}
	}
</script>

<style lang="scss">
	.home {

		// 轮播图组件样式
		swiper {
			width: 750rpx;
			height: 340rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;
			justify-content: space-around;

			.nav_item {
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin: 10rpx auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 40rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		// 推荐商品样式
		.hot_goods {
			background: #eee;
			margin-top: 20rpx;
			// padding-top: 10rpx;
			overflow: hidden;

			// 推荐商品 样式
			.hot_title {
				// padding: 30rpx;
				height: 100rpx;
				color: $shop-color;
				line-height: 100rpx;
				text-align: center;
				// 字符间距
				letter-spacing: 20rpx;
				background-color: #fff;
				margin: 7rpx 0;
				font-size: 50rpx;
			}


		}
	}
</style>
