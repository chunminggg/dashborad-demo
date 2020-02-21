import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cookie from 'js-cookie'

const localZh = require('@/plugins/i18n/zh')
const localEn = require('@/plugins/i18n/en')
Vue.use(VueI18n)
export const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    messages: {
      'zh-CN': localZh,   // 中文语言包
      'en-US': localEn,  // 英文语言包
    }
  })