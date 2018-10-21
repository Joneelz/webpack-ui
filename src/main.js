import Vue from 'vue'

// 导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})


//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)

//设置请求的根路径
Vue.http.options.root='http://vue.studyit.io'

//导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
import 'mint-ui/lib/style.css'
import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)

//导入自已的路由模块
import router from './router.js'
//导入app路由根组件
import app from './App.vue'




const vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router
})
