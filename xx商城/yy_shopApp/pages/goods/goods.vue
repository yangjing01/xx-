<template>
	<view class="goods_list">
		<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		<view class="isOver" v-if="flag">.....我的有底线的.....</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				pageindex:1,
				goods:[],
				flag:false
			}
		},
		methods: {
			//获取商品的数据
			async getGoodsList(callBack){
				const res = await this.$myRuquest({
					url:'/api/getgoods?pageindex='+this.pageindex
				})
				this.goods = [...this.goods,...res.data.message]
				//callBack()
				callBack && callBack()
			
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if(this.goods.length < this.pageindex*10) return this.falg = true
			this.pageindex ++
			this.getGoodsList()
			
		},
		onPullDownRefresh() {
			this.pageindex = 1
			this.goods = []
			this.falg = false
			setTimeout(()=>{
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				})
			},1000)
			
		},
		components:{"goodsList":goodsList}
	}
</script>

<style lang="scss">
.goods_list{
	background: #eee;
}
.isOver{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 28rpx;
}
</style>
