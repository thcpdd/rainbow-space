<template>
    <div class="footer">
        <div class="footer-item">
            <span class="footer-title">网站标识</span>
            <div class="links">
                <img src="/favicon.svg" alt="rainbow-logo" style="height: 80%;width: 80%">
            </div>
        </div>
        <div class="footer-item">
            <span class="footer-title">友情链接</span>
            <div class="links">
                <p class="link"><a href="//snatcher.rainbow.hi.cn" target="_blank">智能抢课系统</a></p>
                <p class="link"><a href="//guideplan.rainbow.hi.cn" target="_blank">引航计划选课系统</a></p>
                <p class="link"><a href="//jiadian.rainbow.hi.cn" target="_blank">家电之选</a></p>
                <p class="link"><a href="//novelstation.rainbow.hi.cn" target="_blank">小说驿站</a></p>
                <p class="link"><a href="//dailyfresh.rainbow.hi.cn" target="_blank">天天生鲜</a></p>
                <p class="link"><a href="//mymusic.rainbow.hi.cn" target="_blank">我的音乐</a></p>
            </div>
        </div>
        <div class="footer-item">
            <span class="footer-title">QQ</span>
            <div class="links">
                <img src="/images/QQ-contact.jpg" alt="QQ" style="width: 146px;">
            </div>
        </div>
        <div class="footer-item">
            <span class="footer-title">微信</span>
            <div class="links">
                <img src="/images/wechat-contact.png" alt="wechat" style="width: 149px;">
            </div>
        </div>
    </div>
    <div class="icp-info">
        <div>
            <a href="https://beian.miit.gov.cn/" target="_blank">桂ICP备2023011989号-2</a><br/>
        </div>
        <div style="display: flex;justify-content: center;margin-top: 4px">
            <span style="padding-top: 2px;margin-right: 3px"><img src="/images/policemen.png" alt="policemen" style="width: 17px"></span>
            <span>
                <a href="https://beian.mps.gov.cn/#/query/webSearch?code=45033002000153"
               rel="noreferrer" target="_blank">桂公网安备45033002000153号</a>
            </span>
        </div>
    </div>
</template>

<style>
.footer {
    padding-top: 46px;
    background-color: #171717;
    display: flex;
    height: max-content;
    color: white;
    justify-content: center;
    padding-bottom: 5px;
    flex-wrap: wrap;
}
.footer-item {
    padding: 0 70px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}
.links {
    padding-top: 17px;
}
.links a {
    color: #adacac;
}
.links a:hover {
    color: #5050ec;
}
.link {
    margin-bottom: 7px
}
.footer-title {
    font-weight: bold;
    font-size: larger;
}
.icp-info {
    padding-top: 15px;
    padding-bottom: 10px;
    background-color: #131313;
    text-align: center;
}
.icp-info a {
    color: #e8e7e7;
}
</style>
<script setup>
</script>
