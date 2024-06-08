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
            content: "<span></span>我叫<b>田琪扬</b>，今年19岁，是岳阳职业技术学院的一名大二在读生，所学专业是<b>软件技术</b>；<br /><span></span>我个人对于网站开发我有着<b>浓厚的兴趣</b>，喜欢用学习到的知识去设计与编写一些独特的网站，毕竟兴趣才是我最好的老师。<br /><span></span>曾在<b>WEB省赛荣获三等奖</b>，获得过<b>国家励志奖学金</b>，在学校中也获得过<b>优秀青年志愿者</b>，<b>学习之星称号</b>，<b>优秀班委</b>等荣誉。"
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
                text: "通过爬虫程序快速完成校园网的选课。",
                nb: [
                    "FastAPI", "Vue3", "Celery", "MySQL", "Redis", "RabbitMQ", "Nginx"
                ],
                url: "//snatcher.rainbow.hi.cn",
                source: "https://gitee.com/kill-my-teammates-first/select_course",
                img: "./images/snatcher.png",
                content: `<h2>项目类型</h2>
                    <p>拥有与用户交互界面的爬虫系统。</p>
                    <h2>开发周期</h2>
                    <p>2023年10月24日 – 至今</p>
                    <h2>项目背景</h2>
                    <p>本项目的构思起源于学校的选课系统。每逢选课期间，学校的网站就会变得非常卡。这时候选课会变得极其困难，一个网页从请求到响应的时间最长在半个小时左右，这样长时间的等待会使人极其不耐烦。导致很多同学都无法安心的完成选课。这时候会有很多“选课高手”，他们有所谓的“选课技巧”可以快速完成选课。</p>
                    </br>
                    <p>渐渐的，“选课”这个词演变成为“抢课”。此时抢课也成为了一个“小商机”。据我所知，绝大多数帮选课的也都是手动完成的，这意味着他们需要花费大量的时间在页面等待这方面，同时也意味着“帮忙”的数量会受到浏览器多开窗口个数的限制。随着浏览器多开窗口的增多，出错率也会增加。例如某个窗口对应的同学需要选择课程A，但是由于人类的粗心大意，将课程选择成了课程B……</p>
                    </br>
                    <p>这时我在想：<b>“为什么不开发出一个脚本，可以帮助我完成选课呢？”</b>——最早起源于作者大一上学期（2022年）。</p>
                    </br>
                    <p>为此本项目应运而生。</p>
                    <h2>模块介绍</h2>
                    <p><b>Snatcher</b>：项目核心模块，通过<code>异步编程 + Celery + RabbitMQ</code>实现的爬虫程序来完成选课功能。</p>
                    <p><b>前端</b>：通过<code>Vue3 + Element-Plus</code>给用户提供一个可操作的选课界面。</p>
                    <p><b>后端</b>：通过<code>FastAPI</code>框架为客户端提供对应服务与数据接口。</p>
                    <p><b>部署</b>：前端通过<code>Nginx</code>挂载在服务器中，后端通过 内网穿透 将选课服务向外提供，以适应不同局域网的访问。</p>
                    <h2>项目技术</h2>
                    <p>1、前端采用 Vue + ElementUI 编写，拟态化简约风格设计；</p>
                    <p>2、后端采用 .NET Core 编写 RESTFul API 接口，与前端进行数据交互；</p>
                    <p>3、验证信息等数据在Redis进行缓存，分担了服务器的压力；</p>
                    <p>4、前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                    <p>5、吐槽文章采用瀑布流布局分页展示，可通过加载更多每次加载更多吐槽；</p>
                    <p>6、文章发布采用富文本编辑框实现，支持上传图片视频，emoji 表情等常用功能；</p>
                    <p>7、前端请求统一采用自己封装的Axios与后端交互；</p>
                    <p>8、使用 Echarts 完成后台数据可视化展示以及管理员的全站信息可视化展示；</p>
                    <p>9、后端采用 JWT 验证用户登录状态，Token等信息存储在Redis进行管理；</p>
                    <p>10、后端有专门的过滤器来防止XSS，SQL注入等攻击；</p>
                    <p>11、后端配置了允许任何 Origin 解决了 CROS 跨域问题；</p>
                    <p>12、短信验证码采用阿里云短信服务，配置对应的SDK来实现发送操作；验证码的临时数据则是存储在Redis中暂存，当验证码被使用或者超过三分钟则自动销毁；</p>
                    <p>13、图片验证码由后端随机生成字符串并且绘制图案，然后以Base64格式返回图片到前端进行显示，验证码缓存数据由Redis进行存储，验证成功或超时三分钟则自动销毁；</p>
                    <p>14、使用 .NET Core MailMessage 实现了邮件通知功能；</p>
                    <h2>项目预览</h2>
                    <ul>
                        <li><img src="/images/tucao1.png" alt="1"></li>
                        <li><img src="/images/tucao2.png"></li>
                        <li><img src="/images/tucao3.png"></li>
                        <li><img src="/images/tucao4.png"></li>
                    </ul>
                    <h2>项目职责</h2>
                    <p>1、数据库设计，模块设计；</p>
                    <p>2、全栈开发；</p>
                    <p>3、修复测试人员发现的BUG；</p>`
            },
            {
                name: "小黑屋商城",
                text: "类似于淘宝，实现了电商该有的功能",
                nb: [
                    "Vue", "ElementUI", "MinitUI", "Redis", "SSM", "JAVA", "Mysql"
                ],
                url: "https://gitee.com/lu_chengwei/pc/",
                source: "https://gitee.com/lu_chengwei/pc/",
                img: "./images/bg.jpg",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2020年11月2日 – 2020年12月1日，3人/29天</p>
                <h2>开发工具</h2>
                <p>IDEA、Visual Code、MySQL、Redis、Git、Postman</p>
                <h2>项目背景</h2>
                <p>小黑屋商城是一个综合性的B2C平台，类似京东商城、天猫商城。会员可以在商城浏览商品、下订单，以及参加各种活动。管理员、运营可以在平台后台管理系统中管理商品、订单、会员等。</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登陆注册、找回密码、验证码；</p>
                <p>2、	首页：轮播图热点展示、商品分类展示、商品展示；</p>
                <p>3、	商品详情：图片轮流展示、图片放大镜、商品信息展示、打折与原价展示、添加购物车与购买、评论分类展示、二维码分享、热销展示；</p>
                <p>4、	购物车：购物车商品展示、数量修改、商品类型修改、批量管理与购买、删除购物车；</p>
                <p>5、	支付：充值余额、支付宝支付、支付成功/失败展示；</p>
                <p>6、	用户：个人信息管理、地址选择、订单管理、购物车管理、余额管理；</p>
                <h2>项目技术</h2>
                <p>1.	前端分为 PC 与 Mobile 两个客户端，基于 Vue、ElementUI、Mint UI 编写；</p>
                <p>2.	后端采用 Java、SSM 编写 RESTFul API 风格接口；</p>
                <p>3.	前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                <p>4.	图片验证码由后端生成返回Base64并在前端展示，手机验证码则为阿里云短信服务，验证缓存统一放在Redis进行暂存；</p>
                <p>5.	二维码生成采用 QRCode 根据链接进行生成并压缩；</p>
                <p>6.	充值系统基于支付宝沙箱程序模拟真实的支付宝支付验证付款等；</p>
                <p>7.	登录验证采用 JWT 授权，请求需要登录的接口需要提交 Token 才能通过，否则登陆过期；</p>
                <p>8.	Mobile 端采用瀑布流布局来展示商品；</p>
                <h2>项目预览</h2>
                <p>暂无</p>
                <h2>项目职责</h2>
                <p>1、前端功能开发、页面设计；</p>
                <p>2、支付宝支付对接；</p>
                <p>3、Debug测试并修复；</p>`,
            },
            {
                name: "小次郎点餐",
                text: "点餐软件，拥有管理后台与客户界面",
                nb: [
                    "Winform", "SQLServer", "C#"
                ],
                url: "https://gitee.com/n0ts/CSharpOrderFood",
                source: "https://gitee.com/lu_chengwei/pc/",
                img: "./images/xcl1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2021年4月2日 – 2021年5月5日，2人/33天</p>
                <h2>开发工具</h2>
                <p>Visual Studio、SQLServer、Git</p>
                <h2>项目背景</h2>
                <p>本项目是为了满足巨大的餐饮市场中人们对快捷点餐的需求。我们的产品具有的高效、快捷、便利的特点将会为我们带来巨大的市场，我们的产品开发初期主要服务于餐饮行业，后续开发可涉及更广泛的娱乐、生活领域，是一款具备广阔市场前景的应用！</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登录注册、找回密码、密保、验证码；</p>
                <p>2、	客户端：美食分类、购物车、支付充值、订单操作、地址管理、个人信息修改、密码修改、数据可视化；</p>
                <p>3、	服务端：订单管理、美食与分类管理、上下架操作、美食图片上传、用户管理、数据可视化；</p>
                <h2>项目技术</h2>
                <p>1、	使用 Winform 绘制软件界面，C# 便携后台代码；</p>
                <p>2、	使用 SQLServer 作为数据存储，便携 DBHelper 类与数据库进行交互；</p>
                <p>3、	图片验证码使用 Winform GDI+ 绘图生成随机验证码并显示；</p>
                <p>4、	所有密码采用 MD5 加密方式进行存储；</p>
                <p>5、	对所有的前台数据进行XSS注入或为空验证，防止恶意代码或空值造成程序报错；</p>
                <p>6、	许多位置进行了 Try Catch 异常捕获，如发生断网等情况软件会提醒客户而不是报错；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xcl1.png"></li>
                    <li><img src="./images/xcl2.png"></li>
                    <li><img src="./images/xcl3.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、参与原型图设计与 UI 设计，辅助市场调研；</p>
                <p>2、负责数据库设计，模块设计；</p>
                <p>3、客户端与服务端的编程开发；</p>
                <p>4、修复测试人员发现的BUG；</p>`,
            },
            {
                name: "记仇小本本",
                text: "简约到极致的日记记录",
                nb: [
                    "Gitee Issues", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://heng.n0ts.top/",
                source: "https://gitee.com/lu_chengwei/pc/",
                img: "./images/heng1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/2天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>单纯的记仇小本本，可用于记录日常生活</p>
                <h2>模块介绍</h2>
                <p>1、	查看记仇；</p>
                <p>2、	发布记仇；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用Vue + ElementUI制作；</p>
                <p>2、	数据存储利用了Gitee Issues进行存储；</p>
                <p>3、	CSS 3D样式模拟书本翻页；</p>
                <p>4、	CSS 绘制书本样式；</p>
                <p>5、	懒加载记仇数据，类似于翻页；</p>
                <p>6、	富文本支持，表情照片视频支持；</p>
                <p>7、	全端响应式自适应；</p>
                <p>8、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/heng1.png"></li>
                    <li><img src="./images/heng2.png"></li>
                    <li><img src="./images/heng3.png"></li>
                </ul>`,
            },
            {
                name: "IceCreem搜索导航",
                text: "好看的导航搜索页",
                nb: [
                    "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://n0ts.gitee.io/icecreamsearch/",
                source: "https://gitee.com/lu_chengwei/pc/",
                img: "./images/so.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/2天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>团队需要，新年新官网</p>
                <h2>模块介绍</h2>
                <p>1、	搜索功能；</p>
                <p>2、	搜索引擎切换与添加；</p>
                <p>3、	各类实用网站导航与分类；</p>
                <p>4、	配置本地存储；</p>
                <p>5、	背景图获取 bing 每日壁纸或自定义壁纸；</p>
                <p>6、	搜索结果数量自定义；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用 Vue + ElementUI 制作，后端采用 Node + Mysql 制作；</p>
                <p>2、	百度搜索结果实时回调；</p>
                <p>3、	bing 每日壁纸回调；</p>
                <p>4、	本地配置存储；</p>
                <p>5、	实用网站分类预览；</p>
                <p>6、	全端响应式自适应；</p>
                <p>7、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <p>暂无</p>`,
            },
            {
                name: "极客之眼官网",
                text: "GeekEyes极客之眼官方网站",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://www.geekeyes.cn/",
                source: "https://gitee.com/lu_chengwei/pc/",
                img: "./images/geek1.png",
                content: `<h2>项目类型</h2>
                <p>官网</p>
                <h2>开发周期</h2>
                <p>1人/8天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>团队需要，新年新官网</p>
                <h2>模块介绍</h2>
                <p>1、	首页轮播图，介绍；</p>
                <p>2、	关于我们；</p>
                <p>3、	公益活动；</p>
                <p>4、	捐赠人员；</p>
                <p>5、	团队成员；</p>
                <p>6、	加入我们；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用Vue制作；</p>
                <p>2、	CSS 中国风科技感设计；</p>
                <p>3、	CSS 按钮赛博朋克电磁风格；</p>
                <p>4、	CSS 推拉门图片风格；</p>
                <p>5、	全端响应式自适应；</p>
                <p>6、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/geek1.png"></li>
                    <li><img src="./images/geek2.png"></li>
                    <li><img src="./images/geek3.png"></li>
                    <li><img src="./images/geek4.png"></li>
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
                context: "https://gitee.com/kill-my-teammates-first"
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