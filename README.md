# vue2-health

![image](https://img.shields.io/badge/vue-2.5.2-blue.svg)
![image](https://img.shields.io/badge/vue--router-3.0.1-blue.svg)
![image](https://img.shields.io/badge/vuex-3.0.1-blue.svg)
![image](https://img.shields.io/badge/element--ui-1.4.7-blue.svg)

#### 正在完善，敬请期待（100%）！
> 你的 "Star" 是我最大的动力！🌹

## 简介

vue2-health 是一个仿头条号的后台管理项目，它使用[vue2-blog](https://github.com/uncleLian/vue2-blog)基础模板快速搭建，涉及登录、管理文章等功能。

## 说明
> 如果此开源系列对你有帮助，你可以点右上角 "star"一下，以表支持，非常感谢！^_^ 🌹

> 或者您可以 "follow（关注）" 一下作者，我正在不断开源更多实用的项目

> 如有问题可以直接在 Issues 中提，或者加入我们下方Vue群更进一步地交流

##### 注：此系列只关注前端项目的实现，后端等知识不是此系列的范围，但会告知一二。

## 项目演示
#### [请戳这里](http://sdh.guochunhai.com)

## 功能
- [x] 全屏banner以及css3/svg动画
- [x] 登录/注销
- [x] 多级菜单
- [x] 菜单随导航变换
- [x] 自定义图片上传、草稿等
- [x] 视频、问答发表及相关模块样式
- [x] 管理文章（预览、编辑、撤回、删除等操作）
- [x] 错误拦截
- [x] ...

## 部分截图
<img src="https://github.com/getSpidd/vue2-fangtoutiaohao/raw/master/src/assets/img/effect1.png" width="900px" style="max-width: 100%;"/>

<img src="https://github.com/getSpidd/vue2-fangtoutiaohao/raw/master/src/assets/img/effect2.png" width="900px" style="max-width: 100%;"/>

<img src="https://github.com/getSpidd/vue2-fangtoutiaohao/raw/master/src/assets/img/effect3.png" width="900px" style="max-width: 100%;"/>


## 目录结构

```html
├── build
├── config
├── docs                                        	// 打包后的目录
├── screenshots                                 	// README.md资源文件夹
├── src
│   ├── api                                      	// 请求api
│   ├── assets                                    	// 资源
│   ├── components                                	// 组件
│   ├── layout                                    	// 布局
│   ├── page
│   │   ├── index                                 	// 首页
│   │   │   └── children
│   │   │       ├── count                       	// 统计
│   │   │       ├── home                        	// 主页
│   │   │       ├── manage                      	// 管理
│   │   │       │   ├── articles
│   │   │       │   ├── comment
│   │   │       │   └── material
│   │   │       ├── publish                     	// 发表页
│   │   │       └── setting                     	// 设置页
│   │   ├── login                              		// 登录页
│   │   └── preview                             	// 预览页
│   ├── router                                  	// 路由
│   ├── store                                   	// 全局状态
│   └── utils                                  	    // 工具
├── static
└── theme-chalk                         			// 自定义颜色主题
```

## 安装运行

```
# install dependencies
npm install

# serve with hot reload at localhost:8010
npm run dev

# build for production with minification
npm run build（File in the docs folder）
```

## 交流

原框架作者-小鑫

现作者-Spidd QQ：871310427


## License

[MIT](https://github.com/uncleLian/vue2-health/blob/master/LICENSE)

Copyright (c) 2018-present，uncleLian
