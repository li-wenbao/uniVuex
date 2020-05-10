<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="">
			测试vuex
		</view>
		<button type="primary" @click="add">add</button>
		<view class="">
			{{num}}
		</view>
		<view class="">
			名称：{{name}}
		</view>
		<view class="">
			价格：{{count}}
		</view>
		<button type="primary"  @click="aCtions">aCtions</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: this.$store.state.name,
				price: this.$store.state.price
			}
		},
		onLoad() {
         this.$store.dispatch("aCtions")
		},
		computed: {
			num() {
				return this.$store.state.num
			},
			count(){
				return this.$store.getters.count
			},
			mList(){
				console.log("HHHHHHHHHHHHHHHh",this.$store.state.mList)
				return this.$store.state.mList
			}
		},
		methods: {
			add() {
				this.$store.commit("add")
			},
			aCtions() {
				this.$store.dispatch("aCtions")
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
