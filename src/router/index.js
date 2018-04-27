import Vue from 'vue'
import Router from 'vue-router'

// const view = () => import('@/layout/view')
// 一级页面
const login = () => import('@/page/login/login')                                    // 登录页
const tongzhi = () => import('@/page/index/children/setting/tongzhi')               // 通知页
const preview = () => import('@/page/preview/preview')                              // 预览页
const index = () => import('@/page/index/index')                                    // 首页
// 二级页面
const home = () => import('@/page/index/children/home/home')                        // 主页
const sixin = () => import('@/page/index/children/home/sixin')                      // 私信
const gaikuo = () => import('@/page/index/children/home/fensi/gaikuo')              // 粉丝 -概括
const liebiao = () => import('@/page/index/children/home/fensi/liebiao')                // 粉丝-列表
const huaxiang = () => import('@/page/index/children/home/fensi/huaxiang')              // 粉丝-画像

const shuju_gaikuo = () => import('@/page/index/children/home/shuju/gaikuo')        // 分析-概括

// manage tuwen
// 图文模块
const tuwen = () => import('@/page/index/children/manage/tuwen/index')              // 主页
const tuwen_addpic = () => import('@/page/index/children/manage/tuwen/addpic')      // 发表图集
const publish = () => import('@/page/index/children/publish/publish')               // 发表文章及编辑页
const tuwen_pinglun = () => import('@/page/index/children/manage/tuwen/pinglun')    // 评论

// manage shipin
// 视频模块
const shipin = () => import('@/page/index/children/manage/shipin/index')            // 主页
const addvideo = () => import('@/page/index/children/manage/shipin/addvideo')       // 发表视频
const shipin_fenxi = () => import('@/page/index/children/manage/shipin/shipin_fenxi') // 内容分析

// manage wenda
// 问答模块
const wenda = () => import('@/page/index/children/manage/wenda/index')              // 主页
const wenda_fenxi = () => import('@/page/index/children/manage/wenda/wenda_fenxi')  // 内容分析
// const addwenda = () => import('@/page/index/children/manage/wenda/addwenda')       // 发表问答

// const articles = () => import('@/page/index/children/manage/articles/articles')     // 我的作品
const own = () => import('@/page/index/children/manage/articles/children/own')
const comment = () => import('@/page/index/children/manage/comment/comment')        // 评论管理
const newest = () => import('@/page/index/children/manage/comment/children/newest')
const all = () => import('@/page/index/children/manage/comment/children/all')
const material = () => import('@/page/index/children/manage/material/material')     // 素材管理
const pic = () => import('@/page/index/children/manage/material/children/pic')

// setting
// const setting = () => import('@/page/index/children/setting/setting')               // 设置
const quanxie = () => import('@/page/index/children/setting/quanxie')               // 帐号权限
const zhanghao = () => import('@/page/index/children/setting/zhanghao')             // 帐号权限

Vue.use(Router)

/*
* @params
* icon: ''                      菜单图标（可以用element-ui的icon & font-awesome）
* title: ''                     菜单标题
* open: true                    是否展开菜单（有子路由才生效）
* hidden: false                 是否渲染菜单
* padding: true,                是否需要前空
* @meta
* login: false                  是否需要登录
* keep: false                   是否需要缓存（路由出口使用view组件才生效）
*/

