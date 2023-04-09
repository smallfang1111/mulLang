import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import { usePermissStore } from './store/permiss';
import 'element-plus/dist/index.css';
import './assets/css/icon.css'
import i18n from './locales/index';
import { useTagsStore } from './store/tags';

const tags = useTagsStore();
const app = createApp(App);
app.use(createPinia());
app.use(router);
interface langData {
    elementCode: string,
    itemCode: string,
    itemName: string,
    url: string
}
interface langObj {
    [propsName: string]: any
}
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
// 自定义权限指令
const permiss = usePermissStore();
app.directive('permiss', {
    mounted(el, binding) {
        if (!permiss.key.includes(String(binding.value))) {
            el['hidden'] = true;
        }
    },
});

// apiGetMultiLang().then(res => {
//     let dataArr = res.data.data
//     let langList: langObj = {};
//     let curLangObj: any = {}
//     let data = (dataArr || []).map((m: langData) => {
//         langList[m.itemCode] = {}
//         if (tags.langVal === m.itemCode) {
//             curLangObj = m
//         }
//         i18n.global.setLocaleMessage(m.itemCode, {})
//         return m
//     });
//     console.log(data,'处理前')
//     tags.setLangArr(data)
// })

app.use(i18n).mount('#app');
