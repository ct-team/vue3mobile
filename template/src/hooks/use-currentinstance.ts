//只能在setup中使用
import { ComponentInternalInstance, getCurrentInstance } from 'vue';
export default function currentInstance(): any {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;

  const globalProperties = appContext.config.globalProperties;

  return {
    globalProperties,
  };
}
