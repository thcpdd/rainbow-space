<template>
    <div id="lovexhj" v-if="lovexhj" v-cloak>
        <!-- 首页 -->
        <div class="lovexhj lovexhj1">
            <!-- 内容 -->
            <div class="lovexhjContent lovexhj1Content">
                <div>
                    <div class="ContentTitle">
                        <span>{{ lovexhj.index.title }}</span>
                        <span class="lovexhj1Typet"></span>
                    </div>
                    <div class="ContentSubTitle">{{ lovexhj.index.subTitle }}</div>
                    <div class="lovexhj1LoadMore">
                        <div class="loadMore" @click="scrollGoTo(lovexhj.index.loadMore.class)">
                            {{ lovexhj.index.loadMore.text }}
                        </div>
                    </div>
                </div>
            </div>
            <!-- 壁纸 -->
            <div class="lovexhjBg lovexhj1Bg"></div>
        </div>
        <!-- 个人简介 -->
        <div class="lovexhj lovexhj2">
            <!-- 内容 -->
            <div class="lovexhjContent lovexhj2Content">
                <div>
                    <p class="lovexhj2ContentTitle">{{ lovexhj.about.title }}</p>
                    <div class="lovexhj2ContentMe">
                        <div class="lovexhj2ContentImg">
                            <img :src="lovexhj.about.laozi.img" :alt="lovexhj.about.laozi.img">
                        </div>
                        <div class="lovexhj2ContentText">
                            <div v-html="lovexhj.about.laozi.content" class="lovexhj2ContentTextBox"></div>
                            <ul>
                                <li v-for="item in lovexhj.about.ability"
                                    :style="'border-top: 5px solid ' + item.color">
                                    <i :class="'fa ' + item.icon "></i>
                                    <span :style="'color:' + item.color">{{ item.bfb }}</span>
                                    <p>{{ item.title }}</p>
                                    <p>{{ item.subTitle }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="lovexhj2LoadMore">
                        <div class="loadMore" @click="scrollGoTo(lovexhj.about.loadMore.class)">
                            {{ lovexhj.about.loadMore.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 项目介绍 -->
        <div class="lovexhj lovexhj3">
            <div class="lovexhjContent lovexhj3Content">
                <div>
                    <p class="lovexhj2ContentTitle">{{ lovexhj.project.title }}</p>
                    <div class="lovexhj3ContentList">
                        <div class="lovexhj3ContentBox" v-for="(item, index) in lovexhj.project.list" :key="index">
                            <img :src="item.img" :alt="item.img">
                            <div class="lovexhj3ContentBoxText">
                                <div>
                                    <p class="lovexhj3ContentTitle">{{ item.name }}</p>
                                    <ul>
                                        <li v-for="(nb, index) in item.nb" :key="index">
                                            {{ nb }}
                                            <span v-if="index !== item.nb.length - 1">+</span>
                                        </li>
                                    </ul>
                                    <p class="lovexhj3ContentText">{{ item.text }}</p>
                                    <div class="lovexhj3ContentBtn" @click="showProject(index)">
                                        {{ lovexhj.project.listLoadMore }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lovexhj3ContentBoxTc"></div>
                        <div class="lovexhj3ContentBoxTc"></div>
                    </div>
                    <div class="lovexhj3LoadMore">
                        <div class="loadMore" @click="scrollGoTo(lovexhj.project.loadMore.class)">
                            {{ lovexhj.project.loadMore.text }}
                        </div>
                    </div>
                </div>
            </div>
            <el-dialog :title="lovexhj.project.list[projectIndex].name" :model-value="projectDialog"
                       :append-to-body="true" width="85%" @close="projectDialog = false">
                <a :href="lovexhj.project.list[projectIndex].url" class="lovexhj3ContentBtn"
                   target="_blank">网站主页</a>&nbsp;
                <a :href="lovexhj.project.list[projectIndex].source" class="lovexhj3ContentBtn"
                   target="_blank">项目源码</a>
                <div v-html="lovexhj.project.list[projectIndex].content"></div>
            </el-dialog>
        </div>
        <!-- 联系我 -->
        <div class="lovexhj lovexhj4">
            <!-- 壁纸 -->
            <div class="lovexhjBg lovexhj4Bg"></div>
            <!-- 内容 -->
            <div class="lovexhjContent lovexhj4Content">
                <div>
                    <p class="lovexhj2ContentTitle">{{ lovexhj.contact.title }}</p>
                    <ul>
                        <li v-for="item in lovexhj.contact.list">
                            <p class="lovexhj4ItemTitle">{{ item.name }}</p>
                            <p v-if="item.link" class="lovexhj4ItemContext">
                                <a @click="openGitee(item.link)">点击进入</a>
                            </p>
                            <p v-else class="lovexhj4ItemContext">
                                {{ item.context }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- 网页底部信息 -->
    <Footer></Footer>
</template>

<script setup>
import data from "@/data.js";
import {onMounted} from "vue";
import {ref} from "vue";
import Footer from "@/components/Footer.vue";

const lovexhj = data;  // 网页数据
const projectDialog = ref(false) // 项目演示窗口打开
const projectIndex = ref(0)  // 当前展示项目索引

function startTyping() {
    new Typed(".lovexhj1Typet", {
        strings: lovexhj.index.me,
        typeSpeed: 30,
        backDelay: 2000,
        backSpeed: 50,
        loop: true
    })
}

function openGitee(link) {
    window.open(link)
}

// 平滑跳转
function scrollGoTo(text) {
    window.scrollTo({
        top: document.querySelector(`.${text}`).offsetTop,
        behavior: "smooth"
    });
}

// 动画加载
function animationLoad() {
    let animationDom = [
        [".ContentTitle", 0],
        [".ContentSubTitle", 500],
        [".ContentContact", 1000],
        [".lovexhj1LoadMore", 1500],
        [".lovexhj2ContentTitle", 0],
        [".lovexhj2ContentMe", 500],
        [".lovexhj2ContentText li", 500],
        [".lovexhj2LoadMore", 1000],
        [".lovexhj3ContentBox", 500],
        [".lovexhj4Content li", 500],
    ];
    let a = ScrollReveal();
    animationDom.forEach(item => {
        a.reveal(item[0], {
            duration: 1500,
            delay: 100,
            origin: "bottom",
            mobile: true,
            distance: "2rem",
            opacity: 0.001,
            easing: "cubic-bezier(.98,0,.04,1)"
        });
    });
}

// 项目展示
function showProject(i) {
    projectIndex.value = i;
    projectDialog.value = true;
    setTimeout(() => {
        let dom = document.querySelector(".el-dialog__body ul");
        if (!dom) {
            return;
        }
        let Viewer = window.Viewer;
        new Viewer(dom);
    }, 0);
}

onMounted(() => {
    // 打字开启
    startTyping();
    // 动画加载
    animationLoad();
    let isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (isMobile) {
        let items = document.querySelectorAll('.footer-item')
        items.forEach((item, index)=> {
            if (index !== items.length - 1) {
                item.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)'
                item.style.borderRight = 'none'
                item.style.marginBottom = '10px'
                item.style.paddingBottom = '13px'
                item.style.width = '-webkit-fill-available'
            } else {
                item.style.borderRight = 'none'
            }
        })
    }
})
</script>

<style>
.el-dialog {
    --el-font-size-large: 2.5rem;
    --el-font-line-height-primary: 29px;
}
.el-dialog__body {
    --el-dialog-content-font-size: 1.2rem;
}
@media(max-width: 560px) {
    .el-dialog {
    --el-font-size-large: 1.7rem;
    }
    .el-dialog__body {
        --el-dialog-content-font-size: 1rem;
    }
}
</style>
