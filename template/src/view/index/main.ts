import '@/assets/js/path'; //设置__webpack_public_path__
import '@/assets/css/reset.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { Http } from 'nat-plus';

const app = createApp(App);
app
  .use(Http, {
    interceptorSuccess: (res: any) => {
      console.log(res);
    },
  })
  .use(store)
  .use(router)
  .mount('#app');