export const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        name: 'home',
        path: '/index',
        redirect: '/index/home',
        meta: { login: true },
        component: index,
        children: [
            {
                name: 'home',
                path: 'home',
                title: '主页',
                hidden: true,
                icon: 'el-icon-fa-home',
                component: home
            },
            {
              name: 'home/sixin',
              path: 'home/sixin',
              title: '私信',
              icon: 'el-icon-fa-comments',
              component: sixin
            },
            {
              name: 'home/pinglun',
              path: 'home/pinglun',
              title: '评论管理',
              icon: 'el-icon-fa-calculator',
              open: true,
              component: comment,
              redirect: '/index/home/pinglun/newest',
              children: [
                {
                  name: 'home/pinglun/newest',
                  path: 'newest',
                  title: '最新评论',
                  component: newest
                },
                {
                  name: 'home/pinglun/all_news',
                  path: 'all_news',
                  title: '全部评论',
                  component: all,
                  redirect: '/index/home/pinglun/all_news/tuwen_pinglun',
                  children: [
                    {
                      name: 'home/pinglun/all_news/tuwen_pinglun',
                      path: 'tuwen_pinglun',
                      title: '图文评论',
                      hidden: true,
                      component: all
                    },
                    {
                      name: 'home/pinglun/all_news/shipin_pinglun',
                      path: 'shipin_pinglun',
                      title: '视频评论',
                      hidden: true,
                      component: all
                    },
                    {
                      name: 'home/pinglun/all_news/shequ_pinglun',
                      path: 'shequ_pinglun',
                      title: '社区评论',
                      hidden: true,
                      component: all
                    }
                  ]
                }
              ]
            },
            {
              name: 'home/fensi',
              path: 'home/fensi',
              title: '粉丝管理',
              open: true,
              icon: 'el-icon-fa-user-o',
              component: comment,
              redirect: '/index/home/fensi/gaikuo',
              children: [
                {
                  name: 'home/fensi/gaikuo',
                  path: 'gaikuo',
                  title: '粉丝概括',
                  component: gaikuo
                },
                {
                  name: 'home/fensi/huaxiang',
                  path: 'huaxiang',
                  title: '粉丝画像',
                  component: huaxiang
                },
                {
                  name: 'home/fensi/liebiao',
                  path: 'liebiao',
                  title: '粉丝列表',
                  component: liebiao
                }
                ]
            },
            {
              name: 'home/shuju',
              path: 'home/shuju',
              title: '数据分析',
              icon: 'el-icon-fa-bar-chart',
              component: comment,
              redirect: '/index/home/shuju/gaikuo',
              children: [
                {
                  name: 'home/shuju/gaikuo',
                  path: 'gaikuo',
                  title: '数据概括',
                  hidden: true,
                  component: shuju_gaikuo
                },
                {
                  name: 'home/fensi/huaxiang',
                  path: 'huaxiang',
                  title: '粉丝画像',
                  hidden: true,
                  component: huaxiang
                },
                {
                  name: 'home/fensi/liebiao',
                  path: 'liebiao',
                  title: '粉丝列表',
                  hidden: true,
                  component: liebiao
                }
              ]
            },
            {
              name: 'home/quanxie',
              path: 'home/quanxie',
              title: '帐号权限',
              icon: 'el-icon-fa-unlock-alt',
              component: quanxie
            },
            {
              name: 'home/zhanghao',
              path: 'home/zhanghao',
              title: '帐号信息',
              icon: 'el-icon-fa-cogs',
              component: zhanghao
            },
            {
              name: 'home/tongzhi',
              path: 'home/tongzhi',
              hidden: true,
              component: tongzhi
            }
        ]
    },
    {
        name: 'tuwen',
        path: '/index',
        redirect: '/index/tuwen/index',
        meta: { login: true },
        component: index,
        children: [
          {
            name: 'tuwen/index',
            path: 'tuwen/index',
            padding: true,
            title: '图文主页',
            component: tuwen
          },
          {
            name: 'tuwen/addText',
            path: 'tuwen/addText',
            padding: true,
            title: '发表文章',
            component: publish
          },
          {
            name: 'tuwen/addPic',
            padding: true,
            path: 'tuwen/addPic',
            title: '发表图集',
            component: tuwen_addpic
          },
          {
            name: 'tuwen/articles',
            path: 'tuwen/articles',
            title: '内容管理',
            padding: true,
            component: own
          },
          {
            name: 'tuwen/comment',
            path: 'tuwen/comment',
            title: '评论管理',
            padding: true,
            component: tuwen_pinglun
          },
          {
            name: 'tuwen/material',
            path: 'tuwen/material',
            title: '素材管理',
            padding: true,
            component: material,
            redirect: '/index/tuwen/material/pic',
            children: [
              {
                name: 'tuwen/material/pic',
                path: 'pic',
                title: '图片管理',
                hidden: true,
                component: pic
              }
            ]
          },
          {
            name: 'tuwen/fenxi',
            path: 'tuwen/fenxi',
            title: '内容分析',
            padding: true,
            component: shipin_fenxi
          }

        ]
    },
    {
      name: 'shipin',
      path: '/index',
      redirect: '/index/shipin/index',
      meta: { login: true },
      component: index,
      children: [
        {
          name: 'shipin/index',
          path: 'shipin/index',
          padding: true,
          title: '视频主页',
          component: shipin
        },
        {
          name: 'shipin/addVideo',
          path: 'shipin/addVideo',
          padding: true,
          title: '发表视频',
          component: addvideo
        },
        {
          name: 'shipin/articles',
          path: 'shipin/articles',
          title: '内容管理',
          padding: true,
          component: own
        },
        {
          name: 'shipin/comment',
          path: 'shipin/comment',
          title: '评论管理',
          padding: true,
          component: tuwen_pinglun
        },
        {
          name: 'shipin/fenxi',
          path: 'shipin/fenxi',
          title: '内容分析',
          padding: true,
          component: shipin_fenxi
        }
      ]
    },
    {
      name: 'wenda',
      path: '/index',
      redirect: '/index/wenda/index',
      meta: { login: true },
      component: index,
      children: [
        {
          name: 'wenda/index',
          path: 'wenda/index',
          padding: true,
          title: '问答主页',
          component: wenda
        },
        {
          name: 'wenda/addwenda',
          path: 'wenda/addwenda',
          padding: true,
          title: '发表问题',
          component: publish
        },
        {
          name: 'wenda/wendamy',
          path: 'wenda/wendamy',
          padding: true,
          title: '我的问答',
          component: own
        },
        {
          name: 'wenda/fenxi',
          path: 'wenda/fenxi',
          title: '问答数据',
          padding: true,
          component: wenda_fenxi
        }
      ]
    },
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        name: 'preview',
        path: '/preview_article',
        meta: { login: true },
        component: preview
    }
]

