<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>	
	/*每个页面公共css */
	@import url("static/font/iconfont.css");
		/* 商品详细介绍的内容 全局样式改变其中的图片尺寸 */
		.gomeImgLoad{
			width: 100%;
			height: auto;
		}
</style>
