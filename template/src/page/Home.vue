<template>
  <div class="home">
    <van-button @click="onTest" type="primary">gethttp</van-button>
    {{ http }}{{ title }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="msg" />
  </div>
</template>

<script lang="ts" setup>
import { ref, ComponentInternalInstance } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

import { testApi } from '@/api/index';
import { getCurrentInstance } from 'vue';

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const proxy = appContext.config.globalProperties;

const getmsg = () => {
  console.log(proxy.$nat);
};
let http = ref('');
getmsg();
const title = process.env.VUE_APP_TITLE;
function onTest() {
  testApi()
    .then((res: any) => {
      http.value = res.Data.AgentName;
    })
    .catch((res: any) => {
      console.log(res, 'error');
    });
}
</script>
