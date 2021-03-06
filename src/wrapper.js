// Import vue components
import VuesenceBook from './components/VuesenceBook.vue';
import ArticleContent from './components/ArticleContent.vue';
import NavigationItem from './components/NavigationItem.vue';
import NavigationItemContent from './components/NavigationItemContent.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('vuesence-book', VuesenceBook);
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default VuesenceBook;

export {
    ArticleContent,
    NavigationItem,
	NavigationItemContent,
}