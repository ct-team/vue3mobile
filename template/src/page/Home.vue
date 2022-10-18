<template>
  <div class="home">
    <van-button @click="onTest" type="primary">gethttp</van-button>
    {{ http }}{{ title }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="msg" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

import { testApi } from '@/api/index';

let http = ref('');

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
