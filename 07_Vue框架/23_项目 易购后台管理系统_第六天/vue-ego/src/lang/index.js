import Vue from 'vue'
import VueI18n from 'vue-i18n'


import enLocale from 'element-ui/lib/locale/lang/en'   //英文
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'  //中文
import ElementLocale from 'element-ui/lib/locale'


import en  from  './en'


//安装
Vue.use(VueI18n)


// 3、准备翻译的语言环境信息
const messages = {
    // 英文
    en: {
        ...en,
        ...enLocale,  //英文
    },
    // 中文
    zh: {
        // 菜单
        menu: {
            home: '首页',
            goods: '商品管理',
            goodsList: '商品列表',
            goodsAdd: '商品添加',
            params: '参数管理',
            order: '订单管理',
            user: '用户管理'
        },
        // 内容
        content: {
            edit: '编辑'
        },
        ...zhLocale 
    }
}


const i18n = new VueI18n({
    locale: 'en',
    messages: messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

// 导出
export default  i18n;