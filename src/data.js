export default {
    index: {
        title: "关于我：",
        me: [
            "我的网名叫Rainbow。",
            "来自广西桂林。",
            "专注于后端开发。"
        ],
        bg: "./images/bg.jpg",
        subTitle: "此情可待成追忆，只是当时已惘然。——《锦瑟》",
        contact: [
            // {
            //     name: "Email",
            //     icon: "fa-envelope",
            //     link: "mailto:1834763300@qq.com"
            // },
            // {
            //     name: "Gitee",
            //     icon: "fa-github",
            //     link: "https://gitee.com/kill-my-teammates-first"
            // },
            // {
            //     name: "QQ",
            //     icon: "fa-qq",
            //     link: "https://wpa.qq.com/msgrd?v=3&uin=1656071287&site=qq&menu=yes"
            // }
        ],
        loadMore: {
            text: "了解更多",
            class: "lovexhj2"
        }
    },
    about: {
        title: "更详细的我",
        laozi: {
            img: "./images/avatar.jpg",
            content: "<span></span>我今年19岁，是一名来自广西高校的的大二在读生，所学专业是<b>人工智能</b>。<br/>" +
                "<span></span>但是对于Web开发我有着<b>浓厚的兴趣</b>，喜欢用学习到的知识去设计与编写一些独特的网站，毕竟兴趣才是我最好的老师。<br/>" +
                "<span></span>曾在<b>蓝桥杯国赛 Python 组中取得优秀奖</b>。<br/>" +
                "<span></span>我熟悉 <b>Python 高级特性</b>，例如<b>生成器、装饰器、上下文管理器、协程、类元编程、垃圾回收机制</b>等。<b>并在多个实际项目中使用 Python 进行开发，积累了丰富的实战经验。</b><br/>" +
                "<span></span>我熟悉计算机网络原理，例如 <b>TCP / IP 协议</b>、<b>HTTP</b>、<b>WebSocket 协议</b>等。<br/>" +
                "<span></span>我熟练使用 MySQL 进行<b>数据库表结构设计、分页查询优化、索引结构、事务、存储引擎</b>等。<br/>" +
                "<span></span>我熟悉 Redis 的<b>基本使用场景</b>和<b>底层实现原理</b>，能够使用 Redis 进行<b>缓存设计</b>并了解其<b>数据持久化</b>，并在一些项目中实现了基于 Redis 的分布式锁。<br/>" +
                "<span></span>我熟悉 <b>Django、FastAPI</b> 等 Python 主流后端开发框架。<br/>"
        },
        ability: [
            {
                icon: "fa-code",
                title: "后端：",
                subTitle: "Django、FastAPI等",
                color: "#ffa502",
                bfb: "80%"
            },
            {
                icon: "fa-database",
                title: "数据库：",
                subTitle: "MySQL、Redis等",
                color: "#ff4757",
                bfb: "80%"
            },
            {
                icon: "fa-rocket",
                title: "消息中间件：",
                subTitle: "Celery、RabbitMQ等",
                color: "#1e90ff",
                bfb: "50%"
            },
            {
                icon: "fa-linux",
                title: "项目部署与管理：",
                subTitle: "Docker、Git等",
                color: "#2ed573",
                bfb: "80%"
            }
        ],
        loadMore: {
            text: "继续浏览",
            class: "lovexhj3"
        }
    },
    project: {
        title: "项目经历",
        list: [
            {
                name: "智能抢课系统",
                text: "通过爬虫程序快速完成校园课程的选课。",
                nb: [
                    "FastAPI", "Vue3", "Celery", "MySQL", "Redis", "RabbitMQ", "Nginx"
                ],
                url: "//snatcher.rainbow.hi.cn",
                source: "https://gitee.com/kill-my-teammates-first/select_course",
                img: "./images/snatcher.png",
                content: `<h2><b>项目类型</b></h2>
                    <p>拥有与用户交互界面的爬虫系统。</p>
                    <h2><b>开发周期</b></h2>
                    <p>● 2023年10月24日（项目启动）</p>
                    <p>● 2023年12月25日（小数量测试，验证核心功能可行性）</p>
                    <p>● 2024年3月27日（核心功能基本开发完毕）</p>
                    <p>● 2024年4月22日（项目首次正式上线，但是情况不太乐观）</p>
                    <p>● 2024年4月23日至今（核心功能二次开发期）</p>
                    <h2><b>项目背景</b></h2>
                    <p>本项目的构思起源于学校的选课系统。每逢选课期间，学校的网站就会变得非常卡。这时候选课会变得极其困难，一个网页从请求到响应的时间最长在半个小时左右，这样长时间的等待会使人极其不耐烦。导致很多同学都无法安心的完成选课。这时候会有很多“选课高手”，他们有所谓的“选课技巧”可以快速完成选课。</p></br>
                    <p>渐渐的，“选课”这个词演变成为“抢课”。此时抢课也成为了一个“小商机”。据我所知，绝大多数帮选课的也都是手动完成的，这意味着他们需要花费大量的时间在页面等待这方面，同时也意味着“帮忙”的数量会受到浏览器多开窗口个数的限制。随着浏览器多开窗口的增多，出错率也会增加。例如某个窗口对应的同学需要选择课程A，但是由于人类的粗心大意，将课程选择成了课程B……</p></br>                   
                    <p>这时我在想：<b>“为什么不开发出一个脚本，可以帮助我完成选课呢？”</b>——最早起源于作者大一上学期（2022年）。</p></br>                   
                    <p>为此本项目应运而生。</p>
                    <h2><b>模块介绍</b></h2>
                    <p><b>Snatcher</b>：项目核心模块，通过爬虫程序来完成选课功能。</p>
                    <p><b>前端</b>：给用户提供一个可操作的选课界面。</p>
                    <p><b>后端</b>：为客户端提供对应服务与数据接口。</p>
                    <p><b>后台管理系统</b>：用于监控选课任务与管理整个系统的数据。</p>
                    <h2><b>技术栈</b></h2>
                    <p>1、后端使用<code>FastAPI</code>为客户端提供一个统一的接口服务。</p>
                    <p>2、前端使用<code>Vue3 + Element-Plus</code>开发，拟态化简约风格设计。</p>
                    <p>3、Snatcher模块使用了基于<code>asyncio</code>的爬虫程序，通过使用<code>Celery + RabbitMQ</code>实现了异步定时多任务。</p>
                    <p>4、通过<code>面向对象程序设计</code>的抽象与封装，开发出了通用的<code>CourseSelector</code>类。</p>
                    <p>5、使用<code>MySQL</code>作为项目的后端存储。保存了课程信息与用户信息等基本数据。</p>
                    <p>6、使用<code>Redis</code>作为项目的缓存后端。实现了实时的日志记录与选课具体流程。</p>
                    <p>7、通过<code>JWT</code>实现了后台管理系统的权限认证与登录功能。</p>
                    <p>8、后台管理系统通过使用<code>WebSocket</code>实现了实时的选课任务监控。</p>
                    <p>9、使用<code>Python</code>的<code>smtplib</code>库二次封装了选课成功的邮件发送功能。</p>
                    <p>10、前端通过<code>Nginx</code>挂载在云服务器中，后端通过<code>内网穿透</code>向外提供选课服务，以适应不同局域网的访问。</p>
                    <h2><b>项目预览</b></h2>
                    <ul>
                        <li><img src="/images/snatcher-1.png" alt="snatcher-1.png"></li>
                        <li><img src="/images/snatcher-2.png" alt="snatcher-2.png"></li>
                        <li><img src="/images/snatcher-3.png" alt="snatcher-3.png"></li>
                    </ul>`
            },
            {
                name: "湾大人工智能引航计划选课系统",
                text: "一个为了解决老师分班难题的选课系统，解决了2000多个学生的排课问题。",
                nb: [
                    "Django", "Django-REST-Framework", "Vue2", "MySQL", "Redis", "Nginx"
                ],
                url: "//guideplan.rainbow.hi.cn",
                source: "https://gitee.com/kill-my-teammates-first/guide-plan",
                img: "./images/guideplan.jpg",
                content: `<h2><b>项目类型</b></h2>
                <p>基于 Redis 实现分布式锁的选课系统。</p>
                <h2><b>开发周期</b></h2>
                <p>● 2023年9月9日 – 2023年9月16日（基本功能开发完成）</p>
                <p>● 2023年9月16日（项目首次上线）</p>
                <p>● 2023年10月 – 2023年11月底（二次迭代开发期）</p>
                <p>● 2023年11月19日（迭代完毕，第二次上线）</p>
                <h2><b>项目背景</b></h2>
                <p>项目开发的初心是为了简化老师的排课工作。因为在2000多个学生中，每个学生的课表层出不穷，人工进行排课的难度可想而知。因此<b>以课程为常量，让学生自己在系统选择合适的时间段进行上课</b>，这样就把课程冲突的问题交给学生自己处理，老师只需要拿到选课的名单即可。这样可以极大程度上降低了排课的工作量。</p>
                <h2><b>模块介绍</b></h2>
                <p><b>用户模块</b>：实现每个学生的登录功能。</p>
                <p><b>选课模块</b>：实现基本的选课与退课功能。</p>
                <p><b>后台管理模块</b>：实现对学生与课程的管理。</p>
                <h2><b>技术栈</b></h2>
                <p>1、由于项目紧需，因此使用了<code>Django + Django-REST-Framework</code>的后端框架，达到了快速开发的目的。</p>
                <p>2、后端实现了基于<code>Redis</code>的分布式锁，保证了选课数据的一致性。</p>
                <p>3、后端使用<code>Celery</code>来完成邮件发送的耗时任务。</p>
                <p>4、后台管理系统通过使用<code>Python</code>来操作<code>Excel</code>，进而将学生的选课信息导出。</p>
                <p>5、前端使用<code>Vue2 + ElementUI</code>以至于更加快速地搭建了前端界面。</p>
                <p>6、在部署方面，使用<code>uWSGI + Nginx</code>的方式部署在云服务器中。</p>
                <h2><b>项目预览</b></h2>
                <ul>
                    <li><img src="/images/snatcher-1.png" alt="snatcher-1.png"></li>
                    <li><img src="/images/snatcher-2.png" alt="snatcher-2.png"></li>
                    <li><img src="/images/snatcher-3.png" alt="snatcher-3.png"></li>
                </ul>`
            },
            {
                name: "家电之选",
                text: "一个专门出售家电的在线购物商城。",
                nb: [
                    "Django", "Vue2", "MySQL", "Redis", "Nginx", "FastDFS"
                ],
                url: "//jiadian.rainbow.hi.cn",
                source: "https://gitee.com/kill-my-teammates-first/home_appliances",
                img: "./images/jiadian.svg",
                content: `<h2><b>项目类型</b></h2>
                <p>用于学习的项目。也是我第一个独立完成的Web应用。</p>
                <h2><b>开发周期</b></h2>
                <p>● 2023年7月15日（项目完成时间）</p>
                <p>● 2023年7月16日 - 2023年9月3日（功能迭代期）</p>
                <h2><b>项目背景</b></h2>
                <p>该项目源于《拜客商城系统》，原项目采用 DRF(djangorestframework) 框架开发，而本项目完全使用 Django 原生框架开发，后端逻辑与原项目逻辑完全不一样，充分利用 Python 面向对象编程，逻辑清晰，语法简洁。前端采用 Vue2 框架，减少对DOM元素的操作。后端采用 Django-MTV 设计模式，符合传统网站开发规范，适合中等偏下级别的程序员学习和开发。</p>
                <h2><b>模块介绍</b></h2>
                <p><b>用户模块</b>：用户的登录、注册、用户中心、用户余额、用户收货地址、用户历史订单、用户订单详情、更换头像。</p>
                <p><b>商品模块</b>：商品首页展示、商品详情、商品列表、商品搜索、商品评论等。</p>
                <p><b>购物车模块</b>：购物车的增删改查。</p>
                <p><b>订单模块</b>：订单详情、订单支付、成功支付、订单评价。</p>
                <h2><b>技术栈</b></h2>
                <p>1、使用<code>Django</code>作为后端框架。</p>
                <p>2、使用<code>MySQL</code>作为后端数据库。</p>
                <p>3、以<code>Redis</code>作为项目的缓存后端，存储用户购物车、商品首页等数据。</p>
                <p>4、使用<code>MySQL</code>的事务与<code>悲观锁</code>，保证用户提交订单数据的一致性。</p>
                <p>5、调用支付宝沙箱接口，模拟用户支付。</p>
                <p>6、使用<code>FastDFS</code>来存储图片，以达到数据海量存储的目的。</p>
                <h2><b>项目预览</b></h2>
                <ul>
                    <li><img src="/images/jiadian1.png" alt="jiadian1.png"></li>
                    <li><img src="/images/jiadian2.png" alt="jiadian2.png"></li>
                    <li><img src="/images/jiadian3.png" alt="jiadian3.png"></li>
                    <li><img src="/images/jiadian4.png" alt="jiadian4.png"></li>
                    <li><img src="/images/jiadian5.png" alt="jiadian5.png"></li>
                    <li><img src="/images/jiadian6.png" alt="jiadian6.png"></li>
                </ul>`
            },
            {
                name: "小说驿站",
                text: "一个独立开发的小说网站。",
                nb: ["Django", "JQuery", "MySQL", "Redis"],
                url: "//novelstation.rainbow.hi.cn/",
                source: "https://gitee.com/kill-my-teammates-first/novael-station",
                img: "./images/novelstation.svg",
                content: `<h2><b>项目类型</b></h2>
                <p>该项目的开发是为了<b>巩固 Django 所学知识</b>并提高自己<b>对业务逻辑的理解</b>和<b>独立解决问题的能力</b>。</p>
                <h2><b>项目完成时间</b></h2>
                <p>2023年7月26日</p>
                <h2><b>模块介绍</b></h2>
                <p><b>用户模块</b>：用户注册、用户登录、用户评论、用户中心、用户信息的增删改查。</p>
                <p><b>小说模块</b>：首页、小说详情页、小说列表页、小说阅读页、小说评论页。</p>
                <p><b>消息和评论模块</b>：用户注册成功消息、用户评论消息。</p>
                <h2><b>技术栈</b></h2>
                <p><code>Django、JQuery、MySQL、Redis</code></p>
                <h2><b>项目预览</b></h2>
                <ul>
                    <li><img src="/images/novel1.png" alt="novel1"></li>
                    <li><img src="/images/novel2.png" alt="novel2"></li>
                    <li><img src="/images/novel3.png" alt="novel3"></li>
                    <li><img src="/images/novel4.png" alt="novel4"></li>
                    <li><img src="/images/novel5.png" alt="novel5"></li>
                    <li><img src="/images/novel6.png" alt="novel6"></li>
                    <li><img src="/images/novel7.png" alt="novel7"></li>
                    <li><img src="/images/novel8.png" alt="novel8"></li>
                </ul>`,
            },
            {
                name: "天天生鲜",
                text: "一个用于学习和熟悉整个Web开发流程的项目。",
                nb: ["Django", "JQuery", "MySQL", "Redis"],
                url: "//dailyfresh.rainbow.hi.cn",
                source: "https://gitee.com/kill-my-teammates-first/fresh_everyday",
                img: "./images/dailyfresh.png",
                content: `<h2><b>项目类型</b></h2>
                <p>用于学习Django的项目。</p>
                <h2><b>项目完成时间</b></h2>
                <p>2023年7月3日</p>
                <h2><b>模块介绍</b></h2>
                <p><b>用户模块</b>：用户的登录、注册、用户中心、用户收货地址、用户历史订单。</p>
                <p><b>商品模块</b>：商品首页展示、商品详情、商品列表、商品搜索。</p>
                <p><b>购物车模块</b>：购物车的增删改查。</p>
                <p><b>订单模块</b>：提交订单。</p>
                <h2><b>技术栈</b></h2>
                <p><code>Django、JQuery、MySQL、Redis</code></p>
                <h2><b>项目预览</b></h2>
                <ul>
                    <li><img src="/images/fresh1.png" alt="fresh1"></li>
                    <li><img src="/images/fresh2.png" alt="fresh2"></li>
                    <li><img src="/images/fresh3.png" alt="fresh3"></li>
                    <li><img src="/images/fresh4.png" alt="fresh4"></li>
                    <li><img src="/images/fresh5.png" alt="fresh5"></li>
                </ul>`,
            },
            {
                name: "我的音乐",
                text: "第一个Web应用。",
                nb: ["Django", "MySQL"],
                url: "//mymusic.rainbow.hi.cn",
                source: "https://gitee.com/kill-my-teammates-first/my-music",
                img: "./images/mymusic.png",
                content: `<h2><b>项目类型</b></h2>
                <p>用于学习的项目。</p>
                <h2><b>项目完成时间</b></h2>
                <p>2023年5月24日</p>
                <h2>模块介绍</h2>
                <p><code>用户模块</code>：用户注册、登录、用户中心。</p>
                <p><code>音乐模块</code>：首页、音乐排行页、音乐播放页、音乐评论页。</p>
                <h2><b>技术栈</b></h2>
                <p><code>Django、MySQL</code></p>
                <h2><b>项目预览</b></h2>
                <ul>
                    <li><img src="/images/music1.png" alt="music1"></li>
                    <li><img src="/images/music2.png" alt="music2"></li>
                    <li><img src="/images/music3.png" alt="music3"></li>
                    <li><img src="/images/music4.png" alt="music4"></li>
                    <li><img src="/images/music5.png" alt="music5"></li>
                    <li><img src="/images/music6.png" alt="music6"></li>
                    <li><img src="/images/music7.png" alt="music7"></li>
                </ul>`,
            },
        ],
        listLoadMore: "项目详细介绍",
        loadMore: {
            text: "继续浏览",
            class: "lovexhj4"
        }
    },
    contact: {
        title: "联系我",
        list: [
            {
                name: "Gitee主页",
                link: "https://gitee.com/kill-my-teammates-first"
            },
            {
                name: "邮箱",
                context: "1834763300@qq.com"
            },
            {
                name: "QQ",
                context: "1834763300"
            },
            {
                name: "微信",
                context: "Rainbow5921666"
            }
        ]
    }
}