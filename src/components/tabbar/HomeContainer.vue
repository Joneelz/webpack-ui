<template>
    <div>
        <!--//轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item><img src="http://www.itcast.cn/images/slidead/BEIJING/2017511009514700.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item><img src="http://www.itcast.cn/images/slidead/BEIJING/2017421414422600.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-6">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .mui-table-view {
        img {
            width: 60px;
            height: 60px;
        }
    }

</style>