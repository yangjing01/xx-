<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：1503-948-6023 ( 点击拨打 )</view>
			<view>地址：河南省郑州市管城回族发区12345街道</view>
			<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:113.777382,
				latitude:34.762075,
				scale:13,
				markers:[
					{
						longitude:113.777382,
						latitude:34.762075,
						iconPath:'../../static/marker2.jpg',
						width:40,
						height:40
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'1503-948-6023',
					
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
