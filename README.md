# i18n

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# vuex-vue-i18n
## 在vue下的国际化解决方案demo
> 本方案采取了vuex+vue-i18n的方式，
* main.js 定义并配置i18n
``` js
    Vue.use(VueI18n)
    const messages = {
    'cn': require('./assets/lang/cn'),   // 中文语言包
    'en': require('./assets/lang/en')    // 英文语言包
    }
    const i18n = new VueI18n({
    locale: 'en',    // 语言标识
    messages
    })
```
* vuex store中定义全局的语言变量locale，及其修改方法setLocale
``` js
    export default new Vuex.Store({
    state: {
        locale: 'en'
    },
    mutations: {
        setLocale(state, str) {
        state.locale = str
        }
    }
    })
```
* app.vue 通过点击按钮触发语言变化，然后修改store中的locale
```html
    <button @click="langChangeHandle('en')">English</button>
    <button @click="langChangeHandle('cn')">中文</button>
```
``` js
    'langChangeHandle': function (lang) {
      this.$i18n.locale = lang
      this.$store.commit('setLocale', lang)
    }
```
* component,组件中通过computed将一些数据与国际化文案相绑定，例如swiper的option中的title等信息需要在data中定义的。
* locale作为全局语言变量，可以通过watch监听其变化实现一些响应式的操作以及作进一步处理作为参数等信息进行交互，降低代码耦合
``` js
  computed: {
    locale() {
      return this.$store.state.locale;
    },
    contentText() {
      return this.$t('message.contentText');
    }
  }
```

