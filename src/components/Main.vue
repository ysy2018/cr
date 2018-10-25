<template>
<section>
<header>
	<div>
		<img src="@/assets/logo.jpg" />
        <ul :default-active="$route" :collapse="collapsed">
            <template v-for="(item,index) in menus">
                <li v-if="!item.hide"  :key="item.desc" @click="getChildren(index)">{{item.desc}}</li>
            </template>
        </ul>
	</div>
</header>
<div id="child_menu">
	<div class="left">
		<label>行数</label>
		<input type="text" style="width: 40px"/>
		<label>确认</label>
	</div>
	<ul>
		<template v-for="item in child_menus">
			<li :key="item.desc">{{item.desc}}</li>
		</template>
	</ul>
</div>
<router-view>

</router-view>
</section>
</template>

<script>
let data = () => {
  return {
    collapsed: false,
	menus: [],
	child_menus: []
  }
}

let initMenu = function() {
	for (let i in this.$router.options.routes) {
		let root = this.$router.options.routes[i]
		this.menus.push(root)
	}
}

let getChildren = function(index){
	this.child_menus = []
	for (let i in this.menus[index].children) {
		let root = this.menus[index].children[i]
		this.child_menus.push(root)
	}
}

export default {
  data: data,
  methods: {
	initMenu,
	getChildren
  },
  mounted: function() {
    this.initMenu()
  }
}
</script>

<style scoped>
header {
	height: 58px;
	background: #befae0;
	border-top:1px solid #00cd72;
	border-bottom:1px solid #00cd72;
}

header div{
	overflow: hidden;
	width:1200px;
	margin: 0 auto;
}

header div ul{
	margin: 0 auto;
	overflow: hidden;
	padding: 0;
	float: left;
}

header div img{
	float: left;
}

header div ul li{
	float: left;
	list-style: none;
	width: 80px;
	text-align: center;
	line-height: 58px;
	font-size: 14px;
	cursor: pointer;
}

.is-active{
	color: red;
}

header div ul li:nth-child(1){
	width: 285px;
}

header div ul li:nth-child(8){
	margin-left: 216px;
}

#child_menu{
	overflow: hidden;
	width: 1200px;
	margin: 0 auto;
}

#child_menu ul {
	margin: 5px auto;
	overflow: hidden;
	padding: 0;
	float: left;
}

#child_menu ul li{
	float: left;
	list-style: none;
	text-align: center;
	margin-left: 20px;
	cursor: pointer;
}

#child_menu .left{
	float: left;
	padding: 5px;
}
</style>
