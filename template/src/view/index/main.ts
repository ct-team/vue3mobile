import '@/assets/js/path'; //设置__webpack_public_path__
import '@/assets/js/low-version'; //设置低版本兼容
import 'nat-plus/es/reset/reset.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { Http, AppBridge } from 'nat-plus';

const app = createApp(App);
app
  .use(Http, {
    interceptorSuccess: (res: any) => {
      console.log(res);
    },
  })
  .use(AppBridge)
  .use(store)
  .use(router)
  .mount('#app');
