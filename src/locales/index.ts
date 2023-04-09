
import { createI18n } from 'vue-i18n'
import pinia from '../store/index'
import { useTagsStore } from '../store/tags'
const langStore = useTagsStore(pinia)
export default createI18n({
    // legacy: false,
    locale: langStore.langVal||'zh', // set locale
    fallbackLocale: 'zh', // set fallback locale
    // messages,
})