export default new Router({
    // mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            to.meta.position = savedPosition
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})

/*          框架原来废弃掉的组件
*,
            {
                name: 'publish',
                path: 'publish',
                title: '发表',
                icon: 'el-icon-fa-pencil',
                component: publish
            },
            {
                name: 'manage',
                path: 'manage',
                title: '管理',
                icon: 'el-icon-fa-cube',
                component: view,
                children: [
                    {
                        name: 'articles',
                        path: 'articles',
                        title: '内容管理',
                        component: articles,
                        redirect: '/index/manage/articles/own',
                        children: [
                            {
                                name: 'own',
                                path: 'own',
                                title: '我发表的',
                                hidden: true,
                                component: own
                            }
                        ]
                    },
                    {
                        name: 'comment',
                        path: 'comment',
                        title: '评论管理',
                        component: comment,
                        redirect: '/index/manage/comment/newest',
                        children: [
                            {
                                name: 'newest',
                                path: 'newest',
                                title: '最新评论',
                                hidden: true,
                                component: newest
                            },
                            {
                                name: 'all',
                                path: 'all',
                                title: '文章评论',
                                hidden: true,
                                component: all
                            }
                        ]
                    },
                    {
                        name: 'material',
                        path: 'material',
                        title: '素材管理',
                        component: material,
                        redirect: '/index/manage/material/pic',
                        children: [
                            {
                                name: 'pic',
                                path: 'pic',
                                title: '图片管理',
                                hidden: true,
                                component: pic
                            }
                        ]
                    }
                ]
            },
            {
                name: 'setting',
                path: 'setting',
                title: '设置',
                icon: 'el-icon-fa-cog',
                component: setting
            }
*
*
* */
